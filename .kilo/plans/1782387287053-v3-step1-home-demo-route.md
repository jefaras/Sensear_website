# v3 — Phase 2, Step 1: Foundations + Home Demo Route

> **Scope: Phase 2 Step 1 ONLY.** Do NOT proceed to Step 2 (FAQ) or any cutover work. Stop after commit and await user review.
> Source of truth: `plans/_v3-implementation-progress.md` (binding decisions) + `plans/home-redesign-v3-dark-editorial.md` (master design spec).
> **Refs are directional** — use `handoff/design-refs/SensEar Homepage.dc.html` for layout/mood/spacing/motion, NOT pixel-perfect.

---

## Resolved decisions (locked for this step)

1. **Demo-route-first.** Build NEW routes `/home-v3/` (el) and `/en/home-v3/` (en). Do NOT modify the live home route (`app/page.tsx`, `app/[lang]/page.tsx`), `Navbar.tsx`, `Footer.tsx`, `FinalCTA.tsx`, `LocalizedSiteChrome.tsx`, or any cutover behavior.
2. **Hero title `<em>` — runtime inject, NOT a shared-dict edit.** The shared `home.hero.title` is rendered on the LIVE home hero via `dangerouslySetInnerHTML` (`app/[lang]/page.tsx:111`). Do NOT amend `home.hero.title` with `<em>`. Instead, the v3 Hero component wraps the target word ("Μοναδικών"/"Unique" — the word following the existing `<br />`) in the Didot gold-italic `<Em>` span at render time (split around `<br />`). Zero impact on the live route.
3. **Section-heading `<em>` — runtime inject, NOT shared-dict edits.** The shared section titles (`home.services.title`, `home.expertise.title`, `home.enhance.title`, `home.clients.title`, `home.blog.title`) are rendered as **plain text** on the live home (no `dangerouslySetInnerHTML`). Amending them would show literal `<em>` tags live. Each v3 section component runtime-injects the Didot gold-italic on the spec-listed word (`αναβαθμίζουμε`/`reimagine`, `εξειδίκευσή`/`expertise`, `επαναπροσδιορίζουμε`/`redefine`, `εμπιστεύονται`/`trust`, `διαμορφώνει`/`shapes`). Shared section-title keys stay untouched.
4. **`home.intro.p1` / `home.intro.p2` — replace content (safe; unused on live).** These keys exist in both dicts but are **NOT consumed anywhere on live** (grep confirms only `home.intro.title` is used, by `WhoWeAre.tsx`; the live `WhoWeAre` hardcodes its copy in JSX). Replace `p1`/`p2` content with the verbatim `WhoWeAre.tsx` copy (both langs, including `<strong>` on `ατμόσφαιρα`/`συμπεριφορά`/`σύνδεση` + English equivalents) and add `<em>` markers on `ειδικών στον ήχο`/`βαθιά μουσική κουλτούρα`/`μένει στη μνήμη` (English: `music experts`/`soundtracks for venues`/`memorable`). The v3 About renders them via `dangerouslySetInnerHTML` with scoped `em` + `strong` styles. No live impact.
5. **Footer — accept global Footer (option A).** Keep the existing light global Footer on `/home-v3`. Do NOT modify `Footer.tsx`, `LocalizedSiteChrome.tsx`, or add `hideGlobalFooter` logic. Known demo compromise: a light footer appears under the dark page until the approved cutover phase. Note this in the commit/PR.
6. **Navbar — accept global Navbar (option A).** The existing `Navbar.tsx` already goes dark when scrolled (`scrolled` state at `scrollY > 20`). Known compromise: transparent rest-state over the dark hero at top is visually awkward; resolved at cutover. Do NOT modify `Navbar.tsx`.
7. **Forms — preserve PHP POST.** `ContactForm` posts to `/contact.php`; `NewsletterForm` posts to `/newsletter.php` (via `fetch(form.action)`). Do NOT rewire to `app/actions.ts` (unused; reCAPTCHA verify there is force-disabled). `app/actions.ts` stays untouched. Note: Step 1 does NOT use either form (ContactCTA is link-based, no newsletter form on this demo), but the constraint holds site-wide.
8. **`components/v3/` = small shared primitives ONLY.** Page sections live in `components/home-v3/`.

---

## Files to create / modify

