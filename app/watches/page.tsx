import { CollectionGrid } from '@/components/collection/collection-grid'
import { Wrapper } from '@/components/layout/wrapper'
import { watches } from '@/content/watches'

export const metadata = {
  title: 'Watches',
  description: "Watches from Reuben's personal collection.",
}

export default function WatchesPage() {
  return (
    <Wrapper>
      <CollectionGrid
        imageAspectRatio={1}
        items={watches}
        kicker="Collection"
        lede="Currently on the wrist"
        title="Watches"
      />
    </Wrapper>
  )
}
