import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { Container } from '@/components/ui/Container'

export function Hero() {
  return (
    <section className="relative bg-secondary-soft/40">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center py-16 md:py-24">
        {/* 左：文案 */}
        <div className="lg:col-span-5">
          <span className="inline-block px-4 py-2 rounded-full bg-surface text-primary text-sm font-medium mb-6 border border-primary/20">
            ⭐ 国家五星养老机构 · 民政局认证
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-ink leading-tight">
            {siteConfig.slogan}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft leading-relaxed">
            专业医养结合，为长者打造有尊严、有温度的晚年生活。
            {siteConfig.beds}+ 张床位 · {siteConfig.stats.yearsInService} 年专注康养 · 24 小时医护值守。
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/visit"
              className="inline-flex items-center justify-center gap-2 min-h-btn px-8 bg-primary text-white text-lg font-medium rounded-xl shadow-soft hover:bg-primary-dark transition-colors">
              预约参观 <ArrowRight className="w-5 h-5" />
            </Link>
            <a href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 min-h-btn px-8 bg-surface text-primary border-2 border-primary text-lg font-medium rounded-xl hover:bg-primary hover:text-white transition-colors">
              <Phone className="w-5 h-5" /> 电话 {siteConfig.phoneDisplay}
            </a>
          </div>

          {/* 数据条 */}
          <dl className="mt-12 grid grid-cols-3 gap-4 max-w-lg">
            {[
              { v: `${siteConfig.stats.yearsInService}+`, l: '年专注康养' },
              { v: `${siteConfig.beds}+`,    l: '张星级床位' },
              { v: `${siteConfig.stats.satisfaction}%`, l: '家属满意度' },
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
            <Image src="/images/hero.jpg" alt="颐康养护中心温馨的公共活动空间"
              fill priority sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover" />
          </div>
        </div>
      </Container>
    </section>
  )
}