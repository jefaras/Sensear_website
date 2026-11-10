# SensEar SEO – Claude Code tasks (30 Oct 2026)

**For:** Claude Code, working in `C:\Users\jef\Documents\Antigravity`
**Written by:** Claude (Cowork), after a full re-check on 30 Oct 2026
**This is the only current SEO task file.** It replaces `docs/archive/HANDOFF-seo-2026-08-11.md` and `docs/archive/seo-gsc-audit-2026-07-27.md` (July–August work), which are kept for history only.

Everything in section 1 was checked live on 30 Oct 2026, not copied from older notes.

---

## 0. Status — read before you touch git

**Done 30 Oct 2026:** T1, T2, T3, T8, T9. The 30 Oct build is deployed and verified live.
Post-deploy steps are also done: IndexNow ping sent 59 URLs; `/sitemap.xml` and
`/sitemap-el.xml` resubmitted in Google Search Console and Bing Webmaster Tools; indexing
requested for `/el/dorean-axiologisi/`.

**Deployed and verified live 30 Oct (second upload):** T4, T5. All 59 pages 200, all 93 images load.

**Deployed and verified live by Cowork (third upload):** Facebook page in the schema `sameAs`; JPG share
image for the blog post `building-brand-people-can-hear` (its page image is WebP); T6 Signature Playlists.

**Deployed and verified live by Cowork (6 Nov):** the upload of 6 Nov (about 18:30 UTC), which carried every item that was listed here as committed, not yet deployed. Verified on the live site: `/sitemap.xml` has 61 URLs, 22 of them with `lastmod` 2026-11-06 (the seven T12 routes plus `/case-studies`, `/contact`, `/about` and `/services/event-soundtracks`, EN + EL), and `/sitemap-el.xml` has 31; all 61 sitemap pages return 200. T12: the hub and the six industry pages carry the new copy (the Greek check phrases are present, the old «Μία βραδιά, όχι κάθε μέρα», «κάθεται κάτω από τη συζήτηση» and «πίσω από το έργο» are gone, no "Result:" claims on the hub); on `/el/industries/music-for-art-museums-and-fashion/` (desktop) the inline service links are gold at rest and show an underline on hover. Greek fixes beyond T12 (`688d977`) live on `/el/case-studies/`, `/el/services/event-soundtracks/`, `/el/contact/` and `/el/about/`. Signature Playlists `lastmod` = 2026-10-30. "Usually within 7 to 10 days" on 20 pages, no "four days" left anywhere. T6 Audio Upgrades, Event Soundtracks (Levantis), Sonic Identity and the services hub carry the new copy. T11: all 16 blog pages share a 1200×630 JPG. The reCAPTCHA line reads «Προστατεύεται από reCAPTCHA. Απόρρητο και Όροι» on Greek pages, with no em dash. The zig-zag on Signature Playlists runs from the left (case photo left, then right, left, right). The home statement's first sentence reads "…with clients across Greece" and «…με έδρα την Αθήνα και πελάτες σε όλη την Ελλάδα». Post-deploy: both sitemaps resubmitted in Google Search Console (read 6 Nov, Success, 61 / 31) and in Bing Webmaster Tools (submitted 6 Nov, Processing); IndexNow POST to api.indexnow.org with all 61 URLs, HTTP 200. No per-URL indexing requests.

**Deployed and verified live by Cowork (10 Nov):** the upload of 10 Nov (built from `3a5c65c`), carrying T13, the new post `sonic-seasoning-how-sound-changes-taste`, T14 and the home/footer changes (`873a8c3`, `f70603c`). Verified on the live site: `/sitemap.xml` has 63 URLs and `/sitemap-el.xml` 32 (both files dated 9 Nov 23:01 UTC); all 63 return 200. `lastmod` matches on all 32 checked routes: 2026-11-10 on `/`, `/contact/`, `/about/`, `/faq/`, `/sitemap-page/`, `/services/audio-upgrades/`; 2026-11-09 on `/blog/`, `sonic-seasoning-how-sound-changes-taste`, `background-music-shapes-customer-behavior`, `service-environment-shapes-wait-time`; 2026-11-06 on the other six articles (all EN + EL). `/home-v2/` returns 404. Metadata: og:description equals the meta description on all 63 pages; og:title equals the <title> on 30 pages, including `/about/` and `/el/services/`, but on 32 pages og:title lacks the " | SensEar" suffix of the <title> (for example `/services/experience-design/`, the six industry pages and the blog articles, EN + EL), and `/el/dorean-axiologisi/` has its own og:title («Η μουσική του χώρου σας είναι η σωστή;»); no og:url points to the home page except on `/`; "Bespoke music curation and sonic branding" appears nowhere. The home description, the `/el/` title and description, the `/contact/`, `/el/faq/` and `/el/sitemap-page/` descriptions and the Organization description match T14; LocalBusiness keeps only `addressLocality` and `addressCountry`, no `streetAddress` anywhere. Journal: `/el/blog/` H1 renders "The Curation Journal" (with a line break before "Journal"); `/el/blog/sonic-seasoning-how-sound-changes-taste/` subtitle starts «Η μουσική μπορεί να κάνει ένα επιδόρπιο να φαίνεται πιο γλυκό» and the byline is «Ομάδα SensEar»; `/el/blog/music-curation-cycle-venues/` and `/el/blog/background-music-shapes-customer-behavior/` show no "<strong>", no «Πηγή 1» and no "•"; `/el/blog/service-environment-shapes-wait-time/` contains «Το πώς βιώνει κανείς την αναμονή μετρά όσο και το πόσο κρατά» and the «playlists που ταιριάζουν…» link goes to `/el/services/signature-playlists/`; `/blog/what-exactly-does-music-curator-do/` H1 is "What exactly does a music curator do?" with no "data-driven" and no "KPIs"; on all 18 article pages the "See all articles" / «Δείτε όλα τα άρθρα» button goes to `/blog/` or `/el/blog/`; no "Research Team" anywhere in the journal. Post-deploy: both sitemaps resubmitted in Google Search Console (submitted and read 10 Nov, Success, 63 / 32) and in Bing Webmaster Tools (resubmitted, status Processing); IndexNow POST to api.indexnow.org with all 63 URLs, HTTP 200. No per-URL indexing requests.

