/**
 * 业务数据聚合入口。Next.js App Router 支持 JSON 静态 import，
 * 构建时内联，无运行时 fetch 开销。
 *
 * 字段定义详见 src/data/types.d.ts，字段来源详见 docs/DATA_DICTIONARY.md。
 */
import overview from '@/data/project-overview.json'
import facilities from '@/data/facilities.json'
import pricing from '@/data/pricing.json'
import promotion from '@/data/promotion.json'
import location from '@/data/location.json'
import milestones from '@/data/milestones.json'
import healthcare from '@/data/healthcare.json'
import lifestyle from '@/data/lifestyle.json'

import type {
  Facility,
  PricingPackage,
  Promotion,
  Milestone,
  Location,
  PromotionItem,
  TransitOption,
  FacilityType,
} from '@/data/types'

export const data = {
  overview: overview as typeof overview & { stats: Record<string, string> },
  facilities: facilities as Facility[],
  pricing: pricing as { currency: string; packages: PricingPackage[]; notes: string },
  promotion: promotion as Promotion,
  location: location as Location,
  milestones: milestones as { items: Milestone[] },
  healthcare: healthcare as typeof healthcare,
  lifestyle: lifestyle as typeof lifestyle,
}

export type {
  Facility,
  PricingPackage,
  Promotion,
  PromotionItem,
  Milestone,
  Location,
  TransitOption,
  FacilityType,
}