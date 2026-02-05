import { AnimatedButton } from "@/components/AnimatedButton";

interface FinalCTAProps {
    heading: string;
    text: string;
    buttons: {
        text: string;
        link: string;
    }[];
    lang: string;
}

export const FinalCTA = ({ heading, text, buttons, lang }: FinalCTAProps) => {
    return (
        <section className="py-24 px-6 relative z-10">
            <div className="max-w-6xl mx-auto">
                <div className="relative overflow-hidden rounded-[3rem]">
                    {/* Animated Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 animate-gradient-shift bg-[length:400%_400%] z-0" />
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />

                    <div className="relative z-10 p-12 md:p-24 text-center space-y-12">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-black tracking-tight leading-[1.1]">
                                {heading}
                            </h2>
                            <p className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto leading-relaxed">
                                {text}
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-6 justify-center pt-8">
                            {buttons.map((btn, idx) => (
                                <AnimatedButton
                                    key={idx}
                                    href={btn.link}
                                    lang={lang}
                                    variant={idx === 0 ? "default" : "outline"}
                                >
                                    {btn.text}
                                </AnimatedButton>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