**Deployed and verified live by Cowork (10 Nov, second upload):** `848be49` and `fc24f7d` (`out/` built from `fc24f7d`). Verified on the live site: `/sitemap.xml` 63 URLs and `/sitemap-el.xml` 32, all 63 return 200. og:title and twitter:title equal the `<title>` (with " | SensEar") on 62 of 63 pages; the one exception is `/el/dorean-axiologisi/`, which keeps «Η μουσική του χώρου σας είναι η σωστή;» by design. Spot checks: `/blog/music-curation-cycle-venues/` = "The music curation cycle | SensEar"; `/el/industries/music-for-hotels-and-resorts/` = «Μουσική για ξενοδοχεία και θέρετρα | SensEar»; `/services/experience-design/` = "Experience Design for hotels and venues | SensEar". Share images unchanged: all og:image files return 200, and all 18 blog article pages (EN + EL) still use their `-share.jpg`. Copy: `/el/sitemap-page/` contains «Όλες οι σελίδες της SensEar σε ένα σημείο» and «Γράψτε μας ή δείτε αν η απάντηση υπάρχει ήδη στις συχνές ερωτήσεις.», with no «Μην ανησυχείτε» and no «του SensEar»; `/sitemap-page/` contains "Journal articles"; the source of `/` contains "Playlists and DJ sets for one event" and no "Bespoke"; the source of `/el/` contains «Playlists και DJ sets για μία εκδήλωση». IndexNow POST to api.indexnow.org with all 63 URLs: HTTP 200. No sitemap resubmission and no per-URL indexing requests.

**Committed, not yet deployed:** nothing.

**Still to do (overview by Cowork, 10 Nov).** The copy strategy ran in two rounds: a full rewrite of the
whole site, 28 Jul to 4 Aug ("decks" 1 to 4), and a deeper SEO round with JEF's facts, 30 Oct to 10 Nov
(T6, T12, T13, T14). Done in both rounds and live: services hub, the four service pages, Experience Design,
industries hub and six industry pages, journal hub and articles, metadata and dead-key cleanup. Left:
1. Case studies (EN + EL): second round (brief, scope, what was done, client words, listen link first).
   Only the Greek Levantis and Hera lines changed in Nov.
2. About (EN + EL): second round. Google treats `/el/about/` as a duplicate of `/about`.
3. Contact and FAQ (EN + EL): small second round. Only one Greek FAQ question and the metadata changed in Nov.
4. Home: no second round needed for now (layout, first sentence and metadata done in Nov).
5. Section 2 headings of T6, T11, T12, T13 and T14 still say "not yet deployed"; all of them are live.
6. ~~og:title on 32 pages lacks the " | SensEar" suffix that the `<title>` has.~~ DONE 10 Nov (`fc24f7d`, JEF
   chose consistency): og:title and twitter:title now equal the `<title>` on every page; `/el/dorean-axiologisi/`
   keeps its own og:title by design. Checked on the build: 63 of 63 pages, 0 mismatches. Live (verified by Cowork 10 Nov).
7. Outside the code: SSL for the 5 alias domains (waiting for Alex); licence check for the Sonic Identity
   hero photo (JEF); Bing Places listing not visible on Bing yet (10 Nov), booking link saved in the Google
   Business Profile but no booking button shown yet.
8. Separate work: the 4 new blog articles in draft (project "SensEar Website/SEO").

**Open:** nothing in code. Waiting for JEF's upload of `out/` (`848be49`) and Cowork's post-deploy checks. T14 done 10 Nov,
T13 done 9 Nov, T12 done 6 Nov (deployed and verified live 6 Nov), T11 done 3 Nov.
**Closed:** T10 (option A, see T10). T7 is dropped: Claude (Cowork) sends the IndexNow ping after each deploy.

| Item | State on 30 Oct (after deploy) |
|---|---|
| Branch | `feat/case-study-new-client`, pushed to origin |
| Commits from the 30 Oct session | `a83f3c3` IndexNow key · `ae88eca` art-museums redirects · `6fe2380` docs archive + CLAUDE.md · `df429ed` dorean landing page · `11885c4` schema address/hours fix |
| `.git/index.lock` | Removed (approved by JEF) |
| Hera `*_orig.jpg` and the 2.1 MB dorean hero PNG | Moved to `_originals/` (git-ignored, outside `public/`, never deployed) |
| Old SEO docs | Moved to `docs/archive/` |
| `CLAUDE.md` | Updated (T9) |

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
| A | **(Fixed 30 Oct, T1.)** **Invented street address in schema.** `LocalBusiness` JSON-LD says `streetAddress: "Agias Lavras 19"`, `postalCode: "11471"`. This is not a real SensEar address. An AI coding agent (Kilo Code) added it on 11 Mar 2026 as an audit "S2 fix", with no source. See `claude-code-handoff/sessions/2026-03-12_1552_…md` line ~2046. | `components/JsonLd.tsx` lines 49–57 |
| B | **Share image is SVG.** 30 pages use `/images/brand/sensear-og-image.svg`. Facebook, LinkedIn and X do not show SVG previews. | `app/layout.tsx` lines 53 and 64 |
| C | **3 service H1s end with a colon** in both languages: "Event Soundtracks:", "Sonic Identity:", "Audio Upgrades:" (EL: "Μουσική Εκδηλώσεων:", "Ηχητική ταυτότητα:", "Ακουστική αναβάθμιση:"). The H1 is incomplete on its own; the rest of the line sits outside the H1. Low priority. | `dictionaries/en.json` lines 1891, 1981, 2072; `dictionaries/el.json` lines 1873, 1963, 2054 |
| D | **Service pages are thin.** Main-content words (nav/header/footer removed), measured live 30 Oct: EN `/services/` 229, signature-playlists 247, event-soundtracks 229, sonic-identity 254, audio-upgrades 252. EL 270–321. | live measurement |
| E | **(Fixed 30 Oct, T3: linked from the Greek directory on both sitemap pages.)** **Dorean page has zero internal links.** Only the sitemap and template code reference it. | `grep -rn dorean-axiologisi` |
| F | **(Closed 30 Oct, T10: the empty alts are all decorative; left as is.)** **Empty `alt=""` on content images.** Bing Site Scan (30 Oct) flags 54 of 58 pages. Most hits: `sensear-logo-color.png` (2 per page), `sensear-signature-playlist-service.jpg`, and the page hero images (`about-hero.jpg`, `*-hero.jpg`, `contact-hero-venue-consultation.jpg`). No `<img>` is missing the attribute; the values are empty. | Bing Site Scan + live check |

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

