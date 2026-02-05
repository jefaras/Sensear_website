"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n";
import { Button } from "@/components/ui/button";

interface NavbarProps {
    lang: Locale;
    navigation: {
        home: string;
        services: string;
        industries: string;
        case_studies: string;
        about: string;
        blog: string;
        contact: string;
    };
}

export function Navbar({ lang, navigation }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    const switchLang = () => {
        if (!pathname) return "/";
        const segments = pathname.split("/");
        const currentLang = segments[1] as Locale;
        const newLang = currentLang === "en" ? "el" : "en";
        segments[1] = newLang;
        return segments.join("/");
    };

    const targetLang = lang === "en" ? "el" : "en";
    const targetLangLabel = lang === "en" ? "GR" : "EN";

    const links = [
        { href: `/${lang}`, label: navigation.home },
        { href: `/${lang}/services`, label: navigation.services },
        { href: `/${lang}/industries`, label: navigation.industries },
        { href: `/${lang}/case-studies`, label: navigation.case_studies },
        { href: `/${lang}/blog`, label: navigation.blog },
        { href: `/${lang}/about`, label: navigation.about },
    ];

    return (
        <nav
            suppressHydrationWarning
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-1",
                scrolled || isOpen ? "bg-black lg:bg-black/95 shadow-lg" : "bg-transparent",
                !scrolled && !isOpen ? "text-black" : "text-white"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo with SENSEAR text */}
                <Link href={`/${lang}`} className="group flex items-center gap-3 shrink-0">
                    <div className="relative w-16 h-16">
                        <Image
                            src={scrolled || isOpen
                                ? "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/7a2f42e1a_sensear-logo-avatar-white-transparent1.png"
                                : "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68e53c2bf0c2fbec935083b6/a42606150_sensear-logo-avatar-color1.png"
                            }
                            alt="SensEar"
                            fill
                            className="object-contain transition-all duration-300 group-hover:scale-110"
                            priority
                        />
                    </div>
                    <span className={cn(
                        "font-syne text-3xl font-bold tracking-wide transition-colors",
                        scrolled || isOpen ? "text-white" : "text-black"
                    )}>
                        SENSEAR
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "font-jakarta text-base font-bold tracking-wide transition-all hover:underline decoration-1 underline-offset-4",
                                scrolled || isOpen ? "text-white/90 hover:text-white" : "text-black/80 hover:text-black",
                                isActive(link.href) && "underline"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Button asChild variant="default" className={cn(
                        "rounded-full px-6 border-transparent font-jakarta text-base font-bold tracking-wide transition-colors",
                        scrolled || isOpen
                            ? "bg-white text-black hover:bg-gray-100"
                            : "bg-black text-white hover:bg-black/90"
                    )}>
                        <Link href={`/${lang}/contact`}>
                            {navigation.contact}
                        </Link>
                    </Button>

                    {/* Lang Switcher */}
                    <Link
                        href={switchLang()}
                        className={cn(
                            "flex items-center gap-1 text-sm font-medium px-3 py-1 border rounded-full transition-colors",
                            scrolled || isOpen
                                ? "border-white/20 text-white hover:bg-white/10"
                                : "border-black/20 text-black hover:bg-black/5"
                        )}
                    >
                        <Globe className="w-4 h-4" />
                        <span>{targetLangLabel}</span>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "lg:hidden p-2 transition-colors",
                        scrolled || isOpen ? "text-white" : "text-black"
                    )}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-full left-0 right-0 bg-black shadow-lg p-6 flex flex-col gap-4 max-h-[80vh] overflow-y-auto">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                                "text-lg font-jakarta font-bold py-3 border-b border-white/10",
                                isActive(link.href) ? "text-white" : "text-white/70"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href={`/${lang}/contact`}
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-jakarta font-bold py-3 border-b border-white/10 text-white/70"
                    >
                        {navigation.contact}
                    </Link>

                    <Link
                        href={switchLang()}
                        className="flex items-center gap-2 text-lg font-bold py-2 text-white"
                    >
                        <Globe className="w-5 h-5" />
                        <span>Switch to {targetLangLabel}</span>
                    </Link>
                </div>
            )}
        </nav>
    );
}
