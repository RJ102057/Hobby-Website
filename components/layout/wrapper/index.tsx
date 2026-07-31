/**
 * Main page wrapper providing smooth scrolling and page chrome.
 *
 * IMPORTANT: This component ALREADY includes <Header> and <Footer>.
 * Do NOT add Header/Footer to layout.tsx or individual pages - they render here.
 *
 * Customize the Header and Footer components for your project needs.
 */
'use client'

import cn from 'clsx'
import type { LenisOptions } from 'lenis'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Lenis } from '@/components/layout/lenis'

/**
 * Props for the Wrapper component.
 */
interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable smooth scrolling. Can be boolean or Lenis configuration object. Defaults to true. */
  lenis?: boolean | LenisOptions
}

/**
 * Main page wrapper component providing smooth scrolling and layout structure.
 *
 * This component serves as the root container for pages, automatically
 * handling smooth scrolling and layout structure. It includes navigation and
 * footer.
 *
 * @param props - Component props
 * @param props.lenis - Whether to enable smooth scrolling with Lenis
 * @param props.children - Page content
 * @param props.className - Additional CSS classes
 *
 * @example
 * ```tsx
 * export default function Page() {
 *   return (
 *     <Wrapper>
 *       <section>My page content</section>
 *     </Wrapper>
 *   )
 * }
 * ```
 *
 * @example
 * ```tsx
 * // Disable smooth scrolling
 * export default function StaticPage() {
 *   return (
 *     <Wrapper lenis={false}>
 *       <section>Content without smooth scroll</section>
 *     </Wrapper>
 *   )
 * }
 * ```
 */
export function Wrapper({
  children,
  className,
  lenis = true,
  ...props
}: WrapperProps) {
  return (
    <>
      {/* Header is rendered here - do NOT add another in layout.tsx */}
      <Header />
      <main
        id="main-content"
        className={cn('relative flex grow flex-col', className)}
        {...props}
      >
        {children}
      </main>
      {/* Footer is rendered here - do NOT add another in layout.tsx */}
      <Footer />
      {lenis && (
        <Lenis
          root
          options={typeof lenis === 'object' ? lenis : {}}
          syncScrollTrigger
        />
      )}
    </>
  )
}
