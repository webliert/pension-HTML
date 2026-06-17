import { Quote } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'
import { Card } from '@/components/ui/Card'

// TODO: 以下证言为占位文案，部署前由运营替换为真实家属授权证言
const items = [
  {
    name: '张女士',
    role: '家属 · 女儿',
    text: '把 82 岁的母亲送到茅山颐园后，她每天都有活动参加，性格也比在家开朗了很多。江南医院的医生随叫随到，让我们做儿女的能安心工作。',
  },
  {
    name: '李先生',
    role: '家属 · 儿子',
    text: '父亲中风后需要专业康复，江南医院的康复师制定了详细计划，半年后已经能自己拄拐出门散步。专业的力量真的不一样。',
  },
  {
    name: '王阿姨',
    role: '家属 · 长女',
    text: '考察了三家最终选了茅山颐园，依山傍水的环境最适合母亲。卿舸书院的活动很丰富，每月的家属沟通日院长亲自讲情况，这种透明让我们放心。',
  },
]

export function Testimonials() {
  return (
    <Section tone="warm">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="section-title">家属心声</h2>
          <p className="section-subtitle mx-auto">每一份信任，我们都用心珍藏。</p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((t) => (
            <Card key={t.name}>
              <Quote className="w-10 h-10 text-secondary" aria-hidden />
              <p className="mt-4 text-base text-ink leading-relaxed">{t.text}</p>
              <div className="mt-6 pt-6 border-t border-line">
                <div className="text-lg font-semibold text-ink">{t.name}</div>
                <div className="text-sm text-ink-soft mt-1">{t.role}</div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </Section>
  )
}