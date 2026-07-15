# SensEar Contact Page Redesign Specification v3 — Dark Editorial

> **Read [`home-redesign-v3-dark-editorial.md`](./home-redesign-v3-dark-editorial.md) first.** Inherits the full design system. This spec covers only the Contact page.

## Summary

Rebuild `app/[lang]/contact/page.tsx` into the dark editorial treatment. The current page already uses `ScrollReveal`/`StaggerChildren` and reads a full `dict.contact` tree — so this is a **reskin**, with **one hard constraint**: the real `<ContactForm>` (validation, reCAPTCHA, server action) must be preserved. Do NOT reimplement the design file's mock submit.

Design reference: [`SensEar Contact.dc.html`](../SensEar%20Contact.dc.html). Demo route: `/contact-v3` (+ `/en/contact-v3`), branch `redesign/home-v3-dark`.

---

## ⚠ Critical: keep the working form

The design file's form is a **static mock** — `onContactSubmit` just hides the form and shows a success panel. The live site's form is `components/ContactForm.tsx`, which does real validation, reCAPTCHA (`ReCaptchaProvider`, `lib/recaptcha-client.ts`), and submits via `app/actions.ts` / `lib/email.ts`.

**Reskin `ContactForm.tsx`, do not replace it.** Two acceptable approaches:
- **(A, preferred)** Add a `variant="dark"` (alongside the existing `variant="vinyl"`) to `ContactForm.tsx` that swaps the field/label/button classes to the dark treatment below, keeping all submit/validation/reCAPTCHA logic and the existing success/error states untouched.
- **(B)** Wrap the existing form in the dark section shell and override field styling via a scoped CSS block — more fragile; prefer A.

The field set already matches the design exactly (`dict.contact.form`: name, surname, business_name, email, phone, venue + options, interest + options, preferred_call_time + options, message, submit, success states). Reuse those labels verbatim.

---

## Section structure (current → v3)

| # | Current section                          | v3 equivalent          | Background  | Change                                                    |
|---|------------------------------------------|------------------------|-------------|-----------------------------------------------------------|
| 1 | Hero (warm texture, H1 + square img)     | Hero                   | `#0b0a0a`   | Side rail, kicker, italic span, MorphCTA, ATHENS·GR badge |
| 2 | intro + ContactForm (vinyl bg)           | Form                   | `#0e0d0c`   | Dark glassy form card, faint spinning vinyl behind, **same ContactForm** |
| 3 | contact_info (black band, 3 + location)  | Details                | `#0b0a0a`   | 3 bordered cards (phone/email/location) + socials row     |
| 4 | faq (warm, accordion)                    | FAQ                    | `#0e0d0c`   | Dark `<details>` accordion, one-open-at-a-time, gold "+"   |
| — | (none)                                   | —                      | —           | No separate Contact CTA — the form *is* the conversion    |

Order matches; the design merges intro into the Form section header.

---

## Files

```
app/[lang]/contact-v3/page.tsx      NEW — demo
components/contact-v3/
  Hero.tsx
  Details.tsx                       client — 3 cards + socials
  Faq.tsx                           client — accordion (one open at a time)
components/ContactForm.tsx          EDIT — add variant="dark" (keep all logic)
```

Reuse shared primitives. Nav/Footer: option A for the demo.

---

## Dictionary

**No restructuring.** Keep using `dict.contact`:
- `contact.meta.{title,description}`
- `contact.hero.{title,subtitle,background_image,image,image_alt}`
- `contact.intro.{title,subtitle}`
- `contact.form.*` (all field labels + options + success states — already complete)
- `contact.contact_info.{title,phone,email,social,location}` (each with `label`/`note`/`value`)
- `contact.faq.{title,subtitle,items[],read_all_cta}` (`items[]` = `{question, answer}`)

**Amendments** — `<em>` for italic-gold emphasis:

