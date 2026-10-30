# Handoff — SensEar SEO / indexing work

> **Replaced (30 Oct 2026):** the current SEO task file is `docs/seo-claude-code-tasks-2026-10-30.md`. This file is kept for history only.

**Session:** 27 Jul → 11 Aug 2026 · **Repo:** `C:\Users\jef\Documents\Antigravity` ·
**Branch at handoff:** `feat/case-study-new-client`
**Companion doc:** `docs/archive/seo-gsc-audit-2026-07-27.md` (full diagnosis, revised 30 Jul)

Read this first, then the audit doc for the reasoning behind any item.

---

## 1. One-paragraph summary

Search Console showed 101 non-indexed pages. ~53 of those were legacy URLs that are correctly
301'd and will never leave the report — a permanent artefact, not a defect. The genuine problems
were: Greek (`/el/*`) was effectively unindexed because Google had judged `/el/` once in March and
never returned; the sitemap's `<lastmod>` was the build timestamp on every URL, so the one signal
that says "this changed" was noise; and a handful of small technical defects. All code fixes shipped
and are live. **`/el/` is now indexed (crawled 4 Aug) and indexed pages went 42 → 51.** The
remaining work is content depth and external links, plus one uncommitted new page.

---

## 2. Verified state as of 11 Aug 2026

### Search Console (pulled live 11 Aug)

| Reason | 27 Jul | 11 Aug | Read |
|---|---:|---:|---|
| **Indexed** | **42** | **51** | ▲ +9 |
| Not indexed (total) | 101 | 97 | ▼ −4 |
| Page with redirect | 37 | 46 | ▲ expected noise, ignore |
| Not found (404) | 11 | 10 | ▼ |
| Redirect error | 3 | 3 | validation **Started** |
| Duplicate without user-selected canonical | 3 | **1** | ▼ −2 |
| Duplicate, Google chose different canonical | 2 | 3 | ▲ minor |
| **Discovered – currently not indexed** | **30** | **19** | ▼ **−11** |
| Crawled – currently not indexed | 13 | 13 | flat |
| Alternative page w/ proper canonical | 2 | 2 | intended |

**The headline:** `https://sensear.music/el/` is **indexed**, last crawled 4 Aug 2026. That was the
predicted unlock. The 19 still at "Discovered – not indexed" are almost entirely Greek: all 8 Greek
blog posts, `/el/services/`, `/el/industries/music-for-restaurants-and-bars/` and similar — all
still `Last crawled = N/A`.

**Sitemaps** — both submitted 30 Jul, both `Success`:

| Sitemap | Last read | Discovered pages |
|---|---|---|
| `/sitemap.xml` | 10 Aug 2026 | 58 |
| `/sitemap-el.xml` | 11 Aug 2026 | 29 |

### Production site (verified live 11 Aug)

Production is running the **30 Jul build**. Everything from that build is confirmed working:

- `robots.txt` advertises both sitemaps ✅
- `/sitemap.xml` 58 URLs, `/sitemap-el.xml` 29 URLs, **9 distinct `<lastmod>` values** (no longer one
  build timestamp) ✅
- `/sitemap-page/` renders the bilingual directory — **27 links to `/el/*`** and the "The site in
  Greek" heading ✅
- Redirects: `/Home`, `/HOME`, `/home` → `/` (200) ✅ · `/Klouvi-Bar` → `/case-studies/` ✅ ·
  `/el/INDUSTRIES/hotels-resorts` → correct target ✅ · `/en/faq` → `/faq/` ✅
- `/EN/faq` → **404 by design.** The `$1`-interpolating rules were deliberately left
  case-sensitive; matching them case-insensitively would 301 into a 404, which is worse. Documented
  in `public/.htaccess`.

### Local `/out` (built 11 Aug 17:17) — **NOT deployed**

- 59 URLs in `sitemap.xml`, 30 in `sitemap-el.xml` (one more than production)
- The extra URL is the new Greek-only page `/el/dorean-axiologisi/`
- Cross-check passed: **every sitemap URL has an `index.html` in `/out`, and every page in `/out`
  is in the sitemap** — zero orphans, zero 404 entries, in both sitemaps
