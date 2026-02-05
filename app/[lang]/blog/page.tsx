import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.blog.meta.title,
        description: dict.blog.meta.description,
    };
}

export default async function Blog({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.blog;

    const featuredArticle = content.articles[0];
    const recentArticles = content.articles.slice(1);

    return (
        <div className="bg-[#faebe3] min-h-screen pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-6">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6">{content.hero.title}</h1>
                    <p className="text-xl text-black/60 font-medium">{content.hero.subtitle}</p>
                </div>

                {/* Featured Article */}
                {featuredArticle && (
                    <div className="mb-24">
                        <Link href={`/${lang}/blog/${featuredArticle.link}`} className="group block">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[2/1]">
                                <img
                                    src={featuredArticle.image}
                                    alt={featuredArticle.alt || featuredArticle.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
                                    <span className="inline-block px-4 py-1.5 bg-white/20 backdrop-blur-md text-white text-sm font-semibold rounded-full mb-4 w-fit">
                                        {featuredArticle.tag}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:underline decoration-2 underline-offset-4">
                                        {featuredArticle.title}
                                    </h2>
                                    <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6">
                                        {featuredArticle.desc}
                                    </p>
                                    <div className="flex items-center text-white font-semibold">
                                        {content.featured.read_more} <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Recent Articles Grid */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold text-black mb-10">{content.recent.title}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {recentArticles.map((article, index) => (
                            <Link
                                key={article.link}
                                href={`/${lang}/blog/${article.link}`}
                                className="group flex flex-col bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="overflow-hidden aspect-[4/3] relative">
                                    <img
                                        src={article.image}
                                        alt={article.alt || article.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <span className="inline-block px-3 py-1 bg-black/5 text-black text-xs font-semibold rounded-full mb-4 w-fit">
                                        {article.tag}
                                    </span>
                                    <h4 className="text-xl font-bold text-black mb-3 group-hover:text-black/70 transition-colors line-clamp-2">
                                        {article.title}
                                    </h4>
                                    <p className="text-black/60 mb-4 line-clamp-3 flex-grow text-sm">
                                        {article.desc}
                                    </p>
                                    <div className="flex items-center justify-between text-sm text-black/50 mt-auto pt-4 border-t border-black/10">
                                        <span>{article.displayDate}</span>
                                        <span>{article.author}</span>
                                    </div>
                                    <div className="flex items-center text-black font-semibold mt-4">
                                        {content.recent.read_more} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Stay Updated Section */}
                <section className="py-20 -mx-6 px-6 bg-[#f5e6d3] rounded-3xl">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">{content.newsletter.heading}</h3>
                        <p className="text-black/70 text-lg mb-10">
                            {content.newsletter.description}
                            <Link href={`/${lang}/about`} className="text-black underline hover:text-black/70">
                                {content.newsletter.about_link}
                            </Link>
                            {' '}{lang === 'en' ? 'or' : 'ή'}{' '}
                            <Link href={`/${lang}/contact`} className="text-black underline hover:text-black/70">
                                {content.newsletter.contact_link}
                            </Link>
                            {content.newsletter.description_suffix}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                            <input
                                type="email"
                                placeholder={content.newsletter.email_placeholder}
                                className="flex-1 px-6 py-4 rounded-xl bg-white border border-black/10 text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-black/20"
                                disabled
                            />
                            <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-10 py-4 text-lg font-semibold rounded-xl transition-all duration-300 overflow-hidden flex items-center justify-center">
                                <span className="transition-transform duration-300 group-hover:-translate-x-2 inline-block">
                                    {content.newsletter.subscribe_button}
                                </span>
                                <ArrowRight className="absolute right-4 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
