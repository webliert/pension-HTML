import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
export function Section({
  children, className, tone = 'default', id,
}: { children: ReactNode; className?: string; tone?: 'default' | 'warm' | 'dark'; id?: string }) {
  return (
    <section id={id} className={cn(
      'py-16 md:py-24',
      tone === 'warm' && 'bg-secondary-soft/40',
      tone === 'dark' && 'bg-primary text-white',
      className
    )}>
      {children}
    </section>
  )
}