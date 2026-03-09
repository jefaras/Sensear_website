const PRODUCTION_SITE_URL = "https://sensear.music";
const LOCAL_DEV_FALLBACK_URL = "http://127.0.0.1:3000";

function normalizeSiteUrl(url: string): string {
    return url.replace(/\/+$/, "");
}

export function getSiteUrl(): string {
    const configuredUrl =
        process.env.SITE_URL ||
        process.env.NEXT_PUBLIC_BASE_URL ||
        (process.env.NODE_ENV === "production" ? PRODUCTION_SITE_URL : LOCAL_DEV_FALLBACK_URL);

    return normalizeSiteUrl(configuredUrl);
}
