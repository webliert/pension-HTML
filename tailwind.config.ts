import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', md: '2rem' },
      screens: { '2xl': '1200px' },
    },
    extend: {
      colors: {
        primary:        'rgb(var(--c-primary) / <alpha-value>)',
        'primary-dark': 'rgb(var(--c-primary-dark) / <alpha-value>)',
        secondary:      'rgb(var(--c-secondary) / <alpha-value>)',
        'secondary-soft':'rgb(var(--c-secondary-soft) / <alpha-value>)',
        background:     'rgb(var(--c-background) / <alpha-value>)',
        surface:        'rgb(var(--c-surface) / <alpha-value>)',
        ink:            'rgb(var(--c-ink) / <alpha-value>)',
        'ink-soft':     'rgb(var(--c-ink-soft) / <alpha-value>)',
        line:           'rgb(var(--c-line) / <alpha-value>)',
        success:        'rgb(var(--c-success) / <alpha-value>)',
        danger:         'rgb(var(--c-danger) / <alpha-value>)',
      },
      fontSize: {
        xs:   ['14px', { lineHeight: '1.6' }],
        sm:   ['16px', { lineHeight: '1.7' }],
        base: ['18px', { lineHeight: '1.75' }],
        lg:   ['20px', { lineHeight: '1.6' }],
        xl:   ['24px', { lineHeight: '1.5' }],
        '2xl':['30px', { lineHeight: '1.4' }],
        '3xl':['36px', { lineHeight: '1.3' }],
        '4xl':['48px', { lineHeight: '1.25' }],
        '5xl':['60px', { lineHeight: '1.15' }],
      },
      fontFamily: {
        sans: ['"PingFang SC"', '"Microsoft YaHei"', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: { xl: '0.875rem', '2xl': '1.125rem' },
      minHeight: { btn: '3.5rem', touch: '3rem' },
      boxShadow: {
        soft: '0 4px 20px -8px rgba(63, 124, 124, 0.15)',
        card: '0 8px 30px -12px rgba(63, 124, 124, 0.18)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}
export default config