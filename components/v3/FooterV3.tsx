import Image from 'next/image';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getLocalizedPath } from '@/lib/localized-path';
import { NewsletterForm } from '@/components/NewsletterForm';

interface FooterLink {
    title: string;
    link: string;
}

interface FooterV3Props {
    lang: Locale;
    footer: {
        tagline: string;
        intro: string;
        col_services: string;
        col_industries: string;
        col_company: string;
        link_faq: string;
        link_sitemap: string;
        col_newsletter: string;
        newsletter_blurb: string;
        newsletter_placeholder: string;
        newsletter_thanks: string;
        copyright: string;
        privacy: string;
        terms: string;
        wordmark: string;
    };
    navigation: {
        case_studies: string;
        about: string;
        blog: string;
        contact: string;
    };
    services: FooterLink[];
    industries: FooterLink[];
    email: string;
    phoneLine: string;
}

const colLabel = 'se-gold-text mb-[clamp(15px,1.19vw,21px)] text-[clamp(10px,0.74vw,13px)] font-bold tracking-[0.22em]';
const colLink =
    'se-navlink w-fit text-[clamp(0.87rem,0.99vw,1.09rem)] text-[#faf6f1]/62 no-underline hover:text-[#faf6f1]';

export function FooterV3({ lang, footer, navigation, services, industries, email, phoneLine }: FooterV3Props) {
    const localizedPath = (path: string) => getLocalizedPath(lang, path);
    const [phoneNumber, ...phoneRest] = phoneLine.split(' · ');
    const phoneTel = `tel:+${phoneNumber.replace(/[^0-9]/g, '')}`;
    const phoneDisplay = phoneRest.length ? `${phoneNumber} · ${phoneRest.join(' · ')}` : phoneNumber;

    const company = [
        { label: navigation.case_studies, href: localizedPath('/case-studies') },
        { label: navigation.blog, href: localizedPath('/blog') },
        { label: navigation.about, href: localizedPath('/about') },
        { label: navigation.contact, href: localizedPath('/contact') },
        { label: footer.link_faq, href: localizedPath('/faq') },
        { label: footer.link_sitemap, href: localizedPath('/sitemap-page') },
    ];

    return (
        <footer className="border-t border-[#faf6f1]/10 bg-[#0b0a0a] text-[#faf6f1] pt-[clamp(66px,5.23vw,92px)]">
            <div className="mx-auto grid max-w-[min(1760px,100%)] grid-cols-1 gap-[clamp(33px,2.61vw,46px)] px-[clamp(20px,1.59vw,28px)] sm:grid-cols-2 sm:px-[clamp(27px,2.1vw,37px)] lg:grid-cols-[1.5fr_1fr_1.15fr_0.95fr_1.15fr]">
                {/* Brand */}
                <div className="sm:col-span-2 lg:col-span-1">
                    <div className="mb-[clamp(17px,1.31vw,23px)] flex items-center gap-3">
                        <Image
                            src="/images/brand/sensear-logo-white.png"
                            alt="SensEar"
                            width={46}
                            height={46}
                            className="h-[53px] w-[53px] object-contain"
                        />
                        <div>
                            <div className="font-sans text-[clamp(18px,1.31vw,23px)] font-extrabold tracking-[0.18em]">{footer.wordmark}</div>
                            <div className="font-didot text-[clamp(12px,0.85vw,15px)] text-[#faf6f1]/55">{footer.tagline}</div>
                        </div>
                    </div>
                    <p className="max-w-[350px] text-[clamp(0.87rem,0.99vw,1.09rem)] leading-[1.6] text-[#faf6f1]/50">{footer.intro}</p>
                    <div className="mb-[clamp(20px,1.59vw,28px)] mt-[clamp(20px,1.59vw,28px)] flex gap-[clamp(13px,1.02vw,18px)]">
                        <a
                            href="https://www.facebook.com/61575909304249/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-[#faf6f1]/70 transition-colors hover:text-[#e3992f]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                        </a>
                        <a
                            href="https://www.instagram.com/sensear.music"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="text-[#faf6f1]/70 transition-colors hover:text-[#e3992f]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/sensear-music/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-[#faf6f1]/70 transition-colors hover:text-[#e3992f]"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        </a>
                    </div>
                    <div className="flex flex-col gap-2 text-[clamp(0.87rem,0.99vw,1.09rem)]">
                        <a href={`mailto:${email}`} className="flex w-fit items-center gap-2 text-[#faf6f1]/70 no-underline transition-colors hover:text-[#e3992f]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                            {email}
                        </a>
                        <a href={phoneTel} className="flex w-fit items-center gap-2 text-[#faf6f1]/70 no-underline transition-colors hover:text-[#e3992f]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                            {phoneDisplay}
                        </a>
                    </div>
                </div>

                {/* Services */}
                <div>
                    <div className={colLabel}>{footer.col_services}</div>
                    <div className="flex flex-col gap-[13px]">
                        {services.map((item) => (
                            <Link key={item.link} href={localizedPath(`/${item.link}`)} className={colLink}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Industries */}
                <div>
                    <div className={colLabel}>{footer.col_industries}</div>
                    <div className="flex flex-col gap-[13px]">
                        {industries.map((item) => (
                            <Link key={item.link} href={localizedPath(`/${item.link}`)} className={colLink}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Company */}
                <div>
                    <div className={colLabel}>{footer.col_company}</div>
                    <div className="flex flex-col gap-[13px]">
                        {company.map((item) => (
                            <Link key={item.href} href={item.href} className={colLink}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter */}
                <div>
                    <div className={colLabel}>{footer.col_newsletter}</div>
                    <p className="mb-[clamp(13px,1.02vw,18px)] text-[clamp(0.82rem,0.94vw,1.03rem)] leading-[1.55] text-[#faf6f1]/50">{footer.newsletter_blurb}</p>
                    <NewsletterForm
                        placeholder={footer.newsletter_placeholder}
                        buttonText=""
                        source="Footer v3"
                        variant="footerV3"
                        successText={footer.newsletter_thanks}
                    />
                </div>
            </div>

            {/* Bottom bar */}
            <div className="mx-auto mt-[clamp(40px,3.12vw,55px)] flex max-w-[min(1760px,100%)] flex-wrap items-center justify-between gap-[clamp(13px,1.02vw,18px)] border-t border-[#faf6f1]/10 px-[clamp(20px,1.59vw,28px)] py-[clamp(20px,1.59vw,28px)] sm:px-[clamp(27px,2.1vw,37px)]">
                <span className="text-[clamp(11px,0.8vw,14px)] text-[#faf6f1]/40">{footer.copyright}</span>
                <div className="flex gap-[clamp(17px,1.31vw,23px)]">
                    <Link href={localizedPath('/privacy')} className="text-[clamp(11px,0.8vw,14px)] text-[#faf6f1]/40 no-underline transition-colors hover:text-[#faf6f1]">
                        {footer.privacy}
                    </Link>
                    <Link href={localizedPath('/terms')} className="text-[clamp(11px,0.8vw,14px)] text-[#faf6f1]/40 no-underline transition-colors hover:text-[#faf6f1]">
                        {footer.terms}
                    </Link>
                </div>
            </div>

            {/* Oversized stroked wordmark */}
            <div className="overflow-hidden pb-[clamp(20px,1.59vw,28px)] pt-[clamp(27px,2.1vw,37px)] leading-[0.8]">
                <div className="text-center font-sans font-black tracking-[-0.02em] text-[clamp(4.6rem,17.83vw,17.25rem)] text-transparent [-webkit-text-stroke:1px_rgba(250,246,241,0.14)]">
                    {footer.wordmark}
                </div>
            </div>
        </footer>
    );
}
