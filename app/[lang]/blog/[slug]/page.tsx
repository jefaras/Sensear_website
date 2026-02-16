
import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { ArticleJsonLd } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);
    const article = dict.blog.articles.find((a: any) => a.link === slug);

    if (!article) return { title: "Article Not Found" };

    return {
        title: `${article.title} - SensEar Music`,
        description: article.desc,
        openGraph: {
            title: article.title,
            description: article.desc,
            type: 'article',
            ...(article.image && { images: [{ url: article.image }] }),
        },
    };
}

export default async function BlogPost({
    params,
}: {
    params: Promise<{ lang: Locale; slug: string }>;
}) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);

    // Find article from dictionary
    const article = (dict.blog as any).articles.find((a: any) => a.link === slug);

    if (!article) {
        notFound();
    }

    const backButtonText = (dict.blog as any).back_button || "Back to Insights";
    const cta = (dict.blog as any).blog_cta || {};

    const titleParts = article.title.split('|');

    // Helper to render text with markdown-style links [text](url)
    const renderTextWithLinks = (text: string) => {
        const parts = text.split(/(\[.*?\]\(.*?\))/g);
        return parts.map((part, i) => {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
                return (
                    <Link
                        key={i}
                        href={match[2]}
                        className="text-orange-500 hover:text-orange-600 underline decoration-orange-500/30 underline-offset-4 font-bold transition-colors"
                        target={match[2].startsWith('http') ? "_blank" : undefined}
                        rel={match[2].startsWith('http') ? "noopener noreferrer" : undefined}
                    >
                        {match[1]}
                    </Link>
                );
            }
            return part;
        });
    };

    return (
        <div className="bg-[#faebe3] min-h-screen font-sans overflow-x-hidden selection:bg-orange-100">
            {/* Article Schema for SEO */}
            <ArticleJsonLd
                title={article.title}
                description={article.desc}
                url={`/${lang}/blog/${article.link}`}
                image={article.image}
                author={article.author}
            />
            
            {/* Hero Section */}
            <section className="relative pt-32 pb-16 md:pt-48 md:pb-24">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Hero Text */}
                        <div className="lg:col-span-7">
                            <Link href={`/${lang}/blog`} className="inline-flex items-center text-black/40 hover:text-black mb-12 transition-colors group">
                                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                                <span className="text-sm font-bold tracking-widest uppercase font-jakarta">{backButtonText}</span>
                            </Link>

                            <h1 className="flex flex-col mb-8 font-jakarta">
                                <span className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black leading-[1.1] tracking-tight mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700">
                                    {titleParts[0]?.trim()}
                                </span>
                                {titleParts[1] && (
                                    <span className="text-4xl md:text-5xl xl:text-6xl font-extrabold italic text-black/70 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                                        {titleParts[1].trim()}
                                    </span>
                                )}
                            </h1>

                            <p className="text-xl md:text-2xl text-black/70 mb-10 leading-relaxed max-w-2xl font-normal animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
                                {article.desc}
                            </p>

                            <div className="flex items-center gap-6 text-sm text-black/60 font-jakarta font-medium animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
                                <div className="flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-black/20" />
                                    <span className="text-black font-bold uppercase tracking-wider">{article.author}</span>
                                </div>
                                <span className="w-1 h-1 rounded-full bg-black/20" />
                                <span className="uppercase tracking-wider">{article.displayDate}</span>
                                <span className="w-1 h-1 rounded-full bg-black/20" />
                                <span className="uppercase tracking-wider">8 MIN READ</span>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="lg:col-span-5 relative group animate-in fade-in zoom-in-95 duration-1000">
                            <div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] bg-white border border-white/20">
                                <img
                                    src={article.image || "/images/blog/blog-faq-default.jpg"}
                                    alt={article.alt || article.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="pb-24">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-white rounded-[3rem] p-10 md:p-20 shadow-[0_32px_120px_-20px_rgba(0,0,0,0.08)]">
                        <div className="prose prose-xl max-w-none text-black selection:bg-orange-50">
                            {article.structuredContent ? (
                                <div className="space-y-12">
                                    {article.structuredContent.map((section: any, idx: number) => {
                                        switch (section.type) {
                                            case "heading":
                                                if (section.level === 2) return (
                                                    <h2 key={idx} className="text-3xl md:text-4xl font-extrabold text-black mt-20 mb-8 leading-tight tracking-tight font-jakarta">
                                                        {section.value}
                                                    </h2>
                                                );
                                                if (section.level === 3) return (
                                                    <h3 key={idx} className="text-2xl md:text-3xl font-bold text-black mt-16 mb-6 leading-tight font-jakarta">
                                                        {section.value}
                                                    </h3>
                                                );
                                                return <h4 key={idx} className="text-xl font-bold text-black mt-12 mb-4 font-jakarta">{section.value}</h4>;
                                            case "paragraph":
                                                return (
                                                    <p key={idx} className="text-lg md:text-xl text-black/80 leading-relaxed mb-8 font-normal">
                                                        {renderTextWithLinks(section.value)}
                                                    </p>
                                                );
                                            case "list":
                                                return (
                                                    <ul key={idx} className="space-y-6 mb-12 list-none p-0">
                                                        {section.items.map((item: string, i: number) => (
                                                            <li key={i} className="flex items-start text-lg md:text-xl text-black/80 leading-relaxed group">
                                                                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-3.5 mr-6 flex-shrink-0" />
                                                                <span>{renderTextWithLinks(item)}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                );
                                            case "image":
                                                return (
                                                    <figure key={idx} className="my-20 -mx-10 md:-mx-20">
                                                        <div className="aspect-video w-full bg-gray-50 overflow-hidden md:rounded-2xl shadow-lg">
                                                            <img
                                                                src={section.src}
                                                                alt={section.alt || ""}
                                                                className="w-full h-full object-cover"
                                                            />
                                                        </div>
                                                        {section.caption && (
                                                            <figcaption className="mt-6 text-center text-sm text-black/40 font-bold tracking-widest uppercase italic">
                                                                {section.caption}
                                                            </figcaption>
                                                        )}
                                                    </figure>
                                                );
                                            default:
                                                return null;
                                        }
                                    })}
                                </div>
                            ) : (
                                <p className="whitespace-pre-wrap leading-relaxed text-lg md:text-xl text-black/80">
                                    {renderTextWithLinks(article.content || "Content coming soon...")}
                                </p>
                            )}
                        </div>

                        {/* Article Footer Button */}
                        <div className="mt-24 pt-16 border-t border-gray-100 text-center">
                            <Link href={`/${lang}/blog`}>
                                <Button variant="outline" size="lg" className="rounded-full px-12 py-8 border-2 border-black text-black hover:bg-black hover:text-white transition-all duration-500 font-bold tracking-widest uppercase text-sm group">
                                    <ArrowLeft className="w-4 h-4 mr-3 transition-transform group-hover:-translate-x-1" />
                                    {backButtonText}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-transparent text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight tracking-tight font-jakarta">
                        {cta.title}
                    </h2>
                    <p className="text-xl md:text-2xl text-black/60 mb-12 leading-relaxed max-w-3xl mx-auto font-normal">
                        {cta.description}
                    </p>
                    <Button className="rounded-full px-12 py-8 bg-black text-white hover:bg-black/90 transition-all duration-300 font-bold tracking-tight text-lg shadow-xl shadow-black/10">
                        {cta.button}
                    </Button>
                </div>
            </section>
        </div>
    );
}
