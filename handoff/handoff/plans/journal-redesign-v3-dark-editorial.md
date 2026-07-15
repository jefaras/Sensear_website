# SensEar Journal (Blog Index) Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This spec covers only the Journal / blog index page (`app/[lang]/blog/page.tsx`).

## Summary

Rebuild the blog index into the dark editorial treatment. The current page splits `blog.articles[]` into a **featured** article (index 0, shown large in the hero's right column) and a **grid** of the rest. The v3 design keeps exactly that structure, dark. This is a **reskin** + an added newsletter CTA section.

Design reference: [`SensEar Journal.dc.html`](../SensEar%20Journal.dc.html). Demo route: `/blog-v3` (+ `/en/blog-v3`), branch `redesign/home-v3-dark`.

---

## Section structure (current → v3)

| # | Current section                                  | v3 equivalent          | Background  | Change                                                  |
|---|--------------------------------------------------|------------------------|-------------|---------------------------------------------------------|
| 1 | Hero (warm; left text + featured article right)  | Hero + Featured        | `#0b0a0a`   | Side rail, kicker, italic span, MorphCTA; featured card gets gold "INSIGHTS · ΠΡΟΤΕΙΝΟΜΕΝΟ" pill + JOURNAL badge |
| 2 | Recent articles grid (warm, white cards)         | Articles grid          | `#0e0d0c`   | Dark cards (`#100e0d`), gold tag, date/author footer rule, image-zoom hover |
| — | (none)                                           | Newsletter CTA (new)   | image+overlay | Full-bleed CTA with inline newsletter email form        |

---

## Files

```
app/[lang]/blog-v3/page.tsx        NEW — demo (server component; same featured/grid split)
components/blog-v3/
  Hero.tsx                         client — left text col + featured article card (image-zoom, badge)
  ArticleCard.tsx                  client — dark card, image-zoom hover
  NewsletterCTA.tsx                client — full-bleed CTA with the existing NewsletterForm
```

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Keep `blog`:
- `blog.meta.{title,description}`
- `blog.hero.{title,subtitle}`
- `blog.featured.{read_more}` and `blog.recent.{title,read_more}`
- `blog.articles[]` — each `{title, desc, tag, link, image, alt, displayDate, author}` (the page already reads all these). Index 0 = featured.

**Amendments** — `<em>` italic-gold emphasis:

| Key                  | Emphasis word                |
|----------------------|------------------------------|
| `blog.hero.title`    | **επιμέλειας / curation**    |
| `blog.recent.title`  | (design uses "Σκέψεις για τον ήχο που <em>διαμορφώνει</em> την εμπειρία" — wrap **διαμορφώνει / shapes**) |

**New keys**:

```json
"blog": {
  "hero": {
    "side_label": "JOURNAL — CURATION NOTES",
    "kicker": "ΤΟ ΠΕΡΙΟΔΙΚΟ ΜΑΣ",
    "primary_cta": "Δείτε τα άρθρα",
    "secondary_cta": "Εγγραφή στο newsletter"
  },
  "featured": { "badge": "INSIGHTS · ΠΡΟΤΕΙΝΟΜΕΝΟ", "read_full": "Διαβάστε ολόκληρο το άρθρο" },
  "recent":   { "kicker": "ΠΡΟΣΦΑΤΑ ΑΡΘΡΑ" },
  "newsletter_cta": {
    "kicker": "ΜΗΝ ΧΑΝΕΤΕ ΤΙΠΟΤΑ",
    "title": "Σκέψεις για τον ήχο, <em>απευθείας</em> σε εσάς",
    "subtitle": "Εγγραφείτε στο περιοδικό μας και λάβετε νέα insights για μουσική, ατμόσφαιρα & sonic branding.",
    "placeholder": "Το email σας",
    "submit": "Εγγραφή",
    "background_image": "/images/homepage/sensear-signature-playlist-service.jpg"
  }
}
```

---

## Section detail

### 1. Hero + Featured — `components/blog-v3/Hero.tsx`
- `<section className="relative min-h-[92vh] flex items-center pt-[150px] pb-[80px] overflow-hidden bg-[#0b0a0a]">`, drift orbs, side rail (`hero.side_label`).
- Grid `grid-cols-[1.02fr_.98fr] gap-[60px]`.
- **Left**: kicker (`hero.kicker`) → H1 (`hero.title`, italic on "επιμέλειας") → subtitle (`/72`) → MorphCTA "Δείτε τα άρθρα" → `#journal` + text link to newsletter CTA section.
- **Right**: the **featured article** (`articles[0]`) as a large `<Link>` to `localizedPath('/blog/' + articles[0].link)`, `aspect-[1/1]` rounded-8, image with `group-hover:scale` zoom, full-cover dark gradient. Overlay top-left: gold pill `featured.badge`. Bottom: H2 title, desc (`/72`), and gold "Διαβάστε ολόκληρο το άρθρο →". Spinning JOURNAL badge top-right (same circular badge, label "★ SENSEAR ★ JOURNAL").

### 2. Articles grid — `components/blog-v3/ArticleCard.tsx`
- `<section id="journal" className="py-[120px] pb-[130px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative">`, drift orb.
- Header: kicker (`recent.kicker`) → H2 (`recent.title`, italic on "διαμορφώνει").
- Grid `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]` over `gridArticles` (the non-featured articles — keep the current `featuredArticle ? slice(1) : all` logic). Each `<ArticleCard>` = `<Link>` to `localizedPath('/blog/' + article.link)`:
  - Card: `bg-[#100e0d] border border-[#faf6f1]/10 rounded-[10px] overflow-hidden flex flex-col`.
  - Image `aspect-[4/3]` with `group-hover:scale-[1.06]` zoom.
  - Body `p-7`: gold tag (`article.tag`) → H3 (`article.title`, `text-[1.3rem] font-bold leading-[1.28]`) → desc (`/55`) → footer rule `mt-auto pt-[18px] border-t border-[#faf6f1]/10` with `article.displayDate` (left) + `article.author` (right), both `text-[.82rem] text-[#faf6f1]/45`.
  - `StaggerChildren` over the grid.

### 3. Newsletter CTA — `components/blog-v3/NewsletterCTA.tsx` (NEW)
- `<section className="relative py-[150px] overflow-hidden">`, full-bleed `newsletter_cta.background_image` + dark overlay `linear-gradient(180deg,rgba(11,10,10,.82),rgba(11,10,10,.93))`.
- Centered: kicker (`newsletter_cta.kicker`) → H2 (`newsletter_cta.title`, italic on "απευθείας") → lede (`newsletter_cta.subtitle`) → **inline email form**. Reuse the existing `components/NewsletterForm.tsx` (real subscribe via `actions.ts`), restyled dark: pill email input + gold MorphCTA submit. Phone/location line below.
- **Do not** ship the design's mock `onSubmit` — wire to the real `NewsletterForm` action.

---

## Image inventory (`/public/images/blog/`)

Featured + grid images come from `blog.articles[].image` (already set per article). The design references `blog-designing-sound-hospitality.jpg`, `blog-why-luxury-hotels-need-music.jpg`, `blog-music-converts-browsers-buyers.jpg`, `blog-what-does-music-curator-do.jpg`, `blog-master-music-curation-cycle.jpg`, `blog-building-brand-people-can-hear.webp`, `blog-music-shapes-buyer-behavior.jpg`, `blog-spaces-shape-perceived-wait-time.jpg` — use whatever `article.image` already holds; don't hardcode. CTA bg: `/images/homepage/sensear-signature-playlist-service.jpg`.

---

## Notes

- **Newsletter form**: reuse the real `NewsletterForm.tsx` — don't reimplement. This is the one functional element.
- The current page has no CTA section; the v3 design adds the newsletter CTA. Confirm you want it (it's a nice conversion point and reuses existing infra).
- Article count: the design shows 1 featured + 7 grid cards; render whatever `blog.articles[]` contains — don't hardcode 7.
- Mobile: hero stacks (featured card below text); grid → 1 column.
