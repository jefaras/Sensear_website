import fs from 'node:fs';
import path from 'node:path';

const ROOT = process.cwd();
const OUTPUT_DIR = path.join(ROOT, 'out');
const INVENTORY_PATH = path.join(ROOT, 'dictionaries', 'website-page-content-inventory.md');
const SITEMAP_SOURCE = path.join(ROOT, 'app', 'sitemap.ts');

const LOCALES = [
    { code: 'en', label: 'English' },
    { code: 'el', label: 'Greek' },
];

const ROUTE_CONTENT_KEYS = {
    '/about': 'about_page',
    '/services': 'services_page',
    '/services/signature-playlists': 'signature_playlists',
    '/services/event-soundtracks': 'event_soundtracks',
    '/services/sonic-identity': 'sonic_identity',
    '/services/audio-upgrades': 'audio_upgrades',
    '/industries': 'industries_page',
    '/industries/music-for-hotels-and-resorts': 'hotels_resorts',
    '/industries/music-for-restaurants-and-bars': 'restaurants_bars',
    '/industries/music-for-retail-stores': 'retail_stores',
    '/industries/music-for-wellness-and-gyms': 'wellness_gyms',
    '/industries/music-for-events-and-experiences': 'events_experiences',
    '/industries/music-for-art-museums-and-fashion': 'art_museums_fashion',
    '/case-studies': 'case_studies',
    '/blog': 'blog',
    '/contact': 'contact',
    '/faq': 'faq_page',
    '/sitemap-page': 'sitemap_page',
};

const DETAIL_ROUTES = new Set([
    '/services/signature-playlists',
    '/services/event-soundtracks',
    '/services/sonic-identity',
    '/services/audio-upgrades',
    '/industries/music-for-hotels-and-resorts',
    '/industries/music-for-restaurants-and-bars',
    '/industries/music-for-retail-stores',
    '/industries/music-for-wellness-and-gyms',
    '/industries/music-for-events-and-experiences',
    '/industries/music-for-art-museums-and-fashion',
]);

function readJson(relativePath) {
    return JSON.parse(fs.readFileSync(path.join(ROOT, relativePath), 'utf8'));
}

function extractCanonicalRoutes() {
    const source = fs.readFileSync(SITEMAP_SOURCE, 'utf8');
    const routesBlock = source.match(/const routes\s*=\s*\[([\s\S]*?)\]\s*/)?.[1];

    if (!routesBlock) {
        throw new Error('Could not find the canonical routes array in app/sitemap.ts.');
    }

    const routes = [...routesBlock.matchAll(/^\s*'([^']*)'/gm)].map((match) => match[1]);

    if (routes.length === 0) {
        throw new Error('No canonical routes were extracted from app/sitemap.ts.');
    }

    return routes;
}

function htmlFileFor(locale, route) {
    const segments = [];
    if (locale === 'el') segments.push('el');
    if (route) segments.push(...route.split('/').filter(Boolean));
    return path.join(OUTPUT_DIR, ...segments, 'index.html');
}

function publicPathFor(locale, route) {
    if (locale === 'el') return route ? `/el${route}/` : '/el/';
    return route ? `${route}/` : '/';
}

function decodeHtml(value = '') {
    const namedEntities = {
        amp: '&',
        apos: "'",
        gt: '>',
        hellip: '…',
        ldquo: '“',
        lsquo: '‘',
        lt: '<',
        mdash: '—',
        nbsp: ' ',
        ndash: '–',
        quot: '"',
        rdquo: '”',
        rsquo: '’',
    };

    return value.replace(/&(#x[\da-f]+|#\d+|[a-z]+);/gi, (entity, code) => {
        if (code.startsWith('#x')) return String.fromCodePoint(Number.parseInt(code.slice(2), 16));
        if (code.startsWith('#')) return String.fromCodePoint(Number.parseInt(code.slice(1), 10));
        return namedEntities[code.toLowerCase()] ?? entity;
    });
}

function cleanHtmlText(value = '') {
    return decodeHtml(
        value
            .replace(/<!--[\s\S]*?-->/g, '')
            .replace(/<br\s*\/?>/gi, ' ')
            .replace(/<[^>]+>/g, ' ')
    )
        .replace(/\s+/g, ' ')
        .trim();
}

