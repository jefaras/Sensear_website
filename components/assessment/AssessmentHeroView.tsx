import Image from "next/image";
import { ArrowDown } from "lucide-react";

import type { CampaignMessage } from "@/components/assessment/assessment-campaign";

export function AssessmentHeroView({ message }: { message: CampaignMessage }) {
    return (
        <section className="grid min-h-[100dvh] grid-cols-1 bg-[#0b0a0a] lg:grid-cols-[1.04fr_0.96fr]">
            <div className="flex items-end justify-center lg:items-center px-5 pb-14 pt-36 sm:px-8 sm:pb-16 lg:px-[clamp(2rem,5.2vw,6.5rem)] lg:pb-[clamp(4rem,8vh,6.5rem)] lg:pt-24">
                <div className="w-full max-w-[720px] lg:text-center">
                    <h1 className="max-w-[700px] lg:mx-auto font-didot text-[clamp(2.65rem,4.1vw,4.8rem)] font-normal leading-[1.1] tracking-[-0.035em] text-[#faf6f1]">
                        <span className="block">{message.lead}</span>
                        <span className="mt-[0.24em] block italic text-[#f0bd95]">{message.emphasis}</span>
                    </h1>

                    <p className="mt-9 max-w-[590px] lg:mx-auto text-[17px] leading-[1.7] text-[#faf6f1]/70 sm:text-[19px]">
                        {message.supporting}
                    </p>

                    <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center lg:justify-center">
                        <a
                            href="#axiologisi"
                            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[#f0bd95] px-6 py-4 text-center text-[14px] font-extrabold tracking-[0.025em] text-[#0b0a0a] no-underline transition-colors hover:bg-[#faf6f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0bd95] sm:px-8 sm:text-[15px]"
                        >
                            ΖΗΤΗΣΤΕ ΔΩΡΕΑΝ ΑΞΙΟΛΟΓΗΣΗ
                            <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
                        </a>
                        <span className="text-[13px] leading-relaxed text-[#faf6f1]/48">
                            Απάντηση εντός 24 ωρών
                        </span>
                    </div>
                </div>
            </div>

            <div className="relative min-h-[52vh] overflow-hidden border-t border-[#faf6f1]/10 lg:min-h-full lg:border-l lg:border-t-0">
                <Image
                    src="/images/assessment/hero-sonic-audit.webp"
                    alt="Ατμοσφαιρικός χώρος φιλοξενίας δίπλα στη θάλασσα"
                    fill
                    priority
                    sizes="(min-width: 1024px) 48vw, 100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-[#0b0a0a]/10" />
                <p className="absolute bottom-5 right-5 max-w-[270px] bg-[#0b0a0a]/58 px-3 py-2 text-right text-[11px] lg:left-5 lg:right-auto lg:text-left leading-[1.5] tracking-[0.04em] text-[#faf6f1]/72">
                    Η μουσική δεν γεμίζει απλώς τον χώρο, αλλά καθορίζει και το πώς θα τον θυμάται ο επισκέπτης.
                </p>
            </div>
        </section>
    );
}
