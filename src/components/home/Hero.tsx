import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { data } from '@/lib/data'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="relative bg-secondary-soft/40">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24">
        {/* 左：文案 */}
        <div className="lg:col-span-5">
          <span className="inline-block px-4 py-2 rounded-full bg-surface text-primary text-sm font-medium mb-6 border border-primary/20">
            ⭐ {siteConfig.stats.scenicLevel} · 颐园·中国 茅山
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
            {siteConfig.slogan}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft leading-relaxed">
            {data.overview.careModes.join('、')}三位一体的综合性医养社区，
            毗邻国家 {siteConfig.stats.scenicLevel} 茅山风景区，
            占地 {siteConfig.stats.siteArea}、一期开放床位 {siteConfig.stats.phaseOneBeds}。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/visit"
              className="inline-flex items-center justify-center gap-2 min-h-btn px-8 bg-primary text-white text-lg font-medium rounded-xl shadow-soft hover:bg-primary-dark transition-colors">
              预约 2 天 1 夜体验游 <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 min-h-btn px-8 bg-surface text-primary border-2 border-primary text-lg font-medium rounded-xl hover:bg-primary hover:text-white transition-colors">
              <Phone className="w-5 h-5" /> 电话 {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* 数据条 */}
          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { v: siteConfig.stats.siteArea,   l: '医养小镇规模' },
              { v: siteConfig.stats.forestCoverage, l: '森林覆盖率' },
              { v: siteConfig.stats.negativeOxygen, l: '负氧离子 / cm³' },
            ].map((s) => (
              <div key={s.l} className="text-center md:text-left">
                <dt className="text-2xl md:text-3xl font-semibold text-primary">{s.v}</dt>
                <dd className="text-sm md:text-base text-ink-soft mt-1">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* 右：大图 */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/3] lg:aspect-[5/4] rounded-2xl overflow-hidden shadow-card bg-secondary-soft">
            <Image src="/images/hero.webp" alt="茅山颐园健康生活小镇全景"
              fill priority sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  )
}