### T1 — Remove the invented address from the schema (high) · DONE 30 Oct
- File: `components/JsonLd.tsx`, `LocalBusiness` block (lines ~45–58).
- Remove `streetAddress` and `postalCode`. Keep `addressLocality: 'Athens'` and `addressCountry: 'GR'`.
- **Do not add any street address.** JEF's real address is a private home address and must not be published.
- **Opening hours must match the Google Business Profile.** The profile says Mon–Fri 10:00–21:00, Sat 10:00–17:00, Sun closed. The schema says `Mo-Sa 10:00-18:00`. Change the schema to the profile's hours (ask JEF to confirm), or remove `openingHours`.
- Ask JEF to confirm or remove `priceRange: '$$'` (likely added by an AI tool). Telephone `+30-697-699-4212` comes from the original site; keep unless JEF says otherwise.
- Add the Google Business Profile to `sameAs` in both the `Organization` and `LocalBusiness` blocks: `https://maps.google.com/?cid=13226295565397032732`.
- Check: built `out/index.html` JSON-LD has no `streetAddress` / `postalCode`, hours match the profile, `sameAs` includes the Maps URL; Rich Results Test passes.

### T2 — Commit what is already done (high) · DONE 30 Oct
1. Ask JEF to approve deleting `.git/index.lock`, then delete it.
2. Commit 1: `seo: add IndexNow key file` → `public/aa5377a82ff974cd792ee8c680f4c3e0.txt`.
3. Commit 2: `seo: 301 old music-for-art-museums-and-fashion URLs` → `public/.htaccess`.
4. Commit 3 (T1): `seo: remove unverified street address from LocalBusiness schema`.
5. The dorean changeset is T3 (commit after its gates pass).
6. Ask JEF about the two `*_orig.jpg` files before adding them.

### T3 — Finish and ship the Greek-only page `/el/dorean-axiologisi/` (high) · DONE 30 Oct
- Run the gates on it (never run since 30 Jul — see Aug handoff §4.1).
- Add at least one crawlable internal link to it from Greek pages (Greek nav, Greek footer, or the Greek services / contact pages). Use dictionary keys in both files.
- Commit as one changeset, e.g. `feat: add the Greek-only free-assessment landing page`.
- Check after commit: in `out/sitemap-el.xml` its `<lastmod>` is not `2026-07-30T00:00:00.000Z`.

### T4 — Raster share image (medium) · DONE 30 Oct (`sensear-og-image.jpg`, deployed and verified live)
- Create `public/images/brand/sensear-og-image.jpg` (or `.png`), **1200×630**, from the existing SVG / brand assets.
- Point `app/layout.tsx` (both `openGraph.images` and `twitter.images`) to it. Check other `openGraph` blocks use raster images: `app/[lang]/blog/[slug]/page.tsx`, `components/industry-detail-v3/industry-page.tsx`, `app/[lang]/dorean-axiologisi/page.tsx`.
- Check: no page in `out/` has an `.svg` `og:image`.

### T5 — Complete the 3 service H1s (low) · DONE 30 Oct (subtitle moved inside the H1, deployed and verified live)
- Change the 6 dictionary titles in section 1-C so the H1 reads as a full phrase (for example, merge it with the line that follows it). Keep the visual layout. Both languages.

### T6 — Expand the five English service pages + Greek equivalents (medium, needs JEF) · DONE 2 Nov · Signature Playlists live since 30 Oct · Audio Upgrades, Event Soundtracks, Sonic Identity and the services hub committed, not yet deployed
- **Signature Playlists, 30 Oct:** copy approved by JEF and committed in two parts. `b7c8069` adds optional
  blocks to the shared service layout (case, process, pricing, `image_alt`); pages without those keys are
  unchanged. `c92c1c5` is the copy itself (EN + EL), about 675 / 740 words of main content, up from 247.
  - JEF's extra answers: the yearly fee is billed once a year; "licensed for use in businesses" is the
    wording; Spotify and YouTube may be named; when a visit is not possible at the time, SensEar walks
    through the venue in detail with the managers on a video call.
  - JEF's review edits, 30 Oct (`8e19c91`): Hera text under the title with the Hera photo on the right;
    bold key phrases; "amongst many others" after Beach House and Yam; pricing opens with what the
    service is built around; the licensing photo gets the tall frame when its section has a full list.
  - Second round, 30 Oct (`e9a0282`): bold phrases in the pricing paragraph; on pages with a case band
    the section divider sits above "What's included" instead of above "Perfect for". Third round
    (`916127e`): no divider between the intro and the Hera case. Fourth round (`165a660`): the Hera
    case shares the intro's panel colour and "Perfect for" shares the page colour, so the colour
    only changes where a divider is.
  - **Rollback** (JEF asked to be ready): `git revert 165a660 916127e e9a0282 8e19c91 c92c1c5` restores
    the old page; the layout commit `b7c8069` can stay (it renders nothing without the keys). Then
    rebuild `out/` and upload. To undo only the review edits: `git revert 165a660 916127e e9a0282 8e19c91`.
  - Next pages reuse the same blocks: add `case_study` / `process` / `pricing` / `image_alt` keys.
  - Deployed and verified live by Cowork (30 Oct). Sitemap `lastmod`: the copy lives in the
    dictionaries, so git dates do not move. `LAST_MODIFIED_OVERRIDES` in `lib/route-lastmod.ts` now has
    `/services/signature-playlists` = 2026-10-30 (committed, not yet deployed). **Every next T6 page adds
    its own override in the same commit as its copy.**
- **Layout, 31 Oct (`78985e1`, JEF):** on pages with a case band (Signature Playlists, Audio Upgrades)
  the zig-zag starts from the left: case photo left, then "What's included" photo right, "Perfect for"
  photo left, section 5 photo right. Desktop only; phones keep the same order. "Perfect for" items
  with no industry page are plain text instead of linking to the home page (also on Sonic Identity).
- **Audio Upgrades, 31 Oct:** copy approved by JEF and committed (`0a28d05`, EN + EL, about 635 / 700
  words, up from 252), with the case photo `audio-upgrades-case-ear.webp` (JEF's choice; the wrench
  photo was tried on the Greek page and dropped) and the sitemap override 2026-10-31. Layout for a case
  without a photo or link: `180f127` (only the optional link is used today).
  - **Rollback:** `git revert 0a28d05` restores the old Audio Upgrades page; then rebuild `out/` and
    upload. `git revert 78985e1` undoes the mirrored zig-zag on both pages.
