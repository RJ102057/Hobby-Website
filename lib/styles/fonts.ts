import { Fraunces, Inter } from 'next/font/google'

// Refined editorial serif for headings — the standard free equivalent to
// Canela/Ogg's soft, warm, high-character display serif.
const display = Fraunces({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--next-font-display',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
})

// Clean, quiet sans for body copy, labels, and UI.
const sans = Inter({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--next-font-sans',
  fallback: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
})

const fonts = [display, sans]
const fontsVariable = fonts.map((font) => font.variable).join(' ')

export { fontsVariable }
