import type { CollectionItem } from './types'

export const watches: CollectionItem[] = [
  {
    name: 'Speedmaster Professional',
    brand: 'Omega',
    year: 1969,
    image: '/images/watches/speedmaster-professional.svg',
    specs: {
      Movement: 'Manual-wind chronograph',
      Case: '42mm steel',
      Crystal: 'Hesalite',
    },
    note: 'The one that went to the moon. Still the watch I reach for when I want something that feels certain.',
  },
  {
    name: 'Submariner Date',
    brand: 'Rolex',
    year: 2020,
    image: '/images/watches/submariner-date.svg',
    specs: {
      Movement: 'Automatic, Caliber 3235',
      Case: '41mm Oystersteel',
      'Water resistance': '300m',
    },
    note: 'Bought it after a long stretch of scuba trips. Wears heavier than it looks, in a good way.',
  },
]