- Audio Upgrades facts. JEF's facts (31 Oct), the only facts to use:
  - Client example: one client, **not authorised to be named**; the venue is a bar. Sound escaped to the neighbours upstairs
    and outside; the client wanted a warmer, clearer sound with more bass for dance and lounge/mid-tempo
    music, and easy conversation even at high volume. SensEar visited with partners in sound measurement,
    sound isolation and soundproofing, who ran their tests. The visit and assessment were free.
  - Scope: the sound system **and** room acoustic treatment. Partners: AV installers and acousticians
    (not named); they supply the equipment.
  - Everything runs through SensEar: it arranges the visits between technicians and the venue manager,
    partners contact SensEar for anything, and SensEar invoices the client. One quote, one invoice.
  - Tuning, measurements, tests and final touches: by the technicians and experts under SensEar's
    supervision. Staff training depends on the equipment and is usually minimal.
  - Assessment normally free; charged only for very large projects. One-time fee; recurring only if
    service packages are added on top.
  - Timeline: no projection; depends on scope, budget and extent of the work.
  - Off-limits: anything not feasible, sensible or legal.
  - Follow-up answers (31 Oct): the bar is in the centre of Athens; the work is finished and worked (warmer,
    crystal-clear sound, no longer disturbing the neighbours upstairs or the surroundings). The proposal is
    sent as soon as it is ready, usually within 7 to 10 days, no commitment. Recurring fee only for a
    maintenance or technical support subscription when the equipment price does not include it. The
    venue owns the equipment; SensEar does not lease.
  - **"Written proposal within four days" is wrong** (added in the 28 Jul copy rewrite, `f41d8a9`). It is
    on Signature Playlists step 2, the contact FAQ, and the Event Soundtracks, Sonic Identity and Audio
    Upgrades closing lines, in both languages. **Fixed 31 Oct (`b12475f`, approved by JEF):** all ten
    lines now say the proposal usually arrives within 7 to 10 days. Committed, not yet deployed. The
    Audio Upgrades closing line changes again with its T6 copy.
- **Event Soundtracks, 31 Oct:** copy approved by JEF and committed (`c864f25`, EN + EL, about 635 / 675
  words, up from 265), with the existing Levantis case-study photo and the sitemap override 2026-10-31.
  Same layout as the other two pages (case photo left). JEF confirmed: "George and Katerina", "Levantis",
  offers usually within 7 to 10 days, "a deposit secures your date".
  - **Rollback:** `git revert c864f25` restores the old page; then rebuild `out/` and upload.
- **Sonic Identity, 2 Nov:** copy approved by JEF and committed (`7197cf4`, EN + EL, about 500 / 570 words,
  up from 300), sitemap override 2026-11-02. No case section (no project yet), so the page keeps the
  unmirrored layout; add a `case_study` and a photo when a project exists, and the zig-zag will mirror
  like the other three pages.
  - **Rollback:** `git revert 7197cf4` restores the old page; then rebuild `out/` and upload.
- **Services hub, 2 Nov:** copy approved by JEF and committed (`32132df`, EN + EL, about 600 words, up
  from 330), sitemap override `/services` 2026-11-02. Layout first, separately (`156aa11`): card texts and
  the "How they combine" lines take bold, optional `image_alt` keys for the five photos, and the gold
  heading words now appear in the headings. Each card: definition, a real example (Hera, Levantis, the
  Athens bar; none for Sonic Identity), how it is priced, who it fits. "How they combine" gives an order.
  - JEF's answers (2 Nov): the first call or visit is free for Signature Playlists too, so for all four
    services. A venue that needs both Audio Upgrades and Signature Playlists gets them in parallel.
  - **Rollback:** `git revert 32132df` restores the old hub copy (the layout commit `156aa11` can stay;
    without the keys it falls back to the old alts); then rebuild `out/` and upload.
- Sonic Identity facts. JEF's facts (2 Nov), the only facts to use:
  - **No sonic identity project done yet**, and none close to one: no case section on this page.
  - Workshop: the client's marketing and business teams; 30 minutes to an hour; in person preferred,
    online possible; one session is usually enough. At least one meeting in person at the client's venue
    or offices, then more meetings or calls if needed.
  - Deliverables: two or three reference (sample) playlists; written guidelines (genres, tempo, volume,
    do's and don'ts) as a PDF. Keep it light.
  - Original music and sonic logos: on request, composed by partners with SensEar's guidance and ideas.
  - Rollout: through Signature Playlists and any other media where music matters (Instagram, TikTok, TV
    and radio ads). Reviews and updates depend on the contract and the client's needs.
  - Pricing: one-time project fee, driven by number of locations, workshops and deliverables. Deposit
    required. The first call or visit is free.
  - Timeline: 2 to 3 weeks, up to a month for a large project.
  - The client owns the guidelines and can pass them to agencies and partners.
- Event Soundtracks facts. JEF's facts (31 Oct), the only facts to use:
  - Case: Levantis restaurant, Paros, may be named (already a case study: Neva Bergman's exhibition
    opening "Quiet Testimony"). About 100 guests; the night went very smoothly and the organiser was very
    satisfied with how the music tied in with the exhibition.
  - Event types: all of them: private events, weddings, parties, business dinners and parties, launches,
    corporate events.
  - DJs: SensEar's own DJs, George (Yorgos) and Katerina; a partner DJ when more suitable or when they
    are booked.
  - On the day: someone from SensEar on site for the whole event when needed. SensEar brings the sound
    system and DJ equipment, or uses the venue's.
  - Licensing: the venue or the organiser always pays the public-performance fees.
  - Pricing: a fee per event, driven by hours, DJ, equipment and any special arrangement. A deposit is
    required. The venue visit before the offer is free.
  - Timing: contact SensEar as soon as the event is decided. Last minute only if available and it can be
    done properly without risking SensEar's reputation.
  - The client approves the playlist or the type of music before the event.
