import Image from 'next/image';
import { Locale } from '@/lib/i18n';
import { ScrollReveal } from '@/components/motion';
import { Kicker, emphasize } from '@/components/v3';

interface VenuesProps {
    lang: Locale;
    kicker: string;
    title: string;
}

const clients = [
    {
        logo: '/images/homepage/clients/client-klouvi-bar-athens.jpg',
        alt: 'Klouvi Bar logo',
        name: 'KLOUVI BAR',
        location: 'Athens',
    },
    {
        logo: '/images/homepage/clients/client-blue-bamboo-athens-serifos.jpg',
        alt: 'Blue Bamboo logo',
        name: 'BLUE BAMBOO',
        location: 'Athens-Serifos',
    },
    {
        logo: '/images/homepage/clients/client-beach-house-antiparos.jpg',
        alt: 'Beach House logo',
        name: 'BEACH HOUSE',
        location: 'Antiparos',
    },
    {
        logo: '/images/homepage/clients/client-pelicanos-sifnos.jpg',
        alt: 'Pelicanos logo',
        name: 'PELICANOS',
        location: 'Sifnos',
    },
    {
        logo: '/images/homepage/clients/client-yam-antiparos.png',
        alt: 'Yam logo',
        name: 'YAM',
        location: 'Antiparos',
    },
] as const;

interface Client {
    logo: string;
    alt: string;
    name: string;
    location: string;
}

function ClientCard({ client }: { client: Client }) {
    return (
        <div className="flex w-[260px] shrink-0 flex-col items-center gap-[clamp(13px,1.02vw,18px)] rounded-lg border border-[#faf6f1]/8 bg-[#141210] p-[clamp(23px,1.82vw,32px)]">
            <div className="flex h-[110px] w-[110px] items-center justify-center rounded-md bg-[#faf6f1] p-3">
                <Image
                    src={client.logo}
                    alt={client.alt}
                    width={80}
                    height={80}
                    sizes="96px"
                    className="max-h-full max-w-full object-contain"
                />
            </div>
            <div className="text-center">
                <div className="text-[clamp(0.87rem,0.99vw,1.09rem)] font-bold tracking-[0.14em]">{client.name}</div>
                <div className="mt-[3px] text-[clamp(0.74rem,0.84vw,0.92rem)] text-[#faf6f1]/50">{client.location}</div>
            </div>
        </div>
    );
}

export function Venues({ lang, kicker, title }: VenuesProps) {
    const emWord = lang === 'el' ? 'εμπιστεύονται' : 'Greece';

    const Row = () => (
        <div className="flex gap-[clamp(23px,1.82vw,32px)] pr-[clamp(23px,1.82vw,32px)]">
            {clients.map((client) => (
                <ClientCard key={client.name} client={client} />
            ))}
        </div>
    );

    return (
        <section className="border-y border-[#faf6f1]/8 bg-[#0b0a0a] py-[clamp(94px,7.39vw,130px)]">
            <div className="mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <ScrollReveal>
                    <Kicker className="mb-[clamp(15px,1.19vw,21px)]">{kicker}</Kicker>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                    <h2 className="mb-[clamp(53px,4.2vw,74px)] max-w-[870px] text-[clamp(2.18rem,4.14vw,3.45rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                        {emphasize(title, emWord)}
                    </h2>
                </ScrollReveal>
                {/* Marquee clipped at content boundary with gradient fades */}
                <div className="relative -mx-6 overflow-hidden sm:-mx-8">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[92px] bg-gradient-to-r from-[#0b0a0a] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[92px] bg-gradient-to-l from-[#0b0a0a] to-transparent" />
                    <ScrollReveal>
                        <div className="flex w-max animate-[se-marq_40s_linear_infinite]">
                            <Row />
                            <div aria-hidden="true">
                                <Row />
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