function extractAttribute(tag, attributeName) {
    const pattern = new RegExp(`${attributeName}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, 'i');
    const match = tag.match(pattern);
    return match ? decodeHtml(match[1] ?? match[2] ?? '') : '';
}

function extractTitle(html) {
    return cleanHtmlText(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '');
}

function extractMetaDescription(html) {
    for (const match of html.matchAll(/<meta\b[^>]*>/gi)) {
        const tag = match[0];
        if (extractAttribute(tag, 'name').toLowerCase() === 'description') {
            return extractAttribute(tag, 'content').replace(/\s+/g, ' ').trim();
        }
    }
    return '';
}

function extractHeadings(html) {
    const headings = { h1: [], h2: [], h3: [], h4: [], h5: [], h6: [] };

    for (const match of html.matchAll(/<(h[1-6])\b[^>]*>([\s\S]*?)<\/\1>/gi)) {
        const level = match[1].toLowerCase();
        const text = cleanHtmlText(match[2]);
        if (text) headings[level].push(text);
    }

    return headings;
}

function extractHeaderParagraphs(html) {
    const h1End = html.search(/<\/h1>/i);
    if (h1End === -1) return [];

    const afterH1 = html.slice(h1End);
    const h2Start = afterH1.search(/<h2\b/i);
    const headerRegion = h2Start === -1 ? afterH1 : afterH1.slice(0, h2Start);

    return [...headerRegion.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)]
        .map((match) => cleanHtmlText(match[1]))
        .filter(Boolean);
}

function getHeroSupportingCopy(locale, route, dictionary, html) {
    if (route === '') {
        const subtitles = dictionary.home?.hero?.subtitle ?? [];
        return (Array.isArray(subtitles) ? subtitles : [subtitles]).map((text, index) => ({
            label: `Hero subtitle ${index + 1}`,
            text,
        }));
    }

    if (route.startsWith('/blog/')) {
        const slug = route.slice('/blog/'.length);
        const article = dictionary.blog?.articles?.find((item) => item.link === slug);
        return article?.desc ? [{ label: 'Hero subtitle', text: article.desc }] : [];
    }

    if (route === '/privacy' || route === '/terms') {
        const paragraphs = extractHeaderParagraphs(html);
        const items = [];
        if (paragraphs[0]) items.push({ label: 'Header note', text: paragraphs[0] });
        if (paragraphs[1]) items.push({ label: 'Header supporting text', text: paragraphs[1] });
        return items;
    }

    const contentKey = ROUTE_CONTENT_KEYS[route];
    const hero = contentKey ? dictionary[contentKey]?.hero : undefined;
    if (!hero) return [];

    const items = [];
    const subtitles = Array.isArray(hero.subtitle) ? hero.subtitle : [hero.subtitle];
    subtitles.filter(Boolean).forEach((text, index) => {
        items.push({
            label: subtitles.length > 1 ? `Hero subtitle ${index + 1}` : 'Hero subtitle',
            text,
        });
    });

    if (DETAIL_ROUTES.has(route) && hero.description) {
        items.push({ label: 'Hero description', text: hero.description });
    }

    return items;
}

function escapeMarkdown(value) {
    return String(value).replace(/\\/g, '\\\\').replace(/\n/g, ' ').trim();
}

function renderInventory(records, canonicalRoutes) {
    const generatedOn = new Date().toISOString().slice(0, 10);
    const lines = [
        '# Website Page Titles, Descriptions, Hero Copy & Headings',
        '',
        `Generated from the production build on ${generatedOn}.`,
        '',
        '## Scope and source of truth',
        '',
        `- ${canonicalRoutes.length} canonical routes × ${LOCALES.length} languages = ${records.length} localized pages.`,
        '- Routes come from `app/sitemap.ts`.',
        '- Page titles, meta descriptions, and H1–H6 headings come from the rendered production HTML in `out/`.',
        '- Hero subtitles and hero descriptions come from the localized content used by each page. Legal pages use their header note and introductory copy.',
        '- English uses unprefixed URLs; Greek uses `/el/` URLs.',
        '- `/home-v2/` is intentionally excluded because it is a demo route and is not listed in the canonical sitemap.',
        '',
        '## Completion check',
        '',
        `- Canonical localized pages expected: ${records.length}`,
        `- Canonical localized pages inventoried: ${records.length}`,
        `- Pages with one rendered H1: ${records.filter((record) => record.headings.h1.length === 1).length}`,
        `- Pages with non-empty page titles: ${records.filter((record) => record.title).length}`,
        `- Pages with non-empty page descriptions: ${records.filter((record) => record.description).length}`,
        `- Pages with hero/header supporting copy: ${records.filter((record) => record.heroCopy.length > 0).length}`,
        '',
        '---',
        '',
    ];

    for (const locale of LOCALES) {
        lines.push(`# ${locale.label} pages`, '');

        for (const record of records.filter((item) => item.locale === locale.code)) {
            lines.push(
                `## ${record.publicPath}`,
                '',
                `- **Page title:** ${escapeMarkdown(record.title)}`,
                `- **Page description:** ${escapeMarkdown(record.description)}`,
                ''
            );

            if (record.heroCopy.length > 0) {
                lines.push('### Hero / header supporting copy', '');
                for (const item of record.heroCopy) {
                    lines.push(`- **${item.label}:** ${escapeMarkdown(item.text)}`);
                }
                lines.push('');
            } else {
                lines.push('### Hero / header supporting copy', '', '- None', '');
            }

            for (let level = 1; level <= 6; level += 1) {
                const key = `h${level}`;
                const values = record.headings[key];
                lines.push(`### H${level} (${values.length})`, '');
                if (values.length === 0) {
                    lines.push('- None');
                } else {
                    values.forEach((value, index) => {
                        lines.push(`- ${index + 1}. ${escapeMarkdown(value)}`);
                    });
                }
                lines.push('');
            }

            lines.push('---', '');
        }
    }

    return `${lines.join('\n')}\n`;
}

