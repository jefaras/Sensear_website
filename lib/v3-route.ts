/**
 * Shared predicate matching every dark-editorial v3 demo route.
 *
 * Any path segment ending in `-v3` activates the v3 chrome treatment
 * (light-on-dark Navbar + suppression of the global light footer, which
 * each v3 page replaces with its own `FooterV3`).
 *
 * Matches: `/faq-v3`, `/en/faq-v3`, `/home-v3`, `/en/home-v3`,
 * `/services-v3/<slug>`, `/blog-v3/<slug>`, etc.
 * False for: `/faq`, `/`, `/services`, and every non-`-v3` path.
 */
export function isV3Route(pathname: string | null | undefined): boolean {
    if (!pathname) return false;
    return pathname.split('/').some((segment) => segment.endsWith('-v3'));
}
