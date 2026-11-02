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

**Committed, not yet deployed:** sitemap `lastmod` override for Signature Playlists; the "four days" proposal promise corrected to "usually within 7 to 10 days" on five pages, both languages; T6 Audio Upgrades and Event Soundtracks; the mirrored zig-zag on the pages with a case section (see T6). Home "who we are" statement: smaller text, two paragraphs, and the first sentence now "…with clients across Greece" in both languages (`905c83a`, `e258d2f`, `5fd9148`).

**Open:** T6 (Signature Playlists, Audio Upgrades and Event Soundtracks done; Sonic Identity and the
services hub next). T11 after T6 (low).
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

### T6 — Expand the five English service pages + Greek equivalents (medium, needs JEF) · Signature Playlists DONE 30 Oct (live) · Audio Upgrades and Event Soundtracks DONE 31 Oct (committed, not yet deployed)
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
- **Sonic Identity is next** (2 Nov). Draft written 2 Nov (`docs/drafts/sonic-identity-copy-draft.md`, not
  committed), awaiting approval. JEF's facts (2 Nov), the only facts to use:
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

### T11 — Wide share images for the 8 blog posts (low, after T6) · NOT STARTED (JEF, 31 Oct: do not do yet)
- The blog share images are roughly square (775×768 to 1024×1024), so LinkedIn and Facebook crop them or
  show a small thumbnail. Make a 1200×630 JPG for each of the 8 posts, both languages, from the existing
  post images.
- Point each post's `ogImage` key at its new image (the key already exists for `building-brand-people-can-hear`;
  add it for the other seven) in `dictionaries/en.json` and `el.json`. The on-page images stay as they are.
- Check: every blog post in `out/` has a 1200×630 JPG `og:image`.

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
