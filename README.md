# Handoff: Fermented Leaf — Cigar Journal

## Overview
**Fermented Leaf** is an editorial website for a cigar journal: long-form reviews, origin stories, and a curated "humidor" shop (affiliate/referral links). This handoff covers the **landing page** design and the **design system** that should be applied to every subsequent page (review detail, article, humidor index, guides, etc.).

Tone: old-library / considered-smoke. Warm browns, aged gold, editorial serifs, generous whitespace. Not a tech-bro aesthetic — imagine *The Paris Review* crossed with a small-batch cigar merchant.

---

## About the Design Files
The files in `reference/` are **design references created in HTML** — a working prototype showing the intended look, theming, and layout. **They are not production code to copy directly.**

The task is to recreate these designs in the target codebase's existing environment (Jekyll, Next.js, Astro, whatever the project uses) using its established component patterns and build tooling. If no environment exists yet, the design was authored with **Jekyll + Bootstrap 5** in mind — all CSS is namespaced under `.fl-site` so it drops cleanly into a `_layouts/default.html` wrap without colliding with Bootstrap utilities, and Bootstrap 5.3.3 is loaded via CDN.

## Fidelity
**High-fidelity.** Exact hex values, type scale, spacing, and layout are all final. Imagery is placeholder-only (diagonal-hatch boxes) — replace with real photography before launch. Copy is editorial-grade placeholder that reads correctly and can be kept as a starting draft.

---

## Files in this package
- `reference/Fermented Leaf.html` — the full landing page prototype. Open it in a browser to see the design live. Toggle the Tweaks panel (bottom-right, off by default; on in the design tool) to switch themes, palettes, accent strength, and logo variant.

---

## Tech baseline

| Piece | Value |
|---|---|
| CSS framework | Bootstrap 5.3.3 (CDN, with SRI) |
| Dark mode | Driven by `data-bs-theme` on `<html>` AND `data-theme` on `.fl-site` |
| CSS namespace | All rules scoped under `.fl-site` — wrap the layout's `<main>` in `<div class="fl-site" data-theme="dark" data-palette="library" data-accent="heavy">` |
| Webfonts | Google Fonts — Playfair Display, Cormorant Garamond, Inter, JetBrains Mono |
| JS | Vanilla. The only JS is the theme/logo/tagline tweaker + an `<html data-bs-theme>` sync |

---

## Design Tokens

### Color palettes

All colors live on the `.fl-site` element as CSS custom properties, swapped by `data-theme` + `data-palette` attributes. **Dark / Library is the default.**

#### Dark · Library (brown + gold) — DEFAULT
```
--fl-bg:         #17100a   /* page background — espresso */
--fl-bg-soft:    #1f1610   /* announce bar, subtle tint */
--fl-bg-card:    #271c13   /* featured card, shelves */
--fl-fg:         #f3ead8   /* primary text — warm cream */
--fl-fg-soft:    #c9b896   /* secondary text */
--fl-fg-muted:   #887558   /* eyebrows, meta, dividers */
--fl-line:       #3d2e1f   /* hairlines & borders */
--fl-accent:     #d4b16a   /* gold */
--fl-accent-hi:  #f0cf87   /* brighter gold (used in "heavy" mode) */
--fl-accent-ink: #17100a   /* text on gold fills */
--fl-hairline:   rgba(212,177,106,0.28)
```

#### Dark · Club (ink + gold) — alternate
```
--fl-bg:         #0a0a0b
--fl-bg-soft:    #121214
--fl-bg-card:    #17171a
--fl-fg:         #efe9dc
--fl-fg-soft:    #b8ae9a
--fl-fg-muted:   #726b5e
--fl-line:       #2a2822
--fl-accent:     #c9a340
--fl-accent-hi:  #e6c05a
--fl-accent-ink: #0a0a0b
--fl-hairline:   rgba(201,163,64,0.3)
```

#### Light · Minimal Connoisseur (cream + bronze)
```
--fl-bg:         #f5f1e8
--fl-bg-soft:    #ece5d4
--fl-bg-card:    #ffffff
--fl-fg:         #1a1410
--fl-fg-soft:    #4a433a
--fl-fg-muted:   #8a8072
--fl-line:       #d9d1bf
--fl-accent:     #8b6a2e
--fl-accent-hi:  #a58040
--fl-accent-ink: #f5f1e8
--fl-hairline:   rgba(139,106,46,0.28)
```

#### Accent strength — "heavy" variant (used with dark themes)
User-selected. Ratchets up gold presence. Applied as `data-accent="heavy"` on `.fl-site`:
```
--fl-fg:         #f7eccf       /* body text shifts warmer */
--fl-fg-soft:    #dcc28a
--fl-hairline:   rgba(212,177,106,0.5)
```
In heavy mode, all italic display `<em>` accents switch from `--fl-accent` to `--fl-accent-hi` for extra pop.

