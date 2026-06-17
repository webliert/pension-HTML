import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: '实景图集',
  description: '茅山颐园实景照片：景区资源、康养住宅、活力公寓、医院、护理院、书院、商业水街等。',
}

const photos = [
  { src: '/images/gallery-1.webp', alt: '茅山 5A 级风景区资源' },
  { src: '/images/gallery-2.webp', alt: '长三角交通区位' },
  { src: '/images/gallery-3.webp', alt: '逸心园康养住宅' },
  { src: '/images/gallery-4.webp', alt: '健宾楼康养公寓' },
  { src: '/images/gallery-5.webp', alt: '卿舸书院外观' },
  { src: '/images/gallery-6.webp', alt: '卿舸书院内景' },
  { src: '/images/gallery-7.webp', alt: '书院往期活动' },
  { src: '/images/gallery-8.webp', alt: '茅山商业水街' },
  { src: '/images/gallery-9.webp', alt: '生活小镇风貌' },
]

export default function GalleryPage() {
  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold">实景图集</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            真实场景，无修饰呈现茅山颐园的日常。
          </p>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((p) => (
              <figure key={p.src} className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-secondary-soft shadow-soft group">
                <Image src={p.src} alt={p.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300" />
                <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white p-4 text-base">
                  {p.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}