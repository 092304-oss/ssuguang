"""
GPT Image 2 生图
"""
import time
import requests
import base64
from io import BytesIO
from PIL import Image

from head_pipeline.upload_bos import upload_image_to_bos


def base64_to_pil_image(base64_str: str) -> Image.Image:
    """
    将Base64编码的图片字符串转换为PIL.Image格式

    Args:
        base64_str (str): Base64编码的图片字符串，支持两种格式：
                          1. 纯Base64字符串（不含data:image前缀）
                          2. DataURL格式（含data:image/jpeg;base64,前缀）

    Returns:
        Image.Image: PIL格式的图片对象

    Raises:
        ValueError: Base64字符串格式错误或无法解析为图片
        IOError: 无法从Base64数据中读取图片
    """
    # 移除DataURL前缀（如果存在）
    if 'base64,' in base64_str:
        base64_str = base64_str.split('base64,')[1]

    # 解码Base64字符串为二进制数据
    image_data = base64.b64decode(base64_str)

    # 将二进制数据转换为BytesIO流
    image_stream = BytesIO(image_data)

    # 打开并返回PIL Image对象
    image = Image.open(image_stream)

    # 验证图片完整性（触发异常如果数据无效）
    image.verify()

    # 重新打开（verify后需要重新打开才能正常使用）
    image_stream.seek(0)
    image = Image.open(image_stream)

    return image


def _pick_size(target_size):
    """
    根据目标尺寸选择GPT Image 2支持的最接近尺寸

    Args:
        target_size: (width, height) 目标尺寸

    Returns:
        str: GPT Image 2支持的尺寸字符串
    """
    if target_size is None:
        return "1792x1024"

    w, h = target_size
    ratio = w / h
    if ratio > 1.2:
        return "1792x1024"   # 横版
    elif ratio < 0.8:
        return "1024x1792"   # 竖版
    else:
        return "1024x1024"   # 正方形


def _image_to_base64_dataurl(image: str) -> str:
    """
    转换为 base64 格式

    Args:
        image (str): 图像的远程 URL 或本地文件路径

    Returns:
        str: "data:image/png;base64,xxxx..." 格式的 DataURL
    """
    if image.startswith("http://") or image.startswith("https://"):
        resp = requests.get(image, timeout=60)
        resp.raise_for_status()
        raw = resp.content
    else:
        with open(image, "rb") as f:
            raw = f.read()
    b64_str = base64.b64encode(raw).decode("utf-8")
    return f"data:image/png;base64,{b64_str}"


def generate_image_to_image(prompt, image=None, target_size=None):
    """·
    GPT Image 2 生图
    Args:
        prompt: 生成提示词
        image: 参考图像（可选）
        target_size: 目标输出尺寸 (width, height)，生成后会调整到此尺寸

    Returns:
        str: 生成的图像URL，失败返回None
    """
    print(f"[GPTImage2] 开始生成图像...")
    print(f"[GPTImage2] 提示词: {prompt[:80]}...")
    if image:
        print(f"[GPTImage2] 参考图像: {image}...")
    if target_size:
        print(f"[GPTImage2] 目标尺寸: {target_size[0]}x{target_size[1]}")

    # API配置
    api_key = "sk-lixueqi-acd20c187a09f26ffb58041c95a0d97d"
    url = "http://yq01-ps-superpage614.yq01.baidu.com:8080/v1/images/generations"
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {api_key}"
    }

    size_str = _pick_size(target_size)
    data = {
        "model": "gpt-image-2",
        "prompt": prompt,
        "size": size_str,
        "response_format": "b64_json"
    }

    if image:
        if not isinstance(image, list):
            # 转换为 base64 格式后传入
            image_b64_dataurl = _image_to_base64_dataurl(image)
            data["reference_images"] = [image_b64_dataurl]
        else:
            # 转换为 base64 格式后传入
            ref_images = []
            for ref_image in image:
                image_b64_dataurl = _image_to_base64_dataurl(ref_image)
                ref_images.append(image_b64_dataurl)
            data["reference_images"] = ref_images

    print(f"[GPTImage2] 请求尺寸: {size_str}")
    max_retries = 3
    for attempt in range(1, max_retries + 1):
        print(f"[GPTImage2] 发送请求到API (第{attempt}/{max_retries}次)...")
        response = requests.post(
            url=url,
            headers=headers,
            json=data,
            timeout=300
        )
        if not response.ok:
            print(f"[GPTImage2] 请求失败: HTTP {response.status_code} (第{attempt}/{max_retries}次)")
            if attempt < max_retries:
                wait = 2 ** attempt
                print(f"[GPTImage2] {wait}秒后重试...")
                time.sleep(wait)
                continue
            response.raise_for_status()

        result = response.json()
        print(f"[GPTImage2] 收到API响应")

        if "data" in result and len(result["data"]) > 0:
            b64_json = result["data"][0].get("b64_json")
            img = base64_to_pil_image(b64_json)
            print(f"[GPTImage2] 生成图像原始尺寸: {img.size}")

            if target_size and img.size != target_size:
                print(f"[GPTImage2] 调整图像尺寸: {img.size} -> {target_size}")
                img = img.resize(target_size, Image.LANCZOS)
                print(f"[GPTImage2] 调整完成: {img.size}")

            print(f"[GPTImage2] 上传图像到BOS...")
            image_url = upload_image_to_bos(img)
            print(f"[GPTImage2] 上传完成: {image_url}...")
            return image_url

        print(f"[GPTImage2] 错误: API未返回图像数据 (第{attempt}/{max_retries}次)")
        print(f"[GPTImage2] 响应: {result}")
        if attempt < max_retries:
            wait = 2 ** attempt
            print(f"[GPTImage2] {wait}秒后重试...")
            time.sleep(wait)
            continue
        raise RuntimeError(f"[GPTImage2] API未返回图像数据，已重试{max_retries}次")


if __name__ == "__main__":
    img_path = "output_head6/assets/发报员手部特写.png"
    prompt = "生成一张纯文字图像，内容为「提前改写」。文字风格为毛笔、草书，整体为白字黑边风格（白色文字带黑色描边/轮廓，文字清晰醒目）。其中「改写」这些字使用红色色高亮显。背景为纯紫色"

    res = generate_image_to_image(
        # 生图prompt
        f"{prompt}",
        # # 参考图像
        # upload_image_to_bos(img_path),
        # 指定size
        target_size=(1792, 1024)
    )

    print(res)
    
    # 保存图像结果
    if res:
        image_content = requests.get(res).content
        with open("./demo.png", "wb") as f:
            f.write(image_content)