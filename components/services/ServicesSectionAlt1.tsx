/**
 * Alternative 1: Compact Side-by-Side Cards
 * 
 * A card-based layout with reduced scale and muted borders.
 * Each service is contained in a subtle card with the image on top and content below.
 * 
 * Usage: Replace the "Combined Section" in app/[lang]/services/page.tsx with this component
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServicesSectionAlt1Props {
    content: {
        services: {
            strategy: {
                title: string;
                subtitle: string;
                desc: string;
                ideal_for: string;
                cta: string;
            };
            upgrades: {
                title: string;
                subtitle: string;
                desc: string;
                ideal_for: string;
                cta: string;
            };
        };
    };
    lang: string;
}

export function ServicesSectionAlt1({ content, lang }: ServicesSectionAlt1Props) {
    return (
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Sonic Strategy Card */}
            <div className="bg-white/50 border border-black/10 rounded-2xl p-6 lg:p-8">
                <img
                    src="/images/services/service-sonic-strategy.jpg"
                    alt="Sonic Strategy"
                    className="w-full h-48 lg:h-56 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-black leading-tight mb-1">
                    {content.services.strategy.title}
                </h3>
                <p className="text-base font-medium text-black/50 mb-4">{content.services.strategy.subtitle}</p>
                <p className="text-sm text-black/60 leading-relaxed mb-4">{content.services.strategy.desc}</p>
                <p className="text-sm text-black/50 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.services.strategy.ideal_for }} />
                <Link href={`/${lang}/contact?interest=sonic-identity`}>
                    <Button
                        variant="outline"
                        className="group w-full bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-5 py-3 text-sm font-medium rounded-full transition-all duration-300"
                    >
                        <span className="mr-2">{content.services.strategy.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>

            {/* Audio Upgrades Card */}
            <div className="bg-white/50 border border-black/10 rounded-2xl p-6 lg:p-8">
                <img
                    src="/images/services/service-audio-upgrades.jpg"
                    alt="Audio Upgrades"
                    className="w-full h-48 lg:h-56 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-black leading-tight mb-1">
                    {content.services.upgrades.title}
                </h3>
                <p className="text-base font-medium text-black/50 mb-4">{content.services.upgrades.subtitle}</p>
                <p className="text-sm text-black/60 leading-relaxed mb-4">{content.services.upgrades.desc}</p>
                <p className="text-sm text-black/50 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.services.upgrades.ideal_for }} />
                <Link href={`/${lang}/contact?interest=audio-upgrades`}>
                    <Button
                        variant="outline"
                        className="group w-full bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-5 py-3 text-sm font-medium rounded-full transition-all duration-300"
                    >
                        <span className="mr-2">{content.services.upgrades.cta}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>
            </div>
        </div>
    );
}
