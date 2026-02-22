import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Locale } from "@/lib/i18n";
import { NewsletterForm } from "@/components/NewsletterForm";

export function Footer({ lang, dict }: { lang: Locale, dict: any }) {
    const footer = dict.footer;
    const nav = footer.nav;

    return (
        <footer role="contentinfo" aria-label="Site footer" className="bg-black text-white relative overflow-hidden">
            {/* Background decorative element */}
            <div 
                className="absolute top-4 left-0 right-0 z-0 opacity-[0.1] pointer-events-none bottom-4"
                style={{
                    backgroundImage: "url('/images/backgrounds/footer-background-pattern.png')",
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            />
            
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
                <div className="flex flex-wrap gap-12 lg:gap-24">

                    {/* Brand Column */}
                    <div className="min-w-[300px] lg:w-1/3">
                        <Link href={`/${lang}`} className="flex items-center gap-3 group mb-6 w-fit">
                            <Image
                                src="/images/brand/sensear-logo-white.png"
                                alt="SensEar"
                                width={64}
                                height={64}
                                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform"
                            />
                            <div>
                                <h3 className="text-3xl font-bold text-white tracking-wide font-syne">SENSEAR</h3>
                                <p className="text-xs text-white -mt-1 font-syne">{footer.tagline}</p>
                            </div>
                        </Link>

                        {/* Social Icons */}
                        <div className="flex gap-6 mb-6">
                            <Link href="https://www.facebook.com/61575909304249/" target="_blank" className="text-white/70 hover:text-[#faebe3] transition-colors" aria-label="Visit SensEar on Facebook">
                                <Facebook className="w-6 h-6" />
                            </Link>
                            <Link href="https://www.instagram.com/sensear.music" target="_blank" className="text-white/70 hover:text-[#faebe3] transition-colors" aria-label="Visit SensEar on Instagram">
                                <Instagram className="w-6 h-6" />
                            </Link>
                        </div>

                        {/* Contact Info - Using images to prevent bot scraping */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-2">
                                <Mail className="w-4 h-4 text-white/70" />
                                <Image
                                    src="/images/brand/contact-email.png"
                                    alt="hello@sensear.music"
                                    width={200}
                                    height={20}
                                    className="h-5 w-auto"
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone className="w-4 h-4 text-white/70" />
                                <Image
                                    src="/images/brand/contact-phone.png"
                                    alt="+30 6976994212"
                                    width={200}
                                    height={20}
                                    className="h-5 w-auto"
                                />
                            </div>
                        </div>

                        {/* Newsletter - temporarily disabled */}
                        {/*
                        <div>
                            <h3 className="text-sm font-semibold text-[#faebe3] mb-3 font-jakarta">{footer.newsletter.title}</h3>
                            <NewsletterForm
                                placeholder={footer.newsletter.placeholder}
                                buttonText={footer.newsletter.button}
                                source="Footer"
                                variant="footer"
                            />
                        </div>
                        */}
                    </div>

                    {/* Services */}
                    <div>
                        <Link href={`/${lang}/services`} className="text-sm font-semibold text-[#faebe3] mb-4 uppercase tracking-wider hover:underline decoration-1 underline-offset-4 inline-block font-jakarta">
                            {nav.services.title}
                        </Link>
                        <div className="space-y-2">
                            {nav.services.items.map((item: any) => (
                                <Link
                                    key={item.link}
                                    href={`/${lang}/${item.link}`}
                                    className="block text-white/70 hover:text-[#faebe3] transition-colors text-base hover:underline decoration-1 underline-offset-4 font-jakarta"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Industries */}
                    <div>
                        <Link href={`/${lang}/industries`} className="text-sm font-semibold text-[#faebe3] mb-4 uppercase tracking-wider hover:underline decoration-1 underline-offset-4 inline-block font-jakarta">
                            {nav.industries.title}
                        </Link>
                        <div className="space-y-2">
                            {nav.industries.items.map((item: any) => (
                                <Link
                                    key={item.link}
                                    href={`/${lang}/${item.link}`}
                                    className="block text-white/70 hover:text-[#faebe3] transition-colors text-base hover:underline decoration-1 underline-offset-4 font-jakarta"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold text-[#faebe3] mb-4 uppercase tracking-wider font-jakarta">{nav.company.title}</h3>
                        <div className="space-y-2">
                            {nav.company.items.map((item: any) => (
                                <Link
                                    key={item.link}
                                    href={`/${lang}/${item.link}`}
                                    className="block text-white/70 hover:text-[#faebe3] transition-colors text-base hover:underline decoration-1 underline-offset-4 font-jakarta"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Bar - Above Legal Section */}
            <div className="border-t border-white/10 relative z-10">
                <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/40">
                    <p>{footer.rights}</p>
                    <div className="flex gap-4">
                        <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">{nav.policy.privacy}</Link>
                        <span className="text-white/20">|</span>
                        <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">{nav.policy.terms}</Link>
                    </div>
                </div>
            </div>

            {/* Legal Section */}
            <div className="border-t border-white/20 relative z-10">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <p className="text-xs text-white/50 text-center leading-relaxed">
                        {footer.legal}
                    </p>
                </div>
            </div>

            {/* Large SENSEAR Text */}
            <div className="w-full overflow-hidden leading-none pb-2 select-none relative z-10">
                <h2 className="text-[15vw] font-bold text-white text-center font-syne tracking-tight leading-[0.85]">
                    SENSEAR
                </h2>
            </div>
        </footer>
    );
}
