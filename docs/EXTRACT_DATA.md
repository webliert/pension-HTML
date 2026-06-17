# 资源抽取与处理文档

> 从 `resource/` 原始素材到 `public/` 可发布资源的完整流水线。

## 一、前置依赖

```bash
pip install python-pptx pdfplumber pillow
# ffmpeg 用于图片转 WebP
sudo apt install ffmpeg    # Ubuntu/Debian
```

## 二、抽取脚本

### 1. 抽取 PPTX 文本与图片

```bash
python3 scripts/extract_data/extract_pptx.py
```

**输入**：`resource/茅山颐园介绍2024-9.pptx`（48.7 MB，24 张幻灯片）

**输出**：
- `docs/extract/pptx_raw.json`：每页幻灯片的标题、正文段落、图片文件名 + 几何尺寸
- `docs/extract/pptx_imgs/`：抽取出的全部内嵌图片（slide01_img01.jpg 等命名）

### 2. 抽取 PDF 文本

```bash
python3 scripts/extract_data/extract_pdf.py
```

**输入**：`resource/颐园宣传手册.pdf`（9.7 MB，16 页）

**输出**：`docs/extract/pdf_raw.json`：每页提取的文本

### 3. 校对

```bash
# 快速查看 PPT 单页
jq '.[7]' docs/extract/pptx_raw.json

# 查看 PDF 单页
jq '.[11]' docs/extract/pdf_raw.json   # 第 12 页：套餐产品表
```

> ⚠️ `pdfplumber` 对中英文混排识别一般，关键数字（如套餐价格 5 万 / 10 万 / 16 万、118 元体验游）必须人工对照原 PDF 二次确认。

## 三、图片处理流水线

### 1. PPT 图片批量转 WebP

```bash
python3 scripts/convert_images.py
```

**输入**：`docs/extract/pptx_imgs/*.jpg|*.png`（47 张）

**输出**：`docs/extract/webp_converted/*.webp`（q=78，最长边 1600px）

### 2. 发布到 public/images/

```bash
python3 scripts/publish_images.py
```

**输入**：`docs/extract/webp_converted/`

**输出**：`public/images/{hero, facility-*, service-*, gallery-*}.webp`（30 张，按映射表命名）

### 3. 营销长图单独转 WebP

```bash
ffmpeg -i resource/mmexport1781423506803.jpg -c:v libwebp -q 82 -y public/promotions/season-2026.webp
```

**输入**：`resource/mmexport1781423506803.jpg`（实为 PNG 1253×838）

**输出**：`public/promotions/season-2026.webp`（约 172KB）

## 四、清理

以下目录可加入 `.gitignore`：

```
docs/extract/pptx_imgs/
docs/extract/webp_converted/
docs/extract/pptx_raw.json
docs/extract/pdf_raw.json
```

`pptx_raw.json` 与 `pdf_raw.json` 是设计校对材料，确认 JSON 数据无误后可删除。

## 五、常见问题

**Q：PPTX 抽取的图片有些被跳过？**
A：脚本只处理 `MSO_SHAPE_TYPE.PICTURE`。组合形状内的图片不会被识别，需要在 PowerPoint 里 ungroup 后重新导出。

**Q：转换后的 WebP 模糊？**
A：提高 `convert_images.py` 中 `q` 参数（默认 78，可改为 82~88）。

**Q：图片顺序与 PPT 章节对不上？**
A：按 `slideXX_imgYY.webp` 命名，XX 是幻灯片序号，YY 是该页第几张图；详见 `docs/DATA_DICTIONARY.md`。