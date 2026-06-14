import { Award, Users, ShieldCheck, HeartHandshake } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

const features = [
  { icon: Award,        title: '五星权威认证', desc: '民政局最高等级评定，医疗机构执业许可合规专业。' },
  { icon: Users,        title: '专业护理团队', desc: '医护 + 护理员 + 康复师 + 营养师 + 心理咨询师多学科协作。' },
  { icon: ShieldCheck,  title: '24h 医护值守', desc: '驻院医生 + 护士全天候值班，与三甲医院开通绿色转诊通道。' },
  { icon: HeartHandshake,title: '家属透明沟通', desc: '每月家属沟通日、每日长者生活动态推送，远程也能安心。' },
]

export function WhyChooseUs() {
  return (
    <Section>
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title">为什么家属选择颐康</h2>
          <p className="section-subtitle mx-auto">把父母交给颐康，是一份踏实的信任。</p>
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