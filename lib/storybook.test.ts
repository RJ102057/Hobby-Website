// lib/storybook.test.ts
//
// Run with: bun test lib/storybook.test.ts

import { describe, expect, it } from 'bun:test'
import { getStorybookConfig } from './storybook'

describe('getStorybookConfig', () => {
  it('points at the local Storybook dev server in development', () => {
    const config = getStorybookConfig({ NODE_ENV: 'development' })
    expect(config.href).toBe('http://localhost:6006')
    expect(config.enabled).toBe(true)
  })

  it('points at the proxied /storybook/ route when a host is configured outside development', () => {
    const config = getStorybookConfig({
      NODE_ENV: 'production',
      NEXT_PUBLIC_STORYBOOK_URL: 'https://storybook.example.com',
    })
    expect(config.href).toBe('/storybook/')
    expect(config.enabled).toBe(true)
  })

  it('is disabled outside development when no Storybook host is configured', () => {
    const config = getStorybookConfig({ NODE_ENV: 'production' })
    expect(config.enabled).toBe(false)
  })
})
