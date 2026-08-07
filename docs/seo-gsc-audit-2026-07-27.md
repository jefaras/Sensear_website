# Google Search Console audit — sensear.music (27 Jul 2026)

> ## Change log — 30 Jul 2026
>
> **Shipped in this repo (not yet deployed):**
>
> | Change | Files |
> |---|---|
> | Real per-route `lastmod` from git history | `lib/route-lastmod.ts` (new), `app/sitemap.ts` |
> | Shared route list so the two sitemaps can't drift | `lib/sitemap-routes.ts` (new) |
> | Greek-only sitemap at `/sitemap-el.xml` | `app/sitemap-el.xml/route.ts` (new) |
> | Both sitemaps advertised in robots.txt | `app/robots.ts` |
> | Bilingual `/sitemap-page/` — cross-locale directory | `app/[lang]/sitemap-page/page.tsx`, `dictionaries/en.json`, `dictionaries/el.json` |
> | `NC` on case-sensitive legacy redirects | `public/.htaccess` |
> | Line-ending policy (203 phantom modified files → 5 real) | `.gitattributes` (new) |
>
> **Verified:** `tsc --noEmit` exit 0 · eslint exit 0 on every changed file · dev server renders
> `robots.txt` with both sitemaps, `/sitemap.xml` (58 URLs), `/sitemap-el.xml` (29 URLs, all `/el/`,
> no duplicates, all present in the main sitemap) · `lastmod` resolves to 6 distinct real git dates
> across 17 sampled routes with no fallback hit · dictionary integrity checked leaf-by-leaf against
> `HEAD`: 0 keys removed, exactly 2 added per locale.
>
> **NOT verified — must be run locally:** `npm run build`. The sandbox caps calls at 45s and reaps
> background processes, so the full static export could not complete. **Delete `.next` first** — the
> aborted sandbox builds left two 0-byte `.fuse_hidden*` files in it that Linux can't unlink and that
> would make Next's clean step fail. Windows deletes them fine.
>
> **One sandbox-only side effect:** `node_modules/@next/swc-linux-x64-gnu@16.1.6` was added so Next
> could run on Linux at all (your `node_modules` was installed on Windows). It's additive, gitignored,
> and ignored by your Windows builds — but say the word and I'll remove it.

> **Revised 30 Jul 2026.** Three findings from the first pass were measured against a stale
> `/out` build and have been corrected below: the `/en/*` internal links (§2.4) and the duplicate
> robots meta (§2.6) were already fixed by the `claude/copy-refactor` work; the thin-content
> numbers (§2.2) have been re-measured; and the "deepen Greek internal linking" recommendation was
> **wrong** — Greek internal linking is strong. See §2.1 for the corrected Greek diagnosis.

Property: `https://sensear.music/` (URL-prefix). Sitemap: `/sitemap.xml`, 58 URLs, last read 17 Jul 2026.
**Indexed 42 · Not indexed 101.**

---

## 1. The 101 is not 101 problems

| Reason | Pages | Verdict |
|---|---:|---|
| Page with redirect | 37 | **Working as intended** — legacy URLs, 301s are correct |
| Not found (404) | 11 | **Mostly intended** — dead legacy slugs; 1 real bug (`/Home`) |
| Redirect error | 3 | **Already fixed** — all three now resolve 200; report is stale |
| Alternative page with proper canonical tag | 2 | **Intended** — hreflang pairs |
| Duplicate without user-selected canonical | 3 | Investigate |
| Duplicate, Google chose different canonical | 2 | Investigate |
| Crawled – currently not indexed | 13 | **Real problem** |
| Discovered – currently not indexed | 30 | **Real problem** |

**53 of the 101 are noise you cannot delete.** GSC keeps every URL it has ever seen. A correctly
301'd old URL is permanently filed under "Page with redirect". That count will never reach zero and
should not be a target.

**~48 are worth acting on**, and they cluster into two things: Greek is effectively unindexed, and
Google is choosing not to index thin pages.

---

## 2. What is actually broken

