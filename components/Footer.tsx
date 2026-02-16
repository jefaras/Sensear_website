import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, ArrowRight, Mail, Phone } from "lucide-react";
import { Locale } from "@/lib/i18n";

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

                        {/* Newsletter */}
                        <div>
                            <h3 className="text-sm font-semibold text-[#faebe3] mb-3 font-jakarta">{footer.newsletter.title}</h3>
                            <form className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder={footer.newsletter.placeholder}
                                    className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 flex-1 text-sm h-9 max-w-[180px] rounded-full px-4 focus:outline-none focus:border-white/50"
                                />
                                <button
                                    type="submit"
                                    className="group relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-2 text-xs font-semibold rounded-full transition-all duration-300 overflow-hidden h-9 flex items-center"
                                >
                                    <span className="relative inline-flex items-center mr-2 align-middle transition-transform duration-300 group-hover:-translate-x-2">
                                        <Image src="/images/brand/sensear-logo-white.png" width={20} height={20} className="w-5 h-5 object-contain" alt="" />
                                    </span>
                                    <span className="transition-transform duration-300 group-hover:-translate-x-2 inline-block">
                                        {footer.newsletter.button}
                                    </span>
                                    <ArrowRight className="absolute right-2 w-3 h-3 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 top-1/2 -translate-y-1/2" />
                                </button>
                            </form>
                        </div>
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

            {/* Bottom Bar */}
            <div className="border-t border-white/10 relative z-10">
                <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
                    <p>{footer.rights}</p>
                    <div className="flex gap-6">
                        <Link href={`/${lang}/privacy`} className="hover:text-white transition-colors">{nav.policy.privacy}</Link>
                        <Link href={`/${lang}/terms`} className="hover:text-white transition-colors">{nav.policy.terms}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
