# SensEar Industry Sub-Page Template Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This **one spec covers all six industry sub-pages** — they share an identical layout, differing only in dictionary namespace and image folder.

## Summary

Rebuild the six industry detail pages into the dark editorial treatment. They are structurally identical (hero → statement → method → for whom → results + portfolio CTA → contact CTA), each reading its own `dict.<industry>` namespace. Build **one shared template component** and instantiate it six times — don't write six bespoke pages.

The six pages + their dict namespaces + image folders:

| Route                                                | Dict namespace      | Image folder prefix                           | Design reference                          |
|------------------------------------------------------|---------------------|-----------------------------------------------|-------------------------------------------|
| `industries/music-for-hotels-and-resorts`            | `hotels_resorts`    | `/images/industries/hotels-resorts-*`         | [`SensEar Hotels & Resorts.dc.html`](../SensEar%20Hotels%20%26%20Resorts.dc.html) |
| `industries/music-for-restaurants-and-bars`          | `restaurants_bars`  | `/images/industries/restaurants-bars-*`       | [`SensEar Restaurants & Bars.dc.html`](../SensEar%20Restaurants%20%26%20Bars.dc.html) |
| `industries/music-for-events-and-experiences`        | `events_experiences`| `/images/industries/events-experiences-*`     | [`SensEar Events & Experiences.dc.html`](../SensEar%20Events%20%26%20Experiences.dc.html) |
| `industries/music-for-retail-stores`                 | `retail_stores`     | `/images/industries/retail-stores-*`          | [`SensEar Retail Stores.dc.html`](../SensEar%20Retail%20Stores.dc.html) |
| `industries/music-for-wellness-and-gyms`             | `wellness_gyms`     | `/images/industries/wellness-gyms-*`          | [`SensEar Wellness & Gyms.dc.html`](../SensEar%20Wellness%20%26%20Gyms.dc.html) |
| `industries/music-for-art-museums-and-fashion`       | `art_museums_fashion` | `/images/industries/art-museums-fashion-*`  | [`SensEar Art Museums & Fashion.dc.html`](../SensEar%20Art%20Museums%20%26%20Fashion.dc.html) |

Demo routes: `/industries-v3/music-for-<slug>` (+ `/en/...`), branch `redesign/home-v3-dark`.

---

## Section structure (current → v3)

The current pages already share this shape (verified against `music-for-hotels-and-resorts/page.tsx`):

| # | Current section                                  | v3 equivalent          | Background  | Source keys                              |
|---|--------------------------------------------------|------------------------|-------------|------------------------------------------|
| 1 | Hero (warm; title + italic subtitle + desc + image) | Hero                | `#0b0a0a`   | `<ind>.hero.{title,subtitle,description,image,image_alt}` |
| 2 | Intro (black band, p1/p2)                        | Statement              | `#0e0d0c`   | `<ind>.intro.{title,p1,p2}`              |
| 3 | what_we_do (image + heading list)                | Method (HOW WE UPGRADE)| `#0b0a0a`   | `<ind>.what_we_do.{title,subtitle,image,items[]}` |
| 4 | ideal_for (heading list + image)                 | For whom (AUDIENCES)   | `#0e0d0c`   | `<ind>.ideal_for.{title,image,items[]}`  |
| 5 | how_we_help (image + heading list + CTA card)    | Results + portfolio CTA| `#0b0a0a`   | `<ind>.how_we_help.{title,image,items[],cta_title,cta_description,cta_button,cta_link}` |
| 6 | `<FinalCTA>`                                     | Contact CTA            | image+overlay | `<ind>.cta.{description,button}` (+ hardcoded heading per page) |

The design's "Method" section uses **gold-dot bullet rows**; "For whom" uses **Didot-italic linked-row titles with hover color shift**; "Results" uses **gold-outline check chips**. The whole page ends with a small "see portfolio" ghost CTA before the final Contact CTA.

---

## Files

