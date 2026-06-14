'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'
import { siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-surface/95 backdrop-blur border-b border-line">
      <Container className="flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-12 h-12 rounded-xl bg-primary text-white grid place-items-center text-2xl font-semibold">颐</div>
          <div className="hidden sm:block">
            <div className="text-xl font-semibold text-ink leading-tight">{siteConfig.shortName}</div>
            <div className="text-sm text-ink-soft leading-tight">养护中心</div>
          </div>
        </Link>

        {/* 桌面导航 */}
        <nav className="hidden lg:flex items-center gap-2">
          {siteConfig.nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link key={item.href} href={item.href}
                className={cn(
                  'px-4 py-3 text-lg rounded-lg no-underline transition-colors',
                  active ? 'text-primary bg-secondary-soft/60 font-medium' : 'text-ink hover:text-primary hover:bg-secondary-soft/40'
                )}>
                {item.label}
              </Link>
            )
          })}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href={`tel:${siteConfig.phone}`}
            className="inline-flex items-center gap-2 text-primary text-base font-medium no-underline hover:text-primary-dark">
            <Phone className="w-5 h-5" aria-hidden />
            <span className="hidden xl:inline">{siteConfig.phoneDisplay}</span>
          </a>
          <Button href="/visit" variant="primary">预约参观</Button>
        </div>

        {/* 移动菜单按钮 */}
        <button onClick={() => setOpen(true)} aria-label="打开菜单"
          className="lg:hidden min-h-touch min-w-touch grid place-items-center text-ink rounded-lg hover:bg-secondary-soft/40">
          <Menu className="w-7 h-7" />
        </button>
      </Container>

      {/* 移动端全屏菜单 */}
      {open && (
        <div className="fixed inset-0 z-50 bg-surface lg:hidden">
          <Container className="flex items-center justify-between h-20">
            <span className="text-xl font-semibold">菜单</span>
            <button onClick={() => setOpen(false)} aria-label="关闭菜单"
              className="min-h-touch min-w-touch grid place-items-center text-ink rounded-lg hover:bg-secondary-soft/40">
              <X className="w-7 h-7" />
            </button>
          </Container>
          <nav className="container mx-auto px-5 flex flex-col gap-2 mt-8">
            {siteConfig.nav.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
                className="px-4 py-5 text-2xl text-ink rounded-xl no-underline hover:bg-secondary-soft/40">
                {item.label}
              </Link>
            ))}
            <div className="mt-6 flex flex-col gap-4">
              <a href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 min-h-btn px-6 border-2 border-primary text-primary text-lg font-medium rounded-xl">
                <Phone className="w-5 h-5" /> {siteConfig.phoneDisplay}
              </a>
              <Button href="/visit" variant="primary">预约参观</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}