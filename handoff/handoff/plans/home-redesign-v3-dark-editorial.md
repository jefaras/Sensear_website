# SensEar Home Page Redesign Specification v3 — Dark Editorial

## Summary

A directional redesign of the home page from the current **warm-light / hospitality-warm** treatment to a **dark editorial / sonic-luxury** treatment, anchored on a near-black background (`#0b0a0a`), a metallic gold-text gradient for accents, a serif-italic display face for emphasis (GFS Didot Italic), and a slower, more cinematic motion language (`cubic-bezier(.16, 1, .3, 1)`).

This redesign is **content-equivalent** to the current home page — the same sections appear in the same order, with the same intent — but rebuilt visually and structurally:

| Existing section / component       | New equivalent (in design)                | Treatment                                                   |
|------------------------------------|-------------------------------------------|-------------------------------------------------------------|
| Hero (in `app/[lang]/page.tsx`)    | Hero with side-rotated label + EQ widget  | Dark, asymmetric grid, single feature image (no carousel)   |
| —                                  | Marquee strip (new)                       | Continuous keyword ticker between hero and About            |
| `WhoWeAre.tsx`                     | About                                     | Heading + body + portrait image, **2-col**, dark            |
| `Services.tsx`                     | Services list + sticky preview            | Numbered list left, sticky hover-preview image right        |
| `Expertise.tsx`                    | Industries grid                           | **6-card 3×2 image grid** (was a list with image)           |
| `Enhance.tsx`                      | Approach                                  | Numbered 01/02/03 rows, image left, dark                    |
| `TrustedBy.tsx`                    | Venues                                    | Marquee of logo cards on flat dark, no gradient bg          |
| `BlogSection.tsx`                  | Journal                                   | 3 cards on dark, image + tag + title + body                 |
| (Footer's CTA only)                | Contact CTA section (new)                 | Full-bleed image with dark overlay, centered                |
| `Footer.tsx`                       | Footer                                    | 5-col on dark + large outlined SENSEAR wordmark             |
| `Navbar.tsx`                       | Navbar                                    | Dark, sliding-underline links, gold pill CTA                |

> Build this as a **standalone demo page first**, on a Git branch `redesign/home-v3-dark`, at `/home-v3` (el) and `/en/home-v3` (en). No existing files modified until the demo is approved. This is the same pattern used in `home-redesign-spec-v2.md`.

The full design reference lives in [`SensEar Homepage.dc.html`](../SensEar%20Homepage.dc.html) — open it in a browser to see the exact intended look and motion.

---

## Status of v2

This spec **supersedes** `home-redesign-spec-v2.md` for the home page. v2 kept the warm palette and added glass morphism on top; v3 takes the opposite direction — dark, editorial, with metallic gold-text gradient accents rather than frosted glass. Keep v2 around for reference; do not implement both.

---

## Design Principles

1. **Dark as the canvas** — `#0b0a0a` page base, with `#0e0d0c` for alternating section bands. No light-mode fallback on this page.
2. **Two-typeface rhythm** — Commissioner (existing) for everything structural; **GFS Didot Italic** sparingly, large, for one emphasized phrase per heading.
3. **Gold-text gradient as the accent system** — never a flat gold color; always the `--gold-text` linear gradient applied via `background-clip: text`. Used for: kickers (small-caps eyebrows), italic emphasis spans, CTA pill background, arrow glyphs, sparkles in marquee.
4. **Numbered structure** — services and approach lists carry `01 / 02 / 03 / 04` as visible content, in dimmed white, mono-feel via tabular-nums.
5. **One slow scroll-reveal** — every block fades + lifts 40px once on enter, ease `cubic-bezier(.16, 1, .3, 1)`, ~0.9s, single trigger. Reuse `ScrollReveal` / `StaggerChildren`.
6. **CTA = morph, not just hover** — primary CTA hover transforms gold→black-with-gold-outline; the leading logo icon collapses to width 0, and a trailing arrow expands in (see "Button system" below).
7. **Accent label rail** — vertically rotated "ATHENS · GR — SONIC BRANDING" label on the left edge of the hero.
8. **No carousel on hero** — the home hero shows **one** curated still + a circular "EST · ATH" badge. `HeroCarousel` is retired from the home page (kept in the repo for other uses).
9. **Greek copy is the default**; English mirrors structure.

---

## Color Palette

Add these to the demo page as **inline CSS variables** on the page wrapper (no Tailwind config changes — same pattern as v2). Variable names match the design reference for grep-ability.

| Token        | Value                                                                                                                                 | Usage                                |
|--------------|---------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `--ink`      | `#0b0a0a`                                                                                                                              | Page base                            |
| `--ink-2`    | `#0e0d0c`                                                                                                                              | Alternating section band             |
| `--paper`    | `#faf6f1`                                                                                                                              | Body text on dark                    |
| `--accent`   | `#f0bd95`                                                                                                                              | Selection, hover orb tint            |
| `--peach`    | `#faebe3`                                                                                                                              | Drift orbs                           |
| `--gold`     | `linear-gradient(100deg,#f0cdb8 0%,#f7ddd0 15%,#fcefe7 29%,#ffffff 44%,#efeeec 58%,#dad8d6 72%,#d2cec9 84%,#e4d9c4 100%)`               | CTA pill background                  |
| `--gold-text`| `linear-gradient(100deg,#edc4ac 0%,#f6dccd 19%,#fffaf6 42%,#eae8e4 60%,#d3cfc9 77%,#e2d6bf 100%)`                                       | Text-clip gradient (kickers, italic) |

> **Important**: This intentionally **breaks** the current `#faebe3` page base. Other pages (services, about, etc.) are unaffected — they retain the current warm theme. The home page becomes the brand's "showcase" page; the rest stays editorial-warm. Confirm this is intended before implementing on the live route.

Tailwind arbitrary values to use throughout: `bg-[#0b0a0a]`, `bg-[#0e0d0c]`, `text-[#faf6f1]`, `text-[#faf6f1]/60`, `border-[#faf6f1]/10`, etc.

---

## Typography

### Add: GFS Didot Italic (display accent only)

Edit `app/fonts.ts`:

```ts
import { GFS_Didot } from 'next/font/google';

export const gfsDidot = GFS_Didot({
  subsets: ['greek', 'latin'],
  weight: ['400'],
  style: ['italic'],
  variable: '--font-didot',
  display: 'swap',
  preload: false,
});

// Append to fontVariables
export const fontVariables = `${commissioner.variable} ${syne.variable} ${gfsDidot.variable}`;
```

Then add a `.font-didot` utility in `app/globals.css`:

```css
.font-didot {
  font-family: var(--font-didot), 'GFS Didot', serif;
  font-style: italic;
}
```

Usage in JSX: one italic phrase per heading, e.g. — wrapped in a `<span className="font-didot text-[1.12em] bg-clip-text text-transparent" style={{backgroundImage: 'var(--gold-text)'}}>...`. Keep the rest of the heading in Commissioner.

### Scale

| Element              | Class / size                                                                  | Notes                              |
|----------------------|-------------------------------------------------------------------------------|------------------------------------|
| Hero H1              | `text-[clamp(2.9rem,6vw,5.4rem)] font-extrabold leading-[0.98] tracking-tight` | Two-line break before italic word  |
| Section H2           | `text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.04] tracking-tight`   | One italic word per heading        |
| Kicker eyebrow       | `text-xs tracking-[0.34em] font-bold uppercase`                                | Gradient-clipped via `--gold-text` |
| Body lede            | `text-[clamp(1.05rem,1.5vw,1.32rem)] font-semibold leading-snug`               | First paragraph after H2/H1        |
| Body                 | `text-base md:text-lg leading-relaxed text-[#faf6f1]/60`                       | Sub-body                           |
| Service number       | `text-sm font-bold text-[#faf6f1]/40 tabular-nums w-[34px]`                    | `01..04`                           |
| Tag / "INSIGHTS"     | `text-[11px] tracking-[0.22em] font-bold`                                      | Gradient-clipped                   |

---

## Spacing

| Element                  | Value                  |
|--------------------------|------------------------|
| Section vertical padding | `py-[110px] md:py-[130px]` |
| Section horiz padding    | `px-6 md:px-8 lg:px-12` |
| Inner max width          | `max-w-[1380px]` (slightly wider than current `1440`-1 because grid is denser) |
| Grid gap (text/image)    | `gap-12 lg:gap-16`     |
| Industries grid          | `gap-5`                |
| Journal cards            | `gap-6 lg:gap-7`       |

---

## Motion

Reuse existing motion infrastructure — **do not introduce new libraries**:

- **`ScrollReveal`** (`components/motion/ScrollReveal.tsx`) for headings and bodies. Tune defaults for this page only by passing `delay` (e.g. `0.06`, `0.12`) to stagger sibling reveals.
- **`StaggerChildren`** for the services list, approach list, industries grid, journal cards.
- **CSS keyframes** (locally in this page) for: marquee scroll, EQ bars, circular badge spin, scroll cue, drift orbs.

Add these keyframes to `app/globals.css` (or a new `app/home-v3.css` imported only by the demo page):

```css
@keyframes se-eq { 0%,100% { transform: scaleY(.22); } 50% { transform: scaleY(1); } }
@keyframes se-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes se-spin { to { transform: rotate(360deg); } }
@keyframes se-drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(4%,-3%) scale(1.08); } }
@keyframes se-cue { 0% { transform: translateY(0); opacity:.9; } 50% { transform: translateY(9px); opacity:.25; } 100% { transform: translateY(0); opacity:.9; } }
```

`prefers-reduced-motion` is already respected globally — keep it.

---

## Routing & file plan

Create the demo first; do not touch the production home until approved.

```
app/
  home-v3/
    page.tsx                       NEW — Greek (default) demo, mirrors app/page.tsx shape
  [lang]/
    home-v3/
      page.tsx                     NEW — locale-aware demo, mirrors app/[lang]/page.tsx shape
components/
  home-v3/                         NEW directory; all components scoped here so the existing
                                   home is untouched
    Nav.tsx                        Page-scoped nav OR — preferred — extend Navbar.tsx with a
                                   `variant="dark-pill"` prop. See "Navbar" section below.
    Hero.tsx
    Marquee.tsx
    About.tsx
    Services.tsx                   List + sticky preview (NOT the existing Services.tsx)
    IndustriesGrid.tsx             6-card grid (NOT the existing Expertise.tsx)
    Approach.tsx                   01/02/03 list (NOT the existing Enhance.tsx)
    Venues.tsx                     Logo card marquee (NOT the existing TrustedBy.tsx)
    Journal.tsx                    3 cards (NOT the existing BlogSection.tsx)
    ContactCTA.tsx                 Full-bleed CTA section
    Footer.tsx                     Page-scoped footer OR extend Footer.tsx — see "Footer"
app/
  globals.css                      ADD: GFS Didot utility, keyframes (no other changes)
  fonts.ts                         ADD: gfsDidot import + variable
```

After approval, the live cutover is:

1. Move `components/home-v3/*` → `components/home/` (overwrite or version old as `*.legacy.tsx`).
2. Replace the contents of `app/[lang]/page.tsx` with the demo's component composition.
3. Decide on Navbar/Footer cutover (see those sections).
4. Delete `app/home-v3` and `app/[lang]/home-v3`.

---

## Dictionary additions

Add the following keys under `home` in **both** `dictionaries/el.json` and `dictionaries/en.json`. Reuse existing keys wherever possible — the new keys are only for content the v3 design introduces.

### Existing keys to keep using

| Component        | Existing dict key                          |
|------------------|--------------------------------------------|
| Hero H1          | `home.hero.title` (already has the `<br>`) |
| Hero subtitle    | `home.hero.subtitle` (array of 3)          |
| Hero CTA         | `home.hero.cta`                            |
| About            | `home.intro.title`, `home.intro.p1`, `home.intro.p2` |
| Services         | `home.services.{title,subtitle,items,cta}` |
| Industries       | `home.expertise.{title,subtitle,items,cta}` (re-purposed for the 6-card grid) |
| Approach         | `home.enhance.{title,subtitle,items,cta}`  |
| Venues           | `home.clients.{title,subtitle}`            |
| Journal          | `home.blog.{title,subtitle,articles,cta,read_more}` |

### New keys to add (Greek shown — mirror in English)

```json
"home": {
  "hero": {
    "side_label": "ATHENS · GR — SONIC BRANDING",
    "kicker": "ΜΟΥΣΙΚΗ ΕΠΙΜΕΛΕΙΑ & ΗΧΗΤΙΚΗ ΤΑΥΤΟΤΗΤΑ",
    "secondary_cta": "Κλείστε ραντεβού",
    "now_playing_label": "NOW PLAYING",
    "now_playing_track": "The SensEar Sessions — Vol. 04",
    "featured_kicker": "FEATURED SPACE",
    "featured_caption": "After-hours, scored.",
    "badge": "★ SENSEAR ★ EST · ATH",
    "scroll_label": "SCROLL"
  },
  "marquee": [
    "Signature Playlists",
    "Μουσική Εκδηλώσεων",
    "Ηχητική Ταυτότητα",
    "Ακουστική Αναβάθμιση"
  ],
  "about": {
    "kicker": "ΠΟΙΟΙ ΕΙΜΑΣΤΕ"
  },
  "services": {
    "kicker": "ΥΠΗΡΕΣΙΕΣ",
    "preview_placeholder": "Περάστε τον δείκτη πάνω από μια υπηρεσία",
    "previews": [
      { "img": "/images/services/service-signature-playlists.jpg", "cap": "Το καθημερινό soundtrack του χώρου σας" },
      { "img": "/images/services/service-event-soundtracks.jpg",   "cap": "DJ sets & ακουστικές εμπειρίες κατά παραγγελία" },
      { "img": "/images/services/service-sonic-strategy.jpg",      "cap": "Το ηχητικό DNA του brand σας" },
      { "img": "/images/services/service-audio-upgrades.jpg",      "cap": "Πεντακάθαρος, ισορροπημένος ήχος" }
    ]
  },
  "expertise": {
    "kicker": "ΚΛΑΔΟΙ"
  },
  "enhance": {
    "kicker": "Η ΠΡΟΣΕΓΓΙΣΗ ΜΑΣ"
  },
  "clients": {
    "kicker": "ΕΡΓΑ & ΣΥΝΕΡΓΑΣΙΕΣ"
  },
  "blog": {
    "kicker": "THE CURATION JOURNAL",
    "all_articles": "Όλα τα άρθρα"
  },
  "contact_cta": {
    "kicker": "ΑΣ ΣΥΝΕΡΓΑΣΤΟΥΜΕ",
    "title": "Ας σχεδιάσουμε το <em>soundtrack</em> του χώρου σας",
    "subtitle": "Πείτε μας για τον χώρο σας και θα σχεδιάσουμε μαζί την ηχητική του ταυτότητα.",
    "primary_cta": "Κλείστε ραντεβού",
    "secondary_email_label": "hello@sensear.music",
    "background_image": "/images/homepage/sensear-signature-playlist-service.jpg"
  },
  "footer": {
    "tagline": "Soundtracking Unique Experiences",
    "intro": "Μουσική επιμέλεια & ηχητική ταυτότητα για χώρους, εκδηλώσεις και brands.",
    "col_services": "ΥΠΗΡΕΣΙΕΣ",
    "col_industries": "ΚΛΑΔΟΙ",
    "col_company": "ΕΤΑΙΡΕΙΑ",
    "col_newsletter": "ΕΓΓΡΑΦΗ ΣΤΟ JOURNAL",
    "newsletter_blurb": "Σκέψεις για μουσική, ατμόσφαιρα & sonic branding.",
    "newsletter_placeholder": "Το email σας",
    "newsletter_thanks": "Ευχαριστούμε! ✦",
    "copyright": "© 2026 SensEar Music. Με την επιφύλαξη παντός δικαιώματος.",
    "wordmark": "SENSEAR"
  }
}
```

The `<em>` in `contact_cta.title` is the slot for the italic gold-text emphasis (the assistant should render `dangerouslySetInnerHTML` and style `em` via a scoped class, same pattern as the existing `dict.home.hero.title` does for `<br />`).

---

## Reusable primitives

These are small, self-contained helpers; build them inline in this page's components rather than as exports — they're page-scoped.

### `<Kicker>` — small-caps eyebrow

```tsx
<span className="text-xs tracking-[0.34em] font-bold uppercase bg-clip-text text-transparent"
      style={{ backgroundImage: 'var(--gold-text)' }}>
  {label}
</span>
```

Always preceded by a 34px gold gradient hairline `<span>` (a `1px` tall pseudo-rule). Wrap both in a flex row, `gap-3.5`, `mb-[18px]`.

### Italic emphasis span

```tsx
<span className="font-didot text-[1.12em] bg-clip-text text-transparent"
      style={{ backgroundImage: 'var(--gold-text)' }}>
  {word}
</span>
```

One per heading. Pick the word that carries the heading's meaning (`Μοναδικών`, `αναβαθμίζουμε`, `εξειδίκευσή`, `επαναπροσδιορίζουμε`, `εμπιστεύονται`, `διαμορφώνει`, `soundtrack`).

### Primary CTA button — morphing pill

This replaces the current `border-2 border-black rounded-full` button. Two states:

| State | Background | Foreground | Leading icon                       | Trailing arrow                     |
|-------|------------|------------|------------------------------------|------------------------------------|
| Rest  | `var(--gold)` linear-gradient | `#0b0a0a` | Logo PNG (20×20), opacity 1, width 20px | Hidden (max-width 0, opacity 0)    |
| Hover | `#0b0a0a` + inset 1.5px gold border | `#faf6f1` | Collapses (width 0, scale 0)       | Reveals (max-width 22px, opacity 1) |

Transitions: `350ms cubic-bezier(.16,1,.3,1)` on every property. Inline-flex, `gap-2.5`, `px-8 py-[17px]`, `rounded-full`, `text-[15px] font-bold`.

This component MUST be implemented as a small `<MorphCTA>` client component because the icon→arrow swap depends on hover state on a single button. Keep it inside `components/home-v3/` — don't generalize across the site yet.

### Underline-grow nav link

For nav links: a `background-image: var(--gold-text)` painted at `0 100%` with `background-size: 0% 2px`, transitioning to `100% 2px` on hover (using the same trick the current homepage's design uses). On scroll-state nav, links are `text-[#faf6f1]/72`; on hover go to `#faf6f1`.

---

## Section-by-section

For each section I list: target file in the new tree, what to render, exact dictionary key, exact Tailwind classes, motion. Use the design reference [`SensEar Homepage.dc.html`](../SensEar%20Homepage.dc.html) for the literal markup as a starting point — translate it to Tailwind + Next primitives below.

### 1. Hero — `components/home-v3/Hero.tsx`

**What it renders**
- Full-viewport `<section className="relative min-h-screen flex items-center pt-[140px] pb-[70px] overflow-hidden bg-[#0b0a0a]">`.
- Two `aria-hidden` drift orbs (one top-right peach @ 17% alpha, one bottom-left warm @ 6% alpha) using `radial-gradient` + `filter: blur(20px)` + `animation: se-drift`.
- Vertically rotated side label on the left edge: `dict.home.hero.side_label`, in `text-[11px] tracking-[0.42em] font-semibold text-[#faf6f1]/40`, `writing-mode: vertical-rl; transform: rotate(180deg)`.
- 2-col grid `grid-cols-[1.05fr_.95fr] gap-14 items-center`, inside `max-w-[1380px] mx-auto px-8 lg:px-[84px_2rem]` (asymmetric to make room for the side label).
- **Left col**, in order:
  1. Kicker row: 34px gold gradient hairline + `dict.home.hero.kicker`.
  2. `<h1>` from `dict.home.hero.title` (already has `<br />`). Wrap the word **Μοναδικών** / **Unique** in the italic-emphasis span by splitting the title at runtime or by adding `<em>` markers to the dict value (preferred — and update existing key to include `<em>` around the emphasized word).
  3. Lede paragraph (subtitle line 1 + 2, joined with a `<br>` or kept as `<p>` x 2). Body paragraph (subtitle line 3) in `/60`.
  4. CTA row: `<MorphCTA>` linking to `localizedPath('/services')` with label `dict.home.hero.cta`, plus a text link to `/contact` with `border-b border-[#faf6f1]/30 pb-[3px]` underline.
  5. EQ widget: round 52px button (toggles `playing` state — flips animation-play-state on the bars), 7 vertical bars `4px × 42px` each with `animation: se-eq` and randomized durations/delays, two-line label (`NOW PLAYING` kicker + track name).
- **Right col**:
  - Single `<Image>` from `/images/carousel/carousel-event-venue.jpg`, `aspect-ratio: 4/4.6`, `rounded-[8px]`, `shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]`.
  - Bottom-left overlay: `FEATURED SPACE` kicker + italic-Didot caption "After-hours, scored.".
  - Top-right circular badge: 96px ring with `text-[9px] tracking-[0.18em]` "★ SENSEAR ★ EST · ATH", spinning at `24s linear infinite`.

**Motion**: replace the current `slide-up-1` / `-2` / `-4` classes on this section with `<ScrollReveal delay={0}>` for kicker, `delay={0.15}` H1, `delay={0.3}` lede, `delay={0.45}` CTA row, `delay={0.6}` EQ. Right column: `<ScrollReveal direction="right" delay={0.2}>`.

**What is removed**
- The `HeroCarousel` import and component on this page.
- The `slide-up-1/2/4` classes.
- The ambient radial-gradient background overlay (replaced by drift orbs).
- The `<ScrollMouseIcon />` (replaced by the smaller "SCROLL" vertical cue at the bottom of the hero — text + 30px gradient line + `se-cue` keyframe).

### 2. Marquee — `components/home-v3/Marquee.tsx`

**What it renders**
- Full-width band, `bg-[#0e0d0c]`, `border-y border-[#faf6f1]/10`, `py-[22px]`.
- Inside: a `flex w-max animate-[se-marq_36s_linear_infinite]` row containing **two copies** of the same group of `dict.home.marquee` items, each rendered as a `<span className="font-didot text-[1.7rem] text-[#faf6f1]/55">` followed by a gradient-clipped `✦` sparkle.
- Wrap in `overflow-hidden`.

### 3. About — `components/home-v3/About.tsx` (replaces `WhoWeAre.tsx`)

**What it renders**
- `<section className="py-[130px] relative bg-[#0b0a0a]">` with one drift orb top-left.
- Inner `max-w-[1380px] mx-auto px-6 md:px-8 lg:px-12`.
- Kicker `dict.home.about.kicker` ("ΠΟΙΟΙ ΕΙΜΑΣΤΕ"), then a 2-col grid `grid-cols-[1.5fr_.85fr] gap-16 items-center`:
  - **Left**: the large lede paragraph (uses `dict.home.intro.p1`) — 4 Didot-italic spans on `ειδικών στον ήχο`, `βαθιά μουσική κουλτούρα`, `μένει στη μνήμη`, and (English) equivalents. Edit `dict.home.intro.p1` to include `<em>` markers so the assistant can render `dangerouslySetInnerHTML` with a scoped `em` style — same trick as the hero. Then `dict.home.intro.p2` as a `/62` body paragraph, with `<strong>` already in place (current el.json wraps `ατμόσφαιρα`, `συμπεριφορά`, `σύνδεση`).
  - **Right**: portrait image at `aspect-[3/3.7]`, `rounded-[8px]`, source `/images/carousel/carousel-venue-atmosphere-1.jpg`.

**Note**: the current `WhoWeAre.tsx` hard-codes both languages' copy in JSX (it doesn't read `dict.home.intro.p1` / `p2`). Move that copy into `dict.home.intro.p1` / `p2` with `<em>` and `<strong>` markers — both languages — and switch the component to `dangerouslySetInnerHTML`. The existing keys `home.intro.p1` and `p2` are already present in `el.json` (currently unused by `WhoWeAre.tsx`); just check the content matches and amend with `<em>` tags.

**Motion**: `ScrollReveal` on kicker, lede, body (stagger by 0.1s), and image from `direction="right"`.

### 4. Services — `components/home-v3/Services.tsx` (replaces `Services.tsx` on the home page; existing one stays for the dedicated /services page)

**What it renders**
- `<section className="py-[120px] bg-[#0e0d0c] relative">` with one drift orb bottom-right.
- Kicker + H2 (`dict.home.services.title` with italic-Didot on `αναβαθμίζουμε` / `reimagine`) + lede `dict.home.services.subtitle`.
- 2-col grid `grid-cols-[1.35fr_.65fr] gap-12 items-start`:
  - **Left**: list of 4 items from `dict.home.services.items`. Each item is a `<Link>` to `localizedPath('/' + item.link)`, rendered as:
    - Number `01..04` (`text-sm font-bold text-[#faf6f1]/40 w-[34px] tabular-nums`).
    - `<div>` with title (`text-[clamp(1.4rem,2.4vw,2.1rem)] font-bold tracking-tight`) and one-line desc (`text-[#faf6f1]/55`).
    - Trailing arrow (`→`) gradient-clipped.
    - Row: `flex items-baseline gap-6 py-[34px] px-2 border-b border-[#faf6f1]/12`. First row has `border-t` as well.
  - **Right**: a `sticky top-[120px]` column holding the **hover preview**:
    - `aspect-[3/3.8]` panel with a `<div id="svc-preview">` whose `background-image` updates on hover of a service row to that row's `dict.home.services.previews[i].img`.
    - Centered translucent `♪` chip + bottom caption that swaps to `dict.home.services.previews[i].cap`. Default caption: `dict.home.services.preview_placeholder`.

**Hover wiring** is a tiny client effect — keep it inline in this component (`useState` for current preview index, set on row `onMouseEnter`, reset on container `onMouseLeave`). Don't add a global store.

**Motion**: `StaggerChildren staggerDelay={0.05}` around the list; `ScrollReveal` on heading block.

### 5. IndustriesGrid — `components/home-v3/IndustriesGrid.tsx` (replaces `Expertise.tsx` on home page)

**What it renders**
- `<section className="py-[130px] bg-[#0b0a0a]">`.
- Kicker `dict.home.expertise.kicker` ("ΚΛΑΔΟΙ"), H2 from `dict.home.expertise.title` with italic-Didot on `εξειδίκευσή`, lede `dict.home.expertise.subtitle`.
- 3×2 grid: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5`. Each cell:
  - `<Link>` to `localizedPath('/' + item.link)`, `aspect-[1/1.04] rounded-[8px] overflow-hidden relative block`.
  - Full-bleed `<Image fill className="object-cover transition-transform duration-700 group-hover:scale-[1.06]">`.
  - Bottom gradient overlay `linear-gradient(180deg, rgba(11,10,10,0.1) 30%, rgba(11,10,10,0.82))`.
  - Bottom content: title (`text-[1.35rem] font-bold`) + desc (`text-[0.92rem] text-[#faf6f1]/62`), padding `p-6`.

**Image mapping** — use the existing files under `/public/images/industries/`:

| Item index | Existing dict link key                              | Image path                                                |
|------------|-----------------------------------------------------|-----------------------------------------------------------|
| 0          | `industries/music-for-hotels-and-resorts`           | `/images/industries/industry-hotels-resorts.jpg`          |
| 1          | `industries/music-for-restaurants-and-bars`         | `/images/industries/industry-restaurants-bars.jpg`        |
| 2          | `industries/music-for-events-and-experiences`       | `/images/industries/industry-events-experiences.jpg`      |
| 3          | `industries/music-for-retail-stores`                | `/images/industries/industry-retail-stores.jpg`           |
| 4          | `industries/music-for-wellness-and-gyms`            | `/images/industries/industry-wellness-gyms.jpg`           |
| 5          | `industries/music-for-art-museums-and-fashion`      | `/images/industries/industry-art-museums-fashion.jpg`     |

(Verify the file names exist in `public/images/industries/` — they should, since the live site already uses them on the dedicated `/industries` page.)

**Motion**: `StaggerChildren staggerDelay={0.05}` on the grid; `ScrollReveal` on the heading block.

### 6. Approach — `components/home-v3/Approach.tsx` (replaces `Enhance.tsx` on home page)

**What it renders**
- `<section className="py-[130px] bg-[#0e0d0c] relative">` with one drift orb top-right.
- 2-col grid `grid-cols-[0.9fr_1.1fr] gap-16 items-center`:
  - **Left**: image at `aspect-[4/4.4]`, `rounded-[8px]`, source `/images/homepage/vinyl-records-music-curation.jpg`, bottom gradient overlay.
  - **Right**: kicker `dict.home.enhance.kicker` ("Η ΠΡΟΣΕΓΓΙΣΗ ΜΑΣ"), H2 `dict.home.enhance.title` with italic-Didot on `επαναπροσδιορίζουμε`, lede `dict.home.enhance.subtitle`, then a numbered list (`dict.home.enhance.items`) — each row:
    - `flex gap-[22px] py-6 border-t border-[#faf6f1]/12` (last row also `border-b`).
    - Number `01..03` (`text-sm font-bold text-[#faf6f1]/40 w-[34px]`).
    - Title (`font-bold text-[1.3rem] mb-1.5`) + desc (`text-base text-[#faf6f1]/55`).
  - Then a `<MorphCTA>` "Δείτε τα Case Studies" linking to `localizedPath('/case-studies')`.

**Motion**: `ScrollReveal` on image (`direction="left"`), heading block, lede, then `StaggerChildren` over the 3 rows.

### 7. Venues — `components/home-v3/Venues.tsx` (replaces `TrustedBy.tsx` on home page)

**What it renders**
- `<section className="py-[110px] bg-[#0b0a0a] border-y border-[#faf6f1]/8 overflow-hidden">`.
- Header block: kicker `dict.home.clients.kicker` ("ΕΡΓΑ & ΣΥΝΕΡΓΑΣΙΕΣ") + H2 `dict.home.clients.title` with italic-Didot on `εμπιστεύονται`.
- Logo card marquee. Reuse the **clients array** that currently lives in `TrustedBy.tsx`. Each card:
  - `width: 230px flex-none bg-[#141210] border border-[#faf6f1]/8 rounded-[8px] p-7 flex flex-col items-center gap-4`.
  - 96px white `bg-[#faf6f1] rounded-[6px] p-3` square holding the logo `<Image>` (`object-contain`).
  - Below: name (`font-bold tracking-[0.14em] text-[0.95rem]`) + location (`text-[0.8rem] text-[#faf6f1]/50`).
- Two copies of the card row, `flex gap-7`, in a `flex w-max animate-[se-marq_40s_linear_infinite]` wrapper, inside `overflow-hidden`.

**Removed**: the silver-gradient backdrop (`#d3d3d3` + `animated-gradient`) from the current TrustedBy. New look is flat dark; the gold-text gradient handles the warmth.

### 8. Journal — `components/home-v3/Journal.tsx` (replaces `BlogSection.tsx` on home page)

**What it renders**
- `<section className="py-[130px] bg-[#0b0a0a] relative">` with one drift orb mid-top.
- Header row: kicker `THE CURATION JOURNAL` + H2 `dict.home.blog.title` with italic-Didot on `διαμορφώνει`, plus an "Όλα τα άρθρα →" link aligned to the right on `lg+`.
- 3-col grid `grid-cols-1 md:grid-cols-3 gap-7`. Each card:
  - `<Link>` to `localizedPath('/blog/' + article.link)`.
  - Image `aspect-[4/3] rounded-[8px] overflow-hidden mb-6`, `transition-transform group-hover:scale-[1.06]` on the `<Image>`.
  - Tag (gradient-clipped, tracking-[0.22em]).
  - H3 (`text-[1.28rem] font-bold leading-tight`).
  - Body (`text-[#faf6f1]/55 leading-relaxed`).

Same article mapping as the current `BlogSection.tsx` (image by index 0/1/2 → 3 specific files).

**Removed**: the warm-silver background, white card surface, `border-black/5`, "Read More" inline arrow (the whole card is the link; no extra "Read More" affordance).

### 9. Contact CTA — `components/home-v3/ContactCTA.tsx` (NEW — does not exist on current home)

**What it renders**
- `<section className="relative py-[150px] overflow-hidden">`.
- Full-bleed `<Image fill>` from `dict.home.contact_cta.background_image`, with a `linear-gradient(180deg, rgba(11,10,10,0.82), rgba(11,10,10,0.92))` overlay.
- Centered content stack:
  - Kicker `dict.home.contact_cta.kicker`.
  - H2 `dict.home.contact_cta.title` rendered via `dangerouslySetInnerHTML`; style its `<em>` with the italic-Didot + gold-text gradient (scoped to this section by a CSS module or a single inline `<style jsx>` block).
  - Lede `dict.home.contact_cta.subtitle`.
  - Row: `<MorphCTA>` "Κλείστε ραντεβού" linking to `mailto:hello@sensear.music` + text link `hello@sensear.music` with underline.
  - Phone/location line: `+30 697 699 4212 · Αθήνα, Ελλάδα`.

This section sits **between** the Journal section and the Footer. Add it in `app/[lang]/home-v3/page.tsx` after `<BlogSection>` (or its v3 replacement).

### 10. Footer — `components/home-v3/Footer.tsx`

**Decision needed**: this redesign's footer is dramatically different from the current `Footer.tsx`. Options:

- **(A)** Keep `Footer.tsx` shared across the site (it's mounted globally by `LocalizedSiteChrome`), and skip the demo's footer — accept that v3 demo shows the existing footer. Cleanest staging.
- **(B)** Build a page-scoped `Footer.tsx` in `components/home-v3/`, render it manually inside `app/[lang]/home-v3/page.tsx`, and pass a `hideGlobalFooter` flag down through `LocalizedSiteChrome` to suppress the global one on this route. Most accurate preview.
- **(C)** Refactor the existing `Footer.tsx` to a `variant="dark-editorial" | "default"` prop. Cutover then becomes "flip the variant default once the v3 home goes live". Best long-term, more work.

**Recommendation**: **(A) for the demo**, **(C) for the live cutover**. Implement (A) now; revisit (C) in a follow-up plan when the v3 design has been signed off and we're ready to make the site-wide.

If (B) or (C) is chosen, the new footer renders:
- 5-column grid `grid-cols-[1.5fr_1fr_1.15fr_0.95fr_1.15fr] gap-10` on the inner `max-w-[1380px]`:
  1. Brand block: logo + "SENSEAR" wordmark + `dict.home.footer.tagline` (Didot italic) + intro paragraph + social icons (existing 3) + email and phone rows with leading icons.
  2. Services column: heading `dict.home.footer.col_services` (gradient kicker) + 4 links (reuse `dict.home.services.items`).
  3. Industries column: heading `dict.home.footer.col_industries` + 6 links (reuse `dict.home.expertise.items`).
  4. Company column: heading `dict.home.footer.col_company` + 4 links (Έργα/Journal/Σχετικά/Επικοινωνία).
  5. Newsletter column: heading `dict.home.footer.col_newsletter` + blurb + form (single email field + gold round arrow button). Reuse the existing `NewsletterForm.tsx` action (`actions.ts`).
- Bottom rule: `border-t border-[#faf6f1]/10 py-6` with copyright + Privacy/Terms links.
- **Below everything**: the outlined "SENSEAR" wordmark — `text-center font-black tracking-tight text-[clamp(4rem,15.5vw,15rem)] text-transparent [WebkitTextStroke:1px_rgba(250,246,241,0.14)] leading-[0.8] overflow-hidden py-7`.

### 11. Navbar — same decision

**Decision needed**:
- **(A)** Demo with the existing `Navbar.tsx` (the current one already goes dark when scrolled, so this is acceptable).
- **(C)** Add `variant: 'home-v3' | 'default'` to `Navbar.tsx`. The `'home-v3'` variant:
  - Always-dark background (no transparent rest-state).
  - Sliding gold-gradient underline instead of `hover:underline`.
  - Gold pill CTA on `/contact` instead of bordered.
  - SVG logo + tracked "SENSEAR" wordmark in Commissioner 800.

**Recommendation**: **(A) for the demo**. Once approved, refactor `Navbar.tsx` to read `variant` from a `'use client'` context that the home route sets (so other routes keep the current behavior).

---

## Image inventory

Every image referenced in the design exists in `/public/images/` already; do **not** import any new asset files. Quick reference:

| Spot                 | File                                                         |
|----------------------|--------------------------------------------------------------|
| Hero featured image  | `/images/carousel/carousel-event-venue.jpg`                  |
| About portrait       | `/images/carousel/carousel-venue-atmosphere-1.jpg`           |
| Services preview 0   | `/images/services/service-signature-playlists.jpg`           |
| Services preview 1   | `/images/services/service-event-soundtracks.jpg`             |
| Services preview 2   | `/images/services/service-sonic-strategy.jpg`                |
| Services preview 3   | `/images/services/service-audio-upgrades.jpg`                |
| Services default     | `/images/about/about-journey-team-collaboration.jpg`         |
| Industries (×6)      | see mapping table in §5                                      |
| Approach image       | `/images/homepage/vinyl-records-music-curation.jpg`          |
| Venues logos         | the 5 client logos already in `TrustedBy.tsx`                |
| Journal images       | the 3 already in `BlogSection.tsx`                           |
| Contact CTA bg       | `/images/homepage/sensear-signature-playlist-service.jpg`    |
| Brand logo color     | `/images/brand/sensear-logo-color.png`                        |
| Brand logo white     | `/images/brand/sensear-logo-white.png`                        |

If any path is missing, fail loudly in the demo — do **not** silently substitute another image.

---

## Implementation order

To make the demo reviewable as early as possible, build in this order — each step should be visible at `/home-v3` once committed:

1. **Scaffolding** — `app/home-v3/page.tsx`, `app/[lang]/home-v3/page.tsx`, GFS Didot in `fonts.ts`, keyframes + `.font-didot` in `globals.css`, dictionary additions to both `el.json` and `en.json`. Empty placeholder content; just confirm the route renders dark.
2. **Hero + Marquee** — the brand impression. Stop and let the user review.
3. **About + Services list (sticky preview)** — left/right columns establish the dark editorial reading rhythm.
4. **IndustriesGrid + Approach** — proves the two main "blocks" of the page below the fold.
5. **Venues + Journal + ContactCTA + page-scoped Footer (option A)** — closes the page.
6. **QA pass** — keyboard nav, focus states, reduced-motion, mobile breakpoints (especially the hero's 2-col → stacked transition, the services sticky preview behaviour, and the industries 3×2 → 1-col grid).
7. **Cutover** — only after review sign-off, follow the steps in §"Routing & file plan".

Do not skip ahead to step 7 in the same PR that introduces the demo route.

---

## Out of scope

- Tailwind config / `tailwind.config.ts` changes — none required.
- Any global CSS reset changes.
- New npm dependencies — none. The existing `motion/react` covers all motion; no need to introduce GSAP or anything else.
- Changes to any page other than the home (`app/[lang]/page.tsx` and `app/page.tsx`).
- SEO meta — `dict.home.meta.title` and `dict.home.meta.description` are unchanged.
- The mobile slide-out menu in `Navbar.tsx` — left as-is for the demo.

---

## Appendix — current → v3 component mapping (quick reference)

```
app/page.tsx                            keep, untouched until cutover
app/[lang]/page.tsx                     keep, untouched until cutover
components/HeroCarousel.tsx             unused on home v3 (kept for other uses)
components/home/WhoWeAre.tsx       →    components/home-v3/About.tsx
components/home/Services.tsx       →    components/home-v3/Services.tsx (LIST + STICKY PREVIEW)
components/home/Expertise.tsx      →    components/home-v3/IndustriesGrid.tsx (6-CARD GRID)
components/home/Enhance.tsx        →    components/home-v3/Approach.tsx (NUMBERED 01/02/03)
components/home/TrustedBy.tsx      →    components/home-v3/Venues.tsx (LOGO CARD MARQUEE)
components/home/BlogSection.tsx    →    components/home-v3/Journal.tsx
(none)                             →    components/home-v3/Hero.tsx
(none)                             →    components/home-v3/Marquee.tsx
(none)                             →    components/home-v3/ContactCTA.tsx
```
