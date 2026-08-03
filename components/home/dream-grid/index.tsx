import cn from 'clsx'
import { Image } from '@/components/ui/image'
import type { DreamItem } from '@/content/types'
import s from './dream-grid.module.css'

interface DreamGridProps {
  items: DreamItem[]
}

export function DreamGrid({ items }: DreamGridProps) {
  return (
    <section className={cn(s.section, 'dr-layout-grid')}>
      <div className="col-span-full dt:col-start-1 dt:col-end-13">
        <h2 className={s.sectionTitle}>Dare to Dream</h2>
        <ul className={s.grid}>
          {items.map((item) => (
            <li className={s.card} key={item.name}>
              <p className={s.label}>{item.label}</p>
              <Image
                alt={item.name}
                aspectRatio={4 / 3}
                className={s.image}
                desktopSize="33vw"
                mobileSize="100vw"
                objectFit="cover"
                src={item.image}
              />
              <h3 className={s.name}>{item.name}</h3>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
