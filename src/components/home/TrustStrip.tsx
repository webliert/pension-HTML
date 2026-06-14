import { Container } from '@/components/ui/Container'

const badges = [
  '民政局五星认证',
  '医疗机构执业许可',
  'ISO 9001 质量管理',
  '食品经营许可',
  '医保定点机构',
]

export function TrustStrip() {
  return (
    <section className="bg-surface border-y border-line">
      <Container className="py-8">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-8 gap-y-4 text-base md:text-lg text-ink-soft">
          {badges.map((b) => (
            <div key={b} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" aria-hidden />
              <span>{b}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}