| Key                      | Emphasis word               |
|--------------------------|-----------------------------|
| `contact.hero.title`     | **ανάγκες / needs**         |
| `contact.intro.title`    | **ήχο / sound**             |
| `contact.faq.title`      | wrap a word, or add a short `contact.faq.kicker` heading "Γρήγορες <em>απαντήσεις</em>" |

**New keys**:

```json
"contact": {
  "hero": {
    "side_label": "CONTACT — LET'S TALK SOUND",
    "kicker": "ΕΠΙΚΟΙΝΩΝΙΑ",
    "primary_cta": "Συμπληρώστε τη φόρμα",
    "secondary_cta": "Στοιχεία επικοινωνίας",
    "image_kicker": "ATHENS · GR",
    "image_caption": "Let's design how it sounds."
  },
  "form_section":   { "kicker": "ΞΕΚΙΝΗΣΤΕ ΕΔΩ" },
  "contact_info":   { "kicker": "ΣΤΟΙΧΕΙΑ ΕΠΙΚΟΙΝΩΝΙΑΣ", "heading": "Βρείτε μας <em>όπως σας βολεύει</em>", "follow_label": "ΑΚΟΛΟΥΘΗΣΤΕ ΜΑΣ" },
  "faq":            { "kicker": "ΣΥΧΝΕΣ ΕΡΩΤΗΣΕΙΣ" }
}
```

---

## Section detail

### 1. Hero — `components/contact-v3/Hero.tsx`
Standard dark hero. `min-h-[92vh]`, drift orbs, side rail (`contact.hero.side_label`), kicker → H1 (`contact.hero.title`, italic on "ανάγκες") → subtitle (`/72`) → MorphCTA "Συμπληρώστε τη φόρμα" → `#form` + text link `#details`. Right: `aspect-[1/1]` image `contact.hero.image`, ATHENS·GR / "Let's design how it sounds." overlay, spinning badge.

