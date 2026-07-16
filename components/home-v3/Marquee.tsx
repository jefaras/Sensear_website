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
        <div className="overflow-hidden border-y border-[#faf6f1]/10 bg-[#0e0d0c] py-[clamp(18px,1.42vw,25px)]">
            <div className="flex w-max animate-[se-marq_36s_linear_infinite]">
                <Row />
                <div aria-hidden="true">
                    <Row />
                </div>
            </div>
        </div>
    );
}
