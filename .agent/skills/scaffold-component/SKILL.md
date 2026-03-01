---
name: UI Component Generator
description: Scaffolds a new React component using standard Vanilla CSS and the project's design system.
---

# UI Component Generator

When asked to scaffold or create a new UI component, follow these rules exactly to maintain the project's premium aesthetic and technical standards:

1. **Next.js & React Conventions:**
   - Use React Server Components by default. Only add `"use client"` at the top of the file if interactivity (hooks, event listeners) is required.
   - Write components in TypeScript (`.tsx`) and clearly define interfaces for props.

2. **Styling & Aesthetics:**
   - **Do NOT use Tailwind CSS.** The project uses Vanilla CSS.
   - Prioritize smooth micro-animations. For example, add `transition: all 0.3s ease;` to interactive elements and create distinctive `:hover` states for buttons and cards.
   - Reference the existing global design system (typically found in `app/globals.css` or component-specific CSS modules). Maintain the vibrant, premium feel and avoid generic solid colors.

3. **Localization (i18n):**
   - Components should rarely contain hardcoded English or Greek text. 
   - Ensure the component structure easily accepts a translation object or string props mapped from `dictionaries/en.json` and `el.json`.

4. **Structure:**
   - Create the appropriate folder structure if necessary. For standard components, place them in the existing `components/` directory (or a relevant feature slice context).
