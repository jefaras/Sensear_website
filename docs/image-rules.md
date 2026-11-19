# Image rules (sensear.music)

Agreed with JEF on 18 Nov 2026. Every photo on the site belongs to one of the groups below. A photo
takes the size of its group, on every page. Do not invent a new size for one section: if a photo
fits no group, stop and ask JEF.

Sizes are CSS px at a 1440 px wide window.

## The groups

| # | Group | Where | Rule | Size at 1440 px |
|---|---|---|---|---|
| 1 | Hero | Top of every page | Use `SplitHero` (`components/v3/SplitHero.tsx`). Never copy its markup into a page. | 690 × 900, at most 1080 high |
| 2 | Photo beside text | Any section with one photo next to its text | Two equal columns and a 3:4 frame (classes below) | 660 × 879 |
| 3 | Card grid (3 columns) | Home "Για ποιες επιχειρήσεις…", home Journal | Card photo `aspect-[1/1.04]` | 447 × 465 |
| 4 | Team portraits | About, "Γνωρίστε την ομάδα" | `aspect-square`, in the group 2 columns | 660 × 660 |
| 5 | Two 16:9 cards side by side | Services hub, "Από πού ξεκινάτε" | `aspect-[16/9]` | 673 × 379 |
| 6 | CTA band background | Closing CTA of each page (`PageCTA`) | Full width; the height follows the text | varies |

Not in the groups, on purpose:

- `/el/dorean-axiologisi/` (Greek-only campaign page) keeps its own layout and photo sizes.
- `HeroFlow` (`components/home-v3/HeroFlow.tsx`, 4:4.6 floating card) is an optional home hero variant. It is not live; the home page uses `SplitHero` (group 1).
- `ServiceDetail.tsx` still has an `aspect-[4/3]` branch for a service page whose last section has two items or fewer. No page uses it today. If a page ever needs it, ask JEF which group it joins.

Group 3 note: the Journal page cards (`components/blog-v3/ArticleCard.tsx`) are still 4:3
(439 × 329). Whether they move to `aspect-[1/1.04]` is an open decision for JEF.

## Group 2 in code

```tsx
<div className="grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-2">
    <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
        <Image src={...} alt={...} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
    </div>
    <div>{/* text */}</div>
</div>
```

- Keep the gap exactly `gap-[clamp(53px,4.2vw,74px)]` from `lg` up. A different gap changes the
  column width, so the photo is no longer 660 px wide.
- Pick the crop with `object-position` (for example `object-[50%_75%]`), not with a different frame.
- Two exceptions keep the 3:4 shape but not the full size, because they sit in a pinned or crossfading
  view: the five-moments photo (`JourneyScroll.tsx`, as tall as the screen allows, at most 879 px) and
  the four-layers photo (`LayersList.tsx`).

## Zig-zag order

- The hero photo is on the right. So the first group 2 photo under it goes on the **left**, and the
  next ones alternate: left, right, left…
- Sections with no photo (centred text, grids, FAQ) do not count. The next photo continues the
  alternation from the last photo above.
- Put the photo first in the markup when it is on the left. For a photo on the right, put it second,
  or use `lg:order-*`.
- On phones the columns stack in markup order: a left photo sits above its text, a right photo below.

## How to check

After a layout change, measure every photo in the browser at 1440 px wide and compare it with the
table. This console snippet lists the photo sizes on a page:

```js
[...document.querySelectorAll('main img')]
  .map(i => i.getBoundingClientRect())
  .filter(r => r.width > 300 && r.width < 800)
  .map(r => Math.round(r.width) + 'x' + Math.round(r.height))
```

Group 2 photos must read `660x879`. Check both locales and a phone width (390 px).

A crossfading photo (the four-layers list) can read about 3% larger on the screen while it fades,
because the inactive images are scaled to 1.03. The frame itself stays 660 × 879.