- `/el/dorean-axiologisi/` currently **404s on production** because this build isn't deployed.
  Production is self-consistent (its sitemaps don't list it), so nothing is broken right now.

---

## 3. What shipped (all live except where noted)

| Change | Files | Status |
|---|---|---|
| Real per-route `lastmod` from git commit dates | `lib/route-lastmod.ts` (new), `app/sitemap.ts` | live |
| Shared route list so the two sitemaps can't drift | `lib/sitemap-routes.ts` (new) | live |
| Greek-only sitemap `/sitemap-el.xml` | `app/sitemap-el.xml/route.ts` (new) | live + submitted |
| Both sitemaps in robots.txt | `app/robots.ts` | live |
| Bilingual `/sitemap-page/` (1 → 27 Greek links) | `app/[lang]/sitemap-page/page.tsx`, `dictionaries/en.json`, `dictionaries/el.json` | live |
| `NC` on case-insensitive-safe legacy redirects | `public/.htaccess` | live |
| Line-ending policy | `.gitattributes` (new) | committed |
| Greek-only conversion page + sitemap wiring | `app/[lang]/dorean-axiologisi/`, `lib/sitemap-routes.ts`, `app/sitemap.ts`, `app/sitemap-el.xml/route.ts` | **built, not deployed, not committed** |

Two findings from the first pass turned out to be **stale** — measured against an old `/out`. The
`/en/*` internal links and the duplicate robots meta had already been fixed by the
`claude/copy-refactor` work. Corrected in the audit doc (§2.4, §2.6). One recommendation was
**wrong** and was retracted: "deepen Greek internal linking". Greek internal linking is strong
(21+ Greek links per page, ~30 inlinks per Greek hub). See audit §2.1.

---

## 4. Open items for the next session

### 4.1 Blocking — do these first

1. **Commit `app/[lang]/dorean-axiologisi/page.tsx`.** It is currently **untracked**. Consequence:
   `getRouteLastModified('/dorean-axiologisi')` finds no commit and falls back to
   `FALLBACK_LAST_MODIFIED` (`2026-07-30T00:00:00.000Z`) — that URL's `<lastmod>` is frozen and will
   never move. Self-corrects the moment the file is committed. Verify after committing:
   the entry in `out/sitemap-el.xml` should no longer read `2026-07-30T00:00:00.000Z`.
2. **Run the verification gates locally — they were NOT re-run this session.** The sandbox now times
   out (>43 s) on both. Run in order: `npm run typecheck` (must be 0 errors — note
   `next.config.mjs` sets `typescript.ignoreBuildErrors: true`, so the build will *not* catch TS
   errors), then `npm run lint`, then `npm run build`.
   Also: `tsconfig.tsbuildinfo` was deleted this session (gitignored cache, regenerates on first run).
3. **Link `/el/dorean-axiologisi/` from somewhere.** It currently has **zero internal inlinks** —
   it exists only in the sitemaps. That is precisely the pattern that lands in "Discovered –
   currently not indexed" on this site. Add it to the Greek nav, footer, or the relevant Greek
   service/industry pages before or with the deploy.
4. **Deploy `/out` to Plesk**, then re-submit `/sitemap.xml` and `/sitemap-el.xml` in GSC so the
   59/30 counts register.

### 4.2 Search Console

5. **Request indexing** for the Greek pages still at `Last crawled = N/A` — the 8 Greek blog posts
   plus `/el/services/`. Click-by-click steps are in audit §5. ~10/day quota. Now higher-value than
   before, because `/el/` is indexed and Google is already crawling outward.
6. **Redirect error validation is "Started"** — leave it, check back in a week.
7. **Add a Domain property** for `sensear.music` (consolidates http/https/www/apex reporting).
8. **Do not** chase "Page with redirect" (46) or "Not found" (10). Permanent artefacts. Track
   **indexed count** and **Sitemaps → discovered vs indexed** instead.

### 4.3 Content — the remaining real lever

9. **Expand the five English service pages.** Measured 11 Aug from `/out`: `/services/` 282,
   `/services/event-soundtracks/` 266, `/services/signature-playlists/` 285,
   `/services/audio-upgrades/` 287, `/services/sonic-identity/` 291 — **266–291 words**, off a shared
   template. The weakest pages on the site and the likeliest cause of the residual
   duplicate-canonical flags. Target 700–1,000 words each of genuinely distinct copy. (Greek
   equivalents run slightly longer, 310–360.)
10. **Get 3–5 external links.** Nothing outside the site links to it. This is the ceiling on
    everything else. Greek HORECA press, venue partners, client sites, Greek directories.

### 4.4 Decisions left to JEF

- **Committing.** Uncommitted at handoff, all of it the Greek-only-page work — verified with
  `git status` on 11 Aug:

  | File | State | What changed |
  |---|---|---|
  | `app/[lang]/dorean-axiologisi/` | untracked | the new Greek-only page |
  | `lib/sitemap-routes.ts` | modified | added `GREEK_ONLY_SITEMAP_ROUTES` |
  | `app/sitemap.ts` | modified | emits the Greek-only routes |
  | `app/sitemap-el.xml/route.ts` | modified | same |
  | `app/template.tsx` | modified | skips `PageTransition` on `/dorean-axiologisi` |
  | `app/[lang]/template.tsx` | modified | same |

  It's one coherent changeset — suggest a single commit, e.g.
  `feat: add the Greek-only free-assessment landing page`.
- **`node_modules/@next/swc-linux-x64-gnu@16.1.6`** (~118 MB) was added so Next could run on Linux
  in the sandbox. Additive, gitignored, ignored by Windows builds. Remove if you want the space.
- **`CLAUDE.md` says "NEVER edit `app/sitemap.ts`"** — that rule was waived by JEF on 30 Jul and the
  file has been edited since, by this session and others. **Update or delete the rule**, otherwise
  every future session will stop and ask.

---

## 5. Gotchas for whoever picks this up

- **`/out` is generated — never hand-edit it.** Same for `app/sitemap.ts`'s old never-edit rule
  (now waived, see above). `public/.htaccess` is the source; `out/.htaccess` is a copy made at build.
- **`.next` and FUSE:** aborted builds inside the mounted folder leave 0-byte `.fuse_hidden*` files
  that Linux cannot unlink and that make Next's clean step fail with `EPERM`. Windows deletes them
  fine. If a build fails that way, delete `.next` from Explorer.
- **Sandbox limits:** commands are capped at 45 s and background processes are killed between calls.
  `npm run build`, full `tsc --noEmit` and project-wide `eslint` **cannot** complete there. Dev
  server + targeted file checks work; the build must run on Windows.
- **`node_modules` is a Windows install.** Linux needs `@next/swc-linux-x64-gnu` (already added).
- **Line endings:** `.gitattributes` now normalises to LF. Before it existed, 203 files showed as
  modified when only 5 had real changes. If that ever comes back, check `.gitattributes` first.
- **i18n rule:** every user-facing string lives in `dictionaries/en.json` **and** `el.json`. New keys
  go in both. Last verified: 0 keys removed, 2 added per locale (`sitemap_page.alternate.*`).
- **`app/[lang]/layout.tsx` `generateStaticParams` returns `[{ lang: 'el' }]` only.** English is the
  duplicate `app/*` tree at root. `/en/*` is not generated — it's redirected away in `.htaccess`.
- **`lib/route-lastmod.ts` limitation:** all copy lives in two monolithic dictionary files, so a
  copy-only edit does not move a single route's `lastmod`. Touch that route's `page.tsx` in the same
  commit, or use `LAST_MODIFIED_OVERRIDES` in that file.

---

## 6. Quick verification commands

```bash
# gates (run on Windows — these time out in the sandbox)
npm run typecheck && npm run lint && npm run build

# sitemap sanity on the built output
grep -c '<loc>' out/sitemap.xml          # expect 59 after the dorean page ships
grep -c '<loc>' out/sitemap-el.xml       # expect 30
grep -o '<lastmod>[^<]*' out/sitemap.xml | sort -u | wc -l   # expect >1; 1 means lastmod regressed
grep -i sitemap out/robots.txt           # expect both sitemap lines

# the fallback date should NOT appear once the Greek-only page is committed
grep -c '2026-07-30T00:00:00.000Z' out/sitemap-el.xml   # expect 0

# bilingual sitemap page
grep -o 'href="/el/[^"]*"' out/sitemap-page/index.html | sort -u | wc -l   # expect 27+
```

Live-site spot checks (browser console on `https://sensear.music/`):

```js
await fetch('/Home').then(r => r.url)                 // → https://sensear.music/
await fetch('/el/dorean-axiologisi/').then(r=>r.status) // → 404 until deployed, then 200
```

---

## 7. Source of truth

| What | Where |
|---|---|
| Full diagnosis + reasoning | `docs/archive/seo-gsc-audit-2026-07-27.md` |
| How to request indexing (click-by-click) + deploy checklist | audit doc §5 |
| Why Greek was invisible (and why "internal linking" was the wrong answer) | audit doc §2.1 |
| Appendix of exact GSC URL lists as of 27 Jul | audit doc, Appendix |
| This handoff | `docs/archive/HANDOFF-seo-2026-08-11.md` |

**Confidence notes.** GSC figures in §2 were pulled live on 11 Aug 2026 and are exact. Production
behaviour in §2 was tested live, not inferred. `/out` figures come from reading the built files.
The one thing **not** verified this session is `npm run typecheck` / `npm run lint` on the current
working tree — both timed out in the sandbox. They passed on 30 Jul on that day's tree; the
`dorean-axiologisi` changes since then are unverified by the gates. Treat item 4.1.2 as mandatory.