```
app/[lang]/industries-v3/music-for-hotels-and-resorts/page.tsx       NEW — thin: <IndustryDetail content={dict.hotels_resorts} lang={lang} />
app/[lang]/industries-v3/music-for-restaurants-and-bars/page.tsx     NEW — dict.restaurants_bars
app/[lang]/industries-v3/music-for-events-and-experiences/page.tsx   NEW — dict.events_experiences
app/[lang]/industries-v3/music-for-retail-stores/page.tsx            NEW — dict.retail_stores
app/[lang]/industries-v3/music-for-wellness-and-gyms/page.tsx        NEW — dict.wellness_gyms
app/[lang]/industries-v3/music-for-art-museums-and-fashion/page.tsx  NEW — dict.art_museums_fashion
components/industry-detail-v3/
  IndustryDetail.tsx              client — shared template; props: { content, lang, sideLabel, imageKicker, imageCaption, ctaHeading }
  (sub-pieces inline: Hero, Statement, Method, ForWhom, Results, PortfolioCTA)
ContactCTA                        reuse components/home-v3/ContactCTA.tsx
```

`<IndustryDetail>` reads `content` (the `dict.<ind>` object) plus a small per-page extras object for the strings the dict doesn't already hold (the side rail, the hero image-overlay kicker/caption, and the CTA heading — see "New keys" below; until they exist, pass them as props). Each route file is ~15 lines.

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Each `dict.<ind>` already has `meta`, `hero.{title,subtitle,description,image,image_alt}`, `intro.{title,p1,p2}`, `what_we_do.{title,subtitle,image,items[]}` (`items` = `{title,description}`), `ideal_for.{title,image,items[]}`, `how_we_help.{title,image,items[],cta_title,cta_description,cta_button,cta_link}`, `cta.{description,button}`. Verify all six namespaces have these keys (`hotels_resorts` confirmed; spot-check the other five and backfill any missing key from its design file).

**Amendments** — `<em>` italic-gold emphasis on each section heading's key word. Per-page emphasis words (read from each `.dc.html` design — the hotels reference shows them):

| Page                | Hero subtitle (whole)         | Intro heading word     | Method heading word    | For-whom heading word | Results heading word |
|---------------------|-------------------------------|------------------------|------------------------|-----------------------|----------------------|
| hotels_resorts      | (rendered whole in Didot gold) | **φιλοξενίας**         | **εμπειρία**           | **premium**           | **ξενοδοχείο**       |
| restaurants_bars    | (rendered whole in Didot gold) | (per design)           | (per design)           | (per design)          | (per design)         |
| events_experiences  | (rendered whole in Didot gold) | (per design)           | (per design)           | (per design)          | (per design)         |
| retail_stores       | (rendered whole in Didot gold) | (per design)           | (per design)           | (per design)          | (per design)         |
| wellness_gyms       | (rendered whole in Didot gold) | (per design)           | (per design)           | (per design)          | (per design)         |
| art_museums_fashion | (rendered whole in Didot gold) | (per design)           | (per design)           | (per design)          | (per design)         |

Open each design `.dc.html` to read the exact italic word per heading; structure is identical.

**Hero subtitle treatment**: the current dict already has `hero.subtitle` as the tagline (e.g. "Ηχοτοπία για κάθε ώρα και χώρο"). For v3 it's rendered **whole** in `font-didot` italic gold — no per-word `<em>` needed.

**New keys** per namespace:

```json
"<ind>": {
  "hero": {
    "side_label": "INDUSTRIES — <INDUSTRY NAME>",
    "kicker": "<INDUSTRY NAME>",          // breadcrumb second token; first token "ΚΛΑΔΟΙ" links to /industries
    "image_kicker": "<e.g. HOTELS & RESORTS>",
    "image_caption": "<e.g. A sound for every hour.>"
  },
  "intro":       { "kicker": "Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ" },
  "what_we_do":  { "kicker": "Η ΜΕΘΟΔΟΣ ΜΑΣ" },
  "ideal_for":   { "kicker": "ΓΙΑ ΠΟΙΟΥΣ" },
  "how_we_help": { "kicker": "ΤΑ ΑΠΟΤΕΛΕΣΜΑΤΑ" },
  "cta":         { "kicker": "ΑΣ ΣΥΝΕΡΓΑΣΤΟΥΜΕ", "title": "<the heading currently hardcoded in page.tsx, with <em> on the key word>" }
}
```

