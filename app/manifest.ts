import type { MetadataRoute } from 'next'
import AppData from '@/package.json'
import { colors } from '@/styles/colors'

const APP_NAME = 'Atelier R.J.'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME,
    short_name: APP_NAME,
    description: AppData.description,
    start_url: '/',
    display: 'standalone',
    background_color: colors.oxblood,
    theme_color: colors.oxblood,
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/apple-icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
    ],
  }
}
