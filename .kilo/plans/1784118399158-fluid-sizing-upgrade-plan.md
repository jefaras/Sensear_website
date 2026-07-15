# SensEar Fluid Sizing Upgrade — Implementation Plan

## Goal

Apply the fluid sizing upgrade defined in `handoff/handoff/FLUID-SIZING-UPGRADE.md` to the SensEar design-prototype pages in `handoff/`, so every page matches the larger fluid scale of `handoff/SensEar Homepage XL.dc.html` (the reference implementation / source of truth for the final look).

These are standalone HTML design prototypes (inline styles, `support.js`, `{{ }}` event placeholders) — **not** the Next.js site. Nothing under `app/`, `components/`, `lib/`, or `dictionaries/` is touched.

## Scope — 16 target files (all in `handoff/`, top level only)

1. SensEar About.dc.html
2. SensEar Article - Music Hospitality.dc.html
3. SensEar Audio Upgrades.dc.html
4. SensEar Case Studies.dc.html
5. SensEar Contact.dc.html
6. SensEar Event Soundtracks.dc.html
7. SensEar FAQ.dc.html
8. SensEar Homepage.dc.html  *(old homepage — confirmed in scope; still nav-linked from every page)*
9. SensEar Hotels & Resorts.dc.html
10. SensEar Industries.dc.html
11. SensEar Journal.dc.html
12. SensEar Restaurants & Bars.dc.html
13. SensEar Services.dc.html
14. SensEar Signature Playlists.dc.html
15. SensEar Sitemap.dc.html
16. SensEar Sonic Identity.dc.html

**Excluded** (do not modify):
- `SensEar Homepage XL.dc.html` (reference), `SensEar Homepage v4.dc.html`, `SensEar Homepage v5.dc.html`
- `SensEar Homepage_125.dc.html`, `SensEar Homepage_125 Responsive Check.dc.html` (obsolete zoom experiment)
- `Font Options.dc.html`
- `SensEar Interactive Logo.dc.html` (canvas demo, not a site page — user-confirmed exclusion)
- `SensEar Hotels and Resorts.dc.html` (206-byte empty stub; leave as-is, note as obsolete duplicate of "Hotels & Resorts")
- **Everything in `handoff/design-refs/`** (pinned pre-fluid references for the Next.js v3 build — user-confirmed untouched)

## Method: deterministic one-shot Node.js script (user-confirmed)

Create `handoff/tools/fluid-upgrade.mjs` (plain Node, no dependencies). It processes **only inline `style="..."` attributes** in the page body. The `<helmet><style>` block (keyframes, `:root` tokens, resets) is never touched — this automatically satisfies the "skip @keyframes" rule.

### Transform rules (exact)

For each `style` attribute, split into declarations on `;`, split each on the first `:`.

**Property allowlist `P`:** `font-size`, `padding`, `padding-top/right/bottom/left`, `margin`, `margin-top/right/bottom/left`, `gap`, `row-gap`, `column-gap`, `width`, `height`, `max-width`, `max-height`, `min-width`, `min-height`, `top`, `left`, `right`, `bottom`. Everything else (letter-spacing, border-radius, borders, line-height, box-shadow, background-size/position, transform, inset, aspect-ratio, colors…) passes through unchanged.

Per declaration with property in `P`:

1. **Already contains `clamp(`:**
   - `font-size`: multiply every numeric component (rem, vw, px) inside the clamp by 1.15; round rem/vw to 2 decimals, px to integer. Never re-wrap.
   - any other property: leave the whole declaration unchanged.
2. **Container special case:** `max-width:1380px` → `max-width:min(1760px,100%)`.
3. **Step 1 — scale each length token in the value** (values may be multi-token shorthands like `padding:150px 0` or `0 32px 0 84px`; handle each token independently):
   - `px` token with absolute value ≤ 2 → unchanged (hairlines).
   - `px`: × 1.15 → round to integer; if result ≥ 100, round to nearest 10. Negative values scale the same way (e.g. `-18px` → `-21px`).
   - `rem`: × 1.15 → round to 2 decimals.
   - `0`, `%`, `vw`, `vh`, `em`, `auto`, `fr`, unitless → unchanged.
4. **Step 2 — wrap in clamp** (let `V` = the scaled token value; treat `V` as the value at a 1760px viewport):
   - `font-size` in px, `V ≥ 12`: `clamp(round(0.8·V)px,round2(V/17.6)vw,Vpx)`
   - `font-size` in rem: `clamp(round2(0.8·V)rem,round2(V·16/17.6)vw,Vrem)`
   - `padding*` / `margin*` / `gap` / `row-gap` / `column-gap` px tokens with `V ≥ 14` (positive only): `clamp(round(0.72·V)px,round2(V/17.6)vw,Vpx)`
   - widths / heights / min-/max- / top / left / right / bottom / smaller values: stay fixed at the scaled value — never wrapped.