- Target 700–1,000 words of distinct copy per page: a real client scenario, what is delivered, licensing / hardware specifics, how pricing works.
- Draft only. **JEF must approve all copy** before commit. Use real case studies already on the site (e.g. Hera Hotel); invent nothing.
- Order: **Signature Playlists first** (JEF, 30 Oct), then the other four. Fix the content images whose alt is a section heading ("What we do", "Perfect for") on each page as part of this task.
- JEF's facts (30 Oct), the only facts to use:
  - Client example: Hera Hotel. Every zone has its own cohesive but distinct sound that adjusts through the day.
  - Delivered: fully customised to the venue and its number of zones; covers every part of the day, from morning to closing; multiple zones; monthly and seasonal changes suggested. SensEar curates.
  - Playback: a third-party platform (not named on the site) cleared for business use and public performance. Works offline, schedules playlists, handles several zones; staff control volume and other settings as the owner decides.
  - Licensing: the venue owner alone pays public-performance licence fees. SensEar's solution is legal for public use, unlike Spotify, YouTube and similar consumer apps.
  - Hardware: no minimum requirements. SensEar can supply everything (players, speakers) or work with the venue's existing system if it is suitable.
  - Pricing: customised per venue and zones; an initial agreement, then a yearly recurring fee for renewals. No published price.
  - Timeline: no more than 2 weeks from the first call to sample playlists; then all agreed playlists, testing and fine-tuning with the client.
  - Off-limits: none set yet; JEF flags anything on review.

### T7 — IndexNow ping after each deploy (low) · DROPPED (Cowork pings after each deploy)
- Add `scripts/indexnow-ping.mjs`: read `out/sitemap.xml` + `out/sitemap-el.xml`, POST the URLs (max 10,000) to `https://api.indexnow.org/IndexNow` with `host: "sensear.music"`, `key: "aa5377a82ff974cd792ee8c680f4c3e0"`, `keyLocation: "https://sensear.music/aa5377a82ff974cd792ee8c680f4c3e0.txt"`.
- Run it manually after a deploy (there is no CI). Expect HTTP 200 or 202.

### T8 — Build and deploy (after T1–T4, with JEF) · DONE 30 Oct (T1–T3 deployed; post-deploy steps done)
- `npm run typecheck && npm run lint && npm run build`, then JEF's usual upload of `out/` to `httpdocs`. **Do not delete files in `httpdocs`.**
- Then tell Claude (Cowork) to: resubmit both sitemaps in Google and Bing, run the IndexNow ping, request indexing for `/el/dorean-axiologisi/`, and verify live.

### T10 — Alt text for content images (low) · CLOSED 30 Oct (option A, JEF)
- Closed without changes. Every empty alt on the site is decorative: the CTA background images (under an 82–93% dark overlay, already `aria-hidden`) and the logo icon inside CTA links that already have a text label. `alt=""` is the correct markup there, so the Bing warnings stay. They are warnings, not errors.
- The real weakness, content images whose alt is a section heading ("What we do", "Perfect for"), is fixed page by page with T6.
- Original task, kept for reference:
- Give the logo a real alt (e.g. "SensEar") unless its link already has an accessible name; then keep `alt=""` only on the duplicate.
- Give hero and service images a short descriptive alt, in both languages (dictionary keys in `en.json` and `el.json`).
- Keep `alt=""` only for purely decorative images.
- Check: re-run Bing Site Scan (Claude Cowork can do it); warnings should drop well below 54.

### T9 — Update `CLAUDE.md` (low, ask JEF) · DONE 30 Oct
- Current branch name. Remove or relax the `app/sitemap.ts` rule (waived 30 Jul). Add: "never publish a street address in schema".

### T11 — Wide share images for the 8 blog posts (low, after T6) · DONE 3 Nov (committed, not yet deployed)
- **Done 3 Nov (`5127d55`, JEF chose option B):** each `public/images/blog/<post image>-share.jpg` is 1200×630, the
  whole square photo centred on a blurred, darkened copy of itself (a crop cut off faces). `ogImage` is set
  for all 8 posts in both languages, and the post metadata states width 1200 and height 630. Checked in
  `out/`: 16/16 post pages point at a 1200×630 JPG.
  - **Rollback:** `git revert 5127d55`; then rebuild `out/` and upload.
- Original task, kept for reference:
- The blog share images are roughly square (775×768 to 1024×1024), so LinkedIn and Facebook crop them or
  show a small thumbnail. Make a 1200×630 JPG for each of the 8 posts, both languages, from the existing
  post images.
- Point each post's `ogImage` key at its new image (the key already exists for `building-brand-people-can-hear`;
  add it for the other seven) in `dictionaries/en.json` and `el.json`. The on-page images stay as they are.
- Check: every blog post in `out/` has a 1200×630 JPG `og:image`.

---

### T12 — Industries hub + 6 industry pages (medium, needs JEF) · DONE 6 Nov · committed and built, not yet deployed
- Scope: `/industries/` and the six `/industries/music-for-*` pages, both languages, Phase 3 of
  `plans/copy-strategy-audit-synthesis.md` (§10 F, §11 items 6 and 11). Same process as T6: audit, one
  batch of questions, drafts in `docs/drafts/industries-copy-draft.md` (not committed), JEF approves every
  line, then copy + sitemap override in one commit per page. Layout changes go in a separate commit first.
- **Approval on a local preview (JEF, 6 Nov, applies from now on):** each draft is applied to the working
  tree **uncommitted** (dictionaries, `INDUSTRY_CONFIG`, sitemap override) and shown on the `next-dev`
  server (`.claude/launch.json`, `http://localhost:3000/...`), next to the live page on
  `https://sensear.music/...` and the last build on the `review-out` server (`http://localhost:4173/...`,
  serves `out/`). JEF reads both, asks for fixes, and the fixes are re-shown on the same URL. Commit only
  after his approval; `git checkout -- <paths>` reverts a rejected round. The markdown draft stays the
  text source but is no longer the approval step.
- Audit (5 Nov), agreed with JEF: the six pages were one template in six wordings; behavioural promises are
  kept as **expected outcomes, written as the purpose of the design, never as guaranteed results** and never
  as commercial outcomes (no "stay longer", "spend more", "come back", "share afterwards"); retired words
  replaced with concrete nouns, not synonyms; service names stay exact in links and first mentions, keyword
  variants go in the surrounding text; dead `see_also` keys removed; projects added where allowed; one Greek
  sector name, with "resorts" as a body variant; the "What connects these worlds" section stays.
