# SensEar Services Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system (tokens, GFS Didot, `<Kicker>`, italic-emphasis span, `<MorphCTA>`, ghost button, `ScrollReveal`/`StaggerChildren`, drift orbs, dark footer). This spec covers only what's specific to the Services index page.

## Summary

Rebuild `app/[lang]/services/page.tsx` into the dark editorial treatment. The current page already uses `ScrollReveal`/`StaggerChildren` and reads a rich `services_page` dictionary — so this is **mostly a reskin + two layout tweaks**, with no dictionary restructuring.

Design reference: [`SensEar Services.dc.html`](../SensEar%20Services.dc.html).

Demo route: `/services-v3` (el) + `/en/services-v3` (en), branch `redesign/home-v3-dark`.

---

## Section structure (current → v3)

| # | Current section                                  | v3 equivalent          | Background  | Change                                                       |
|---|--------------------------------------------------|------------------------|-------------|--------------------------------------------------------------|
| 1 | Hero (warm texture, H1 + square img)             | Hero                   | `#0b0a0a`   | Side rail, kicker, italic span, MorphCTA, FOUR APPROACHES badge |
| 2 | Intro (black band, centered)                     | Statement              | `#0e0d0c`   | Reskin dark; kicker "ΓΙΑΤΙ ΕΧΕΙ ΣΗΜΑΣΙΑ"; italic span         |
| 3 | starting_point + services (2 rows + 2 white cards) | Services             | `#0b0a0a`   | Same structure: 2 big alternating rows + 2 dark cards         |
| 4 | delivery (numbered 01–04 list)                   | How it works           | `#0e0d0c`   | 2-col image + numbered bordered rows                          |
| 5 | `<FinalCTA>` (animated gradient card)            | Contact CTA            | image+overlay | Replace with dark full-bleed ContactCTA                     |

Order unchanged.

---

## Files

```
app/[lang]/services-v3/page.tsx     NEW — demo (server component, mirrors current data flow)
components/services-v3/
  Hero.tsx
  ServiceRow.tsx                    client — big alternating row (image + title + Didot subtitle + desc + ideal_for + MorphCTA), prop imageSide
  ServiceCard.tsx                   client — dark card (image top, content, image-zoom on hover), for strategy + upgrades
  HowItWorks.tsx                    client — image + numbered rows
ContactCTA                          reuse components/home-v3/ContactCTA.tsx with services copy
```

Reuse shared primitives. Nav/Footer: option A (existing global chrome) for the demo.

---

## Dictionary

**No restructuring.** Keep using the existing `services_page` keys exactly as the current page does:

- `services_page.meta.{title,description}`
- `services_page.hero.{title,subtitle}` — `title` already contains `<br />`
- `services_page.intro.{title,p1,p2}` — `p1`/`p2` already carry `<strong>`/markup, rendered via `dangerouslySetInnerHTML`
- `services_page.starting_point.{title,subtitle}`
- `services_page.services.{playlists,events,strategy,upgrades}.{title,subtitle,desc,ideal_for,cta}` — `subtitle` is the Didot-italic tagline; `ideal_for` already wraps "Ιδανικό για:" markup
- `services_page.delivery.{title,subtitle,points[]}` — `points[]` = `{link, link_text, text}`
- `services_page.cta.{title,subtitle,contact_btn,industries_btn}`

**Amendments only** — add `<em>` markers for italic-gold emphasis (mirror in `el.json` + `en.json`):

| Key                              | Emphasis word (wrap in `<em>`)        |
|----------------------------------|---------------------------------------|
| `services_page.hero.title`       | **τέσσερις** / **four**               |
| `services_page.intro.title`      | **επιχείρησή / business**             |
| `services_page.starting_point.title` | **εκκίνησής / starting**          |
| `services_page.delivery.title`   | **λειτουργούν / work**                |
| `services_page.cta.title`        | **αφετηρία / starting point**         |

**New keys** (kickers + hero extras):

```json
"services_page": {
  "hero": {
    "side_label": "SERVICES — SONIC STRATEGY",
    "kicker": "ΟΙ ΥΠΗΡΕΣΙΕΣ ΜΑΣ",
    "primary_cta": "Εξερευνήστε τις υπηρεσίες",
    "secondary_cta": "Κλείστε ραντεβού",
    "image_kicker": "FOUR APPROACHES",
    "image_caption": "Sound, by design."
  },
  "intro":          { "kicker": "ΓΙΑΤΙ ΕΧΕΙ ΣΗΜΑΣΙΑ" },
  "starting_point": { "kicker": "ΥΠΗΡΕΣΙΕΣ" },
  "delivery":       { "kicker": "Η ΣΥΝΕΡΓΑΣΙΑ" }
}
```

---

## Section detail

### 1. Hero — `components/services-v3/Hero.tsx`
Identical structure to the home/about hero. `min-h-[92vh]`, drift orbs, side rail (`services_page.hero.side_label`), kicker → H1 (`services_page.hero.title`, italic on "τέσσερις") → subtitle (`/72`) → MorphCTA "Εξερευνήστε τις υπηρεσίες" to `#services` + text link to `#cta`. Right: `aspect-[1/1]` image `/images/services/services-hero-strategic-music.jpg` with FOUR APPROACHES / "Sound, by design." overlay + spinning badge.

