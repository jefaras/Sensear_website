import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { GhostButton, Kicker, emphasize } from '@/components/v3';

interface BlogArticle {
    title: string;
    desc: string;
    tag: string;
    link: string;
}

interface JournalProps {
    lang: Locale;
    kicker: string;
    subtitle: string;
    allArticles: string;
    articles: BlogArticle[];
}

const ARTICLE_IMAGES = [
    '/images/homepage/blog-music-branding-tips.webp',
    '/images/homepage/blog-music-curation-venues.jpg',
    '/images/homepage/blog-music-hospitality-brand.jpg',
];

export function Journal({ lang, kicker, subtitle, allArticles, articles }: JournalProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'διαμορφώνει' : 'shapes';

    return (
        <section className="relative py-[130px]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute h-[42vw] max-h-[520px] w-[42vw] max-w-[520px]"
                style={{
                    top: '0',
                    left: '42%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)',
                    filter: 'blur(24px)',
                    animation: 'se-drift 23s ease-in-out infinite reverse',
                }}
            />
            <div className="relative z-10 mx-auto max-w-[1380px] px-6 sm:px-8">
                <div className="mb-14 flex flex-wrap items-end justify-between gap-[30px]">
                    <div>
                        <ScrollReveal>
                            <Kicker className="mb-[18px]">{kicker}</Kicker>
                        </ScrollReveal>
                        <ScrollReveal delay={0.06}>
                            <h2 className="max-w-[680px] text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                                {emphasize(subtitle, emWord)}
                            </h2>
                        </ScrollReveal>
                    </div>
                    <ScrollReveal delay={0.2}>
                        <GhostButton href={localizedPath('/blog')}>{allArticles}</GhostButton>
                    </ScrollReveal>
                </div>

                <StaggerChildren className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
                    {articles.map((article, i) => (
                        <Link
                            key={i}
                            href={localizedPath(`/blog/${article.link}`)}
                            className="group flex flex-col no-underline"
                        >
                            <div className="mb-[22px] aspect-[4/3] overflow-hidden rounded-lg">
                                <Image
                                    src={ARTICLE_IMAGES[i] ?? ARTICLE_IMAGES[0]}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <span className="se-gold-text mb-3 text-[11px] font-bold tracking-[0.22em]">
                                {article.tag.toUpperCase()}
                            </span>
                            <h3 className="mb-3 text-[1.28rem] font-bold leading-[1.28]">{article.title}</h3>
                            <p className="text-[0.96rem] leading-[1.6] text-[#faf6f1]/55">{article.desc}</p>
                        </Link>
                    ))}
                </StaggerChildren>
            </div>
        </section>
    );
}
