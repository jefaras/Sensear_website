import Image from 'next/image';
import { ScrollReveal } from '@/components/motion';

interface TeamMemberProps {
    member: {
        name: string;
        role: string;
        image: string;
        image_alt: string;
        paragraphs: string[];
    };
    imageSide: 'left' | 'right';
    isLast?: boolean;
}

export function TeamMember({ member, imageSide, isLast = false }: TeamMemberProps) {
    return (
        <div
            className={`grid grid-cols-1 items-center gap-[clamp(53px,4.2vw,74px)] lg:grid-cols-2 ${isLast ? '' : 'mb-[clamp(101px,7.95vw,140px)]'}`}
        >
            <div className={imageSide === 'left' ? 'lg:order-2' : ''}>
                <ScrollReveal delay={0.05}>
                    <h3 className="mb-3 text-[clamp(2.19rem,3.91vw,3.45rem)] font-extrabold leading-[1.04] tracking-[-0.02em]">
                        {member.name}
                    </h3>
                </ScrollReveal>
                <ScrollReveal delay={0.1}>
                    <p className="se-gold-text font-didot mb-[clamp(22px,1.7vw,30px)] text-[clamp(1.2rem,1.36vw,1.5rem)]">
                        {member.role}
                    </p>
                </ScrollReveal>
                {member.paragraphs.map((paragraph, i) => (
                    <ScrollReveal key={i} delay={0.14 + i * 0.04}>
                        <p
                            className="se-html mb-[clamp(15px,1.19vw,21px)] max-w-[620px] text-[clamp(0.98rem,1.11vw,1.22rem)] leading-[1.65] text-[#faf6f1]/66 last:mb-0"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                    </ScrollReveal>
                ))}
            </div>

            <ScrollReveal direction={imageSide} delay={0.15} className={imageSide === 'left' ? 'lg:order-1' : ''}>
                <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                        src={member.image}
                        alt={member.image_alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_60%,rgba(11,10,10,0.45))]" />
                </div>
            </ScrollReveal>
        </div>
    );
}
