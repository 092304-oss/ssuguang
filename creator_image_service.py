#!/usr/bin/env python3
"""Local static server plus image-generation API for the Suguang creator."""

from __future__ import annotations

import argparse
import base64
import json
import mimetypes
import os
from pathlib import Path
import re
import shutil
import subprocess
import sys
import threading
import time
import traceback
import urllib.error
import urllib.parse
import urllib.request
import uuid
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from typing import Any, Dict, Iterable, List, Optional, Tuple


ROOT = Path(__file__).resolve().parents[1]
OUTPUTS_DIR = ROOT / "outputs"
GENERATED_DIR = OUTPUTS_DIR / "assets" / "generated"
JOBS_DIR = ROOT / "work" / "creator-image-jobs"
PUBLISHED_GAMES_DIR = ROOT / "work" / "published-games"
DOWNLOADS_DIR = Path.home() / "Downloads"
IMAGEGEN_SCRIPT = Path.home() / ".codex-one" / "skills" / ".system" / "imagegen" / "scripts" / "image_gen.py"
OPENAI_DEFAULT_BASE_URL = "https://api.openai.com/v1"
OPENAI_DEFAULT_IMAGE_MODEL = "gpt-image-2"

PROVIDER_SCRIPTS = {
    "aiflow_gptimg2_new": DOWNLOADS_DIR / "submit_img_anime_gptimg2_new.py",
    "aiflow_jimeng": DOWNLOADS_DIR / "submit_img_anime_jimeng.py",
    "aiflow_jimeng50": DOWNLOADS_DIR / "submit_img_anime_jimeng50.py",
    "aiflow_nbpro": DOWNLOADS_DIR / "submit_img_anime_nbpro.py",
}

KNOWN_CHARACTER_REFERENCES = {
    "周叙": OUTPUTS_DIR / "assets" / "characters" / "highschool" / "zhou-xu-highschool.png",
    "沈栀": OUTPUTS_DIR / "assets" / "characters" / "highschool" / "shen-zhi-highschool.png",
    "陆眠": OUTPUTS_DIR / "assets" / "characters" / "highschool" / "lu-mian-highschool.png",
    "白祁": OUTPUTS_DIR / "assets" / "characters" / "highschool" / "bai-qi-uniform-image13-final.png",
    "张恒": OUTPUTS_DIR / "assets" / "characters" / "highschool" / "zhang-heng-highschool.png",
}

JOB_LOCK = threading.Lock()
GAME_LOCK = threading.Lock()
JOBS: Dict[str, Dict[str, Any]] = {}


class ProviderUnavailable(RuntimeError):
    """Raised when a requested generation provider is not available locally."""


def now_iso() -> str:
    return time.strftime("%Y-%m-%dT%H:%M:%S%z")


def slugify(value: str, fallback: str = "asset") -> str:
    clean = re.sub(r"[^A-Za-z0-9._-]+", "-", str(value or "").strip()).strip("-._")
    return (clean[:70] or fallback).lower()


def read_json_body(handler: SimpleHTTPRequestHandler) -> Dict[str, Any]:
    length = int(handler.headers.get("Content-Length") or "0")
    if length <= 0:
        return {}
    raw = handler.rfile.read(length)
    if not raw:
        return {}
    return json.loads(raw.decode("utf-8"))


def json_response(handler: SimpleHTTPRequestHandler, status: int, payload: Dict[str, Any]) -> None:
    raw = json.dumps(payload, ensure_ascii=False, indent=2).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Content-Length", str(len(raw)))
    handler.send_header("Cache-Control", "no-store")
    handler.end_headers()
    handler.wfile.write(raw)


def add_cors_headers(handler: SimpleHTTPRequestHandler) -> None:
    handler.send_header("Access-Control-Allow-Origin", "*")
    handler.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
    handler.send_header("Access-Control-Allow-Headers", "Content-Type")


def resolve_public_base_url(headers: Any) -> str:
    explicit = str(os.environ.get("PUBLIC_BASE_URL") or "").strip()
    if explicit:
        return explicit.rstrip("/")

    host = str(headers.get("X-Forwarded-Host") or headers.get("Host") or "127.0.0.1:4175").split(",")[0].strip()
    proto = str(headers.get("X-Forwarded-Proto") or "http").split(",")[0].strip().lower()
    if proto not in {"http", "https"}:
        proto = "http"
    return f"{proto}://{host}"


