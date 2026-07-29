import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/lib/i18n';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArticleJsonLd } from '@/components/JsonLd';
import { getLocalizedPath } from '@/lib/localized-path';
import { PageCTA, V3Root } from '@/components/v3';
import { Hero, Prose } from '@/components/article-v3';

import { localeAlternates } from '@/lib/seo';

// Preserved verbatim from app/[lang]/blog/[slug]/page.tsx — the static export
// depends on these. Only the rendered markup is restyled dark.
const BLOG_PUBLISHED_DATES: Record<string, string> = {
    'how-top-hospitality-brands-design-sound': '2025-01-20',
    'three-reasons-make-music-hospitality': '2025-01-15',
    'brand-music-converts-browsers-buyers': '2025-01-20',
    'what-exactly-does-music-curator-do': '2025-01-10',
    'music-curation-cycle-venues': '2025-01-15',
    'building-brand-people-can-hear': '2025-02-12',
    'background-music-shapes-customer-behavior': '2025-03-08',
    'service-environment-shapes-wait-time': '2025-03-15',
};

export const dynamicParams = false;
export const BLOG_SLUGS = Object.keys(BLOG_PUBLISHED_DATES);

export async function generateStaticParams() {
    return BLOG_SLUGS.map((slug) => ({ lang: 'el' as const, slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);
    const article = dict.blog.articles.find((a: any) => a.link === slug);

    if (!article) return { title: 'Article Not Found' };

    return {
        alternates: localeAlternates(lang, `/blog/${slug}`),
        title: article.title,
        description: article.desc,
        openGraph: {
            title: article.title,
            description: article.desc,
            type: 'article',
            ...(article.image && { images: [{ url: article.image }] }),
        },
    };
}

export default async function BlogPostV3({ params }: { params: Promise<{ lang: Locale; slug: string }> }) {
    const { lang, slug } = await params;
    const dict = await getDictionary(lang);

    const article = (dict.blog as any).articles.find((a: any) => a.link === slug);
    if (!article) {
        notFound();
    }

    const backButtonText = (dict.blog as any).back_button || 'Back to Insights';
    const cta = (dict.blog as any).blog_cta || {};
    const articleMeta = (dict.blog as any).article || {};
    const publishedDate = BLOG_PUBLISHED_DATES[article.link];
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const backHref = localizedPath('/blog');
    // Both locales use the loanword "hospitality" in blog_cta.title.
    const ctaEmWord = 'hospitality';

    let sourceCounter = 0;

    // Preserved verbatim (markdown [text](url) links + external aria-labels +
    // numbered "Source N" logic); only the link color changes orange -> gold.
    const renderTextWithLinks = (text: string) => {
        const parts = text.split(/(\[.*?\]\(.*?\))/g);
        return parts.map((part, i) => {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
                const originalLabel = match[1]?.trim() || '';
                const href = match[2];
                const isExternal = href.startsWith('http');
                const isGenericSource = /^(source|πηγή)$/i.test(originalLabel);

                const visibleLabel = isGenericSource
                    ? `${lang === 'el' ? 'Πηγή' : 'Source'} ${++sourceCounter}`
                    : originalLabel;

                let externalAriaLabel: string | undefined;
                if (isExternal) {
                    try {
                        const hostname = new URL(href).hostname.replace(/^www\./, '');
                        externalAriaLabel = lang === 'el'
                            ? `${visibleLabel} — ανοίγει εξωτερική πηγή: ${hostname}`
                            : `${visibleLabel} — opens external source: ${hostname}`;
                    } catch {
                        externalAriaLabel = lang === 'el'
                            ? `${visibleLabel} — ανοίγει εξωτερική πηγή`
                            : `${visibleLabel} — opens external source`;
                    }
                }

                return (
                    <Link
                        key={i}
                        href={href}
                        className="font-semibold text-[#f0bd95] underline decoration-[#f0bd95]/40 decoration-[1.5px] underline-offset-4 transition-colors hover:decoration-[#f0bd95]"
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        aria-label={externalAriaLabel}
                    >
                        {visibleLabel}
                    </Link>
                );
            }
            return part;
        });
    };

    const sections: React.ReactNode[] = article.structuredContent
        ? article.structuredContent.map((section: any, idx: number) => {
              switch (section.type) {
                  case 'heading':
                      if (section.level === 2)
                          return (
                              <h2 key={idx} className="mb-[clamp(20px,1.7vw,28px)] mt-[clamp(40px,3.5vw,64px)] text-[clamp(1.6rem,2.7vw,2.3rem)] font-extrabold leading-[1.16] tracking-[-0.015em] text-[#faf6f1] first:mt-0">
                                  {section.value}
                              </h2>
                          );
                      if (section.level === 3)
                          return (
                              <h3 key={idx} className="mb-[clamp(12px,1vw,18px)] mt-[clamp(32px,2.8vw,48px)] text-[clamp(1.25rem,1.8vw,1.4rem)] font-bold leading-[1.25] text-[#faf6f1]">
                                  {section.value}
                              </h3>
                          );
                      return (
                          <h4 key={idx} className="mb-3 mt-10 text-[1.2rem] font-bold text-[#faf6f1]">
                              {section.value}
                          </h4>
                      );
                  case 'paragraph':
                      return (
                          <p key={idx} className="mb-[clamp(28px,2.8vw,56px)] text-[clamp(1.05rem,1.35vw,1.16rem)] leading-[1.78] text-[#faf6f1]/78">
                              {renderTextWithLinks(section.value)}
                          </p>
                      );
                  case 'list':
                      return (
                          <ul key={idx} className="mb-[clamp(28px,2.8vw,48px)] list-none space-y-[clamp(14px,1.19vw,21px)] p-0">
                              {section.items.map((item: string, i: number) => (
                                  <li key={i} className="flex items-start text-[clamp(1.05rem,1.35vw,1.16rem)] leading-[1.7] text-[#faf6f1]/78">
                                      <span className="mr-[clamp(14px,1.19vw,21px)] mt-[0.7em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#f0bd95]" />
                                      <span>{renderTextWithLinks(item)}</span>
                                  </li>
                              ))}
                          </ul>
                      );
                  case 'image':
                      return (
                          <figure key={idx} className="my-[clamp(40px,3.5vw,64px)]">
                              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                  <Image src={section.src} alt={section.alt || ''} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover" />
                              </div>
                              {section.caption && (
                                  <figcaption className="mt-4 text-center text-[0.8rem] font-bold uppercase italic tracking-[0.18em] text-[#faf6f1]/40">
                                      {section.caption}
                                  </figcaption>
                              )}
                          </figure>
                      );
                  default:
                      return null;
              }
          })
        : [
              <p key="fallback" className="text-[clamp(1.05rem,1.35vw,1.16rem)] leading-[1.78] text-[#faf6f1]/78">
                  {renderTextWithLinks(article.content || 'Content coming soon...')}
              </p>,
          ];

    return (
        <V3Root>
            <ArticleJsonLd
                title={article.title}
                description={article.desc}
                url={localizedPath(`/blog/${article.link}`)}
                image={article.image}
                datePublished={publishedDate}
                dateModified={publishedDate}
                author={article.author}
            />

            {/* The standfirst is written for someone who has already clicked; article.desc
                is written to win the click and stays in metadata and on hub cards. */}
            <Hero
                title={article.title}
                desc={article.standfirst || article.desc}
                tag={article.tag}
                author={article.author}
                displayDate={article.displayDate}
                publishedDate={publishedDate}
                readTime={articleMeta.read_time || '8 MIN READ'}
                image={article.image}
                alt={article.alt}
                backHref={backHref}
                backLabel={backButtonText}
                badge={['★ SENSEAR ★', 'JOURNAL']}
            />

            <Prose backHref={backHref} backLabel={backButtonText}>
                {sections}
            </Prose>

            <PageCTA
                heading={cta.title || ''}
                emWord={ctaEmWord}
                lede={cta.description || ''}
                primaryLabel={cta.button || ''}
                primaryHref={localizedPath('/contact')}
                bgImage="/images/homepage/sensear-signature-playlist-service.jpg"
            />
        </V3Root>
    );
}
