// Brand palette — a single fixed set of tokens, no runtime theme switching.
// Source hex (design system): oxblood #4A0E0E (background), ivory #F4EFE4
// (text), stone #A79C89 (muted/borders), accent #C9A566 / accent-deep
// #A17F45 (a muted antique gold — the classic oxblood pairing, used for
// links, focus rings, and CTA fills) — converted to oklch per house style.
const colors = {
  oxblood: 'oklch(0.273 0.0899 25.45)',
  ivory: 'oklch(0.953 0.0156 86.43)',
  stone: 'oklch(0.6969 0.0299 81.42)',
  accent: 'oklch(0.7405 0.0916 80.6)',
  'accent-deep': 'oklch(0.6166 0.0868 79.39)',
  // Non-brand utility color for success-state UI (form feedback), independent
  // of the oxblood/ivory/stone/accent identity.
  green: 'oklch(0.8763 0.2278 152.55)',
} as const

const themeNames = ['default'] as const
const colorNames = ['primary', 'secondary', 'contrast'] as const

// Semantic roles used throughout components/ and global.css, mapped onto the
// brand palette. Kept as a single-entry "themes" map — rather than flattening
// to plain vars — so the Tailwind generator (generate-tailwind.ts) and the
// contrast test suite (contrast.ts), both written against a
// name -> {primary,secondary,contrast} shape, need no structural changes.
const themes = {
  default: {
    primary: colors.oxblood,
    secondary: colors.ivory,
    contrast: colors.accent,
  },
} as const satisfies Themes

export { colors, themeNames, themes }

// UTIL TYPES
export type Themes = Record<
  (typeof themeNames)[number],
  Record<(typeof colorNames)[number], string>
>
