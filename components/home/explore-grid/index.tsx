import cn from 'clsx'
import { Image } from '@/components/ui/image'
import { Link } from '@/components/ui/link'
import s from './explore-grid.module.css'

export interface ExploreTile {
  title: string
  href: string
  /** Present for product categories (Watches/Perfumes/Cars); absent for text-only cards (Home/Atelier Notes). */
  image?: string
  /** Present for text-only cards; ignored when `image` is set. */
  description?: string
  newTab?: boolean
}

interface ExploreGridProps {
  tiles: ExploreTile[]
}

export function ExploreGrid({ tiles }: ExploreGridProps) {
  return (
    <section className={cn(s.section, 'dr-layout-grid')}>
      <div className="col-span-full dt:col-start-2 dt:col-end-11">
        <h2 className={s.sectionTitle}>Explore</h2>
        <div className={s.grid}>
          {tiles.map((tile) =>
            tile.image ? (
              <Link className={s.photoTile} href={tile.href} key={tile.title}>
                <Image
                  alt=""
                  aspectRatio={4 / 5}
                  className={s.tileImage}
                  desktopSize="33vw"
                  mobileSize="100vw"
                  src={tile.image}
                />
                <h3 className={s.tileTitle}>{tile.title}</h3>
              </Link>
            ) : (
              <Link
                className={s.editorialTile}
                href={tile.href}
                key={tile.title}
                newTab={tile.newTab}
              >
                <h3 className={s.tileTitle}>{tile.title}</h3>
                <p className={s.tileDescription}>{tile.description}</p>
              </Link>
            )
          )}
        </div>
      </div>
    </section>
  )
}
