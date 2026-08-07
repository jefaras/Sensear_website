/**
 * Real per-route `lastmod` dates for the sitemap.
 *
 * Why this exists: `app/sitemap.ts` previously used `new Date()` for every entry,
 * so all 58 URLs were stamped with the build time on every deploy. Google detects
 * that `<lastmod>` doesn't correlate with actual content change and stops trusting
 * the signal for the whole site, which slows recrawl. Search Console showed 30
 * sitemap URLs at "Discovered – currently not indexed" with Last crawled = N/A.
 *
 * The fix is stability, not precision: a route's date must stay the same across
 * rebuilds unless its source actually changed. We derive it from the last git
 * commit touching that route's page component.
 *
 * Known limitation: all user-facing copy lives in the monolithic
 * `dictionaries/en.json` / `el.json`, so a copy-only edit does not move a single
 * route's date. Folding the dictionaries in would give every route an identical
 * date and defeat the purpose. When a copy revision matters for a specific route,
 * either touch that route's `page.tsx` in the same commit or add an entry to
 * `LAST_MODIFIED_OVERRIDES` below.
 *
 * Runs at build time only (static export). Never imported by client code.
 */

import { execFileSync } from 'node:child_process'

/**
 * Used when git history isn't available at build time — e.g. Plesk deploying from
 * a tarball without `.git`. Bump on a significant site-wide revision.
 */
const FALLBACK_LAST_MODIFIED = '2026-07-30T00:00:00.000Z'

/**
 * Manual overrides, keyed by the same route strings used in `app/sitemap.ts`
 * (leading slash, no trailing slash; `''` is the home page). Values must be
 * ISO-8601. Use sparingly — prefer letting git answer.
 */
const LAST_MODIFIED_OVERRIDES: Record<string, string> = {}

const BLOG_POST_PREFIX = '/blog/'

const commitDateCache = new Map<string, Date | null>()

function runGit(args: string[]): string | null {
    try {
        const stdout = execFileSync('git', args, {
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'ignore'],
        })

        return stdout.trim() || null
    } catch {
        // No git binary, not a repo, or a shallow/exported tree — fall back.
        return null
    }
}

function lastCommitDate(paths: string[]): Date | null {
    const cacheKey = paths.join('|')

    if (commitDateCache.has(cacheKey)) {
        return commitDateCache.get(cacheKey) ?? null
    }

    // `:(literal)` is required because route directories contain `[lang]` and
    // `[slug]`, which git would otherwise read as glob character classes.
    const pathspecs = paths.map((path) => `:(literal)${path}`)
    const raw = runGit(['log', '-1', '--format=%cI', '--', ...pathspecs])
    const parsed = raw ? new Date(raw) : null
    const value = parsed && !Number.isNaN(parsed.getTime()) ? parsed : null

    commitDateCache.set(cacheKey, value)

    return value
}

/**
 * Maps a sitemap route to the page components that render it. Each route is
 * rendered twice: unprefixed (English, `app/…`) and under the locale segment
 * (Greek, `app/[lang]/…`). We take the most recent commit across both.
 */
function sourcePathsForRoute(route: string): string[] {
    if (route === '' || route === '/') {
        return ['app/page.tsx', 'app/[lang]/page.tsx']
    }

    if (route.startsWith(BLOG_POST_PREFIX)) {
        return ['app/blog/[slug]/page.tsx', 'app/[lang]/blog/[slug]/page.tsx']
    }

    const segment = route.replace(/^\/+/, '')

    return [`app/${segment}/page.tsx`, `app/[lang]/${segment}/page.tsx`]
}

export function getRouteLastModified(route: string): Date {
    const override = LAST_MODIFIED_OVERRIDES[route]

    if (override) {
        const parsed = new Date(override)

        if (!Number.isNaN(parsed.getTime())) {
            return parsed
        }
    }

    return lastCommitDate(sourcePathsForRoute(route)) ?? new Date(FALLBACK_LAST_MODIFIED)
}
