'use client';

import Image from 'next/image';
import { m, useMotionValueEvent, useScroll, useTransform } from 'motion/react';
import { useEffect, useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import type { MomentsTableContent } from './MomentsTable';
import { container, h2Class } from './styles';

export interface JourneyScrollProps extends MomentsTableContent {
    /** The section heading, already emphasised by the caller. */
    heading: ReactNode;
    /** Label for the moment tabs (the plain heading text). */
    label: string;
    /** One photo per moment, in the rows' order. */
    images: { src: string; alt: string; position?: string }[];
}

/** The v3 polish-lens easing. Written as an arbitrary property: Tailwind finds the ease- arbitrary-value form ambiguous and does not generate it. */
const ease = '[transition-timing-function:cubic-bezier(0.22,1,0.36,1)]';
const focusRing = 'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0bd95]';
const pad = (n: number) => String(n).padStart(2, '0');

/** True when the visitor asked the system for reduced motion. Read after mount, so the server
    HTML and the first client render agree (both assume motion is allowed). */
function usePrefersReducedMotion() {
    const [reduce, setReduce] = useState(false);
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReduce(mq.matches);
        const onChange = (e: MediaQueryListEvent) => setReduce(e.matches);
        mq.addEventListener('change', onChange);
        return () => mq.removeEventListener('change', onChange);
    }, []);
    return reduce;
}

/**
 * What a moment looks like in a venue and at an event, one under the other, labelled with the
 * moments table's column titles (JEF, 15 Nov: no switch; every moment shows both settings).
 */
function BothSettings({ row, columns, textClass }: { row: MomentsTableContent['rows'][number]; columns: MomentsTableContent['columns']; textClass: string }) {
    return (
        <dl className="grid gap-[clamp(14px,2vh,22px)]">
            {(['venue', 'event'] as const).map((key) => (
                <div key={key} className="border-t border-[#faf6f1]/12 pt-[clamp(12px,1.6vh,18px)]">
                    <dt className="mb-1 text-[clamp(0.9rem,0.95vw,1rem)] font-semibold text-[#f0bd95]">{columns[key]}</dt>
                    <dd className={textClass}>{row[key]}</dd>
                </div>
            ))}
        </dl>
    );
}

/**
 * Desktop (lg and up, at least 680px tall, motion allowed): the section pins to the screen while
 * the visitor scrolls through the five moments. A gold line fills across the moment tabs, the
 * active moment's name and texts swap, and its photo crossfades. Motion meaning: each moment leads
 * into the next. The tabs follow the WAI-ARIA tabs pattern; scrolling selects a tab, and a tab
 * click or the arrow keys scroll to that moment.
 */
