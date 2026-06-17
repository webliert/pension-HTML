/**
 * 全站静态配置 — 茅山颐园·江苏金坛
 *
 * 业务数据来源：resource/茅山颐园介绍2024-9.pptx + resource/颐园宣传手册.pdf
 * 长篇/多列表数据见 src/data/*.json，由 src/lib/data.ts 聚合。
 *
 * 修改前注意：
 * - phone / email / ICP 备案号在原始素材中未提供，使用占位符 + TODO，
 *   部署前必须替换为真实信息。
 */
export const siteConfig = {
  // === 基础信息 ===
  name: '茅山颐园',
  shortName: '茅山颐园',
  slogan: '养生养老·自在享老',
  subtitle: '中国·长三角顶级园林式医养小镇',
  tagline: '颐园·中国 茅山',
  description:
    '茅山颐园健康生活小镇位于国家 5A 级茅山旅游风景度假区，由江苏默元养老服务管理有限公司运营。' +
    '占地 1700 亩，一期开放床位 600 余张，提供康养住宅、活力公寓、三级综合医院（金坛医保定点）、' +
    '桑榆堂护理院、卿舸书院、玉膳房与茅山商业水街一体化医养服务。',

  // === 联系（TODO: 部署前替换为真实信息）===
  url: 'https://maoshan-yiyuan.example.com',
  phone: '18658869354',
  phoneDisplay: '18658869354',
  email: '390156595@qq.com',
  address: '江苏省常州市金坛区国家 5A 级茅山旅游风景度假区',
  shortAddress: '常州金坛·茅山',
  workingHours: '周一至周日 9:00-18:00',
  icp: '苏ICP备XXXXXXXX号-1',

  // === 业务统计（来自 project-overview.json.stats）===
  stats: {
    siteArea: '1700 亩',
    phaseOneBeds: '600+ 张',
    scenicLevel: '国家 5A 级',
    forestCoverage: '91.6%',
    negativeOxygen: '2.8 万 / cm³',
    academyArea: '约 2 万㎡',
    hospitalInvestment: '16 亿',
    hospitalBeds: '600 张',
    hospitalLand: '100+ 亩',
    streetArea: '9300 ㎡',
    streetShops: '40 户',
    annualVisitors: '600 万人次',
  },

  // === 社交 ===
  social: {
    wechatOA: '',
    wechatChannel: '',
    douyin: '',
    bilibili: '',
  },

  // === 导航 ===
  nav: [
    { href: '/', label: '首页' },
    { href: '/about', label: '关于颐园' },
    { href: '/services', label: '康养服务' },
    { href: '/facilities', label: '设施业态' },
    { href: '/gallery', label: '实景图集' },
    { href: '/promotion', label: '体验活动' },
    { href: '/contact', label: '联系我们' },
  ],
} as const

export type SiteConfig = typeof siteConfig