### 2. Statement — inline in `page.tsx`
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, one drift orb. Centered `max-w-[1080px]`: kicker (`services_page.intro.kicker`) → H2 (`services_page.intro.title`, italic on "επιχείρησή", `text-[clamp(1.9rem,4vw,3.2rem)]`) → two paragraphs (`intro.p1` large `text-[clamp(1.2rem,2vw,1.6rem)]` solid white, `intro.p2` `/58`), both via `dangerouslySetInnerHTML`, `<strong>` runs gold-text-clipped.

### 3. Services — `ServiceRow` ×2 + `ServiceCard` ×2
`<section id="services" className="py-[130px] pb-[110px] bg-[#0b0a0a] relative">`, one drift orb. Centered header: kicker (`starting_point.kicker`) → H2 (`starting_point.title`, italic on "εκκίνησής") → sub.

**Two big rows** (`<ServiceRow>`), `grid-cols-2 gap-16 items-center mb-[120px]`:
- Row 1 — `services.playlists`, **image left** (`/images/services/service-signature-playlists.jpg`, `aspect-[4/3]` rounded-8 + bottom overlay).
- Row 2 — `services.events`, **image right** (`/images/services/service-event-soundtracks.jpg`).
- Each text col: H3 `services.X.title` (`font-extrabold clamp(1.9rem,3.4vw,3rem)`) → Didot-italic gold subtitle `services.X.subtitle` → `desc` (`/66`) → `ideal_for` (`/55`, "Ιδανικό για:" run gold-clipped, via `dangerouslySetInnerHTML`) → `<MorphCTA>` `services.X.cta` to `localizedPath('/services/signature-playlists' | '/services/event-soundtracks')`.
- `ScrollReveal` ladder per element; image `ScrollReveal` from its side.

**Two dark cards** (`<ServiceCard>`), `grid-cols-2 gap-[30px]`:
- `services.strategy` (`/images/services/service-sonic-strategy.jpg`), `services.upgrades` (`/images/services/service-audio-upgrades.jpg`).
- Card: `bg-[#0e0d0c] border border-[#faf6f1]/10 rounded-[10px] overflow-hidden flex flex-col`. Image `aspect-[16/9]` with `group-hover:scale-[1.06]` zoom. Body `p-[34px]`: H3 (`text-[1.7rem] font-extrabold`) → Didot subtitle → `desc` (`/62`) → `ideal_for` (`/50`) → `<MorphCTA>` (small: `text-sm px-[26px] py-[13px]`) `margin-top:auto` to the matching `/services/...` path.
- `StaggerChildren` over the pair.

### 4. How it works — `components/services-v3/HowItWorks.tsx`
`<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative">`, one drift orb. Grid `grid-cols-[.9fr_1.1fr] gap-16 items-center`:
- **Left**: image `/images/services/services-delivery-process.jpg` (`aspect-[4/4.2]`, rounded-8, overlay), `ScrollReveal direction="left"`.
- **Right**: kicker (`delivery.kicker`) → H2 (`delivery.title`, italic on "λειτουργούν") → sub → numbered rows from `delivery.points[]`. Each row: `flex gap-[22px] py-[22px] border-t border-[#faf6f1]/12` (last `border-b`), number `01..04` (`text-sm font-bold text-[#faf6f1]/40 w-[34px]`), then `point.link_text` as title (`font-bold text-[1.25rem]`, link to `localizedPath('/' + point.link)`) + `point.text` (`/55`). `StaggerChildren`.

### 5. Contact CTA
Reuse home-v3 ContactCTA. Full-bleed `/images/services/services-hero-strategic-music.jpg` + dark overlay. Copy from `services_page.cta`: kicker "ΑΣ ΣΥΝΕΡΓΑΣΤΟΥΜΕ", H2 `cta.title` (italic on "αφετηρία"), lede `cta.subtitle`. Buttons: primary `<MorphCTA>` `cta.contact_btn` → `mailto:hello@sensear.music` (or `localizedPath('/contact')`); ghost `cta.industries_btn` → `localizedPath('/industries')`. Phone/location line.

---

## Image inventory (all in `/public/images/services/`)

| Spot              | File                                              |
|-------------------|---------------------------------------------------|
| Hero + CTA bg     | `services-hero-strategic-music.jpg`               |
| Row 1 (playlists) | `service-signature-playlists.jpg`                 |
| Row 2 (events)    | `service-event-soundtracks.jpg`                   |
| Card 1 (strategy) | `service-sonic-strategy.jpg`                      |
| Card 2 (upgrades) | `service-audio-upgrades.jpg`                      |
| How it works      | `services-delivery-process.jpg`                   |

No new assets.

---

## Notes

- The design links each service to its existing sub-page (`/services/signature-playlists`, `/services/event-soundtracks`, `/services/sonic-identity`, `/services/audio-upgrades`) — keep those `localizedPath` targets; they already exist.
- `<FinalCTA>` is shared — don't edit it; just swap to the dark ContactCTA on this page only (same decision as the About spec).
- Mobile: big rows stack (image above text), the 2 cards become single column, How-it-works image moves above the numbered list.