**Move the hardcoded CTA headings into the dict.** Each industry page currently has its CTA heading hardcoded in JSX (e.g. "Αναβαθμίστε την ατμόσφαιρα του ξενοδοχείου σας" / "Upgrade your hotel's atmosphere"). Move all six (Greek + English) into `dict.<ind>.cta.title` so `<IndustryDetail>` reads them uniformly.

---

## Section detail (shared template)

### 1. Hero
Standard dark hero. `min-h-[92vh]`, drift orbs, side rail (`hero.side_label`), breadcrumb kicker (`ΚΛΑΔΟΙ` link to `localizedPath('/industries')` + 18px hairline + gold `hero.kicker`), H1 `hero.title`, **Didot-italic gold `hero.subtitle`** (the whole tagline, `text-[clamp(1.5rem,2.8vw,2.3rem)] leading-[1.2]`), description `hero.description` (`/72`, `clamp(1.05rem,1.5vw,1.28rem)`, `max-w-[540px]`), MorphCTA → `localizedPath('/contact')` (label is per-page — see hotels: "Ζητήστε μια ηχητική μελέτη") + text link "Δείτε όλους τους κλάδους" → `localizedPath('/industries')`. Right: `aspect-[1/1]` image (`hero.image`) + `image_kicker`/`image_caption` overlay + spinning badge.

### 2. Statement
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, drift orb. Centered `max-w-[1080px]`: kicker (`intro.kicker` "Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ") → H2 `intro.title` (italic span per page) → `intro.p1` (large white, `dangerouslySetInnerHTML`) + `intro.p2` (`/58`).

### 3. Method (`what_we_do`)
`<section className="py-[130px] pb-[110px] bg-[#0b0a0a] relative">`, drift orb. Grid `grid-cols-[.95fr_1.05fr] gap-16 items-center`:
- **Left**: `what_we_do.image`, `aspect-[4/4.4]` rounded-8 + overlay. `ScrollReveal direction="left"`.
- **Right**: kicker (`what_we_do.kicker` "Η ΜΕΘΟΔΟΣ ΜΑΣ") → H2 `what_we_do.title` (italic span) → `what_we_do.subtitle` (`/60`) → bordered rows from `what_we_do.items[]`. Each row: `flex gap-5 py-6 border-t border-[#faf6f1]/12` (last `border-b`), a 7px gold dot (`bg`=`--gold`, `margin-top:9px`), then `item.title` (`font-bold text-[1.28rem]`) + `item.description` (`/58`, `dangerouslySetInnerHTML` since some pages already use `<strong>`). `StaggerChildren`.

### 4. For whom (`ideal_for`)
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, drift orb. Grid `grid-cols-[1.05fr_.95fr] gap-16 items-center`:
- **Left**: kicker (`ideal_for.kicker` "ΓΙΑ ΠΟΙΟΥΣ") → H2 `ideal_for.title` (italic span — e.g. "premium") → rows from `ideal_for.items[]`. Each row: `block py-6 border-t border-[#faf6f1]/12` (last `border-b`), Didot-italic title (`item.title`, `text-[1.55rem]`, hover → gold via JS class), then `item.description` (`/58`). `StaggerChildren`.
- **Right**: `ideal_for.image`, `aspect-[4/4.6]` rounded-8 + overlay.

### 5. Results + Portfolio CTA (`how_we_help`)
`<section className="py-[130px] bg-[#0b0a0a] relative">`, drift orb.

Centered header `max-w-[880px]`: kicker (`how_we_help.kicker` "ΤΑ ΑΠΟΤΕΛΕΣΜΑΤΑ") → H2 `how_we_help.title` (italic span — e.g. "ξενοδοχείο" / venue noun).

