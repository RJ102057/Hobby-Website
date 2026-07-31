import type { CollectionItem } from './types'

export const cars: CollectionItem[] = [
  {
    name: '911 Carrera S',
    brand: 'Porsche',
    year: 2019,
    image: '/images/cars/911-carrera-s.svg',
    specs: {
      Engine: '3.0L twin-turbo flat-six',
      Power: '443 hp',
      Transmission: '8-speed PDK',
    },
    note: 'Daily-driven, not garage-kept. The point of it stops mattering the moment it stops moving.',
  },
  {
    name: 'A5 Coupe',
    brand: 'Audi',
    year: 2016,
    image: '/images/cars/a5-coupe.svg',
    specs: {
      Engine: '2.0L turbo inline-4',
      Power: '252 hp',
      Transmission: '7-speed S tronic',
    },
    note: 'The first car I actually chose for myself. Still the one I trust in bad weather.',
  },
]
