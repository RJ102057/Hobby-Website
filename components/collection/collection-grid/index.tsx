import cn from 'clsx'
import { Image } from '@/components/ui/image'
import { Lightbox } from '@/components/ui/lightbox'
import type { CollectionItem } from '@/content/types'
import s from './collection-grid.module.css'

interface CollectionGridProps {
  kicker: string
  title: string
  lede: string
  items: CollectionItem[]
  imageAspectRatio?: number
}

export function CollectionGrid({
  kicker,
  title,
  lede,
  items,
  imageAspectRatio = 1,
}: CollectionGridProps) {
  return (
    <>
      <section className={cn(s.hero, 'dr-layout-grid')}>
        <div className="col-span-full dt:col-start-2 dt:col-end-11">
          <p className={s.kicker}>{kicker}</p>
          <h1 className={s.title}>{title}</h1>
          <p className={s.lede}>{lede}</p>
        </div>
      </section>

      <section className={cn(s.grid, 'dr-layout-grid')}>
        <div className="col-span-full dt:col-start-2 dt:col-end-11">
          <ul className={s.items}>
            {items.map((item) => (
              <li className={s.card} key={item.name}>
                <Lightbox alt={item.name} src={item.image}>
                  <Image
                    alt={item.name}
                    aspectRatio={imageAspectRatio}
                    className={s.image}
                    desktopSize="50vw"
                    mobileSize="100vw"
                    src={item.image}
                  />
                </Lightbox>
                <div className={s.info}>
                  <p className={s.brand}>
                    {item.brand} · {item.year}
                  </p>
                  <h2 className={s.name}>{item.name}</h2>
                  <dl className={s.specs}>
                    {Object.entries(item.specs).map(([key, value]) => (
                      <div className={s.spec} key={key}>
                        <dt className={s.specKey}>{key}</dt>
                        <dd className={s.specValue}>{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className={s.note}>{item.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
