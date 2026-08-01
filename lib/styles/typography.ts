import type { CSSProperties } from 'react'

const fonts = {
  display: '--next-font-display', // this should be the variable name defined in fonts.ts
  sans: '--next-font-display', // single-typeface site: sans now resolves to the same Fraunces variable as display
} as const

const typography: TypeStyles = {
  h1: {
    'font-family': `var(${fonts.display})`,
    'font-style': 'normal',
    'font-weight': 500,
    'line-height': '100%',
    'letter-spacing': '-0.01em',
    'font-size': { mobile: 56, desktop: 96 },
  },
  h2: {
    'font-family': `var(${fonts.display})`,
    'font-style': 'normal',
    'font-weight': 500,
    'line-height': '105%',
    'letter-spacing': '-0.01em',
    'font-size': { mobile: 30, desktop: 44 },
  },
  'p-big': {
    'font-family': `var(${fonts.sans})`,
    'font-style': 'normal',
    'font-weight': 400,
    'line-height': '140%',
    'letter-spacing': '0em',
    'font-size': { mobile: 16, desktop: 20 },
  },
  p: {
    'font-family': `var(${fonts.sans})`,
    'font-style': 'normal',
    'font-weight': 400,
    'line-height': { mobile: '150%', desktop: '145%' },
    'letter-spacing': '0em',
    'font-size': { mobile: 14, desktop: 16 },
  },
  caption: {
    'font-family': `var(${fonts.sans})`,
    'font-style': 'normal',
    'font-weight': 500,
    'line-height': { mobile: '130%', desktop: '125%' },
    'letter-spacing': '0.08em',
    'font-size': { mobile: 10, desktop: 11 },
  },
  cta: {
    'font-family': `var(${fonts.sans})`,
    'font-style': 'normal',
    'font-weight': 500,
    'line-height': '100%',
    'letter-spacing': '0.04em',
    'font-size': { mobile: 12, desktop: 13 },
  },
  link: {
    'font-family': `var(${fonts.sans})`,
    'font-style': 'normal',
    'font-weight': 400,
    'line-height': { mobile: '130%', desktop: '125%' },
    'letter-spacing': '0em',
    'font-size': { mobile: 13, desktop: 14 },
  },
} as const

export { fonts, typography }

// UTIL TYPES
type TypeStyles = Record<
  string,
  {
    'font-family': string
    'font-style': CSSProperties['fontStyle']
    'font-weight': CSSProperties['fontWeight']
    'line-height':
      | `${number}%`
      | { mobile: `${number}%`; desktop: `${number}%` }
    'letter-spacing':
      | `${number}em`
      | { mobile: `${number}em`; desktop: `${number}em` }
    'font-feature-settings'?: string
    'font-size': number | { mobile: number; desktop: number }
  }
>
