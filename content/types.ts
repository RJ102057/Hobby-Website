// Shared shape for every collection category (watches, perfumes, cars).
export interface CollectionItem {
  name: string
  brand: string
  year: number
  /** Path under public/, e.g. "/images/watches/example.svg" */
  image: string
  /** Category-specific key/value facts (e.g. movement, concentration, engine) */
  specs: Record<string, string>
  /** Short personal note about the piece */
  note: string
}

/** A single "Dare to Dream" homepage entry — an aspirational item, not an owned piece. */
export interface DreamItem {
  /** Small-caps label shown above the photo, e.g. "Dream Watch" */
  label: string
  /** Full product name shown below the photo */
  name: string
  /** Path under public/, e.g. "/images/dream/example.jpg" */
  image: string
}
