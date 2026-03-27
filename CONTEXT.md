# sensear.music — Project Context

## Overview
sensear.music is a bilingual (English + Greek) music curation and sonic branding website built for Sensear Music, based in Athens, Greece. The brand provides bespoke music curation, sonic identity design, signature playlists, event soundtracks, and audio upgrades for hospitality, retail, wellness, events, and cultural spaces.

## Tech Stack
- **Framework:** Next.js 16 with Turbopack (dev) and Webpack (build)
- **React:** React 19 with Server Components (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4 + CSS variables (HSL color system)
- **UI Components:** shadcn/ui (new-york style) + Radix UI primitives
- **Animation:** Motion library (framer-motion successor) + CSS keyframes via tailwindcss-animate
- **Icons:** Lucide React
- **Carousel:** embla-carousel-react
- **Forms:** react-hook-form + zod validation + @hookform/resolvers
- **Email:** nodemailer (server actions)
- **reCAPTCHA:** react-google-recaptcha-v3
- **Testing:** Playwright (E2E)
- **Bundle Analysis:** @next/bundle-analyzer
- **SEO Audit:** squirrelscan

## Fonts
- **Primary (UI + body):** Commissioner (variable weight, Latin + Greek subsets) via next/font/google
- **Display (headings + brand):** Syne (variable weight) via next/font/google
- CSS variables: `--font-commissioner`, `--font-syne`
- Tailwind mapping: `font-sans` → Commissioner, `font-syne` → Syne

## Color System
HSL CSS variables defined in `app/globals.css`:
- `--background: 0 0% 100%` (white)
- `--foreground: 0 0% 3.9%` (near-black)
- `--primary: 0 0% 9%` (dark)
- `--muted: 0 0% 96.1%` (light gray)
- `--accent: 0 0% 96.1%` (light gray)
- Brand aesthetic: warm neutrals, sophisticated gradient backgrounds (rose-gold/silver/pearl tones)

## Architecture
- **Routing:** App Router with `[lang]` dynamic segment for i18n (EN + EL)
- **i18n:** Custom dictionary system with `getDictionary(locale)` loading JSON files from `lib/dictionaries/`
- **Layout:** `app/[lang]/layout.tsx` — root layout with dynamic imports for Navbar and Footer
- **Components:** organized under `components/` with `components/ui/` for shadcn, `components/motion/` for animation, `components/home/` for homepage sections
- **Server Actions:** `app/actions.ts` for contact form submission
- **ISR:** `revalidate = 3600` on homepage for incremental static regeneration

## i18n
- Supported locales: `en`, `el` (Greek)
- Default locale: `en`
- Dictionary files in `lib/dictionaries/en.json` and `lib/dictionaries/el.json`
- All user-facing text comes from dictionaries — never hardcode strings

## Pages
- `/` — Homepage (hero carousel, services, expertise, trusted by, blog)
- `/about` — About page
- `/services` — Services overview
- `/services/sonic-identity` — Sonic Identity service
- `/services/signature-playlists` — Signature Playlists service
- `/services/event-soundtracks` — Event Soundtracks service
- `/services/audio-upgrades` — Audio Upgrades service
- `/industries` — Industries overview
- `/industries/music-for-hotels-and-resorts` — Hotels & Resorts
- `/industries/music-for-restaurants-and-bars` — Restaurants & Bars
- `/industries/music-for-retail-stores` — Retail Stores
- `/industries/music-for-wellness-and-gyms` — Wellness & Gyms
- `/industries/music-for-events-and-experiences` — Events & Experiences
- `/industries/music-for-art-museums-and-fashion` — Art Museums & Fashion
- `/blog` — Blog listing
- `/blog/[slug]` — Blog article
- `/case-studies` — Case studies
- `/contact` — Contact form
- `/faq` — FAQ
- `/privacy` — Privacy policy
- `/terms` — Terms of service
- `/sitemap-page` — HTML sitemap

## Animation Components
Located in `components/motion/`:
- `MotionProvider` — LazyMotion wrapper with domAnimation for tree-shaking
- `ScrollReveal` — scroll-triggered entrance animations via whileInView
- `PageTransition` — AnimatePresence for page transitions
- CSS keyframes in `globals.css`: slideUp, gradient-shift, scroll-left, scroll-bounce

## Brand Voice
- Sophisticated, warm, confident
- Music and sound are described poetically but with business clarity
- Target audience: business owners, brand managers, hospitality directors, event planners
- Key value proposition: "Bespoke music curation that transforms spaces and elevates brand identity"

## Key Files
- `package.json` — dependencies and scripts
- `tailwind.config.ts` — Tailwind + custom theme
- `components.json` — shadcn/ui configuration
- `next.config.mjs` — Next.js configuration (proxy, headers, images)
- `app/globals.css` — global styles + CSS variables + keyframes
- `app/fonts.ts` — font configuration
- `proxy.ts` — Next.js proxy for request header propagation
