import argparse
import os
from pathlib import Path

from req_gpt_image2_base64 import generate_image_to_image


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--prompt", required=True)
    parser.add_argument("--out", required=True)
    parser.add_argument("--width", type=int, default=1792)
    parser.add_argument("--height", type=int, default=1024)
    parser.add_argument("--reference", action="append", default=None)
    args = parser.parse_args()

    out = Path(args.out).resolve()
    os.environ["GPT_IMAGE_OUTPUT_PATH"] = str(out)
    result = generate_image_to_image(
        args.prompt,
        image=args.reference,
        target_size=(args.width, args.height),
    )
    print(result)


if __name__ == "__main__":
    main()
