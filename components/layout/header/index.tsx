'use client'

import cn from 'clsx'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Link } from '@/components/ui/link'
import s from './header.module.css'

type NavLink = { href: string; label: string }

// Navigation links - customize for your project
const LINKS: NavLink[] = [
  { href: '/watches', label: 'watches' },
  { href: '/perfumes', label: 'perfumes' },
  { href: '/cars', label: 'cars' },
]

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={s.header}>
      {/* Solid backdrop behind the open mobile nav so it doesn't overlap
          page content underneath — mobile only, see .backdrop */}
      {menuOpen && <div className={s.backdrop} />}

      {/* Brand: logo (links home) + live pathname */}
      <div className={s.brand}>
        <Link className={s.wordmark} href="/">
          Atelier R.J.
        </Link>
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
              >
                {link.label}
              </Link>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
