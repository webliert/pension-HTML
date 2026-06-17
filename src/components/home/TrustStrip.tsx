import { Container } from '@/components/ui/Container'
import { data } from '@/lib/data'

const badges = [
  `${data.overview.stats.scenicLevel} 茅山景区`,
  `江南医院 · ${data.overview.stats.hospitalInvestment} 投资`,
  `卿舸书院 · ${data.overview.stats.academyArea}`,
  `占地 ${data.overview.stats.siteArea} CCRC`,
  `森林覆盖 ${data.overview.stats.forestCoverage}`,
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