import os
from pathlib import Path


def upload_image_to_bos(img):
    """Local replacement for the downloaded script's BOS uploader."""
    output_path = Path(os.environ.get("GPT_IMAGE_OUTPUT_PATH", "gpt-image2-output.png"))
    output_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(output_path, format="PNG")
    return str(output_path)
