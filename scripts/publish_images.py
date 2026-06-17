#!/usr/bin/env python3
"""将 webp_converted/ 下选定的图片按 public/images/README.md 命名规范复制到 public/images/。

映射依据 PPT 结构（见 docs/DATA_DICTIONARY.md）：
  slide01_img01 = 颐园全景导览
  slide03_img01 = 项目实景
  slide04_img01/02 = 健康小镇实景（横版/竖版）
  slide05_img01 = 景区资源
  slide06_img01 = 交通资源
  slide07_img01 = 小镇地图
  slide08_img01..06 = 逸心园康养住宅
  slide09_img01..03 = 健宾楼康养公寓
  slide10_img01/02 = 丰盛康乐配套
  slide11_img01 = 江南医院
  slide12_img01 = 江南医院体检中心
  slide13_img01 = 桑榆堂护理院
  slide14_img01 = 卿舸书院外观
  slide15_img01..03 = 卿舸书院内设施
  slide19_img01..10 = 书院往期活动
  slide20_img01..03 = 玉膳房
  slide21_img01 = 吾谷农场
  slide22_img01/02 = 商业水街
  slide23_img01..03 = 生活小镇商业水街

用法：python3 scripts/publish_images.py
"""
from __future__ import annotations

import pathlib
import shutil
import sys

ROOT = pathlib.Path(__file__).resolve().parents[1]
SRC = ROOT / "docs" / "extract" / "webp_converted"
DST = ROOT / "public" / "images"

# (源文件名, 目标文件名)
MAPPING: list[tuple[str, str]] = [
    # === 通用图（README 必填项）===
    ("slide03_img01.webp", "hero.webp"),
    ("slide01_img01.webp", "og-cover.webp"),
    ("slide04_img01.webp", "facility-overview.webp"),
    ("slide04_img02.webp", "facility-main.webp"),
    ("slide07_img01.webp", "about.webp"),

    # === 业态配图（facilities.json 引用）===
    ("slide08_img01.webp", "facility-yixinyuan.webp"),
    ("slide09_img01.webp", "facility-jianbinlou.webp"),
    ("slide10_img02.webp", "facility-wellness.webp"),
    ("slide11_img01.webp", "facility-hospital.webp"),
    ("slide12_img01.webp", "facility-checkup.webp"),
    ("slide13_img01.webp", "facility-nursing.webp"),
    ("slide14_img01.webp", "facility-academy.webp"),
    ("slide20_img01.webp", "facility-dining.webp"),
    ("slide21_img01.webp", "facility-farm.webp"),
    ("slide22_img01.webp", "facility-street.webp"),

    # === 服务配图（6 张）===
    ("slide08_img02.webp", "service-1.webp"),
    ("slide09_img02.webp", "service-2.webp"),
    ("slide10_img01.webp", "service-3.webp"),
    ("slide11_img01.webp", "service-4.webp"),
    ("slide13_img01.webp", "service-5.webp"),
    ("slide15_img02.webp", "service-6.webp"),

    # === Gallery（9 张，多样化场景）===
    ("slide05_img01.webp", "gallery-1.webp"),
    ("slide06_img01.webp", "gallery-2.webp"),
    ("slide08_img03.webp", "gallery-3.webp"),
    ("slide09_img03.webp", "gallery-4.webp"),
    ("slide14_img01.webp", "gallery-5.webp"),
    ("slide15_img01.webp", "gallery-6.webp"),
    ("slide19_img01.webp", "gallery-7.webp"),
    ("slide22_img02.webp", "gallery-8.webp"),
    ("slide23_img01.webp", "gallery-9.webp"),
]


def main() -> None:
    if not SRC.exists():
        sys.stderr.write(f"Source dir not found: {SRC}\n")
        sys.exit(1)

    DST.mkdir(parents=True, exist_ok=True)

    copied = 0
    for src_name, dst_name in MAPPING:
        src = SRC / src_name
        dst = DST / dst_name
        if not src.exists():
            sys.stderr.write(f"  ! missing source: {src_name}\n")
            continue
        shutil.copy2(src, dst)
        copied += 1

    print(f"Copied {copied}/{len(MAPPING)} images → {DST.relative_to(ROOT)}/")


if __name__ == "__main__":
    main()