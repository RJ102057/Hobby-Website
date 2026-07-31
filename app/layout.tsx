import { Analytics } from '@vercel/analytics/next'
import { TransformProvider } from 'hamo'
import type { Metadata, Viewport } from 'next'
import { draftMode } from 'next/headers'
import { type PropsWithChildren, Suspense } from 'react'
import { ReactTempus } from 'tempus/react'
import { Link } from '@/components/ui/link'
import { RealViewport } from '@/components/ui/real-viewport'
import { ToastProvider, ToastViewport } from '@/components/ui/toast'
import { APP_BASE_URL, env } from '@/lib/env'
import { OptionalFeatures } from '@/lib/features'
import { colors } from '@/lib/styles/colors'
import { fontsVariable } from '@/lib/styles/fonts'
import AppData from '@/package.json'
import '@/lib/styles/css/index.css'

const APP_NAME = 'Atelier R.J.'
const APP_DEFAULT_TITLE = 'Atelier R.J.'
const APP_TITLE_TEMPLATE = '%s - Atelier R.J.'
const APP_DESCRIPTION = AppData.description

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
    url: APP_BASE_URL,
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: APP_DEFAULT_TITLE,
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  authors: [{ name: 'Atelier R.J.' }],
  ...(env.NEXT_PUBLIC_FACEBOOK_APP_ID
    ? { other: { 'fb:app_id': env.NEXT_PUBLIC_FACEBOOK_APP_ID } }
    : {}),
}

export const viewport: Viewport = {
  themeColor: colors.oxblood,
  colorScheme: 'normal',
}

export default async function Layout({ children }: PropsWithChildren) {
  const { isEnabled: isDraftMode } = await draftMode()
  return (
    <html lang="en" dir="ltr" className={fontsVariable}>
      <body>
        {/* Skip link for keyboard navigation accessibility */}
        <Suspense fallback={null}>
          <Link
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-9999 focus:bg-(--color-secondary) focus:px-4 focus:py-2 focus:text-(--color-primary) focus:outline-none focus:ring-(--color-primary) focus:ring-2"
          >
            Skip to main content
          </Link>
        </Suspense>
        {/* Critical: CSS custom properties needed for layout */}
        <RealViewport>
          <ToastProvider>
            <TransformProvider>
              {/*
                DO NOT add Header or Footer here.
                They are included in the <Wrapper> component used by each page.
                See: components/layout/wrapper/index.tsx
              */}
              {children}
            </TransformProvider>
            <ToastViewport />
          </ToastProvider>
        </RealViewport>
        {/* Optional features - conditionally loaded based on configuration */}
        <OptionalFeatures />

        {/* RAF management - lightweight, but don't patch in draft mode to avoid conflicts */}
        <ReactTempus patch={!isDraftMode} />
        {/* Vercel-hosted deployments only — the injected /_vercel/insights
            script 404s on self-hosted or CI `next start`. */}
        {process.env.VERCEL_ENV && <Analytics />}
      </body>
    </html>
  )
}