### Config hygiene (Step 0)
- `tsconfig.json`: add `"handoff"` to `exclude` array → `["node_modules", ".next", "handoff"]`.
- `.eslintignore` (NEW): contains `handoff/` (legacy `.eslintrc.json`-style config; no flat config exists).
- `package.json`: add script `"typecheck": "tsc --noEmit"`.
- **Baseline gate FIRST**: run `npm run typecheck`, `npm run lint`, `npm run build` clean before any code change. (Baseline is 0 typecheck errors — gate is "zero new errors".)

### Foundations
- `app/fonts.ts`: add
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
  ```
  Append `gfsDidot.variable` to `fontVariables`.
- `app/globals.css`: add
  ```css
  .font-didot { font-family: var(--font-didot), 'GFS Didot', serif; font-style: italic; }
  @keyframes se-eq { 0%,100% { transform: scaleY(.22); } 50% { transform: scaleY(1); } }
  @keyframes se-marq { from { transform: translateX(0); } to { transform: translateX(-50%); } }
  @keyframes se-spin { to { transform: rotate(360deg); } }
  @keyframes se-drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(4%,-3%) scale(1.08); } }
  @keyframes se-cue { 0% { transform: translateY(0); opacity:.9; } 50% { transform: translateY(9px); opacity:.25; } 100% { transform: translateY(0); opacity:.9; } }
  ```
  Keep the existing `prefers-reduced-motion` block.

### Dictionaries (add NEW keys to BOTH `dictionaries/el.json` and `dictionaries/en.json`, under `home`)
Mirror structure exactly. Keys to ADD (Greek shown — translate for `en.json`):
- `home.hero`: `side_label`, `kicker`, `secondary_cta`, `now_playing_label`, `now_playing_track`, `featured_kicker`, `featured_caption`, `badge`, `scroll_label`.
- `home.marquee`: array of 4 strings.
- `home.about.kicker`, `home.services.kicker`, `home.services.preview_placeholder`, `home.services.previews` (array of 4 `{img,cap}`).
- `home.expertise.kicker`, `home.enhance.kicker`, `home.clients.kicker`.
- `home.blog.kicker`, `home.blog.all_articles`.
- `home.contact_cta`: `{kicker,title,subtitle,primary_cta,secondary_email_label,phone_line,background_image}`. **`contact_cta.title` includes `<em>`** (rendered via `dangerouslySetInnerHTML` + scoped `em`): `"Ας σχεδιάσουμε το <em>soundtrack</em> του χώρου σας"` / `"Let's design the <em>soundtrack</em> for your space"`.
- **EDIT** `home.intro.p1` and `home.intro.p2` content (see decision #4) — add `<em>` + `<strong>` markers. NOT a structural key change; only values change.

**Do NOT** add `home.footer.*` keys (deferred — no v3 footer in this step). **Do NOT** amend `home.hero.title` or any section `title` key (runtime-injected in components).

See `plans/home-redesign-v3-dark-editorial.md` "Dictionary additions" § for the full Greek source values; translate to English for `en.json`.

### Shared primitives → `components/v3/` (all NEW)
- `V3Root.tsx` (server) — wrapper setting inline CSS vars (`--ink #0b0a0a`, `--ink-2 #0e0d0c`, `--paper #faf6f1`, `--accent #f0bd95`, `--peach #faebe3`, `--gold`, `--gold-text`) + `bg-[#0b0a0a] text-[#faf6f1]`.
- `DarkBand.tsx` (server) — section band wrapper.
- `Kicker.tsx` (server) — gold-text-gradient eyebrow + 34px hairline.
- `Em.tsx` (server) — Didot-italic gold-text emphasis span.
- `GhostButton.tsx` (server/client) — outline CTA.
- `DriftOrb.tsx` (server) — aria-hidden radial-gradient orb, `filter blur(20px)`, `se-drift`.
- `SpinningBadge.tsx` (server) — circular `★ SENSEAR ★ EST · ATH` ring, `se-spin 24s linear infinite`.
- `SideRail.tsx` (server) — vertically rotated side label.
- `index.ts` — barrel export.

### Client primitives
- `components/v3/MorphCTA.tsx` (`'use client'`) — morphing pill: gold→black-with-gold-outline on hover; leading logo icon collapses width 0, trailing arrow reveals; `350ms cubic-bezier(.16,1,.3,1)`. Inline-flex, `gap-2.5`, `px-8 py-[17px]`, `rounded-full`, `text-[15px] font-bold`. Renders logo PNG rest-state (`/images/brand/sensear-logo-color.png`).

