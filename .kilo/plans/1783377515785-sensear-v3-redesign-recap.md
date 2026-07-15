# SensEar v3 — Dark Editorial Redesign: Recap & Go-Forward

> Recap only. No project source changed. Branch: `redesign/home-v3-dark`.
> Live site is untouched (all v3 work is on `-v3` demo routes).

## 1. What's been done

**Foundations (Step 0) — committed**
- Config hygiene: `tsconfig.json` excludes `handoff`; new `.eslintignore`; `package.json` `typecheck` script.
- Clean baseline confirmed (typecheck/lint/build green).
- GFS Didot added in `app/fonts.ts`; keyframes + `.font-didot`/`.se-em` + `prefers-reduced-motion` in `app/globals.css`.

**Step 1 — Home demo (`/home-v3` + `/en/home-v3`) — committed, pending review**
- Shared primitives in `components/v3/`: `V3Root`, `DarkBand`, `Kicker`, `Em`, `MorphCTA`, `GhostButton`, `DriftOrb`, `SpinningBadge`, `SideRail`, `FooterV3`, `emphasize`.
- Page sections in `components/home-v3/`: `Hero` (+`EQWidget`), `Marquee`, `About`, `Services` (sticky preview), `IndustriesGrid`, `Approach`, `Venues`, `Journal`, `ContactCTA`.
- Dictionary: `home.*` keys added/amended in **both** `el.json` and `en.json` (kickers, marquee, services.previews, contact_cta, `intro.p1/p2` with `<em>`/`<strong>`).
- Polish/QA commits after: emphasis-glyph clipping fix, CTA microinteractions, home footer + venue details, visual-QA fixes, lucide/Turbopack fix.

**Step 2 — FAQ demo (`/faq-v3` + `/en/faq-v3`) — committed, pending review**
- `components/faq-v3/`: `Hero`, `Accordion` (Radix, dark, single-open), `index`.
- Validates Kicker + MorphCTA + dark accordion + ContactCTA end-to-end.

## 2. Deviations from the original binding plan (already approved in tracker)
1. GFS Didot italic synthesized via `font-style: italic` (no italic face in `next/font`).
2. `hero.badge` rendered as two-line array.
3. Journal H2 uses `home.blog.subtitle` (where the `<em>` target lives).
4. ContactCTA primary → `localizedPath('/contact')` (overrides master spec's `mailto:`).
5. **Footer is NOT deferred** — a v3 `FooterV3` was built and wired into the home demo, and `home.footer.*` dict keys were added. This contradicts the Step 1 plan ("accept global Footer, defer footer") and partially pre-empts the Phase-4 "Footer/FinalCTA dark variant" decision.

## 3. Where we stand — decisions to make

**A. Review gate is open (most urgent).** Home-v3 and FAQ-v3 are committed but `_v3-implementation-progress.md` still marks them as "PAUSE / awaiting review." They need explicit sign-off (or a fix list) before continuing.

**B. Footer decision.** A demo-level `FooterV3` now exists. Decide: (i) keep building per-page v3 footers and treat "Footer dark variant" as effectively done-at-demo-level (to be promoted at cutover), or (ii) revert home to the global footer and truly defer until Phase 4.

**C. Three cutover decisions still OPEN (resolve once, together, at Phase 4):**
   - Navbar dark variant (currently the global Navbar shows a transparent rest-state over the dark hero — visible compromise on `/home-v3`).
   - Footer/FinalCTA dark variant (partially done via `FooterV3`).
   - `AnimatedButton` → `MorphCTA` (variant vs. replace).

**D. Progress tracker is stale.** Status line still says "Phase 1 complete, awaiting approval before Phase 2," and Step 2 is unchecked though FAQ is committed. Needs reconciliation so a resuming agent reads true state.

**E. Fidelity/polish trail is active.** Multiple analysis docs exist (premium visual-direction roadmap, h2 line-height audit, typography reviews, AI-tooling audit). Confirm home/FAQ meet the quality bar *before* fanning out, since later pages inherit the same primitives.

## 4. Recommended go-forward

1. **Formally review** `/home-v3` + `/en/home-v3` and `/faq-v3` + `/en/faq-v3` against `handoff/design-refs/standalone/*.html`; run the gates (typecheck/lint/build, console-clean, mobile breakpoints, reduced-motion). Sign off or produce a fix list.
2. **Reconcile `_v3-implementation-progress.md`**: check Step 2, record the FooterV3 deviation, update Status.
3. **Resolve decision B** (keep `FooterV3` approach — recommended, since it's built and matches the dark system).
4. **Continue the approved build order** — Step 3 (About, includes team-copy JSX→dict migration), then Services, Industries, Case Studies, Journal, Article, Service×4, Industry×6, Contact (dark `ContactForm variant`), Sitemap — each with the per-step pause + gates.
5. **Phase 4 cutover** (separate PR, only after all demos approved): resolve C, promote `components/*-v3` into real homes, swap live `app/[lang]/*` to v3 compositions, delete `-v3` routes, verify full build/export.

## 5. Open questions for you
- Is the immediate priority to (a) keep building pages 3–12 in order, (b) cut over home+faq now, or (c) pause for deeper demo review first?
- Keep `FooterV3` at demo level, or revert to global footer until cutover?