function validate(records, canonicalRoutes) {
    const expectedCount = canonicalRoutes.length * LOCALES.length;
    const errors = [];

    if (records.length !== expectedCount) {
        errors.push(`Expected ${expectedCount} records but generated ${records.length}.`);
    }

    const uniquePaths = new Set(records.map((record) => record.publicPath));
    if (uniquePaths.size !== records.length) {
        errors.push(`Expected ${records.length} unique public paths but found ${uniquePaths.size}.`);
    }

    for (const record of records) {
        if (!record.title) errors.push(`${record.publicPath}: missing page title.`);
        if (!record.description) errors.push(`${record.publicPath}: missing page description.`);
        if (record.headings.h1.length !== 1) {
            errors.push(`${record.publicPath}: expected exactly one H1, found ${record.headings.h1.length}.`);
        }
        if (record.heroCopy.length === 0) {
            errors.push(`${record.publicPath}: missing hero/header supporting copy.`);
        }
    }

    if (errors.length > 0) {
        throw new Error(`Inventory validation failed:\n- ${errors.join('\n- ')}`);
    }
}

function main() {
    const canonicalRoutes = extractCanonicalRoutes();
    const dictionaries = {
        en: readJson('dictionaries/en.json'),
        el: readJson('dictionaries/el.json'),
    };
    const records = [];

    for (const locale of LOCALES) {
        for (const route of canonicalRoutes) {
            const htmlPath = htmlFileFor(locale.code, route);
            if (!fs.existsSync(htmlPath)) {
                throw new Error(`Missing rendered page: ${path.relative(ROOT, htmlPath)}`);
            }

            const html = fs.readFileSync(htmlPath, 'utf8');
            records.push({
                locale: locale.code,
                route,
                publicPath: publicPathFor(locale.code, route),
                title: extractTitle(html),
                description: extractMetaDescription(html),
                headings: extractHeadings(html),
                heroCopy: getHeroSupportingCopy(locale.code, route, dictionaries[locale.code], html),
            });
        }
    }

    validate(records, canonicalRoutes);
    fs.writeFileSync(INVENTORY_PATH, renderInventory(records, canonicalRoutes), 'utf8');

    console.log(`Generated ${path.relative(ROOT, INVENTORY_PATH)}`);
    console.log(`Validated ${records.length}/${records.length} localized pages.`);
    console.log('Validated one H1, one page title, one description, and hero/header copy on every page.');
}

main();
