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
        <section className="py-24 relative z-10">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
                <div className="relative overflow-hidden rounded-[3rem]">
                    {/* Animated Background - matching "Our philosophy" section */}
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            backgroundImage: 'linear-gradient(135deg, #f5d4c1, #e8c3b0, #d4c4b0, #c0c0c0, #d3d3d3, #f0d5d0, #e8c3b0, #f5d4c1)',
                            backgroundSize: '400% 400%',
                            animation: 'gradient-shift 10s ease infinite'
                        }}
                    />

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
