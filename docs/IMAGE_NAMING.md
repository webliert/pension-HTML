# 图片命名规范

> `public/images/` 目录内的所有图片文件命名约定与发布流程。

## 命名规则

| 前缀 | 用途 | 数量 | 建议尺寸 |
|------|------|------|---------|
| `hero` | 首页 Hero 主图 | 1 | 1600×1200 |
| `og-cover` | OG 社交分享卡 | 1 | 1200×630 |
| `about` | 关于页配图 | 1 | 1200×900 |
| `facility-main` | 首页环境预览 | 1 | 1200×750 |
| `facility-overview` | 设施页全景 | 1 | 2000×860 |
| `facility-{id}` | 业态配图（与 facilities.json 的 id 对应） | 10 | 1200×750 |
| `service-N` | 服务配图（N=1..6） | 6 | 800×600 |
| `gallery-N` | 实景图集（N=1..9） | 9 | 800×600 |

**扩展名**：统一 `.webp`（q=78，最长边 1600px）。

## 业态 id 与图片映射

| id | 业态 | 文件 |
|----|------|------|
| `yixinyuan` | 逸心园康养住宅 | `facility-yixinyuan.webp` |
| `jianbinlou` | 健宾楼康养公寓 | `facility-jianbinlou.webp` |
| `wellness-club` | 丰盛康乐配套 | `facility-wellness.webp` |
| `jiangnan-hospital` | 江南医院 | `facility-hospital.webp` |
| `jiangnan-checkup` | 江南医院体检中心 | `facility-checkup.webp` |
| `sangyutang` | 桑榆堂护理院 | `facility-nursing.webp` |
| `qingge-academy` | 卿舸书院 | `facility-academy.webp` |
| `yushanfang` | 玉膳房 | `facility-dining.webp` |
| `wugu-farm` | 吾谷农场 | `facility-farm.webp` |
| `maoshan-street` | 茅山商业水街 | `facility-street.webp` |

## 营销长图

`public/promotions/` 目录存放季节性促销活动海报：

| 文件 | 用途 | 来源 |
|------|------|------|
| `season-2026.webp` | 2026 候鸟旅居计划 | `resource/mmexport1781423506803.jpg` |

## 重新生成

```bash
# 1) 抽取 PPT 图片
python3 scripts/extract_data/extract_pptx.py

# 2) 批量转 WebP
python3 scripts/convert_images.py

# 3) 按映射表发布
python3 scripts/publish_images.py

# 4) 营销长图转 WebP（单独命令）
ffmpeg -i resource/mmexport1781423506803.jpg -c:v libwebp -q 82 -y public/promotions/season-2026.webp
```

## 注意事项

1. **肖像权**：PPT 中含长者活动照（slide19_*），发布前需与运营方确认肖像权授权。
2. **尺寸上限**：`max(1600, native)` — 超过 1600px 缩放，否则保留原始尺寸。
3. **Gitee Pages 100MB 资源上限**：当前 public/images/ 共约 2.5MB，加上 promotions/ 180KB，剩余空间充足。
4. **静态导出 `images.unoptimized: true`**：所有 WebP 必须预生成，不能依赖 Next.js `<Image loader>`。
5. **不要复制 PPTX / PDF 进 public/**：原始大文件（48.7MB + 9.7MB）保留在 `resource/`。