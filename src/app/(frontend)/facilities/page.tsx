import type { Metadata } from 'next'
import Image from 'next/image'
import { BedDouble, Wifi, Car, Trees, Coffee, Tv, Bath, Wind } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: '设施环境',
  description: '颐康养护中心占地 50 亩，500+ 张星级床位，南向采光居室，3000㎡ 园林庭院，设施齐全适合长者居住。',
}

const roomTypes = [
  { name: '舒适单人间', area: '约 25㎡', price: '¥ 6,800 /月起', features: ['独立卫浴', '南向落地窗', '适老化家具'] },
  { name: '温馨双人间', area: '约 35㎡', price: '¥ 4,800 /月起', features: ['独立卫浴', '阳台', '可定制软装'] },
  { name: '尊享套房',   area: '约 50㎡', price: '¥ 9,800 /月起', features: ['独立客厅', '独立卫浴', '家属陪住区'] },
]

const amenities = [
  { icon: BedDouble, name: '适老化床位' },
  { icon: Wifi,      name: '全屋 Wi-Fi' },
  { icon: Car,       name: '无障碍车位' },
  { icon: Trees,     name: '3000㎡ 园林' },
  { icon: Coffee,    name: '休闲咖啡吧' },
  { icon: Tv,        name: '影音活动厅' },
  { icon: Bath,      name: '助浴中心' },
  { icon: Wind,      name: '中央空调 · 新风' },
]

export default function FacilitiesPage() {
  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold">设施与环境</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            花园式养护中心，从居室到公共空间，每一处都为长者精心设计。
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-secondary-soft shadow-card">
            <Image src="/images/facility-overview.jpg" alt="颐康养护中心全景"
              fill sizes="100vw" className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <h2 className="section-title text-center">房型选择</h2>
          <p className="section-subtitle mx-auto text-center">所有房间均为南向采光，配备紧急呼叫系统与适老化家具。</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {roomTypes.map((r) => (
              <div key={r.name} className="bg-surface rounded-2xl p-8 border border-line hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold">{r.name}</h3>
                <div className="mt-2 text-base text-ink-soft">{r.area}</div>
                <div className="mt-4 text-2xl font-semibold text-primary">{r.price}</div>
                <ul className="mt-6 space-y-2 text-base text-ink">
                  {r.features.map((f) => <li key={f}>· {f}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink-soft">
            * 价格仅供参考，具体以现场评估与签约为准
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="section-title text-center">配套齐全</h2>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((a) => (
              <div key={a.name} className="flex flex-col items-center text-center p-6 bg-surface rounded-2xl border border-line">
                <a.icon className="w-10 h-10 text-primary" aria-hidden />
                <div className="mt-3 text-base text-ink">{a.name}</div>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}