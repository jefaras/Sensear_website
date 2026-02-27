import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";

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
    const gridArticles = featuredArticle ? recentArticles : content.articles;

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
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] tracking-tight slide-up-1">
                                {content.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-black/60 leading-relaxed max-w-2xl slide-up-2">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        <div className="w-full slide-up-4 flex justify-end">
                            <div className="w-full max-w-[740px]">
                                {featuredArticle ? (
                                    <Link href={`/${lang}/blog/${featuredArticle.link}`} className="group block">
                                        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square">
                                            <Image
                                                src={featuredArticle.image}
                                                alt={featuredArticle.alt || featuredArticle.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent flex flex-col justify-end p-6 md:p-8">
                                                <span className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-md text-white text-xs md:text-sm font-semibold rounded-full mb-3 w-fit">
                                                    {featuredArticle.tag}
                                                </span>
                                                <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight group-hover:underline decoration-2 underline-offset-4">
                                                    {featuredArticle.title}
                                                </h2>
                                                <p className="text-base md:text-lg text-white/90 mb-4 line-clamp-3">
                                                    {featuredArticle.desc}
                                                </p>
                                                <div className="flex items-center text-white font-semibold">
                                                    {content.featured.read_more}
                                                    <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ) : (
                                    <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square">
                                        <Image
                                            src="/images/blog/blog-faq-default.jpg"
                                            alt="Blog hero image"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover"
                                            priority
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-6 pb-24">
                {/* Recent Articles Grid */}
                <div className="pt-16 mb-16">
                    <h3 className="text-2xl font-bold text-black mb-10">{content.recent.title}</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {gridArticles.map((article) => (
                            <Link
                                key={article.link}
                                href={`/${lang}/blog/${article.link}`}
                                className="group flex flex-col bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="overflow-hidden aspect-[4/3] relative">
                                    <Image
                                        src={article.image}
                                        alt={article.alt || article.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
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
            </div>
        </div>
    );
}
