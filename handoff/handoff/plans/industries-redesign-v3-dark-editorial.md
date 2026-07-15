# SensEar Industries Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This spec covers only the Industries index page.

## Summary

Rebuild `app/[lang]/industries/page.tsx` into the dark editorial treatment. The current page already iterates `industries_page.expertise.items[]` as alternating image/text rows and has a "what connects" checklist section — so this is a **reskin + the image-mapping fix**, no dictionary restructuring.

Design reference: [`SensEar Industries.dc.html`](../SensEar%20Industries.dc.html). Demo route: `/industries-v3` (+ `/en/industries-v3`), branch `redesign/home-v3-dark`.

---

## Section structure (current → v3)

| # | Current section                              | v3 equivalent       | Background  | Change                                                    |
|---|----------------------------------------------|---------------------|-------------|-----------------------------------------------------------|
| 1 | Hero (warm texture, H1 + square img)         | Hero                | `#0b0a0a`   | Side rail, kicker, italic span, MorphCTA, SIX WORLDS badge |
| 2 | Intro (black band, centered)                 | Statement           | `#0e0d0c`   | Reskin; kicker "ΓΙΑΤΙ ΕΧΕΙ ΣΗΜΑΣΙΑ"; italic span           |
| 3 | expertise (6 alternating rows)               | Industries          | `#0b0a0a`   | Same 6 rows, dark; Didot subtitle; "Αποτέλεσμα:" run; MorphCTA; **fix image mapping** |
| 4 | connect (image + checklist + conclusion)     | What connects       | `#0e0d0c`   | 2-col, gold-outline check rows, Didot conclusion           |
| 5 | `<FinalCTA>`                                 | Contact CTA         | image+overlay | Dark full-bleed ContactCTA                              |

Order unchanged.

---

## Files

```
app/[lang]/industries-v3/page.tsx   NEW — demo (server component)
components/industries-v3/
  Hero.tsx
  IndustryRow.tsx                    client — alternating row, props: {title, subtitle, desc1, desc2, image, link, cta, imageSide}
  WhatConnects.tsx                   client — image + gold-check list + Didot conclusion
ContactCTA                          reuse components/home-v3/ContactCTA.tsx with industries copy
```

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Keep the existing `industries_page` keys:

- `industries_page.meta.{title,description}`
- `industries_page.hero.{title,subtitle}` (title has `<br />`)
- `industries_page.intro.{title,p1,p2}`
- `industries_page.expertise.{title,subtitle,items[]}` — each item `{title, subtitle, desc1, desc2, link, cta}` (`subtitle` = Didot tagline, `desc2` = the bold "result" line)
- `industries_page.connect.{title,subtitle,points[],conclusion}`
- `industries_page.cta.{title,subtitle,contact,services}`

### Fix: add an explicit `image` to each `expertise.items[]` entry

The current page maps item index → image via a hard-coded `index === N` ladder, and the order is shuffled (index 0 → restaurants image, 1 → hotels, etc.). For v3, **add an `image` field to each item** in `el.json` + `en.json` so `IndustryRow` maps reliably and the row order matches the design (Hotels → Restaurants → Events → Retail → Wellness → Art):

```json
"industries_page": {
  "expertise": {
    "items": [
      { "title": "Ξενοδοχεία & Θέρετρα", "image": "/images/industries/industry-hotels-resorts.jpg",     "link": "industries/music-for-hotels-and-resorts",        "...": "existing subtitle/desc1/desc2/cta" },
      { "title": "Εστιατόρια & Bar",      "image": "/images/industries/industry-restaurants-bars.jpg",   "link": "industries/music-for-restaurants-and-bars",      "...": "…" },
      { "title": "Εκδηλώσεις & Εμπειρίες","image": "/images/industries/industry-events-experiences.jpg", "link": "industries/music-for-events-and-experiences",    "...": "…" },
      { "title": "Καταστήματα Λιανικής",  "image": "/images/industries/industry-retail-stores.jpg",      "link": "industries/music-for-retail-stores",             "...": "…" },
      { "title": "Χώροι ευεξίας & Γυμναστήρια", "image": "/images/industries/industry-wellness-gyms.jpg","link": "industries/music-for-wellness-and-gyms",         "...": "…" },
      { "title": "Τέχνη, Μουσεία & Μόδα", "image": "/images/industries/industry-art-museums-fashion.jpg","link": "industries/music-for-art-museums-and-fashion",   "...": "…" }
    ]
  }
}
```

Keep the existing `subtitle`/`desc1`/`desc2`/`cta` values; just add `image`. Then `IndustryRow` reads `item.image` instead of the index ladder. `imageSide` alternates by index (`index % 2 === 0` → left).

**Amendments** — `<em>` for italic-gold emphasis:

| Key                                | Emphasis word                          |
|------------------------------------|----------------------------------------|
| `industries_page.hero.title`       | **κλάδο / industry**                   |
| `industries_page.intro.title`      | **ατμόσφαιρα / atmosphere**            |
| `industries_page.expertise.title`  | **προσέγγιση / approach**              |
| `industries_page.connect.title`    | **κόσμους / worlds**                   |
| `industries_page.cta.title`        | **δυναμική / potential**               |

**New keys**:

