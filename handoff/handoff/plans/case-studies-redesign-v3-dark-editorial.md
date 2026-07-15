# SensEar Case Studies Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This spec covers only the Case Studies page.

## Summary

Rebuild `app/[lang]/case-studies/page.tsx` into the dark editorial treatment. The current page maps `case_studies.items[]` to alternating image/text rows, each with a **SoundCloud embed** (via a local `assetMap`). This is a **reskin** that preserves the SoundCloud players (recolored to the brand gold `#f0bd95`).

Design reference: [`SensEar Case Studies.dc.html`](../SensEar%20Case%20Studies.dc.html). Demo route: `/case-studies-v3` (+ `/en/case-studies-v3`), branch `redesign/home-v3-dark`.

---

## Section structure (current → v3)

| # | Current section                          | v3 equivalent       | Background  | Change                                                       |
|---|------------------------------------------|---------------------|-------------|--------------------------------------------------------------|
| 1 | Hero (warm texture, H1 + square img)     | Hero                | `#0b0a0a`   | Side rail, kicker, italic span, MorphCTA, FROM VISION… badge  |
| 2 | Intro (black band, centered)             | Statement           | `#0e0d0c`   | Reskin; kicker "ΑΠΟ ΤΟ ΟΡΑΜΑ ΣΤΟΝ ΗΧΟ"; italic span           |
| 3 | items (4 alternating rows + SoundCloud)  | Cases               | `#0b0a0a`   | 4 dark rows; Didot location subtitle; recolored SC player + "listen" link |
| 4 | `<FinalCTA>`                             | Contact CTA         | image+overlay | Dark full-bleed ContactCTA                                  |

Order unchanged.

---

## Files

```
app/[lang]/case-studies-v3/page.tsx   NEW — demo (server component; keep the assetMap)
components/case-studies-v3/
  Hero.tsx
  CaseRow.tsx                          client — alternating row: image + name + Didot location + 2 paragraphs + SoundCloud iframe + listen link, prop imageSide
ContactCTA                             reuse components/home-v3/ContactCTA.tsx
```

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Keep `case_studies`:
- `case_studies.meta.{title,description}`
- `case_studies.hero.{title,subtitle}` (title has `<br />`)
- `case_studies.intro.{title,p1,p2}`
- `case_studies.items[]` — each `{title, desc1, desc2, link_text}` (title = venue, e.g. "Beach House"); **add a `location` field** per item (Αντίπαρος / Σίφνος / Αντίπαρος / Πάρος) for the Didot subtitle, since the design shows it separately. Mirror in `el.json` + `en.json`.
- `case_studies.cta.{title,subtitle,contact,services}`

Keep the **`assetMap`** in the page (image + SoundCloud URL + link per item, ordered Beach House, Pelicanos, Yam, Levantis). **Recolor each SoundCloud `scUrl`** from `color=%23ff5500` → `color=%23f0bd95` and set `hide_related=true&show_comments=false&show_teaser=false` to match the design's cleaner embed.

**Amendments** — `<em>` italic-gold emphasis:

| Key                          | Emphasis word          |
|------------------------------|------------------------|
| `case_studies.hero.title`    | **«χτίζει» / builds**  |
| `case_studies.intro.title`   | **πέρα / beyond**      |
| `case_studies.cta.title`     | **ξεκινά εδώ / starts here** |

**New keys**:

```json
"case_studies": {
  "hero": {
    "side_label": "CASE STUDIES — SOUND IN PLACE",
    "kicker": "ΙΣΤΟΡΙΕΣ ΧΩΡΩΝ",
    "primary_cta": "Δείτε τις ιστορίες",
    "secondary_cta": "Κλείστε ραντεβού",
    "image_kicker": "FROM VISION TO SOUND",
    "image_caption": "Real spaces, scored."
  },
  "intro": { "kicker": "ΑΠΟ ΤΟ ΟΡΑΜΑ ΣΤΟΝ ΗΧΟ" },
  "cases": {
    "kicker": "ΕΡΓΑ",
    "title": "Τέσσερις χώροι, τέσσερις διαφορετικές <em>διαδρομές</em>",
    "subtitle": "Κάθε ένας με τον δικό του χαρακτήρα, τις ανάγκες και τη μουσική του λύση.",
    "listen_prefix": "Ακούστε την ατμόσφαιρα του"
  }
}
```

---

## Section detail

### 1. Hero — `components/case-studies-v3/Hero.tsx`
Standard dark hero. `min-h-[92vh]`, drift orbs, side rail (`hero.side_label`), kicker → H1 (`hero.title`, italic on "«χτίζει»") → subtitle (`/72`) → MorphCTA "Δείτε τις ιστορίες" → `#cases` + text link `#cta`. Right: `aspect-[1/1]` image `/images/case-studies/case-studies-hero.jpg`, FROM VISION TO SOUND / "Real spaces, scored." overlay, spinning badge.

### 2. Statement — inline in `page.tsx`
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, drift orb. Centered `max-w-[1080px]`: kicker (`intro.kicker`) → H2 (`intro.title`, italic on "πέρα") → `intro.p1` (large white) + `intro.p2` (`/58`).

### 3. Cases — `CaseRow` ×4
`<section id="cases" className="py-[130px] pb-[110px] bg-[#0b0a0a] relative">`, drift orb. Centered header: kicker (`cases.kicker`) → H2 (`cases.title`, italic on "διαδρομές") → sub.

Map `items[]` → `<CaseRow>`, `grid-cols-2 gap-16 items-center mb-[110px]` (last none), `imageSide = index % 2 === 0 ? 'left' : 'right'`:
- Image col: `assetMap[i].img`, `aspect-[3/4]` rounded-8 + bottom overlay. `ScrollReveal` from side.
- Text col: H3 `item.title` (venue) → Didot-italic gold `item.location` → `item.desc1` (`/66`) → `item.desc2` (`/55`) → **SoundCloud iframe** (`assetMap[i].scUrl`, recolored gold, `height=166`, wrapped in `rounded-[12px] border border-[#faf6f1]/10 overflow-hidden max-w-[520px]`) → "listen" link (`cases.listen_prefix` + venue + " →", to `assetMap[i].scLink`, `target=_blank`, underlined). `ScrollReveal` ladder.

### 4. Contact CTA
Reuse home-v3 ContactCTA. Full-bleed `/images/case-studies/case-studies-hero.jpg` + dark overlay. Copy from `case_studies.cta`: kicker "ΑΣ ΣΥΝΕΡΓΑΣΤΟΥΜΕ", H2 `cta.title` (italic on "ξεκινά εδώ"), lede `cta.subtitle`. Primary `<MorphCTA>` `cta.contact` → `mailto:`/`localizedPath('/contact')`; ghost `cta.services` → `localizedPath('/services')`. Phone/location line.

---

## Image inventory (`/public/images/case-studies/`)

| Spot          | File                              |
|---------------|-----------------------------------|
| Hero + CTA bg | `case-studies-hero.jpg`           |
| Beach House   | `case-study-beach-house.webp`     |
| Pelicanos     | `case-study-pelicanos.webp`       |
| Yam           | `case-study-yam.jpg`              |
| Levantis      | `case-study-levantis.webp`        |

No new assets.

---

## Notes

- **SoundCloud embeds are the one functional element** — keep the existing `assetMap` URLs and `scLink`s exactly; only change the `color=` param to gold and tighten the display flags. Test each player loads.
- `<FinalCTA>` stays shared; swap to dark ContactCTA on this page only.
- Mobile: rows stack (image above text); SoundCloud player goes full-width.
