import type { CollectionItem } from './types'

export const perfumes: CollectionItem[] = [
  {
    name: 'Aventus',
    brand: 'Creed',
    year: 2010,
    image: '/images/perfumes/aventus.svg',
    specs: {
      Concentration: 'Eau de Parfum',
      'Top notes': 'Pineapple, bergamot, black currant',
      Size: '100ml',
    },
    note: 'My go-to for anything that matters. Smells like confidence, which is a lot to ask of a bottle.',
  },
  {
    name: 'Baccarat Rouge 540',
    brand: 'Maison Francis Kurkdjian',
    year: 2015,
    image: '/images/perfumes/baccarat-rouge-540.svg',
    specs: {
      Concentration: 'Extrait de Parfum',
      'Top notes': 'Saffron, jasmine, amberwood',
      Size: '70ml',
    },
    note: 'Impossible to wear quietly. People ask about it every single time.',
  },
]
