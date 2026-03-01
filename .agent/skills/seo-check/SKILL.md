---
name: SEO & Accessibility Linter
description: Audits a given page for SEO best practices and accessibility.
---

# SEO & Accessibility Linter

When asked to check a page or route for SEO or accessibility, follow these systematic steps:

1. **Verify Target File:**
   - Use the `view_file` tool to inspect the target `page.tsx` or `layout.tsx` file for the requested route.

2. **Audit Heading Structure:**
   - Ensure there is exactly **one** `<h1>` tag on the page.
   - Verify that subsequent headings (`<h2>`, `<h3>`, etc.) follow a logical, descending hierarchy without skipping levels.

3. **Validate Next.js Metadata:**
   - Check if the page exports a `generateMetadata` function or a static `metadata` object.
   - Verify that this metadata includes, at minimum, a `title` and a `description`.
   - Ensure these metadata fields are fetching from the proper `dictionaries` (i.e., not hardcoded to a single language, since the site supports `en` and `el`).

4. **Check Semantic HTML:**
   - Look for proper use of semantic HTML5 landmark tags (`<main>`, `<article>`, `<section>`, `<nav>`, `<aside>`) instead of generic `<div>` soup.

5. **Examine Media and Links:**
   - Check that all `<img>` tags or Next.js `<Image>` components have meaningful `alt` text.
   - Ensure `<a>` tags and Next.js `<Link>` components have descriptive text (e.g., avoid ambiguous "click here" or "read more" standalone links).

6. **Reporting & Fixing:**
   - Report any violations as a structured markdown checklist.
   - Offer to use the `replace_file_content` tool to immediately implement the necessary fixes.
