import Image from 'next/image';
import Link from 'next/link';
import { MorphCTA } from '@/components/v3';
import { goldPrefix } from './gold-prefix';

interface ServiceCardProps {
    service: {
        title: string;
        subtitle: string;
        desc: string;
        ideal_for: string;
        cta: string;
    };
    href: string;
    image: string;
}

export function ServiceCard({ service, href, image }: ServiceCardProps) {
    return (
        <div className="group flex flex-col overflow-hidden rounded-[10px] border border-[#faf6f1]/10 bg-[#0e0d0c]">
            <Link href={href} className="relative block aspect-[16/9] overflow-hidden" tabIndex={-1} aria-hidden="true">
                <Image
                    src={image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,10,10,0)_60%,rgba(11,10,10,0.35))]" />
            </Link>
            <div className="flex grow flex-col p-[clamp(28px,2.22vw,39px)]">
                <h3 className="mb-1.5 text-[clamp(1.57rem,1.78vw,1.96rem)] font-extrabold leading-[1.1] tracking-[-0.015em]">
                    {service.title}
                </h3>
                <p className="se-gold-text font-didot mb-[clamp(13px,1.02vw,18px)] text-[clamp(1.06rem,1.2vw,1.32rem)]">
                    {service.subtitle}
                </p>
                <p className="mb-[clamp(13px,1.02vw,18px)] text-[clamp(0.92rem,1.05vw,1.15rem)] leading-[1.6] text-[#faf6f1]/62">
                    {service.desc}
                </p>
                <p className="mb-[clamp(20px,1.59vw,28px)] text-[clamp(0.88rem,1vw,1.1rem)] leading-[1.55] text-[#faf6f1]/50">
                    {goldPrefix(service.ideal_for)}
                </p>
                <div className="mt-auto">
                    <MorphCTA href={href} className="px-[clamp(22px,1.7vw,30px)] py-[clamp(11px,0.85vw,15px)] text-[clamp(13px,0.91vw,16px)]">
                        {service.cta}
                    </MorphCTA>
                </div>
            </div>
        </div>
    );
}
