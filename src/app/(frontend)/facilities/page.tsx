import type { Metadata } from 'next'
import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { data } from '@/lib/data'

export const metadata: Metadata = {
  title: '设施业态',
  description: '茅山颐园 9 大业态：逸心园康养住宅、健宾楼康养公寓、丰盛康乐配套、江南医院、桑榆堂护理院、卿舸书院、玉膳房、吾谷农场、茅山商业水街。',
}

const roomTypes = [
  {
    name: '逸心园康养住宅',
    area: '花园洋房',
    features: ['全屋臻装', '拎包入住', '高品质社区'],
    image: '/images/facility-yixinyuan.webp',
  },
  {
    name: '健宾楼活力公寓',
    area: '约 30㎡ 标准间 / 50㎡ 套房',
    features: ['4 层', '近百间公寓', '依山傍水'],
    image: '/images/facility-jianbinlou.webp',
  },
  {
    name: '桑榆堂护理院',
    area: '医保定点',
    features: ['金坛唯一', '嵌入式护理', '临终关怀'],
    image: '/images/facility-nursing.webp',
  },
]

const facilities = data.facilities

export default function FacilitiesPage() {
  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold">设施业态</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            九大业态一体化的综合性医养社区，构建完整长者生活生态。
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative aspect-[21/9] rounded-2xl overflow-hidden bg-secondary-soft shadow-card">
            <Image src="/images/facility-overview.webp" alt="茅山颐园全景"
              fill sizes="100vw" className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <h2 className="section-title text-center">居住选择</h2>
          <p className="section-subtitle mx-auto text-center">从活力公寓到护理床位，覆盖不同健康阶段。</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {roomTypes.map((r) => (
              <div key={r.name} className="bg-surface rounded-2xl border border-line overflow-hidden hover:border-primary transition-colors">
                <div className="relative aspect-[16/10] bg-secondary-soft">
                  <Image src={r.image} alt={r.name} fill sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-semibold">{r.name}</h3>
                  <div className="mt-2 text-base text-ink-soft">{r.area}</div>
                  <ul className="mt-6 space-y-2 text-base text-ink">
                    {r.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" aria-hidden />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="section-title text-center">九大业态</h2>
          <p className="section-subtitle mx-auto text-center">居所 · 医疗 · 护理 · 书院 · 膳食 · 农场 · 商业 一体化</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((f) => (
              <article key={f.id} className="bg-surface rounded-2xl border border-line overflow-hidden hover:shadow-card transition-shadow">
                <div className="relative aspect-[16/10] bg-secondary-soft">
                  <Image src={f.image} alt={f.name} fill sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{f.name}</h3>
                  <p className="mt-1 text-sm text-primary">{f.tagline}</p>
                  <p className="mt-3 text-base text-ink-soft leading-relaxed">{f.summary}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {f.highlights.slice(0, 3).map((h) => (
                      <li key={h} className="text-xs px-2 py-1 rounded-full bg-secondary-soft text-ink">{h}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}