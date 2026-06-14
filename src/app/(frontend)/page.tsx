import { Hero } from '@/components/home/Hero'
import { TrustStrip } from '@/components/home/TrustStrip'
import { ServiceOverview } from '@/components/home/ServiceOverview'
import { EnvironmentPreview } from '@/components/home/EnvironmentPreview'
import { WhyChooseUs } from '@/components/home/WhyChooseUs'
import { Testimonials } from '@/components/home/Testimonials'
import { FinalCTA } from '@/components/home/FinalCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ServiceOverview />
      <EnvironmentPreview />
      <WhyChooseUs />
      <Testimonials />
      <FinalCTA />
    </>
  )
}