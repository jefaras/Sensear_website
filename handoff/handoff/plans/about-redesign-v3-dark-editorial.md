# SensEar About Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** This spec inherits its entire design system — color tokens, GFS Didot setup, `<Kicker>`, the italic-emphasis span, `<MorphCTA>`, the underline-grow nav link, `ScrollReveal`/`StaggerChildren` usage, drift orbs, and the dark footer. This document only describes what is **specific to the About page**. Where it says "standard kicker / italic span / MorphCTA", use the primitives defined in the home spec.

## Summary

Rebuild `app/[lang]/about/page.tsx` from the current **warm-light** treatment (warm-silver texture hero, black vision band, animated-gradient philosophy, white journey, rounded team cards) into the **dark editorial** treatment: `#0b0a0a` base, alternating `#0e0d0c` bands, gold-text gradient accents, GFS Didot italic emphasis, drift orbs, and slow scroll-reveals.

Design reference: [`SensEar About.dc.html`](../SensEar%20About.dc.html) — open in a browser for the exact look and motion.

Build as a **demo route** first: `/about-v3` (el) and `/en/about-v3` (en), on the same branch as the home redesign (`redesign/home-v3-dark`). Don't touch the live `about` route until sign-off.

---

## Section structure (current → v3)

| # | Current section (`about/page.tsx`)        | v3 equivalent                          | Background  | Layout change                                              |
|---|-------------------------------------------|----------------------------------------|-------------|------------------------------------------------------------|
| 1 | Hero (warm-silver texture, H1 + square img) | Hero with side-rotated label + badge   | `#0b0a0a`   | Add side rail label, kicker, italic span, MorphCTA, EST·ATH badge; image gets caption overlay |
| 2 | Vision (black band, centered)             | Vision                                 | `#0e0d0c`   | Keep centered; reskin dark; one italic span                |
| 3 | Philosophy (animated gradient)            | Philosophy                             | `#0b0a0a`   | **Drop the animated gradient**; centered statement on dark, gold-text spans |
| 4 | Journey (white, year circles + timeline)  | Journey                                | `#0e0d0c`   | **Redesign**: 2-col, left = bordered year rows (Didot year), right = sticky image |
| 5 | Team (warm texture, 3 rounded cards)      | Team                                   | `#0b0a0a`   | **Redesign**: 3 alternating image/text rows, no card chrome; Didot role line |
| 6 | Differentiators (warm, 4 icon rows)       | Differentiators                        | `#0e0d0c`   | 2-col image + 4 bordered icon rows; circular gold-outline icons |
| 7 | `<FinalCTA>` (animated gradient card)     | Contact CTA                            | image+overlay | Full-bleed image, dark overlay, MorphCTA + ghost button — same as home's ContactCTA |

Section order is unchanged; only the visual treatment and the Journey/Team internal layouts change.

---

## Files

```
app/[lang]/about-v3/page.tsx        NEW — demo, server component (mirrors current about/page.tsx data flow)
components/about-v3/                NEW directory
  Hero.tsx
  Journey.tsx                       client (sticky image + ScrollReveal)
  TeamMember.tsx                    client — one alternating row, props: name, role, paragraphs[], image, imageSide
  Differentiators.tsx              client
  (Vision + Philosophy are simple enough to inline in page.tsx with ScrollReveal wrappers)
components/about-v3/ContactCTA.tsx  OR reuse components/home-v3/ContactCTA.tsx with different copy props
```

Reuse the shared `ScrollReveal`, `StaggerChildren`, `<MorphCTA>`, `<Kicker>` from the home-v3 work. The page-scoped Nav/Footer decision is the same as the home spec (option A for the demo: render with the existing global chrome).

---

## Dictionary

The `about_page` key already exists and is consumed by the current page. **Reuse it.** Verify these subkeys are present in both `el.json` and `en.json` and amend with `<em>` markers where the design wants an italic-gold emphasis:

