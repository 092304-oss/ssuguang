from pathlib import Path
import subprocess
import sys

from req_gpt_image2_base64 import generate_image_to_image


ROOT = Path("/Users/ivy/Documents/Codex/2026-06-17/web")
OUT = ROOT / "outputs" / "assets" / "characters"
SOURCE = ROOT / "work" / "character_sprites"

STYLE = (
    "High-end Chinese female-oriented suspense visual novel character standing illustration, "
    "premium otome mobile story game art, painterly-realistic anime style, elegant facial features, "
    "natural skin texture, refined hair rendering, cinematic but clean lighting, tasteful fashion styling, "
    "half-body to three-quarter body portrait, character centered, no text, no logo, no watermark. "
    "Use a perfectly flat solid #00ff00 chroma-key background, no shadows on background, no gradient, "
    "no floor plane, no props touching the background, crisp silhouette, generous padding. "
)

CHARACTERS = [
    (
        "shen-zhi",
        "沈栀",
        "27-year-old Chinese woman, video editor, heroine. Slim but not fragile, tired beautiful eyes, "
        "quiet sharpness, shoulder-length dark brown hair slightly messy, minimal makeup, ivory knit top "
        "under a muted charcoal trench coat, subtle white rose pin detail. Expression: exhausted but trying "
        "to stay composed, emotionally restrained, intelligent, modern urban mystery heroine.",
    ),
    (
        "lu-mian",
        "陆眠",
        "24-year-old Chinese woman, warm best friend who feels like sunlight in a rainy story. Soft oval face, "
        "clear gentle eyes, short-to-medium dark hair with airy bangs, pale yellow hoodie under a cream cardigan, "
        "warm smile with hidden sadness. Expression: kind, protective, alive and luminous, not childish.",
    ),
    (
        "zhou-xu",
        "周叙",
        "28-year-old Chinese man, heroine's ex-boyfriend, restrained and elegant, not greasy, not sinister. "
        "Tall lean build, clean handsome face, refined straight nose, calm tired eyes, neat black hair damp only at "
        "the ends, no hair covering the whole face, black shirt under a dark long coat, mature urban romantic suspense "
        "male lead. Expression: guilty, controlled, protective, attractive but wounded. Avoid ugly, oily, harsh, "
        "overly aggressive, vampire-like or villainous look.",
    ),
    (
        "bai-qi",
        "白祁",
        "22-year-old Chinese man, Lu Mian's younger brother. Slender, pale, clean delicate face, slightly sharp eyes "
        "from grief and sleeplessness, short black hair, black hoodie under a gray jacket, understated mourning ribbon "
        "detail on sleeve. Expression: wounded, suspicious, stubborn, fragile anger under restraint. Attractive younger "
        "male character, not childish, not villain caricature.",
    ),
]


def remove_chroma(src: Path, dst: Path) -> bool:
    helper = Path.home() / ".codex" / "skills" / ".system" / "imagegen" / "scripts" / "remove_chroma_key.py"
    if not helper.exists():
        return False
    cmd = [
        sys.executable,
        str(helper),
        "--input",
        str(src),
        "--out",
        str(dst),
        "--auto-key",
        "border",
        "--soft-matte",
        "--transparent-threshold",
        "12",
        "--opaque-threshold",
        "220",
        "--despill",
        "--edge-contract",
        "1",
    ]
    subprocess.run(cmd, check=True)
    return True


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    SOURCE.mkdir(parents=True, exist_ok=True)

    for slug, name, desc in CHARACTERS:
        source_path = SOURCE / f"{slug}-green-v1.png"
        final_path = OUT / f"{slug}-sprite-v1.png"
        preview_path = OUT / f"{slug}-preview-v1.png"
        if final_path.exists() and final_path.stat().st_size > 100_000:
            print(f"[skip] {name}: {final_path}")
            continue

        prompt = (
            f"{STYLE}\n"
            f"Character name for internal design only: {name}. Do not draw any text.\n"
            f"Subject: {desc}\n"
            "Composition: vertical 9:16 character sprite concept preview, head to mid-thigh visible, "
            "hands relaxed or partially visible, clean elegant silhouette suitable for later in-game cutout.\n"
            "Avoid: distorted hands, extra fingers, bad anatomy, crossed eyes, heavy gore, old age, childish face, "
            "cheap webtoon look, low-detail face, harsh plastic skin, muddy colors."
        )
        print(f"[generate] {name} -> {source_path}")
        generate_image_to_image(prompt, target_size=(1024, 1792))
        generated = Path("gpt-image2-output.png")
        if generated.exists():
            source_path.write_bytes(generated.read_bytes())

        print(f"[cutout] {name} -> {final_path}")
        try:
            remove_chroma(source_path, final_path)
        except Exception as exc:
            print(f"[warn] chroma removal failed for {name}: {exc}")
            final_path.write_bytes(source_path.read_bytes())

        preview_path.write_bytes(final_path.read_bytes())
        print(f"[done] {name}: {final_path}")


if __name__ == "__main__":
    main()
