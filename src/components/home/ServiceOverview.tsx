import Link from 'next/link'
import { Heart, Stethoscope, Activity, Utensils, BookOpen, Brain, ArrowRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

const services = [
  { icon: Heart,       title: '日常生活照护', desc: '专业护理员 24 小时轮班，照护饮食起居、清洁、助浴等日常需求。' },
  { icon: Stethoscope, title: '专业医疗护理', desc: '驻院医师 + 合作三甲医院绿色通道，慢病管理、用药指导、紧急救治。' },
  { icon: Activity,    title: '康复理疗服务', desc: '康复师个性化方案，物理治疗、作业治疗、中医理疗促进功能恢复。' },
  { icon: Utensils,    title: '营养膳食定制', desc: '营养师按体质与慢病配餐，季节时令、软烂适宜，每日 5 餐科学安排。' },
  { icon: BookOpen,    title: '精神文化生活', desc: '书法、绘画、声乐、手工等社团活动，每日集体活动丰富晚年生活。' },
  { icon: Brain,       title: '心理疏导关怀', desc: '驻院心理咨询师提供情绪支持，陪聊、记忆训练守护长者心理健康。' },
]

export function ServiceOverview() {
  return (
    <Section id="services">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title">全方位的康养服务体系</h2>
          <p className="section-subtitle mx-auto">
            从生活到医疗，从身体到心灵，我们为每一位长者提供有温度的专业照护。
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card key={s.title} className="warm-card hover:shadow-card transition-shadow">
              <div className="w-14 h-14 rounded-xl bg-primary text-white grid place-items-center mb-5">
                <s.icon className="w-7 h-7" aria-hidden />
              </div>
              <h3 className="text-xl font-semibold text-ink">{s.title}</h3>
              <p className="mt-3 text-base text-ink-soft leading-relaxed">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services"
            className="inline-flex items-center gap-2 text-primary text-lg font-medium hover:text-primary-dark no-underline">
            查看全部服务详情 <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}