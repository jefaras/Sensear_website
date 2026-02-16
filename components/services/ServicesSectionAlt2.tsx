/**
 * Alternative 2: Horizontal Compact Rows
 * 
 * A horizontal layout with small images on the left and compact content on the right.
 * Similar to a list view with muted separators.
 * 
 * Usage: Replace the "Combined Section" in app/[lang]/services/page.tsx with this component
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ServicesSectionAlt2Props {
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

export function ServicesSectionAlt2({ content, lang }: ServicesSectionAlt2Props) {
    return (
        <div className="space-y-0 divide-y divide-black/10">
            {/* Sonic Strategy Row */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 py-6 lg:py-8">
                <img
                    src="/images/services/service-sonic-strategy.jpg"
                    alt="Sonic Strategy"
                    className="w-full sm:w-24 h-32 sm:h-24 lg:w-32 lg:h-32 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight mb-1">
                        {content.services.strategy.title}
                    </h3>
                    <p className="text-sm lg:text-base font-medium text-black/50 mb-2">{content.services.strategy.subtitle}</p>
                    <p className="text-sm text-black/60 leading-relaxed mb-3 hidden sm:block">{content.services.strategy.desc}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <p className="text-sm text-black/50 leading-relaxed sm:flex-1" dangerouslySetInnerHTML={{ __html: content.services.strategy.ideal_for }} />
                        <Link href={`/${lang}/contact?interest=sonic-identity`} className="flex-shrink-0">
                            <Button
                                variant="outline"
                                className="group bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                            >
                                <span className="mr-1">{content.services.strategy.cta}</span>
                                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Audio Upgrades Row */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 py-6 lg:py-8">
                <img
                    src="/images/services/service-audio-upgrades.jpg"
                    alt="Audio Upgrades"
                    className="w-full sm:w-24 h-32 sm:h-24 lg:w-32 lg:h-32 object-cover rounded-xl flex-shrink-0"
                />
                <div className="flex-1">
                    <h3 className="text-xl lg:text-2xl font-bold text-black leading-tight mb-1">
                        {content.services.upgrades.title}
                    </h3>
                    <p className="text-sm lg:text-base font-medium text-black/50 mb-2">{content.services.upgrades.subtitle}</p>
                    <p className="text-sm text-black/60 leading-relaxed mb-3 hidden sm:block">{content.services.upgrades.desc}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                        <p className="text-sm text-black/50 leading-relaxed sm:flex-1" dangerouslySetInnerHTML={{ __html: content.services.upgrades.ideal_for }} />
                        <Link href={`/${lang}/contact?interest=audio-upgrades`} className="flex-shrink-0">
                            <Button
                                variant="outline"
                                className="group bg-transparent border border-black/30 text-black hover:bg-black hover:text-white px-4 py-2 text-sm font-medium rounded-full transition-all duration-300"
                            >
                                <span className="mr-1">{content.services.upgrades.cta}</span>
                                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
