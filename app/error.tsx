'use client'

import { Wrapper } from '@/components/layout/wrapper'
import { ErrorView } from '@/components/ui/error-view'
import { Link } from '@/components/ui/link'

interface ErrorPageProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <Wrapper>
      <ErrorView
        error={error}
        reset={reset}
        homeLink={
          <Link
            href="/"
            className="border border-(--line) px-6 py-3 transition-colors hover:bg-(--surface)"
          >
            Go Home
          </Link>
        }
      />
    </Wrapper>
  )
}
