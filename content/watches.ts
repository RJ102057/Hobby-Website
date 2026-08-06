import type { CollectionItem } from './types'

export const watches: CollectionItem[] = [
  {
    name: '5 Automatic Grey Dial (SNK621K1)',
    brand: 'Seiko',
    year: 2007,
    // Source: https://www.watchnation.com/products/seiko-5-automatic-grey-dial-silver-stainless-steel-mens-watch-snk621k1
    image: '/images/watches/seiko-5-snk621k1.jpg',
    specs: {
      Movement: 'Automatic, Caliber 7S26 (21 jewels)',
      Case: '36mm stainless steel',
      'Water resistance': '30m',
    },
    note: 'A reliable automatic that needs no battery.',
  },
  {
    name: 'Celestia Classic Analog',
    brand: 'Tornado',
    year: 2018,
    // Source: https://tornado.store/products/t8007-slbwg, recolored from the
    // two-tone gold case shown there to the owner's plain steel case
    image: '/images/watches/tornado-celestia-classic.jpg',
    specs: {
      Movement: 'Quartz, Miyota 2115',
      Case: '40mm stainless steel',
      'Water resistance': '100m',
    },
    note: 'White dial, black leather, understated formality.',
  },
  {
    name: 'Oliver Blue Dial Moonphase (1791302)',
    brand: 'Tommy Hilfiger',
    year: 2020,
    // Source: https://www.menkind.co.uk/tommy-hilfiger-oliver-watch-1791302
    image: '/images/watches/tommy-hilfiger-oliver.jpg',
    specs: {
      Movement: 'Quartz, moonphase complication',
      Case: '42mm stainless steel mesh',
      'Water resistance': '30m',
    },
    note: 'A quiet moonphase complication most people miss.',
  },
  {
    name: 'Seiko SUR035P1',
    brand: 'Seiko',
    year: 2015,
    // Source: https://www.karorak-pro.hu/seiko-ferfi-karorak/26707-seiko-classic-modern-sur035p1-ferfi-karora.html
    image: '/images/watches/seiko-classic-dress.jpg',
    specs: {
      Movement: 'Quartz, Caliber 6N43',
      Case: '40mm stainless steel',
      'Water resistance': '100m',
    },
    note: 'Silver dial, single roman numeral, quiet elegance.',
  },
  {
    name: 'World Time (AE-1200WHD-1A)',
    brand: 'Casio',
    year: 2016,
    // Source: https://www.shopcasio.shriro.com.au/products/casio-standard-standard-ae1200whd-1a-watch
    image: '/images/watches/casio-world-time.jpg',
    specs: {
      Movement: 'Quartz (digital)',
      Case: '39.5mm stainless steel',
      'Water resistance': '100m',
    },
    note: 'Tracks 48 cities at a glance.',
  },
]
