import Link from 'next/link'
import Image from 'next/image'
import {
  Home as HomeIcon,
  Building2,
  HeartPulse,
  Stethoscope,
  GraduationCap,
  Utensils,
  ArrowRight,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'
import { data } from '@/lib/data'
import type { FacilityType } from '@/data/types'

// 6 大展示业态 + 图标
const featured: { type: FacilityType; icon: typeof HomeIcon; title: string; desc: string }[] = [
  { type: 'residential', icon: HomeIcon,     title: '逸心园康养住宅',   desc: '花园洋房·拎包入住，全屋臻装的高品质医养社区。' },
  { type: 'apartment',   icon: Building2,   title: '健宾楼康养公寓',   desc: '依山傍水 4 层活力公寓，近百间标准间与套房。' },
  { type: 'medical',     icon: Stethoscope, title: '江南医院',         desc: '三级综合 + JCI 标准，16 亿投资，常州/金坛医保定点。' },
  { type: 'nursing',     icon: HeartPulse,  title: '桑榆堂护理院',     desc: '金坛唯一护理院，医保定点，嵌入式医养结合。' },
  { type: 'academy',     icon: GraduationCap, title: '卿舸书院',       desc: '2 万㎡ 6 大区块，「乐·学·为·序」四大主题。' },
  { type: 'dining',      icon: Utensils,    title: '玉膳房',           desc: '500 餐位·4 包厢·3 宴会厅，定制健康膳食体系。' },
]

export function ServiceOverview() {
  return (
    <Section id="services">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title">颐园九大业态，一站式康养</h2>
          <p className="section-subtitle mx-auto">
            从居所到医院，从书院到农场，构建完整的长者生活生态。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((s) => {
            const facility = data.facilities.find((f) => f.type === s.type)
            return (
              <Card key={s.title} className="warm-card hover:shadow-card transition-shadow overflow-hidden">
                {facility?.image && (
                  <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/9] bg-secondary-soft">
                    <Image src={facility.image} alt={facility.name} fill sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover" />
                  </div>
                )}
                <div className="w-14 h-14 rounded-xl bg-primary text-white grid place-items-center mb-5">
                  <s.icon className="w-7 h-7" aria-hidden />
                </div>
                <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
                <p className="mt-3 text-base text-ink-soft leading-relaxed">{s.desc}</p>
              </Card>
            )
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/facilities"
            className="inline-flex items-center gap-2 text-primary text-lg font-medium hover:text-primary-dark no-underline">
            查看全部 9 大业态 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}