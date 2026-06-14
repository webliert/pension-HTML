import type { Metadata } from 'next'
import { Phone, MapPin, Clock } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { VisitForm } from '@/components/visit/VisitForm'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '预约参观',
  description: `预约参观${siteConfig.name}，填写表单后专属顾问将在 1 小时内联系您。联系电话：${siteConfig.phoneDisplay}。`,
}

export default function VisitPage() {
  return (
    <>
      {/* Hero */}
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold text-ink">预约参观</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            填写下方信息，专属顾问将在 <strong className="text-primary">1 小时内</strong> 与您联系，
            陪同参观并解答所有疑问。
          </p>
        </Container>
      </Section>

      {/* 主体：表单 + 侧栏 */}
      <Section>
        <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <VisitForm />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-surface rounded-2xl p-6 md:p-8 border border-line">
              <h3 className="text-xl font-semibold text-ink">为什么提前预约</h3>
              <ul className="mt-4 space-y-3 text-base text-ink-soft leading-relaxed">
                <li className="flex gap-2"><span className="text-primary">·</span>专属顾问 1 对 1 陪同参观，避免打扰其他长者</li>
                <li className="flex gap-2"><span className="text-primary">·</span>根据长者情况提前准备个性化介绍资料</li>
                <li className="flex gap-2"><span className="text-primary">·</span>可安排试住体验餐与活动观摩</li>
                <li className="flex gap-2"><span className="text-primary">·</span>免费专车接送（市区 10 公里内）</li>
              </ul>
            </div>

            <div className="bg-primary text-white rounded-2xl p-6 md:p-8">
              <h3 className="text-xl font-semibold">紧急联系</h3>
              <p className="mt-3 text-base text-white/85 leading-relaxed">
                若不便填写表单，可直接拨打热线：
              </p>
              <a
                href={`tel:${siteConfig.phone}`}
                className="mt-4 inline-flex items-center gap-3 min-h-btn px-6 bg-white text-primary text-xl font-semibold rounded-xl hover:bg-secondary-soft transition-colors"
              >
                <Phone className="w-6 h-6" /> {siteConfig.phoneDisplay}
              </a>
              <ul className="mt-6 space-y-3 text-base text-white/85">
                <li className="flex gap-3"><MapPin className="w-5 h-5 shrink-0 mt-0.5" aria-hidden /><span>{siteConfig.address}</span></li>
                <li className="flex gap-3"><Clock className="w-5 h-5 shrink-0 mt-0.5" aria-hidden /><span>{siteConfig.workingHours}</span></li>
              </ul>
            </div>
          </aside>
        </Container>
      </Section>
    </>
  )
}