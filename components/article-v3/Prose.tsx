import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { ReactNode } from 'react';
import { DriftOrb } from '@/components/v3';
import { ScrollReveal, StaggerChildren } from '@/components/motion';

interface ProseProps {
    children: ReactNode;
    backHref: string;
    backLabel: string;
}

/**
 * Dark prose container for the article body. The caller renders
 * `article.structuredContent[]` (via the preserved switch + renderTextWithLinks)
 * and passes the section nodes as children; Prose staggers them and adds the
 * footer back-link. Section-level typography lives on the nodes themselves.
 */
export function Prose({ children, backHref, backLabel }: ProseProps) {
    return (
        <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] pb-[clamp(94px,7.39vw,130px)] pt-[clamp(40px,3.12vw,55px)]">
            <DriftOrb
                className="h-[44vw] max-h-[620px] w-[44vw] max-w-[620px]"
                style={{ top: '6%', left: '-8%', background: 'radial-gradient(circle,rgba(240,189,149,0.08),rgba(240,189,149,0) 62%)' }}
                duration={22}
            />
            <div className="relative z-10 mx-auto max-w-[760px] px-[clamp(20px,1.59vw,28px)] pt-[clamp(46px,3.64vw,64px)]">
                <StaggerChildren staggerDelay={0.06}>{children}</StaggerChildren>

                <ScrollReveal delay={0.1}>
                    <div className="mt-[clamp(53px,4.2vw,74px)] border-t border-[#faf6f1]/10 pt-[clamp(40px,3.12vw,55px)] text-center">
                        <Link
                            href={backHref}
                            className="group inline-flex items-center gap-2 rounded-full border-[1.5px] border-[#faf6f1]/35 px-[clamp(27px,2.1vw,37px)] py-[clamp(13px,1.02vw,18px)] text-[clamp(12px,0.85vw,15px)] font-bold uppercase tracking-[0.18em] text-[#faf6f1] no-underline transition-colors hover:border-transparent hover:bg-[image:var(--gold)] hover:text-[#0b0a0a]"
                        >
                            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                            {backLabel}
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
