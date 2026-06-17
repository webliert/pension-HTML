import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { data } from '@/lib/data'

export const metadata: Metadata = {
  title: '体验活动',
  description: `${data.promotion.current.title}：三天两夜深度体验 118 元 / 人，两人成行 110 元 / 人。`,
}

export default function PromotionPage() {
  const { current, experience } = data.promotion
  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <span className="inline-block px-4 py-2 rounded-full bg-primary text-white text-sm font-medium mb-4">
            {current.badge}
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink">{current.title}</h1>
          <p className="mt-2 text-lg text-ink-soft">{current.subtitle}</p>
          <p className="mt-4 text-base text-ink-soft max-w-2xl leading-relaxed">{current.summary}</p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="relative aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden bg-secondary-soft shadow-card">
            <Image src={current.image} alt={current.title}
              fill priority sizes="100vw" className="object-cover" />
          </div>
        </Container>
      </Section>

      <Section tone="warm">
        <Container>
          <h2 className="section-title text-center">限时体验价</h2>
          <p className="section-subtitle mx-auto text-center flex items-center justify-center gap-2">
            <Calendar className="w-5 h-5" aria-hidden />
            有效期至 {current.expires}
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {current.items.map((item) => (
              <div key={item.label}
                className={`bg-surface rounded-2xl p-8 border ${item.highlight ? 'border-primary shadow-card' : 'border-line'} transition-colors`}>
                <div className="text-base text-ink-soft">{item.label}</div>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-5xl font-semibold text-primary">¥{item.price}</span>
                  <span className="text-base text-ink-soft">{item.unit}</span>
                </div>
                {item.highlight && (
                  <p className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                    <Sparkles className="w-4 h-4" aria-hidden /> 推荐
                  </p>
                )}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">{experience.title}</h2>
            <p className="mt-4 text-lg text-ink-soft leading-relaxed">{experience.summary}</p>
            <ul className="mt-6 space-y-3">
              {experience.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-lg text-ink leading-relaxed">
                  <span className="text-primary">✓</span> {h}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base text-ink-soft">
              名额：<strong>{experience.quota}</strong>　价格：<strong className="text-primary">{experience.price}</strong>
            </p>
            <Link href="/visit"
              className="mt-8 inline-flex items-center gap-2 min-h-btn px-8 bg-primary text-white text-lg font-medium rounded-xl shadow-soft hover:bg-primary-dark transition-colors no-underline">
              立即预约体验 <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary-soft shadow-card">
            <Image src="/images/gallery-7.webp" alt="颐园活动现场"
              fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
        </Container>
      </Section>
    </>
  )
}