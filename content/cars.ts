import type { CollectionItem } from './types'

export const cars: CollectionItem[] = [
  {
    name: 'Ghost Black Badge',
    brand: 'Rolls-Royce',
    year: 2024,
    // Source: https://www.press.rolls-roycemotorcars.com/rolls-royce-motor-cars-pressclub/photo/detail/P90338722/ROLLS-ROYCE-GHOST-BLACK-BADGE
    image: '/images/cars/rolls-royce-ghost-black-badge.jpg',
    specs: {
      Engine: '6.75L twin-turbo V12',
      Power: '592 hp',
      Transmission: '8-speed automatic',
    },
    note: "Rolls-Royce's darker, more assertive alter ego.",
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
    // Photo: provided by owner
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
    name: 'Utopia Roadster',
    brand: 'Pagani',
    year: 2024,
    // Photo: provided by owner
    image: '/images/cars/pagani-utopia-roadster.jpg',
    specs: {
      Engine: '6.0L twin-turbo V12 (AMG-developed)',
      Power: '864 hp',
      Transmission: '7-speed Xtrac automated manual',
    },
    note: "The open-top farewell to Pagani's V12 era.",
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
  {
    name: 'Revuelto SV',
    brand: 'Lamborghini',
    year: 2026,
    // Source: https://www.lamborghini.com/en-en/news/Lamborghini-Revuelto-SV-The-Quantum-of-Driving
    image: '/images/cars/lamborghini-revuelto-sv.jpg',
    specs: {
      Engine: '6.5L NA V12 hybrid + 3 e-motors',
      Power: '1,050 hp combined',
      Transmission: '8-speed dual-clutch',
      Color: 'Red and black',
    },
    note: 'The most powerful, quickest-accelerating Lamborghini ever built.',
  },
  {
    name: 'Roma',
    brand: 'Ferrari',
    year: 2020,
    // Photo: provided by owner
    image: '/images/cars/ferrari-roma.jpg',
    specs: {
      Engine: '3.9L twin-turbo V8',
      Power: '612 hp',
      Transmission: '8-speed dual-clutch',
      Color: 'Red',
    },
    note: 'La Nuova Dolce Vita, in the tradition of front-engined Ferraris.',
  },
  {
    name: 'Chiron Super Sport',
    brand: 'Bugatti',
    year: 2021,
    // Source: https://carbuzz.com/news/bugatti-chiron-super-sport-red-dragon-looks-exquisite-with-red-tinted-carbon-fiber-finish/ ('Red Dragon' one-off, red-tinted exposed carbon)
    image: '/images/cars/bugatti-chiron-super-sport.jpg',
    specs: {
      Engine: '8.0L quad-turbo W16',
      Power: '1,578 hp',
      Transmission: '7-speed dual-clutch',
      Color: 'Red',
    },
    note: 'Tuned for top-end stability at speeds most cars never see.',
  },
  {
    name: 'Gemera',
    brand: 'Koenigsegg',
    year: 2024,
    // Photo: provided by owner
    image: '/images/cars/koenigsegg-gemera.jpg',
    specs: {
      Engine: '5.0L twin-turbo V8 hybrid',
      Power: '2,300 hp',
      Transmission: '9-speed Light Speed Tourbillon',
      Color: 'Green',
    },
    note: 'A four-seat megacar that still hits hypercar numbers.',
  },
]