| Content                | Existing key                                  | Amendment for v3                                            |
|------------------------|-----------------------------------------------|-------------------------------------------------------------|
| Meta                   | `about_page.meta.{title,description}`         | unchanged                                                   |
| Hero H1                | `about_page.hero.title`                       | wrap **soundtrack** / **soundtrack** in `<em>` (italic span)|
| Hero subtitle          | `about_page.hero.subtitle`                    | unchanged                                                   |
| Hero image alt         | `about_page.hero.image_alt`                   | unchanged                                                   |
| Vision heading + text  | `about_page.vision.{heading,text}`            | wrap **brands & εκδηλώσεις** in `<em>`                       |
| Philosophy             | `about_page.philosophy.{heading,text}`        | `text` already uses `**bold**`; add `<em>` on the closing phrase |
| Journey heading/sub    | `about_page.journey.{heading,subtitle}`       | wrap **στρατηγικό / strategic** in `<em>`                    |
| Journey timeline       | `about_page.journey.timeline[]` (`{year,text}`)| unchanged — already `**bold**` in `text`                    |
| Journey image          | `about_page.journey.image`                    | unchanged                                                   |
| Final CTA              | `about_page.final_cta.{heading,text,buttons}` | wrap **ήχου / sound** in `<em>`                              |

**New keys** to add under `about_page` (Greek shown — mirror in English):

```json
"about_page": {
  "hero": {
    "side_label": "ABOUT — THE PEOPLE & THE PHILOSOPHY",
    "kicker": "Η ΟΜΑΔΑ ΤΗΣ SENSEAR",
    "primary_cta": "Γνωρίστε την ομάδα",
    "secondary_cta": "Επικοινωνήστε μαζί μας",
    "image_kicker": "EST · ATHENS",
    "image_caption": "Soundtracking unique experiences."
  },
  "vision":     { "kicker": "ΤΟ ΟΡΑΜΑ ΜΑΣ" },
  "philosophy": { "kicker": "Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ" },
  "journey":    { "kicker": "Η ΔΙΑΔΡΟΜΗ ΜΑΣ" },
  "team": {
    "kicker": "Η ΟΜΑΔΑ",
    "title": "Γνωρίστε την <em>ομάδα</em>",
    "subtitle": "Παθιασμένοι με τη μουσική, προσανατολισμένοι στη φιλοξενία.",
    "closing": "Μαζί, αποτελούμε τη <em>SensEar</em>. Μια ομάδα αφοσιωμένη στο να αναβαθμίζει χώρους μέσα από ουσιαστική, αξέχαστη μουσική."
  },
  "differentiators": {
    "kicker": "ΤΙ ΜΑΣ ΞΕΧΩΡΙΖΕΙ",
    "title": "Τέσσερις <em>αρχές</em> που μας καθοδηγούν",
    "subtitle": "Ό,τι κάνουμε πηγάζει από τον τρόπο που σκεφτόμαστε τον ήχο."
  }
}
```

The existing team-member copy is currently **hard-coded in JSX** (both languages) inside `about/page.tsx`. For v3, move it into the dictionary so the new `TeamMember` component reads it cleanly. Add:

```json
"about_page": {
  "team_members": [
    {
      "name": "George Fameliaris",
      "role": "Συνιδρυτής, Επικεφαλής μουσικής επιμέλειας & AV expert",
      "image": "/images/about/team-george-fameliaris.jpg",
      "paragraphs": [
        "Το πάθος του Γιώργου ... Κινηματογράφο.",
        "Καθιερώθηκε ως τακτικός guest DJ ... <strong>Gerd Janson</strong>.",
        "Στη SensEar, διαμορφώνει ... χαρακτηριστικό ήχο του κάθε brand."
      ]
    },
    { "name": "John E. Farazoumis", "role": "Συνιδρυτής, Στρατηγική & Επικοινωνία", "image": "/images/about/team-john-farazoumis.png", "paragraphs": ["…","…","…"] },
    { "name": "Katerina Karali", "role": "Συνεργάτιδα, DJ, Μουσική Επιμελήτρια & Music Supervisor", "image": "/images/about/team-katerina-karali.jpg", "paragraphs": ["…","…","…"] }
  ]
}
```

