import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ScrollReveal } from '@/components/motion';

interface DirectoryCardProps {
    title: string;
    icon: LucideIcon;
    pages: { name: string; path: string }[];
    delay?: number;
}

export function DirectoryCard({ title, icon: Icon, pages, delay = 0 }: DirectoryCardProps) {
    return (
        <ScrollReveal delay={delay}>
            <div className="rounded-[16px] border border-[#faf6f1]/10 bg-[rgba(250,246,241,0.04)] p-[clamp(28px,2.8vw,40px)] transition-colors duration-300 hover:border-[rgba(240,189,149,0.35)]">
                <div className="mb-[clamp(20px,1.7vw,28px)] flex items-center gap-4">
                    <span className="flex h-[50px] w-[50px] flex-none items-center justify-center rounded-full border border-[#f0bd95]/35 bg-[rgba(240,189,149,0.08)] text-[#f0bd95]" aria-hidden="true">
                        <Icon className="h-[22px] w-[22px]" strokeWidth={1.8} />
                    </span>
                    <h3 className="text-[clamp(1.25rem,1.5vw,1.5rem)] font-extrabold tracking-tight">{title}</h3>
                </div>
                <ul className="list-none p-0">
                    {pages.map((page) => (
                        <li key={page.path + page.name}>
                            <Link
                                href={page.path}
                                className="group flex items-center gap-2.5 border-t border-[#faf6f1]/8 py-[11px] text-[clamp(0.96rem,1.1vw,1.08rem)] text-[#faf6f1]/68 no-underline transition-[color,padding-left] duration-300 hover:pl-2 hover:text-[#faf6f1]"
                            >
                                <span className="text-[#f0bd95] transition-transform duration-300 group-hover:translate-x-[3px]" aria-hidden="true">→</span>
                                <span>{page.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </ScrollReveal>
    );
}
