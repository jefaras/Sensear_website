# SensEar SEO – Claude Code tasks (30 Oct 2026)

**For:** Claude Code, working in `C:\Users\jef\Documents\Antigravity`
**Written by:** Claude (Cowork), after a full re-check on 30 Oct 2026
**This is the only current SEO task file.** It replaces `docs/archive/HANDOFF-seo-2026-08-11.md` and `docs/archive/seo-gsc-audit-2026-07-27.md` (July–August work), which are kept for history only.

Everything in section 1 was checked live on 30 Oct 2026, not copied from older notes.

---

## 0. Repo state — read before you touch git

| Item | State on 30 Oct |
|---|---|
| Branch | `feat/case-study-new-client` |
| Last commit | `5d50d32` (11 Aug 2026) "content: update Hera case study image" |
| **Stale lock file** | `.git/index.lock`, 0 bytes, dated 11 Aug 2026 14:28 UTC. It blocks `git add` / `git commit`. **Ask JEF, then delete it** before any git write. |
| Live site build | The 11 Aug build (all files in `httpdocs` dated 11 Aug). Last local `out/` is also from 11 Aug. |
| `CLAUDE.md` | Out of date: it names branch `redesign/home-v3-dark`, and it still says "NEVER edit `app/sitemap.ts`" although JEF waived that on 30 Jul. Update it (task T9). |

**Uncommitted work in the tree (do not lose it):**

| Path | State | What it is |
|---|---|---|
| `public/aa5377a82ff974cd792ee8c680f4c3e0.txt` | untracked | IndexNow key file. Added 30 Oct. Content = the key, no newline. |
| `public/.htaccess` | modified | 3 new 301 lines for `music-for-art-museums-and-fashion` (root, `/en/`, `/el/`). Added 30 Oct. The **live** `httpdocs/.htaccess` already has the identical change (verified by SHA-256 of the LF text). |
| `app/[lang]/dorean-axiologisi/page.tsx` | untracked | Greek-only free-assessment landing page (from Aug). Not deployed: `/el/dorean-axiologisi/` returns 404 on live. |
| `lib/sitemap-routes.ts`, `app/sitemap.ts`, `app/sitemap-el.xml/route.ts`, `app/template.tsx`, `app/[lang]/template.tsx`, `components/LocalizedSiteChrome.tsx` | modified | Wiring for the dorean page. |
| `public/images/assessment/` (2.1 MB) | untracked | Images for the dorean page. |
| `public/images/case-studies/Hera-hotel-Acropolis*_orig.jpg` (~1 MB) | untracked | Original photos. **Ask JEF** before committing; they will be deployed if they stay in `public/`. |
| `docs/seo-gsc-audit-2026-07-27.md`, `playwright-report/index.html` | modified | Docs / test output. |

---

## 1. Verified facts (30 Oct 2026)

