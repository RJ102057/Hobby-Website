import cn from 'clsx'
import { DreamGrid } from '@/components/home/dream-grid'
import { Wrapper } from '@/components/layout/wrapper'
import { dreams } from '@/content/dreams'
import s from './page.module.css'

export const metadata = {
  title: "Reuben's Collection",
  description: 'A personal showcase of watches, perfumes, and cars.',
}

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

      <section className={cn(s.notes, 'dr-layout-grid')}>
        <div className="col-span-full dt:col-start-2 dt:col-end-11">
          <h2 className={s.sectionTitle}>Atelier Notes</h2>
          <p className={s.notesText}>
            Atelier R.J. is a running record of the things I&apos;ve actually
            collected — watches worn on real wrists, scents worth finishing, and
            one car I still think about on long drives. Dare to Dream is the
            wishlist: pieces I haven&apos;t earned yet, but might one day.
            Nothing here is curated for anyone else. Come back when the
            collection changes.
          </p>
        </div>
      </section>
    </Wrapper>
  )
}