Grid `grid-cols-2 gap-16 items-center`:
- **Left**: `how_we_help.image`, `aspect-[4/4.6]` rounded-8 + overlay.
- **Right**: rows from `how_we_help.items[]`. Each row: `flex gap-5 items-start py-[22px] border-t border-[#faf6f1]/12` (last `border-b`), a 24px circular gold-outline check chip (lucide `Check`, `text-[#f0bd95]`, `strokeWidth={2.4}`, `margin-top:4px`), then `item.title` (`font-bold text-[1.22rem]`) + `item.description` (`/62`). `StaggerChildren`.

**Portfolio mini-CTA** centered below grid (`max-w-[680px] mx-auto mt-[90px] text-center`):
- H3 `how_we_help.cta_title` (italic span, `clamp(1.5rem,2.4vw,2rem)`).
- Paragraph `how_we_help.cta_description` (`/65`).
- **Ghost button** (border, not MorphCTA) `how_we_help.cta_button` → `localizedPath('/' + how_we_help.cta_link)` (typically `/case-studies`). `border-[1.5px] border-[#faf6f1]/35 rounded-full py-[16px] px-[32px] font-bold text-[15px]`, hover → fill gold + black text.

### 6. Contact CTA
Reuse home-v3 ContactCTA. Full-bleed `hero.image` of the industry + dark overlay `linear-gradient(180deg,rgba(11,10,10,.82),rgba(11,10,10,.93))`. Copy from `<ind>.cta`: kicker (`cta.kicker` "ΑΣ ΣΥΝΕΡΓΑΣΤΟΥΜΕ"), H2 `cta.title` (the moved-from-JSX heading, italic span on the key word — e.g. "ατμόσφαιρα" for hotels), lede `cta.description`, primary `<MorphCTA>` `cta.button` → `localizedPath('/contact')`, ghost "Δείτε τις υπηρεσίες μας" / "Explore our services" → `localizedPath('/services')`. Phone/location line.

---

## Images (per folder)

Each design references 4 images in `/images/industries/<prefix>-*.{jpg|webp}`: a hero (`-curated-music-ambiance.jpg` for hotels; analogous for others), a method image (boutique/restaurant/etc), a for-whom image (lobby/dining/etc), and a results image (sonic-identity-detail). Use the existing files in `/public/images/industries/` per each design's `<img src>`s and pass the matching paths into `<IndustryDetail images={...}>`. **No new assets** — every image already exists.

Per-page image set:

| Page               | Hero / CTA bg                                  | Method                                  | For whom                                | Results                                  |
|--------------------|------------------------------------------------|-----------------------------------------|-----------------------------------------|------------------------------------------|
| hotels_resorts     | `hotels-resorts-curated-music-ambiance.jpg`    | `hotels-resorts-boutique-hotel-music.webp` | `hotels-resorts-luxury-hotel-lobby.jpg` | `hotels-resorts-sonic-identity-detail.jpg` |
| restaurants_bars   | (read from `SensEar Restaurants & Bars.dc.html`) | …                                       | …                                       | …                                        |
| events_experiences | (read from design file)                        | …                                       | …                                       | …                                        |
| retail_stores      | (read from design file)                        | …                                       | …                                       | …                                        |
| wellness_gyms      | (read from design file)                        | …                                       | …                                       | …                                        |
| art_museums_fashion| (read from design file)                        | …                                       | …                                       | …                                        |

---

## Notes

- **One template, six thin pages.** Build `<IndustryDetail>` once, validate on `music-for-hotels-and-resorts`, then the other five are config + image paths.
- **Move the CTA heading into the dict** (`cta.title`, both languages). The current pages have it hardcoded in JSX — clean up while you're already in the file.
- Keep `generateMetadata()` and its OpenGraph image per page; only the JSX changes.
- `<FinalCTA>` stays shared (still used by other pages); swap to dark ContactCTA on these six only.
- Mobile: hero stacks (image below text); all 2-col sections stack; method/results lists single-column; for-whom rows stay full-width.
