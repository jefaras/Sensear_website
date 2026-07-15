# SensEar — Fluid Sizing Upgrade (v5 scale)

Apply this to every redesigned SensEar page so all pages match the new, larger fluid content scale used by `SensEar Homepage XL.dc.html` (reference implementation) and `SensEar Homepage v5.dc.html`.

## Goal
Pages were originally built with fixed px sizes on a `max-width:1380px` container. Upgrade them to:
1. **~15% larger content** (fonts, paddings, gaps, media) — this makes the old value the basis `V` below after scaling.
2. **Fully fluid sizing** — values scale with viewport width via `clamp()`, reaching their max at ~1760px viewport.

## Step 1 — Scale up (×1.15)
For every inline style declaration with these properties: `font-size`, `padding(-*)`, `margin(-*)`, `gap`, `row-gap`, `column-gap`, `width`, `height`, `max-width`, `max-height`, `min-width`, `min-height`, `top`, `left`, `right`, `bottom`:
- Multiply px / rem values by **1.15**. Round px to integers (values ≥100px round to nearest 10). Round rem to 2 decimals.
- **Skip** px values ≤ 2px (hairlines, tiny offsets), `letter-spacing`, `border-radius`, border widths, `line-height` (unitless), values inside `@keyframes`/transforms, and rgba()/color values.
- Inside existing `clamp()` for `font-size`, scale all three parts (rem, vw, px) by 1.15.
- `max-width:1380px` (page containers) → `max-width:min(1760px,100%)`.

## Step 2 — Make fluid (clamp)
Let `V` = the scaled value from Step 1. `V` is treated as the value at a 1760px-wide viewport.

- `font-size` in px, `V ≥ 12`:
  `clamp(round(0.8·V)px, (V/17.6)vw, Vpx)`
- `font-size` in rem:
  `clamp(0.8·V rem, (V·16/17.6)vw, V rem)` (round vw/rem to 2 decimals)
- `padding` / `margin` / `gap` values in px, `V ≥ 14`:
  `clamp(round(0.72·V)px, (V/17.6)vw, Vpx)`
- Leave smaller values, widths/heights, and positions fixed. Never re-wrap a declaration that already contains `clamp(`.

Examples:
- `font-size:15px` → `font-size:clamp(12px,0.85vw,15px)`
- `padding:150px 0` → `padding:clamp(108px,8.52vw,150px) 0`
- `gap:28px` → `gap:clamp(20px,1.59vw,28px)`
- `font-size:1.15rem` → `font-size:clamp(0.92rem,1.05vw,1.15rem)`

## Step 3 — Fixed nav must never overflow
Nav bars need to fit down to ~900px viewports:
- Link font-size: `clamp(13px,1.05vw,15px)`
- Nav gaps: `clamp(14px,2.5vw,37px)`; container side padding: `clamp(20px,2.5vw,37px)`
- CTA pill: `padding:12px clamp(18px,1.7vw,25px);white-space:nowrap`

## Verify
At 1760px viewport content sits at max size; at ~1280px everything is proportionally smaller with no horizontal overflow; fixed nav fits at 900px. Compare against `SensEar Homepage XL.dc.html` — it is the source of truth for the final look.

## Pages to upgrade
All `SensEar *.dc.html` pages except: `SensEar Homepage XL.dc.html`, `SensEar Homepage v4/v5`, `SensEar Homepage_125*` (obsolete zoom experiment), `Font Options`.
