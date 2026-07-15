# SensEar FAQ Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This spec covers only the FAQ page.

## Summary

Rebuild `app/[lang]/faq/page.tsx` into the dark editorial treatment. The current page renders `faq_page.items[]` through the shared `components/ui/accordion.tsx` (Radix). This is a small **reskin** — keep the accordion behavior, restyle it dark.

Design reference: [`SensEar FAQ.dc.html`](../SensEar%20FAQ.dc.html). Demo route: `/faq-v3` (+ `/en/faq-v3`), branch `redesign/home-v3-dark`.

---

## Section structure (current → v3)

| # | Current section                       | v3 equivalent   | Background  | Change                                                  |
|---|---------------------------------------|-----------------|-------------|---------------------------------------------------------|
| 1 | Hero (warm texture, H1 + square img)  | Hero            | `#0b0a0a`   | Side rail, FAQ kicker, MorphCTA optional, HOW IT WORKS badge |
| 2 | Accordion (warm bg, Radix accordion)  | FAQ accordion   | `#0e0d0c`   | Dark accordion items, gold chevron that rotates open     |
| 3 | `<FinalCTA>`                          | Contact CTA     | image+overlay | Dark full-bleed ContactCTA                             |

Order unchanged. Note the FAQ hero in the design has **no image-side CTA buttons** — just kicker + H1 + subtitle (kept simple); the image panel still shows the HOW IT WORKS caption + badge.

---

## Files

```
app/[lang]/faq-v3/page.tsx        NEW — demo (server component)
components/faq-v3/
  Hero.tsx
  Accordion.tsx                   client — dark accordion (reuse Radix from components/ui/accordion.tsx, restyled), or a native <details> accordion one-open-at-a-time
ContactCTA                        reuse components/home-v3/ContactCTA.tsx
```

The design uses a single-open accordion with a rotating chevron. You can either (a) keep `components/ui/accordion.tsx` (Radix `type="single" collapsible`) and pass dark classes, or (b) use a native `<details>` accordion like the Contact page's FAQ. Prefer **(a)** for consistency with the rest of the app's accordion usage.

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Keep `faq_page`:
- `faq_page.meta.{title,description}`
- `faq_page.hero.{title,subtitle}`
- `faq_page.title` (the accordion section heading)
- `faq_page.items[]` — `{question, answer}`
- `faq_page.cta.{title,subtitle,button}`

**Amendments** — `<em>` italic-gold emphasis:

| Key                  | Emphasis word            |
|----------------------|--------------------------|
| `faq_page.title`     | **απαντημένες / answered** |
| `faq_page.cta.title` | **Ας μιλήσουμε / Let's talk** |

**New keys**:

```json
"faq_page": {
  "hero": {
    "side_label": "SUPPORT — FAQ",
    "kicker": "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ",
    "image_kicker": "HOW IT WORKS",
    "image_caption": "Sound, licensing & service."
  },
  "section_kicker": "FAQ"
}
```

---

## Section detail

### 1. Hero — `components/faq-v3/Hero.tsx`
Standard dark hero, but **text-only left column** (no CTA buttons). `min-h-[92vh]`, drift orbs, side rail (`hero.side_label`), kicker row (the design shows "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ — FAQ" with a hairline between) → H1 (`hero.title`, e.g. "Κατανοώντας πώς λειτουργεί", no italic span needed, or italic a word if natural) → subtitle (`/72`, larger `clamp(1.2rem,2vw,1.5rem)`). Right: `aspect-[1/1]` image `/images/blog/blog-faq-default.jpg`, HOW IT WORKS / "Sound, licensing & service." overlay, spinning badge.

### 2. FAQ accordion — `components/faq-v3/Accordion.tsx`
- `<section className="py-[120px] pb-[130px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, one drift orb.
- Centered header `max-w-[920px]`: kicker (`faq_page.section_kicker` = "FAQ") → H2 (`faq_page.title`, italic on "απαντημένες").
- Accordion from `faq_page.items[]`, single-open. Each item:
  - Container: `bg-[rgba(250,246,241,.04)] border border-[#faf6f1]/10 rounded-[12px] overflow-hidden`.
  - Trigger: full-width button, `flex items-start gap-5 text-left p-[26px_28px]`, question (`text-[1.18rem] font-bold leading-snug flex-1`) + a 30px circular gold-outline chevron chip (lucide `ChevronDown`, `strokeWidth={2.2}`) that **rotates 180°** (the design rotates the chevron; on the Contact page a `+` rotates 45° — either reads as "open"). On open, the chip can fill faint gold (`border-color`/`background` shift).
  - Panel: answer (`text-[1.04rem] leading-[1.7] text-[#faf6f1]/62`, `padding: 0 70px 28px 28px`), expand/collapse via Radix height animation (or `max-height` transition for native `<details>`).
  - `ScrollReveal` per item (`delay = index * 0.06`).

### 3. Contact CTA
Reuse home-v3 ContactCTA. Full-bleed `/images/contact/contact-hero-venue-consultation.jpg` + dark overlay. Copy from `faq_page.cta`: kicker "ΑΣ ΜΙΛΗΣΟΥΜΕ", H2 `cta.title` (italic on "Ας μιλήσουμε"), lede `cta.subtitle`. Primary `<MorphCTA>` `cta.button` → `localizedPath('/contact')`; optional ghost → `localizedPath('/services')` (the design adds "Δείτε τις υπηρεσίες μας"). Phone/location line.

---

## Image inventory

| Spot          | File                                              |
|---------------|---------------------------------------------------|
| Hero image    | `/images/blog/blog-faq-default.jpg`               |
| CTA bg        | `/images/contact/contact-hero-venue-consultation.jpg` |

No new assets.

---

## Notes

- This is the smallest page in the set — essentially hero + accordion + CTA. Good candidate to build right after the home demo to validate the shared primitives (Kicker, MorphCTA, dark accordion, ContactCTA) end-to-end.
- Keep accordion keyboard accessibility (Radix gives it for free; if you go native `<details>`, that's also accessible).
- `<FinalCTA>` stays shared; swap to dark ContactCTA here only.
- Mobile: hero stacks (image below text); accordion is already single-column.
