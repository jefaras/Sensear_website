import { Fragment } from 'react';

interface MarqueeProps {
    items: string[];
}

export function Marquee({ items }: MarqueeProps) {
    const Row = () => (
        <div className="flex items-center gap-[46px] pr-[46px]">
            {items.map((item, i) => (
                <Fragment key={i}>
                    <span className="font-didot text-[1.7rem] text-[#faf6f1]/55">{item}</span>
                    <span className="se-gold-text">✦</span>
                </Fragment>
            ))}
        </div>
    );

    return (
        <div className="overflow-hidden border-y border-[#faf6f1]/10 bg-[#0e0d0c] py-[22px]">
            <div className="flex w-max animate-[se-marq_36s_linear_infinite]">
                <Row />
                <div aria-hidden="true">
                    <Row />
                </div>
            </div>
        </div>
    );
}
