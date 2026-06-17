"""Extract structured text and embedded image metadata from the Maoshan Yiyuan PPTX.

Output:
  docs/extract/pptx_raw.json   — full per-slide text + image geometry
  docs/extract/pptx_imgs/      — extracted PNG images (one file per slide image)

Usage:
  python3 scripts/extract_data/extract_pptx.py
"""
from __future__ import annotations

import json
import pathlib
import sys

try:
    from pptx import Presentation
    from pptx.enum.shapes import MSO_SHAPE_TYPE
except ModuleNotFoundError:
    sys.stderr.write(
        "Missing dependency: run `pip install python-pptx pillow` first.\n"
    )
    raise


ROOT = pathlib.Path(__file__).resolve().parents[2]
RESOURCE = ROOT / "resource" / "茅山颐园介绍2024-9.pptx"
OUT_JSON = ROOT / "docs" / "extract" / "pptx_raw.json"
OUT_IMG_DIR = ROOT / "docs" / "extract" / "pptx_imgs"


def collect_text(slide) -> list[str]:
    """Return every non-empty text run/paragraph from the slide."""
    chunks: list[str] = []
    for shape in slide.shapes:
        if not shape.has_text_frame:
            continue
        for para in shape.text_frame.paragraphs:
            text = "".join(run.text for run in para.runs).strip()
            if text:
                chunks.append(text)
    return chunks


def extract_images(slide, slide_idx: int) -> list[dict]:
    """Dump every embedded picture to pptx_imgs/ and record its geometry."""
    extracted: list[dict] = []
    img_idx = 0
    for shape in slide.shapes:
        if shape.shape_type != MSO_SHAPE_TYPE.PICTURE:
            continue
        img_idx += 1
        try:
            blob = shape.image.blob
            ext = shape.image.ext or "png"
        except Exception as exc:  # pragma: no cover - defensive
            print(f"  ! slide {slide_idx} image {img_idx}: {exc}", file=sys.stderr)
            continue

        name = f"slide{slide_idx:02d}_img{img_idx:02d}.{ext}"
        (OUT_IMG_DIR / name).write_bytes(blob)

        extracted.append(
            {
                "file": name,
                "w_emu": shape.width,
                "h_emu": shape.height,
            }
        )
    return extracted


def main() -> None:
    if not RESOURCE.exists():
        sys.stderr.write(f"PPTX not found: {RESOURCE}\n")
        sys.exit(1)

    OUT_IMG_DIR.mkdir(parents=True, exist_ok=True)
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)

    prs = Presentation(RESOURCE)
    out: list[dict] = []
    for idx, slide in enumerate(prs.slides, start=1):
        record: dict = {
            "index": idx,
            "title": (slide.shapes.title.text if slide.shapes.title else "").strip(),
            "texts": collect_text(slide),
            "images": extract_images(slide, idx),
        }
        out.append(record)
        print(f"  slide {idx:02d}: {len(record['texts'])} text chunks, {len(record['images'])} images")

    OUT_JSON.write_text(json.dumps(out, ensure_ascii=False, indent=2))
    print(f"Wrote {OUT_JSON.relative_to(ROOT)} ({len(out)} slides)")
    print(f"Extracted images into {OUT_IMG_DIR.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()