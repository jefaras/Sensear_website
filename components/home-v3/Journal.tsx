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
    headline: string;
    allArticles: string;
    articles: BlogArticle[];
}

const ARTICLE_IMAGES = [
    '/images/homepage/blog-music-branding-tips.webp',
    '/images/homepage/blog-music-curation-venues.jpg',
    '/images/homepage/blog-music-hospitality-brand.jpg',
];

export function Journal({ lang, kicker, headline, allArticles, articles }: JournalProps) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const emWord = lang === 'el' ? 'διαμορφώνει' : 'shapes';

    return (
        <section className="relative py-[clamp(108px,8.52vw,150px)]">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute h-[42vw] max-h-[600px] w-[42vw] max-w-[600px]"
                style={{
                    top: '0',
                    left: '42%',
                    background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)',
                    filter: 'blur(24px)',
                    animation: 'se-drift 23s ease-in-out infinite reverse',
                }}
            />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="mb-[clamp(46px,3.64vw,64px)]">
                    <ScrollReveal>
                        <Kicker className="mb-[clamp(15px,1.19vw,21px)]">{kicker}</Kicker>
                    </ScrollReveal>
                    <ScrollReveal delay={0.06}>
                        <h2 className="max-w-[780px] text-[clamp(2.18rem,4.14vw,3.45rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                            {emphasize(headline, emWord)}
                        </h2>
                    </ScrollReveal>
                </div>

                <StaggerChildren className="grid grid-cols-1 gap-[clamp(20px,1.59vw,28px)] sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
                    {articles.map((article, i) => (
                        <Link
                            key={i}
                            href={localizedPath(`/blog/${article.link}`)}
                            className="group flex flex-col no-underline"
                        >
                            <div className="relative mb-[clamp(18px,1.42vw,25px)] aspect-[4/3] overflow-hidden rounded-lg">
                                <Image
                                    src={ARTICLE_IMAGES[i] ?? ARTICLE_IMAGES[0]}
                                    alt={article.title}
                                    fill
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <span className="se-gold-text mb-3 text-[clamp(10px,0.74vw,13px)] font-bold tracking-[0.22em]">
                                {article.tag.toUpperCase()}
                            </span>
                            <h3 className="mb-3 text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold leading-[1.28]">{article.title}</h3>
                            <p className="text-[clamp(0.88rem,1vw,1.1rem)] leading-[1.6] text-[#faf6f1]/55">{article.desc}</p>
                        </Link>
                    ))}
                </StaggerChildren>

                <ScrollReveal delay={0.15}>
                    <div className="mt-[clamp(35px,2.73vw,48px)] flex justify-end">
                        <GhostButton href={localizedPath('/blog')} arrow>
                            {allArticles}
                        </GhostButton>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