### Page sections → `components/home-v3/` (all NEW)
- `Hero.tsx` (`'use client'` — hosts EQWidget toggle) — `min-h-screen`, 2-col grid `grid-cols-[1.05fr_.95fr]`, drift orbs, `SideRail`, kicker, H1 (runtime `<Em>` on "Μοναδικών"/"Unique"), lede, `<MorphCTA>` + underline link, EQWidget, featured image (`/images/carousel/carousel-event-venue.jpg`) with `SpinningBadge` + featured caption. `ScrollReveal` stagger on left col items; right col `direction="right"`.
- `Marquee.tsx` (server) — `bg-[#0e0d0c]`, two-copy `animate-[se-marq_36s_linear_infinite]`, Didot items + gold `✦`.
- `About.tsx` (server) — `py-[130px]`, kicker, 2-col `grid-cols-[1.5fr_.85fr]`, `dangerouslySetInnerHTML` lede (`home.intro.p1` with scoped `em`/`strong`) + body (`home.intro.p2`), portrait `/images/carousel/carousel-venue-atmosphere-1.jpg`.
- `Services.tsx` (`'use client'` — hover preview index state) — `bg-[#0e0d0c]`, kicker + H2 (runtime `<Em>` on `αναβαθμίζουμε`/`reimagine`), 2-col `grid-cols-[1.35fr_.65fr]`, numbered list (4 items, `tabular-nums`, trailing gold arrow), sticky `top-[120px]` preview panel updating bg-image on hover from `home.services.previews[i].img` (default `home.services.preview_placeholder`).
- `IndustriesGrid.tsx` (server) — 3×2 grid `sm:grid-cols-2 lg:grid-cols-3 gap-5`, 6 cards, image mapping by dict `link` (hotels→`industry-hotels-resorts.jpg`, etc.), bottom gradient overlay.
- `Approach.tsx` (server) — `bg-[#0e0d0c]`, 2-col `grid-cols-[0.9fr_1.1fr]`, image `/images/homepage/vinyl-records-music-curation.jpg`, numbered 01/02/03 list (runtime `<Em>` on `επαναπροσδιορίζουμε`/`redefine`), `<MorphCTA>` to `/case-studies`.
- `Venues.tsx` (server) — `bg-[#0b0a0a] border-y`, kicker + H2 (runtime `<Em>` on `εμπιστεύονται`/`trust`), logo-card marquee. **Reuse the 5-client array verbatim from `components/home/TrustedBy.tsx`** (Klouvi/Blue Bamboo/Beach House/Pelicanos/Yam).
- `Journal.tsx` (server) — 3-col grid, 3 cards, image-by-index mapping (0→`blog-music-branding-tips.webp`, 1→`blog-music-curation-venues.jpg`, 2→`blog-music-hospitality-brand.jpg`), runtime `<Em>` on `διαμορφώνει`/`shapes`, "all articles" link.
- `ContactCTA.tsx` (server) — NEW full-bleed section between Journal and global Footer. `py-[150px]`, full-bleed `Image fill` (`home.contact_cta.background_image` = `/images/homepage/sensear-signature-playlist-service.jpg`), dark overlay, kicker, H2 (`dangerouslySetInnerHTML` from `home.contact_cta.title`, scoped `em`), subtitle, `<MorphCTA>` primary → `localizedPath('/contact')`, ghost → `mailto:hello@sensear.music`, phone line (`home.contact_cta.phone_line`).
- `index.ts` — barrel export.

### Home-only client widget
- `components/home-v3/EQWidget.tsx` (`'use client'`) — 52px round button toggling `playing` state; 7 vertical bars `4px×42px` each, `animation: se-eq` with randomized durations/delays; flips `animation-play-state`; two-line label (`NOW PLAYING` kicker + track).

### Routes (NEW — mirror `app/page.tsx`→`app/[lang]/page.tsx` pattern)
- `app/home-v3/page.tsx` (el root):
  ```tsx
  import HomeV3 from '@/app/[lang]/home-v3/page'
  export default function GreekHomeV3Page() {
      return <HomeV3 params={Promise.resolve({ lang: 'el' })} />
  }
  ```
- `app/[lang]/home-v3/page.tsx` (server):
  ```tsx
  import { getDictionary } from '@/lib/dictionary'
  import { Locale } from '@/lib/i18n'
  // compose V3Root + sections, passing dict slices
  export default async function HomeV3({ params }: { params: Promise<{ lang: Locale }> }) {
      const { lang } = await params
      const dict = await getDictionary(lang)
      // ...render V3Root wrapping Hero, Marquee, About, Services, IndustriesGrid, Approach, Venues, Journal, ContactCTA
  }
  ```
  `[lang]` generates only `en` (`generateStaticParams` returns `[{lang:'en'}]`, `dynamicParams=false` — already set in `app/[lang]/layout.tsx`). Greek root re-export makes `/home-v3/` serve el.

