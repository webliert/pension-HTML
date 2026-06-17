# 数据字典 — 业务字段来源对照表

> 所有 `src/data/*.json` 字段的来源映射。修改字段前请先回到原始素材核对。

## 项目总览 → `src/data/project-overview.json`

| 字段 | 来源 | 原文 |
|------|------|------|
| `name` | PDF 第 1 页 | "茅山颐园" |
| `subtitle` | PPT Slide 1 | "中国·长三角顶级园林式医养小镇" |
| `slogan` | JPG 长图 | "养生养老·自在享老" |
| `operator` | PDF 第 1 页 | "江苏默元养老服务管理有限公司" |
| `philosophy` | PDF 第 1 页 | "生态养生，自主享老" |
| `values` | PDF 第 1 页 | "快乐、自由、健康、长寿" |
| `siteAreaMu` / `siteAreaText` | PDF 第 1 页 | "占地 1700 亩" |
| `phaseOneBeds` | PDF 第 1 页 | "一期开放床位 600 余张" |
| `careModes` | PPT Slide 3 | "居家养老、机构式养老、社区式养老" |
| `stats.scenicLevel` | PDF 第 3 页 | "国家 5A 级茅山旅游风景度假区" |
| `stats.forestCoverage` | PDF 第 3 页 | "森林覆盖率 91.6%" |
| `stats.negativeOxygen` | PDF 第 3 页 | "负氧离子…每立方厘米 2.8 万个" |
| `stats.hospitalInvestment` | PPT Slide 11 | "总投资 16 亿元" |
| `stats.hospitalBeds` | PPT Slide 11 | "设置床位 600 张" |
| `stats.hospitalLand` | PPT Slide 11 | "占地 100 余亩" |
| `stats.hospitalBuilding` | PPT Slide 11 | "建筑面积约 8.3 万平方米" |
| `stats.academyArea` | PDF 第 9 页 | "卿舸书院共约 2 万平方米" |
| `stats.streetArea` | PPT Slide 22 | "总面积约 9300 平方米" |
| `stats.streetShops` | PPT Slide 22 | "可汇聚大小商铺约 40 户" |
| `stats.annualVisitors` | PPT Slide 22 | "年游客量达 600 万人次" |

## 区位交通 → `src/data/location.json`

| 字段 | 来源 | 原文 |
|------|------|------|
| `address` | PDF 第 1 页 | "常州市金坛区国家五A级茅山旅游风景度假区" |
| `transit[0].mode=体验班车` | PDF 第 4 页 | "体验班车：每月约 12 班次往返" |
| `transit[1].mode=高铁` | PPT Slide 6 + PDF 第 4 页 | "沿江高铁茅山东站 2.7 公里；金坛高铁站 25 分钟" |
| `transit[2].mode=公交` | PDF 第 4 页 | "公交车 252 路线、茅山游 1 路" |
| `transit[3].mode=自驾` | PPT Slide 6 | "南京 1 小时都市圈" |
| `nearbyAttractions` | PDF 第 3 页 | "东方盐湖城、乾元观、元阳观、仙姑村、花谷奇缘…" |

## 设施业态 → `src/data/facilities.json`（9 大业态）

| id | name | 来源 PPT slide |
|----|------|---------------|
| `yixinyuan` | 逸心园康养住宅 | Slide 8 |
| `jianbinlou` | 健宾楼康养公寓 | Slide 9 |
| `wellness-club` | 丰盛康乐配套 | Slide 10 |
| `jiangnan-hospital` | 江南医院 | Slide 11 |
| `jiangnan-checkup` | 江南医院体检中心 | Slide 12 |
| `sangyutang` | 桑榆堂护理院 | Slide 13 |
| `qingge-academy` | 卿舸书院 | Slide 14-18 |
| `yushanfang` | 玉膳房 | Slide 20 |
| `wugu-farm` | 吾谷农场 | Slide 21 |
| `maoshan-street` | 茅山商业水街 | Slide 22-23 |

## 医疗保障 → `src/data/healthcare.json`

| 字段 | 来源 |
|------|------|
| `hospital.investment` | PPT Slide 11：16 亿元 |
| `hospital.landArea` | PPT Slide 11：100 余亩 |
| `hospital.buildingArea` | PPT Slide 11：8.3 万㎡ |
| `hospital.beds` | PPT Slide 11：600 张 |
| `hospital.level` | PPT Slide 11：国家三级综合医院 |
| `hospital.standard` | PPT Slide 11：国际 JCI |
| `hospital.medicalInsurance` | PPT Slide 11：常州市、金坛区医保定点 |
| `checkup.partners` | PPT Slide 12：上海一院、金坛一院 |
| `nursing.unique` | PPT Slide 13：金坛目前唯一一家护理院 |
| `nursing.departments` | PPT Slide 13：内科、康复医学科、临终关怀科、医学检验科、医学影像科 |

## 书院生活 → `src/data/lifestyle.json`

| 字段 | 来源 |
|------|------|
| `academy.area` | PDF 第 9 页：约 2 万㎡ |
| `academy.zones` | PPT Slide 14：文教/娱乐/活动/艺术/运动/会议 6 区 |
| `academy.facilities` | PDF 第 9 页：茶坊/泳池/书画/棋牌/影院/台球/羽毛球/乒乓/手工/练歌/舞蹈/宗教 |
| `philosophy.items[0]` | PPT Slide 16：乐 → 快乐长者 |
| `philosophy.items[1]` | PPT Slide 16：学 → 好学长者 |
| `philosophy.items[2]` | PPT Slide 16：为 → 有为长者 |
| `philosophy.items[3]` | PPT Slide 16：序 → 成功长者 |

## 套餐价格 → `src/data/pricing.json`

| 字段 | 来源 |
|------|------|
| `packages[0]` (康养包 5 万) | PDF 第 12 页 |
| `packages[1]` (福养包 10 万) | PDF 第 12 页 |
| `packages[2]` (寿养包 16 万) | PDF 第 12 页 |

## 体验活动 → `src/data/promotion.json`

| 字段 | 来源 |
|------|------|
| `current.title` | JPG 长图："2026 全年四季度候鸟旅居计划" |
| `current.items[0]` | JPG 长图：三天两夜深度体验 118 元/人 |
| `current.items[1]` | JPG 长图：两人成行 110 元/人 |
| `experience.title` | PDF 第 16 页："2 天 1 夜参观体验游" |
| `experience.price` | PDF 第 16 页：惊爆价 118 元/人 |
| `experience.quota` | PDF 第 16 页：限前 100 名 |

## 发展历程 → `src/data/milestones.json`

`items[].year/title/summary` 字段从 PPT Slide 1（项目定位）+ PPT Slide 11/13/14/22（开业时点）综合整理。具体年份由运营方核对后调整。