def resolve_static_path(url_path: str) -> Optional[Path]:
    path = urllib.parse.unquote(urllib.parse.urlparse(url_path).path or "/")
    if path in {"", "/"}:
        path = "/outputs/landing.html"
    if path == "/outputs":
        path = "/outputs/"
    if not path.startswith("/outputs/"):
        return None

    relative = path[len("/outputs/") :].lstrip("/")
    candidate = (OUTPUTS_DIR / relative).resolve()
    try:
        candidate.relative_to(OUTPUTS_DIR.resolve())
    except ValueError:
        return None
    return candidate


def job_path(job_id: str) -> Path:
    return JOBS_DIR / f"{slugify(job_id)}.json"


def save_job(job: Dict[str, Any]) -> None:
    JOBS_DIR.mkdir(parents=True, exist_ok=True)
    tmp = job_path(job["id"]).with_suffix(".json.tmp")
    tmp.write_text(json.dumps(job, ensure_ascii=False, indent=2), encoding="utf-8")
    tmp.replace(job_path(job["id"]))


def load_job(job_id: str) -> Optional[Dict[str, Any]]:
    with JOB_LOCK:
        if job_id in JOBS:
            return JOBS[job_id]
    path = job_path(job_id)
    if not path.exists():
        return None
    try:
        job = json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None
    with JOB_LOCK:
        JOBS[job_id] = job
    return job


def update_job(job: Dict[str, Any]) -> None:
    with JOB_LOCK:
        JOBS[job["id"]] = job
        save_job(job)


def published_game_path(game_id: str) -> Path:
    return PUBLISHED_GAMES_DIR / f"{slugify(game_id, fallback='game')}.json"


def save_published_game(game: Dict[str, Any]) -> Dict[str, Any]:
    if not isinstance(game, dict):
        raise ValueError("作品数据格式错误")
    saved = dict(game)
    game_id = str(saved.get("id") or f"sg-{uuid.uuid4().hex[:12]}")
    saved["id"] = game_id
    saved["updatedAt"] = saved.get("updatedAt") or now_iso()
    saved["createdAt"] = saved.get("createdAt") or saved["updatedAt"]

    PUBLISHED_GAMES_DIR.mkdir(parents=True, exist_ok=True)
    path = published_game_path(game_id)
    tmp = path.with_suffix(".json.tmp")
    raw = json.dumps(saved, ensure_ascii=False, indent=2).encode("utf-8")
    with GAME_LOCK:
        tmp.write_bytes(raw)
        tmp.replace(path)
    return saved


def load_published_game(game_id: str) -> Optional[Dict[str, Any]]:
    path = published_game_path(game_id)
    if not path.exists():
        return None
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except Exception:
        return None


def list_published_games(limit: int = 80, include_non_public: bool = False) -> List[Dict[str, Any]]:
    if not PUBLISHED_GAMES_DIR.exists():
        return []
    games: List[Dict[str, Any]] = []
    for path in PUBLISHED_GAMES_DIR.glob("*.json"):
        try:
            game = json.loads(path.read_text(encoding="utf-8"))
        except Exception:
            continue
        if not include_non_public and game.get("visibility") != "public":
            continue
        games.append(game)
    games.sort(key=lambda item: str(item.get("updatedAt") or item.get("createdAt") or ""), reverse=True)
    return games[: max(1, min(int(limit or 80), 200))]


