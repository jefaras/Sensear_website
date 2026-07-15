# SensEar Article (Blog Post) Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This spec covers the single-article template (`app/[lang]/blog/[slug]/page.tsx`) — one layout serving **all** blog posts.

## Summary

Rebuild the blog-post template into the dark editorial treatment. The current page reads one article from `dict.blog.articles[]` by slug, renders `article.structuredContent[]` (heading / paragraph / list / image sections) through a switch, with `renderTextWithLinks` for markdown `[text](url)` links, plus `ArticleJsonLd` SEO and `generateStaticParams`. This is a **reskin** that **must preserve** the content renderer, the SEO/JSON-LD, the static-params generation, and the markdown-link parsing.

Design reference: [`SensEar Article - Music Hospitality.dc.html`](../SensEar%20Article%20-%20Music%20Hospitality.dc.html). Demo route: `/blog-v3/[slug]` (+ `/en/blog-v3/[slug]`) — or validate against one known slug. Branch `redesign/home-v3-dark`.

---

## ⚠ Preserve the article infrastructure

Keep all of this from the current `[slug]/page.tsx`, only restyling the markup it produces:
- `BLOG_PUBLISHED_DATES`, `dynamicParams = false`, `BLOG_SLUGS`, `generateStaticParams()` — **the static export depends on these**.
- `generateMetadata()` (title/desc/OpenGraph from the article).
- `ArticleJsonLd` component.
- The `article.structuredContent[]` switch (heading levels, paragraph, list, image+caption) and the `renderTextWithLinks()` markdown-link helper (with its external-source aria-labels + numbered "Source N" logic).
- `notFound()` when the slug isn't found.

Only the **wrapper, hero, prose container, and CTA styling** change to dark.

---

## Section structure (current → v3)

| # | Current section                              | v3 equivalent      | Background  | Change                                                       |
|---|----------------------------------------------|--------------------|-------------|--------------------------------------------------------------|
| 1 | Hero (warm; 7/5 split, back link, title, meta, image) | Article hero | `#0b0a0a`   | Dark; gold back link, gold kicker, italic title span, image card + JOURNAL badge |
| 2 | Content (white rounded card, `prose`)        | Article body       | `#0e0d0c`   | Dark prose, `max-w-[760px]`, gold inline links, gold list bullets |
| 3 | CTA (transparent, centered)                  | Contact CTA        | image+overlay | Dark full-bleed ContactCTA                                  |

---

## Files

```
app/[lang]/blog-v3/[slug]/page.tsx   NEW — demo (server component; copy ALL the infra above)
components/article-v3/
  Hero.tsx                           client — back link + kicker + title + meta + image card
  Prose.tsx                          client — dark prose wrapper (renders the structuredContent switch output) + reveal
ContactCTA                           reuse components/home-v3/ContactCTA.tsx
```

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Keep `blog`:
- `blog.articles[]` — each `{title, desc, tag, link, image, alt, author, displayDate, structuredContent[]}`. The title may contain a `|` split (the current page splits title into two lines). For v3, render the title with the italic-gold span on the **last word or the part after `|`** (the design italicizes "Φιλοξενία").
- `blog.back_button`, `blog.blog_cta.{title,description,button}`.

**New keys** (kicker + meta labels — optional, can be derived):

```json
"blog": {
  "article": {
    "kicker_prefix": "INSIGHTS",
    "read_time": "8 MIN READ",
    "cta_kicker": "ΕΠΟΜΕΝΟ ΒΗΜΑ"
  }
}
```

The design's hero kicker is "INSIGHTS · ΦΙΛΟΞΕΝΙΑ" — derive the second token from `article.tag` if you want it dynamic, else use a static `article.kicker_prefix`.

---

## Section detail

