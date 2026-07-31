import { CollectionGrid } from '@/components/collection/collection-grid'
import { Wrapper } from '@/components/layout/wrapper'
import { perfumes } from '@/content/perfumes'

export const metadata = {
  title: 'Perfumes',
  description: "Perfumes from Reuben's personal collection.",
}

export default function PerfumesPage() {
  return (
    <Wrapper>
      <CollectionGrid
        imageAspectRatio={1}
        items={perfumes}
        kicker="Collection"
        lede="Scents I keep coming back to."
        title="Perfumes"
      />
    </Wrapper>
  )
}