### 2.1 The Greek site is not in the index

- `https://sensear.music/el/` — the Greek homepage — is **Crawled, currently not indexed**
  (last crawled 22 Mar 2026, never revisited).
- **20 of the 30 "Discovered – currently not indexed" URLs are `/el/*`**, all with
  **Last crawled = N/A** — Google has known about them since the sitemap was submitted and has
  never fetched them once.
- Greek content is genuinely translated (verified: `/el/*` pages are 85–90% Greek characters),
  so this is not a duplicate-content problem. It's a crawl-priority problem.

**Ruled out — internal linking is not the cause.** Link-graph analysis of the current build:

- Every Greek page renders a full Greek nav and footer in the static HTML — 21 Greek-to-Greek links
  on a typical page, 24 on `/el/`, 29 on `/el/blog/` and `/el/sitemap-page/`.
- Every Greek hub page receives **30 internal inlinks**; Greek blog posts receive 3–4.
- Nothing is client-side-only or JS-gated.

That is a healthy internal graph. The Greek section is well-connected *internally* — it's the
**bridge into it that's thin**: exactly one crawlable link per English page (the hreflang language
switcher), and the page that link lands on (`/el/`) is itself not indexed.

**So the actual causes are, in order of weight:**

1. **Google is judging a version of the site that no longer exists.** It last fetched `/el/` on
   22 Mar 2026 and declined it. The copy refactor that rewrote the Greek pages landed in the last
   two weeks. Googlebot has never seen the current content and has no trigger to re-fetch.
2. **`lastmod` was untrustworthy** (§2.3) — the one signal that would have said "this changed,
   re-crawl it" was noise on every build. Fixed 30 Jul.
3. **Crawl demand is low and was being spent elsewhere** — ~51 legacy URLs re-crawled repeatedly on
   a 5-month-old domain with minimal external authority.
4. **Zero external links point at any `/el/` URL.** Nothing outside the site vouches for the Greek
   section, so Google has no independent reason to prioritise it.

### 2.2 Thin content across the commercial pages

Re-measured 30 Jul against the current build (median across all 58 pages: **408 words**):

| Page group | Words (was, 1st pass) | Words (now) |
|---|---|---|
| FAQ (en / el) | 131 / 133 | **519 / 479** ✅ fixed |
| Service detail pages | 224–325 | 267–360 |
| Industry detail pages | 282–455 | 284–447 |
| `/services/`, `/industries/` hubs | 267 / 381 | 282 / 411 |
| Homepage (en / el) | 492 / 587 | 489 / 559 |
| Blog posts | 392–966 | 395–917 |

The FAQ rewrite worked. **The service pages are still the weak spot** — five pages at 267–360 words
reading off the same template. On a ~5-month-old domain with little external authority,
this is the standard profile for "Crawled/Discovered – currently not indexed": Google fetched it,
judged it not worth an index slot, and deprioritised the rest of the section.

Note `/services/` and `/services/audio-upgrades/` also show up under **Duplicate without
user-selected canonical** despite having correct self-referencing canonicals — that's Google
saying the four service pages read as near-identical templates, not that the tag is missing.

### 2.3 Sitemap `lastModified` is meaningless — FIXED 30 Jul

`app/sitemap.ts` set `lastModified: new Date()` for all 58 URLs — every build stamped every URL
with the build time. Google detects that the dates don't correlate with real content change and
stops trusting `<lastmod>` for the whole site, which further slows recrawl.

**Fixed:** new `lib/route-lastmod.ts` derives each route's date from the last git commit touching
its page component (`app/<route>/page.tsx` + `app/[lang]/<route>/page.tsx`), with a
`FALLBACK_LAST_MODIFIED` constant for builds without `.git` and a `LAST_MODIFIED_OVERRIDES` escape
hatch. The property that matters is **stability across rebuilds**, not precision. Verified output:
6 distinct real dates across 17 sampled routes, no fallback hit.

