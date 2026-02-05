import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Mail, Phone } from "lucide-react";
import { Locale } from "@/lib/i18n";

export function Footer({ lang, dict }: { lang: Locale, dict: any }) {
    const footer = dict.footer;
    const nav = footer.nav;

    return (
        <footer className="bg-black text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-3 mb-4">
                            <Image
                                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a2f42e1a_sensear-logo-avatar-white-transparent1.png"
                                alt="SensEar"
                                width={64}
                                height={64}
                                className="object-contain"
                            />
                            <div>
                                <h3 className="font-syne text-2xl font-bold tracking-wide">SENSEAR</h3>
                                <p className="text-white/50 text-xs tracking-wider">{footer.tagline}</p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4 mb-6">
                            <Link href="https://www.facebook.com/61575909304249/" target="_blank" className="text-white/60 hover:text-white transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.instagram.com/sensear.music" target="_blank" className="text-white/60 hover:text-white transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-2 mb-8">
                            <Link href="mailto:hello@sensear.music" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
                                <Mail className="w-4 h-4" />
                                hello@sensear.music
                            </Link>
                            <Link href="tel:+306976994212" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
                                <Phone className="w-4 h-4" />
                                (+30) 6976.994.212
                            </Link>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <p className="text-white/80 text-sm font-medium mb-3">{footer.newsletter.title}</p>
                            <form className="flex gap-2 max-w-sm">
                                <input
                                    type="email"
                                    placeholder={footer.newsletter.placeholder}
                                    className="flex-1 bg-transparent border border-white/20 rounded-md px-4 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/50"
                                />
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-white/90 transition-colors"
                                >
                                    {footer.newsletter.button}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/80">{nav.services.title}</h4>
                        <ul className="space-y-3">
                            {nav.services.items.map((item: any) => (
                                <li key={item.link}>
                                    <Link
                                        href={`/${lang}/${item.link}`}
                                        className="font-jakarta text-[15px] font-normal text-white/80 hover:text-white transition-all hover:underline decoration-1 underline-offset-4"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/80">{nav.industries.title}</h4>
                        <ul className="space-y-3">
                            {nav.industries.items.map((item: any) => (
                                <li key={item.link}>
                                    <Link
                                        href={`/${lang}/${item.link}`}
                                        className="font-jakarta text-[15px] font-normal text-white/80 hover:text-white transition-all hover:underline decoration-1 underline-offset-4"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider mb-6 text-white/80">{nav.company.title}</h4>
                        <ul className="space-y-3">
                            {nav.company.items.map((item: any) => (
                                <li key={item.link}>
                                    <Link
                                        href={`/${lang}/${item.link}`}
                                        className="font-jakarta text-[15px] font-normal text-white/80 hover:text-white transition-all hover:underline decoration-1 underline-offset-4"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            {/* Legal Section */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-6">
                    <p className="text-[10px] text-white/30 leading-relaxed text-center max-w-6xl mx-auto">
                        {footer.legal}
                    </p>
                </div>
            </div>

            {/* Large SENSEAR Text */}
            <div className="container mx-auto px-6 py-12">
                <h2 className="font-syne text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-bold text-white tracking-tighter text-center leading-none">
                    SENSEAR
                </h2>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10">
                <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
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
