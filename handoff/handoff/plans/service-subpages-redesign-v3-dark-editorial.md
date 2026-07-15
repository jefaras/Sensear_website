# SensEar Service Sub-Page Template Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This **one spec covers all four service sub-pages** — they share an identical layout, differing only in dictionary namespace and image folder.

## Summary

Rebuild the four service detail pages into the dark editorial treatment. They are structurally identical (hero → statement → feature list → "for whom" → licensed/extra → CTA), each reading its own `dict.<service>` namespace. Build **one shared template component** and instantiate it four times — don't write four bespoke pages.

The four pages + their dict namespaces + image folders:

| Route                              | Dict namespace        | Image folder                              | Design reference                          |
|------------------------------------|-----------------------|-------------------------------------------|-------------------------------------------|
| `services/signature-playlists`     | `signature_playlists` | `/images/services/signature-playlists/`   | [`SensEar Signature Playlists.dc.html`](../SensEar%20Signature%20Playlists.dc.html) |
| `services/event-soundtracks`       | `event_soundtracks`   | `/images/services/event-soundtracks/`     | [`SensEar Event Soundtracks.dc.html`](../SensEar%20Event%20Soundtracks.dc.html) |
| `services/sonic-identity`          | `sonic_identity`      | `/images/services/sonic-identity/` (or sonic-strategy) | [`SensEar Sonic Identity.dc.html`](../SensEar%20Sonic%20Identity.dc.html) |
| `services/audio-upgrades`          | `audio_upgrades`      | `/images/services/audio-upgrades/`        | [`SensEar Audio Upgrades.dc.html`](../SensEar%20Audio%20Upgrades.dc.html) |

Demo routes: `/services-v3/<slug>` (+ `/en/...`), branch `redesign/home-v3-dark`.

---

## Section structure (current → v3)

The current pages already share this shape (verified against `signature-playlists/page.tsx`):

| # | Current section                          | v3 equivalent          | Background  | Source keys                          |
|---|------------------------------------------|------------------------|-------------|--------------------------------------|
| 1 | Hero (warm; title + italic subtitle + desc + square img) | Hero | `#0b0a0a` | `<svc>.hero.{title,subtitle,description}` |
| 2 | Intro (black band, p1/p2)                | Statement              | `#0e0d0c`   | `<svc>.intro.{title,p1,p2}`          |
| 3 | what_we_do (image + heading list)        | Feature list           | `#0b0a0a`   | `<svc>.what_we_do.{title,items[]}`   |
| 4 | perfect_for (linked rows + image)        | For whom / Industries  | `#0e0d0c`   | `<svc>.perfect_for.{title,items[]}`  |
| 5 | licensed (image + heading list)          | Licensed / extra       | `#0b0a0a`   | `<svc>.licensed.{title,items[]}`     |
| 6 | `<FinalCTA>`                             | Contact CTA            | image+overlay | `<svc>.cta.{description,button}`   |

The design's hero adds a Didot-italic **subtitle tagline** (already `hero.subtitle` in the dict) and a breadcrumb kicker "ΥΠΗΡΕΣΙΕΣ — <SERVICE>". The v3 "Feature list" and "Licensed" sections use **gold-dot bullet rows**; "For whom" uses **Didot-italic linked rows** to `/industries`.

---

## Files

```
app/[lang]/services-v3/signature-playlists/page.tsx   NEW — thin: loads dict.signature_playlists, renders <ServiceDetail>
app/[lang]/services-v3/event-soundtracks/page.tsx     NEW — dict.event_soundtracks
app/[lang]/services-v3/sonic-identity/page.tsx        NEW — dict.sonic_identity
app/[lang]/services-v3/audio-upgrades/page.tsx        NEW — dict.audio_upgrades
components/service-detail-v3/
  ServiceDetail.tsx               client — the whole shared template; props: { content, images, lang }
  (sub-pieces inline: Hero, Statement, FeatureList, ForWhom, Licensed)
ContactCTA                        reuse components/home-v3/ContactCTA.tsx
```

`<ServiceDetail>` takes `content` (the `dict.<svc>` object), an `images` map (hero/curation/room/vinyl per the folder), and `lang`. Each route file is ~15 lines: fetch dict, pass the namespace + image paths.

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Each `dict.<svc>` already has `meta`, `hero.{title,subtitle,description}`, `intro.{title,p1,p2}`, `what_we_do.{title,items[]}` (`items` = `{title,description}`), `perfect_for.{title,items[]}` (`items` = `{title,description,link}`), `licensed.{title,items[]}`, `cta.{description,button}`. Verify all four namespaces have these keys (signature_playlists confirmed; check the other three and backfill any missing `intro`/`licensed` from their design files).

**Amendments** — `<em>` italic-gold emphasis on each section heading's key word, and **note the hero subtitle** is already the Didot tagline (no `<em>` needed there — render the whole `hero.subtitle` in Didot italic gold). Per-page emphasis words (from the designs):

| Page                | Statement heading word | Feature heading word | For-whom heading word | Licensed heading word |
|---------------------|------------------------|----------------------|-----------------------|-----------------------|
| signature_playlists | **ατμόσφαιρα**         | **curation**         | **premium**           | **επαγγελματική**     |
| event_soundtracks   | (per design)           | (per design)         | (per design)          | (per design)          |
| sonic_identity      | (per design)           | (per design)         | (per design)          | (per design)          |
| audio_upgrades      | (per design)           | (per design)         | (per design)          | (per design)          |

(Open each design `.dc.html` to read the exact heading and which word is italicized; the structure is identical.)

**New keys** per namespace:

