"""Extract structured text from the Maoshan Yiyuan PDF brochure.

Output:
  docs/extract/pdf_raw.json   — full per-page text

Usage:
  python3 scripts/extract_data/extract_pdf.py
"""
from __future__ import annotations

import json
import pathlib
import sys

try:
    import pdfplumber
except ModuleNotFoundError:
    sys.stderr.write("Missing dependency: run `pip install pdfplumber` first.\n")
    raise


ROOT = pathlib.Path(__file__).resolve().parents[2]
RESOURCE = ROOT / "resource" / "颐园宣传手册.pdf"
OUT_JSON = ROOT / "docs" / "extract" / "pdf_raw.json"


def main() -> None:
    if not RESOURCE.exists():
        sys.stderr.write(f"PDF not found: {RESOURCE}\n")
        sys.exit(1)

    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)

    pages: list[dict] = []
    with pdfplumber.open(RESOURCE) as pdf:
        for idx, page in enumerate(pdf.pages, start=1):
            text = (page.extract_text() or "").strip()
            pages.append({"index": idx, "text": text})
            print(f"  page {idx:02d}: {len(text)} chars")

    OUT_JSON.write_text(json.dumps(pages, ensure_ascii=False, indent=2))
    print(f"Wrote {OUT_JSON.relative_to(ROOT)} ({len(pages)} pages)")


if __name__ == "__main__":
    main()