# Make English the Default Language on sensear.music

## Goal

Swap the site's default locale from Greek to English:
- English serves at unprefixed root URLs (`/`, `/about/`, `/services/...`).
- Greek moves under the `/el/...` prefix.
- Old `/en/*` URLs 301-redirect to their root equivalents.

## Context (verified in code)

- Static export (`output: 'export'` in `next.config.mjs`) on Apache. `proxy.ts` does NOT run in production; all redirects live in `public/.htaccess`.
- Current architecture: ~22 root wrapper pages under `app/` hardcode `lang: 'el'` and re-export the matching `app/[lang]/...` page. `app/[lang]/layout.tsx` generates only `{ lang: 'en' }` (with `dynamicParams = false`).
- All internal link building funnels through `lib/localized-path.ts` (`getLocalizedPath`, `getPathLocale`, `getGreekPath`, `getAlternatePath`).
- Client-side locale detection: `components/LocalizedSiteChrome.tsx:29` (pathname starts with `/en` → en, else el).
- No hreflang/canonical alternates exist anywhere in metadata today.

## Tasks

### 1. `lib/i18n.ts`
- Change `defaultLocale: 'el'` → `'en'`.

### 2. `lib/localized-path.ts` (core swap — single source of truth for URLs)
- `getLocalizedPath(lang, path)`: invert — `en` returns the unprefixed path (`/`, `/about/`); `el` returns `/el` + path (`/el/`, `/el/about/`).
- `getPathLocale(pathname)`: return `'el'` when pathname is `/el` or starts with `/el/`, otherwise `'en'`.
- `getGreekPath(pathname)`: already strips both `/en` and `/el` prefixes, so its behavior is correct as a "base path" extractor. Rename to `getBasePath` for clarity and update its callers (`getAlternatePath`, plus any direct imports — currently only `Navbar.tsx` uses `getAlternatePath`, not `getGreekPath` directly).
- `getAlternatePath` needs no logic change once the above are inverted.

### 3. Root wrapper pages: `lang: 'el'` → `lang: 'en'`
Change every hardcoded `Promise.resolve({ lang: 'el' ... })` to `'en'` in both the metadata generator call and the page render (22 files):
- `app/page.tsx` (also rename `GreekHomePage` → `EnglishHomePage`)
- `app/about/page.tsx`, `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/case-studies/page.tsx`, `app/contact/page.tsx`, `app/faq/page.tsx`, `app/privacy/page.tsx`, `app/terms/page.tsx`, `app/sitemap-page/page.tsx`
- `app/services/page.tsx` + 4 service subpages
- `app/industries/page.tsx` + 6 industry subpages
- `app/faq-v3/page.tsx`, `app/home-v3/page.tsx`

### 4. `app/[lang]/layout.tsx`
- `generateStaticParams` → `return [{ lang: 'el' }]`.
- Guard → `if ((lang as Locale) !== 'el') notFound()`.
- Rename `EnglishOnlyLayout` → `GreekOnlyLayout`.

### 5. `app/layout.tsx`
- `<html lang="el">` → `<html lang="en">` (line 91). `LocalizedSiteChrome` already syncs `document.documentElement.lang` client-side.

### 6. `components/LocalizedSiteChrome.tsx`
- Line 29: replace the inline `/en` check with `getPathLocale(pathname)` from `lib/localized-path` so detection stays centralized (result: `/el...` → el, else en).

### 7. `public/.htaccess` redirects (critical — production redirect layer)
- **Delete/invert the "Legacy Greek default-locale URLs" block** (lines 7–17): `/el/*` becomes real content and must NOT redirect to root anymore. Keep the legacy-cleanup intents but retarget them *within* `/el/` (e.g. `^el/sonic-identity/?$` → `/el/services/sonic-identity/`, `^el/services/services/([^/]+)` → `/el/services/$1/`, `^el/industries/hotels-resorts` → `/el/industries/music-for-hotels-and-resorts/`, klouvi-bar/beach-house → `/el/case-studies/`).
- **Add a new English block**: specific legacy cleanups first (retarget existing `^en/...` rules to root, e.g. `^en/industries/hotels-resorts/?$` → `/industries/music-for-hotels-and-resorts/`), then generic catch-alls last:
  - `RewriteRule ^en/?$ / [R=301,L]`
  - `RewriteRule ^en/(.+?)/?$ /$1/ [R=301,L,NE]`
- Keep the "Default-locale legacy route cleanup" block (still correct for root paths) and the trailing-slash canonicalization block unchanged.
- Rule order matters: specific rules before catch-alls.

### 8. Playwright tests
- Update all `/en/...` and `/en` URLs to unprefixed root equivalents in `tests/section-layout.spec.ts`, `tests/navbar-scroll-reload.spec.ts`, `tests/example.spec.ts` (in dev/build there is no `.htaccess`, so `/en/*` will 404 after the change).
- Add/adjust any Greek-specific assertions to use `/el/...` where relevant.

### 9. Sweep for stragglers
- `grep` the repo for `'/en`, `"lang: 'el'"`, `=== 'el'`, `=== 'en'` after the changes. The `lang === 'el' ? ... : ...` content conditionals (home-v3, faq-v3, WhoWeAre, Navbar) are param-driven and need no change.
- Verify `app/sitemap.ts` output flips automatically via `getLocalizedPath` (it does — no code change expected). Optionally reorder `locales` to `['en', 'el']` so English entries list first.
- Check `components/JsonLd.tsx` and `components/analytics/GtmPageview.tsx` for any pathname/locale assumptions; update if they infer language from the `/en` prefix.
- Update comment/docblock in `lib/v3-route.ts` mentioning `/en/faq-v3` (logic itself is prefix-agnostic — no code change).
- Update `CONTEXT.md` if it states Greek/`el` specifics that change (it already says default locale is `en` — the code will now match it).

## Validation

1. `npm run build` (webpack static export) completes.
2. Inspect `out/`: root `index.html` + top-level pages are English; `out/el/...` contains the Greek tree; `out/en/` does not exist.
3. Sitemap (`out/sitemap.xml`): English URLs unprefixed, Greek URLs under `/el/`.
4. `npx playwright test` passes.
5. Manual dev-server checks: `/` is English with `<html lang="en">`; `/el/` is Greek; language switcher round-trips `/about/` ↔ `/el/about/` and `/el/` ↔ `/`; navbar/footer links stay within the active locale.
6. Post-deploy: `curl -I https://sensear.music/en/` and `/en/about/` return 301 → root equivalents; `/el/` returns 200.

## Risks / SEO notes

- **Content-language flip on indexed URLs**: root URLs currently indexed as Greek will start serving English; Greek content gets brand-new `/el/*` URLs. This is inherent to the swap and cannot be redirected around — expect a re-indexing period for Greek pages.
- **Recommended follow-up (optional, not blocking)**: add `hreflang` alternates (`en`, `el`, `x-default` → en) via Next `metadata.alternates.languages` in the layouts/pages, since none exist today. This significantly softens the SEO impact of the swap.
- `.htaccess` is the only production redirect layer — if rules are wrong, `/en/*` 404s in production while working locally. Test rules carefully (rule order: specific before catch-all).
- Browser/CDN caches may briefly serve stale Greek HTML at root URLs after deploy.
