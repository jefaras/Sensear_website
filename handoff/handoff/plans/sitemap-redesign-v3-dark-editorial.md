# SensEar Sitemap Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This spec covers only the Sitemap page (`app/[lang]/sitemap-page/page.tsx`).

## Summary

Reskin `app/[lang]/sitemap-page/page.tsx` to dark editorial. The current page already builds `sitemapSections` from real dictionary data (`navigation`, `services_page.services`, `industries_page.expertise.items`, `blog.articles`, footer FAQ label). The v3 design is a **pure reskin** — same 4-card directory grid, dark surfaces, gold-arrow rows. No new data sources.

> **Important:** **do not** include `app/sitemap.ts` — that's the search-engine XML sitemap (a Next.js convention) and must stay untouched. Only the user-facing `/sitemap-page` route changes.

Design reference: [`SensEar Sitemap.dc.html`](../SensEar%20Sitemap.dc.html). Demo route: `/sitemap-page-v3` (+ `/en/sitemap-page-v3`), branch `redesign/home-v3-dark`.

---

## Section structure (current → v3)

| # | Current section                              | v3 equivalent       | Background  | Change                                                  |
|---|----------------------------------------------|---------------------|-------------|---------------------------------------------------------|
| 1 | Hero (warm; H1 + subtitle + square img)      | Hero                | `#0b0a0a`   | Side rail, kicker, MorphCTA optional, EXPLORE THE SITE badge |
| 2 | 4 cards (white, Lucide icon, link rows)      | Directory           | `#0e0d0c`   | 4 dark cards, gold-outline icon chips, gold arrow rows  |
| 3 | `<FinalCTA>`                                 | Contact CTA         | image+overlay | Dark full-bleed ContactCTA                            |

Order unchanged. The 4 cards stay 2×2 on desktop, stack on mobile.

---

## Files

```
app/[lang]/sitemap-page-v3/page.tsx   NEW — demo (server component; copy the sitemapSections builder verbatim)
components/sitemap-v3/
  Hero.tsx                            client — text col + image card + badge
  DirectoryCard.tsx                   client — one dark card (icon chip + heading + link rows with hover arrow nudge)
ContactCTA                            reuse components/home-v3/ContactCTA.tsx
```

Keep the **`sitemapSections` builder exactly as it is** in the current page — it already wires real dict data through `localizedPath`. Just iterate it through `<DirectoryCard>` instead of the white `<Card>`. Don't touch `app/sitemap-page/page.tsx` (warm version) or `app/sitemap.ts` (XML).

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Keep `sitemap_page`:
- `sitemap_page.meta.{title,description}`
- `sitemap_page.hero.{title,subtitle}`
- `sitemap_page.sections.{main,services,industries,blog}` (the 4 card headings)
- `sitemap_page.cta.{title,text,contact_btn,faq_btn}`

**Amendments** — `<em>` italic-gold emphasis:

| Key                       | Emphasis word               |
|---------------------------|-----------------------------|
| `sitemap_page.cta.title`  | **ψάχνετε / looking for**   |
| (Directory section H2)    | use a new key `sitemap_page.directory_title` — design reads "Πλοηγηθείτε σε όλο τον <em>ιστότοπο</em>" |

**New keys**:

```json
"sitemap_page": {
  "hero": {
    "side_label": "SITEMAP — ΧΑΡΤΗΣ ΙΣΤΟΤΟΠΟΥ",
    "kicker": "SITEMAP",
    "image_kicker": "EXPLORE THE SITE",
    "image_caption": "Everything, in one place."
  },
  "directory_kicker": "ΟΛΟ ΤΟ ΠΕΡΙΕΧΟΜΕΝΟ",
  "directory_title": "Πλοηγηθείτε σε όλο τον <em>ιστότοπο</em>",
  "cta_kicker": "ΧΡΕΙΑΖΕΣΤΕ ΒΟΗΘΕΙΑ;"
}
```

---

## Section detail

### 1. Hero — `components/sitemap-v3/Hero.tsx`
Standard dark hero. `min-h-[92vh]`, drift orbs, side rail (`hero.side_label`), kicker row (small "ΕΞΕΡΕΥΝΗΣΗ" + hairline + gold "SITEMAP") → H1 `hero.title` (no italic span needed — the H1 is short) → subtitle `hero.subtitle` (`/72`, larger `clamp(1.2rem,2vw,1.5rem)`). **No CTA buttons** in this hero (matches design). Right: `aspect-[1/1]` image `/images/sitemap-visual.jpg`, EXPLORE THE SITE / "Everything, in one place." overlay, spinning badge.

