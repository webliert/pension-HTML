#!/usr/bin/env python3
"""批量将 docs/extract/pptx_imgs/ 下所有图片转换为 WebP 格式。

输入：  docs/extract/pptx_imgs/*.jpg|*.png
输出：  docs/extract/webp_converted/*.webp (按原文件名，扩展名替换)

用法：  python3 scripts/convert_images.py
依赖：  Pillow (pip install pillow)
"""
from __future__ import annotations

import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
SRC_DIR = ROOT / "docs" / "extract" / "pptx_imgs"
DST_DIR = ROOT / "docs" / "extract" / "webp_converted"

# 不同用途目标最大边长（按 public/images/README.md 规范）
TARGET_MAX_SIDE = 1600  # 公共图默认上限


def main() -> None:
    if not SRC_DIR.exists():
        sys.stderr.write(f"Source dir not found: {SRC_DIR}\n")
        sys.exit(1)

    DST_DIR.mkdir(parents=True, exist_ok=True)

    sources = sorted(
        p for p in SRC_DIR.iterdir()
        if p.suffix.lower() in {".jpg", ".jpeg", ".png"}
    )
    if not sources:
        sys.stderr.write(f"No images found in {SRC_DIR}\n")
        sys.exit(1)

    print(f"Converting {len(sources)} images → {DST_DIR.relative_to(ROOT)}")
    converted = 0
    for src in sources:
        dst = DST_DIR / f"{src.stem}.webp"
        cmd = [
            "ffmpeg", "-hide_banner", "-loglevel", "error",
            "-i", str(src),
            "-c:v", "libwebp", "-q", "78",
            "-vf", f"scale='min({TARGET_MAX_SIDE},iw)':-2",
            "-y", str(dst),
        ]
        try:
            subprocess.run(cmd, check=True)
            converted += 1
        except subprocess.CalledProcessError as exc:
            sys.stderr.write(f"  ! {src.name}: ffmpeg exit {exc.returncode}\n")

    print(f"Done: {converted}/{len(sources)} converted.")


if __name__ == "__main__":
    main()