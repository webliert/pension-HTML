export const siteConfig = {
  name: '颐康养护中心',
  shortName: '颐康',
  slogan: '颐养天年，从一席安心开始',
  description: '颐康养护中心是一家专业医养结合的五星级养老机构，为长者提供日常照护、医疗保健、康复理疗、营养膳食等全方位服务，让每一位长者安享有尊严、有温度的晚年生活。',
  url: 'https://your-domain.com',        // ← 部署后替换
  phone: '400-888-8888',                  // ← 占位，全局搜索替换
  phoneDisplay: '400-888-8888',
  address: '北京市朝阳区康养路88号',       // ← 占位
  workingHours: '周一至周日 9:00-18:00',
  email: 'service@yikang-care.com',
  founded: 2010,
  beds: 500,
  stats: {
    yearsInService: 12,
    residents: 380,
    bedCount: 500,
    satisfaction: 98,
  },
  social: {
    bilibili:  'https://space.bilibili.com/your-id',
    douyin:    'https://www.douyin.com/user/your-id',
    wechatChannel: 'https://channels.weixin.qq.com/your-id',
    wechatOA:  'https://mp.weixin.qq.com/your-oa',
  },
  nav: [
    { href: '/',         label: '首页' },
    { href: '/about',    label: '关于我们' },
    { href: '/services', label: '康养服务' },
    { href: '/facilities', label: '设施环境' },
    { href: '/gallery',  label: '环境展示' },
    { href: '/contact',  label: '联系我们' },
  ],
} as const