function PinnedJourney({ heading, label, columns, rows, images }: JourneyScrollProps) {
    const ref = useRef<HTMLDivElement>(null);
    const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
    const uid = useId();
    const n = rows.length;
    const [active, setActive] = useState(0);
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
    const fill = useTransform(scrollYProgress, [0, 1], [0, 1]);

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        setActive(Math.min(n - 1, Math.max(0, Math.floor(v * n))));
    });

    /** Scroll so moment `i` sits in the middle of its share of the pinned scroll. */
    const goTo = (i: number) => {
        const el = ref.current;
        if (!el) return;
        const top = el.getBoundingClientRect().top + window.scrollY;
        const range = el.offsetHeight - window.innerHeight;
        window.scrollTo({ top: top + range * ((i + 0.5) / n), behavior: 'smooth' });
    };

    const onTabKey = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
        const next = e.key === 'ArrowRight' ? i + 1 : e.key === 'ArrowLeft' ? i - 1 : e.key === 'Home' ? 0 : e.key === 'End' ? n - 1 : -1;
        if (next < 0 || next >= n) return;
        e.preventDefault();
        tabRefs.current[next]?.focus();
        goTo(next);
    };

    return (
        // One screen of pinned view plus 65% of a screen of scroll per moment.
        <div ref={ref} className="relative h-[calc(100dvh+5*65dvh)]">
            <div className="sticky top-0 flex h-[100dvh] flex-col justify-center pb-[clamp(24px,4vh,48px)] pt-[clamp(100px,13.5vh,136px)]">
                <div className={`${container} flex h-full w-full min-h-0 flex-col`}>
                    <h2 className={`mb-[clamp(20px,3.4vh,40px)] max-w-[1180px] text-balance ${h2Class}`}>{heading}</h2>

                    {/* The five moments as tabs, over one gold line that fills with the scroll. */}
                    <div className="relative mb-[clamp(20px,3.6vh,44px)]">
                        <div role="tablist" aria-label={label} className="grid grid-cols-5 gap-[clamp(12px,1.2vw,20px)]">
                            {rows.map((row, i) => (
                                <button
                                    key={i}
                                    ref={(el) => {
                                        tabRefs.current[i] = el;
                                    }}
                                    type="button"
                                    role="tab"
                                    id={`${uid}-tab-${i}`}
                                    aria-selected={active === i}
                                    aria-controls={`${uid}-panel-${i}`}
                                    tabIndex={active === i ? 0 : -1}
                                    onClick={() => goTo(i)}
                                    onKeyDown={(e) => onTabKey(e, i)}
                                    className={`group min-h-[44px] pb-[clamp(12px,1.6vh,18px)] text-left ${focusRing}`}
                                >
                                    <span className={`block text-[13px] font-bold tabular-nums transition-colors duration-500 ${active === i ? 'text-[#f0bd95]' : 'text-[#faf6f1]/55'}`}>{pad(i + 1)}</span>
                                    <span
                                        className={`font-didot block text-[clamp(1.15rem,1.45vw,1.5rem)] leading-[1.2] transition-colors duration-500 ${
                                            active === i ? 'text-[#faf6f1]' : 'text-[#faf6f1]/50 group-hover:text-[#faf6f1]/80'
                                        }`}
                                    >
                                        {row.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-[#faf6f1]/14">
                            <m.div className="absolute inset-0 origin-left" style={{ scaleX: fill, backgroundImage: 'var(--gold-text)' }} />
                        </div>
                    </div>

                    <div className="grid min-h-0 flex-1 grid-cols-[1.05fr_0.95fr] items-center gap-[clamp(40px,4.2vw,74px)]">
                        {/* Panels stacked in one cell; the active one fades and lifts in. */}
                        <div className="grid">
                            {rows.map((row, i) => (
                                <div
                                    key={i}
                                    role="tabpanel"
                                    id={`${uid}-panel-${i}`}
                                    aria-labelledby={`${uid}-tab-${i}`}
                                    aria-hidden={active !== i}
                                    className={`col-start-1 row-start-1 transition-[opacity,transform] duration-700 ${ease} ${
                                        active === i ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
                                    }`}
                                >
                                    <h3 className="font-didot se-gold-text mb-[clamp(14px,2.2vh,26px)] text-[clamp(2.2rem,3.8vw,3.8rem)] font-normal leading-[1.08]">{row.name}</h3>
                                    <div className="max-w-[580px]">
                                        <BothSettings row={row} columns={columns} textClass="text-[clamp(1.05rem,1.25vw,1.3rem)] leading-[1.5] text-[#faf6f1]/82" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* The service pages' 4:4.6 frame, as tall as the pinned view allows (JEF, 15 Nov). */}
                        <div className="relative aspect-[4/4.6] h-full max-h-[600px] min-h-[240px] justify-self-end overflow-hidden rounded-lg">
                            {images.map((img, i) => (
                                <Image
                                    key={img.src}
                                    src={img.src}
                                    alt={img.alt}
                                    aria-hidden={active !== i}
                                    fill
                                    sizes="(min-width: 1024px) 46vw, 100vw"
                                    className={`object-cover transition-[opacity,transform] [transition-duration:900ms] ${ease} ${active === i ? 'scale-100 opacity-100' : 'scale-[1.04] opacity-0'}`}
                                    style={img.position ? { objectPosition: img.position } : undefined}
                                />
                            ))}
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_55%,rgba(11,10,10,0.5))]" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/**
 * Phones, tablets, short screens, and every width when reduced motion is on: the five moments as
 * one ordered list with a vertical line on the left. With motion allowed, the line fills in gold
 * as the list scrolls past; with reduced motion it stays as a plain rule.
 */
function ListJourney({ heading, columns, rows, images, animate }: JourneyScrollProps & { animate: boolean }) {
    const listRef = useRef<HTMLOListElement>(null);
    const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });

    return (
        <div className={`${container} py-[clamp(96px,8.5vw,150px)]`}>
            <h2 className={`mb-[clamp(40px,4vw,64px)] max-w-[1180px] text-balance ${h2Class}`}>{heading}</h2>

            <ol ref={listRef} className="relative">
                <div aria-hidden="true" className="absolute bottom-3 left-[5px] top-3 w-px bg-[#faf6f1]/14">
                    {animate && <m.div className="absolute inset-0 origin-top" style={{ scaleY: scrollYProgress, backgroundImage: 'linear-gradient(180deg,#edc4ac,#fffaf6 50%,#e2d6bf)' }} />}
                </div>
                {rows.map((row, i) => (
                    <li key={i} className="relative grid grid-cols-[11px_1fr] gap-x-[clamp(18px,2.4vw,32px)] pb-[clamp(44px,5vw,64px)] last:pb-0">
                        <span aria-hidden="true" className="mt-[0.55em] h-[11px] w-[11px] rounded-full border border-[#f0bd95] bg-[#0b0a0a]" />
                        <div className="grid gap-[clamp(18px,2.4vw,28px)] md:grid-cols-[1fr_0.85fr] md:items-start">
                            <div>
                                <p className="mb-2 text-[13px] font-bold tabular-nums text-[#faf6f1]/55">
                                    {pad(i + 1)} / {pad(rows.length)}
                                </p>
                                <h3 className="font-didot se-gold-text mb-[clamp(12px,1.4vw,18px)] text-[clamp(1.9rem,5vw,2.6rem)] font-normal leading-[1.1]">{row.name}</h3>
                                <BothSettings row={row} columns={columns} textClass="text-[clamp(1.03rem,1.6vw,1.2rem)] leading-[1.6] text-[#faf6f1]/76" />
                            </div>
                            <div className="relative aspect-[4/4.6] w-full max-w-[460px] overflow-hidden rounded-lg">
                                <Image
                                    src={images[i].src}
                                    alt={images[i].alt}
                                    fill
                                    sizes="(min-width: 768px) 40vw, 90vw"
                                    className="object-cover"
                                    style={images[i].position ? { objectPosition: images[i].position } : undefined}
                                />
                            </div>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
}

/**
 * "The five moments" as the page's journey (Experience Design, 15 Nov 2026). Both layouts
 * are in the HTML: the pinned one shows from lg up on screens at least 680px tall, the list
 * otherwise. With reduced motion the list shows at every size and nothing pins or fills. Every
 * moment shows its venue and its event text.
 */
export function JourneyScroll(props: JourneyScrollProps) {
    const reduce = usePrefersReducedMotion();

    return (
        <section id="journey" className="relative scroll-mt-[clamp(90px,7vw,120px)] border-t border-[#faf6f1]/8">
            <div className={reduce ? 'hidden' : 'hidden lg:[@media(min-height:680px)]:block'}>
                <PinnedJourney {...props} />
            </div>
            <div className={reduce ? '' : 'lg:[@media(min-height:680px)]:hidden'}>
                <ListJourney {...props} animate={!reduce} />
            </div>
        </section>
    );
}
