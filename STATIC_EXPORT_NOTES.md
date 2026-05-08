# Static Export Notes

## Summary
Produced the first working static export of the site into `out/` using Next.js static export mode.

## What changed and why

### 1. Static export configuration
- Updated [next.config.mjs](next.config.mjs)
  - switched `output` from `standalone` to `export`
  - added `trailingSlash: true` so exported routes become `/path/index.html`
  - added `images.unoptimized: true` so `next/image` works in static export mode
  - commented out unsupported `redirects()` and `headers()` blocks with TODO notes to move them into future `.htaccess` rules

### 2. Removed export blockers from the root layout path detection flow
- Updated [app/layout.tsx](app/layout.tsx)
  - removed `headers()` usage, which blocks static export
  - replaced per-request locale/path detection with a static root layout and shared dictionaries loaded at build time
- Added [components/LocalizedSiteChrome.tsx](components/LocalizedSiteChrome.tsx)
  - client-side wrapper that picks the active locale from `usePathname()` and renders the correct navbar/footer copy for `/` vs `/en/...`
- Updated [components/Footer.tsx](components/Footer.tsx)
  - marked as client-safe because it is now rendered from a client wrapper

### 3. Preserved form markup/styling while removing server-action dependency from visible forms
- Updated [components/ContactForm.tsx](components/ContactForm.tsx)
  - removed import/use of [submitContactForm](app/actions.ts)
  - changed form submit target to `/contact.php`
  - kept existing fields, classes, labels, hidden reCAPTCHA field, and visual structure
  - preserved client-side field state so the UI still looks the same during review
- Updated [components/NewsletterForm.tsx](components/NewsletterForm.tsx)
  - removed import/use of [submitNewsletterForm](app/actions.ts)
  - changed form submit target to `/newsletter.php`
  - kept visual markup and existing fields
- Left [app/actions.ts](app/actions.ts) and [lib/email.ts](lib/email.ts) untouched as reference for the later PHP rewrite

### 4. Filled static param coverage for dynamic routes
- Updated [app/[lang]/layout.tsx](app/[lang]/layout.tsx)
  - added `dynamicParams = false`
  - kept `generateStaticParams()` for the `/en` branch
- Updated [app/[lang]/blog/[slug]/page.tsx](app/[lang]/blog/[slug]/page.tsx)
  - added `dynamicParams = false`
  - added `generateStaticParams()` for all English blog slugs
- Updated [app/blog/[slug]/page.tsx](app/blog/[slug]/page.tsx)
  - added `dynamicParams = false`
  - added `generateStaticParams()` for the Greek alias blog pages

### 5. Metadata route compatibility
- Updated [app/robots.ts](app/robots.ts)
- Updated [app/sitemap.ts](app/sitemap.ts)
  - both now export with `dynamic = 'force-static'`
  - both generate correctly at build time under static export

### 6. Small export cleanup
- Updated [app/[lang]/page.tsx](app/[lang]/page.tsx)
  - removed ISR `revalidate` export, which is not useful in full static export mode
- Updated [app/page.tsx](app/page.tsx)
  - removed re-export of `revalidate`

## Audit findings
- [app/actions.ts](app/actions.ts) and [lib/email.ts](lib/email.ts) are server-only email flow code and were the main blockers for the form components.
- [app/layout.tsx](app/layout.tsx) used `headers()` to read `x-pathname`; this was incompatible with export mode.
- [proxy.ts](proxy.ts) is only there to inject `x-pathname` during dev/runtime. It was left unchanged. Next.js warns that proxy/middleware is ignored for static export, which is expected.
- [server.js](server.js) is a standalone-server entrypoint for a different deployment workflow. It was left unchanged and is not used by the export output.
- The non-localized routes such as [app/about/page.tsx](app/about/page.tsx) are not redirect shims in the current codebase; they are static Greek aliases that render the Greek localized page directly. They export successfully as normal static pages, so no meta-refresh stubs were needed for this first pass.
- [app/robots.ts](app/robots.ts) and [app/sitemap.ts](app/sitemap.ts) do work for static export once forced static at build time.
- No `cookies()`, `next/headers` outside the root layout, `revalidatePath`, route handlers, or `middleware.ts` files were found in active app code.

## Build result
- `npm run build` now succeeds
- `out/` is generated
- verified presence of key output files for Greek + English pages, images, `robots.txt`, and `sitemap.xml`
- local static preview served successfully from `out/`

## Commands to rebuild and preview locally

### Rebuild export
```bash
npm run build
```

### Preview export locally
```bash
npx serve out -l 3000
```

Then open:
- `http://127.0.0.1:3000/`
- `http://127.0.0.1:3000/en/`

## Smoke-tested routes
Confirmed `200` responses on local static preview for:
- `/`
- `/en/`
- `/about/`
- `/en/about/`
- `/services/`
- `/en/services/`
- `/industries/music-for-hotels-and-resorts/`
- `/en/industries/music-for-hotels-and-resorts/`
- `/blog/`
- `/en/blog/`
- `/blog/how-top-hospitality-brands-design-sound/`
- `/en/blog/how-top-hospitality-brands-design-sound/`
- `/contact/`
- `/en/contact/`
- `/faq/`
- `/en/faq/`
- `/robots.txt`
- `/sitemap.xml`

## Things that may differ from production / likely follow-up issues
1. Forms are now static POST forms.
   - Visual markup/styling is preserved.
   - Actual submit success/error behavior from server actions is gone.
   - Until PHP endpoints exist, submitting to `/contact.php` or `/newsletter.php` in local preview will fail or 404.

2. Old redirect behavior is disabled in export preview.
   - The former `redirects()` rules in [next.config.mjs](next.config.mjs) do not run in static export mode.
   - Legacy URLs and search-console cleanup URLs will need `.htaccess` rules in the next phase.

3. Root `<html lang>` is corrected client-side for `/en/...`.
   - This should not create a visible styling difference.
   - It is worth revisiting later if you want perfectly static per-route `lang` attributes without request headers.

4. Proxy-based pathname injection is no longer part of the export flow.
   - Expected for static hosting.

## Next-phase TODOs
- Build PHP equivalents for [app/actions.ts](app/actions.ts) and [lib/email.ts](lib/email.ts)
- Add `.htaccess` rewrites/redirects to replace disabled [redirects()](next.config.mjs) behavior
- Move response header policy from [next.config.mjs](next.config.mjs) into server-level config or `.htaccess`
- Re-test contact/newsletter end-to-end once PHP endpoints exist
- Decide whether to keep Greek alias pages as standalone exported pages or replace them with server-level redirects later
- Revisit root document language handling if SEO/browser-language precision is important in the static workflow
