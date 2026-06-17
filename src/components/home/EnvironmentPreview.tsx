import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Trees, Sun, Sparkles } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { data } from '@/lib/data'

const highlights = [
  {
    icon: Trees,
    title: `${data.overview.stats.scenicLevel} 茅山风景区`,
    desc: `森林覆盖率 ${data.overview.stats.forestCoverage}，负氧离子 ${data.overview.stats.negativeOxygen}。`,
  },
  {
    icon: Sun,
    title: `${data.overview.stats.siteArea} CCRC 综合社区`,
    desc: '南京 1 小时都市圈，长三角顶级园林式医养小镇。',
  },
  {
    icon: Sparkles,
    title: '苏式园林与徽派建筑',
    desc: '和谐静美的医养社区，构建现代人对田园健康生活的理想栖居地。',
  },
]

export function EnvironmentPreview() {
  return (
    <Section tone="warm">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-card bg-secondary-soft">
            <Image src="/images/facility-main.webp" alt="茅山颐园健康生活小镇实景"
              fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <h2 className="section-title">家在茅山，心归自然</h2>
          <p className="mt-4 text-lg text-ink-soft leading-relaxed">
            毗邻{data.overview.stats.scenicLevel}茅山风景区，以"生态养生，自主享老"理念
            打造{data.overview.stats.siteArea}高品质医养社区。
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