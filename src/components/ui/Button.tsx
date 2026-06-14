import Link from 'next/link'
import { cn } from '@/lib/utils'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
interface BaseProps { variant?: Variant; className?: string; children: ReactNode }
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type LinkProps  = BaseProps & { href: string; type?: never }

export function Button(props: ButtonProps | LinkProps) {
  const { variant = 'primary', className, children } = props
  const cls = cn(
    variant === 'primary'   && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    variant === 'ghost'     && 'btn-ghost',
    className
  )
  if ('href' in props && props.href) {
    const isExternal = /^https?:|^tel:|^mailto:/.test(props.href)
    if (isExternal) return <a href={props.href} className={cls}>{children}</a>
    return <Link href={props.href} className={cls}>{children}</Link>
  }
  const { href: _omit, ...rest } = props as ButtonProps
  return <button {...rest} className={cls}>{children}</button>
}