import { Fraunces } from 'next/font/google'

// Refined editorial serif for headings — the standard free equivalent to
// Canela/Ogg's soft, warm, high-character display serif. The site's only
// typeface: every font-family declaration in the codebase resolves to this
// (see lib/styles/typography.ts, which points --font-sans at the same
// variable as --font-display).
const display = Fraunces({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--next-font-display',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

const fonts = [display]
const fontsVariable = fonts.map((font) => font.variable).join(' ')

export { fontsVariable }
