# CLAUDE.md — SensEar (sensear.music)

Next.js App Router **static export** (`output: 'export'`) marketing site for SensEar, a
music-curation / sonic-branding studio. Deployed as static files + PHP form endpoints on Plesk.
Narrative handoff & project status: `claude-code-handoff/BRIEFING.md`.

## Current work

- Branch: `redesign/home-v3-dark` — the **v3 dark-editorial redesign**, built as `-v3` demo
  routes (`/home-v3`, `/faq-v3` done; About→Sitemap pending).
- Master spec: `plans/home-redesign-v3-dark-editorial.md` (read in full before v3 work).
- Build order + binding decisions + progress: `plans/_v3-implementation-progress.md`
  (keep it updated as you complete steps).
- Visual refs: `handoff/design-refs/standalone/*.html` — **directional**, not pixel targets.
- v4 (`plans/v4-creative-direction-cinematic.md`) is concept-only. Do not build it.

## Hard rules

- **NEVER edit `/out` or `app/sitemap.ts`.**
- **Demo-route-first:** during Phase 2, never modify live pages or global `Navbar.tsx`,
  `Footer.tsx`, `FinalCTA.tsx`, `AnimatedButton.tsx`. New pages go on `-v3` routes.
- **Forms:** `ContactForm` POSTs to `/contact.php`, `NewsletterForm` to `/newsletter.php`
  (client validation + reCAPTCHA). Restyle only; **never rewire to `app/actions.ts`** (unused,
  verify disabled). Never read or print `.env.local` or other credential files.
- **i18n:** English is the default locale at `/`; Greek under `/el`. Every user-facing string
  comes from `dictionaries/en.json` + `dictionaries/el.json` — add new keys to BOTH; no
  hardcoded copy in JSX.
- **Static export constraints:** every dynamic route needs `generateStaticParams`;
  `dynamicParams=false`; no runtime server assumptions.

## Verification gates (every step, in order — no exceptions)

1. `npm run typecheck` — **zero new errors** (`next.config.mjs` sets
   `typescript.ignoreBuildErrors: true`, so the build will NOT catch TS errors).
2. `npm run lint`
3. `npm run build` (static export must succeed)
4. Browser: zero console errors, no hydration warnings, both locales.
5. Mobile breakpoints per section (desktop-first dark layouts collapse badly on mobile).

## Working style

- If a spec conflicts with codebase reality (missing key, renamed image, contradictory
  calibration/test), **STOP and report specifics + a proposed resolution. Do not retry-loop or
  guess silently** — a self-contradictory self-test once burned $16 in aborted runs.
- Default to preserving behavior; change appearance only, unless the spec says otherwise.
- Commit per step (`v3: <page> demo route`); keep commits reviewable.
- Cutover to live pages is a separate, explicitly-approved Phase 4 — never start it unprompted.
