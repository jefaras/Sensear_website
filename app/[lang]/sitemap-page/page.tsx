import Link from "next/link";
import { Home, Briefcase, Building2, BookOpen } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { FinalCTA } from "@/components/sections/FinalCTA";
import Image from "next/image";
import { ScrollReveal, StaggerChildren } from "@/components/motion";
import { getLocalizedPath } from "@/lib/localized-path";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.sitemap_page.meta.title,
        description: dict.sitemap_page.meta.description,
    };
}

export default async function SitemapPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.sitemap_page;
    const localizedPath = (path: string) => getLocalizedPath(lang, path);

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
                { name: "FAQ", path: localizedPath('/faq') } // FAQ key missing in nav? I'll use dict.footer.nav.company.items find? Or just hardcode logic or add to nav. I added it to footer. I'll use footer label.
            ]
        },
        {
            title: content.sections.services,
            icon: Briefcase,
            pages: [
                { name: dict.services_page.hero.title.split(',')[0], path: localizedPath('/services') }, // Intro
                { name: dict.services_page.services.playlists.title, path: localizedPath('/services/signature-playlists') },
                { name: dict.services_page.services.events.title, path: localizedPath('/services/event-soundtracks') },
                { name: dict.services_page.services.strategy.title, path: localizedPath('/services/sonic-identity') },
                { name: dict.services_page.services.upgrades.title, path: localizedPath('/services/audio-upgrades') }
            ]
        },
        {
            title: content.sections.industries,
            icon: Building2,
            pages: [
                { name: dict.industries_page.hero.title, path: localizedPath('/industries') },
                ...dict.industries_page.expertise.items.map((item: any) => ({
                    name: item.title,
                    path: localizedPath(`/${item.link}`)
                }))
            ]
        },
        {
            title: content.sections.blog,
            icon: BookOpen,
            pages: [
                { name: dict.blog.meta.title, path: localizedPath('/blog') },
                ...dict.blog.articles.map((article: any) => ({
                    name: article.title,
                    path: localizedPath(`/blog/${article.link}`)
                }))
            ]
        }
    ];

    // FAQ Label Helper
    const faqLabel = dict.footer.nav.company.items.find((i: any) => i.link === 'faq')?.label || "FAQ";
    sitemapSections[0].pages[7].name = faqLabel;

    return (
        <div className="bg-[#faebe3]">

            {/* Hero Section */}
            <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 xl:pt-32 pb-8 lg:pb-24 min-h-[90vh] lg:min-h-screen flex flex-col justify-center overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <ScrollReveal>
                                <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1]">
                                    {content.hero.title}
                                </h1>
                            </ScrollReveal>
                            <ScrollReveal delay={0.1}>
                                <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                                    {content.hero.subtitle}
                                </p>
                            </ScrollReveal>
                        </div>

                        <ScrollReveal delay={0.2} className="w-full flex justify-end">
                            <div className="w-full max-w-[740px]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square relative">
                                    <Image
                                        src="/images/sitemap-visual.jpg"
                                        alt="Sitemap"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1536px) 50vw, 740px"
                                        priority
                                    />
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Sitemap Content */}
            <section className="py-20 bg-[#faebe3]">
                <div className="max-w-7xl mx-auto px-6">
                    <StaggerChildren className="grid md:grid-cols-2 gap-8" staggerDelay={0.1}>
                        {sitemapSections.map((section, index) => (
                            <Card key={index} className="p-8 bg-white shadow-lg">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center">
                                        <section.icon className="w-6 h-6 text-black" />
                                    </div>
                                    <h2 className="text-2xl font-bold text-black">{section.title}</h2>
                                </div>
                                <ul className="space-y-3">
                                    {section.pages.map((page, pageIndex) => (
                                        <li key={pageIndex}>
                                            <ScrollReveal delay={pageIndex * 0.04}>
                                                <Link
                                                    href={page.path}
                                                    className="text-black/70 hover:text-black hover:translate-x-2 transition-all inline-block"
                                                >
                                                    → {page.name}
                                                </Link>
                                            </ScrollReveal>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            {/* Can't find what you're looking for? */}
            <FinalCTA
                heading={content.cta.title}
                text={content.cta.text}
                buttons={[
                    { text: content.cta.contact_btn, link: "contact" },
                    { text: content.cta.faq_btn, link: "faq" }
                ]}
                lang={lang}
            />
        </div>
    );
}

