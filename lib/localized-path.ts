import type { Locale } from '@/lib/i18n'

function normalizePath(path: string | null | undefined): string {
    if (!path) return '/'

    const withLeadingSlash = path.startsWith('/') ? path : `/${path}`
    const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, '')

    return withoutTrailingSlash || '/'
}

function withTrailingSlash(path: string): string {
    return path === '/' ? path : `${path}/`
}

export function getLocalizedPath(lang: Locale, path: string = '/'): string {
    const normalizedPath = normalizePath(path)

    if (lang === 'en') {
        return withTrailingSlash(normalizedPath === '/' ? '/en' : `/en${normalizedPath}`)
    }

    return withTrailingSlash(normalizedPath)
}

export function getPathLocale(pathname: string | null | undefined): Locale {
    const normalizedPath = normalizePath(pathname)

    return normalizedPath === '/en' || normalizedPath.startsWith('/en/') ? 'en' : 'el'
}

export function getGreekPath(pathname: string | null | undefined): string {
    const normalizedPath = normalizePath(pathname)

    if (normalizedPath === '/en' || normalizedPath === '/el') {
        return '/'
    }

    if (normalizedPath.startsWith('/en/') || normalizedPath.startsWith('/el/')) {
        return normalizedPath.slice(3) || '/'
    }

    return normalizedPath
}

export function getAlternatePath(pathname: string | null | undefined, targetLang: Locale): string {
    const greekPath = getGreekPath(pathname)

    return getLocalizedPath(targetLang, greekPath)
}
