import { CollectionGrid } from '@/components/collection/collection-grid'
import { Wrapper } from '@/components/layout/wrapper'
import { cars } from '@/content/cars'

export const metadata = {
  title: 'Dream Cars',
  description: "Dream cars from Reuben's personal collection.",
}

export default function CarsPage() {
  return (
    <Wrapper>
      <CollectionGrid
        imageAspectRatio={4 / 3}
        items={cars}
        kicker="Collection"
        lede="Ambitions, parked for now."
        title="Dream Cars"
      />
    </Wrapper>
  )
}
