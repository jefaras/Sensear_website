---
name: Dictionary Sync & Validation
description: Cross-references English (en.json) and Greek (el.json) dictionaries to ensure all keys match and links are correctly formatted.
---

# Dictionary Sync & Validation Skill

This project uses localized dictionaries stored in `dictionaries/en.json` (English) and `dictionaries/el.json` (Greek). When asked to validate or sync dictionaries, follow these steps exactly:

1. **Read Dictionary Files:**
   - Use the `view_file` tool to read `dictionaries/en.json`.
   - Use the `view_file` tool to read `dictionaries/el.json`.

2. **Verify Key Parity:**
   - Parse the JSON structures of both files.
   - Identify any keys that exist in `en.json` but are missing in `el.json`.
   - Identify any keys that exist in `el.json` but are missing in `en.json`.
   - *Note: Pay attention to nested keys, arrays, and object structures depending on how the dictionaries are structured.*

3. **Validate Markdown Links in Values:**
   - For all text values in both dictionaries, check for markdown link syntax `[Link Text](URL)`.
   - Ensure that the syntax is correct and not broken (e.g., missing closing parentheses, stray spaces between brackets and parentheses).

4. **Report Findings:**
   - If there are missing keys or formatting issues, present a clear, formatted summary to the user outlining exactly what is missing or broken.
   - Offer to use the relevant file editing tools (`replace_file_content` or `multi_replace_file_content`) to add the missing keys (with placeholder or translated values) and fix any broken syntax.