```json
"industries_page": {
  "hero": {
    "side_label": "INDUSTRIES — SONIC FIT",
    "kicker": "ΟΙ ΚΛΑΔΟΙ ΠΟΥ ΕΞΥΠΗΡΕΤΟΥΜΕ",
    "primary_cta": "Βρείτε τον κλάδο σας",
    "secondary_cta": "Κλείστε ραντεβού",
    "image_kicker": "SIX WORLDS",
    "image_caption": "A sound for every space."
  },
  "intro":      { "kicker": "ΓΙΑΤΙ ΕΧΕΙ ΣΗΜΑΣΙΑ" },
  "expertise":  { "kicker": "ΚΛΑΔΟΙ" },
  "connect":    { "kicker": "ΚΟΙΝΟ ΝΗΜΑ" }
}
```

---

## Section detail

### 1. Hero — `components/industries-v3/Hero.tsx`
Standard dark hero. `min-h-[92vh]`, drift orbs, side rail (`industries_page.hero.side_label`), kicker → H1 (`hero.title`, italic on "κλάδο") → subtitle (`/72`) → MorphCTA "Βρείτε τον κλάδο σας" → `#industries` + text link `#cta`. Right: `aspect-[1/1]` image `/images/industries/industries-hero.jpg`, SIX WORLDS / "A sound for every space." overlay, spinning badge.

### 2. Statement — inline in `page.tsx`
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, drift orb. Centered `max-w-[1080px]`: kicker (`intro.kicker`) → H2 (`intro.title`, italic on "ατμόσφαιρα") → `intro.p1` (large white) + `intro.p2` (`/58`).

### 3. Industries — `IndustryRow` ×6
`<section id="industries" className="py-[130px] pb-[110px] bg-[#0b0a0a] relative">`, drift orb. Centered header: kicker (`expertise.kicker`) → H2 (`expertise.title`, italic on "προσέγγιση") → sub.

Map `expertise.items[]` → `<IndustryRow>`, `grid-cols-2 gap-16 items-center mb-[110px]` (last row none):
- Image col: `item.image`, `aspect-[3/4]` rounded-8 + bottom overlay. `imageSide = index % 2 === 0 ? 'left' : 'right'` (use `order`).
- Text col: H3 `item.title` (`font-extrabold clamp(1.9rem,3.4vw,3rem)`) → Didot-italic gold `item.subtitle` → `item.desc1` (`/66`) → `item.desc2` as the "Αποτέλεσμα:"/"result" line (`/55`; render the leading label gold-clipped — the design bolds "Αποτέλεσμα:" with the gradient) → `<MorphCTA>` `item.cta` → `localizedPath('/' + item.link)`.
- `ScrollReveal` ladder; image `ScrollReveal` from its side. Wrap the 6 rows in `StaggerChildren` if you prefer, or per-row reveals (design uses per-element).

### 4. What connects — `components/industries-v3/WhatConnects.tsx`
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative">`, drift orb. Grid `grid-cols-[.95fr_1.05fr] gap-16 items-center`:
- **Left**: image `/images/industries/industries-connected-worlds.png` (`aspect-[4/4.2]` rounded-8 + overlay). **Note**: the current page reuses `industry-hotels-resorts.jpg` here as a placeholder — the design specifies `industries-connected-worlds.png`. Use that file if it exists in `/public/images/industries/`; otherwise keep the hotels image and flag it.
- **Right**: kicker (`connect.kicker`) → H2 (`connect.title`, italic on "κόσμους") → sub → checklist from `connect.points[]`. Each row: `flex gap-5 items-start py-5 border-t border-[#faf6f1]/12` (last `border-b`), a 24px circular gold-outline check chip (lucide `Check`, `text-[#f0bd95]`, `strokeWidth={2.4}`), then point text (`text-[1.1rem] text-[#faf6f1]/72`). `StaggerChildren`. Then `connect.conclusion` as a Didot-italic gold statement (`text-[1.4rem] mt-[38px]`).

### 5. Contact CTA
Reuse home-v3 ContactCTA. Full-bleed `/images/industries/industries-hero.jpg` + dark overlay. Copy from `industries_page.cta`: kicker "ΑΣ ΣΥΝΕΡΓΑΣΤΟΥΜΕ", H2 `cta.title` (italic on "δυναμική"), lede `cta.subtitle`. Buttons: primary `<MorphCTA>` `cta.contact` → `mailto:`/`localizedPath('/contact')`; ghost `cta.services` → `localizedPath('/services')`. Phone/location line.

---

## Image inventory (all in `/public/images/industries/`)

| Spot               | File                                  |
|--------------------|---------------------------------------|
| Hero + CTA bg      | `industries-hero.jpg`                 |
| Row 1 Hotels       | `industry-hotels-resorts.jpg`         |
| Row 2 Restaurants  | `industry-restaurants-bars.jpg`       |
| Row 3 Events       | `industry-events-experiences.jpg`     |
| Row 4 Retail       | `industry-retail-stores.jpg`          |
| Row 5 Wellness     | `industry-wellness-gyms.jpg`          |
| Row 6 Art          | `industry-art-museums-fashion.jpg`    |
| What connects      | `industries-connected-worlds.png` (verify; else fall back to hotels image) |

---

## Notes

- The single substantive data change is **adding `image` to each `expertise.items[]`** and reordering them Hotels-first; everything else is reskin. Verify the existing item order in `el.json`/`en.json` before reordering so subtitle/desc/cta stay attached to the right industry.
- Each row links to its existing industry sub-page (`/industries/music-for-...`) — keep those targets.
- `<FinalCTA>` stays shared; swap to dark ContactCTA on this page only.
- Mobile: rows stack (image above text); the checklist column drops below the image.
