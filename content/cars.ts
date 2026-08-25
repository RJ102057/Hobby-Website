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
  {
    name: 'Revuelto SV',
    brand: 'Lamborghini',
    year: 2026,
    // Source: https://www.evo.co.uk/lamborghini/revuelto/209017/lamborghini-revuelto-sv-pictures (black with red livery accents)
    image: '/images/cars/lamborghini-revuelto-sv.jpg',
    specs: {
      Engine: '6.5L NA V12 hybrid + 3 e-motors',
      Power: '1,050 hp combined',
      Transmission: '8-speed dual-clutch',
      Color: 'Black with red livery accents',
    },
    note: 'The most powerful, quickest-accelerating Lamborghini ever built.',
  },
  {
    name: 'Roma',
    brand: 'Ferrari',
    year: 2020,
    // Source: https://commons.wikimedia.org/wiki/File:2021_Ferrari_Roma_in_Rosso_Fiorano,_front_right.jpg (CC BY-SA 3.0, photo by Mr.choppers)
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
]
