# SensEar v4 — Cinematic / "Atmosphere" Creative Direction

> **Status:** Concept + spec handoff. **No code yet.** This is a *separate exploration track* from v3.
> **Do not modify** anything under `handoff/plans/` (the v3 dark-editorial specs) or any live v3 work — v3 implementation continues in parallel.
> **Relationship to v3:** v4 inherits v3's *content model, brand DNA, bilingual structure, image library and functional infrastructure*, and pushes the *expression* — composition, scale, imagery, motion, transitions — into a more cinematic, art-directed register. Think of v3 as the typeset magazine and v4 as the title sequence.

---

## 0. How to read this document

This is the **master** v4 spec. It is organized around the 10 deliverables you asked for:

1. [Creative direction summary](#1-creative-direction-summary)
2. [Homepage design concept](#7-section-by-section-homepage-plan) (the section-by-section plan, §7)
3. [Navigation & footer concept](#3-navigation--footer-concept)
4. [Page-loader & page-transition concept](#4-page-loader--page-transition-concept)
5. [Motion language notes](#5-motion-language)
6. [Typography / color / image direction](#6-typography--color--image-direction)
7. [Section-by-section homepage plan](#7-section-by-section-homepage-plan)
8. [Implementation notes for a future coding agent](#8-implementation-notes-for-a-future-coding-agent)
9. [Reuse from v3 vs redesign](#9-reuse-from-v3-vs-redesign)
10. [Risks & tradeoffs](#10-risks--tradeoffs)

When this concept is approved, the next step is a **clickable v4 home reference** built the same way v3's was (a `SensEar Homepage v4.dc.html` design component), followed by per-page specs. Nothing in this document should be built into the live Next.js app until that reference exists and is signed off.

---

## 1. Creative direction summary

### The idea in one line
**v4 makes the website *play* like a record and *cut* like a film** — an immersive, horizontally-expansive sonic environment where pages are *scenes*, the loader is an *overture*, and every transition behaves like a needle drop, a crossfade, or a scene cut.

### The organizing metaphor: "Atmosphere"
SensEar designs the sound of a *space*. v4 makes the site itself behave like a beautifully-scored space you move through:

- **Pages are scenes.** Each route carries its own *scene tone* (a tuned background wash) and its own establishing shot — a large, art-directed image moment — so moving across the site feels like moving between rooms, not loading documents.
- **The brand is the title card.** The SensEar wordmark gets real presence: it is the protagonist of the loader, recurs as oversized type at section seams, and signs off the footer at architectural scale.
- **Sound is the motion grammar.** Reveals, transitions and ambient motion all borrow from audio: waveforms drawing in, EQ bars settling, a needle dropping, a frequency sweep wiping the screen. Even with no audio playing, the *language* of motion reads as "music."

### What changes vs v3 (the felt difference)
| Dimension | v3 — Dark Editorial | v4 — Cinematic / Atmosphere |
|---|---|---|
| Composition | Centered `1380px` column, generous margins | **Wider / full-bleed**; edge-to-edge imagery, asymmetric cinematic crops, occasional horizontal-scroll act |
| First viewport | Split hero (text left, single still right) | **One immersive establishing shot** — full-bleed image/motion, oversized wordmark, minimal chrome |
| Imagery | Rounded `8px` cards, contained | **Focal crops, full-bleed, duotone/scene-graded**; image is the stage, not a thumbnail |
| Brand statements | One italic word per heading | **Architectural type** — display lines that span the viewport; the wordmark as a graphic element |
| Logo | Small lockup in nav/footer | **Intentional logo system** — loader mark, seam mark, footer monument, animated favicon-scale "audio dot" |
| Motion | One slow fade-up on enter | **Layered, choreographed**: load overture → scene reveal → scroll-scrubbed parallax → exit cut |
| Routing | Standard page loads | **Animated page-loader + route transitions** (overlay wipe + crossfade) |
| Color | Single near-black canvas | **Scene-tone system** — dark base + per-section/per-page tonal washes, slow ambient color drift |

### Non-negotiable guardrails (carried from the brief)
- Keep SensEar's identity: **music curation, hospitality, atmosphere, sonic branding** — premium hospitality/music-brand feel, **not generic SaaS**.
- Preserve **bilingual Greek/English** structure (Greek default).
- Preserve **functional needs**: real contact form (validation + reCAPTCHA + server action), newsletter, SoundCloud embeds, SEO + static export.
- **Accessibility & `prefers-reduced-motion`** are first-class — the cinematic layer must degrade to a calm, fully-usable site.
- **Performance discipline** — the immersive layer must not tank LCP, CLS, or mobile battery. Every heavy effect is optional and capability-gated.

### Three words to design against
**Immersive. Expansive. Composed.** (If an element isn't earning one of those, cut it — see Content Guidelines: one thousand no's for every yes.)

---

## 2. Mood references — how we're using them

These are **mood references only**. Do not copy any layout. What we're taking from each (the *trait*, not the page):

| Reference | What v4 borrows (trait only) |
|---|---|
| 375.studio | Confident full-bleed type + image rhythm; restrained palette; "studio" authorship feel |
| tenity.com | Clean structural grid under expressive motion; how motion sits on top of order, not instead of it |
| vestwell.com | Warm, premium, human imagery treatment; color used as atmosphere |
| thefirstthelast.agency | Cinematic horizontal pacing; dramatic reveals; theatrical sense of "acts" |
| matchboxstudio.com | Bold brand-forward typography; oversized wordmark presence |
| adoratorio.studio | Loader-as-craft, page-transition-as-signature, audio/visual motion language |
| web.meetcleo.com | Personality + motion charm without losing legibility; tasteful color shifts |

**Anti-goal:** none of these should be recognizable in the result. v4 must read unmistakably as **SensEar** — Greek hospitality + sonic branding — not as a studio portfolio clone. Avoid AI-slop tropes (gradient-soup backgrounds, generic glassmorphism, emoji, rounded-card-with-left-accent-border).

---

## 3. Navigation & footer concept

### 3.1 Navigation — "the conductor's bar"

**Rest state (top of page):** ultra-minimal. Left: SensEar wordmark + the "audio dot" (a small live EQ/pulse glyph that signals the site is "playing"). Right: a single **Menu** affordance and the language toggle (EL / EN). No inline link list — the cinematic hero is uninterrupted.

**Menu (the reveal):** clicking **Menu** triggers a **full-screen overlay takeover** (not a dropdown):
- The current scene **recedes** (scale down ~0.96 + dim) behind a tonal panel that wipes in from the right using the **frequency-sweep** motif.
- Large, stacked nav items (Υπηρεσίες / Κλάδοι / Case Studies / Journal / Σχετικά / Επικοινωνία) at display scale, each line revealing in sequence (staggered ~60ms) like tracks in a playlist, numbered `01–06`.
- Each item, on hover, swaps in a **preview still** (the relevant section's establishing shot) behind the words at low opacity — a "now previewing" moment that reinforces the curation theme. Reuse the v3 sticky-preview interaction logic.
- Secondary cluster: contact line (email assembled client-side to dodge scrapers, as v3 does), phone, socials, and the EL/EN toggle.
- Close via **Close**, `Esc`, or clicking a nav item. Focus is trapped while open; `Esc` and a visible close target are mandatory.

**Scroll state:** the bar slims and gains a translucent tonal backdrop (`backdrop-filter: blur`), matching the current scene tone rather than a fixed color. A thin **scrubber/progress line** (page scroll progress) lives at the very top edge — reads as a track playhead.

**Why an overlay menu (not v3's inline links):** it (a) keeps the first viewport fully cinematic, (b) gives the brand a "moment," (c) is where the audio/preview motion language lives, and (d) scales cleanly across the bigger page set without crowding a wide bar. **Tradeoff:** one extra click to navigate; mitigated by keeping Menu always reachable and adding keyboard shortcuts.

> **DECIDED:** **Menu + a single Contact pill** on desktop (Menu-only was the alternative). The primary conversion action is always one click; the full link set lives in the overlay. The pill uses the v3 morphing-CTA treatment.

### 3.2 Footer — "the end credits"

A cinematic sign-off, escalating from utility to monument:
- **Top band — the invitation:** a large closing statement ("Ας σχεδιάσουμε το *soundtrack* του χώρου σας") with the morphing CTA, set on the current scene tone, optionally over a softly drifting establishing still.
- **Mid band — the index:** the v3 5-column structure (brand + tagline, Services, Industries, Company, Newsletter) but more spacious, with the real `NewsletterForm`, socials, and client-assembled email/phone.
- **Monument — the wordmark:** an **architectural, near-full-width "SENSEAR"** that the eye lands on last. v4 elevates v3's outlined wordmark: it can **fill on scroll** (gold-text gradient wiping left→right as it enters) or hold a subtle grain/duotone. This is the strongest single "logo presence" moment on the site.
- **Baseline:** copyright, Privacy/Terms, a tiny "Soundtracking Unique Experiences" signature, and the live "audio dot."

---

## 4. Page-loader & page-transition concept

This is the signature of v4. Two distinct moments: the **first-load Overture** and the **between-routes Cut**.

### 4.1 First-load — "the Overture" (cold start only)
Shown once per session on the first paint (gate with `sessionStorage` so repeat navigations don't replay it):

1. **Black/scene-tone field.** The SensEar **audio dot** appears center, pulsing on an implied beat.
2. **Wordmark assembles.** "SENSEAR" draws in — letters rising/clipping in sequence, or a mask wipe — paired with a thin **waveform/EQ line** that "fills" left→right as a genuine load-progress indicator (tie to font + hero-image readiness, with a hard cap, e.g. 1.6s, so it never blocks indefinitely).
3. **Needle drop → reveal.** At completion the loader performs the **curtain/iris reveal**: the panel splits or wipes to unveil the hero already composed beneath it (hero is rendered behind the loader the whole time — the loader is a *cover*, not a *gate* for content existence).
4. **Hand-off to hero motion.** The hero's own establishing motion (image scale-settle, headline reveal) begins as the curtain clears, so the two read as one continuous shot.

**Constraints:**
- **Never block LCP/SEO content existence.** The hero DOM + text must be present and server-rendered underneath; the loader is a visual overlay that removes itself. Crawlers and no-JS users see the real page.
- **Hard timeout + skip.** Auto-dismiss on a cap; allow click/keypress to skip; honor `prefers-reduced-motion` (see below).
- **Once per session.** Don't punish navigation with a 1.6s overture every click.

### 4.2 Between-routes — "the Cut" (every navigation)
A fast, elegant transition (~450–650ms total) that masks route swap:

- **Exit:** current scene does a short **dim + slight scale-down**; a **tonal panel wipes across** using the frequency-sweep (a soft vertical "EQ comb" wipe, or a clean diagonal sweep) carrying the SensEar dot.
- **Cover:** at full cover, the new route mounts (this is where Next swaps the page).
- **Enter:** panel wipes off to reveal the new scene, which runs its establishing reveal.
- A **thin top scrubber** advances during the transition for perceived speed.

**Scene-tone carry:** the wipe panel can adopt the *destination* scene's tone, so the color you land in is previewed during the cut — reinforcing the "moving between rooms" feel.

### 4.3 Reduced-motion / no-JS behavior
- `prefers-reduced-motion: reduce` → **no overture, no wipe.** Replace with an instant cross-dissolve (opacity only, ≤120ms) or nothing at all. The audio dot becomes static. No parallax, no scale, no marquees auto-running.
- No-JS / crawler → loader overlay never shown; plain static page.

> **Technical reality check (static export):** Next.js App Router *static export* (`output: 'export'`) does **not** support the `app/template.tsx` streaming/loading transitions the way a server runtime does, and there's no built-in View-Transitions-on-navigation for hard-navigation static sites without extra wiring. See §8 for the recommended approach (client-side transition layer that intercepts internal links, or the View Transition API with a static-export-safe fallback). **This is the single biggest feasibility item to validate early.**

---

## 5. Motion language

**Principle:** motion is *scored*, not decorative. Every motion maps to an audio metaphor and obeys a shared easing + tempo system.

### 5.1 Tempo & easing
- **Primary easing:** keep v3's `cubic-bezier(.16,1,.3,1)` for reveals (continuity) — it already feels cinematic.
- **Transition easing:** a slightly snappier `cubic-bezier(.65,0,.35,1)` for wipes/cuts.
- **Tempo grid:** choreograph staggers on a musical feel — base unit ~120ms ("beat"), with reveals offset in multiples (0 / 60 / 120 / 180ms). Gives sequences a rhythmic, intentional cadence.

### 5.2 The motif library (audio-inspired)
| Motif | Where it's used | Description |
|---|---|---|
| **Audio dot** | Nav, footer, loader | Small pulsing mark = "site is playing." The brand's living signature. |
| **Waveform draw-in** | Loader, section seams, CTA underlines | A horizontal waveform/EQ line that draws L→R; doubles as the load-progress meter. |
| **EQ settle** | Headings, stat reveals | Bars rise from baseline and settle (extends v3's hero EQ widget into a reveal pattern). |
| **Needle drop** | Loader→hero hand-off, "play" affordances | A downward arc + a soft "land," used to start a scene. |
| **Frequency sweep** | Page transitions, menu overlay | A combed vertical wipe (think spectrum analyzer columns) that covers/reveals. |
| **Scrub parallax** | Hero + establishing images | Image moves slower than scroll (layered depth); a "playhead" feel as you move down. |
| **Crossfade** | Image swaps, route enter | Opacity dissolves, never hard pops. |

### 5.3 Scroll choreography
- **Establishing images** parallax-scrub (subtle, ≤8% travel) and can **scale-settle** on entry.
- **Display type** reveals by clip-mask line-by-line (curtain up), not just fade.
- **Horizontal acts:** 1–2 places on the home page may convert vertical scroll into a horizontal pan (e.g. the Industries reel or a venues filmstrip). Use sparingly — it's a spice, not the meal — and always provide a normal-scroll fallback on touch + reduced-motion.
- **Ambient color drift:** scene-tone backgrounds shift hue/brightness very slowly (20–30s loops, low amplitude) so stillness still feels alive. Pausable; disabled under reduced-motion.

### 5.4 Discipline rules
- **One hero motion per scene.** Don't stack 5 competing animations in a viewport.
- **Motion supports reading, never fights it.** Text settles *before* it must be read.
- **Everything pausable / reducible.** Marquees, drifts, parallax all stop under reduced-motion and ideally expose a global "reduce motion" toggle in the menu.

---

## 6. Typography / color / image direction

### 6.1 Typography
**Continuity first:** keep v3's pairing so the brands read as one family across tracks:
- **Montserrat** — structural (nav, body, labels, UI). Weights 400–900.
- **GFS Didot Italic** — emphasis accent (one phrase per heading; Greek-authentic high-contrast serif).

**What v4 adds (treatment, not necessarily a new face):**
- **Architectural display scale.** Hero + seam statements go much larger than v3 — `clamp` ceilings up to ~`10–14vw`, line-height `0.9`, tight tracking. Type becomes a *graphic*, sometimes overlapping imagery (with legibility safeguards: scrim, mix-blend, or knockout).
- **The wordmark as type.** "SENSEAR" appears as oversized graphic type at the loader, footer monument, and optionally one seam — letter-spacing `.18–.22em`, weight 800–900, sometimes outlined/filled-on-scroll.
- **DECIDED — ship on Montserrat + GFS Didot.** No licensed display face for the v4 launch. The cinematic lift comes from *scale, treatment, and motion* on the existing pair (architectural sizing, line-clip reveals, the wordmark-as-graphic), not a new font. A high-contrast display serif (Ogg / Canela / GT Sectra family vibe) may be revisited **post-launch** only if the concept proves out *and* it self-hosts cleanly for static export with full Greek glyph coverage — parked, not in scope.

> **Greek length caveat:** Greek strings run ~15–30% longer than English. Test every display line in **both** languages at max scale — architectural type breaks ugly when it wraps unexpectedly. Build line-break control into the dictionary (`<br>`/`<wbr>` markers), as v3 already does for the hero.

### 6.2 Color — the scene-tone system
v4 keeps v3's **dark base + gold-text + paper** but introduces **scene tones**: each section (and each page) is graded toward a tuned dark hue, so the site feels art-directed and varied rather than uniformly black.

**Constants (from v3 — do not change):**
| Token | Value | Role |
|---|---|---|
| `--ink` | `#0b0a0a` | Base black |
| `--paper` | `#faf6f1` | Text on dark |
| `--gold` | `linear-gradient(100deg,#f0cdb8…#e4d9c4)` | CTA pill / fills |
| `--gold-text` | `linear-gradient(100deg,#edc4ac…#e2d6bf)` | Text-clip accent |
| `--accent` | `#f0bd95` | Selection / glow tint |

**New — scene tones (low-chroma, dark, OKLCH-derived so they stay tasteful):** a small curated set, NOT a rainbow. Each is a near-black with a faint hue cast; gold + paper still read on all of them.
| Scene token | Approx feel | Suggested use |
|---|---|---|
| `--scene-ink` | neutral near-black (`#0b0a0a`) | Hero, default |
| `--scene-wine` | deep warm aubergine/oxblood cast | Services / "after hours" |
| `--scene-midnight` | cool deep blue-black | Industries / spaces |
| `--scene-ember` | warm charcoal-amber cast | Approach / CTA |
| `--scene-stone` | warm graphite | Journal / editorial |

Define these in **OKLCH** with matched low lightness (~0.18–0.24) and very low chroma (~0.02–0.04), varying hue only — exactly the discipline the house aesthetic rules call for. Transitions between scenes (on scroll and on route change) **animate the background tone**, slowly. **Tradeoff:** more tokens to manage and test for contrast; keep the set to ~5 and verify gold/paper contrast on each.

### 6.3 Imagery
This is where v4 most visibly diverges from v3.
- **Full-bleed & focal.** Hero and establishing shots go edge-to-edge; crops are *focal* (a detail — a hand on a fader, a glass, a lit corridor) rather than safe wide shots.
- **Scene grading.** Apply a consistent grade so disparate stock reads as one film: a subtle **duotone toward the scene tone** or a unifying warm-shadow/cool-highlight curve, plus a faint grain. This is the cheapest way to make the existing image library feel *art-directed*. (Do it in CSS — `mix-blend`, gradient overlays, `filter` — not by re-exporting assets, to keep static export light.)
- **Image-as-stage.** Type and UI sit *on* imagery more often (with scrims), vs v3's contained cards.
- **Motion on stills.** Slow scrub-parallax + scale-settle gives static photography a cinematic life without video.
- **Optional video moments.** *If* the client can supply 1–2 short, muted, looping clips (a room at golden hour, a fader move), a single hero/footer video moment would be the highest-impact upgrade. **Gate behind:** poster image first, lazy-load, `prefers-reduced-data`/`reduced-motion` → static poster, mobile → static poster. Treat as enhancement, not dependency. **Until real assets exist, use striped placeholders with monospace labels** describing the intended shot (per house rules) rather than inventing imagery.

> **Asset note:** v4 leans harder on imagery than v3. Flag to the client that the current stock library is serviceable *with grading*, but **2–4 hero-grade signature images (or short clips)** would materially raise the ceiling. List this as a content dependency, not a blocker.

---

## 7. Section-by-section homepage plan

Same content spine as v3 (so the dictionary and SEO carry over), re-staged cinematically. Each section declares a **scene tone** and **one hero motion**.

> **Locked decisions for this plan:** Industries renders as a **horizontal filmstrip act with the 3×2 grid as canonical fallback** (§E). Display type ships on **Montserrat + GFS Didot** (no licensed display face for v4 launch — §6.1). Navigation is **Menu + Contact pill** (§3.1).

### A. Overture (loader) → Hero — scene `--scene-ink`
- **Full-bleed establishing shot** (full viewport), darkened with a bottom-weighted scrim. Slow scrub-parallax + scale-settle.
- **Architectural headline** over the image, bottom-left or center-left: the v3 H1 copy ("Σχεδιάζουμε το Soundtrack *Μοναδικών* Εμπειριών") at much larger scale, line-clip reveal. Keep the GFS Didot italic emphasis word.
- Minimal chrome: wordmark + audio dot top-left, Menu + Contact pill top-right, EL/EN.
- **Now-playing chip** (carry v3's EQ widget) anchored bottom-left or bottom-right — the "score is running" signal.
- **Scroll cue** as a thin waveform line + "SCROLL".
- One primary morphing CTA ("Εξερευνήστε τις υπηρεσίες μας") + secondary "Κλείστε ραντεβού".
- **Hero motion:** loader curtain → image settle → headline curtain-up → chip fade. One continuous shot.

### B. Marquee seam — scene transition `--scene-ink → --scene-wine`
- Keep the keyword ticker (Signature Playlists ✦ Μουσική Εκδηλώσεων ✦ …) but **larger**, GFS Didot, with the waveform motif under it. Acts as the act-break between hero and the first content scene. Pauses on hover; stops under reduced-motion.

### C. About / "Ποιοι είμαστε" — scene `--scene-wine`
- Wide 2-col, but the portrait is **larger and bleeds off one edge**; the lede statement is oversized with multiple Didot-italic emphasis spans (reuse v3 copy + `<em>` markers).
- **Hero motion:** image scrub-parallax + lede line-reveal.

### D. Services — scene `--scene-wine → --scene-ember`
- Keep v3's **numbered list + sticky preview** interaction (it's excellent and on-brand), but go **wider** and let the preview panel be **larger / taller**, with crossfade + scene-graded stills. Hovering a service crossfades the establishing still and swaps the caption (reuse v3 logic verbatim).
- Consider a subtle **needle-drop** on the active row.
- **Hero motion:** rows reveal on the beat grid (0/120/240/360ms); preview crossfades.

### E. Industries — scene `--scene-midnight`
- **DECIDED — horizontal filmstrip act.** Convert v3's 3×2 grid to a **horizontal filmstrip / reel** (scroll-scrubbed horizontal pan) of 6 full-height focal cards — the most cinematic single upgrade on the page. Each card is a full-bleed graded still with title + one line, image scale on hover.
- **Canonical-content fallback (required):** the 6 cards are authored as the normal vertical 3×2 grid in the DOM; the horizontal pan is a **progressive enhancement** layered on top. On **touch, reduced-motion, no-JS, and narrow viewports**, render the v3 vertical grid. Never hijack scroll without a clear exit.
- **Hero motion:** horizontal scrub; cards parallax within their frames.

### F. Approach — scene `--scene-ember`
- Image left bleeding off-edge; numbered 01/02/03 rows right (reuse v3). Add the **EQ-settle** reveal to the numbers.
- **Hero motion:** image scrub + row stagger.

### G. Venues / Trusted-by — scene `--scene-stone`
- Logo-card marquee (reuse v3). Optionally a slower, more "filmstrip" treatment with the cards on the scene tone. Pauses on hover.

### H. Journal — scene `--scene-stone`
- 3 editorial cards (reuse v3 content + mapping). Larger imagery, scene grading, crossfade hover. Heading gets a Didot-italic emphasis word.

### I. Contact CTA — scene `--scene-ember`
- Full-bleed graded image + heavy scrim (as v3) but **bigger statement type** and the **waveform** drawing under the headline. Morphing CTA + client-assembled email + phone/location line.
- **Hero motion:** waveform draw-in on enter; CTA morph on hover.

### J. Footer — "end credits" — scene `--scene-ink`
- The §3.2 footer: invitation band → index columns + real newsletter → **architectural SENSEAR monument** that fills (gold-text wipe) on scroll. Audio dot + signature at the baseline.

> **Section count discipline:** this is the *same* spine as v3 — no filler sections added. If the client wants a testimonial/quote moment or a stats band, that's a **content decision to raise with them**, not something v4 invents unprompted.

---

## 8. Implementation notes for a future coding agent

> Audience: the engineer/agent (e.g. Kilo Code) who will build v4 *after* the `.dc.html` reference is approved. Same repo, same constraints as the v3 Kilo prompt. **Demo-route-first**, same as v3 (`/home-v4`, `/en/home-v4`, etc.) — never touch live pages or v3 demo routes until cutover sign-off.

### 8.1 Stack realities to respect
- **Static export** (`output: 'export'`). No server runtime at request time. Everything dynamic is client-side. SoundCloud embeds, forms (server action via the existing endpoint), reCAPTCHA, `generateStaticParams`, `dynamicParams=false`, `generateMetadata`, `ArticleJsonLd` — **all preserved exactly as v3**.
- **i18n** — Greek default + English, dictionary-driven (`dict.*`). Add only NEW v4 keys (scene tones are not copy; new copy = loader skip label, menu labels, any new section microcopy). Mirror in `el.json` + `en.json`.
- **Motion lib** — `motion/react` already in repo. Prefer it over adding GSAP. Only introduce a new dependency if a specific effect (e.g. WebGL) genuinely requires it, and flag it explicitly — the v3 rule was "no new deps."

### 8.2 Page transitions on a static export — the key feasibility item
Validate this **before** building scenes. Recommended approach, in order of preference:
1. **View Transitions API** (`document.startViewTransition`) wired into a client-side link interceptor / Next's experimental view-transitions support, with a **graceful fallback** (instant nav) where unsupported. Cleanest, but verify it works under `output: 'export'` and across the el/en route shapes.
2. **Client transition overlay**: a top-level client component (mounted in the root layout) that listens for internal-link clicks, plays the **exit wipe**, then calls `router.push`, and plays the **enter wipe** on the new route's mount (keyed on `usePathname`). This is framework-version-agnostic and static-export-safe. **Recommended default** if View Transitions is shaky.
3. **`app/template.tsx`** re-mount animation for enter-only transitions (no exit control). Weakest, but a fine fallback for the enter half.

**Loader:** a client component in the root layout, gated by `sessionStorage` (`se_v4_overture_shown`), rendering an overlay above server-rendered content, self-removing on completion/timeout/skip. Must not delay hydration of, or hide from crawlers, the real hero DOM.

### 8.3 Scene-tone system
- Define scene tokens as CSS custom properties (OKLCH) on `:root`.
- Drive the *current* scene tone via a CSS variable on the page wrapper that updates on scroll (IntersectionObserver per section → set `--scene-now`) and on route change. Animate with a `transition` on `background-color`.
- Keep gold/paper contrast verified on every tone (automate a contrast check in QA).

### 8.4 Motion primitives to build (shared, `components/v4/`)
- `<Overture>` (loader), `<RouteTransition>` (wipe layer), `<SceneTone>` (scroll-driven tone setter), `<Establishing>` (parallax + scale-settle image wrapper), `<RevealLine>` (clip-mask line reveal), `<Waveform>` (animated line / progress), `<AudioDot>` (the living mark), `<MenuOverlay>` (full-screen nav). Reuse v3's `<MorphCTA>`, `<Kicker>`, sticky-preview logic, EQ widget.

### 8.5 Performance budget (enforce)
- **LCP:** hero image is the LCP; loader must not delay its existence. Preload + responsive `sizes`; serve graded look via CSS, not heavier assets.
- **CLS:** reserve space for all media; transitions use transforms/opacity only.
- **JS:** capability-gate the heavy stuff. No WebGL on low-power/mobile unless it proves cheap. Horizontal-scroll acts: `content-visibility` + lazy mount.
- **Motion cost:** `transform`/`opacity` only; avoid animating `filter`/`background` on large surfaces except the slow scene drift (low frame-rate, GPU-friendly). Throttle scroll handlers; prefer IntersectionObserver + rAF.
- **Reduced data / save-data:** static posters, no video, no drift.

### 8.6 Accessibility (gate everything on these)
- `prefers-reduced-motion: reduce` → no overture, no wipes (instant cross-dissolve ≤120ms), no parallax/scale/marquee/drift; audio dot static. Plus an in-menu **manual motion toggle** persisted to `localStorage`.
- Menu overlay: focus trap, `Esc` to close, visible focus rings, `aria-expanded`, restore focus to trigger on close.
- Color contrast AA on every scene tone; never rely on the gold gradient alone to convey state.
- Loader/transition overlays are `aria-hidden` and non-blocking to AT; real content is always in the DOM.
- Keyboard: all hover-driven reveals (service preview, menu previews) must also work on focus.

### 8.7 Build order (proposed, after reference sign-off)
1. **Transition spike** — prove the loader + route wipe + reduced-motion fallback on a throwaway 2-route demo. **Pause for review.** (De-risks the whole concept.)
2. **Foundations** — scene-tone tokens, `components/v4/` primitives, GFS Didot already present, dictionary additions.
3. **Home `/home-v4`** — scene by scene per §7. **Pause for review.**
4. Roll out remaining pages (mirror v3's page set), each as a `-v4` demo route, scene-toned.
5. Full QA pass (perf, a11y, i18n, both languages, static `next build` export clean, SoundCloud/forms/SEO intact).
6. Cutover — only on explicit sign-off; resolve the shared Navbar/Footer/transition-layer decisions once, swap live compositions, delete demo routes.

---

## 9. Reuse from v3 vs redesign

### Reuse as-is (don't reinvent)
- **Content model & copy** — all section copy, the bilingual dictionary, `<em>`/`<strong>`/`<br>` markers, SEO meta.
- **Functional infrastructure** — ContactForm (+ validation/reCAPTCHA/server action), NewsletterForm, SoundCloud embeds, `generateStaticParams`, `generateMetadata`, `ArticleJsonLd`, static export config.
- **Brand constants** — `--ink`, `--paper`, `--gold`, `--gold-text`, `--accent`; Montserrat + GFS Didot pairing; the gold-text-clip accent technique.
- **Specific interactions that already sing** — the **services sticky hover-preview**, the **morphing CTA pill**, the **EQ "now playing" widget**, the **animated nav underline**, the **logo-card venues marquee**, client-side email assembly, `ScrollReveal`/`StaggerChildren` + `cubic-bezier(.16,1,.3,1)`.
- **Image library** (graded via CSS, not re-exported).
- **Demo-route-first workflow** + the Kilo prompt structure.

### Redesign / net-new in v4
- **First viewport** → full-bleed cinematic establishing shot + architectural type (vs split hero).
- **Navigation** → minimal bar + full-screen overlay menu with previews (vs inline links).
- **Footer** → "end credits" with architectural fill-on-scroll wordmark monument.
- **Loader (Overture)** + **route transitions (the Cut)** → entirely new layer.
- **Scene-tone color system** + ambient color drift (vs single near-black).
- **Imagery** → full-bleed, focal crops, scene grading, scrub-parallax, optional video (vs contained rounded cards).
- **Motion language** → choreographed, audio-metaphor motif library + beat-grid staggers + optional horizontal acts (vs single fade-up).
- **Logo system** → audio dot + loader mark + footer monument (vs small lockup only).
- **Composition** → wider/full-bleed, asymmetric cinematic crops (vs centered 1380 column).

### Carried-forward open decisions (from v3, re-confirm for v4)
- Navbar: minimal bar shared site-wide via variant/context.
- Footer + FinalCTA: dark/cinematic variant site-wide vs per-route.
- MorphCTA standardization.
- **New for v4:** which transition mechanism (§8.2); whether to license a display serif (§6.1); whether client supplies hero video/signature imagery (§6.3).

---

## 10. Risks & tradeoffs

| # | Risk / tradeoff | Likelihood × Impact | Mitigation |
|---|---|---|---|
| 1 | **Page transitions on static export** may not work cleanly (View Transitions support, exit-animation control on hard nav) | Med × High | **Spike it first** (§8.7-1). Fall back to the client overlay interceptor (§8.2-2), then enter-only `template.tsx`. Don't build scenes until this is proven. |
| 2 | **Loader hurts LCP / SEO / perceived speed** | Med × High | Loader is an overlay over real SSR'd content; once-per-session gate; hard timeout; skippable; off under reduced-motion. Hero DOM always present for crawlers. |
| 3 | **Performance** — parallax, drift, horizontal acts, optional video on mobile | High × Med | Capability-gate; transforms/opacity only; IO+rAF; `content-visibility`; posters before video; reduced-data path; strict budget (§8.5). |
| 4 | **Accessibility regressions** from the cinematic layer | Med × High | Reduced-motion kills all of it gracefully; manual motion toggle; focus trap + Esc on menu; AA contrast per scene; focus-parity for hover reveals. |
| 5 | **"Studio clone" / slop** — looking like the references instead of SensEar | Med × Med | References are *traits only*; keep brand constants, Greek hospitality voice, sonic motifs; no gradient-soup/glass/emoji; one hero motion per scene. |
| 6 | **Imagery ceiling** — stock can't fully carry "cinematic" | High × Med | CSS scene-grading unifies the look; flag 2–4 signature images/clips as a **content dependency** to the client (enhancement, not blocker). |
| 7 | **Greek display type breaks at architectural scale** (length + wrapping) | Med × Med | Test every display line in EL + EN at max size; dictionary-controlled breaks; cap clamp ceilings; QA both languages. |
| 8 | **Scope / cost** — v4 is materially more build than v3 (transition layer, scenes, overlay menu) | High × Med | Reference + transition spike before committing; demo-route-first; phase pauses; reuse v3 interactions verbatim where possible. |
| 9 | **Scene-tone contrast** — gold/paper on 5 tones | Low × Med | Constrain to ~5 low-chroma OKLCH tones at matched lightness; automated contrast check in QA. |
| 10 | **Maintaining two tracks (v3 live + v4 concept)** causes drift/confusion | Med × Low | v4 isolated under `handoff/v4/` + `-v4` routes + `components/v4/`; no shared edits until a single deliberate cutover; this doc never touches v3 files. |
| 11 | **Horizontal-scroll act** disorients or traps scroll on some devices | Med × Med | Keep vertical grid as canonical content; horizontal is progressive enhancement with touch/reduced-motion fallback; never hijack scroll without an exit. |
| 12 | **Optional video** weight/licensing/format burden | Med × Low | Strictly optional; poster-first; lazy; format/size budget; only if client supplies assets. |

---

## Appendix — decision log

### Decided
1. **Navigation** → **Menu + persistent Contact pill** (not Menu-only). Full link set in the overlay; conversion always one click. *(§3.1)*
2. **Industries** → **horizontal filmstrip act, with the 3×2 grid as the canonical/fallback content.** *(§7-E)*
3. **Display face** → **ship on Montserrat + GFS Didot;** a licensed display serif is parked for post-launch evaluation only. *(§6.1)*

### Still open (needs your input)
4. **Imagery:** confirm whether the client can provide 2–4 signature stills and/or 1–2 short muted loops (enhancement, not blocker).
5. **Transition mechanism:** to be locked by the outcome of the §8.7-1 transition spike.
6. **Scope/sequencing:** confirm v4 proceeds to a clickable `.dc.html` home reference next, before any app code.

> **Next deliverable on approval:** `SensEar Homepage v4.dc.html` — a clickable, motion-complete home reference (same role v3's `SensEar Homepage.dc.html` played), including the Overture loader, a sample route-transition wipe, the overlay menu, and 2–3 fully scene-toned sections — so the cinematic direction can be felt, not just read.
