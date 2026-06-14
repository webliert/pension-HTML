import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'
export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('bg-surface rounded-2xl p-6 md:p-8 shadow-card border border-line', className)}>{children}</div>
}