Known limitation, documented in the file: all copy lives in monolithic `dictionaries/en.json` /
`el.json`, so a copy-only edit won't move one route's date. Touch that route's `page.tsx` in the
same commit, or add an override.

### 2.4 Internal links to redirecting `/en/*` URLs — ALREADY FIXED

The first pass found 13 such links. They came from a stale `/out` build. The current build
(rebuilt 30 Jul 12:33 from `claude/copy-refactor`) has **zero** `/en/` links, and a grep across
`app/`, `components/`, `lib/` and `dictionaries/` finds none in source either. No action needed.

### 2.5 `/Home` → 301 → 404 chain — FIXED 30 Jul

`public/.htaccess` had `RewriteRule ^home/?$ / [R=301,L]` — case-sensitive. `/Home` missed it,
fell through to the trailing-slash rule, became `/Home/`, and 404'd. It's one of the 11 404s.

**Fixed:** added `NC` to the legacy rules whose destination is a hardcoded lowercase path.
Deliberately **not** applied to rules that interpolate a captured segment (`$1`) into the
destination — matching `/EN/Faq` case-insensitively would rewrite it to `/Faq/`, which 404s on a
case-sensitive filesystem. A 301 into a 404 is worse than a direct 404. Rationale is commented in
the file.

`/out/.htaccess` is regenerated from `public/.htaccess` on build and was not hand-edited.

### 2.6 `404.html` emits two conflicting robots meta tags — ALREADY FIXED

The first pass saw both `noindex` and `index, follow` on `404.html` in a stale build. The current
build emits a single robots meta. No action needed.

---

## 3. What to do, in order

### Code fixes — status

