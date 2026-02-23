import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getDictionary } from "@/lib/dictionary";
import type { Locale } from "@/lib/i18n";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default async function FAQPage({
    params,
}: {
    params: Promise<{ lang: Locale }>;
}) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.faq_page;

    const faqItems = content.items;

    return (
        <div className="bg-[#faebe3]">
            {/* Hero Section */}
            <section
                className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden"
                style={{
                    backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="w-full px-6 md:px-12 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1]">
                                {content.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        <div className="w-full flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl">
                                    <div className="relative aspect-square">
                                        <img
                                            src="/images/blog/blog-faq-default.jpg"
                                            alt="FAQ"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Accordion Section */}
            <section
                className="py-20"
                style={{
                    backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center text-black mb-12">
                        {content.title}
                    </h2>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqItems.map((item: any, index: number) => (
                            <AccordionItem
                                key={index}
                                value={`item-${index}`}
                                className="bg-white/80 border-b-0 rounded-lg shadow-sm px-6"
                            >
                                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-base text-black/70 pt-2 pb-4">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Final CTA Section */}
            <FinalCTA
                heading={content.cta.title}
                text={content.cta.subtitle}
                buttons={[
                    { text: content.cta.button, link: "contact" }
                ]}
                lang={lang}
            />
        </div>
    );
}

