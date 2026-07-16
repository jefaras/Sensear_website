'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from '@/components/motion';

interface FaqItem {
    question: string;
    answer: string;
}

interface AccordionProps {
    items: FaqItem[];
}

export function Accordion({ items }: AccordionProps) {
    return (
        <AccordionPrimitive.Root type="single" collapsible className="w-full space-y-[clamp(13px,1.02vw,18px)]">
            {items.map((item, index) => (
                <ScrollReveal key={index} delay={index * 0.06}>
                    <AccordionPrimitive.Item
                        value={`item-${index}`}
                        className="overflow-hidden rounded-[12px] border border-[#faf6f1]/10 bg-[rgba(250,246,241,0.04)]"
                    >
                        <AccordionPrimitive.Header>
                            <AccordionPrimitive.Trigger className="group flex w-full items-start gap-[clamp(17px,1.31vw,23px)] p-[clamp(22px,1.7vw,30px)_clamp(23px,1.82vw,32px)] text-left">
                                <span className="flex-1 text-[clamp(1.09rem,1.24vw,1.36rem)] font-bold leading-snug">
                                    {item.question}
                                </span>
                                <span className="chev-chip flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full border border-[#faf6f1]/25 text-[#faf6f1]/70 transition-all duration-200 group-data-[state=open]:rotate-180 group-data-[state=open]:border-[#f0bd95]/45 group-data-[state=open]:bg-[rgba(240,189,149,0.12)]">
                                    <ChevronDown className="h-[18px] w-[18px]" strokeWidth={2.2} />
                                </span>
                            </AccordionPrimitive.Trigger>
                        </AccordionPrimitive.Header>
                        <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                            <div className="px-[clamp(23px,1.82vw,32px)] pb-[clamp(23px,1.82vw,32px)] pr-[clamp(58px,4.6vw,81px)] text-[clamp(0.96rem,1.09vw,1.2rem)] leading-[1.7] text-[#faf6f1]/62">
                                {item.answer}
                            </div>
                        </AccordionPrimitive.Content>
                    </AccordionPrimitive.Item>
                </ScrollReveal>
            ))}
        </AccordionPrimitive.Root>
    );
}
