import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowDown, ArrowRight, Clock3, Headphones, Layers3, RadioTower, UsersRound } from "lucide-react";

import { AssessmentBrand } from "@/components/assessment/AssessmentBrand";
import { AssessmentForm } from "@/components/assessment/AssessmentForm";
import { AssessmentHero } from "@/components/assessment/AssessmentHero";
import { AssessmentHeroView } from "@/components/assessment/AssessmentHeroView";
import { campaignMessages } from "@/components/assessment/assessment-campaign";
import { FaqJsonLd, ServiceJsonLd } from "@/components/JsonLd";
import { V3Root } from "@/components/v3";

const description = "Ζητήστε δωρεάν αρχική αξιολόγηση της μουσικής του χώρου σας και αποκτήστε μια σαφή πρώτη εικόνα για το τι λειτουργεί, τι όχι και τι αξίζει να αλλάξει.";

export const metadata: Metadata = {
    title: "Δωρεάν αξιολόγηση μουσικής για τον χώρο σας",
    description,
    alternates: { canonical: "/el/dorean-axiologisi/" },
    openGraph: {
        title: "Η μουσική του χώρου σας είναι η σωστή;",
        description,
        url: "/el/dorean-axiologisi/",
        locale: "el_GR",
        type: "website",
        images: [{
            url: "/images/assessment/hero-sonic-audit-og.jpg",
            width: 1200,
            height: 630,
            alt: "Ατμοσφαιρικός χώρος φιλοξενίας δίπλα στη θάλασσα",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Η μουσική του χώρου σας είναι η σωστή;",
        description,
        images: ["/images/assessment/hero-sonic-audit-og.jpg"],
    },
};

const assessmentPoints = [
    {
        icon: UsersRound,
        title: "Brand και κοινό",
        text: "Αν η μουσική εκφράζει τον χαρακτήρα του brand και τις προσδοκίες των ανθρώπων που θέλετε να προσελκύσετε.",
    },
    {
        icon: Clock3,
        title: "Ροή μέσα στην ημέρα",
        text: "Αν η ένταση, η ενέργεια και οι επιλογές εξελίσσονται σωστά από το πρωί έως το βράδυ.",
    },
    {
        icon: RadioTower,
        title: "Ήχος στον χώρο",
        text: "Αν η κάλυψη, οι ζώνες και η ένταση υπηρετούν την εμπειρία χωρίς να κουράζουν προσωπικό και επισκέπτες.",
    },
    {
        icon: Layers3,
        title: "Συνέπεια και διαχείριση",
        text: "Αν η μουσική παραμένει συνεπής στις βάρδιες, ανανεώνεται σωστά και η ομάδα σας μπορεί να τη διαχειρίζεται εύκολα.",
    },
];

const faqItems = [
    {
        question: "Τι περιλαμβάνει η δωρεάν αξιολόγηση;",
        answer: "Μια σύντομη συζήτηση για τον χώρο, το κοινό και τους στόχους σας, μαζί με μια πρώτη εκτίμηση των βασικών σημείων που αξίζει να εξεταστούν και του κατάλληλου επόμενου βήματος.",
    },
    {
        question: "Είναι το ίδιο με μια πλήρη επιτόπια αξιολόγηση;",
        answer: "Όχι. Είναι αρχική αξιολόγηση αναγκών και όχι πλήρης επιτόπια αξιολόγηση. Αν χρειάζεται βαθύτερη ανάλυση, θα σας εξηγήσουμε ξεκάθαρα τι περιλαμβάνει πριν αποφασίσετε.",
    },
    {
        question: "Αφορά μόνο εστιατόρια και ξενοδοχεία;",
        answer: "Όχι. Απευθύνεται σε χώρους φιλοξενίας, εστίασης, λιανικής, ευεξίας, events και brands που θέλουν η μουσική τους να λειτουργεί με συνέπεια και σκοπό.",
    },
];

export default function FreeAssessmentPage() {
    return (
        <V3Root className="min-h-screen selection:bg-[#f0bd95] selection:text-[#0b0a0a]">
            <ServiceJsonLd
                name="Δωρεάν αρχική αξιολόγηση μουσικής χώρου"
                description={description}
                url="/el/dorean-axiologisi/"
            />
            <FaqJsonLd items={faqItems} url="/el/dorean-axiologisi/" />

            <header className="absolute inset-x-0 top-0 z-30 border-b border-[#faf6f1]/10 bg-[#0b0a0a]/42 backdrop-blur-[8px]">
                <div className="mx-auto flex max-w-[1540px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-[clamp(2rem,5.2vw,6.5rem)]">
                    <AssessmentBrand />
                    <a
                        href="#axiologisi"
                        className="hidden text-[15px] font-bold text-[#faf6f1]/80 no-underline hover:text-[#faf6f1] sm:inline-flex sm:items-center sm:gap-2 lg:text-[17px]"
                    >
                        Ζητήστε δωρεάν αξιολόγηση
                        <ArrowDown className="h-4 w-4" aria-hidden="true" />
                    </a>
                </div>
            </header>

            <Suspense fallback={<AssessmentHeroView message={campaignMessages.music} />}>
                <AssessmentHero />
            </Suspense>

            <section className="border-t border-[#faf6f1]/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-[clamp(2rem,5.2vw,6.5rem)] lg:py-32">
                <div className="mx-auto max-w-[1320px]">
                    <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
                        <div>
                            <p className="max-w-[320px] text-[13px] font-bold leading-[1.55] text-[#f0bd95]">
                                Μια πρώτη εικόνα, πριν αποφασίσετε τι αξίζει να αλλάξει.
                            </p>
                        </div>
                        <div>
                            <h2 className="max-w-[900px] font-didot text-[clamp(2.45rem,4.6vw,5rem)] font-normal leading-[1.08] tracking-[-0.035em] text-[#faf6f1]">
                                Η σωστή μουσική δεν είναι απλώς θέμα γούστου, αλλά μέρος της εμπειρίας του χώρου.
                            </h2>
                            <p className="mt-7 max-w-[760px] text-[17px] leading-[1.75] text-[#faf6f1]/62">
                                Εξετάζουμε πού βρίσκεται σήμερα η μουσική σας και τι χρειάζεται για να αποκτήσει ο χώρος έναν πιο αναγνωρίσιμο, συνεπή και δικό του ήχο.
                            </p>
                        </div>
                    </div>

                    <div className="mt-16 grid border-t border-[#faf6f1]/14 md:grid-cols-2 lg:mt-24">
                        {assessmentPoints.map((point, index) => {
                            const Icon = point.icon;
                            return (
                                <article
                                    key={point.title}
                                    className={`border-b border-[#faf6f1]/14 py-8 md:px-8 ${index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"}`}
                                >
                                    <Icon className="h-5 w-5 text-[#f0bd95]" strokeWidth={1.5} aria-hidden="true" />
                                    <h3 className="mt-7 text-[18px] font-bold text-[#faf6f1]">{point.title}</h3>
                                    <p className="mt-3 max-w-[520px] text-[15px] leading-[1.7] text-[#faf6f1]/56">{point.text}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-[#faf6f1] px-5 py-20 text-[#0b0a0a] sm:px-8 sm:py-24 lg:px-[clamp(2rem,5.2vw,6.5rem)] lg:py-32">
                <div className="mx-auto max-w-[1320px]">
                    <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]">
                        <h2 className="max-w-[810px] font-didot text-[clamp(2.5rem,4.6vw,5rem)] font-normal leading-[1.08] tracking-[-0.035em]">
                            Μουσική που ακολουθεί τη στιγμή και κρατά τον χαρακτήρα του χώρου.
                        </h2>
                        <p className="max-w-[260px] text-[13px] font-bold leading-[1.55] text-[#0b0a0a]/52 md:text-right">
                            Ενδεικτικές συνεργασίες σε φιλοξενία και εστίαση
                        </p>
                    </div>

                    <div className="mt-14 grid gap-4 md:grid-cols-12 md:grid-rows-[260px_260px] lg:mt-20">
                        <figure className="group relative min-h-[480px] overflow-hidden rounded-[14px] md:col-span-7 md:row-span-2 md:min-h-0">
                            <Image src="/images/case-studies/case-study-yam.jpg" alt="Yam Antiparos" fill sizes="(min-width: 768px) 58vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
                            <div className="absolute inset-0 bg-[#0b0a0a]/16" />
                            <figcaption className="absolute inset-x-0 bottom-0 bg-[#0b0a0a]/74 p-6 text-[#faf6f1] sm:p-8">
                                <p className="text-[13px] font-bold text-[#f0bd95]">Yam Antiparos</p>
                                <p className="mt-3 max-w-[650px] font-didot text-[clamp(1.65rem,2.5vw,2.65rem)] leading-[1.18]">
                                    Στο Yam Antiparos, η μουσική κινείται από τα νωχελικά brunch έως τα βραδινά cocktails, χωρίς να αλλάζει ο χαρακτήρας του χώρου.
                                </p>
                            </figcaption>
                        </figure>

                        <figure className="group relative min-h-[260px] overflow-hidden rounded-[14px] md:col-span-5">
                            <Image src="/images/case-studies/case-study-beach-house.webp" alt="Beach House Antiparos" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
                            <div className="absolute inset-0 bg-[#0b0a0a]/12" />
                            <figcaption className="absolute inset-x-0 bottom-0 bg-[#0b0a0a]/68 px-5 py-4 text-[13px] font-bold text-[#faf6f1]">Beach House Antiparos</figcaption>
                        </figure>

                        <figure className="group relative min-h-[260px] overflow-hidden rounded-[14px] md:col-span-5">
                            <Image src="/images/case-studies/case-study-hera.webp" alt="Hera Hotel Athens" fill sizes="(min-width: 768px) 42vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.015]" />
                            <div className="absolute inset-0 bg-[#0b0a0a]/12" />
                            <figcaption className="absolute inset-x-0 bottom-0 bg-[#0b0a0a]/68 px-5 py-4 text-[13px] font-bold text-[#faf6f1]">Hera Hotel Athens</figcaption>
                        </figure>
                    </div>
                </div>
            </section>

            <section className="border-b border-t border-[#faf6f1]/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-[clamp(2rem,5.2vw,6.5rem)] lg:py-32">
                <div className="mx-auto max-w-[1320px]">
                    <h2 className="max-w-[800px] font-didot text-[clamp(2.5rem,4.5vw,4.9rem)] font-normal leading-[1.08] tracking-[-0.035em] text-[#faf6f1]">
                        Τι συμβαίνει αφού μας στείλετε το αίτημα;
                    </h2>

                    <ol className="mt-14 border-t border-[#faf6f1]/14 lg:mt-20">
                        {[
                            ["01", "Μας λέτε", "Λίγα πράγματα για τον χώρο, το κοινό και το τι θα θέλατε να βελτιώσει η μουσική."],
                            ["02", "Αξιολογούμε", "Συζητάμε μαζί σας και εντοπίζουμε τα βασικά σημεία που επηρεάζουν τη μουσική εμπειρία."],
                            ["03", "Προτείνουμε", "Σας δίνουμε μια καθαρή πρώτη κατεύθυνση και εξηγούμε ποιο επόμενο βήμα έχει πραγματική αξία για τον χώρο σας."],
                        ].map(([number, title, text]) => (
                            <li key={number} className="grid gap-4 border-b border-[#faf6f1]/14 py-8 sm:grid-cols-[70px_0.65fr_1.35fr] sm:items-start sm:gap-8">
                                <span className="text-[12px] font-bold text-[#f0bd95]">{number}</span>
                                <h3 className="text-[21px] font-bold text-[#faf6f1]">{title}</h3>
                                <p className="max-w-[610px] text-[15px] leading-[1.7] text-[#faf6f1]/56">{text}</p>
                            </li>
                        ))}
                    </ol>

                    <div className="mt-8 flex max-w-[860px] items-start gap-4 rounded-[12px] border border-[#f0bd95]/24 bg-[#f0bd95]/[0.045] p-5 sm:p-6">
                        <Headphones className="mt-0.5 h-5 w-5 shrink-0 text-[#f0bd95]" strokeWidth={1.6} aria-hidden="true" />
                        <p className="text-[14px] leading-[1.7] text-[#faf6f1]/62">
                            Η δωρεάν αξιολόγηση είναι μια αρχική διάγνωση αναγκών και όχι πλήρης επιτόπια αξιολόγηση. Αν χρειάζεται βαθύτερη ανάλυση, θα γνωρίζετε ακριβώς τι προτείνουμε και γιατί.
                        </p>
                    </div>
                </div>
            </section>

            <section id="axiologisi" className="scroll-mt-6 px-5 py-20 sm:px-8 sm:py-24 lg:px-[clamp(2rem,5.2vw,6.5rem)] lg:py-32">
                <div className="mx-auto grid max-w-[1180px] gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
                    <div className="lg:sticky lg:top-10 lg:self-start">
                        <h2 className="font-didot text-[clamp(2.75rem,4.6vw,5rem)] font-normal leading-[1.08] tracking-[-0.035em] text-[#faf6f1]">
                            Ας ακούσουμε πρώτα τον χώρο σας.
                        </h2>
                        <p className="mt-7 max-w-[430px] text-[16px] leading-[1.75] text-[#faf6f1]/62">
                            Συμπληρώστε τα βασικά στοιχεία. Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών για μια σύντομη πρώτη συζήτηση, χωρίς δέσμευση.
                        </p>
                        <div className="mt-9 border-t border-[#faf6f1]/12 pt-6">
                            <p className="text-[13px] font-bold text-[#faf6f1]/72">Προτιμάτε email;</p>
                            <a href="mailto:hello@sensear.music" className="mt-2 inline-flex items-center gap-2 text-[15px] text-[#f0bd95] no-underline hover:text-[#faf6f1]">
                                hello@sensear.music
                                <ArrowRight className="h-4 w-4" aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    <div className="rounded-[14px] border border-[#faf6f1]/12 bg-[#0e0d0c] p-5 sm:p-8 lg:p-10">
                        <Suspense fallback={<div className="min-h-[700px]" />}>
                            <AssessmentForm />
                        </Suspense>
                    </div>
                </div>
            </section>

            <section className="border-t border-[#faf6f1]/10 px-5 py-20 sm:px-8 sm:py-24 lg:px-[clamp(2rem,5.2vw,6.5rem)]">
                <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
                    <h2 className="font-didot text-[clamp(2.4rem,4vw,4.25rem)] font-normal leading-[1.08] tracking-[-0.035em] text-[#faf6f1]">
                        Πριν μας γράψετε
                    </h2>
                    <div className="border-t border-[#faf6f1]/14">
                        {faqItems.map((item) => (
                            <details key={item.question} className="group border-b border-[#faf6f1]/14 py-6">
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 text-[17px] font-bold leading-[1.45] text-[#faf6f1] [&::-webkit-details-marker]:hidden">
                                    {item.question}
                                    <span className="mt-0.5 text-xl font-normal leading-none text-[#f0bd95] transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                                </summary>
                                <p className="max-w-[680px] pt-4 text-[15px] leading-[1.75] text-[#faf6f1]/56">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="border-t border-[#faf6f1]/10 px-5 py-8 sm:px-8 lg:px-[clamp(2rem,5.2vw,6.5rem)]">
                <div className="mx-auto flex max-w-[1320px] flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                    <AssessmentBrand />
                    <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-[#faf6f1]/44">
                        <span>© 2026 SensEar Music</span>
                        <Link href="/el/privacy/" className="no-underline hover:text-[#faf6f1]">Πολιτική Απορρήτου</Link>
                        <Link href="/el/" className="no-underline hover:text-[#faf6f1]">sensear.music</Link>
                    </div>
                </div>
            </footer>
        </V3Root>
    );
}
