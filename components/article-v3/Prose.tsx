import type { ReactNode } from 'react';
import { DriftOrb } from '@/components/v3';
import { StaggerChildren } from '@/components/motion';

interface ProseProps {
    children: ReactNode;
}

/**
 * Dark prose container for the article body. The caller renders
 * `article.structuredContent[]` (via the preserved switch + renderTextWithLinks)
 * and passes the section nodes as children; Prose staggers them. Section-level
 * typography lives on the nodes themselves. The way back to the journal is the
 * back link in the Hero and the CTA band under the article (JEF, 6 Nov: one
 * route back, not two).
 */
export function Prose({ children }: ProseProps) {
    return (
        <section className="relative overflow-hidden border-t border-[#faf6f1]/8 bg-[#0e0d0c] pb-[clamp(94px,7.39vw,130px)] pt-[clamp(40px,3.12vw,55px)]">
            <DriftOrb
                className="h-[44vw] max-h-[620px] w-[44vw] max-w-[620px]"
                style={{ top: '6%', left: '-8%', background: 'radial-gradient(circle,rgba(240,189,149,0.08),rgba(240,189,149,0) 62%)' }}
                duration={22}
            />
            <div className="relative z-10 mx-auto max-w-[760px] px-[clamp(20px,1.59vw,28px)] pt-[clamp(46px,3.64vw,64px)]">
                <StaggerChildren staggerDelay={0.06}>{children}</StaggerChildren>
            </div>
        </section>
    );
}