def provider_health() -> Dict[str, Any]:
    bns_command = shutil.which("get_instance_by_service")
    openai_ready = bool(os.environ.get("OPENAI_API_KEY"))
    script_status = {
        provider_id: {
            "path": str(path),
            "exists": path.exists(),
        }
        for provider_id, path in PROVIDER_SCRIPTS.items()
    }
    return {
        "ok": True,
        "defaultProvider": "codexone_gpt_image_2" if openai_ready else "aiflow_gptimg2_new",
        "bnsCommand": bns_command or "",
        "bnsReady": bool(bns_command),
        "openaiReady": openai_ready,
        "openaiBaseUrl": str(os.environ.get("OPENAI_BASE_URL") or OPENAI_DEFAULT_BASE_URL),
        "openaiImageModel": str(os.environ.get("OPENAI_IMAGE_MODEL") or OPENAI_DEFAULT_IMAGE_MODEL),
        "imagegenScript": str(IMAGEGEN_SCRIPT),
        "generatedDir": str(GENERATED_DIR),
        "providers": [
            {
                "id": "codexone_gpt_image_2",
                "name": "GPT Image 2 / OpenAI-OneAPI 通道",
                "kind": "background+character",
                "status": "ready" if openai_ready else "blocked",
                "detail": "使用 OPENAI_API_KEY / OPENAI_BASE_URL 直连生成并保存 PNG" if openai_ready else "缺少 OPENAI_API_KEY",
            },
            {
                "id": "aiflow_gptimg2_new",
                "name": "submit_img_anime_gptimg2_new.py",
                "kind": "background",
                "status": "ready" if bns_command and script_status["aiflow_gptimg2_new"]["exists"] else "blocked",
                "detail": "BNS run_ability / gpt_image.gpt_image_2",
                **script_status["aiflow_gptimg2_new"],
            },
            {
                "id": "aiflow_jimeng",
                "name": "submit_img_anime_jimeng.py",
                "kind": "character",
                "status": "ready" if bns_command and script_status["aiflow_jimeng"]["exists"] else "blocked",
                "detail": "AIGC playid 3524，文本角色三视图",
                **script_status["aiflow_jimeng"],
            },
            {
                "id": "aiflow_jimeng50",
                "name": "submit_img_anime_jimeng50.py",
                "kind": "character-reference",
                "status": "ready" if bns_command and script_status["aiflow_jimeng50"]["exists"] else "blocked",
                "detail": "AIGC playid 5265，参考图多视角",
                **script_status["aiflow_jimeng50"],
            },
            {
                "id": "aiflow_nbpro",
                "name": "submit_img_anime_nbpro.py",
                "kind": "style-transfer",
                "status": "ready" if bns_command and script_status["aiflow_nbpro"]["exists"] else "blocked",
                "detail": "AIGC playid 5617，图像风格转换",
                **script_status["aiflow_nbpro"],
            },
        ],
    }


def get_bns_instance(bns_name: str) -> Tuple[str, str]:
    command = shutil.which("get_instance_by_service")
    if not command:
        raise ProviderUnavailable("本机找不到 get_instance_by_service，AIFLOW/BNS provider 暂不可用")
    result = subprocess.run(
        [command, "-ips", bns_name],
        check=False,
        text=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        timeout=20,
    )
    if result.returncode != 0:
        raise ProviderUnavailable(f"BNS 查询失败：{result.stderr.strip() or result.stdout.strip()}")
    instances = []
    for line in result.stdout.splitlines():
        parts = line.split()
        if len(parts) >= 4 and parts[3] == "0":
            instances.append((parts[1], parts[2]))
    if not instances:
        raise ProviderUnavailable(f"BNS 没有返回可用实例：{bns_name}")
    return instances[0]


