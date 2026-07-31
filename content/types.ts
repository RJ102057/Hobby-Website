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
