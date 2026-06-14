import type { Metadata } from 'next'
import Image from 'next/image'
import { Award, Heart, Users } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '关于我们',
  description: `了解${siteConfig.name}的发展历程、使命愿景与专业团队，${siteConfig.stats.yearsInService}年专注为长者提供高品质康养服务。`,
}

const milestones = [
  { year: '2010', event: '颐康养护中心正式成立，首批入住 30 位长者。' },
  { year: '2014', event: '通过民政局五星养老机构评定。' },
  { year: '2017', event: '与三甲医院签订战略合作，开通绿色转诊通道。' },
  { year: '2020', event: '二期园区落成，新增 200 张星级床位。' },
  { year: '2023', event: '获评 ISO 9001 质量管理体系认证。' },
]

export default function AboutPage() {
  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink">关于颐康</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            十三载初心不改，我们坚信——养老是一份需要耐心与专业的事业。
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Heart, title: '使命', desc: '为每一位长者提供有尊严、有温度的高品质康养服务。' },
            { icon: Award, title: '愿景', desc: '成为长者最信赖的晚年生活家园，行业康养标准的引领者。' },
            { icon: Users, title: '价值观', desc: '专业、爱心、责任、透明——把每一位长者当作自己的亲人。' },
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
            <Image src="/images/about.jpg" alt="颐康养护中心环境"
              fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>
          <div>
            <h2 className="section-title">从一席床位，到一个家</h2>
            <div className="mt-6 space-y-4 text-lg text-ink-soft leading-relaxed">
              <p>
                2010 年，几位医疗与养老行业的资深从业者共同发起颐康养护中心，
                初衷很简单：让中国的长者也能像国外长者一样，在晚年享有专业、温暖、有尊严的生活。
              </p>
              <p>
                十余年来，我们从 30 张床位的小院，发展到如今占地 50 亩、
                {siteConfig.beds}+ 张星级床位的花园式养护中心，
                但"把每一位长者当作自己的亲人"这一初心，从未改变。
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="section-title text-center">发展历程</h2>
          <ol className="mt-12 max-w-3xl mx-auto space-y-6">
            {milestones.map((m) => (
              <li key={m.year} className="flex gap-6 items-start">
                <div className="shrink-0 w-20 h-20 rounded-2xl bg-primary text-white grid place-items-center text-xl font-semibold">
                  {m.year}
                </div>
                <p className="text-lg text-ink leading-relaxed pt-3">{m.event}</p>
              </li>
            ))}
          </ol>
        </Container>
      </Section>
    </>
  )
}