def http_json(method: str, url: str, payload: Optional[Dict[str, Any]] = None, params: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
    if params:
        url = f"{url}?{urllib.parse.urlencode(params)}"
    data = None
    headers = {"Content-Type": "application/json"}
    if payload is not None:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(url, data=data, headers=headers, method=method)
    with urllib.request.urlopen(request, timeout=300) as response:
        raw = response.read().decode("utf-8")
    return json.loads(raw)


def download_url(url: str, out_path: Path) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with urllib.request.urlopen(url, timeout=180) as response:
        out_path.write_bytes(response.read())


def aiflow_submit_playid(playid: str, inputs: Dict[str, Any]) -> str:
    ip, port = get_bns_instance("group.aigc-cnap-aigc-render-aiflow-prod.K8S.all")
    task_id = f"suguang_creator_{uuid.uuid4()}_{time.time()}"
    payload = {
        "taskid": task_id,
        "source": "anime_vace",
        "playid": playid,
        "inputs": json.dumps(inputs, ensure_ascii=False),
    }
    http_json("POST", f"http://{ip}:{port}/aiplay/addtask", payload)
    return task_id


def aiflow_poll_image(task_id: str, *, endpoint: str = "/aigcflow/gettask", timeout_seconds: int = 900) -> str:
    deadline = time.time() + timeout_seconds
    last_payload: Dict[str, Any] = {}
    while time.time() < deadline:
        ip, port = get_bns_instance("group.aigc-cnap-aigc-render-aiflow-prod.K8S.all")
        last_payload = http_json(
            "GET",
            f"http://{ip}:{port}{endpoint}",
            params={"taskid": task_id, "source_from": "anime_vace"},
        )
        data = last_payload.get("data") or {}
        status = data.get("status")
        if status == 2:
            render = data.get("renderdata") or {}
            if isinstance(render.get("output_image_list"), list) and render["output_image_list"]:
                return render["output_image_list"][0]
            if render.get("image"):
                return render["image"]
            raise RuntimeError("AIFLOW 任务完成但没有返回 image")
        if status == -1:
            raise RuntimeError(f"AIFLOW 任务失败：{json.dumps(last_payload, ensure_ascii=False)[:500]}")
        time.sleep(5)
    raise TimeoutError(f"AIFLOW 任务超时：{task_id}；最后状态 {json.dumps(last_payload, ensure_ascii=False)[:500]}")


def generate_with_aiflow(item: Dict[str, Any], output_path: Path) -> str:
    kind = item.get("kind") or item.get("type")
    prompt = str(item.get("prompt") or "")
    reference = item.get("referenceImage") or ""

    if kind == "background":
        ip, port = get_bns_instance("group.aigc-cnap-prefect-aiflow-prod.K8S.all")
        payload = {
            "ability_name": "gpt_image.gpt_image_2",
            "ability_params": {
                "prompt": prompt,
                "width": "1536",
                "height": "1024",
                "quality": "medium",
                "n": 1,
            },
            "task_type": "node_task",
            "account_id": "default",
            "source": "ipstory",
        }
        result = http_json("POST", f"http://{ip}:{port}/api/run_ability", payload)
        task_id = (((result.get("data") or {}).get("taskid")) or "")
        if not task_id:
            raise RuntimeError(f"GPT Image 2 AIFLOW 未返回 taskid：{json.dumps(result, ensure_ascii=False)[:500]}")
        remote = aiflow_poll_image(task_id, endpoint="/aigcflow/v2/gettask")
        download_url(remote, output_path)
        return remote

    if reference:
        task_id = aiflow_submit_playid(
            "5265",
            {
                "imgs": [reference],
                "texts": [
                    " ",
                    prompt + "\n严格保持参考人物的面部特征、发型和辨识度，统一为高质量女性向视觉小说立绘。",
                    "2048*4096",
                ],
            },
        )
    else:
        task_id = aiflow_submit_playid(
            "3524",
            {
                "texts": [
                    prompt + "\n半写实高级CG风格，角色立绘，人物有记忆点，干净背景，无文字，无水印，高清高质量。",
                    "2K",
                ],
            },
        )
    remote = aiflow_poll_image(task_id)
    download_url(remote, output_path)
    return remote


def build_background_prompt(item: Dict[str, Any]) -> str:
    base = str(item.get("baseName") or item.get("name") or "场景")
    prompt = str(item.get("prompt") or "")
    return (
        "Use case: illustration-story\n"
        "Asset type: 16:9 visual novel background\n"
        f"Primary request: {prompt}\n"
        f"Scene/backdrop: {base}\n"
        "Style/medium: cinematic modern Chinese female-oriented suspense romance game background, "
        "premium YiCiYuan-style visual novel CG, semi-realistic painterly detail.\n"
        "Composition/framing: wide establishing shot, no main character, strong foreground/midground/depth, usable behind dialogue UI.\n"
        "Lighting/mood: emotionally charged, suspenseful but beautiful, refined cinematic light.\n"
        "Constraints: no text, no watermark, no logo, no manga panel border, no distorted architecture."
    )


def build_character_prompt(item: Dict[str, Any], reference: Optional[Path]) -> str:
    base = str(item.get("baseName") or item.get("name") or "角色")
    prompt = str(item.get("prompt") or "")
    reference_line = (
        "Input images: use the provided reference as identity lock; keep face, hair, age impression, and core temperament."
        if reference
        else "Input images: none; create a memorable original character design."
    )
    return (
        "Use case: identity-preserve\n"
        "Asset type: visual novel character sprite portrait\n"
        f"Primary request: {prompt}\n"
        f"Subject: {base}\n"
        f"{reference_line}\n"
        "Style/medium: high-end Chinese female-oriented suspense romance visual novel art, attractive but natural, "
        "semi-realistic anime CG, clean facial features, expressive eyes.\n"
        "Composition/framing: vertical portrait, waist-up to three-quarter body, centered, suitable for in-game sprite card.\n"
        "Lighting/mood: cinematic soft light, emotionally readable expression, polished and memorable.\n"
        "Clothing: unified modern high-school or story-appropriate outfit when the prompt implies campus, tasteful coordinated colors.\n"
        "Constraints: no text, no watermark, no logo, no extra people, avoid childlike proportions, avoid ugly or generic face."
    )


def find_reference_for_item(item: Dict[str, Any]) -> Optional[Path]:
    candidates = [str(item.get("baseName") or ""), str(item.get("name") or "")]
    for key, path in KNOWN_CHARACTER_REFERENCES.items():
        if any(key in value for value in candidates) and path.exists():
            return path
    explicit = item.get("referenceImage")
    if explicit:
        path = Path(str(explicit))
        if not path.is_absolute():
            path = ROOT / str(explicit).lstrip("/")
        if path.exists():
            return path
    return None


def image_to_base64_data_url(image: Path) -> str:
    mime_type = mimetypes.guess_type(str(image))[0] or "image/png"
    raw = image.read_bytes()
    return f"data:{mime_type};base64,{base64.b64encode(raw).decode('utf-8')}"


def strip_base64_prefix(value: str) -> str:
    return value.split("base64,", 1)[1] if "base64," in value else value


def openai_image_request(payload: Dict[str, Any]) -> Dict[str, Any]:
    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key:
        raise ProviderUnavailable("缺少 OPENAI_API_KEY，无法调用 GPT Image 2")
    base_url = str(os.environ.get("OPENAI_BASE_URL") or OPENAI_DEFAULT_BASE_URL).rstrip("/")
    url = f"{base_url}/images/generations"
    raw = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    request = urllib.request.Request(
        url,
        data=raw,
        headers={
            "Content-Type": "application/json",
            "Authorization": f"Bearer {api_key}",
        },
        method="POST",
    )
    try:
        with urllib.request.urlopen(request, timeout=600) as response:
            return json.loads(response.read().decode("utf-8"))
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", errors="replace")[:1000]
        raise RuntimeError(f"GPT Image 2 请求失败：HTTP {exc.code} {detail}") from exc


def run_openai_imagegen(prompt: str, output_path: Path, *, size: str, reference: Optional[Path] = None) -> str:
    payload: Dict[str, Any] = {
        "model": str(os.environ.get("OPENAI_IMAGE_MODEL") or OPENAI_DEFAULT_IMAGE_MODEL),
        "prompt": prompt,
        "size": size,
        "quality": str(os.environ.get("OPENAI_IMAGE_QUALITY") or "medium"),
        "n": 1,
        "response_format": "b64_json",
    }
    if reference:
        payload["reference_images"] = [image_to_base64_data_url(reference)]

    output_path.parent.mkdir(parents=True, exist_ok=True)
    max_retries = int(os.environ.get("OPENAI_IMAGE_RETRIES") or "3")
    last_error: Optional[Exception] = None
    for attempt in range(1, max_retries + 1):
        try:
            result = openai_image_request(payload)
            first = (result.get("data") or [{}])[0]
            if first.get("b64_json"):
                output_path.write_bytes(base64.b64decode(strip_base64_prefix(str(first["b64_json"]))))
            elif first.get("url"):
                download_url(str(first["url"]), output_path)
            else:
                raise RuntimeError(f"GPT Image 2 未返回图片数据：{json.dumps(result, ensure_ascii=False)[:500]}")
            if not output_path.exists() or output_path.stat().st_size < 1024:
                raise RuntimeError("GPT Image 2 未写出有效图片")
            return str(output_path)
        except Exception as exc:
            last_error = exc
            if attempt < max_retries:
                time.sleep(2 ** attempt)
                continue
            raise
    raise RuntimeError(str(last_error or "GPT Image 2 生成失败"))


def run_codexone_imagegen(item: Dict[str, Any], output_path: Path, prompt_path: Path) -> str:
    if not os.environ.get("OPENAI_API_KEY"):
        raise ProviderUnavailable("缺少 OPENAI_API_KEY，无法调用 GPT Image 2")

    kind = item.get("kind") or item.get("type")
    reference = find_reference_for_item(item) if kind == "character" else None
    prompt = build_character_prompt(item, reference) if kind == "character" else build_background_prompt(item)
    prompt_path.parent.mkdir(parents=True, exist_ok=True)
    prompt_path.write_text(prompt, encoding="utf-8")

    size = (
        str(os.environ.get("OPENAI_CHARACTER_SIZE") or "1024x1536")
        if kind == "character"
        else str(os.environ.get("OPENAI_BACKGROUND_SIZE") or "1536x1024")
    )
    return run_openai_imagegen(prompt, output_path, size=size, reference=reference)


def public_url(base_url: str, output_path: Path) -> str:
    rel = "/" + output_path.relative_to(ROOT).as_posix()
    if base_url:
        return base_url.rstrip("/") + rel
    return rel


def choose_provider(item: Dict[str, Any]) -> str:
    health = provider_health()
    if health["bnsReady"]:
        return "aiflow_gptimg2_new" if (item.get("kind") or item.get("type")) == "background" else "aiflow_jimeng"
    return "codexone_gpt_image_2"


def process_item(job: Dict[str, Any], item: Dict[str, Any], index: int) -> None:
    item["status"] = "generating"
    item["startedAt"] = now_iso()
    update_job(job)

    asset_id = str(item.get("assetId") or item.get("id") or f"asset-{index}")
    kind = str(item.get("kind") or item.get("type") or "background")
    slug = slugify(f"{index:02d}-{kind}-{item.get('baseName') or item.get('name')}", fallback=f"{index:02d}-{kind}")
    out_dir = GENERATED_DIR / slugify(job["id"])
    prompt_dir = JOBS_DIR / slugify(job["id"]) / "prompts"
    output_path = out_dir / f"{slug}.png"
    prompt_path = prompt_dir / f"{slug}.txt"
    item["file"] = str(output_path)

    provider = choose_provider(item)
    item["provider"] = provider
    skipped_providers: List[str] = []

    try:
        if provider.startswith("aiflow"):
            try:
                generate_with_aiflow(item, output_path)
            except ProviderUnavailable as exc:
                skipped_providers.append(str(exc))
                item["provider"] = "codexone_gpt_image_2"
                run_codexone_imagegen(item, output_path, prompt_path)
        else:
            run_codexone_imagegen(item, output_path, prompt_path)
        item["status"] = "done"
        item["url"] = public_url(str(job.get("baseUrl") or ""), output_path)
        item["completedAt"] = now_iso()
        if skipped_providers:
            item["providerNote"] = "；".join(skipped_providers)
    except Exception as exc:
        item["status"] = "failed"
        item["error"] = str(exc)[:1000]
        item["trace"] = traceback.format_exc(limit=4)
        item["completedAt"] = now_iso()
    finally:
        job["completed"] = len([entry for entry in job["items"] if entry.get("status") in {"done", "failed"}])
        job["succeeded"] = len([entry for entry in job["items"] if entry.get("status") == "done"])
        job["failed"] = len([entry for entry in job["items"] if entry.get("status") == "failed"])
        update_job(job)


def run_job(job_id: str) -> None:
    job = load_job(job_id)
    if not job:
        return
    job["status"] = "generating"
    job["startedAt"] = now_iso()
    update_job(job)
    for index, item in enumerate(job["items"], start=1):
        if item.get("status") == "done":
            continue
        process_item(job, item, index)
    job["status"] = "failed" if job.get("failed") else "done"
    job["completedAt"] = now_iso()
    update_job(job)


def normalize_batch_items(raw_items: Iterable[Dict[str, Any]]) -> List[Dict[str, Any]]:
    items = []
    for index, item in enumerate(raw_items, start=1):
        kind = item.get("kind") or item.get("type") or "background"
        asset_id = str(item.get("assetId") or item.get("id") or f"{kind}-{index}")
        items.append(
            {
                "id": asset_id,
                "assetId": asset_id,
                "kind": "character" if kind in {"char", "character"} else "background",
                "name": str(item.get("name") or item.get("baseName") or asset_id),
                "baseName": str(item.get("baseName") or item.get("name") or asset_id),
                "prompt": str(item.get("prompt") or ""),
                "tone": item.get("tone") or {},
                "referenceImage": item.get("referenceImage") or "",
                "status": "pending",
                "createdAt": now_iso(),
            }
        )
    return items


def create_batch_job(body: Dict[str, Any], base_url: str) -> Dict[str, Any]:
    raw_items = body.get("items")
    if not isinstance(raw_items, list) or not raw_items:
        raise ValueError("没有可生成的素材，请先解析剧本并确认存在专属背景/立绘")
    job_id = str(body.get("jobId") or f"asset-job-{uuid.uuid4().hex[:12]}")
    items = normalize_batch_items(raw_items)
    job = {
        "id": job_id,
        "title": str(body.get("title") or "未命名作品"),
        "status": "queued",
        "createdAt": now_iso(),
        "baseUrl": base_url,
        "total": len(items),
        "completed": 0,
        "succeeded": 0,
        "failed": 0,
        "items": items,
        "providerHealth": provider_health(),
    }
    update_job(job)
    thread = threading.Thread(target=run_job, args=(job_id,), daemon=True)
    thread.start()
    return job


class CreatorImageHandler(SimpleHTTPRequestHandler):
    server_version = "SuguangCreatorImageService/1.0"

    def __init__(self, *args: Any, **kwargs: Any) -> None:
        super().__init__(*args, directory=str(OUTPUTS_DIR), **kwargs)

    def translate_path(self, path: str) -> str:
        static_path = resolve_static_path(path)
        if not static_path:
            return str(OUTPUTS_DIR / "__not_found__")
        return str(static_path)

    def end_headers(self) -> None:
        if self.path.startswith("/api/"):
            add_cors_headers(self)
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self.end_headers()

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path in {"", "/"}:
            self.send_response(302)
            self.send_header("Location", "/outputs/landing.html")
            self.end_headers()
            return
        if parsed.path == "/healthz":
            health = provider_health()
            json_response(self, 200, {"ok": True, "openaiReady": health["openaiReady"], "bnsReady": health["bnsReady"]})
            return
        if parsed.path == "/api/image/providers":
            json_response(self, 200, provider_health())
            return
        if parsed.path == "/api/games":
            query = urllib.parse.parse_qs(parsed.query)
            limit = int((query.get("limit") or ["80"])[0] or "80")
            json_response(self, 200, {"ok": True, "games": list_published_games(limit=limit)})
            return
        if parsed.path == "/api/game":
            query = urllib.parse.parse_qs(parsed.query)
            game_id = (query.get("id") or [""])[0]
            game = load_published_game(game_id) if game_id else None
            if not game:
                json_response(self, 404, {"ok": False, "error": "GAME_NOT_FOUND"})
                return
            json_response(self, 200, {"ok": True, "game": game})
            return
        if parsed.path == "/api/image/job":
            query = urllib.parse.parse_qs(parsed.query)
            job_id = (query.get("id") or [""])[0]
            job = load_job(job_id) if job_id else None
            if not job:
                json_response(self, 404, {"ok": False, "error": "JOB_NOT_FOUND"})
                return
            json_response(self, 200, {"ok": True, "job": job})
            return
        if not resolve_static_path(parsed.path):
            self.send_error(404, "Not Found")
            return
        super().do_GET()

    def do_POST(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/game":
            try:
                body = read_json_body(self)
                game = body.get("game") if isinstance(body.get("game"), dict) else body
                saved = save_published_game(game)
                json_response(self, 200, {"ok": True, "game": saved})
            except Exception as exc:
                json_response(self, 400, {"ok": False, "error": str(exc)})
            return
        if parsed.path != "/api/image/batch":
            json_response(self, 404, {"ok": False, "error": "NOT_FOUND"})
            return
        try:
            body = read_json_body(self)
            base_url = resolve_public_base_url(self.headers)
            job = create_batch_job(body, base_url)
            json_response(self, 200, {"ok": True, "job": job})
        except Exception as exc:
            json_response(self, 400, {"ok": False, "error": str(exc)})


def main() -> int:
    parser = argparse.ArgumentParser(description="Serve Suguang creator with real local image-generation API.")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=4175)
    args = parser.parse_args()

    GENERATED_DIR.mkdir(parents=True, exist_ok=True)
    JOBS_DIR.mkdir(parents=True, exist_ok=True)
    server = ThreadingHTTPServer((args.host, args.port), CreatorImageHandler)
    print(f"Suguang creator server: http://{args.host}:{args.port}/outputs/landing.html")
    print(json.dumps(provider_health(), ensure_ascii=False, indent=2))
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping server.")
    finally:
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