```json
"<svc>": {
  "hero": {
    "side_label": "SERVICES — <SERVICE NAME>",
    "kicker": "<SERVICE NAME>",        // breadcrumb second token; first token "ΥΠΗΡΕΣΙΕΣ" links to /services
    "image_kicker": "<e.g. DAILY SOUNDTRACK>",
    "image_caption": "<e.g. Curated, never generic.>"
  },
  "intro":       { "kicker": "ΓΙΑΤΙ ΕΧΕΙ ΣΗΜΑΣΙΑ" },
  "what_we_do":  { "kicker": "<e.g. B2B CURATION>" },
  "perfect_for": { "kicker": "ΓΙΑ ΠΟΙΟΥΣ" },
  "licensed":    { "kicker": "<e.g. ΝΟΜΙΚΗ ΗΡΕΜΙΑ>" }
}
```

The `image_kicker`/`image_caption` and section kickers are taken verbatim from each design file.

---

## Section detail (shared template)

### 1. Hero
Standard dark hero. `min-h-[92vh]`, drift orbs, side rail (`hero.side_label`), breadcrumb kicker (`ΥΠΗΡΕΣΙΕΣ` link to `localizedPath('/services')` + hairline + gold `hero.kicker`), H1 `hero.title`, **Didot-italic gold `hero.subtitle`** (the tagline), description (`/72`), MorphCTA → `localizedPath('/contact')` + text link "Δείτε όλες τις υπηρεσίες" → `localizedPath('/services')`. Right: `aspect-[1/1]` hero image + `image_kicker`/`image_caption` overlay + spinning badge.

### 2. Statement
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, drift orb. Centered `max-w-[1080px]`: kicker (`intro.kicker`) → H2 (`intro.title`, italic span) → `intro.p1` (large white, `dangerouslySetInnerHTML`) + `intro.p2` (`/58`).

### 3. Feature list (`what_we_do`)
`<section className="py-[130px] pb-[110px] bg-[#0b0a0a] relative">`, drift orb. Grid `grid-cols-[.95fr_1.05fr] gap-16 items-center`:
- **Left**: image (curation image from folder), `aspect-[4/4.4]` rounded-8 + overlay. `ScrollReveal direction="left"`.
- **Right**: kicker (`what_we_do.kicker`) → H2 (`what_we_do.title`, italic span) → bordered rows from `what_we_do.items[]`. Each row: `flex gap-5 py-6 border-t border-[#faf6f1]/12` (last `border-b`), a 7px gold dot (`bg`=`--gold`, `margin-top:9px`), then `item.title` (`font-bold text-[1.28rem]`) + `item.description` (`/58`). `StaggerChildren`.

### 4. For whom (`perfect_for`)
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, drift orb. Grid `grid-cols-[1.05fr_.95fr] gap-16 items-center`:
- **Left**: kicker (`perfect_for.kicker`) → H2 (`perfect_for.title`, italic span) → linked rows from `perfect_for.items[]`. Each row = `<Link>` to `localizedPath('/' + item.link)`, `block py-6 border-t border-[#faf6f1]/12` (last `border-b`): Didot-italic title (`item.title`, `text-[1.55rem]`, hover → gold) + `item.description` (`/58`). `StaggerChildren`.
- **Right**: image (room/premium image from folder), `aspect-[4/4.6]` rounded-8 + overlay. `ScrollReveal`.

### 5. Licensed / extra (`licensed`)
`<section className="py-[130px] bg-[#0b0a0a] relative">`. Grid `grid-cols-2 gap-16 items-center`, **image left**:
- **Left**: image (vinyl/extra image), `aspect-[4/3]` rounded-8 + overlay.
- **Right**: kicker (`licensed.kicker`) → H2 (`licensed.title`, italic span). The design shows this section two ways across the four pages: either a Didot tagline + paragraph, OR a `licensed.items[]` heading list (like signature_playlists' `licensed.items`). Render `licensed.items[]` as gold-dot rows if present; else render the Didot tagline + paragraph variant. Handle both (the template should check `Array.isArray(content.licensed.items)`).

### 6. Contact CTA
Reuse home-v3 ContactCTA. Full-bleed hero image of the service + dark overlay. Copy from `<svc>.cta`: kicker "ΑΣ ΣΥΝΕΡΓΑΣΤΟΥΜΕ", H2 (the design's CTA title, italic span — e.g. "ατμόσφαιρα"; the current page hardcodes this Greek/English string, move it to `cta.title` for cleanliness), lede `cta.description`, primary `<MorphCTA>` `cta.button` → `localizedPath('/contact')`, ghost "Δείτε τις υπηρεσίες μας" → `localizedPath('/services')`.

---

## Images (per folder)

Each design references 4 images in its service folder: a hero (`*-hero.jpg`), a curation/process image, a room/context image, and a vinyl/extra image. Use the existing files in each `/images/services/<slug>/` folder (verified for signature-playlists: `signature-playlists-hero.jpg`, `-curation.jpg`, `-hotel-room.jpg`, `-vinyl-collection.jpg`). For the other three slugs, read the design file's `<img src>`s and pass the matching paths into `<ServiceDetail images={...}>`. **No new assets** — every image already exists.

---

## Notes

- **One template, four thin pages.** This is the highest-leverage spec in the set: build `<ServiceDetail>` once, validate on `signature-playlists`, then the other three are config.
- Confirm the four dict namespaces all expose `intro` and `licensed` (some may differ slightly — e.g. `audio_upgrades` may frame section 5 differently). The template's `Array.isArray` check on `licensed.items` handles the two variants.
- Each `perfect_for.items[].link` already points at an industry sub-page — keep those `localizedPath` targets.
- `<FinalCTA>` stays shared; swap to dark ContactCTA on these pages only.
- Mobile: all 2-col sections stack (image above text), feature/licensed lists single-column.