### 2. Form — inline section in `page.tsx` + reskinned `<ContactForm variant="dark">`
- `<section id="form" className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, one drift orb.
- Centered header `max-w-[760px]`: kicker (`contact.form_section.kicker` "ΞΕΚΙΝΗΣΤΕ ΕΔΩ") → H2 (`contact.intro.title`, italic on "ήχο") → lede (`contact.intro.subtitle`).
- Form wrapper `max-w-[1040px]`, `relative`. Behind the card: a faint spinning vinyl — reuse `/images/contact/vinyl-record-contact-form-bg.webp`, absolutely centered, `760px`, `opacity-[.12]`, `animation: se-spin 60s linear infinite`, `aria-hidden`, `pointer-events:none` (respect reduced-motion).
- Card: `bg-[rgba(15,13,12,.72)] backdrop-blur-[6px] border border-[#faf6f1]/10 rounded-[14px] p-[clamp(28px,4vw,52px)] shadow-[0_40px_90px_-40px_rgba(0,0,0,.7)]`.
- Inside: `<ContactForm variant="dark" labels={dict.contact.form} />`. The dark variant styles:
  - **Field**: `bg-[rgba(250,246,241,.05)] border border-[#faf6f1]/16 rounded-[10px] px-4 py-3.5 text-[#faf6f1] text-[15px]`, placeholder `rgba(250,246,241,.32)`; focus → `border-[rgba(240,189,149,.6)] bg-[rgba(240,189,149,.06)]`.
  - **Label**: `text-xs tracking-[.06em] font-semibold text-[#faf6f1]/66`.
  - **Select option**: `bg-[#141210] text-[#faf6f1]` (needed so native dropdowns aren't white-on-white).
  - **Submit**: the `<MorphCTA>` treatment, full-width.
  - **Layout**: 2-col grid for name/surname, email/phone, venue/interest; full-width for business_name, preferred_call_time, message. (Matches the design + current field set.)
  - **Success/error states**: keep ContactForm's existing ones; just restyle to the dark success panel (gold-outline check, "Ευχαριστούμε!" etc. — copy already in `dict.contact.form.success*`).

### 3. Details — `components/contact-v3/Details.tsx`
- `<section id="details" className="py-[120px] bg-[#0b0a0a] relative overflow-hidden">`, one drift orb.
- Centered header: kicker (`contact_info.kicker`) → H2 (`contact_info.heading`, italic on "όπως σας βολεύει").
- 3-col grid `grid-cols-1 md:grid-cols-3 gap-5`. Each card: `bg-[#0e0d0c] border border-[#faf6f1]/10 rounded-[12px] p-[38px_32px] text-center`. 56px circular gold-outline icon (lucide `Phone`/`Mail`/`MapPin`, `text-[#f0bd95]`, `strokeWidth={1.7}`), then small kicker label (`ΤΗΛΕΦΩΝΟ`/`EMAIL`/`ΤΟΠΟΘΕΣΙΑ` from `contact_info.X.label`), value (phone → `tel:` link, email → mailto, location → text), note (`contact_info.X.note`, `/50`).
  - **Phone/email**: the live site renders these as PNG images (`contact-phone.png`, `contact-email.png`) for scraping protection. Keep that approach if you want parity, or render as real `tel:`/`mailto:` links styled dark — designer's choice; the design shows live text links.
- Socials row below: `follow_label` kicker + 3 circular bordered icon links (FB/IG/LinkedIn — existing URLs), `48px`, hover → gold border + gold icon.

### 4. FAQ — `components/contact-v3/Faq.tsx`
- `<section className="py-[120px] bg-[#0e0d0c] border-t border-[#faf6f1]/8 relative overflow-hidden">`, one drift orb.
- Centered header `max-w-[880px]`: kicker (`faq.kicker`) → H2 (`faq.title`, italic emphasis) → sub (`faq.subtitle`).
- Accordion from `faq.items[]`: dark `<details>` (`bg-[#141210] border border-[#faf6f1]/10 rounded-[12px]`), summary `p-[24px_28px] font-bold text-[1.1rem]` + a gold `+` that rotates 45° when open, body `px-7 pb-[26px] text-[#faf6f1]/62`. **One-open-at-a-time**: on `toggle`, close the others (small `useEffect` in the client component).
- Footer: ghost button `faq.read_all_cta` → `localizedPath('/faq')`.

---

## Image inventory (all in `/public/images/contact/`)

| Spot               | File                                          |
|--------------------|-----------------------------------------------|
| Hero image         | `contact.hero.image` (existing value)         |
| Form vinyl bg      | `vinyl-record-contact-form-bg.webp`           |
| Phone/email (opt)  | `/images/brand/contact-phone.png`, `contact-email.png` |

No new assets.

---

## Notes

- **Form parity is the whole risk on this page.** Everything visual is straightforward; the one thing that must not regress is submission. Test: validation errors, reCAPTCHA gate, server-action success, and the success/reset states — all in the dark variant.
- The design adds `business_name` and `preferred_call_time` fields — both already exist in `dict.contact.form` and (assumed) in `ContactForm.tsx`; verify the component renders all of them before wiring the dark variant.
- No `<FinalCTA>` on this page (current page has none either) — don't add one.
- Mobile: form fields collapse to single column; details cards stack; FAQ stays full-width.

---

## Cross-page wrap-up (all 5 specs)

With Home, About, Services, Industries, Contact specced, the demo branch will hold `/[lang]/(home-v3|about-v3|services-v3|industries-v3|contact-v3)`. Before live cutover, resolve the **two shared decisions** flagged in the home spec for the whole set at once:
1. **Navbar** — refactor `Navbar.tsx` to a dark variant (it's globally mounted by `LocalizedSiteChrome`).
2. **Footer + FinalCTA** — dark variants of `Footer.tsx` and `components/sections/FinalCTA.tsx`, since every v3 page replaces or restyles them.

Doing those two refactors once (variant props + a context the v3 routes set) lets all five pages cut over together cleanly.
