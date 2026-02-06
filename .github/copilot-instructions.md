Guidance for AI coding agents working on this repo
===============================================

Quick summary
-------------
- This is a Next.js (App Router) TypeScript site using Tailwind CSS, Framer Motion, and Playwright tests.
- Routes are localized under `app/[lang]/*` with locales defined in `lib/i18n.ts` (default `el`, locales `en`/`el`).
- Translation dictionaries are loaded dynamically in `lib/dictionary.ts` via ESM imports.

Key patterns and architecture
-----------------------------
- App Router: pages are server components by default. Files that call client hooks include a "use client" pragma (see `components/Navbar.tsx`).
- Localization: every route uses the `[lang]` param; helpers like `generateStaticParams()` produce locale routes in `app/[lang]/layout.tsx`.
- UI primitives: small, reusable primitives live under `components/ui/` (e.g. `button.tsx`) and a shared `cn()`/`twMerge` helper exists in `lib/utils.ts` (note: `cn` is also duplicated in some components).
- Sections and pages: page-level compositions live under `components/sections/` and `app/[lang]/*/page.tsx` files.

Developer workflows (commands)
-----------------------------
- Start dev server: `npm run dev` (runs `next dev`).
- Build for production: `npm run build` then `npm run start`.
- Lint: `npm run lint`.
- Playwright tests: `npm run test` (uses `@playwright/test`). Use `npm run test:headed` for headed runs and `npm run test:report` to view results.
- SMTP check (manual): `npm run test-email` (runs `tsx test-email.ts`). Ensure `.env.local` contains `SMTP_*` variables before running.

Project-specific conventions
----------------------------
- Two-locale first-class support: default is Greek (`el`). Routes should preserve the leading locale segment (e.g. `/en/about`). Use `Navbar`'s `switchLang()` as a canonical example.
- Prefer server components for pages and data fetching. Move UI interactivity into client components with `"use client"`.
- Translation dictionaries are lazy-imported: use `getDictionary(locale)` from `lib/dictionary.ts` rather than importing JSON directly.
- Small helper files in `lib/` (e.g. `i18n.ts`, `utils.ts`, `email.ts`) centralize cross-cutting behavior.

Integration points & env
------------------------
- Image hosting: external images served from a Supabase bucket — see `next.config.mjs` `images.remotePatterns` for allowed hosts.
- Email: `lib/email.ts` uses `nodemailer`. Required env vars: `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, `SMTP_FROM`, optionally `COMPANY_NAME`.
- Run `test-email.ts` to validate SMTP connectivity (`npm run test-email`).

Notes for edits and PRs
---------------------
- Keep changes minimal and preserve the App Router structure. Avoid moving pages out of `app/[lang]` unless adding a new locale.
- When adding UI primitives, place them in `components/ui/` and follow the `cn()` + Tailwind pattern.
- New runtime scripts or maintenance tasks should be added to `package.json` with clear script names.

Examples to reference
---------------------
- Localization entry: `app/[lang]/layout.tsx`
- Dictionary loader: `lib/dictionary.ts`
- SMTP helper + test runner: `lib/email.ts` and `test-email.ts`
- UI primitive pattern: `components/ui/button.tsx` and `lib/utils.ts`

If something is unclear
-----------------------
Ask for the preferred approach (server vs client) for the specific change, and whether the change must support both locales out-of-the-box.

-- End of file
