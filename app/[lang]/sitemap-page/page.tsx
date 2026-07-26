import type { Metadata } from 'next';
import Image from 'next/image';
import { Home, Briefcase, Building2, BookOpen } from 'lucide-react';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { localeAlternates } from '@/lib/seo';
import { DriftOrb, PageCTA, V3Root, emphasize } from '@/components/v3';
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

export default async function SitemapPageV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.sitemap_page;
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const em = lang === 'el' ? { directory: 'ιστότοπο', cta: 'ψάχνετε' } : { directory: 'site', cta: 'looking for' };

    // sitemapSections builder — copied verbatim from app/[lang]/sitemap-page/page.tsx
    // (real dict data through localizedPath). Do NOT touch app/sitemap.ts (XML).
    const sitemapSections = [
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
                { name: 'FAQ', path: localizedPath('/faq') },
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

    // FAQ Label Helper (verbatim)
    const faqLabel = dict.footer.nav.company.items.find((i: any) => i.link === 'faq')?.label || 'FAQ';
    sitemapSections[0].pages[7].name = faqLabel;

    return (
        <V3Root>
            {/* Hero */}
            <section className="relative flex min-h-[92vh] items-center overflow-hidden py-[clamp(108px,8.52vw,150px)] pb-[clamp(58px,4.6vw,81px)]">
                <DriftOrb className="h-[60vw] w-[60vw] max-h-[870px] max-w-[870px]" style={{ top: '-10%', right: '-5%', background: 'radial-gradient(circle,rgba(240,189,149,0.17),rgba(240,189,149,0) 62%)' }} duration={16} />
                <DriftOrb className="h-[50vw] w-[50vw] max-h-[710px] max-w-[710px]" style={{ bottom: '-15%', left: '-10%', background: 'radial-gradient(circle,rgba(250,235,227,0.06),rgba(250,235,227,0) 60%)' }} duration={22} reverse />
                <div className="mx-auto w-full max-w-[min(1760px,100%)] pl-[clamp(20px,1.59vw,28px)] pr-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)] lg:pl-[clamp(70px,5.51vw,97px)]">
                    <div className="grid grid-cols-1 items-center gap-[clamp(40px,3.12vw,55px)] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[clamp(46px,3.64vw,64px)]">
                        <div>
                            <ScrollReveal delay={0.15}>
                                <h1 className="mb-[clamp(25px,1.99vw,35px)] text-[clamp(2.99rem,6.21vw,5.64rem)] font-extrabold leading-[1.02] tracking-[-0.022em]">
                                    {content.hero.title}
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.3}>
                                <p className="max-w-[600px] text-[clamp(1.2rem,2vw,1.5rem)] leading-[1.5] text-[#faf6f1]/72">
                                    {content.hero.subtitle}
                                </p>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal direction="right" delay={0.4}>
                            <div className="relative">
                                <div className="relative aspect-square overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                    <Image src="/images/sitemap-visual.jpg" alt={content.hero.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority />
                                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_48%,rgba(11,10,10,0.55))]" />
                                </div>
                                {/* Hero image caption & rotating badge — hidden for now
                                <div className="absolute bottom-[25px] left-[25px] right-[25px]">
                                    <div className="se-gold-text mb-1 text-[clamp(10px,0.68vw,12px)] font-bold tracking-[0.3em]">{content.hero.image_kicker}</div>
                                    <div className="font-didot text-[clamp(1.38rem,1.57vw,1.73rem)] text-[#faf6f1]">{content.hero.image_caption}</div>
                                </div>
                                <SpinningBadge lines={content.hero.badge} className="absolute -right-[21px] -top-[21px] h-[110px] w-[110px]" />
                                */}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

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
            />
        </V3Root>
    );
}