- JEF's facts (5 Nov), the only facts to use on these pages:
  - **Hotels & Resorts:** Hera Hotel (Athens) may be named with its three zones. Beach House goes under
    restaurants and bars, not hotels. Zones and dayparts: reception/lobby, breakfast, pool, spa, bar,
    dinner, all covered. Services sold to hotels: all four (Signature Playlists, Sonic Identity for groups,
    Event Soundtracks for weddings and hotel events, Audio Upgrades).
  - **Restaurants & Bars:** Pelicanos (Sifnos), Yam and Beach House with CoocooVaya (Antiparos) and Levantis
    (Paros) may be named. The central-Athens bar from Audio Upgrades may be described, unnamed. Dayparts that
    matter most: brunch, lunch, dinner, late. Services sold: all four.
  - **Retail:** no retail client yet; the page carries no project. Zones and dayparts: entrance, floors,
    fitting rooms; weekday mornings against Saturdays; sales periods. Services sold: Signature Playlists and
    Sonic Identity.
  - **Wellness & Gyms:** no client yet; no project on the page. Zones: reception, treatment rooms, pool,
    class studio, training floor. Services sold: Signature Playlists, Audio Upgrades (class rooms).
  - **Events & Experiences:** the page stays. Who hires SensEar most: hotels, private hosts and brands.
    Event types asked for most: parties, wedding parties, private dinners, holiday parties, openings.
  - **Art, Museums & Fashion:** no gallery, museum or fashion client; the Levantis opening (Paros) is the
    project here as well as on events. "Fashion" stays in the title.
  - **Shared lines:** every page may say the first call or visit is free and the proposal usually arrives
    within 7 to 10 days.
  - **Greek sector name:** «ξενοδοχεία και θέρετρα» everywhere; "resorts" may appear once in the body as a
    variant where it fits.
  - **Layout (JEF):** bold, italics and gold words on all industry pages and the hub, including the "Ideal
    for" and "How we help" blocks and the hub cards. Nothing else off-limits for now.
- Rendering facts for whoever edits next: on the hub, `intro.p1/p2`, card `desc1` and the "What
  connects" points render HTML (`.se-html`: `<strong>`, `<em>`, `<a class="se-link">`); `desc2` gets a
  gold lead-in up to its first colon (`goldPrefix`). On the industry pages `intro.p1/p2` and the
  descriptions in "What we do", "Ideal for" and "How we help" render HTML; hero fields, subtitles, item
  titles and `cta_description` are plain text. The project mini-CTA under "How we help" renders only when
  `cta_title`, `cta_button` and `cta_link` are all set. Gold words per page live in
  `components/industry-detail-v3/industry-page.tsx` (`INDUSTRY_CONFIG`) and must be exact substrings of
  their headings (a missing word renders the heading plain); the hub's in `app/[lang]/industries/page.tsx`.
  Inline links are styled by `.se-link` in `app/globals.css` (gold at rest, underline on hover and focus).
  The `cta.see_also`, `hero.side_label`, `image_kicker`, `image_caption` and `badge` keys are not rendered.
- **Greek rounds 4 and 5 (6 Nov), approved by JEF on the preview:** JEF rejected the first Greek of the
  events and art pages as translated English («μεταφρασμένα Αγγλικά») and asked for human, polished Greek in
  the style of «Ένα διακριτικό μουσικό υπόβαθρο επιτρέπει στους επισκέπτες να εστιάσουν στο έργο, χωρίς
  ακουστικούς περισπασμούς.», then for a re-audit of the four earlier pages for the same calques (36 points,
  all accepted except restaurants 10 and 11 below). Calques to avoid from now on: «κάτω από τη συζήτηση»,
  «πίσω από το έργο», «από κοντά», «γραμμή» for music, «ακούγεται σαν το μαγαζί σας», «τρέχει» for a space
  or schedule, «συνομιλητής» for a contact person, «στο μέτρο» (→ «στα μέτρα»), neuter «ένα playlist»
  (**playlist is feminine everywhere**). Inline service links had no CSS at all (`.se-link` was only a
  class name); fixed in `e446bcf`.
- Commits, all on `feat/case-study-new-client`: layout `be80b59`, `8071bcd`, `def6d48`, `e446bcf`;
  copy `84ffd3d` and `99bb81a` (hub), `b1efd0c` (hotels), `524824c` (restaurants), `9008689` (retail),
  `e90d8bd` (wellness), `22186a8` (events), `e5011ef` (art), `7e26158` (Greek corrections on the hub,
  hotels, restaurants, retail and wellness), `7d50183` (restaurants closing line as JEF wrote it). Sitemap overrides for all seven routes = 2026-11-06. Gates
  passed on `7e26158`: typecheck 0 errors, lint 0 errors (8 known warnings), static build. Headless Playwright pass on the build (seven pages, EN and EL, 1440 and 375 px): no console errors beyond the GTM widgets, no horizontal scroll, gold words, bold and styled links on every page.
  - **Rollback:** `git revert 7d50183 7e26158 e5011ef 22186a8 e90d8bd 9008689 524824c b1efd0c 99bb81a 84ffd3d`
    restores the old copy of all seven pages (the layout commits can stay: a gold word that is not in the
    heading renders it plain, and `.se-link` only styles links that exist); then rebuild `out/` and upload.
    One page alone: revert its copy commit, and for hotels, restaurants, retail or wellness also `7e26158`
    (which touches all four and the hub); restaurants also `7d50183`.
- Restaurants audit item 10 («να κρατά το επίπεδο της κουζίνας», «μια συνεχής γραμμή» in the projects
  block) stays as it is: JEF did not mark it. Item 11 became «Ελάτε να ακούσουμε μαζί τον χώρο σας σε ώρα
  αιχμής.» (`7d50183`). «πρωινό» on the hub stays without diaeresis (JEF confirmed 6 Nov).
- **Beyond T12, approved by JEF on the preview and committed (`688d977`):** the Levantis paragraphs on
  `/el/case-studies/` and `/el/services/event-soundtracks/` («Για τα εγκαίνια της έκθεσης … σχεδιάσαμε
  μουσική για μία μόνο βραδιά.» replaces «Μία βραδιά, όχι κάθε μέρα:», which JEF called «ΑΙ-κράχτης»; «ρυθμίσαμε
  την ένταση έτσι ώστε ο κόσμος να βλέπει τα έργα με την ησυχία του» replaces the «κάθεται κάτω από τη
  συζήτηση … από κοντά» calque), the Hera card on `/el/case-studies/` (feminine playlist, «κι όμως ακούγονται
  σαν το ίδιο ξενοδοχείο»), feminine playlist on `/el/contact/` (FAQ question) and `/el/about/`; overrides
  for `/case-studies`, `/contact`, `/about` and `/services/event-soundtracks` = 2026-11-06. English
  untouched. Gates passed on `688d977` (typecheck, lint, build) and the four Greek pages checked on the build
  at 1440 and 375 px.
  - **Rollback:** `git revert 688d977`; then rebuild `out/` and upload.
