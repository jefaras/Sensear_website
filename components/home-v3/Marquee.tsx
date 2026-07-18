import { Fragment } from 'react';

interface MarqueeProps {
    items: string[];
}

export function Marquee({ items }: MarqueeProps) {
    const Row = () => (
        <div className="flex items-center gap-[clamp(38px,3.01vw,53px)] pr-[clamp(38px,3.01vw,53px)]">
            {items.map((item, i) => (
                <Fragment key={i}>
                    <span className="font-didot text-[clamp(1.56rem,1.77vw,1.95rem)] text-[#faf6f1]/55">{item}</span>
                    <span className="se-gold-text">✦</span>
                </Fragment>
            ))}
        </div>
    );

    return (
        <div className="border-y border-[#faf6f1]/10 bg-[#0e0d0c] py-[clamp(18px,1.42vw,25px)]">
            {/* Clipped at the content boundary with gradient fades — matches the Venues marquee. */}
            <div className="mx-auto max-w-[min(1760px,100%)] px-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <div className="relative -mx-6 overflow-hidden sm:-mx-8">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[92px] bg-gradient-to-r from-[#0e0d0c] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[92px] bg-gradient-to-l from-[#0e0d0c] to-transparent" />
                    <div className="flex w-max animate-[se-marq_36s_linear_infinite]">
                        <Row />
                        <div aria-hidden="true">
                            <Row />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
