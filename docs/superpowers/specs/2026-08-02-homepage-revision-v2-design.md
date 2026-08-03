# Homepage Revision v2 — Design Spec

Date: 2026-08-02
Status: Approved by user, pending implementation plan

## 1. Goal

A follow-up pass on the homepage redesign shipped in
`2026-07-31-homepage-redesign-design.md`: push several elements to a larger
type size, center the "Dare to Dream" title and widen that section so its
product photos read bigger, shorten the dream car's title, replace the
5-card "Explore" section with a simple centered "Atelier Notes" about
blurb, simplify the corner nav to 3 links, and reduce overall page height.

## 2. Typography — second increase

The previous redesign already bumped these once; this pass bumps them
again, further than before:

| Element | Current (mobile/desktop) | New (mobile/desktop) |
|---|---|---|
| Hero kicker ("Personal collection") | 13px / 14px | 16px / 18px |
| Hero lede ("Three pursuits. One point of view.") | 17px / 19px | 20px / 23px |
| Corner nav brand ("Atelier R.J.") | 14px / 15px | 19px / 21px |
| Corner nav links | 10px / 11px | 14px / 16px |

Files: `app/page.module.css` (`.kicker`, `.lede`), `components/layout/header/header.module.css` (`.brand`, `.header`).

## 3. Dare to Dream — centered title, wider section

- `components/home/dream-grid/dream-grid.module.css`'s `.sectionTitle` gets
  `text-align: center` added (currently left-aligned like every other
  section title on the site — this is the one exception).
- The section's wrapper div widens from the standard 9-of-12-column inset
  every other section uses (`col-span-full dt:col-start-2 dt:col-end-11`)
  to the full safe-area width (`col-span-full dt:col-start-1
  dt:col-end-13`) — the lever that makes all 3 product photos visibly
  bigger while staying in one row, without shrinking the label/name text
  into illegibility. File: `components/home/dream-grid/index.tsx`.
- No change to the 3-column grid itself, image aspect ratio (4:3), or the
  label/name typography — only the outer width and title alignment change.

## 4. Dream car title

`content/dreams.ts`'s car entry `name` changes from
`'Mercedes-Maybach S680 Manufaktur — Maroon'` to `'Mercedes-Maybach S680'`.
No other field changes.

## 5. Navigation simplification

- `components/layout/header/index.tsx`'s `LINKS` array drops the `home`
  entry and the conditional Storybook (`atelier notes`) entry entirely,
  leaving exactly 3 entries: Watches, Perfumes, Cars.
- The `Atelier R.J.` wordmark (`.brand` div's `<span className={s.wordmark}>`)
  becomes a `<Link href="/">` instead of a plain `<span>`, so there's still
  a way back to the homepage from any sub-page now that "home" is gone
  from the link list. Visual styling (italic serif wordmark) is unchanged;
  only the element type changes from `span` to a link.
- `components/home/explore-grid/` (both `index.tsx` and
  `explore-grid.module.css`) is deleted entirely — no longer imported
  anywhere after this change.
- `lib/storybook.ts` and `lib/storybook.test.ts` are deleted entirely —
  after removing the header nav's Storybook link and the homepage Explore
  card that both consumed `STORYBOOK_HREF`/`STORYBOOK_ENABLED`, nothing
  in the codebase references them. This does not affect the Storybook
  dev tool itself (still runs at `localhost:6006` / builds its own static
  output) — only the site's UI links to it are removed.
- `app/page.tsx` drops the `EXPLORE_TILES` array, the `ExploreGrid` import/
  usage, the `STORYBOOK_ENABLED`/`STORYBOOK_HREF` import, and the
  `firstItem` helper + `watches`/`perfumes`/`cars` content imports (nothing
  on the homepage needs a representative image from those categories
  anymore once Explore is gone).

## 6. New "Atelier Notes" section

Replaces the deleted Explore section, directly in `app/page.tsx` /
`app/page.module.css` (no new component file — unlike `DreamGrid`/
`ExploreGrid`, this section has no array of items to map over, just a
title and one paragraph, so a dedicated component would be unwarranted
structure for the content it holds).

- Title: "Atelier Notes", using the exact same heading treatment as Dare
  to Dream's `h2` (font-display, same size/weight/centering values). This
  codebase's established convention is one self-contained CSS Module per
  component with matching values duplicated rather than cross-imported
  (the same `.kicker`/`.lede`/`.sectionTitle` declarations already exist
  independently in multiple files with identical values) — so this title
  gets its own `.sectionTitle` rule in `app/page.module.css` with the same
  values as `dream-grid.module.css`'s, not a shared/imported class.
- One paragraph below it: `text-align: center`, `max-width: 60ch`,
  `margin-inline: auto` — constrains line length to a readable measure
  and centers the constrained block within the section regardless of the
  section's own (wider) column width.
- Section padding matches `DreamGrid`'s own top/bottom padding exactly
  (`64px`/`375` mobile, `96px`/`1440` desktop, same `calc()` pattern) —
  consistent vertical rhythm with the section directly above it, and far
  less than the deleted Explore section's padding (which went up to
  `170px`/`1440` on the bottom alone).
- Copy (drafted in the site's existing personal/understated voice, editable
  before implementation):

  > "Atelier R.J. is a running record of the things I've actually
  > collected — watches worn on real wrists, scents worth finishing, and
  > one car I still think about on long drives. Dare to Dream is the
  > wishlist: pieces I haven't earned yet, but might one day. Nothing here
  > is curated for anyone else. Come back when the collection changes."

- Section uses the standard 9-of-12-column inset (not the widened one
  from Section 3) since it's a centered text block, not images needing
  extra width.

## 7. Page length reduction

Deleting the 5-card Explore section (the tallest section on the old
homepage: title + 5 photo/text tiles + generous padding) is the primary
reduction. The new Atelier Notes section is a title + one short paragraph
with modest padding, far shorter than what it replaces. No other section's
padding is being cut — Dare to Dream and the hero keep their existing
vertical rhythm from the previous redesign.

## 8. Out of scope

- No changes to Dare to Dream's grid column count, image aspect ratio, or
  card internals beyond the section-width increase in Section 3.
- No changes to the watches/perfumes/cars detail pages.
- No changes to colors, spacing scale, or border radii.
- The Storybook toolchain/config (`next.config.ts`'s proxy, `.storybook/`)
  is untouched — only the site's UI links to it are removed, per Section 5.