5. **Nav override pass (Step 3 of the doc)** — scoped to the `<nav id="se-nav">…</nav>` region (present exactly once in all 16 files), after the generic transform force these exact values so the fixed nav fits down to ~900px:
   - `.se-navlink` links: `font-size:clamp(13px,1.05vw,15px)`
   - link-group gap and nav container gap: `clamp(14px,2.5vw,37px)`
   - nav container side padding: `padding:0 clamp(20px,2.5vw,37px)`
   - contact pill: `padding:12px clamp(18px,1.7vw,25px)` and append `white-space:nowrap`
   - (the SENSEAR wordmark `font-size:20px` correctly becomes `clamp(18px,1.31vw,23px)` via the generic rule — matches XL; no override needed)
6. **Idempotency guard:** if a file already contains `max-width:min(1760px`, skip it and report "already upgraded". This prevents catastrophic double-scaling (×1.3225) on accidental re-runs.
7. **Modes:** `--dry-run <file>` prints a unified diff without writing; default mode writes in place and prints a per-file summary (declarations scaled / clamped / skipped).

### Calibration checks (script must reproduce these — all verified against Homepage XL)

| Original (pre-upgrade) | Expected output |
|---|---|
| `max-width:1380px` | `max-width:min(1760px,100%)` |
| nav `padding:22px 0` | `padding:clamp(18px,1.42vw,25px) 0` |
| container `padding:0 32px 0 84px` | `padding:0 clamp(27px,2.1vw,37px) 0 clamp(70px,5.51vw,97px)` |
| logo `width:38px;height:38px` | `width:44px;height:44px` (no clamp) |
| wordmark `font-size:20px` | `font-size:clamp(18px,1.31vw,23px)` |
| navlink `padding-bottom:5px` | `padding-bottom:6px` (<14, no clamp) |
| drift orb `max-width:760px` | `max-width:870px` (≥100 → nearest 10) |
| side label `left:32px` | `left:37px` (position, no clamp) |
| badge `top:-18px;right:-18px` | `top:-21px;right:-21px` |
| `font-size:1.15rem` | `font-size:clamp(1.06rem,1.2vw,1.32rem)` | *(corrected 2026-07-15: V = 1.15×1.15 = 1.32rem per Step-1; the earlier expected value skipped Step-1 scaling — copied unscaled from the source spec — and contradicted the plan's own rules, guaranteeing self-test abort)*
| h1 `font-size:clamp(2.4rem,5vw,4.7rem)` | `font-size:clamp(2.76rem,5.75vw,5.41rem)` (scaled, not re-wrapped) |

Implement these as an assertion self-test inside the script (run on hard-coded strings before touching files); abort if any fails. **Rounding must be exact-decimal** (integer arithmetic on decimal strings, round half away from zero) — naive `Math.round(x*100)/100` float math fails e.g. `4.7×1.15`, which is `5.404999…` in IEEE-754 but must round to `5.41`.

## Task list

1. **Baseline safety commit.** All `handoff/*.dc.html` files are currently **untracked** in git (no safety net). `git add` the handoff prototypes + `handoff/handoff/` docs and commit as a pre-upgrade baseline (message like `handoff: baseline before fluid sizing upgrade`). Rollback = `git checkout` that commit's versions.
2. **File organization (small, do alongside step 1):**
   - Copy `handoff/handoff/FLUID-SIZING-UPGRADE.md` → `plans/fluid-sizing-upgrade.md` (specs live in `plans/` per the project's established workflow in `kilo-code-prompt.md`).
   - Delete the stray `handoff/handoff/` folder afterwards — its `kilo-code-prompt.md` is a byte-identical duplicate of `handoff/kilo-code-prompt.md` (hash-verified).
3. **Write `handoff/tools/fluid-upgrade.mjs`** implementing the rules above, including the self-test and dry-run mode.
4. **Dry-run on the smallest page** (`SensEar FAQ.dc.html`), review the full diff manually against the calibration table and the XL nav markup. Fix script issues before proceeding.
5. **Apply to FAQ only**, open it in a browser (serve `handoff/` via a local static server if `file://` blocks `support.js`/images) and verify visually vs `SensEar Homepage XL.dc.html`. Commit: `handoff: fluid sizing — FAQ`.
6. **Apply to the remaining 15 files** (script takes the explicit file list — never glob, to protect the excluded files). Commit once: `handoff: fluid sizing — all remaining pages`.
7. **Verification pass (Playwright)** on all 16 pages at viewport widths **1760 / 1280 / 900**:
   - No horizontal overflow: `document.documentElement.scrollWidth <= document.documentElement.clientWidth` (allow 1px tolerance).
   - At 1760px content sits at max size; at 1280px proportionally smaller; fixed nav fits on one line at 900px (no wrap, pill not clipped).
   - Screenshot each page at each width into `handoff/screenshots/fluid/` for eyeball review; compare nav + hero against Homepage XL side by side.
8. **Judgment fix-ups.** XL deviates from the mechanical rules in a few decorative spots (e.g. its hero EQ bars stay 5px/48px). If any transformed page looks off (oversized decorative elements, awkward absolute positioning after scaling), hand-adjust those declarations and note them in the commit message. Rules take precedence; XL look wins where they conflict visually.
9. **Final commit + summary** listing per-file declaration counts and any manual deviations.

## Risks & edge cases

- **Double-run scaling** — mitigated by the `min(1760px` guard (step 6 of rules) and the baseline commit.
- **Multi-value shorthands & negatives** — handled per-token; negatives never clamped (a negative clamp would invert min/max).
- **Percent/vw/vh values** (`width:60vw`, `min-height:92vh`, `left:50%`) — must pass through untouched; the token regex must anchor on the unit.
- **`grid-template-columns`, `box-shadow`, `border`, `background-*`** — not in the allowlist, untouched by construction.
- **Absolute-positioned overlays** (image captions `bottom:22px;left:22px`, spinning badges) — positions scale ×1.15 fixed; verify overlays still sit inside their cards at 1280px during the Playwright pass.
- **Pages must still render via `support.js`** — verification uses a real browser render, which catches any attribute-mangling immediately.

## Relationship to `plans/` (context for the implementer)

- `plans/*-redesign-v3-dark-editorial.md` (13 specs) + `plans/_v3-implementation-progress.md` drive the **Next.js v3 implementation** of the same design these `.dc.html` prototypes embody. `handoff/kilo-code-prompt.md` defines that workflow: specs in `plans/`, HTML visual references in `handoff/design-refs/`.
- This upgrade changes the **design prototypes'** scale only. The v3 specs quote fixed Tailwind px tokens based on the old 1380px scale, so after this task the upgraded prototypes and the specs diverge on sizing. That is expected and out of scope here.
- **Deferred follow-up decision (do not act now):** whether the Next.js v3 build adopts the fluid scale — if yes, refresh `handoff/design-refs/` from the upgraded pages and treat `plans/fluid-sizing-upgrade.md` as a sizing addendum to the master spec.

## Out of scope

- Any change under `app/`, `components/`, `lib/`, `dictionaries/`, `/out`.
- `handoff/design-refs/` refresh.
- Content/copy/markup changes in the prototypes beyond style-attribute values.


---

## Execution results (2026-07-15) — COMPLETE

**Root cause of prior failure:** the calibration table's `font-size:1.15rem` row asserted `clamp(0.92rem,1.05vw,1.15rem)` (V = unscaled original, copied verbatim from the source spec) while the plan's own Step-1 rule scales rem by 1.15 (V = 1.32). The mandated self-test could never pass, aborting every run before touching a file. Fixed via Option A (line 84 corrected to `clamp(1.06rem,1.2vw,1.32rem)`); rounding hardened to exact-decimal BigInt arithmetic (half away from zero) so `4.7×1.15 = 5.404999…` (IEEE-754) still rounds to `5.41`.

**Commits:**
- `53daa75` handoff: baseline before fluid sizing upgrade (45 files — rollback point)
- `29da317` chore: fluid upgrade prep (spec → `plans/fluid-sizing-upgrade.md`, unique `v4-creative-direction-cinematic.md` preserved → `plans/`, stray `handoff/handoff/` removed after hash-verifying all 13 other files as byte-identical duplicates)
- `0e206dd` handoff: fluid sizing — FAQ (pilot) + fluid-upgrade/verify tools
- `d64381c` handoff: fluid sizing — all remaining pages

**Per-file counts (tokens scaled / clamped / font-clamps rescaled / containers):**
About 294/204/13/8 · Article 161/121/8/3 · Audio Upgrades 246/171/11/8 · Case Studies 235/159/12/6 · Contact 307/226/7/5 · Event Soundtracks 243/169/11/8 · FAQ 157/113/5/5 · Homepage 465/307/14/11 · Hotels & Resorts 285/191/12/8 · Industries 318/217/15/7 · Journal 234/187/6/6 · Restaurants & Bars 281/188/12/8 · Services 280/198/11/7 · Signature Playlists 251/173/11/8 · Sitemap 262/154/5/5 · Sonic Identity 243/169/11/8. Nav overrides hit exactly 6/1/1/1/1 (link-fs ×6 incl. pill / group-gap / nav-gap / side-pad / pill-pad) in all 16 files.

**Verification:** 48/48 Playwright checks passed (16 pages × 1760/1280/900): no horizontal overflow (≤1px), nav single-line, pill unclipped. Computed-style probe: FAQ nav pixel-identical to Homepage XL at all three widths (nav padding, container max-width/padding, wordmark, navlink font-size, pill padding + nowrap). Screenshots: `handoff/screenshots/fluid/` (48 files, full-page).

**Manual deviations:** none required. The known XL deviation (hero EQ bars) self-resolved: old Homepage bars were originally 4px/42px, and ×1.15 lands exactly on XL's hand-kept 5px/48px/gap:5px.

**Deliberate rule-over-XL difference:** nav container gap forced to `clamp(14px,2.5vw,37px)` per Step-3 (XL itself has `clamp(14px,2vw,28px)` there); visually inert since the container uses `justify-content:space-between`.

**Guards confirmed:** re-run on upgraded file → `SKIP (already upgraded)`; excluded file passed explicitly → `REFUSE (excluded file)`.
