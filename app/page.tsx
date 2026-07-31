import cn from 'clsx'
import { Wrapper } from '@/components/layout/wrapper'
import { Image } from '@/components/ui/image'
import { Link } from '@/components/ui/link'
import { cars } from '@/content/cars'
import { perfumes } from '@/content/perfumes'
import { watches } from '@/content/watches'
import s from './page.module.css'

export const metadata = {
  title: "Reuben's Collection",
  description: 'A personal showcase of watches, perfumes, and cars.',
}

interface Tile {
  title: string
  href: string
  image: string
  count: number
}

function firstItem<T>(items: T[]): T {
  const [item] = items
  if (!item) {
    throw new Error('Expected at least one item')
  }
  return item
}

const TILES: Tile[] = [
  {
    title: 'Watches',
    href: '/watches',
    image: firstItem(watches).image,
    count: watches.length,
  },
  {
    title: 'Perfumes',
    href: '/perfumes',
    image: firstItem(perfumes).image,
    count: perfumes.length,
  },
  {
    title: 'Cars',
    href: '/cars',
    image: firstItem(cars).image,
    count: cars.length,
  },
]

export default function HomePage() {
  return (
    <Wrapper>
      <section className={cn(s.hero, 'dr-layout-grid')}>
        <div className="col-span-full dt:col-start-2 dt:col-end-11">
          <p className={s.kicker}>Personal collection</p>
          <h1 className={s.title}>Reuben&apos;s Collection</h1>
          <p className={s.lede}>
            Watches, perfumes, and cars — a running record of the things
            I&apos;ve collected and actually use.
          </p>
        </div>
      </section>

      <section className={cn(s.tiles, 'dr-layout-grid')}>
        <div className="col-span-full dt:col-start-2 dt:col-end-11">
          <div className={s.tileGrid}>
            {TILES.map((tile) => (
              <Link className={s.tile} href={tile.href} key={tile.title}>
                <Image
                  alt=""
                  aspectRatio={4 / 5}
                  className={s.tileImage}
                  desktopSize="33vw"
                  mobileSize="100vw"
                  src={tile.image}
                />
                <div className={s.tileInfo}>
                  <h2 className={s.tileTitle}>{tile.title}</h2>
                  <p className={s.tileCount}>{tile.count} pieces</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Wrapper>
  )
}
