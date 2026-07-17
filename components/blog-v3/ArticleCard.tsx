import Image from 'next/image';
import Link from 'next/link';

interface ArticleCardProps {
    article: {
        title: string;
        desc: string;
        tag: string;
        link: string;
        image: string;
        alt?: string;
        displayDate: string;
        author: string;
    };
    href: string;
}

export function ArticleCard({ article, href }: ArticleCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden rounded-[10px] border border-[#faf6f1]/10 bg-[#100e0d] no-underline"
        >
            <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                    src={article.image}
                    alt={article.alt || article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
            </div>
            <div className="flex grow flex-col p-[clamp(20px,1.7vw,28px)]">
                <span className="se-gold-text mb-[clamp(13px,1.02vw,18px)] text-[clamp(10px,0.74vw,13px)] font-bold tracking-[0.22em]">
                    {article.tag}
                </span>
                <h3 className="mb-[clamp(10px,0.85vw,14px)] text-[clamp(1.18rem,1.34vw,1.47rem)] font-bold leading-[1.28] text-[#faf6f1]">
                    {article.title}
                </h3>
                <p className="text-[clamp(0.88rem,1vw,1.1rem)] leading-[1.6] text-[#faf6f1]/55">{article.desc}</p>
                <div className="mt-auto flex items-center justify-between gap-4 border-t border-[#faf6f1]/10 pt-[clamp(15px,1.19vw,21px)] text-[clamp(0.74rem,0.84vw,0.92rem)] text-[#faf6f1]/45">
                    <span>{article.displayDate}</span>
                    <span>{article.author}</span>
                </div>
            </div>
        </Link>
    );
}
