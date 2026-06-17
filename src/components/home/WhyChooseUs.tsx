import { Award, Users, ShieldCheck, HeartHandshake } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { data } from '@/lib/data'

const features = [
  {
    icon: Award,
    title: `${data.overview.stats.scenicLevel} 茅山景区`,
    desc: '江苏第一文化名山，道教圣地，森林覆盖率 91.6%，负氧离子 2.8 万 / cm³。',
  },
  {
    icon: Users,
    title: '江南医院医养保障',
    desc: `${data.healthcare.hospital.investment}投资，三级综合 JCI 标准，常州 / 金坛医保定点。`,
  },
  {
    icon: ShieldCheck,
    title: '桑榆堂护理院',
    desc: '金坛目前唯一护理院，医保定点，嵌入式医养结合机构。',
  },
  {
    icon: HeartHandshake,
    title: '卿舸书院 2 万㎡',
    desc: '6 大学娱区块，「乐·学·为·序」四大主题，丰富长者精神文化生活。',
  },
]

export function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title">为什么家属选择茅山颐园</h2>
          <p className="section-subtitle mx-auto">把父母交给颐园，是一份踏实的信任。</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-surface rounded-2xl p-6 border border-line hover:border-primary transition-colors">
              <div className="w-12 h-12 rounded-xl bg-secondary-soft text-primary grid place-items-center mb-5">
                <f.icon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-lg font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-base text-ink-soft leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}