1. ~~Fix the `/en/*` internal links~~ — **already fixed** by the copy refactor (§2.4).
2. **`lastModified`** — **done 30 Jul.** `lib/route-lastmod.ts` (new) + `app/sitemap.ts`.
   Typecheck ✅, lint ✅, helper output verified. `npm run build` **still needs to be run locally**
   (it can't complete in the sandbox) before this ships.
3. **`/home` case-sensitivity** — **done 30 Jul.** `public/.htaccess`, `NC` on fixed-destination
   legacy rules (§2.5).
4. ~~Remove the duplicate robots meta~~ — **already fixed** (§2.6).

**Still open in code:** nothing blocking. The one remaining content-side code task is expanding the
five service pages (item 9).

### Now — Search Console housekeeping

5. **Add a Domain property** (`sensear.music`) alongside the URL-prefix one. Consolidates
   http/https/www/apex reporting and gives cleaner data.
6. **Click VALIDATE FIX on "Redirect error"** (3 URLs). All three already resolve 200 — this just
   clears them.
7. **Do not** submit removals or chase the "Page with redirect" / "Not found" counts. Leave them.
8. **Request indexing** manually for `https://sensear.music/el/` and 3–4 top Greek pages via URL
   Inspection. It's rate-limited to ~10/day; prioritise the Greek homepage, `/el/services/`,
   `/el/industries/`, `/el/blog/`.

### Getting Greek crawled — the specific plan

Greek is a **crawl-demand** problem, not a technical one. Everything on-page is already correct:
translated content, self-referencing canonicals, reciprocal hreflang, a full Greek nav, ~30 internal
inlinks per Greek hub page. The blocker is that Google last looked at `/el/` on **22 Mar 2026**,
declined it, and has had no reason to return — while the content it judged has since been rewritten.

In order of leverage:

9. **Deploy the `lastmod` fix, then re-submit the sitemap.** This is the mechanical trigger. Until
   now `<lastmod>` was build-noise, so re-submitting told Google nothing. After the fix, the 29 Greek
   URLs carry honest recent dates for the first time — a real "this changed" signal. Re-submit
   `/sitemap.xml` in GSC → Sitemaps after the deploy.
10. **Greek-only sitemap** (`/sitemap-el.xml`) — **built 30 Jul.** After deploy, submit it in
    GSC → Sitemaps → "Add a new sitemap" → enter `sitemap-el.xml` → SUBMIT. Two reasons: submitting a
    new sitemap triggers a fetch, and GSC reports indexing stats *per sitemap*, so you get a
    Greek-specific number you can track instead of inferring it. Keep `/sitemap.xml` submitted too.
11. **Request indexing by hand for the Greek entry points.** See §5 for the click-by-click steps.
    Order: `/el/`, `/el/services/`, `/el/industries/`, `/el/blog/`, `/el/about/`, `/el/faq/`.
    This is the only lever that directly forces a fetch. Getting `/el/` indexed is the unlock — the
    rest of the section is one click from it. Do **not** re-request the same URL repeatedly; it has
    no effect and burns the daily quota.
12. **Bilingual `/sitemap-page/`** — **built 30 Jul.** The page now renders a second directory grid
    for the alternate locale, so the English sitemap page links to 26 Greek URLs (and vice versa)
    instead of just `/el/sitemap-page/`. Coverage is 26 of 29: `/el/privacy/`, `/el/terms/` and
    `/el/sitemap-page/` are not in the directory sections — they're footer links, one hop from any
    page now linked, so this was left alone rather than restructuring the existing "Main Pages" card.
13. **Point Greek-facing external profiles at `/el/`, not `/`** — **done by JEF, 30 Jul.**
    Google Business Profile, Instagram, Facebook, LinkedIn, Greek directory listings.
14. **Get 3–5 external links to Greek URLs.** Greek HORECA/hospitality press, venue partners, client
    sites crediting SensEar, Greek business directories. This is the real unlock for the whole
    domain, not just Greek — nothing currently vouches for the site from outside.

### Also worth doing — content

15. **Expand the five service pages.** Still 267–360 words off a shared template (§2.2). Target
    700–1,000 words of distinct copy each: a real client scenario, what's actually delivered,
    licensing/hardware specifics, pricing framing. This is the remaining on-page weak spot and the
    likeliest reason `/services/` and `/services/audio-upgrades/` show as duplicates.
16. ~~Rewrite the FAQ pages~~ — **done**, 131 → 519 words with FAQPage structured data.

---

## 4. Realistic expectation

- "Not indexed" will stay near 100 (the 53 legacy URLs are permanent) — **stop tracking that number**.
- **Track instead:** indexed count (42 today) and Sitemap → "Discovered pages vs indexed".
  Target 55+ of 58 sitemap URLs indexed.
- Once `/el/` is re-crawled and indexed, the rest of the Greek section typically follows over
  2–6 weeks — Google crawls outward from an indexed entry point, and the internal graph is already
  in place to carry it.
- If `/el/` is re-crawled and *still* declined, the problem is site-level authority (item 14), not
  anything on the page. That's the signal to stop optimising and start earning links.

---

## 5. How to request indexing in Search Console

Do this **after** the deploy, not before — you want Googlebot to fetch the new version.

1. Open Search Console with the `https://sensear.music/` property selected.
2. Paste the full URL into the **search bar at the very top** ("Inspect any URL in
   'https://sensear.music/'") and press Enter. Start with `https://sensear.music/el/`.
   — Note: this top bar *is* the URL Inspection tool. The "URL inspection" item in the left sidebar
   opens the same thing.
3. Wait for "Retrieving data from Google index" to finish. You'll see either
   *"URL is not on Google"* or *"URL is on Google"*.
4. Click **REQUEST INDEXING** (top right of the result panel).
5. It runs a live test for ~30–60 seconds, then confirms *"Indexing requested"*. The URL is added to
   a priority crawl queue.
6. Repeat for the next URL. **Quota is roughly 10 per property per day** — if you hit it you'll see
   *"Quota exceeded"*; just continue the next day.

Order to work through, highest value first:

| # | URL | Why |
|---|---|---|
| 1 | `https://sensear.music/el/` | The entry point. Everything else is one click from it. |
| 2 | `https://sensear.music/el/services/` | Greek commercial hub |
| 3 | `https://sensear.music/el/industries/` | Greek commercial hub |
| 4 | `https://sensear.music/el/blog/` | Links all 8 Greek posts |
| 5 | `https://sensear.music/el/about/` | Trust page |
| 6 | `https://sensear.music/el/faq/` | Already crawled but declined — worth a re-look post-rewrite |
| 7 | `https://sensear.music/el/case-studies/` | |
| 8 | `https://sensear.music/el/contact/` | Already indexed — skip if so |

What to expect: requesting indexing **guarantees a crawl, not an index**. Google will fetch within
hours to a few days; whether it indexes depends on the content judgement. If `/el/` shows
"Crawled – currently not indexed" again a week later, that's the signal the blocker is site
authority, not the page — go to item 14 (external links).

Do **not**: request the same URL twice, request all 29 Greek URLs (waste of quota — internal links
carry the rest), or use the Removals tool on anything.

### Deploy checklist for the 30 Jul changes

1. `rm -rf .next` (or delete the folder in Explorer) — see the change-log note about `.fuse_hidden*`.
2. `npm run typecheck` → expect 0 errors.
3. `npm run lint`.
4. `npm run build` → static export must succeed.
5. Confirm in `/out`: `sitemap.xml` has 58 `<loc>`, `sitemap-el.xml` exists with 29 `<loc>` all under
   `/el/`, `robots.txt` lists both sitemaps, and `<lastmod>` values differ per route (not all the
   same timestamp).
6. Open `/sitemap-page/` and `/el/sitemap-page/` in a browser: two directory grids on each, second
   one in the other language, zero console errors, check mobile width.
7. Deploy, then: re-submit `/sitemap.xml`, submit `/sitemap-el.xml`, VALIDATE FIX on "Redirect error",
   then work the request-indexing list above.

---

## Appendix — key URL lists pulled from GSC

**Discovered – currently not indexed (30, all Last crawled = N/A):**
`/about/`, `/blog/background-music-shapes-customer-behavior/`,
`/blog/how-top-hospitality-brands-design-sound/`, `/industries/`,
`/industries/music-for-art-museums-and-fashion/`, `/industries/music-for-restaurants-and-bars/`,
`/industries/music-for-wellness-and-gyms/`, `/services/event-soundtracks/`, plus 22 `/el/*` URLs
(`/el/about/`, `/el/blog/` + 7 Greek posts, `/el/case-studies/`, `/el/industries/` + 3 detail pages,
`/el/services/` + 4 detail pages, `/el/sitemap-page/`, `/el/terms/`).

**Crawled – currently not indexed (13):** `/el/faq/`, `/el/terms`, `/el/`, and ten `/en/*` legacy
forms (`/en/about`, `/en/privacy`, `/en/services`, `/en/industries`, `/en/services/sonic-identity`,
`/en/services/signature-playlists`, `/en/services/audio-upgrades`,
`/en/industries/music-for-restaurants-and-bars`, `/en/blog/background-music-shapes-customer-behavior`,
`/en/industries/hotels-resorts`).

**Duplicate without user-selected canonical (3):** `/en/`, `/services/`, `/services/audio-upgrades/`.

**Duplicate, Google chose different canonical (2):** `/el/industries/music-for-hotels-and-resorts/`,
`/el/industries/music-for-art-museums-and-fashion`.

**Redirect error (3, all now resolve 200):** `/blog/music-curation-cycle-venues`, `/klouvi-bar`,
`/el/industries/hotels-resorts`.

**Not found (11):** `/Home`, `/el/industries/music-for-wellness-and-gyms`,
`/music-for-art-museums-and-fashion`, `/en/industries/events-experiences`,
`/en/industries/restaurants-bars`, `/el/industries/retail-stores`,
`/el/industries/art-museums-fashion`, `/en/industries/art-museums-fashion`,
`/en/industries/retail-stores`, `/en/industries/wellness-gyms`, +1.

**Redirect behaviour verified live** — all sampled legacy URLs resolve in a single 301 hop to the
correct canonical target. `.htaccess` is deployed and working.