- **Process notes for the next copy task (JEF, 6 Nov):** report each round as one list, one changed line per
  item, with the preview URL, the place on the page, the full text as it reads there, and its state («στο
  preview» or «commit»); alternatives only when he asks, and then say which one is on the page. He answers
  per item with ΟΚ or his wording; commit only when every item has his ΟΚ.

---

### T13 — Journal hub + 8 articles (medium, needs JEF) · DONE 9 Nov · hub + 9 articles committed, built and pushed, not yet deployed
- Scope: `/blog/` and the eight `/blog/<slug>` articles, both languages, Phase 4 of
  `plans/copy-strategy-audit-synthesis.md` (§10 G). Same process as T12: audit, one batch of questions, every
  round applied to the working tree uncommitted and shown on the `next-dev` preview next to the live page, one
  list per round (preview URL, place on the page, full text, state), commit per article only after JEF's ΟΚ on
  every item. Copy-only edits do not move the sitemap date, so each changed route gets an entry in
  `LAST_MODIFIED_OVERRIDES` (`lib/route-lastmod.ts`) in the same commit as its copy. Images untouched (T11).
- Audit (6 Nov), kept in the session notes: the July pass (`b7b48ef`, `5bfc354`) had already added standfirsts
  (no meta-as-hero on the article page), deleted the duplicate opening paragraphs and rewritten the "Ready to…"
  closings. Still open: the article-page CTA band button "See all articles" linked to `/contact` (live bug);
  `<strong>` tags rendered as literal text on two Greek articles (`music-curation-cycle-venues`,
  `background-music-shapes-customer-behavior`) because the article renderer parses only `[text](url)`; typed "•"
  doubled with the gold list dot on `background-music-shapes-customer-behavior` (EN + EL); `([source](url))` /
  `([πηγή](url))` numbered citations on `music-curation-cycle-venues`; raw URLs as link text in the Sources list
  of `background-music-shapes-customer-behavior`; an absolute `https://sensear.music/...` link on
  `service-environment-shapes-wait-time`; EN/EL metadata mismatches (dates, tags, author); Title Case titles;
  all eight Greek articles reading as translated English; the Greek `building-brand-people-can-hear` being a
  different, shorter article than the English.