---

## Verified assets (all present in `/public/images/`)
- Hero: `/images/carousel/carousel-event-venue.jpg` ✓
- About portrait: `/images/carousel/carousel-venue-atmosphere-1.jpg` ✓
- Services previews: `/images/services/service-signature-playlists.jpg`, `service-event-soundtracks.jpg`, `service-sonic-strategy.jpg`, `service-audio-upgrades.jpg` ✓; default: `/images/about/about-journey-team-collaboration.jpg` ✓
- Industries (×6, by dict order): `industry-hotels-resorts.jpg`, `industry-restaurants-bars.jpg`, `industry-events-experiences.jpg`, `industry-retail-stores.jpg`, `industry-wellness-gyms.jpg`, `industry-art-museums-fashion.jpg` ✓
- Approach: `/images/homepage/vinyl-records-music-curation.jpg` ✓
- Blog (×3): `blog-music-branding-tips.webp`, `blog-music-curation-venues.jpg`, `blog-music-hospitality-brand.jpg` ✓
- Contact CTA bg: `/images/homepage/sensear-signature-playlist-service.jpg` ✓
- Brand logos: `sensear-logo-color.png`, `sensear-logo-white.png` ✓
- Venues: 5 client logos in `TrustedBy.tsx` ✓

If any path is missing at build time, fail loudly — do NOT silently substitute.

---

## Execution order
1. Branch: create/checkout `redesign/home-v3-dark`.
2. Step 0 config hygiene; confirm clean baseline (`typecheck`/`lint`/`build` green).
3. Foundations: `fonts.ts`, `globals.css`, dict key additions (both langs, including `intro.p1`/`p2` content edits).
4. `components/v3/*` primitives (server) + `MorphCTA` (client).
5. `components/home-v3/*` sections (Hero last with EQWidget; Marquee, About, Services, IndustriesGrid, Approach, Venues, Journal, ContactCTA).
6. Routes `app/home-v3/page.tsx` + `app/[lang]/home-v3/page.tsx`.
7. Gates (below); fix issues; mobile breakpoint check per section.
8. Commit `v3: home demo route`. **STOP. Do not proceed to FAQ (Step 2).**

---

## Verification gates (mandatory, in order)
Because `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, `build` does NOT catch TS errors — `typecheck` is the real TS gate.
1. `npm run typecheck` — zero new errors (baseline = 0).
2. `npm run lint`.
3. `npm run build` (static export — catches `generateStaticParams`/server-client boundary errors).
4. Browser: dev server, open `/home-v3/` (el) AND `/en/home-v3/` (en). Zero console errors, no hydration warnings.
5. **Mobile breakpoint check per section** (not deferred): hero 2-col→stacked, services sticky-preview behavior, industries 3×2→1-col grid, approach image/text stack. Test at ~375px width.
6. `prefers-reduced-motion` respected (orbs/marquee/badges slow to near-instant).
7. Compare to `handoff/design-refs/SensEar Homepage.dc.html` directionally (layout/mood/spacing/motion — NOT pixel-perfect).

---

## Out of scope for Step 1 (explicit)
- FAQ (`/faq-v3`) — Step 2.
- Any cutover (Phase 4) — separate PR after all demos approved.
- `Navbar` dark variant, `Footer`/`FinalCTA` dark variants, `AnimatedButton`→`MorphCTA` site-wide — open decisions, resolved at cutover.
- `app/sitemap.ts` (XML) and `/out` — never edit.
- `app/actions.ts` — untouched.
- No new npm dependencies (motion/react covers all animation).

---

## Known demo compromises (note in commit/PR)
- Light global Footer appears under the dark `/home-v3` page (accepted option A; resolved at cutover).
- Global Navbar transparent rest-state over dark hero at top is visually awkward (Navbar goes dark only after `scrollY > 20`); resolved at cutover.
- `isEagerLogoPage`/`isEagerFooterAssetPage` regexes in ContactForm/NewsletterForm won't match `-v3` paths → assets lazy-load instead of eager. Acceptable for the demo. (Neither form is used in this step, but noted site-wide.)

---

## Handoff note
This agent (plan mode) does not edit source files or run mutating commands. Switch to an implementation-capable agent to execute. On any spec/codebase conflict (missing dict key, renamed image, missing component): STOP and report specifics + proposed resolution — don't guess silently. Default to preserving behavior, only changing appearance, when unsure.
