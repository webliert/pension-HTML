import type { Metadata } from 'next'
import Image from 'next/image'
import { Mountain, Sprout, Heart } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/site-config'
import { data } from '@/lib/data'

export const metadata: Metadata = {
  title: '关于颐园',
  description: `了解${siteConfig.name}的发展历程、理念与服务。位于国家 5A 级茅山风景度假区，由江苏默元养老服务管理有限公司运营。`,
}

export default function AboutPage() {
  const { overview, milestones } = data
  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink">关于茅山颐园</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            十二年初心不改，{siteConfig.slogan}。
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: Mountain,
              title: '理念',
              desc: `「${overview.philosophy}」，让每一位入住颐园的长者实现「${overview.values.join('、')}」的梦想。`,
            },
            {
              icon: Sprout,
              title: '规模',
              desc: `占地 ${overview.stats.siteArea}，一期开放床位 ${overview.stats.phaseOneBeds}，${overview.careModes.join('、')}三位一体。`,
            },
            {
              icon: Heart,
              title: '运营',
              desc: `${overview.operator}运营，毗邻国家 ${overview.stats.scenicLevel} 茅山风景区。`,
            },
          ].map((m) => (
            <div key={m.title} className="bg-surface rounded-2xl p-8 border border-line">
              <div className="w-14 h-14 rounded-xl bg-primary text-white grid place-items-center mb-5">
                <m.icon className="w-7 h-7" aria-hidden />
              </div>
              <h2 className="text-2xl font-semibold">{m.title}</h2>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section tone="warm">
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary-soft shadow-card">
            <Image src="/images/about.webp" alt="茅山颐园小镇全景"
              fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="section-title">从一片山林，到一方颐养</h2>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                茅山颐园健康生活小镇择址常州市金坛区，位于国家 5A 级茅山旅游风景度假区内，
                也是南京都市经济圈中集生态环境、文化旅游、人居生活高品位的重点区域。
              </p>
              <p>
                项目结合中国道教养生文化和茅山独特的人文历史，打造 {overview.stats.siteArea} 和谐静美的苏式园林与徽派建筑相结合的医养社区。
                公司倡导「{overview.philosophy}」的理念，致力让每一位入住颐园的长者实现
                「{overview.values.join('、')}」的梦想。
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="section-title text-center">发展历程</h2>
          <ol className="mt-12 max-w-3xl mx-auto space-y-6">
            {milestones.items.map((m) => (
              <li key={m.year} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-primary text-white grid place-items-center text-xl font-semibold">
                  {m.year}
                </div>
                <div className="pt-3">
                  <h3 className="text-lg font-semibold text-ink">{m.title}</h3>
                  <p className="mt-1 text-base text-ink-soft leading-relaxed">{m.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  )
}