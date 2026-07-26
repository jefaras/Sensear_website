import type { Metadata } from 'next';
import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { localeAlternates } from '@/lib/seo';
import { DriftOrb, V3Root, emphasize } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';
import { ArticleCard, Hero, NewsletterCTA } from '@/components/blog-v3';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        alternates: localeAlternates(lang, '/blog'),
        title: dict.blog.meta.title,
        description: dict.blog.meta.description,
    };
}

export default async function BlogV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.blog;
    const localizedPath = (path: string) => getLocalizedPath(lang, path);

    const featuredArticle = content.articles[0];
    const gridArticles = featuredArticle ? content.articles.slice(1) : content.articles;

    const em = lang === 'el'
        ? { recent: 'διαμορφώνει', newsletter: 'απευθείας' }
        : { recent: 'shapes', newsletter: 'straight' };

    return (
        <V3Root>
            <Hero
                lang={lang}
                hero={content.hero}
                featured={featuredArticle}
                featuredBadge={content.featured.badge}
                readFull={content.featured.read_more}
            />

            {/* Articles grid */}
            <section id="journal" className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] py-[clamp(101px,7.95vw,140px)] pb-[clamp(108px,8.52vw,150px)]">
                <DriftOrb
                    className="h-[46vw] max-h-[640px] w-[46vw] max-w-[640px]"
                    style={{ top: '10%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.10),rgba(240,189,149,0) 62%)' }}
                    duration={23}
                />
                <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                    <div className="mb-[clamp(46px,3.64vw,64px)]">
                        <ScrollReveal delay={0.06}>
                            <h2 className="max-w-[830px] text-[clamp(2.3rem,4.6vw,3.91rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                                {emphasize(content.recent.headline, em.recent)}
                            </h2>
                        </ScrollReveal>
                    </div>

                    <StaggerChildren className="grid grid-cols-1 gap-[clamp(25px,1.99vw,35px)] md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.06}>
                        {gridArticles.map((article: any) => (
                            <ArticleCard key={article.link} article={article} href={localizedPath(`/blog/${article.link}`)} />
                        ))}
                    </StaggerChildren>
                </div>
            </section>

            <NewsletterCTA emWord={em.newsletter} cta={content.newsletter_cta} />
        </V3Root>
    );
}
