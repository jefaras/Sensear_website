import Link from "next/link";
import { Home, Briefcase, Building2, BookOpen, ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import { Card } from "@/components/ui/card";

export default async function SitemapPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.sitemap_page;

    const sitemapSections = [
        {
            title: content.sections.main,
            icon: Home,
            pages: [
                { name: dict.navigation.home, path: `/${lang}` },
                { name: dict.navigation.services, path: `/${lang}/services` },
                { name: dict.navigation.industries, path: `/${lang}/industries` },
                { name: dict.navigation.case_studies, path: `/${lang}/case-studies` },
                { name: dict.navigation.about, path: `/${lang}/about` },
                { name: dict.navigation.contact, path: `/${lang}/contact` },
                { name: dict.navigation.blog, path: `/${lang}/blog` },
                { name: "FAQ", path: `/${lang}/faq` } // FAQ key missing in nav? I'll use dict.footer.nav.company.items find? Or just hardcode logic or add to nav. I added it to footer. I'll use footer label.
            ]
        },
        {
            title: content.sections.services,
            icon: Briefcase,
            pages: [
                { name: dict.services_page.hero.title.split(',')[0], path: `/${lang}/services` }, // Intro
                { name: dict.services_page.services.playlists.title, path: `/${lang}/services/signature-playlists` },
                { name: dict.services_page.services.events.title, path: `/${lang}/services/event-soundtracks` },
                { name: dict.services_page.services.strategy.title, path: `/${lang}/services/sonic-strategy` },
                { name: dict.services_page.services.upgrades.title, path: `/${lang}/services/audio-upgrades` }
            ]
        },
        {
            title: content.sections.industries,
            icon: Building2,
            pages: [
                { name: dict.industries_page.hero.title, path: `/${lang}/industries` },
                ...dict.industries_page.expertise.items.map((item: any) => ({
                    name: item.title,
                    path: `/${lang}/${item.link}`
                }))
            ]
        },
        {
            title: content.sections.blog,
            icon: BookOpen,
            pages: [
                { name: dict.blog.meta.title, path: `/${lang}/blog` },
                ...dict.blog.articles.map((article: any) => ({
                    name: article.title,
                    path: `/${lang}/blog/${article.link}`
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
            <section
                className="relative pt-32 pb-32 min-h-[50vh] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="w-full px-6 md:px-12 lg:px-16 container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1]">
                                {content.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        <div className="w-full flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square">
                                        <img
                                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/70c619556_handling-sensear-sitemap.jpg"
                                            alt="Sitemap"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sitemap Content */}
            <section className="py-20 bg-[#faebe3]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-8">
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
                                            <Link
                                                href={page.path}
                                                className="text-black/70 hover:text-black hover:translate-x-2 transition-all inline-block"
                                            >
                                                → {page.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center flex flex-col items-center gap-6">
                        <p className="text-black/70 text-lg">
                            {content.cta.title}
                        </p>

                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link href={`/${lang}/contact`}>
                                <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                        {content.cta.contact_btn}
                                    </span>
                                    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </Link>

                            <span className="text-black/70 font-medium">{content.cta.or}</span>

                            <Link href={`/${lang}/faq`}>
                                <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                    <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                        {content.cta.faq_btn}
                                    </span>
                                    <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

