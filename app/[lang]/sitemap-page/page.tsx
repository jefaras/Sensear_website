import type { Metadata } from 'next';
import { Home, Briefcase, Building2, BookOpen } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { localeAlternates } from '@/lib/seo';
import { DriftOrb, PageCTA, SplitHero, V3Root, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { DirectoryCard } from '@/components/sitemap-v3';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        alternates: localeAlternates(lang, '/sitemap-page'),
        title: dict.sitemap_page.meta.title,
        description: dict.sitemap_page.meta.description,
    };
}

type SitemapDictionary = Awaited<ReturnType<typeof getDictionary>>;

/**
 * Builds the four directory sections for one locale.
 *
 * Extracted so the page can render the sections twice: once for the current
 * locale, once for the alternate one. The alternate grid exists for crawl
 * reasons — before it, the only crawlable link from an English page into the
 * Greek site was the single hreflang language switcher, which left `/el/*`
 * effectively reachable only via the XML sitemap. See
 * docs/archive/seo-gsc-audit-2026-07-27.md §2.1.
 */
function buildSitemapSections(dict: SitemapDictionary, lang: Locale) {
    const content = dict.sitemap_page;
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const faqLabel = dict.footer.nav.company.items.find((i: any) => i.link === 'faq')?.label || 'FAQ';

    return [
        {
            title: content.sections.main,
            icon: Home,
            pages: [
                { name: dict.navigation.home, path: localizedPath('/') },
                { name: dict.navigation.services, path: localizedPath('/services') },
                { name: dict.navigation.industries, path: localizedPath('/industries') },
                { name: dict.navigation.case_studies, path: localizedPath('/case-studies') },
                { name: dict.navigation.about, path: localizedPath('/about') },
                { name: dict.navigation.contact, path: localizedPath('/contact') },
                { name: dict.navigation.blog, path: localizedPath('/blog') },
                { name: faqLabel, path: localizedPath('/faq') },
                // Greek-only campaign page: listed in the Greek directory only, which
                // both sitemap pages render, so it gets crawlable inlinks from each.
                ...(lang === 'el' ? [{ name: content.free_assessment, path: localizedPath('/dorean-axiologisi') }] : []),
            ],
        },
        {
            title: content.sections.services,
            icon: Briefcase,
            pages: [
                { name: dict.services_page.hero.title.split(',')[0], path: localizedPath('/services') },
                { name: dict.services_page.services.playlists.title, path: localizedPath('/services/signature-playlists') },
                { name: dict.services_page.services.events.title, path: localizedPath('/services/event-soundtracks') },
                { name: dict.services_page.services.strategy.title, path: localizedPath('/services/sonic-identity') },
                { name: dict.services_page.services.upgrades.title, path: localizedPath('/services/audio-upgrades') },
                { name: dict.services_page.services.experience_design.title, path: localizedPath('/services/experience-design') },
            ],
        },
        {
            title: content.sections.industries,
            icon: Building2,
            pages: [
                { name: dict.industries_page.hero.title, path: localizedPath('/industries') },
                ...dict.industries_page.expertise.items.map((item: any) => ({
                    name: item.title,
                    path: localizedPath(`/${item.link}`),
                })),
            ],
        },
        {
            title: content.sections.blog,
            icon: BookOpen,
            pages: [
                { name: dict.blog.meta.title, path: localizedPath('/blog') },
                ...dict.blog.articles.map((article: any) => ({
                    name: article.title,
                    path: localizedPath(`/blog/${article.link}`),
                })),
            ],
        },
    ];
}

export default async function SitemapPageV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.sitemap_page;
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const em = lang === 'el' ? { directory: 'ιστότοπο', cta: 'ψάχνετε' } : { directory: 'site', cta: 'looking for' };

    const sitemapSections = buildSitemapSections(dict, lang);

    // Alternate locale: the same directory in the other language. Page names come
    // from that locale's own dictionary so the links read natively.
    const alternateLang: Locale = lang === 'el' ? 'en' : 'el';
    const alternateDict = await getDictionary(alternateLang);
    const alternateSections = buildSitemapSections(alternateDict, alternateLang);
    const alternateCopy = content.alternate;

    return (
        <V3Root>
            {/* Hero */}
            <SplitHero image={{ src: '/images/sitemap-visual.jpg', alt: content.hero.image_alt }}>
                <ScrollReveal delay={0.15}>
                    <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(2.3rem,4.6vw,5.5rem)] font-extrabold leading-[1.02] tracking-[-0.022em]">
                        {content.hero.title}
                    </h1>
                </ScrollReveal>
                <ScrollReveal delay={0.3}>
                    <p className="max-w-[600px] text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.5] text-[#faf6f1]/72">
                        {content.hero.subtitle}
                    </p>
                </ScrollReveal>
            </SplitHero>

            {/* Directory */}
            <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)] pb-[clamp(108px,8.52vw,150px)]">
                <DriftOrb className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]" style={{ top: '6%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }} duration={23} />
                <div className="relative z-10 mx-auto max-w-[1200px] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="mx-auto mb-[clamp(46px,3.64vw,64px)] max-w-[920px] text-center">
                        <ScrollReveal delay={0.06}>
                            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                                {emphasize(content.directory_title, em.directory)}
                            </h2>
                        </ScrollReveal>
                    </div>

                    <StaggerChildren className="grid grid-cols-1 gap-[clamp(20px,1.99vw,28px)] md:grid-cols-2" staggerDelay={0.05}>
                        {sitemapSections.map((section, index) => (
                            <DirectoryCard key={index} title={section.title} icon={section.icon} pages={section.pages} delay={index * 0.05} />
                        ))}
                    </StaggerChildren>

                    {/* Alternate-locale directory */}
                    <div
                        className="mx-auto mb-[clamp(46px,3.64vw,64px)] mt-[clamp(70px,5.51vw,97px)] max-w-[920px] text-center"
                        lang={alternateLang}
                    >
                        <ScrollReveal delay={0.06}>
                            <h2 className="text-[clamp(2rem,4vw,3.4rem)] font-extrabold leading-[1.08] tracking-[-0.02em]">
                                {alternateCopy.heading}
                            </h2>
                        </ScrollReveal>
                        <ScrollReveal delay={0.12}>
                            <p className="mx-auto mt-[clamp(16px,1.3vw,22px)] max-w-[620px] text-[clamp(1.05rem,1.3vw,1.2rem)] leading-[1.5] text-[#faf6f1]/72">
                                {alternateCopy.lede}
                            </p>
                        </ScrollReveal>
                    </div>

                    <div lang={alternateLang}>
                        <StaggerChildren className="grid grid-cols-1 gap-[clamp(20px,1.99vw,28px)] md:grid-cols-2" staggerDelay={0.05}>
                            {alternateSections.map((section, index) => (
                                <DirectoryCard key={`alt-${index}`} title={section.title} icon={section.icon} pages={section.pages} delay={index * 0.05} />
                            ))}
                        </StaggerChildren>
                    </div>
                </div>
            </section>

            <PageCTA
                heading={content.cta.title}
                emWord={em.cta}
                lede={content.cta.text}
                primaryLabel={content.cta.contact_btn}
                primaryHref={localizedPath('/contact')}
                ghostLabel={content.cta.faq_btn}
                ghostHref={localizedPath('/faq')}
                bgImage="/images/contact/contact-hero-venue-consultation.jpg"
                bgAlt={dict.contact.hero.image_alt}
            />
        </V3Root>
    );
}
