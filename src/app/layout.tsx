import type { Metadata, Viewport } from 'next'
import { siteConfig } from '@/lib/site-config'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ['养老院', '康养中心', '医养结合', '五星级养老', '失能照护', '康复理疗', siteConfig.name],
  authors: [{ name: siteConfig.name }],
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | ${siteConfig.slogan}`,
    description: siteConfig.description,
    images: [{ url: '/images/og-cover.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#3F7C7C',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}