import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Em, Kicker, SplitHero } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface HeroProps {
    title: string;
    desc: string;
    tag: string;
    author: string;
    displayDate: string;
    publishedDate: string;
    readTime: string;
    image: string;
    alt?: string;
    backHref: string;
    backLabel: string;
    badge: string[];
}

/** Render the H1 with the last word (or the part after `|`) in Didot gold. */
function headline(title: string) {
    if (title.includes('|')) {
        const [a, b] = title.split('|');
        return (
            <>
                {a.trim()}
                <br />
                <Em>{b.trim()}</Em>
            </>
        );
    }
    const words = title.trim().split(/\s+/);
    const last = words.pop() ?? '';
    return (
        <>
            {words.join(' ')} <Em>{last}</Em>
        </>
    );
}

export function Hero({ title, desc, tag, author, displayDate, publishedDate, readTime, image, alt, backHref, backLabel }: HeroProps) {
    // Same split hero as home, services, industries and the journal hub (components/v3/SplitHero):
    // text left, the article photo filling the right half.
    return (
        <SplitHero image={{ src: image || '/images/blog/blog-faq-default.jpg', alt: alt || title }}>
            <ScrollReveal>
                <Link
                    href={backHref}
                    className="group mb-[clamp(28px,2.22vw,39px)] inline-flex items-center gap-2 text-[clamp(12px,0.85vw,15px)] font-bold uppercase tracking-[0.18em] text-[#faf6f1]/50 no-underline transition-colors hover:text-[#f0bd95]"
                >
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    {backLabel}
                </Link>
            </ScrollReveal>

            <ScrollReveal delay={0.06}>
                <Kicker variant="gold" className="mb-[clamp(20px,1.6vw,28px)]">{tag.toLocaleUpperCase('el')}</Kicker>
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
                <h1 className="mb-[clamp(23px,1.82vw,32px)] text-[clamp(2.3rem,4.6vw,4.1rem)] font-extrabold leading-[1.07] tracking-[-0.022em]">
                    {headline(title)}
                </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.18}>
                <p className="mb-[clamp(28px,2.22vw,39px)] max-w-[620px] text-[clamp(1.08rem,1.5vw,1.3rem)] leading-[1.6] text-[#faf6f1]/72">
                    {desc}
                </p>
            </ScrollReveal>

            <ScrollReveal delay={0.24}>
                <div className="flex flex-wrap items-center gap-[clamp(14px,1.19vw,21px)] text-[clamp(12px,0.85vw,15px)] text-[#faf6f1]/60">
                    <span className="flex items-center gap-3">
                        <span className="h-px w-8 bg-[#faf6f1]/20" />
                        <address className="not-italic">
                            <span className="font-bold uppercase tracking-[0.12em] text-[#faf6f1]">{author}</span>
                        </address>
                    </span>
                    <span className="h-[5px] w-[5px] rounded-full bg-[#faf6f1]/25" />
                    <time dateTime={publishedDate} className="uppercase tracking-[0.12em]">{displayDate}</time>
                    <span className="h-[5px] w-[5px] rounded-full bg-[#faf6f1]/25" />
                    <span className="uppercase tracking-[0.12em]">{readTime}</span>
                </div>
            </ScrollReveal>
        </SplitHero>
    );
}
