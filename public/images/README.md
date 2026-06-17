# 公共图片目录

本目录存放站点公开访问的图片资源。文件名遵循 kebab-case + 用途命名规范，扩展名统一为 `.webp`。

## 通用图

| 文件名 | 用途 | 来源 PPT slide | 建议尺寸 |
|--------|------|---------------|---------|
| `hero.webp` | 首页 Hero 大图 | slide03（项目实景） | 1600×1200 |
| `facility-main.webp` | 首页环境预览图 | slide04（健康小镇实景） | 1200×750 |
| `facility-overview.webp` | 设施页全景图 | slide04（健康小镇实景） | 2000×860 |
| `about.webp` | 关于页配图 | slide07（小镇地图） | 1200×900 |
| `og-cover.webp` | 社交分享 OG 图 | slide01（颐园全景导览） | 1200×630 |

## 服务配图（6 张）

| 文件名 | 用途 | 来源 PPT slide |
|--------|------|---------------|
| `service-1.webp` | 逸心园康养住宅 | slide08 |
| `service-2.webp` | 健宾楼康养公寓 | slide09 |
| `service-3.webp` | 丰盛康乐配套 | slide10 |
| `service-4.webp` | 江南医院 | slide11 |
| `service-5.webp` | 桑榆堂护理院 | slide13 |
| `service-6.webp` | 卿舸书院内设施 | slide15 |

每张建议 800×600。

## 环境展示图（9 张）

| 文件名 | 用途 | 来源 PPT slide |
|--------|------|---------------|
| `gallery-1.webp` | 景区资源 | slide05 |
| `gallery-2.webp` | 交通区位 | slide06 |
| `gallery-3.webp` | 逸心园洋房 | slide08 |
| `gallery-4.webp` | 健宾楼 | slide09 |
| `gallery-5.webp` | 卿舸书院外观 | slide14 |
| `gallery-6.webp` | 卿舸书院内景 | slide15 |
| `gallery-7.webp` | 书院活动 | slide19 |
| `gallery-8.webp` | 商业水街 | slide22 |
| `gallery-9.webp` | 生活小镇 | slide23 |

每张建议 800×600。

## 业态配图（10 张，facilities.json 引用）

| 文件名 | 业态 | 来源 PPT slide |
|--------|------|---------------|
| `facility-yixinyuan.webp` | 逸心园康养住宅 | slide08 |
| `facility-jianbinlou.webp` | 健宾楼康养公寓 | slide09 |
| `facility-wellness.webp` | 丰盛康乐配套 | slide10 |
| `facility-hospital.webp` | 江南医院 | slide11 |
| `facility-checkup.webp` | 江南医院体检中心 | slide12 |
| `facility-nursing.webp` | 桑榆堂护理院 | slide13 |
| `facility-academy.webp` | 卿舸书院 | slide14 |
| `facility-dining.webp` | 玉膳房 | slide20 |
| `facility-farm.webp` | 吾谷农场 | slide21 |
| `facility-street.webp` | 茅山商业水街 | slide22 |

每张建议 1200×750。

## 资源处理流程

1. 从 `resource/茅山颐园介绍2024-9.pptx` 抽取图片 → `docs/extract/pptx_imgs/`
   （运行 `python3 scripts/extract_data/extract_pptx.py`）
2. 批量转 WebP → `docs/extract/webp_converted/`
   （运行 `python3 scripts/convert_images.py`）
3. 按映射表发布到 `public/images/`（运行 `python3 scripts/publish_images.py`）

详见 `docs/IMAGE_NAMING.md`。