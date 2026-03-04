'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Locale } from "@/lib/i18n";

interface BlogArticle {
    title: string;
    desc: string;
    tag: string;
    link: string;
}

interface BlogSectionProps {
    lang: Locale;
    title: string;
    subtitle: string;
    articles: BlogArticle[];
    read_more: string;
    cta: string;
}

export default function BlogSection({ lang, title, subtitle, articles, read_more, cta }: BlogSectionProps) {
    return (
        <section className="py-24" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-[2.7rem] md:text-[3.45rem] font-bold text-black mb-4 leading-heading">{title}</h2>
                    <p className="text-xl text-black/60 font-medium max-w-5xl mx-auto">{subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article, idx) => (
                        <Link key={idx} href={`/${lang}/blog/${article.link}`} className="block">
                            <div className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer border border-black/5 h-full flex flex-col">
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={
                                            idx === 0 ? "/images/homepage/blog-music-branding-tips.webp" :
                                                idx === 1 ? "/images/homepage/blog-music-curation-venues.jpg" :
                                                    "/images/homepage/blog-music-hospitality-brand.jpg"
                                        }
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                    />
                                </div>
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-black/5 text-black rounded-sm border border-black/10 w-fit">
                                        {article.tag}
                                    </div>
                                    <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black/80 transition-colors leading-tight">
                                        {article.title}
                                    </h3>
                                    <p className="text-black/70 mb-6 leading-relaxed flex-grow">
                                        {article.desc}
                                    </p>
                                    <div className="flex items-center text-sm font-bold text-black mt-auto group-hover:translate-x-2 transition-transform">
                                        <span>{read_more || "Read More"}</span>
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 flex justify-center">
                    <Link href={`/${lang}/blog`}>
                        <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                            <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                {cta}
                            </span>
                            <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