### Typography

| Role | Font | Weights used | Notes |
|---|---|---|---|
| Display serif | **Playfair Display** | 400, 500, 700, 900 + 400 italic | Headlines, wordmark, review titles |
| Italic display (accent) | **Cormorant Garamond** | 300, 400, 500, 600 + italic 300/400 | ONLY the gold italic words — "Leaf", "considered", "humidor", "ashtray", etc. Paired with Playfair for contrast |
| UI / eyebrows / buttons | **Inter** | 300, 400, 500, 600 | All caps, heavy letter-spacing for kickers |
| Mono | **JetBrains Mono** | 400, 500 | Image captions only |

**CSS variables:**
```
--fl-font-display: "Playfair Display", Georgia, serif;
--fl-font-sub:     "Cormorant Garamond", Georgia, serif;
--fl-font-ui:      "Inter", system-ui, sans-serif;
--fl-font-mono:    "JetBrains Mono", ui-monospace, monospace;
```

**Type scale (desktop):**

| Element | Font | Size / LH | Weight |
|---|---|---|---|
| Hero H1 | Playfair | 82px / 1.02, tracking -0.015em | 400 |
| Hero H1 `em` (italic gold) | Cormorant italic | 1.05em of parent | 300 |
| Section H2 | Playfair | 52px / 1.05, tracking -0.01em | 400 |
| Section H2 `em` | Cormorant italic, accent color | 1em | 400 |
| Journal / Newsletter H2 | Playfair | 44–48px / 1.05 | 400 |
| Featured review title | Playfair | 30px / 1.1 | 500 |
| Review card H3 | Playfair | 22px / 1.2 | 500 |
| Body (`.fl-hero-lede`) | Cormorant | 22px / 1.5 | 400 |
| Body small / excerpt | Cormorant | 17–18px / 1.55 | 400 |
| Eyebrow / kicker | Inter | 11px, tracking 0.22–0.24em, UPPERCASE | 500 |
| Nav | Inter | 12px, tracking 0.18em, UPPERCASE | 400 |
| Button | Inter | 11px, tracking 0.22em, UPPERCASE | 500 |
| Score number | Playfair | 44px (featured) / 30–32px (card) | 500, accent color |
| Image caption | JetBrains Mono | 10px, tracking 0.12em | 400 |

