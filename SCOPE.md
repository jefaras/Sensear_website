# Project Scope Protection

This file defines protected areas and change restrictions to prevent unauthorized modifications.

## Protected File Patterns

The following files/patterns should **NEVER** be modified unless explicitly requested by the user:

### Industry Pages
```
app/[lang]/industries/music-for-*/
```
- These pages have specific layouts that must remain consistent
- Any changes to these pages require explicit user approval

### Service Pages
```
app/[lang]/services/*/
```
- Service sub-pages have established patterns
- Changes require explicit scope definition

### Core Components
```
components/home/*.tsx
components/sections/*.tsx
```
- Home page components are tightly coupled
- Changes can affect multiple pages

## Change Protocol

### Before Making Any Changes

1. **Read the plan file completely** - Understand exactly what needs to change
2. **List files to modify** - Write down ONLY the files specified in the plan
3. **Verify scope** - Check each file against this SCOPE.md
4. **Confirm with user** - If a file is protected, ask before modifying

### During Implementation

1. **Modify ONLY listed files** - Do not touch any file not in the plan
2. **Make minimal changes** - Only change what is necessary
3. **Preserve existing patterns** - Do not reformat or refactor unrelated code

### After Implementation

1. **Review diff** - Verify only planned files were modified
2. **Test affected pages** - Ensure changes work as expected
3. **Report scope** - List all files that were actually modified

## File Modification Checklist

Before editing any file, answer these questions:

- [ ] Is this file listed in the plan?
- [ ] Is this file NOT in a protected pattern?
- [ ] Am I changing ONLY what the plan specifies?
- [ ] Have I verified this change won't affect other pages?

If any answer is "NO", stop and ask the user for clarification.

## Recent Issues

### 2026-02-22: Industry Pages Image Dimensions
- **Issue:** Individual industry pages had image dimensions changed from `aspect-[3/4]` to `aspect-[4/3]`
- **Cause:** Changes made outside the scope of `section-layout-swap-plan.md`
- **Lesson:** The plan only specified Services page and Home components, but industry pages were also modified
- **Fix:** Revert industry pages to correct `aspect-[3/4]` dimensions

## Scope Verification Command

Before committing changes, verify scope:

```powershell
# Show modified files
git status --short

# Show diff for specific file
git diff -- path/to/file.tsx
```
