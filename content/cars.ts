import type { CollectionItem } from './types'

export const cars: CollectionItem[] = [
  {
    name: 'Ghost',
    brand: 'Rolls-Royce',
    year: 2025,
    // Source: https://www.press.rolls-roycemotorcars.com/rolls-royce-motor-cars-pressclub/article/detail/T0445483EN/ghost-series-ii:-the-most-advanced-driver-focused-v12-rolls-royce-ever-created
    image: '/images/cars/rolls-royce-ghost.jpg',
    specs: {
      Engine: '6.75L twin-turbo V12',
      Power: '563 hp',
      Transmission: '8-speed automatic',
    },
    note: 'The Starlight Headliner, every time you get in.',
  },
  {
    name: 'Phantom',
    brand: 'Rolls-Royce',
    year: 2023,
    // Source: https://www.press.rolls-roycemotorcars.com/rolls-royce-motor-cars-pressclub/article/detail/T0326573EN/ (Phantom Tempus Collection, "Kairos Blue")
    image: '/images/cars/rolls-royce-phantom.jpg',
    specs: {
      Engine: '6.75L twin-turbo V12',
      Power: '571 hp',
      Transmission: '8-speed automatic',
    },
    note: 'The standard for presence without shouting.',
  },
  {
    name: 'Flying Spur',
    brand: 'Bentley',
    year: 2026,
    // Source: https://www.bentleymedia.com/en/newsitem/1800-handcrafted-luxury-with-supercar-performance-the-new-flying-spur
    image: '/images/cars/bentley-flying-spur.jpg',
    specs: {
      Engine: '4.0L twin-turbo V8 hybrid',
      Power: '671 hp',
      Transmission: '8-speed dual-clutch',
    },
    note: 'Understated power in a four-door body.',
  },
  {
    name: 'Defender 110',
    brand: 'Land Rover',
    year: 2020,
    // Source: https://media.landrover.com/image-packs/defender-110-v8-images (black exterior)
    image: '/images/cars/land-rover-defender.jpg',
    specs: {
      Engine: '3.0L turbo inline-6 mild-hybrid',
      Power: '395 hp',
      Transmission: '8-speed automatic',
    },
    note: 'Built for anywhere, styled for everywhere.',
  },
  {
    name: 'GT',
    brand: 'McLaren',
    year: 2019,
    // Source: https://robbreport.com/motors/cars/mclaren-unveils-new-gt-model-2857721/
    image: '/images/cars/mclaren-gt.jpg',
    specs: {
      Engine: '4.0L twin-turbo V8',
      Power: '626 hp',
      Transmission: '7-speed dual-clutch',
    },
    note: 'A grand tourer built for long, fast drives.',
  },
  {
    name: 'Zonda 760 Roadster',
    brand: 'Pagani',
    year: 2025,
    // Source: https://www.thesupercarblog.com/this-one-off-pagani-zonda-roadster-from-china-is-inspired-by-a-mountain-range/
    image: '/images/cars/pagani-zonda.jpg',
    specs: {
      Engine: '7.3L naturally aspirated V12',
      Power: '760 hp',
      Transmission: '7-speed sequential',
    },
    note: 'One-of-one, inspired by the Kunlun Mountains.',
  },
  {
    name: '911 Carrera',
    brand: 'Porsche',
    year: 2024,
    // Source: https://newsroom.porsche.com/en_US/model-range/911/911-carrera-4-GTS.html (Guards Red)
    image: '/images/cars/porsche-911-carrera.jpg',
    specs: {
      Engine: '3.0L twin-turbo flat-six',
      Power: '388 hp',
      Transmission: '8-speed PDK',
    },
    note: 'The reference point for everyday sports cars.',
  },
  {
    name: 'LM',
    brand: 'Lexus',
    year: 2023,
    // Source: https://global.toyota/en/newsroom/lexus/39084541.html
    image: '/images/cars/lexus-lm.jpg',
    specs: {
      Engine: '2.4L turbo inline-4 hybrid',
      Power: '366 hp',
      Transmission: '6-speed automatic',
    },
    note: 'Chauffeur-driven luxury, reimagined.',
  },
]
