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
        <div className="flex w-[230px] shrink-0 flex-col items-center gap-4 rounded-lg border border-[#faf6f1]/8 bg-[#141210] p-7">
            <div className="flex h-24 w-24 items-center justify-center rounded-md bg-[#faf6f1] p-3">
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
                <div className="text-[0.95rem] font-bold tracking-[0.14em]">{client.name}</div>
                <div className="mt-[3px] text-[0.8rem] text-[#faf6f1]/50">{client.location}</div>
            </div>
        </div>
    );
}

export function Venues({ lang, kicker, title }: VenuesProps) {
    const emWord = lang === 'el' ? 'εμπιστεύονται' : 'trust';

    const Row = () => (
        <div className="flex gap-7 pr-7">
            {clients.map((client) => (
                <ClientCard key={client.name} client={client} />
            ))}
        </div>
    );

    return (
        <section className="overflow-hidden border-y border-[#faf6f1]/8 bg-[#0b0a0a] py-[110px]">
            <div className="mx-auto max-w-[1380px] px-6 sm:px-8">
                <ScrollReveal>
                    <Kicker className="mb-[18px]">{kicker}</Kicker>
                </ScrollReveal>
                <ScrollReveal delay={0.06}>
                    <h2 className="mb-16 max-w-[760px] text-[clamp(1.9rem,3.6vw,3rem)] font-extrabold leading-[1.05] tracking-[-0.02em]">
                        {emphasize(title, emWord)}
                    </h2>
                </ScrollReveal>
            </div>
            <ScrollReveal>
                <div className="flex w-max animate-[se-marq_40s_linear_infinite]">
                    <Row />
                    <div aria-hidden="true">
                        <Row />
                    </div>
                </div>
            </ScrollReveal>
        </section>
    );
}
