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
                    backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
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
                                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/17b4a5b7d_seedream-40_high-resolution_professional_photography_image_with_precise_details_and_refined_-01-.jpg"
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
                    backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/178049824_warmsilverfoilsample-Picsart-AiImageEnhancer.jpg')",
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

                    <div className="text-center mt-12 bg-white/50 p-8 rounded-lg">
                        <h3 className="text-2xl font-bold text-black mb-4">{content.cta.title}</h3>
                        <p className="text-black/80 mb-6">{content.cta.subtitle}</p>
                        <Link href={`/${lang}/contact`}>
                            <button className="group relative bg-transparent border-2 border-black text-black hover:bg-black hover:text-white px-14 py-6 text-lg font-semibold rounded-full transition-all duration-300 overflow-hidden flex items-center">
                                <span className="transition-transform duration-300 group-hover:-translate-x-3 inline-block">
                                    {content.cta.button}
                                </span>
                                <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

