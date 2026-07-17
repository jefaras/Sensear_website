import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { DriftOrb, Em, Kicker, SpinningBadge } from '@/components/v3';
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

export function Hero({ title, desc, tag, author, displayDate, publishedDate, readTime, image, alt, backHref, backLabel, badge }: HeroProps) {
    return (
        <section className="relative overflow-hidden pt-[clamp(140px,13vw,196px)] pb-[clamp(58px,4.6vw,81px)]">
            <DriftOrb
                className="h-[54vw] max-h-[760px] w-[54vw] max-w-[760px]"
                style={{ top: '-10%', right: '-6%', background: 'radial-gradient(circle,rgba(240,189,149,0.14),rgba(240,189,149,0) 62%)' }}
                duration={18}
            />
            <div className="relative z-10 mx-auto max-w-[1280px] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="grid grid-cols-1 items-center gap-[clamp(46px,3.64vw,64px)] lg:grid-cols-[1.15fr_0.85fr]">
                    <div>
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
                            <Kicker variant="gold" className="mb-[clamp(20px,1.6vw,28px)]">{tag.toUpperCase()}</Kicker>
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
                    </div>

                    <ScrollReveal direction="right" delay={0.18}>
                        <div className="group relative">
                            <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-[0_40px_90px_-30px_rgba(0,0,0,0.8)]">
                                <Image
                                    src={image || '/images/blog/blog-faq-default.jpg'}
                                    alt={alt || title}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    priority
                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                            </div>
                            <SpinningBadge lines={badge} className="pointer-events-none absolute -right-[21px] -top-[21px] h-[110px] w-[110px]" />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