Copy the exact paragraph text (with the existing `<strong>` markers) from the current `about/page.tsx` JSX — both `el.json` and `en.json`. This is a pure data migration, not a rewrite.

---

## Section detail

### 1. Hero — `components/about-v3/Hero.tsx`

- `<section className="relative min-h-[92vh] flex items-center pt-[150px] pb-[80px] overflow-hidden bg-[#0b0a0a]">`, two drift orbs.
- Left edge: vertical side-rail label `about_page.hero.side_label` (rotated, `text-[11px] tracking-[0.42em] text-[#faf6f1]/40`).
- Grid `grid-cols-[1.05fr_.95fr] gap-[60px]`, asymmetric left padding to clear the rail.
- **Left**: standard kicker (`about_page.hero.kicker`) → H1 (`about_page.hero.title`, with italic span on "soundtrack") → subtitle paragraph (`/72`) → CTA row: `<MorphCTA>` "Γνωρίστε την ομάδα" anchoring to `#team`, plus a text link to `localizedPath('/contact')`.
- **Right**: `aspect-[1/1]` image `/images/about/about-hero.jpg`, rounded-8, shadow; bottom overlay = `EST · ATHENS` kicker + Didot-italic caption; top-right spinning `EST · ATH` badge.
- Motion: `ScrollReveal` per element with the same delay ladder as home hero.

### 2. Vision — inline in `page.tsx`

- `<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, one drift orb.
- Centered `max-w-[1080px]`: standard kicker (`about_page.vision.kicker`) + H2 (`about_page.vision.heading` content — `text-[clamp(1.7rem,3.4vw,2.9rem)] font-extrabold leading-[1.18]`) with italic span on "brands & εκδηλώσεις".

### 3. Philosophy — inline in `page.tsx`

- `<section className="py-[130px] bg-[#0b0a0a] relative overflow-hidden">`, one drift orb.
- Centered `max-w-[1000px]`: standard kicker + a single large statement paragraph (`text-[clamp(1.4rem,2.6vw,2.1rem)] leading-[1.42]`). Render `about_page.philosophy.text` via `dangerouslySetInnerHTML`; style the `<strong>` runs with the gold-text gradient (`background-clip:text`) and the `<em>` run with Didot italic. **Remove** the `animated-gradient` background entirely.

### 4. Journey — `components/about-v3/Journey.tsx`

- `<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, one drift orb.
- Grid `grid-cols-[1.1fr_.9fr] gap-[72px] items-start`.
- **Left**: kicker (`about_page.journey.kicker`) + H2 (`about_page.journey.heading`, italic on "στρατηγικό") + sub (`about_page.journey.subtitle`), then the timeline as bordered rows — one per `about_page.journey.timeline[]`:
  - `flex gap-[26px] py-6 border-t border-[#faf6f1]/12` (last row `border-b`).
  - Year in **Didot italic**, gold-text gradient, `text-[1.5rem] w-[72px] flex-none`.
  - Text paragraph (`text-[1.05rem] text-[#faf6f1]/72`), `<strong>` runs go solid `#faf6f1`.
  - Wrap rows in `StaggerChildren`.
- **Right**: `sticky top-[120px]` image `about_page.journey.image` (`aspect-[4/4.6]`, rounded-8, bottom gradient overlay). `ScrollReveal`.
- **Remove** the current white-circle markers + vertical connector line.

### 5. Team — `components/about-v3/TeamMember.tsx` (×3) + header/closing inline

