// JSON 数据集配套 TS 类型 — 仅用于 IDE 提示与可选 zod 校验
// 数据源详见 docs/DATA_DICTIONARY.md

export type FacilityType =
  | 'residential'   // 逸心园康养住宅
  | 'apartment'     // 健宾楼康养公寓
  | 'wellness'      // 丰盛康乐配套
  | 'medical'       // 江南医院
  | 'checkup'       // 体检中心
  | 'nursing'       // 桑榆堂护理院
  | 'academy'       // 卿舸书院
  | 'dining'        // 玉膳房
  | 'farm'          // 吾谷农场
  | 'commercial'    // 商业水街

export interface Facility {
  id: string
  name: string
  type: FacilityType
  tagline: string
  summary: string
  highlights: string[]
  image: string
}

export interface PricingPackage {
  id: string
  name: string
  price: number
  priceText: string
  tagline: string
  desc: string
  includes: string[]
}

export interface PromotionItem {
  label: string
  price: number
  unit: string
  highlight: boolean
}

export interface Promotion {
  current: {
    title: string
    subtitle: string
    badge: string
    image: string
    expires: string
    items: PromotionItem[]
    summary: string
  }
  experience: {
    title: string
    quota: string
    price: string
    highlights: string[]
    summary: string
  }
}

export interface Milestone {
  year: string
  title: string
  summary: string
}

export interface TransitOption {
  mode: string
  detail: string
  highlight: boolean
}

export interface Location {
  address: string
  shortAddress: string
  scenicLevel: string
  forestCoverage: string
  negativeOxygen: string
  transit: TransitOption[]
  nearbyAttractions: string[]
}