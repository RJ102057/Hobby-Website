interface StorybookEnv {
  NODE_ENV?: string
  NEXT_PUBLIC_STORYBOOK_URL?: string
}

/**
 * Pure so it's easy to test against fake env values — see storybook.test.ts.
 * In local dev, link straight to the Storybook dev server. In deployed
 * builds, link to the /storybook proxy (see next.config.ts), enabled only
 * when NEXT_PUBLIC_STORYBOOK_URL is configured — so a production build with
 * no Storybook host shows no link. Shared between the header nav and the
 * homepage Explore grid so both stay in sync.
 */
export function getStorybookConfig(env: StorybookEnv) {
  const isDev = env.NODE_ENV === 'development'
  return {
    href: isDev ? 'http://localhost:6006' : '/storybook/',
    enabled: isDev || Boolean(env.NEXT_PUBLIC_STORYBOOK_URL),
  }
}

const config = getStorybookConfig(process.env)

export const STORYBOOK_HREF = config.href
export const STORYBOOK_ENABLED = config.enabled
