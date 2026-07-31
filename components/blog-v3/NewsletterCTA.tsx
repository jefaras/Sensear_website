import Image from 'next/image';
import { NewsletterForm } from '@/components/NewsletterForm';
import { emphasize } from '@/components/v3';
import { ScrollReveal } from '@/components/motion';

interface NewsletterCTAProps {
    emWord: string;
    cta: {
        title: string;
        subtitle: string;
        placeholder: string;
        submit: string;
        success: string;
        location: string;
        background_image: string;
    };
}

export function NewsletterCTA({ emWord, cta }: NewsletterCTAProps) {
    return (
        <section id="cta" className="relative overflow-hidden py-[clamp(122px,9.66vw,170px)]">
            <Image src={cta.background_image} alt="" fill aria-hidden="true" sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0.82),rgba(11,10,10,0.93))]" />
            <div className="relative z-10 mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] text-center sm:px-[clamp(27px,2.1vw,37px)]">
                <ScrollReveal delay={0.08}>
                    <h2 className="mx-auto mb-[clamp(23px,1.82vw,32px)] max-w-[1060px] text-[clamp(2.76rem,6.33vw,5.06rem)] font-extrabold leading-[1.04] tracking-[-0.025em]">
                        {emphasize(cta.title, emWord)}
                    </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.16}>
                    <p className="mx-auto mb-[clamp(33px,2.61vw,46px)] max-w-[710px] text-[clamp(1.09rem,1.24vw,1.36rem)] leading-[1.6] text-[#faf6f1]/68">
                        {cta.subtitle}
                    </p>
                </ScrollReveal>
                <ScrollReveal delay={0.24}>
                    <NewsletterForm
                        variant="ctaV3"
                        placeholder={cta.placeholder}
                        buttonText={cta.submit}
                        successText={cta.success}
                        source="Journal v3"
                    />
                </ScrollReveal>
            </div>
        </section>
    );
}
