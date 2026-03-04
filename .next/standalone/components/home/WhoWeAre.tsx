'use client';

import { Locale } from "@/lib/i18n";

interface WhoWeAreProps {
    lang: Locale;
    title: string;
}

export default function WhoWeAre({ lang, title }: WhoWeAreProps) {
    return (
        <section className="bg-black py-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                        {title}
                    </h2>

                    <div className="w-full text-center">
                        <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                            {lang === 'en' ? (
                                <>
                                    We are a team of passionate <span className="font-bold italic">music experts</span> who create{' '}
                                    <span className="font-bold italic">soundtracks for venues</span> through <span className="font-bold italic">music</span> that is{' '}
                                    <span className="font-bold italic">intentional</span>, <span className="font-bold italic">immersive</span> &{' '}
                                    <span className="font-bold italic">memorable</span>.
                                </>
                            ) : (
                                <>
                                    Είμαστε μια ομάδα <span className="font-bold italic">ειδικών στον ήχο</span> με{' '}
                                    <span className="font-bold italic">βαθιά μουσική κουλτούρα</span>, που επενδύει{' '}
                                    <span className="font-bold italic">χώρους και εκδηλώσεις</span> με στοχευμένη, βιωματική μουσική που{' '}
                                    <span className="font-bold italic">μένει στη μνήμη</span>.
                                </>
                            )}
                        </p>
                        <p className="text-xl md:text-2xl lg:text-3xl text-white/80 leading-relaxed">
                            {lang === 'en' ? (
                                <>
                                    Our core belief is that music shapes <span className="font-bold">atmosphere</span>, influences{' '}
                                    <span className="font-bold">behaviour</span> and builds lasting <span className="font-bold">connections</span> with guests.
                                </>
                            ) : (
                                <>
                                    Η μουσική, για εμάς, διαμορφώνει την <span className="font-bold">ατμόσφαιρα</span>, επηρεάζει τη{' '}
                                    <span className="font-bold">συμπεριφορά</span> και ενισχύει τη <span className="font-bold">σύνδεση</span> με τους επισκέπτες.
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
