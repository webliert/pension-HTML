import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: '环境展示',
  description: '颐康养护中心实景照片：户外园林、居室、公共活动区、餐厅、康复中心等。',
}

const photos = [
  { src: '/images/gallery-1.jpg', alt: '户外园林步道' },
  { src: '/images/gallery-2.jpg', alt: '单人间实景' },
  { src: '/images/gallery-3.jpg', alt: '公共活动厅' },
  { src: '/images/gallery-4.jpg', alt: '餐厅环境' },
  { src: '/images/gallery-5.jpg', alt: '康复训练中心' },
  { src: '/images/gallery-6.jpg', alt: '阅览室' },
  { src: '/images/gallery-7.jpg', alt: '书法活动' },
  { src: '/images/gallery-8.jpg', alt: '助浴室' },
  { src: '/images/gallery-9.jpg', alt: '园艺疗养区' },
]

export default function GalleryPage() {
  return (
    <>
      <Section className="bg-secondary-soft/40 !py-16">
        <Container>
          <h1 className="text-3xl md:text-4xl font-semibold">环境实景</h1>
          <p className="mt-4 text-lg text-ink-soft max-w-2xl leading-relaxed">
            真实场景，无修饰呈现颐康养护中心的日常。
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