### 2. Directory — `components/sitemap-v3/DirectoryCard.tsx`
- `<section className="py-[120px] pb-[130px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, one drift orb.
- Centered header `max-w-[920px] text-center`: kicker (`directory_kicker`) → H2 (`directory_title`, italic on "ιστότοπο" via `dangerouslySetInnerHTML`).
- 2×2 grid `grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[1200px] mx-auto`. Render `sitemapSections.map((s, i) => <DirectoryCard ... />)`.

**`<DirectoryCard>` props**: `{ title, icon, pages: [{name, path}] }`. Markup:
- Container: `bg-[rgba(250,246,241,.04)] border border-[#faf6f1]/10 rounded-[16px] p-[38px_36px] transition-[border-color] duration-350`. Hover → `border-[rgba(240,189,149,.35)]`.
- Header row: `flex items-center gap-4 mb-[26px]`. A 50px circular gold-outline icon chip (`border-[rgba(240,189,149,.35)] bg-[rgba(240,189,149,.08)] text-[#f0bd95]`) holding the **section's Lucide icon** (current page passes `Home`, `Briefcase`, `Building2`, `BookOpen` — keep that mapping, `strokeWidth={1.8}`, `w-[22px] h-[22px]`). Beside it: H3 `title` (`font-extrabold text-[1.4rem] tracking-tight`).
- Link rows: each `<Link href={page.path}>` becomes `flex items-center gap-2.5 py-[11px] border-t border-[#faf6f1]/8 text-[1.02rem] text-[#faf6f1]/68 transition-[color,padding-left] duration-300`. Leading gold `→` (`text-[#f0bd95]`) that **translates 3px right on hover** while the row itself adds `padding-left:8px` and text shifts to `#faf6f1`. (Currently the row uses `hover:translate-x-2` on the link itself — switch to the design's per-row scheme.)
- `ScrollReveal` per card with `delay = index * 0.05`.

### 3. Contact CTA
Reuse home-v3 ContactCTA. Full-bleed `/images/contact/contact-hero-venue-consultation.jpg` + dark overlay. Copy from `sitemap_page.cta`: kicker (`cta_kicker` = "ΧΡΕΙΑΖΕΣΤΕ ΒΟΗΘΕΙΑ;"), H2 `cta.title` (italic on "ψάχνετε"), lede `cta.text`. Primary `<MorphCTA>` `cta.contact_btn` → `localizedPath('/contact')`; ghost `cta.faq_btn` → `localizedPath('/faq')`. Phone/location line.

---

## Image inventory

| Spot          | File                                              |
|---------------|---------------------------------------------------|
| Hero image    | `/images/sitemap-visual.jpg`                      |
| CTA bg        | `/images/contact/contact-hero-venue-consultation.jpg` |

No new assets.

---

## Notes

- **Reuse the existing `sitemapSections` builder** as-is — it already pulls from `dict.navigation`, `dict.services_page`, `dict.industries_page`, `dict.blog`, and the footer FAQ label. The current code has a small comment/hack ("FAQ key missing in nav?") that you can leave alone for the demo — clean it up at cutover if you want.
- **Do not touch `app/sitemap.ts`** — that's the XML sitemap for search engines.
- `<FinalCTA>` stays shared; swap to dark ContactCTA on this page only.
- Mobile: hero stacks (image below text); cards stack to single column; arrow-nudge behavior still works on tap (or simply omit the nudge on touch).

---

## Cross-page wrap-up — full set complete

With Home, About, Services, Industries, Contact, Case Studies, Journal, Article, FAQ, Service sub-pages (×4 template), Industry sub-pages (×6 template), and Sitemap specced, **every page on the site is covered**.

Before live cutover, resolve the **three shared decisions** flagged across the specs for the whole set at once:

1. **Navbar** — refactor `Navbar.tsx` to a dark variant (it's globally mounted by `LocalizedSiteChrome`).
2. **Footer + FinalCTA** — dark variants of `Footer.tsx` and `components/sections/FinalCTA.tsx`, since every v3 page replaces or restyles them.
3. **AnimatedButton → MorphCTA** — many service/industry pages use `<AnimatedButton>`. Either replace usages in v3 routes with `<MorphCTA>`, or add a `variant="morph-dark"` to `AnimatedButton.tsx` so the existing call sites flip cleanly at cutover.

Doing those three refactors once (variant props + a context the v3 routes set) lets all pages cut over together cleanly.