- `<section id="team" className="py-[130px] pb-[110px] bg-[#0b0a0a] relative overflow-hidden">`, one drift orb.
- Centered header: kicker (`about_page.team.kicker`) + H2 (`about_page.team.title`, italic on "ομάδα") + sub.
- Three `<TeamMember>` rows from `about_page.team_members[]`. Props: `{ name, role, paragraphs, image, imageSide: 'right' | 'left' | 'right' }` (George right, John left, Katerina right).
  - Grid `grid-cols-2 gap-16 items-center`, `mb-[120px]` between rows (last has none).
  - Text col: H3 name (`font-extrabold text-[clamp(1.9rem,3.4vw,3rem)]`), Didot-italic role line in gold-text, then paragraphs (`text-[1.06rem] text-[#faf6f1]/66 leading-[1.65]`, `<strong>` solid). Use `order` to flip image side.
  - Image col: `aspect-[1/1]` rounded-8 with subtle bottom gradient overlay.
  - `ScrollReveal` on text bits (delay ladder); image `ScrollReveal` from the side it's on.
- Closing statement paragraph (`about_page.team.closing`, italic/gold on "SensEar"), centered, `max-w-[880px] mt-24`.
- **Remove** the `rounded-[3rem]` warm-texture card wrapper and the two `<AnimatedButton>`s (the page-level Contact CTA section covers that conversion).

### 6. Differentiators — `components/about-v3/Differentiators.tsx`

- `<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, one drift orb.
- Grid `grid-cols-[.92fr_1.08fr] gap-16 items-center`.
- **Left**: image `/images/about/about-unique-approach.jpg` (`aspect-[4/4.4]`, rounded-8, bottom overlay). `ScrollReveal direction="left"`.
- **Right**: kicker + H2 (`about_page.differentiators.title`, italic on "αρχές") + sub, then 4 bordered rows. Each row:
  - `flex gap-[22px] py-6 border-t border-[#faf6f1]/12` (last `border-b`).
  - 46px circular icon chip: `border border-[rgba(240,189,149,0.4)] text-[#f0bd95]`, holding the matching **lucide** icon (keep the current mapping: `Lightbulb`, `Building2`, `SlidersHorizontal`, `Heart` — the design's inline SVGs are these same four). Set `strokeWidth={1.7}`.
  - Title (`font-bold text-[1.25rem]`) + desc (`text-[#faf6f1]/60`).
  - Wrap in `StaggerChildren`.

### 7. Contact CTA

Reuse the home-v3 `ContactCTA` pattern (full-bleed `/images/about/about-hero.jpg`, dark overlay `linear-gradient(180deg,rgba(11,10,10,.82),rgba(11,10,10,.93))`, centered kicker + H2 + lede + buttons). Copy from `about_page.final_cta` (heading italic on "ήχου"). Buttons: primary `<MorphCTA>` "Διαβάστε παραδείγματα" → `localizedPath('/case-studies')`; secondary **ghost** button → `mailto:hello@sensear.music` (ghost = `border border-[#faf6f1]/35 rounded-full`, hover fills gold). Phone/location line below.

---

## Image inventory (all already in `/public/images/about/`)

| Spot                | File                                            |
|---------------------|-------------------------------------------------|
| Hero + CTA bg       | `/images/about/about-hero.jpg`                  |
| Journey             | `about_page.journey.image` (existing value)     |
| Team — George       | `/images/about/team-george-fameliaris.jpg`      |
| Team — John         | `/images/about/team-john-farazoumis.png`        |
| Team — Katerina     | `/images/about/team-katerina-karali.jpg`        |
| Differentiators     | `/images/about/about-unique-approach.jpg`       |

No new assets. The current page uses these exact files.

---

## Notes / decisions

- **`<FinalCTA>` component**: the current About uses the shared `components/sections/FinalCTA.tsx` (animated gradient). v3 replaces it on this page with the dark ContactCTA. Don't edit `FinalCTA.tsx` itself yet — other pages still use it. Decide at site-wide cutover whether `FinalCTA` gets a dark variant.
- **Team copy migration is the one substantive data task** — everything else is layout/skin. Do it carefully: the paragraphs contain `<strong>` and curly quotes; copy verbatim from the current JSX into the dictionary for both languages.
- Mobile: team rows stack (image above text); journey collapses to single column with the image moving below the timeline; differentiators stack image above rows.