- **JEF's answers (6 Nov), the agreed scope:**
  1. All titles sentence case (URLs unchanged); the three home-page journal cards take the article titles.
  2. The journal's name stays "The Curation Journal" in Greek too, with a Greek explanation under it.
  3. The article-page CTA band button leads to the journal (`/blog`, `/el/blog`); each article keeps its own
     closing line to contact or case studies.
  4. `what-exactly-does-music-curator-do`: the SensEar-specific operations claims (data-driven playlisting, skip
     monitoring, staff feedback, KPI alignment, the desktop/mobile/tablet app in the Greek) come out; the section
     describes what music curation does in general, less specifically.
  5. `music-curation-cycle-venues`: the Greek team description holds («μουσικοί, DJs και μουσικολόγοι με υπόβαθρο σε
     χώρους φιλοξενίας, μουσική παραγωγή, ραδιόφωνο και τεχνολογία»); the fitness-studio, full-dinner-service and spa
     tests have not been done and are written as method, not as things done.
  6. `brand-music-converts-browsers-buyers`: the empty "SensEar playbook" section (one parenthetical) goes; author
     "SensEar Team" / «Ομάδα SensEar» in both languages; date = the schema date (2025-01-20) in both.
  7. Greek `building-brand-people-can-hear` is rewritten natively with the English structure and sources (six steps).
  8. The gender-based checklist advice on `background-music-shapes-customer-behavior` stays (it is the study's finding).
  9. Greek display dates and tags aligned with the schema (`BLOG_PUBLISHED_DATES`) and the English.
  10. "Back to the journal" / «Πίσω στο journal» everywhere (back button, featured badge).
  11. Dead `blog` keys removed where nothing renders them and SEO is unaffected: `blog.recent.title`,
      `blog.recent.read_more`, `blog.newsletter.*`, `blog.article.cta_kicker`. `hero.side_label` and `hero.badge`
      stay: every v3 hero carries them and some render the badge.
  12. Order: hub first, then the articles in hub order, one list per round on the preview.
- Defaults agreed in the same batch: citations as inline links on the claim they support (no "Source 1…n"), no
  source dropped, no number changed; SensEar's own behavioural promises become research findings; no em dashes,
  «» quotes, feminine playlist; nothing committed before JEF's ΟΚ on the preview.
- Preview: the `next-dev` server on `http://localhost:3000` (started by another session in the same folder; it
  serves this working tree, so every uncommitted round shows there).
- **9 Nov (JEF):** the new post `sonic-seasoning-how-sound-changes-taste` (`7c8c231`, from another session) went
  through the same pass; JEF chose the Greek subtitle «Η μουσική μπορεί να κάνει ένα επιδόρπιο να φαίνεται πιο γλυκό
  και ο θόρυβος ένα πιάτο πιο άνοστο…» and kept the new link to Audio Upgrades. There is no separate research team:
  the "Research Team" byline became "SensEar Team" / «Ομάδα SensEar» on the three articles that had it. Its APA
  source list keeps the DOI URLs as link text (standard reference format, unchanged by JEF's choice); every other
  source list now shows descriptions instead of raw URLs.
- Commits, all on `feat/case-study-new-client`: layout `b9f8a84` (CTA band → journal, dead keys), `b985600`
  (Greek-aware uppercase kicker), `084f1df` (duplicate back button removed); copy `c38561c` (hub),
  `2d99c16` (how-top-hospitality-brands-design-sound), `798a800` (three-reasons-make-music-hospitality),
  `962185f` (brand-music-converts-browsers-buyers), `8948ba6` (what-exactly-does-music-curator-do),
  `f2d7727` (music-curation-cycle-venues), `bb30533` (building-brand-people-can-hear), `87470b7`
  (sonic-seasoning-how-sound-changes-taste), `102185a` (background-music-shapes-customer-behavior), `ae8acb9`
  (service-environment-shapes-wait-time), `84637f1` (hub lastmod). Sitemap overrides: the six articles of 6 Nov =
  2026-11-06; `/blog`, Sonic seasoning, background-music and wait-time = 2026-11-09.
  - **Rollback:** `git revert 84637f1 ae8acb9 102185a 87470b7 bb30533 f2d7727 8948ba6 962185f 798a800 2d99c16 c38561c`
    restores the old copy of the hub and all nine articles (the three layout commits can stay); then rebuild
    `out/` and upload. One article alone: revert its copy commit (and `84637f1` only if the hub date matters).
- Gates on `84637f1` (9 Nov): `npx tsc --noEmit` 0 errors, `npm run lint` 0 errors (8 known warnings),
  `npm run build` passed (63 URLs in `/sitemap.xml`, 32 in `/sitemap-el.xml`). Headless Playwright pass on
  `review-out` (`out/`), the hub and nine articles, EN and EL, 1440 and 375 px (40 loads): all 200, no
  first-party console errors or failed requests (aborted Next.js prefetches and the GTM widgets / LinkedIn pixel
  ignored), no horizontal scroll, no literal `<strong>`, no "•", no "Source n", no em dash, no absolute
  `sensear.music` links, no English links on Greek pages, no "Research Team"; on every article the CTA band button
  leads to `/blog/` or `/el/blog/` and there is exactly one back link. The only raw-URL link texts are the six APA DOI
  references on Sonic seasoning (intended).
- Working notes: article rounds were applied by slug, never by index (another session inserted a post at index 0).
  Greek tags: «Παραδείγματα» (how-top), «Απόψεις» (three-reasons), «Έρευνα» (brand-music, Sonic seasoning,
  background-music, wait-time), «Οδηγός» (curator), «Μέθοδος» (cycle), «Branding» (building-brand). The article hero
  uppercases the tag with the `el` locale (no tonos on capitals). The home-page journal cards
  (`home.blog.articles`) carry the article titles.

### T14 — Metadata sweep and dead-key cleanup, site-wide (low, needs JEF) · DONE 10 Nov · committed, built and pushed, not yet deployed
- Scope (JEF, 10 Nov): the last two items of Phase 4 in `plans/copy-strategy-audit-synthesis.md` §10 G, the
  metadata sweep and the removal of dictionary keys nothing uses. The sitemap page copy and the legal pages are
  not in scope (legal pages are inventory-only in the strategy).
- **Dead keys, done (`e99230d`):** found with a traced build (a temporary, uncommitted proxy around `getDictionary`
  logged every entry each page read, metadata and props included). 200 entries per language that no page read in
  either language were removed, among them the old light footer (`footer.*`), every hero `side_label`,
  `image_kicker`, `image_caption` and rotating `badge`, the CTA `location` lines and the article `date` /
  `category` fields; the hero prop types lost the same fields. Proof: every one of the 67 built pages has identical
  head tags, JSON-LD and visible text (links and alt texts included) before and after. The captions and badges that
  are commented out as "hidden for now" lose their text; bringing them back means reverting `e99230d`.
- **Metadata audit (10 Nov), from the built pages:** all 67 titles unique; four run over ~60 characters and show
  truncated in Google (`/industries/`, `/el/industries/`, `/el/blog/`, `/el/blog/brand-music-converts-browsers-buyers/`),
  left as they are. Rule breaks found: retired words or formula suffixes in the home (EN + EL), contact (EN), FAQ
  (EN + EL) and sitemap-page (EN + EL) descriptions; the Greek audio-upgrades description at 157 characters; «dj»
  in lower case on `/el/about/`; «εμπειρίες» in the Greek home title (EN says events). Site-wide: the share
  previews (Facebook, LinkedIn, WhatsApp, X) of every page except the blog posts and the industry pages read
  "SensEar Music" with "Bespoke music curation and sonic branding." and `og:url` pointed to the home page on every
  page, because the root layout set `openGraph` / `twitter` title, description and url; the schema descriptions
  (Organization, LocalBusiness, WebSite) and the fallback description also used the retired "Bespoke".
- **Approved by JEF on 10 Nov (all 14 items) and committed:** `2c43cb5` (the root layout no longer sets openGraph /
  twitter title, description or url, so Next.js fills them from each page's own title and description; new
  share-image alt «SensEar, music curation studio in Athens», new fallback description and three schema
  descriptions without "Bespoke"); `09e8757` (descriptions for home EN + EL, contact EN, FAQ EN + EL, sitemap page
  EN + EL, Greek Audio Upgrades, Greek about; Greek home title «Μουσική επιμέλεια για χώρους και εκδηλώσεις»;
  sitemap overrides = 2026-11-10 for `''`, `/contact`, `/about`, `/faq`, `/sitemap-page`, `/services/audio-upgrades`);
  `3a5c65c` (the `/home-v2/` demo route removed; `HeroFlow` and the home page's `heroVariant` prop stay).
  - **Rollback:** `git revert 3a5c65c 09e8757 2c43cb5 e99230d` restores the metadata, the share tags, the demo
    route and the removed dictionary entries; then rebuild `out/` and upload. Each commit can also be reverted alone.
- Gates on `3a5c65c` (10 Nov): typecheck 0 errors, lint 0 errors (8 known warnings), build passed (63 URLs in
  `/sitemap.xml`, 32 in `/sitemap-el.xml`, no `out/home-v2/`). Headless pass on `review-out`: all 63 sitemap URLs
  return 200 with their own og:title and og:description (only `/el/dorean-axiologisi/` keeps its own campaign
  og:title, by design), no og:url pointing to the home page, every JSON-LD block parses, no "Bespoke" in any head;
  the nine pages whose metadata changed render at 1440 and 375 px with no first-party console errors and no
  horizontal scroll; `/home-v2/` returns 404.
- **Follow-up, approved by JEF on 10 Nov (`848be49`):** sitemap page, EN + EL (subtitle «Όλες οι σελίδες της SensEar σε
  ένα σημείο…» without «Εξερευνήστε… τους πόρους του SensEar», sentence-case headings, «Άρθρα του journal» / "Journal
  articles", the closing box «Γράψτε μας ή δείτε αν η απάντηση υπάρχει ήδη στις συχνές ερωτήσεις.» without the
  reassurance filler, FAQ button label, the EN Greek-directory line); the four service captions on the home page,
  EN + EL («Playlists και DJ sets για μία εκδήλωση» instead of "Bespoke DJ sets & acoustic experiences", and so on).
  Gates passed; the home and sitemap pages render at 1440 and 375 px with no console errors or horizontal scroll.
  Rollback: `git revert 848be49`.
- After the upload: the server keeps `/home-v2/` unless that folder is deleted there by hand (an upload adds and
  overwrites files, it does not delete them).

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
| **Claude (Cowork)** | Weekly read-only SEO check (scheduled task "SensEar weekly SEO check", Tuesdays 09:38 Athens time, phone notification). After each deploy: resubmit sitemaps, IndexNow ping, request indexing for new pages, live verification. No Bing Site Scan re-run for T10 (closed without changes). |
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
