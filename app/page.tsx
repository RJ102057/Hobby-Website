import cn from 'clsx'
import { DreamGrid } from '@/components/home/dream-grid'
import { ExploreGrid, type ExploreTile } from '@/components/home/explore-grid'
import { Wrapper } from '@/components/layout/wrapper'
import { cars } from '@/content/cars'
import { dreams } from '@/content/dreams'
import { perfumes } from '@/content/perfumes'
import { watches } from '@/content/watches'
import { STORYBOOK_ENABLED, STORYBOOK_HREF } from '@/lib/storybook'
import s from './page.module.css'

export const metadata = {
  title: "Reuben's Collection",
  description: 'A personal showcase of watches, perfumes, and cars.',
}

function firstItem<T>(items: T[]): T {
  const [item] = items
  if (!item) {
    throw new Error('Expected at least one item')
  }
  return item
}

const EXPLORE_TILES: ExploreTile[] = [
  { title: 'Home', href: '/', description: 'Back to the overview.' },
  { title: 'Watches', href: '/watches', image: firstItem(watches).image },
  { title: 'Perfumes', href: '/perfumes', image: firstItem(perfumes).image },
  { title: 'Cars', href: '/cars', image: firstItem(cars).image },
  ...(STORYBOOK_ENABLED
    ? [
        {
          title: 'Atelier Notes',
          href: STORYBOOK_HREF,
          description: 'Behind the collection.',
          newTab: true,
        } satisfies ExploreTile,
      ]
    : []),
]

export default function HomePage() {
  return (
    <Wrapper>
      <section className={cn(s.hero, 'dr-layout-grid')}>
        <div className="col-span-full dt:col-start-2 dt:col-end-11">
          <p className={s.kicker}>Personal collection</p>
          <h1 className={s.title}>Reuben&apos;s Collection</h1>
          <p className={s.lede}>Three pursuits. One point of view.</p>
        </div>
      </section>

      <DreamGrid items={dreams} />
      <ExploreGrid tiles={EXPLORE_TILES} />
    </Wrapper>
  )
}
