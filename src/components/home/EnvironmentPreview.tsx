import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Trees, Sun, Coffee } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const highlights = [
  { icon: Trees, title: '3000㎡ 园林庭院', desc: '四季有景，太极步道、休憩凉亭亲近自然。' },
  { icon: Sun,   title: '南向采光居室', desc: '所有房间均朝南设计，落地窗引入充足阳光。' },
  { icon: Coffee,title: '多功能公共区', desc: '阅览室、手工坊、棋牌室、影音厅一应俱全。' },
]

export function EnvironmentPreview() {
  return (
    <Section tone="warm">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-card bg-secondary-soft">
            <Image src="/images/facility-main.jpg" alt="颐康养护中心户外园林环境"
              fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="section-title">家在颐康，心归自然</h2>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            占地 50 亩的花园式养护中心，毗邻城市绿肺，
            以"居家 + 园林 + 康养"理念打造适宜长者居住的安心之所。
          </p>
          <ul className="mt-8 space-y-5">
            {highlights.map((h) => (
              <li key={h.title} className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-surface text-primary grid place-items-center shadow-soft">
                  <h.icon className="w-6 h-6" aria-hidden />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-ink">{h.title}</h3>
                  <p className="mt-1 text-base text-ink-soft">{h.desc}</p>
                </div>
              </li>
            ))}
          </ul>
          <Link href="/facilities"
            className="mt-8 inline-flex items-center gap-2 text-primary text-lg font-medium hover:text-primary-dark no-underline">
            了解设施详情 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}