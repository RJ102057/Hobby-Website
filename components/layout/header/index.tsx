'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { isExternalHref, Link } from '@/components/ui/link'
import { STORYBOOK_ENABLED, STORYBOOK_HREF } from '@/lib/storybook'
import s from './header.module.css'

// `newTab` is only needed when a link should open in a new tab despite not
// being externally-derivable from its href (e.g. the proxied, relative
// Storybook route in production). Absolute http(s) hrefs — like the GitHub
// link — get new-tab + the arrow indicator automatically via isExternalHref.
type NavLink = { href: string; label: string; newTab?: boolean }

// Navigation links - customize for your project
const LINKS: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/watches', label: 'watches' },
  { href: '/perfumes', label: 'perfumes' },
  { href: '/cars', label: 'cars' },
  // Prod Storybook route is relative (/storybook/, proxied) so it isn't
  // externally-derivable from the href alone — needs the explicit intent.
  ...(STORYBOOK_ENABLED
    ? [{ href: STORYBOOK_HREF, label: 'atelier notes', newTab: true }]
    : []),
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={s.header}>
      {/* Brand: logo + live pathname */}
      <div className={s.brand}>
        <span className={s.wordmark}>Atelier R.J.</span>
        <span className={s.brandPath}>{pathname}</span>
      </div>

      {/* Mobile menu toggle */}
      <button
        aria-expanded={menuOpen}
        aria-controls="header-nav"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        className={s.menuToggle}
        onClick={() => setMenuOpen((prev) => !prev)}
        type="button"
      >
        {menuOpen ? '✕ close' : '≡ menu'}
      </button>

      {/* Level 1: Main navigation */}
      <ul className={cn(s.navList, menuOpen && s.navListOpen)} id="header-nav">
        {LINKS.map((link) => {
          const opensNewTab = isExternalHref(link.href) || Boolean(link.newTab)
          const isActive = pathname === link.href

          return (
            <li key={link.href} className={s.navItem}>
              <span className={cn(s.chevron, isActive && s.chevronActive)}>
                ›
              </span>
              <Link
                className={cn(
                  s.navLink,
                  isActive ? s.navLinkActive : s.navLinkDim
                )}
                href={link.href}
                newTab={link.newTab}
              >
                {link.label}
                {opensNewTab && '↗'}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