### Live site — what is fine
- All 58 URLs in `/sitemap.xml` return 200 with no redirect. `/sitemap-el.xml` has 29.
- Every page has a self-canonical, correct hreflang (`en`, `el`, `x-default`), exactly one H1, unique title and unique description.
- `lastmod` comes from real git dates (7 distinct values). **This is correct. Do not "fix" it.**
- Greek internal linking is strong (21+ Greek links per page). **Do not add more**, except for the dorean page (T3).
- Legacy `/en/…`, no-slash and `www` URLs 301 correctly.
- `robots.txt`: search and answer bots allowed; only training bots `ClaudeBot` and `GPTBot` blocked (JEF's choice).
- Backups removed from `httpdocs` (both zip URLs now 404).
- IndexNow key live at `https://sensear.music/aa5377a82ff974cd792ee8c680f4c3e0.txt`. Bing accepted a test ping with HTTP 200 (key validated).

### Live site — what is wrong (code fixes needed)

| # | Problem | Evidence |
|---|---|---|
| A | **Invented street address in schema.** `LocalBusiness` JSON-LD says `streetAddress: "Agias Lavras 19"`, `postalCode: "11471"`. This is not a real SensEar address. An AI coding agent (Kilo Code) added it on 11 Mar 2026 as an audit "S2 fix", with no source. See `claude-code-handoff/sessions/2026-03-12_1552_…md` line ~2046. | `components/JsonLd.tsx` lines 49–57 |
| B | **Share image is SVG.** 30 pages use `/images/brand/sensear-og-image.svg`. Facebook, LinkedIn and X do not show SVG previews. | `app/layout.tsx` lines 53 and 64 |
| C | **3 service H1s end with a colon** in both languages: "Event Soundtracks:", "Sonic Identity:", "Audio Upgrades:" (EL: "Μουσική Εκδηλώσεων:", "Ηχητική ταυτότητα:", "Ακουστική αναβάθμιση:"). The H1 is incomplete on its own; the rest of the line sits outside the H1. Low priority. | `dictionaries/en.json` lines 1891, 1981, 2072; `dictionaries/el.json` lines 1873, 1963, 2054 |
| D | **Service pages are thin.** Main-content words (nav/header/footer removed), measured live 30 Oct: EN `/services/` 229, signature-playlists 247, event-soundtracks 229, sonic-identity 254, audio-upgrades 252. EL 270–321. | live measurement |
| E | **Dorean page has zero internal links.** Only the sitemap and template code reference it. | `grep -rn dorean-axiologisi` |
| F | **Empty `alt=""` on content images.** Bing Site Scan (30 Oct) flags 54 of 58 pages. Most hits: `sensear-logo-color.png` (2 per page), `sensear-signature-playlist-service.jpg`, and the page hero images (`about-hero.jpg`, `*-hero.jpg`, `contact-hero-venue-consultation.jpg`). No `<img>` is missing the attribute; the values are empty. | Bing Site Scan + live check |

**Retracted (not problems):** the "glued H1 words" report. In the rendered page `<br>` gives line breaks, so Google sees separate words.

### Search Console (property `https://sensear.music/`)

| Item | Value |
|---|---|
| Indexed / submitted | **43 of 58** (report last updated 23 Oct). It was 51 on 11 Aug. The drop follows the mistaken hosting suspension of about 21–26 Aug (80–100% failed crawls in Host status). |
| Not indexed (submitted) | 15 = 14 "Discovered – currently not indexed" (13 Greek) + `/el/about/` (Google chose `/about` as canonical; last crawl 30 Jul) |
| Indexing requested | All 15 of those pages (27 Oct and 30 Oct). **Do not request again.** |
| Performance, 29 Jul – 28 Oct | 7 clicks, 528 impressions, CTR 1.3%, avg position 22.8 |
| AI controls | "Search generative AI" = Include (correct) |
| External links | 8, mostly from SensEar's own alias domains |

### Bing Webmaster Tools
- Sitemaps: `/sitemap.xml` (58) and `/sitemap-el.xml` (29) both read successfully on 27 Oct.
- Indexed: 23 URLs, 6 of them old `/en/` URLs (they now redirect; Bing will drop them).
- Backlinks: none. IndexNow report: empty so far (key is validated).
- Site Scan "Oct 2026 full site check" (30 Oct): 58 pages, **0 errors**, 54 warnings, all one issue: images with empty alt text (see 1-F, task T10).

### Hosting (Plesk, subscription `sensear.music`)
- Deploys **add/overwrite** files in `httpdocs`; they do not wipe it (files from July survived the 11 Aug deploy).
- Domain aliases: `sensear.eu`, `sensear.gr`, `sensearmusic.com`, `sensearmusic.eu`, `sensearmusic.gr`. Over **HTTPS all five show a certificate error**. Over HTTP they redirect to sensear.music. (Plesk task, not code.)
- `private/form-config.php` holds the form settings (outside the web root — correct). Never read or print it.

---

## 2. Tasks for Claude Code (in this order)

Follow the verification gates in `CLAUDE.md` for every code step: `npm run typecheck` (zero new errors) → `npm run lint` → `npm run build` → browser check both locales → mobile. i18n rule: every user-facing string in **both** `dictionaries/en.json` and `dictionaries/el.json`. Greek copy rules: no em dashes "—"; natural, longer Greek sentences, not clipped fragments.

### T1 — Remove the invented address from the schema (high)
- File: `components/JsonLd.tsx`, `LocalBusiness` block (lines ~45–58).
- Remove `streetAddress` and `postalCode`. Keep `addressLocality: 'Athens'` and `addressCountry: 'GR'`.
- **Do not add any street address.** JEF's real address is a private home address and must not be published.
- **Opening hours must match the Google Business Profile.** The profile says Mon–Fri 10:00–21:00, Sat 10:00–17:00, Sun closed. The schema says `Mo-Sa 10:00-18:00`. Change the schema to the profile's hours (ask JEF to confirm), or remove `openingHours`.
- Ask JEF to confirm or remove `priceRange: '$$'` (likely added by an AI tool). Telephone `+30-697-699-4212` comes from the original site; keep unless JEF says otherwise.
- Add the Google Business Profile to `sameAs` in both the `Organization` and `LocalBusiness` blocks: `https://maps.google.com/?cid=13226295565397032732`.
- Check: built `out/index.html` JSON-LD has no `streetAddress` / `postalCode`, hours match the profile, `sameAs` includes the Maps URL; Rich Results Test passes.

### T2 — Commit what is already done (high)
1. Ask JEF to approve deleting `.git/index.lock`, then delete it.
2. Commit 1: `seo: add IndexNow key file` → `public/aa5377a82ff974cd792ee8c680f4c3e0.txt`.
3. Commit 2: `seo: 301 old music-for-art-museums-and-fashion URLs` → `public/.htaccess`.
4. Commit 3 (T1): `seo: remove unverified street address from LocalBusiness schema`.
5. The dorean changeset is T3 (commit after its gates pass).
6. Ask JEF about the two `*_orig.jpg` files before adding them.

### T3 — Finish and ship the Greek-only page `/el/dorean-axiologisi/` (high)
- Run the gates on it (never run since 30 Jul — see Aug handoff §4.1).
- Add at least one crawlable internal link to it from Greek pages (Greek nav, Greek footer, or the Greek services / contact pages). Use dictionary keys in both files.
- Commit as one changeset, e.g. `feat: add the Greek-only free-assessment landing page`.
- Check after commit: in `out/sitemap-el.xml` its `<lastmod>` is not `2026-07-30T00:00:00.000Z`.

### T4 — Raster share image (medium)
- Create `public/images/brand/sensear-og-image.jpg` (or `.png`), **1200×630**, from the existing SVG / brand assets.
- Point `app/layout.tsx` (both `openGraph.images` and `twitter.images`) to it. Check other `openGraph` blocks use raster images: `app/[lang]/blog/[slug]/page.tsx`, `components/industry-detail-v3/industry-page.tsx`, `app/[lang]/dorean-axiologisi/page.tsx`.
- Check: no page in `out/` has an `.svg` `og:image`.

### T5 — Complete the 3 service H1s (low)
- Change the 6 dictionary titles in section 1-C so the H1 reads as a full phrase (for example, merge it with the line that follows it). Keep the visual layout. Both languages.

### T6 — Expand the five English service pages + Greek equivalents (medium, needs JEF)
- Target 700–1,000 words of distinct copy per page: a real client scenario, what is delivered, licensing / hardware specifics, how pricing works.
- Draft only. **JEF must approve all copy** before commit. Use real case studies already on the site (e.g. Hera Hotel); invent nothing.

### T7 — IndexNow ping after each deploy (low)
- Add `scripts/indexnow-ping.mjs`: read `out/sitemap.xml` + `out/sitemap-el.xml`, POST the URLs (max 10,000) to `https://api.indexnow.org/IndexNow` with `host: "sensear.music"`, `key: "aa5377a82ff974cd792ee8c680f4c3e0"`, `keyLocation: "https://sensear.music/aa5377a82ff974cd792ee8c680f4c3e0.txt"`.
- Run it manually after a deploy (there is no CI). Expect HTTP 200 or 202.

### T8 — Build and deploy (after T1–T4, with JEF)
- `npm run typecheck && npm run lint && npm run build`, then JEF's usual upload of `out/` to `httpdocs`. **Do not delete files in `httpdocs`.**
- Then tell Claude (Cowork) to: resubmit both sitemaps in Google and Bing, run the IndexNow ping, request indexing for `/el/dorean-axiologisi/`, and verify live.

### T10 — Alt text for content images (low)
- Give the logo a real alt (e.g. "SensEar") unless its link already has an accessible name; then keep `alt=""` only on the duplicate.
- Give hero and service images a short descriptive alt, in both languages (dictionary keys in `en.json` and `el.json`).
- Keep `alt=""` only for purely decorative images.
- Check: re-run Bing Site Scan (Claude Cowork can do it); warnings should drop well below 54.

### T9 — Update `CLAUDE.md` (low, ask JEF)
- Current branch name. Remove or relax the `app/sitemap.ts` rule (waived 30 Jul). Add: "never publish a street address in schema".

---

## 3. Do not do

- Do not request indexing again for the 15 pages already requested.
- Do not chase GSC "Page with redirect" (56) — permanent legacy noise.
- Do not change `lastmod` logic or Greek internal linking (both are correct).
- Do not hand-edit `out/`. `public/.htaccess` is the source of `out/.htaccess`.
- Do not read or print `.env.local` or `private/form-config.php`.
- Do not invent facts (addresses, hours, prices, client names, numbers).

---

## 4. Who does what

| Owner | Tasks |
|---|---|
| **Claude Code** | T1–T7 above, T8 build, T9, T10 |
| **Claude (Cowork)** | Weekly read-only SEO check (scheduled task "SensEar weekly SEO check", Tuesdays 09:38 Athens time, phone notification). After each deploy: resubmit sitemaps, IndexNow ping, request indexing for new pages, live verification. Re-run the Bing Site Scan after T10 is deployed. |
| **JEF** | Approve deleting `.git/index.lock` and the commits. Decide schema details (no street address; hours; price range). Approve service-page copy. Deploy `out/`. Google Business Profile **"SensEar.Music"** (see section 5; Manager access and profile updates done 30 Oct): ask clients for reviews. Ask Alex for SSL certificates for the 5 alias domains (shared hosting has no Let's Encrypt; reminder set for Mon 2 Nov). Get 3–5 real external links (client sites such as Hera Hotel, Greek hospitality press and directories). |

---

## 5. Google Business Profile (checked 30 Oct, corrected)

An earlier version of this file said no profile exists. **That was wrong.** The profile lives on JEF's personal Google account, not on the SensEar admin account.

| Field | Value on 30 Oct |
|---|---|
| Name | SensEar.Music |
| Status | Verified |
| Owner | jefaraz@gmail.com (primary owner); sensearadmin@gmail.com added as Manager on 30 Oct |
| Category | Music management and promotion |
| Location | No address shown (service-area business). Service area: Athens + Decentralized Administration of the Aegean |
| Website | `https://www.sensear.music/` (works, but goes through a `www` → apex redirect) |
| Phone | Missing |
| Hours | Mon–Fri 10:00–21:00, Sat 10:00–17:00, Sun closed |
| Description | Old English text with old service names. Replaced on 30 Oct by a Greek text with the current services (pending review). |
| Social profiles | None |
| Reviews | 0 |
| Maps | `https://maps.google.com/?cid=13226295565397032732` (about 300 views) |

Profile fixes are JEF's (or Claude Cowork's, with JEF's OK). Not code work. Code work is only T1 (hours + `sameAs`).

**Bing Places (30 Oct):** imported from the Google profile with weekly sync, signed in as the SensEar admin Google account. Status: verified, "pending publish" (Bing says 7–12 days). Bing chose the category "Music festivals & organizations".

**Update 30 Oct, afternoon:** JEF added the SensEar admin account (sensearadmin@gmail.com) as **Manager**. Claude (Cowork) then submitted four edits, all "pending review" at Google: website → `https://sensear.music/`; phone → +30 697 699 4212; social profiles → Instagram, LinkedIn, Facebook; description → new **Greek** text (748 characters) with the current four services, approved by JEF.

## 6. Quick checks (browser console on https://sensear.music/)

```js
// schema address must be gone after T1 deploy
JSON.parse([...document.querySelectorAll('script[type="application/ld+json"]')]
  .map(s => s.textContent).find(t => t.includes('LocalBusiness'))).address
// og:image must not be .svg after T4 deploy
document.querySelector('meta[property="og:image"]').content
// dorean page live after T3 deploy
await fetch('/el/dorean-axiologisi/').then(r => r.status)          // 200
// redirect added 30 Oct
await fetch('/music-for-art-museums-and-fashion').then(r => r.url) // …/industries/music-for-art-museums-and-fashion/
```
