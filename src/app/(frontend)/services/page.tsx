import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/site-config'
import { data } from '@/lib/data'

export const metadata: Metadata = {
  title: '康养服务',
  description: `茅山颐园康养服务体系：日常生活照护、医疗护理、康复理疗、营养膳食、精神文化生活、心理疏导关怀，全方位呵护长者健康。`,
}

const detail = [
  {
    title: '日常生活照护',
    color: 'bg-rose-50 text-rose-700',
    points: [
      '护理员 24 小时轮班，照护饮食起居、清洁、助浴',
      '个性化照护计划，每位长者建立专属健康档案',
      '协助服药、翻身、防跌倒等专项照护',
      '家属可通过客服实时查看每日生活记录',
    ],
    image: '/images/service-1.webp',
  },
  {
    title: '专业医疗护理',
    color: 'bg-sky-50 text-sky-700',
    points: [
      `驻院江南医院（${data.healthcare.hospital.investment}投资）医师 + 护士 24 小时值班`,
      `${data.healthcare.hospital.medicalInsurance.join(' / ')}`,
      '慢病管理：高血压、糖尿病、冠心病等专项照护',
      '重病就医绿色通道',
    ],
    image: '/images/service-4.webp',
  },
  {
    title: '康复理疗服务',
    color: 'bg-emerald-50 text-emerald-700',
    points: [
      '健宾楼特设养生堂、足道馆、水疗盐蒸，可预约中医健康理疗',
      '江南医院体检中心个性化体检服务',
      '物理治疗 + 中医理疗 + 慢病康复',
      '桑榆堂护理院长期卧床、晚期姑息治疗、慢性病、阿尔茨海默病照护',
    ],
    image: '/images/service-3.webp',
  },
  {
    title: '营养膳食定制',
    color: 'bg-amber-50 text-amber-700',
    points: [
      '玉膳房 500 餐位，A/B/C 三种营养套餐',
      '每周更换菜谱，可自选或单点',
      '结合长者健康、半护理和全护理等不同状况的饮食需求',
      '兼顾慢性病管控的饮食禁忌',
    ],
    image: '/images/service-6.webp',
  },
  {
    title: '精神文化生活',
    color: 'bg-violet-50 text-violet-700',
    points: [
      `卿舸书院 ${data.lifestyle.academy.area}，6 大学娱区块`,
      '12+ 兴趣空间：茶坊、书画、棋牌、影院、台球、羽毛球、乒乓、手工等',
      '节日聚会、主题活动、小镇节庆',
      '「乐·学·为·序」四大主题社群',
    ],
    image: '/images/service-2.webp',
  },
  {
    title: '心理疏导关怀',
    color: 'bg-indigo-50 text-indigo-700',
    points: [
      '专业心理咨询师提供情绪支持',
      '新入住长者心理适应期专项陪伴',
      '记忆训练、认知刺激小组活动',
      '定期家属心理讲座',
    ],
    image: '/images/service-5.webp',
  },
] as const

export default function ServicesPage() {
  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold">康养服务体系</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            六大服务体系，覆盖长者生活、医疗、康复、营养、心灵、文化全方位需求。
          </p>
        </Container>
      </Section>

      {detail.map((d, idx) => (
        <Section key={d.title} tone={idx % 2 === 1 ? 'warm' : 'default'}>
          <Container className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className={`w-16 h-16 rounded-2xl ${d.color} grid place-items-center mb-6`}>
                <CheckCircle2 className="w-8 h-8" aria-hidden />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold">{d.title}</h2>
              <ul className="mt-6 space-y-3">
                {d.points.map((p) => (
                  <li key={p} className="flex gap-3 text-lg text-ink leading-relaxed">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" aria-hidden />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`lg:col-span-7 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="relative aspect-[4/3] rounded-2xl bg-secondary-soft shadow-card overflow-hidden">
                <Image src={d.image} alt={d.title} fill sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover" />
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <Section tone="warm">
        <Container className="text-center">
          <h2 className="section-title">套餐参考</h2>
          <p className="section-subtitle mx-auto">入门参考价，最终以服务协议为准。</p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {data.pricing.packages.map((p) => (
              <div key={p.id} className="bg-surface rounded-2xl p-8 border border-line hover:border-primary transition-colors">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{p.tagline}</p>
                <div className="mt-4 text-3xl font-semibold text-primary">{p.priceText}</div>
                <p className="mt-4 text-base text-ink-soft leading-relaxed text-left">{p.desc}</p>
              </div>
            ))}
          </div>
          <Link href="/contact"
            className="mt-10 inline-flex items-center gap-2 text-primary text-lg font-medium hover:text-primary-dark no-underline">
            咨询详细权益 <ArrowRight className="w-5 h-5" />
          </Link>
        </Container>
      </Section>
    </>
  )
}