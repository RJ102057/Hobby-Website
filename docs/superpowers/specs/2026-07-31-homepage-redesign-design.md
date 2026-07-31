# Homepage Redesign & Typography Unification — Design Spec

Date: 2026-07-31
Status: Approved by user, pending implementation plan

## 1. Goal

Standardize the entire site on a single typeface, enlarge type and the
homepage navigation presentation to read as more "professional" and
editorial, and add a new aspirational "Dare to Dream" section to the
homepage with real product photography.

## 2. Typography unification

**Problem:** the site currently loads two font families — Fraunces
(`--next-font-display`, serif, used for headings) and Inter
(`--next-font-sans`, used for nav, body copy, labels, specs). The user
wants exactly one typeface everywhere: Fraunces, the same one used for
the "Reuben's Collection" hero title.

**Approach:** single source-of-truth variable swap, not a file-by-file
hunt.

- `lib/styles/fonts.ts`: delete the `Inter` import and font instance.
  Only `Fraunces` (`display`) remains, loaded with weights
  `400/500/600` and styles `normal/italic` (already covers every usage
  in the codebase today — no new font weights need loading).
- `lib/styles/css/tailwind.css`: currently defines
  `--font-sans: var(--next-font-sans);` and
  `--font-display: var(--next-font-display);`. Change `--font-sans` to
  point at the same value as `--font-display` (i.e.
  `var(--next-font-display)`), and remove the now-unused
  `--next-font-sans` variable plumbing.
- Result: every existing `font-family: var(--font-sans)` declaration
  across every `.module.css` file (header, footer, homepage tiles,
  collection grid, not-found, not-configured) automatically resolves
  to Fraunces. No component file needs to change its font-family
  declaration. Inter's font files stop being fetched entirely.

**Type scale increase:** the user asked for "much bigger" text, not
just a font swap at the same sizes. Increase the whole ramp by
roughly 20-30%, keeping the existing mobile/desktop `calc(px / base *
100vw)` responsive pattern. Approximate targets (exact values finalized
during implementation):

| Element | Current (mobile/desktop) | New (mobile/desktop) |
|---|---|---|
| Hero title (`.title`, home) | 52px / 104px | 62px / 128px |
| Hero kicker | 11px / 12px | 13px / 14px |
| Hero lede/subline | 14px / 16px | 17px / 19px |
| Collection page title | 48px / 84px | 58px / 100px |
| Homepage tile title | 23px / 26px | 30px / 36px |
| Collection item name | 25px / 28px | 30px / 34px |
| Specs / labels | 11-12px / 12-13px | 14px / 15px |

The small fixed corner nav (header) is explicitly excluded from this
size increase — see Section 3: it keeps its current size and
structure, and only changes font-family (to Fraunces, per the
single-font rule above).

No other visual tokens (colors, borders, spacing scale, radii) change.

## 3. Homepage structure

New top-to-bottom order on `app/page.tsx`:

1. **Hero** (existing, copy change only): "Reuben's Collection" title
   unchanged; subline replaced with **"Three pursuits. One point of
   view."**
2. **"Dare to Dream" section** (new): section title, then a 3-column
   grid (stacked on mobile) of dream-item cards.
3. **"Explore" section** (replaces the current 3-tile grid): section
   title, then a 5-card grid: Home, Watches, Perfumes, Cars, Atelier
   Notes. Enlarged versus the current tiles. The "N pieces" caption is
   removed — deleted entirely, not just hidden.

The small fixed corner nav (`components/layout/header`) is unchanged
in structure and size; it continues to provide site-wide navigation on
every page. Its label "storybook" becomes **"Atelier Notes"** (same
href logic, same new-tab arrow behavior for the proxied/dev-server
link).

## 4. Card designs

### 4a. Explore cards (Home, Watches, Perfumes, Cars, Atelier Notes)

- **Watches / Perfumes / Cars**: keep today's photo + title layout
  (first item's image, category title), enlarged per the type scale
  above and with a visually bigger image box.
- **Home / Atelier Notes**: no product photo exists for these, so they
  get a text-forward "editorial" card instead of a forced/fake image:
  large Fraunces title, a one-line description ("Back to the
  overview" / "Behind the collection"), thin oxblood/gold border,
  same hover treatment as the photo cards (subtle opacity/border
  shift) for visual consistency across all 5 cards.

### 4b. Dream cards (Dare to Dream section)

New, minimal component — intentionally not the existing
`CollectionGrid` card, since dream items don't have brand/year/specs/
notes:

- Small-caps label above the image: **"Dream Watch"**, **"Dream
  Perfume"**, **"Dream Car"** (same kicker-style typographic treatment
  as other small-caps labels elsewhere in the site — uppercase,
  letter-spaced).
- Product photo below the label, cropped to **4:3** (not the Explore
  grid's 4:5) — the car photo is native 16:9 landscape, and a 4:5
  portrait crop would slice off its front/rear. 4:3 keeps the full car
  in frame (trims empty space top/bottom instead of the sides) while
  still cropping reasonably for the watch and perfume shots. This is a
  deliberate, confirmed departure from the Explore grid's aspect ratio
  — the two sections are visually distinct anyway (editorial dream
  cards vs. product/nav tiles).
- Product name below the image, in the same serif treatment as other
  card titles: "Jaeger-LeCoultre Reverso Artistica Hybrid Calibre 179
  Pegasus" / "AMAFFI Poseidon for Men" / "Mercedes-Maybach S680
  Manufaktur — Maroon". Long names may wrap to two lines.

Label sits above the photo as the first element in the card (not
overlaid on top of the image as a badge).

## 5. Images

Three real product photos, sourced from pages the user provided (the
assistant has no image search/browse capability, so these came from
fetching the user's URLs directly and picking the best product shot
from each page's own image gallery):

| Item | Source page | Chosen image | Native size |
|---|---|---|---|
| Watch | jaeger-lecoultre.com product page | gallery 3/4 view, rose-gold engraved case, blue strap | 720×900 |
| Perfume | amaffi.com product page | gallery bottle close-up, black background, trident medallion | 2400×2400 |
| Car | evoindia.com article | front 3/4 view, maroon/gold duotone "Manufaktur" paint | 2048×1152 |

- Downloaded and stored locally under `public/images/dream/` (e.g.
  `jlc-reverso-artistica-pegasus.jpg`, `amaffi-poseidon.jpg`,
  `maybach-s680-maroon.jpg`), not hotlinked — keeps the site
  self-contained and avoids `next.config.ts` `remotePatterns` changes.
- Rendered through the existing `components/ui/image` wrapper exactly
  like every other photo on the site (already handles arbitrary
  raster formats — only `.svg` gets special-cased as unoptimized),
  with `aspectRatio={4/3}` and `objectFit="cover"`.

## 6. Content/copy changes (no ambiguity, straightforward)

- Homepage subline → "Three pursuits. One point of view."
- Nav label "storybook" → "Atelier Notes" (header nav + new Explore
  card)
- Remove the `{count} pieces` caption from the homepage tiles
  (`app/page.tsx` `Tile` interface and `TILES` array lose the `count`
  field entirely, since nothing else uses it)

## 7. Out of scope

- No changes to colors, spacing scale, border radii, or the
  watches/perfumes/cars detail page card layout beyond the type scale
  increase.
- No changes to the corner nav's position, size, or the "N pieces"
  wording anywhere it might exist beyond the homepage tiles (confirmed
  via search: it only exists there).
- No new theme switching or dark/light mode — the site remains a
  single fixed oxblood/ivory/stone/gold palette.