### Spacing & layout
- **Container**: `max-width: 1360px; padding: 0 40px;` (wider than Bootstrap's `xxl` — intentionally editorial)
- **Section rhythm**: `padding: 96px 0` with a 1px `--fl-line` bottom border between sections
- **Hero padding**: `72px 0 64px`
- **Newsletter**: `96px 0`
- **Footer**: `72px 0 40px`
- **Grid**: CSS Grid throughout, not flexbox. Hero is `1.1fr 0.9fr`; journal is content + sidebar; footer is `1.4fr 1fr 1fr 1fr`
- **Reviews/humidor grids**: 3–4 column equal split with 32–40px gap

### Borders & hairlines
- Primary line: `1px solid var(--fl-line)`
- Decorative hairline (kicker dashes, ornamental rules): `var(--fl-hairline)` at 1px
- No border-radius anywhere — this is intentional. Sharp corners on everything including cards and buttons
- No drop shadows on content — only on the floating Tweaks panel (ignore; dev tool only)

### Motion
- Link / button hover: `transition: all 160–180ms ease`
- Theme switch: `transition: background 300ms ease, color 300ms ease` on `.fl-site`
- Primary button hover: `translateY(-1px); filter: brightness(1.08)`
- Ghost button hover: border + color shift to accent

---

## Logo / Wordmark

**Final direction: wordmark only. No leaf mark, no crest.**

```html
<div class="fl-logo-wordmark">Fermented <em>Leaf</em></div>
```

- "Fermented" — Playfair Display, 500 weight, 28px, `--fl-fg` color
- "Leaf" — Cormorant Garamond, italic, 400 weight, **`--fl-accent` color (gold)**, slightly larger optical size (the `em` is `1.15em` of parent in some contexts)
- Sits in the center column of the nav's 3-column grid
- In heavy-accent mode the italic "Leaf" swaps to `--fl-accent-hi`

The `reference/Fermented Leaf.html` prototype also contains a crest variant (oval cigar band with FL monogram, EST · MMXXVI, and laurel flourishes). **This is parked, not shipping.** Leave it in the prototype as a future option; do not implement in the site.

---

## Page structure — Landing page

Sections top-to-bottom, with implementation notes. Every section is a direct child of `.fl-container` unless otherwise noted.

### 1. Announcement bar (`.fl-announce`)
Full-bleed thin strip above everything. Centered 1360px inner (`.fl-announce-inner`).
- Left: "Volume I · Issue 04 — *The Winter Humidor*" (italic word in gold)
- Right: "Free shipping on referred orders over $200"
- 10px vertical padding, `--fl-bg-soft` background, 12px uppercase tracked text

### 2. Nav (`.fl-nav`)
3-column grid: left links · centered logo · right links + theme toggle.
- Left links: Reviews · The Journal · Humidor · Guides
- Right: Search · Account · **Subscribe** (in gold) · theme toggle button (sun/moon icon + "Light"/"Dark" label, bordered pill)
- 1px bottom border

### 3. Hero (`.fl-hero`)
Grid `1.1fr 0.9fr`, 72px gap, 1px bottom border.
- **Left column**: eyebrow ("Est. MMXXVI · A Cigar Journal") → H1 ("The *considered* smoke, catalogued.") → lede paragraph (tagline, editable via Tweaks, followed by a dimmer continuation) → two CTAs (primary gold "Latest Reviews →", ghost "Browse the Humidor") → 3-stat meta row above a top border (412 Cigars Reviewed, 37 Origin Stories, 18,240 Readers Subscribed)
- **Right column** (`.fl-featured`): "Editor's Smoke" card. Gold tag pinned top-right. 4:3 image placeholder. Small origin caption ("Vuelta Abajo · Cuba · 2022"). Title ("Partagás Serie E No. 2 — the slow conversation"). 2-sentence excerpt. Footer row: big 94/100 score on the left, "Read the review →" link on the right, separated by a top hairline

### 4. Recent Reviews (`.fl-section` → `.fl-reviews`)
Section header in a flex row: left = kicker + H2 ("Notes from the *humidor*, one cigar at a time."), right = side paragraph (methodology blurb, max 38ch).

Grid of 3 review cards. Each card:
- 3:2 image placeholder
- Meta row: "Nicaragua · Estelí" / "Mar 14"
- H3 (review title)
- 1-line notes in Cormorant
- Footer: big score number (`.fl-score`) + strength dots (5 circles, filled vs unfilled — 6px diameter, `--fl-accent` fill when on, `--fl-line` ring when off)

### 5. Journal (`.fl-section` → `.fl-journal-wrap`)
Two-column: main list + sidebar.
- **Main**: kicker + H2 ("Essays, origin stories, and the *slow craft* of fermentation.") + 5-item list (`.fl-journal-list`). Each item is a 3-part row: `01` number (Playfair, muted) · stack of title + meta · `→` arrow aligned right. Hairline between items. Hover = arrow moves 6px right + item goes accent.
- **Sidebar** (`.fl-sidecard` × 2): "Staff Favorites" with 5 roman-numeral picks (`.fl-picks`), and "The Rating System" with a short methodology blurb + "Read the methodology →" link

### 6. Pullquote (`.fl-pull`)
Centered. Giant gold italic opening quote mark (80px), then 44px italic blockquote ("To smoke well is to accept that time is the first ingredient."), then cite ("— From the letter to readers, Issue 01") in uppercase tracked style.

### 7. Humidor (`.fl-section` → `.fl-humidor`)
"The Humidor" section — the referral/affiliate shop strip. Centered intro (kicker, H2 "A small, *opinionated* shelf.", disclosure paragraph). Grid of 4 product cards (`.fl-shelf`):
- 4:5 image placeholder
- House (eyebrow tracked): "Habanos S.A."
- Name (Playfair): "Montecristo No. 2"
- Price: "$32 / single" (gold)
- CTA link: "Shop at La Casa →"

### 8. Newsletter (`.fl-newsletter`)
Two columns, 80px gap. Left: kicker "The Dispatch" + H2 ("A monthly letter from the *ashtray*."). Right: paragraph + underlined inline form (transparent input "your address, please" + "Subscribe →" button, both sitting on a single bottom border) + fine print ("Monthly · Never shared · Written by hand").

### 9. Footer (`.fl-footer`)
Grid `1.4fr 1fr 1fr 1fr`.
- Col 1: "Fermented *Leaf*" wordmark (footer size ~28px) + blurb
- Col 2: "Reading" — Latest reviews / The Journal / Pairings / Guides
- Col 3: "The Humidor" — Editor's picks / By origin / By strength / Under $15
- Col 4: "Quiet corners" — About / Methodology / Referral disclosure / Contact

### 10. Footer bottom
Thin row, top hairline. Left copyright, right disclaimer ("Readers must be of legal smoking age · Smoke responsibly"). Both 11px uppercase tracked.

---

## Interactions & Behavior

- **Theme toggle** (nav button): flips `data-theme` on `.fl-site` and `data-bs-theme` on `<html>` between `dark` and `light`. Persists to localStorage in production (prototype persists via the design tool).
- **Link hover**: color → `--fl-accent`, 160ms
- **Button hover (primary)**: -1px Y + 1.08 brightness
- **Button hover (ghost)**: border + text shift to accent
- **Journal list item hover**: accent color + arrow nudges 6px right
- **Newsletter submit**: on submit, swap button text to "Thank you —" (prototype does this inline; real site should do a proper subscribe flow)
- **Strength dots**: decorative only, represent a 0–5 strength scale per review

No animations beyond simple hover transitions. No parallax, no intersection observers, no splash. Page is intentionally calm.

---

## Responsive behavior

Single breakpoint in the prototype at `960px`:
- Hero, Journal, Newsletter collapse to single column, 48px gap
- Reviews/Humidor become single column
- Footer becomes 2x2
- Hero H1 shrinks to 56px
- Section header switches to stacked (vertical)

Recommend the real implementation add a mid breakpoint (~1100px) for 2-col reviews, and a mobile breakpoint (~640px) tightening container padding to 20px.

---

## State management (for interactive pieces)

For the landing page, the only client state is **theme** (`dark` | `light`) and optionally the user's dismissal of the announcement bar. Persist in `localStorage` under keys like `fl.theme`.

If review pages / journal pages are built:
- **Filter/sort state** on review index (by origin, by strength, by score) — query params
- **Subscribe form** state (idle / submitting / done / error)

---

## Assets

All imagery in the prototype is **placeholder only** — `.fl-img-ph` diagonal-hatch boxes labeled with their aspect ratio and purpose ("Cigar hero shot · 4:3", "Review 01 · 3:2", "Product · 4:5"). Replace with real photography:

| Slot | Aspect | Count on landing |
|---|---|---|
| Editor's Smoke hero | 4:3 | 1 |
| Review cards | 3:2 | 3 |
| Product shelves | 4:5 | 4 |

Recommended shot direction: warm low-key product photography, shallow depth of field, neutral backgrounds (linen, dark wood, marble). No lifestyle shots of people smoking — keep it about the cigar itself. Humidor shots should match a consistent studio setup so the grid reads as one shelf.

No icons other than the sun/moon theme toggle (inline SVG, paths in the prototype JS).

---

## Recommended implementation stack

Given the Jekyll + Bootstrap baseline already assumed in the prototype:
1. **Jekyll** for the static site + Markdown for every article/review
2. **Bootstrap 5.3.3** only for layout primitives if convenient — but most of the layout is custom CSS Grid. Don't reach for BS components like `.card` or `.btn`; the design has its own visual language
3. Copy the entire `<style>` block from the prototype into a SCSS partial (`_sass/_fermented-leaf.scss`) and import from your main stylesheet
4. The CSS is already scoped under `.fl-site` — wrap the `<body>` or `<main>` in `<div class="fl-site" data-theme="dark" data-palette="library" data-accent="heavy">` in `_layouts/default.html` and every page inherits the theme
5. Build front-matter-driven collections: `_reviews/`, `_journal/`, `_humidor/` (products with affiliate links). Landing page pulls latest N from each

If not Jekyll, the same structure works in **Astro** or **Next.js (app router, SSG)** with equivalent collections / MDX.

---

## Content collections to model

| Collection | Key fields |
|---|---|
| Review | title, cigar name, brand/house, origin (country + region), date, score (0–100), strength (1–5), cover image, notes (short), body (long), pairings[] |
| Journal article | title, kicker ("Origin Report", "Craft", "Pairings", "Essay", "Primer"), read-time minutes, cover image, body |
| Humidor item | product name, house, price, size/vitola, affiliate URL, retailer name ("La Casa", "Holt's", "JR", "Small Batch"), cover image, linked-review slug |
| Issue (optional) | volume, number, title ("The Winter Humidor"), dispatch date |

---

## Open questions for the dev

1. Which **CMS** (if any) backs the reviews/journal? Jekyll flat files, Netlify CMS, Decap, something else?
2. **Newsletter provider** — Buttondown? Ghost? ConvertKit? The form POST target depends on it.
3. **Affiliate tracking** on humidor CTAs — plain `rel="sponsored nofollow"` links, or a redirect route that logs clicks?
4. **Review rating** — is the 0–100 score authored directly, or computed from sub-scores (construction, draw, combustion, flavor, finish — mentioned in the methodology)?
5. **Age gate** — required on first visit? (Legal disclaimer in the footer suggests this may be needed in some jurisdictions.)
