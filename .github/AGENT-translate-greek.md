Agent: Translate pages to Greek
=================================

Goal
----
Accurately translate site content from English to Greek by updating `dictionaries/el.json` and any inline English strings in `app/[lang]/*` or components.

Responsibilities
----------------
- Identify strings that require translation (dictionary keys and inline text).
- Preserve formatting: HTML tags (`<br/>`, `<strong>`), Markdown-style bold (`**bold**`), links, and placeholders.
- Keep non-text data unchanged (dates, numeric values, image URLs, internal `link` paths).
- When uncertain about tone, prefer formal, hospitality-oriented Greek consistent with existing `el.json` style.
- Run the helper script to detect missing keys, then produce translations and update `dictionaries/el.json`.

How to work (step-by-step)
--------------------------
1. Run the missing-key extractor to find untranslated strings:

   ```bash
   npx tsx tools/extract-missing-keys.ts
   ```

   This writes `tools/missing-for-el.json` with keys from English that are missing in Greek.

2. Translate each value in `tools/missing-for-el.json` following these rules:
   - Preserve inline HTML and markdown. Example: `To become the **leading partner**` -> `Να γίνουμε ο **κορυφαίος συνεργάτης**`.
   - Keep link targets unchanged (`link` fields) and only translate link text.
   - For structured content (arrays of objects or `structuredContent`), translate `title`, `desc`, `value`, `paragraph` strings — keep nested structure intact.

3. Update `dictionaries/el.json` with the translated keys. Run the extractor again to confirm no missing keys remain.

4. Scan `app/[lang]` pages and `components/` for inline English strings (e.g., JSX text nodes, `dangerouslySetInnerHTML` fallbacks). Prefer moving repeated strings into `dictionaries/*` instead of leaving inline text.

5. Run Playwright tests to ensure pages load and language switching works:

   ```bash
   npm run test
   ```

Examples & gotchas
------------------
- `app/[lang]/about/page.tsx` reads `dict.about_page` and expects HTML/markdown in some fields — keep `**bold**` markers or HTML tags when translating.
- `Navbar` uses `navigation` keys from the dictionaries; do not change key names, only values.
- `lib/dictionary.ts` lazy-loads JSON; ensure `dictionaries/el.json` remains valid JSON (no trailing commas).

Integration points
------------------
- Image hosting: do not translate or move external image URLs (see `next.config.mjs` remote patterns).
- Email templates: `lib/email.ts` relies on env vars; translations for email content should be added only if email templates exist in `dictionaries`.

If you need automation
----------------------
- The repo includes a helper `tools/extract-missing-keys.ts` (run with `npx tsx`) that outputs `tools/missing-for-el.json` ready for translation. You may integrate a translation API by adding an environment variable `TRANSLATE_API_KEY` and a small wrapper in the script — but do not commit API keys.

Reporting
---------
- After completing translations, create a PR with:
  - Updated `dictionaries/el.json`
  - Any moved inline strings consolidated into the dictionaries
  - A short PR description listing pages translated and any intentional changes to phrasing

Questions to ask the maintainer
------------------------------
- Which pages should be translated first (priority list)?
- Do you prefer literal translation or adaptive (localization-first) tone for marketing copy?

— End
