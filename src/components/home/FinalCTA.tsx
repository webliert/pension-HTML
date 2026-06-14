import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/site-config'

export function FinalCTA() {
  return (
    <Section tone="dark">
      <Container className="text-center max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
          为父母安排一次安心的参观
        </h2>
        <p className="mt-4 text-lg md:text-xl text-white/85 leading-relaxed">
          填写预约表单，专属顾问将在 1 小时内联系您，
          陪同参观并详细解答所有疑问。全程不收取任何费用。
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/visit"
            className="inline-flex items-center justify-center gap-2 min-h-btn px-10 bg-white text-primary text-lg font-medium rounded-xl hover:bg-secondary-soft transition-colors">
            立即预约参观 <ArrowRight className="w-5 h-5" />
          </Link>
          <a href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center justify-center gap-2 min-h-btn px-10 border-2 border-white/60 text-white text-lg font-medium rounded-xl hover:bg-white/10 transition-colors">
            <Phone className="w-5 h-5" /> 致电 {siteConfig.phoneDisplay}
          </a>
        </div>
      </Container>
    </Section>
  )
}