import type { Metadata } from 'next'
import { Phone, MapPin, Mail, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '联系我们',
  description: `联系${siteConfig.name}：${siteConfig.phoneDisplay}，地址：${siteConfig.address}。${siteConfig.workingHours}。`,
}

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteConfig.name,
    telephone: siteConfig.phone,
    address: { '@type': 'PostalAddress', streetAddress: siteConfig.address, addressCountry: 'CN' },
    openingHours: 'Mo-Su 09:00-18:00',
    url: siteConfig.url,
  }

  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold">联系我们</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            欢迎致电或亲临参观，专属顾问为您提供一对一咨询服务。
          </p>
        </Container>
      </Section>

      <Section>
        <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-6">
            {[
              { icon: Phone, title: '咨询热线', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
              { icon: MapPin, title: '中心地址', value: siteConfig.address },
              { icon: Mail, title: '邮箱',     value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Clock, title: '接待时间', value: siteConfig.workingHours },
            ].map((c) => {
              const content = (
                <>
                  <div className="w-12 h-12 rounded-xl bg-secondary-soft text-primary grid place-items-center shrink-0">
                    <c.icon className="w-6 h-6" aria-hidden />
                  </div>
                  <div>
                    <div className="text-base text-ink-soft">{c.title}</div>
                    <div className="mt-1 text-lg font-medium text-ink">{c.value}</div>
                  </div>
                </>
              )
              return c.href
                ? <a key={c.title} href={c.href} className="flex items-start gap-4 bg-surface rounded-2xl p-6 border border-line hover:border-primary transition-colors no-underline">{content}</a>
                : <div key={c.title} className="flex items-start gap-4 bg-surface rounded-2xl p-6 border border-line">{content}</div>
            })}
          </div>

          <Card>
            <div className="aspect-[4/3] bg-secondary-soft rounded-xl grid place-items-center text-ink-soft text-base text-center p-8">
              <div>
                <MapPin className="w-12 h-12 mx-auto text-primary mb-3" aria-hidden />
                <div>地图区域</div>
                <div className="mt-2 text-sm">部署后替换为百度/高德地图嵌入代码</div>
              </div>
            </div>
            <p className="mt-4 text-base text-ink-soft">
              公交：XXX 路 / XXX 路 至「康养中心」站下车即到<br />
              自驾：导航搜索「{siteConfig.name}」
            </p>
          </Card>
        </Container>
      </Section>

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  )
}