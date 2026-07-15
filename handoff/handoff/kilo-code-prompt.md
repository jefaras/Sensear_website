# Kilo Code Prompt — Implement the SensEar v3 Dark Editorial Redesign

> Paste the section below ("=== PROMPT START ===" to "=== PROMPT END ===") into Kilo Code in VS Code, with the `Antigravity` repo open as the workspace. The 13 spec files go in `Antigravity/plans/` and the HTML references in `Antigravity/handoff/design-refs/` (set both up first — see "Before you start").

---

## Before you start (you, the human — do this once)

1. Copy all 13 spec files into the repo at `Antigravity/plans/` (alongside your existing `home-redesign-spec-v2.md`):
   - `home-redesign-v3-dark-editorial.md` (the master — defines the design system)
   - `about-`, `services-`, `industries-`, `contact-`, `case-studies-`, `journal-`, `article-`, `faq-`, `sitemap-redesign-v3-dark-editorial.md`
   - `service-subpages-redesign-v3-dark-editorial.md` (covers 4 service pages)
   - `industry-subpages-redesign-v3-dark-editorial.md` (covers 6 industry pages)
2. Copy the HTML design references into `Antigravity/handoff/design-refs/`. Use the `standalone/` subfolder (single-file HTML, images inlined) for browser visual comparison; the raw `SensEar *.dc.html` + `support.js` + `images/` are there too for reading markup. The specs link to these references by name.
3. Keep the redesign reference material out of the build/tooling so the TS server and linter don't scan the bundled HTML:
   - **`tsconfig.json`** — add `"handoff"` to the `exclude` array (create the array if it isn't there). It sits next to `node_modules`:
     ```json
     "exclude": ["node_modules", "handoff"]
     ```
   - **ESLint** (optional, only if your lint scans non-source files) — add a line to `.eslintignore`, or if you're on flat config (`eslint.config.mjs`), add an `ignores` entry:
     ```
     handoff/
     ```
   - **Git** (optional) — `handoff/design-refs/` is ~25–30 MB because images are inlined. You've already committed it, which is fine as a backup. If you'd rather stop tracking it: `git rm -r --cached handoff/design-refs`, add `handoff/design-refs/` to `.gitignore`, then commit. The lightweight `plans/` specs are worth keeping in history regardless.
   - Note: `handoff/` is not under `app/`, so Next.js never routes or compiles it — there's no risk of it leaking into `/out`.
4. Make sure the repo builds clean before starting: `npm install && npm run build && npm run dev`.

---

=== PROMPT START ===

You are implementing a full visual redesign ("v3 — Dark Editorial") of the SensEar website. This is a Next.js App Router site with i18n (Greek default + English), in this repo. The source of truth is everything under `app/`, `components/`, `dictionaries/`, `lib/`. **Never edit `/out`** — it's generated build output. **Never edit `app/sitemap.ts`** — it's the search-engine XML sitemap.

## Your source material

- **Specs** live in `plans/*-redesign-v3-dark-editorial.md` (13 files). **`plans/home-redesign-v3-dark-editorial.md` is the master** — it defines the entire design system (color tokens, GFS Didot font, the `<Kicker>`, `<MorphCTA>`, italic-emphasis span, drift orbs, `ScrollReveal`/`StaggerChildren` usage, dark footer). Read it FIRST and in full. Every other spec builds on it and only describes its page's specifics.
- **Visual references** live in `handoff/design-refs/` — use `handoff/design-refs/standalone/*.html` (self-contained, open directly in a browser) for visual parity, and the raw `handoff/design-refs/SensEar *.dc.html` for reading markup. Each spec links to its reference by name. These are the exact intended look, motion, and copy. When a spec is ambiguous, the HTML reference is authoritative for visuals; the existing codebase is authoritative for data flow, i18n, and functional behavior (forms, SEO, static export).

## Hard rules (read the specs for the full list, but never violate these)

1. **Demo-route-first.** Build every page as a NEW route under a `-v3` path (e.g. `app/[lang]/about-v3/page.tsx`, `app/[lang]/services-v3/<slug>/page.tsx`). Do NOT modify the existing live pages, the global `Navbar.tsx`, `Footer.tsx`, or `FinalCTA.tsx` until I explicitly approve the cutover. This lets me review side-by-side at `/about` vs `/about-v3`.
2. **Reuse the dictionary.** Every page reads from `dict.*`. Add only the NEW keys each spec lists (kickers, side labels, image captions, italic `<em>` markers), in BOTH `dictionaries/el.json` and `dictionaries/en.json`. Never hardcode user-facing copy in JSX.
3. **Preserve functional infrastructure.** Keep working `ContactForm` (validation + reCAPTCHA + server action — do NOT ship the design's mock submit), `NewsletterForm`, SoundCloud embeds, `ArticleJsonLd`, `generateStaticParams`, `dynamicParams=false`, and all `generateMetadata`. The article spec and contact spec call these out explicitly.
4. **Styling = Tailwind**, matching the existing codebase conventions. The specs give exact classes and the arbitrary-value tokens (`bg-[#0b0a0a]`, `text-[#faf6f1]/60`, etc.). Add GFS Didot via `app/fonts.ts` + a `.font-didot` utility and the keyframes in `app/globals.css` exactly as the master spec describes.
5. **No new npm dependencies.** Motion is already handled by `motion/react` via the existing `ScrollReveal`/`StaggerChildren`. Icons are `lucide-react`.

## Phase 1 — Plan (do this before writing any code)

1. Create and check out a new branch: `redesign/home-v3-dark`.
2. Read `plans/home-redesign-v3-dark-editorial.md` in full, then skim all 12 other specs.
3. Produce a written implementation plan (save it as `plans/_v3-implementation-progress.md`) containing:
   - The shared primitives you'll build first and where they'll live (`components/home-v3/` or a shared `components/v3/`): `Kicker`, `MorphCTA`, ghost button, `ContactCTA`, drift-orb helper, the dark-section wrappers, the GFS Didot setup.
   - The page build order (below).
   - A checklist with a line per page/template and its demo route.
   - The three deferred cutover decisions (Navbar, Footer/FinalCTA, AnimatedButton→MorphCTA) listed as OPEN — do not act on them yet.
4. **Stop and show me the plan. Wait for my approval before Phase 2.**

## Phase 2 — Build (after I approve the plan)

Build in this order. After EACH numbered step: run `npm run dev`, open the demo route in the browser, compare it against the matching `SensEar *.dc.html` reference, fix visual/console issues, then commit with a message like `v3: home demo route`. **Pause for my review after step 1 and step 2**, then proceed through the rest, pausing again before the cutover.

1. **Foundations + Home** (`home-redesign-v3-dark-editorial.md`): fonts, globals keyframes, dictionary additions, shared primitives, then `/home-v3`. This proves the whole system. — PAUSE for review.
2. **FAQ** (`faq-redesign-v3-dark-editorial.md`): smallest page; validates Kicker + MorphCTA + dark accordion + ContactCTA end-to-end at `/faq-v3`. — PAUSE for review.
3. **About** (`about-redesign-v3-dark-editorial.md`) — note the team-copy migration from JSX into the dictionary.
4. **Services** (`services-redesign-v3-dark-editorial.md`).
5. **Industries** (`industries-redesign-v3-dark-editorial.md`) — note the `image` field added to `expertise.items[]`.
6. **Case Studies** (`case-studies-redesign-v3-dark-editorial.md`) — keep SoundCloud embeds; recolor to gold.
7. **Journal** (`journal-redesign-v3-dark-editorial.md`) — reuse real `NewsletterForm`.
8. **Article template** (`article-redesign-v3-dark-editorial.md`) — one template for all posts; preserve SEO + static export.
9. **Service sub-pages** (`service-subpages-redesign-v3-dark-editorial.md`) — build `<ServiceDetail>` ONCE, validate on `signature-playlists`, then 3 thin pages.
10. **Industry sub-pages** (`industry-subpages-redesign-v3-dark-editorial.md`) — build `<IndustryDetail>` ONCE, validate on `hotels-and-resorts`, then 5 thin pages.
11. **Contact** (`contact-redesign-v3-dark-editorial.md`) — reskin `ContactForm` via a `variant="dark"`; keep ALL submit/validation/reCAPTCHA logic.
12. **Sitemap** (`sitemap-redesign-v3-dark-editorial.md`) — reuse the existing `sitemapSections` builder; do not touch `app/sitemap.ts`.

After all pages: — PAUSE before cutover.

## Phase 3 — Verify (do this continuously, and a full pass at the end)

For each demo page:
- **Visual parity**: open the `-v3` route and its `SensEar *.dc.html` reference side by side. Check layout, color tokens, the gold-text gradient, GFS Didot italic accents, drift orbs, hover states (MorphCTA morph, nav underline, card hovers), and the scroll-reveal motion.
- **Build/console clean**: `npm run build` must pass (this is a static export — catch any `generateStaticParams`/server/client boundary errors). Zero console errors in the browser. Check the terminal for hydration warnings.
- **i18n**: visit both `/<route>-v3` (el) and `/en/<route>-v3` (en). Confirm no hardcoded strings; both dictionaries have every new key.
- **Functional**: Contact form actually submits (validation + reCAPTCHA + success state) in the dark variant; newsletter subscribes; SoundCloud players load; article pages prerender per slug; internal links use `localizedPath`.
- **Responsive**: check the mobile breakpoints each spec describes (hero 2-col → stacked, sticky service preview, industry 3×2 → 1-col, etc.).
- **A11y/reduced-motion**: keyboard nav on accordions/nav; `prefers-reduced-motion` still respected.

Keep `plans/_v3-implementation-progress.md` updated as you go (check off pages, note any deviations from the spec and why).

## Phase 4 — Cutover (ONLY after I approve all demo pages)

Do NOT start this without my explicit go-ahead. When I approve, propose a cutover plan that resolves the three shared decisions ONCE (as described in the specs' wrap-up sections):
1. **Navbar** → dark variant on `Navbar.tsx` (globally mounted), driven by a context the v3 routes set.
2. **Footer + FinalCTA** → dark variants.
3. **AnimatedButton → MorphCTA** → a `variant`, or replace usages in v3 routes.
Then move `components/*-v3/*` into their real homes, swap the live `app/[lang]/*` pages to the v3 compositions, delete the `-v3` demo routes, and verify the whole site builds + exports clean. Land it as a reviewable PR.

## Working agreement

- Small, frequent commits, one per page/step, with clear messages.
- If a spec conflicts with the codebase reality (a missing dict key, a renamed image, a component that doesn't exist), STOP and tell me with the specifics + your proposed resolution — don't guess silently.
- If you're unsure whether something is "preserve as-is" vs "restyle", default to preserving behavior and only changing appearance.
- Prefer one shared template over duplicated pages (this is explicit for the service + industry sub-pages).

Start with Phase 1. Read the master spec, then produce the plan and wait for my approval.

=== PROMPT END ===

---

## Notes for you (the human)

- **Why demo-route-first matters here:** your live site exports to `/out` statically. Building `-v3` routes lets you review the redesign in the running dev server without risking the live pages or the export. The cutover (Phase 4) is the only step that touches live files, and it's gated on your approval.
- **The two "template" specs** (service + industry sub-pages) intentionally describe ONE component each, instantiated across 4 and 6 routes. The prompt tells Kilo to build the component once and validate it on one page before fanning out — that's the efficient path.
- **If Kilo's context fills up** on a big repo, run it page-by-page: give it the master spec + one page spec per session, and point it at `plans/_v3-implementation-progress.md` to resume. The prompt is written so each page is independently buildable after the foundations step.
- **Keep the `SensEar *.dc.html` references reachable.** The visual-parity checks depend on them. If Kilo can't open them, at minimum keep this design project open so you can eyeball the comparison yourself at each pause.