### 1. Article hero — `components/article-v3/Hero.tsx`
- `<section className="relative pt-[170px] pb-[70px] overflow-hidden bg-[#0b0a0a]">`, one drift orb (top-right).
- Grid `grid-cols-[1.15fr_.85fr] gap-16 items-center`, `max-w-[1280px]`.
- **Left**:
  - Back link to `localizedPath('/blog')`: `← ΠΙΣΩ ΣΤΑ ΑΡΘΡΑ` (`blog.back_button`), `text-[#faf6f1]/50`, arrow nudges left on hover, gold on hover.
  - Kicker row: 34px gold hairline + gold gradient `INSIGHTS · {tag}`.
  - H1 `article.title` (italic-gold span on the last segment; `font-extrabold clamp(2.3rem,4.6vw,4.1rem) leading-[1.07]`). Keep the `|` split logic if present.
  - Subtitle `article.desc` (`/72`, `clamp(1.08rem,1.5vw,1.3rem)`).
  - Meta row: author (`article.author`, uppercase tracked, with a leading hairline) · `article.displayDate` · read time — separated by small dot glyphs, `text-[#faf6f1]/60`.
- **Right**: `aspect-[3/4]` image card (`article.image`), rounded-8, subtle gradient, image-zoom on hover, spinning "★ SENSEAR ★ JOURNAL" badge top-right.

### 2. Article body — `components/article-v3/Prose.tsx`
- `<section className="pt-10 pb-[110px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative">`, one drift orb. Inner `max-w-[760px] mx-auto px-8 pt-20`.
- Render `article.structuredContent[]` via the **existing switch**, restyled dark:
  - **h2**: `font-extrabold clamp(1.6rem,2.7vw,2.3rem) leading-[1.16] mb-6 mt-0` (first) / generous `mt` between sections; `#faf6f1`.
  - **h3**: `font-bold text-[1.4rem] mt-12 mb-4`.
  - **paragraph**: `text-[1.16rem] leading-[1.78] text-[#faf6f1]/78 mb-14` (the design uses big bottom spacing between blocks).
  - **list**: gold bullet dots (`bg-[#f0bd95]`), items `text-[1.16rem] text-[#faf6f1]/78`.
  - **image+caption**: full-width-ish figure, rounded, caption italic `/40` uppercase tracked.
  - **inline links** (`renderTextWithLinks`): gold (`#f0bd95`), `font-semibold`, with a persistent gold underline (`background-size:100% 1.5px`) that thickens on hover; external links keep `target=_blank rel=noopener` + aria-labels. (Current page styled these orange — switch to gold.)
- Footer rule + a centered ghost "← ΠΙΣΩ ΣΤΑ ΑΡΘΡΑ" outline button to `localizedPath('/blog')`.
- `ScrollReveal` per block (`StaggerChildren` over the structuredContent map, as today).

### 3. Contact CTA
Reuse home-v3 ContactCTA. Full-bleed `/images/homepage/sensear-signature-playlist-service.jpg` + dark overlay. Copy from `blog.blog_cta`: kicker (`blog.article.cta_kicker` = "ΕΠΟΜΕΝΟ ΒΗΜΑ"), H2 `blog_cta.title` (italic on a key word, e.g. "hospitality"), lede `blog_cta.description`, primary `<MorphCTA>` `blog_cta.button` → `localizedPath('/contact')`.

---

## Image inventory

Hero + body images come from `article.image` and `structuredContent[].src` per article (already set). CTA bg: `/images/homepage/sensear-signature-playlist-service.jpg`.

---

## Notes

- **One template, all posts.** Don't hardcode the Music-Hospitality article's text — it's just the design reference. Everything renders from `article.structuredContent[]`.
- **SEO/static-export is the risk** — keep `generateStaticParams`, `dynamicParams=false`, `ArticleJsonLd`, `generateMetadata` exactly. The build emits one static page per slug; breaking these breaks the export.
- Inline links go **gold**, not orange — that's the only color change to the renderer.
- Mobile: hero stacks (image below text+meta); prose stays single-column `max-w-[760px]`.
