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
            This is a space that seeks to display my love for fine artistry be
            it in terms of luxury watches, fragrances or cars.
          </p>
          <p className={s.notesText}>
            Some of what&apos;s here — I&apos;ve worn and used, not just
            admired.
          </p>
          <p className={s.notesText}>
            The rest is a dream collection: watches and scents I haven&apos;t
            earned yet as well as cars that I hope to have.
          </p>
          <p className={s.notesText}>
            These are kept here as a reminder of what I want to work towards.
          </p>
          <p className={s.notesText}>
            I built from a personal desire to share my tastes, connect with
            those who have similar passions and to encourage others to do the
            same.
          </p>
        </div>
      </section>
    </Wrapper>
  )
}
