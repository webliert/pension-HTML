import type { Metadata } from 'next'
import { Heart, Stethoscope, Activity, Utensils, BookOpen, Brain, CheckCircle2 } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { siteConfig } from '@/lib/site-config'

export const metadata: Metadata = {
  title: '康养服务',
  description: `颐康养护中心提供日常照护、医疗护理、康复理疗、营养膳食、文娱活动、心理关怀六大服务体系，全方位呵护长者健康。`,
}

const detail = [
  {
    icon: Heart, title: '日常生活照护', color: 'bg-rose-50 text-rose-700',
    points: [
      '24 小时护理员轮班，照护饮食起居、清洁、助浴',
      '个性化照护计划，每位长者建立专属健康档案',
      '协助服药、翻身、防跌倒等专项照护',
      '家属可通过 APP 实时查看每日生活记录',
    ],
  },
  {
    icon: Stethoscope, title: '专业医疗护理', color: 'bg-sky-50 text-sky-700',
    points: [
      '驻院执业医师 + 护士全天 24 小时值班',
      '合作三甲医院开通绿色转诊通道',
      '慢病管理：高血压、糖尿病、冠心病等专项照护',
      '用药管理：药品统一发放，杜绝漏服错服',
    ],
  },
  {
    icon: Activity, title: '康复理疗服务', color: 'bg-emerald-50 text-emerald-700',
    points: [
      '康复师一对一评估，个性化康复方案',
      '物理治疗（PT）+ 作业治疗（OT）+ 言语治疗（ST）',
      '中医理疗：针灸、推拿、艾灸、拔罐',
      '智能康复设备：平衡仪、步态训练器等',
    ],
  },
  {
    icon: Utensils, title: '营养膳食定制', color: 'bg-amber-50 text-amber-700',
    points: [
      '营养师按体质与慢病情况个性化配餐',
      '每日 5 餐：3 正餐 + 2 加餐，注重软烂适宜',
      '糖尿病餐、低盐餐、流食/半流食等多种食谱',
      '严选食材，食材溯源可视化，每周菜单提前公示',
    ],
  },
  {
    icon: BookOpen, title: '精神文化生活', color: 'bg-violet-50 text-violet-700',
    points: [
      '书法、绘画、声乐、手工、太极等 20+ 社团',
      '每日集体活动：晨操、午间影院、傍晚散步',
      '节日主题活动、生日会、户外踏青',
      '家属开放日、亲子互动活动',
    ],
  },
  {
    icon: Brain, title: '心理疏导关怀', color: 'bg-indigo-50 text-indigo-700',
    points: [
      '驻院国家二级心理咨询师',
      '新入住长者心理适应期专项陪伴',
      '记忆训练、认知刺激小组活动',
      '定期家属心理讲座与哀伤辅导',
    ],
  },
]

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
                <d.icon className="w-8 h-8" aria-hidden />
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
              <div className="aspect-[4/3] rounded-2xl bg-secondary-soft shadow-card grid place-items-center">
                <span className="text-ink-soft/50 text-base">[{d.title} 配图 /images/service-{idx + 1}.jpg]</span>
              </div>
            </div>
          </Container>
        </Section>
      ))}
    </>
  )
}