import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Lightbulb, Building2, SlidersHorizontal, Heart } from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { FinalCTA } from "@/components/sections/FinalCTA";

// Simple markdown bold parser: converts **text** to <strong>text</strong>
function parseMarkdownBold(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    return {
        title: dict.about_page.meta.title,
        description: dict.about_page.meta.description,
    };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const content = dict.about_page;

    return (
        <div className="bg-[#faebe3] min-h-screen relative overflow-x-hidden">
            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .slide-up-1 { animation: slideUp 0.8s ease-out forwards; opacity: 0; }
        .slide-up-2 { animation: slideUp 0.8s ease-out 0.2s forwards; opacity: 0; }
        .slide-up-4 { animation: slideUp 0.8s ease-out 0.6s forwards; opacity: 0; }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-gradient {
            background-size: 400% 400%;
            animation: gradient-shift 10s ease infinite;
        }
      `}} />

            {/* Hero Section */}
            <section className="relative pt-32 pb-32 min-h-[90vh] flex flex-col justify-center overflow-hidden">
                {/* Background - using inline style for arbitrary external URL */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />

                <div className="w-full px-6 md:px-12 lg:px-16 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Column: H1 */}
                        <div className="flex flex-col justify-center text-left">
                            <h1 className="text-[2.2rem] sm:text-[3.2rem] md:text-[4rem] lg:text-[4.8rem] font-extrabold text-black mb-6 leading-[1.1] tracking-tight slide-up-1">
                                {content.hero.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-black/70 leading-relaxed slide-up-2">
                                {content.hero.subtitle}
                            </p>
                        </div>

                        {/* Right Column: Square Image */}
                        <div className="w-full slide-up-4 flex justify-center lg:justify-end">
                            <div className="w-full lg:w-[93.5%]">
                                <div className="overflow-hidden rounded-2xl shadow-2xl bg-white aspect-square relative">
                                    <Image
                                        src="/images/about/about-hero.jpg"
                                        alt={content.hero.image_alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Vision Section */}
            <section className="bg-black py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-white leading-tight mb-12">
                            {content.vision.heading}
                        </h2>

                        <div className="w-full text-center">
                            <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-6">
                                {lang === 'el' ? (
                                    <>Να γίνουμε ο <strong>κορυφαίος συνεργάτης μουσικής</strong> για <strong>brands & εκδηλώσεις με χαρακτήρα</strong>, που θέλουν <strong>ταυτότητα, ατμόσφαιρα</strong> και <strong>ουσιαστική σύνδεση</strong> με τους επισκέπτες τους.</>
                                ) : (
                                    <span dangerouslySetInnerHTML={{ __html: parseMarkdownBold(content.vision.text) }} />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Philosophy Section (Animated Gradient) */}
            <section className="animated-gradient py-24 px-6 relative z-10" style={{
                backgroundImage: 'linear-gradient(135deg, #f5d4c1, #e8c3b0, #d4c4b0, #c0c0c0, #d3d3d3, #f0d5d0, #e8c3b0, #f5d4c1)'
            }}>
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-[2rem] md:text-[2.8rem] lg:text-[3.45rem] font-bold text-black leading-tight mb-12">
                        {content.philosophy.heading}
                    </h2>
                    <p className="text-xl md:text-2xl lg:text-3xl text-black leading-relaxed max-w-4xl mx-auto">
                        <span dangerouslySetInnerHTML={{ __html: parseMarkdownBold(content.philosophy.text) }} />
                    </p>
                </div>
            </section>

            {/* 4. Journey Section (White) */}
            <section className="bg-white py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-5xl md:text-[3.45rem] font-bold text-black mb-4">
                            {content.journey.heading}
                        </h2>
                        <p className="text-xl text-black/60 font-medium">
                            {content.journey.subtitle}
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-12">
                        {/* Left Column: Timeline */}
                        <div className="relative">
                            {/* Vertical line behind markers */}
                            <div className="absolute left-[47px] top-0 bottom-0 w-[2px] bg-black/20" />

                            <div className="space-y-12">
                                {content.journey.timeline.map((item: any, idx: number) => (
                                    <div key={idx} className="relative flex items-start">
                                        {/* Year Circle */}
                                        <div className="w-24 h-24 rounded-full bg-black text-white font-bold text-xl flex items-center justify-center shrink-0 shadow-lg z-10">
                                            {item.year}
                                        </div>

                                        {/* Text */}
                                        <div className="ml-6 pt-4">
                                            <p className="text-xl text-black/60 leading-relaxed">
                                                <span dangerouslySetInnerHTML={{ __html: parseMarkdownBold(item.text) }} />
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="hidden lg:block">
                            <img
                                src={content.journey.image}
                                alt="Journey"
                                className="w-full rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Team Section */}
            <section className="py-24" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} aria-labelledby="team-heading">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 id="team-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 text-black leading-heading">
                        {lang === 'el' ? 'Γνωρίστε την ομάδα' : 'Meet the team'}
                    </h2>
                    <p className="text-xl text-black/60 font-medium text-center mb-12">
                        {lang === 'el' ? 'Παθιασμένοι με τη μουσική, προσανατολισμένοι στη φιλοξενία' : 'Music obsessed, hospitality minded'}
                    </p>

                    {/* George Fameliaris - FIRST */}
                    <div className="mb-8" role="list">
                        <article role="listitem" className="p-8 rounded-[3rem]" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                                {/* Left: Text Content */}
                                <div className="lg:order-1">
                                    <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                        George Fameliaris
                                    </h3>
                                    <p className="text-xl font-semibold text-black/70 mb-10">
                                        {lang === 'el' ? 'Συνιδρυτής, Επικεφαλής μουσικής επιμέλειας & AV expert' : 'Co-founder, Chief music curator & AV expert'}
                                    </p>

                                    <div>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                                            {lang === 'el'
                                                ? "Το πάθος του Γιώργου για τη μουσική και τη συλλογή δίσκων εμπλουτίστηκε περαιτέρω μέσα από τις σπουδές του, με ένα Πτυχίο (BA) στα Μέσα Μαζικής Ενημέρωσης & Επικοινωνίας και ένα Μεταπτυχιακό (MA) στη Δημοφιλή Μουσική στον Κινηματογράφο."
                                                : "G's lifelong passion for music and record collecting was further shaped by a BA in Media & Communications and an MA in Popular Music in Film."
                                            }
                                        </p>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: lang === 'el'
                                            ? 'Σύντομα καθιερώθηκε ως τακτικός guest DJ στην αθηναϊκή σκηνή, αναλαμβάνοντας ιδιωτικά πάρτι και residencies σε εμβληματικούς χώρους όπως το <strong>Balux</strong>, το <strong>Sunset Antiparos</strong> και το <strong>Burger Disco</strong>. Παράλληλα, έχει μοιραστεί τα decks με κορυφαίες προσωπικότητες του χώρου, όπως η <strong>Colleen "Cosmo" Murphy</strong>, ο <strong>Danny Krivit</strong> και ο <strong>Gerd Janson</strong>.'
                                            : 'He soon became a regular guest DJ on the Athens scene, holding private parties and long-term residencies at venues such as <strong>Balux</strong>, <strong>Sunset Antiparos</strong>, and <strong>Burger Disco</strong>, while sharing the decks with key DJ figures like <strong>Colleen "Cosmo" Murphy</strong>, <strong>Danny Krivit</strong>, and <strong>Gerd Janson</strong>.'
                                        }} />
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                            {lang === 'el'
                                                ? 'Στη SensEar, διαμορφώνει τη μουσική ταυτότητα κάθε χώρου με ακρίβεια, δημιουργώντας τον ρυθμό και την ατμόσφαιρα που ορίζουν τον χαρακτηριστικό ήχο του κάθε brand.'
                                                : "At SensEar, he shapes each venue's musical identity with precision, creating rhythm and atmosphere that define the brand's signature sound."
                                            }
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Image */}
                                <div className="lg:order-2 hidden lg:block">
                                    <Image
                                        src="/images/about/team-george-fameliaris.jpg"
                                        alt={lang === 'el' ? 'Γιώργος Φαμελιάρης - Συνιδρυτής και Επικεφαλής Μουσικής Επιμέλειας SensEar' : 'George Fameliaris - SensEar Co-Founder and Chief Music Curator'}
                                        width={600}
                                        height={600}
                                        className="w-full h-auto rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* John E. Farazoumis - SECOND */}
                    <div className="mb-8" role="list">
                        <article role="listitem" className="p-8 rounded-[3rem]" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
                                {/* Left: Image */}
                                <div className="lg:order-1 hidden lg:block">
                                    <Image
                                        src="/images/about/team-john-farazoumis.png"
                                        alt={lang === 'el' ? 'John E. Farazoumis - Συνιδρυτής και Διευθυντής Brand Strategy SensEar' : 'John E. Farazoumis - SensEar Co-Founder and Brand Strategy Director'}
                                        width={600}
                                        height={600}
                                        className="w-full h-auto rounded-2xl shadow-lg"
                                    />
                                </div>

                                {/* Right: Text Content */}
                                <div className="lg:order-2">
                                    <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                        John E. Farazoumis
                                    </h3>
                                    <p className="text-xl font-semibold text-black/70 mb-10">
                                        {lang === 'el' ? 'Συνιδρυτής, Στρατηγική & Επικοινωνία' : 'Co-founder, Brand strategy, Client service'}
                                    </p>

                                    <div>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                                            {lang === 'el'
                                                ? 'Από τα πρώτα DJ sets μέχρι τις σπουδές του στην Ηχοληψία και τώρα στη Διοίκηση Φιλοξενίας, ο ρόλος της μουσικής υπήρξε πάντα καθοριστικός στη ζωή του.'
                                                : 'From his early DJ sets to his studies in Hospitality Management, JEF has always been guided by music\'s magnetic pull.'
                                            }
                                        </p>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4" dangerouslySetInnerHTML={{ __html: lang === 'el'
                                                ? 'Είναι συνιδρυτής μιας επιτυχημένης digital agency, με 25ετή εμπειρία στις <strong>Διαδικτυακές Υπηρεσίες</strong>, τις <strong>Πωλήσεις/Marketing</strong> και την <strong>Εξυπηρέτηση Πελατών</strong>. Είναι κάτοχος πτυχίου στη <strong>Διοίκηση Φιλοξενίας</strong> και στον <strong>Σχεδιασμό Εμπειριών & Υπηρεσιών</strong> (Hospitality Management & Experience Design) από το Πανεπιστήμιο Εφαρμοσμένων Επιστημών Haaga-Helia.'
                                                : 'He is a co-founder of a successful digital agency, with 25 years of experience in <strong>Web Services</strong>, <strong>Sales/Marketing</strong> & <strong>Customer Care</strong> and a degree in <strong>Hospitality Management</strong> and <strong>Experience Design</strong> from the Haaga-Helia University of Applied Science.'
                                            }}>
                                        </p>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                            {lang === 'el'
                                                ? 'Στη SensEar, χαράσσει τη στρατηγική κατεύθυνση του brand και γεφυρώνει το δημιουργικό όραμα με την εμπειρία πελάτη.'
                                                : 'At SensEar, he shapes the brand\'s strategic direction & connects creative vision with client experience.'
                                            }
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Katerina Karali - THIRD */}
                    <div className="mb-8" role="list">
                        <article role="listitem" className="p-8 rounded-[3rem]" style={{ backgroundImage: "url('/images/backgrounds/background-texture-warm-silver.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-center">
                                {/* Left: Text Content */}
                                <div className="lg:order-1">
                                    <h3 className="text-[2.7rem] md:text-[48px] font-bold text-black leading-tight mb-2">
                                        Katerina Karali
                                    </h3>
                                    <p className="text-xl font-semibold text-black/70 mb-10">
                                        {lang === 'el' ? 'Συνεργάτιδα, DJ & Μουσική Επιμελήτρια' : 'Contributing associate, DJ, Music curator'}
                                    </p>

                                    <div>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                                            {lang === 'el'
                                                ? 'Συνδυάζει τον οπτικό σχεδιασμό με την ηχητική αφήγηση, με εκλεπτυσμένη καλλιτεχνική ματιά.'
                                                : 'Kat combines visual design & sound narrative with a refined artistic sensibility.'
                                            }
                                        </p>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed mb-4">
                                            {lang === 'el'
                                                ? 'Έμπειρη multimedia art director, επιμελείται ηχητικά τοπία για ταινίες, εκθέσεις και ιδιωτικές εκδηλώσεις.'
                                                : 'A veteran multimedia art director, she helps curate soundscapes for films, exhibitions & private events.'
                                            }
                                        </p>
                                        <p className="text-lg md:text-xl text-black/60 leading-relaxed">
                                            {lang === 'el'
                                                ? 'Γνωστή για το ένστικτο και την αγάπη της για σπάνια grooves, προσθέτει βάθος, υφή και απρόσμενο χαρακτήρα στη SensEar.'
                                                : 'Known for her instinctive selections & taste for rare grooves, she brings depth, texture and a touch of the unexpected to SensEar.'
                                            }
                                        </p>
                                    </div>
                                </div>

                                {/* Right: Image */}
                                <div className="lg:order-2 hidden lg:block">
                                    <Image
                                        src="/images/about/team-katerina-karali.jpg"
                                        alt={lang === 'el' ? 'Κατερίνα Καραλή - Art Director και Music Curator SensEar' : 'Katerina Karali - SensEar Art Director and Music Curator'}
                                        width={600}
                                        height={600}
                                        className="w-full h-auto rounded-2xl shadow-lg"
                                    />
                                </div>
                            </div>
                        </article>
                    </div>

                    <p className="text-center mt-32 text-2xl md:text-3xl lg:text-4xl max-w-5xl mx-auto text-black leading-relaxed">
                        {lang === 'el'
                            ? <>Μαζί, αποτελούμε τη <strong>SensEar</strong>. Μια ομάδα αφοσιωμένη στο να αναβαθμίζει χώρους μέσα από ουσιαστική, αξέχαστη μουσική.</>
                            : <>Together, we form <strong>SensEar</strong>, a team committed to uplifting spaces through compelling, memorable music.</>
                        }
                    </p>

                    <div className="text-center mt-12">
                        <p className="text-lg max-w-3xl mx-auto text-black/80 mb-8">
                            {lang === 'el' ? 'Δείτε πώς συνεργαζόμαστε με πελάτες ή επικοινωνήστε μαζί μας για το project σας.' : 'See how we work with clients or contact us to discuss your project.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <AnimatedButton href="case-studies" lang={lang}>
                                {lang === 'el' ? 'Διαβάστε Παραδείγματα' : 'Read case studies'}
                            </AnimatedButton>
                            <AnimatedButton href="contact" lang={lang}>
                                {lang === 'el' ? 'Επικοινωνήστε μαζί μας' : 'Get in touch'}
                            </AnimatedButton>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Differentiators Section */}
            <section className="bg-[#faebe3] text-black py-24" aria-labelledby="differentiators-heading">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 id="differentiators-heading" className="text-[2.7rem] md:text-[3.45rem] font-bold text-center mb-4 leading-heading">
                        {lang === 'el' ? 'Τι μας ξεχωρίζει' : 'What sets us apart'}
                    </h2>
                    <p className="text-xl text-black/60 font-medium text-center mb-12">
                        {lang === 'el' ? 'Τέσσερις αρχές που καθοδηγούν ό,τι κάνουμε' : 'Four principles that guide everything we do'}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Image */}
                        <div className="hidden lg:block">
                            <img
                                src="/images/about/about-unique-approach.jpg"
                                alt={lang === 'el' ? 'Η μοναδική προσέγγιση της SensEar' : 'SensEar unique approach'}
                                className="w-full h-auto rounded-2xl shadow-lg"
                            />
                        </div>

                        {/* Right: Content */}
                        <div>
                            <div className="grid md:grid-cols-1 gap-10" role="list">
                                {/* Branding Music */}
                                <article role="listitem">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                                            <Lightbulb className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-3 text-black">
                                                {lang === 'el' ? 'Μουσική ως branding' : 'Branding music'}
                                            </h3>
                                            <p className="text-black/70">
                                                {lang === 'el'
                                                    ? 'Μεταφράζουμε το όραμά σας σε μουσική που ακούγεται φυσική και απόλυτα ταιριαστή στο brand.'
                                                    : 'We translate your vision into music that feels natural and completely on-brand.'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                {/* Covering All Sectors */}
                                <article role="listitem">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                                            <Building2 className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-3 text-black">
                                                {lang === 'el' ? 'Κάλυψη όλων των κλάδων' : 'Covering all sectors'}
                                            </h3>
                                            <p className="text-black/70">
                                                {lang === 'el'
                                                    ? 'Μουσική σχεδιασμένη για να ολοκληρώνει το ταξίδι του επισκέπτη σε κάθε χώρο που δίνει αξία στην ατμόσφαιρα.'
                                                    : 'Music designed to complete guest journeys in all spaces that value atmosphere.'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                {/* Personalizing Services */}
                                <article role="listitem">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                                            <SlidersHorizontal className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-3 text-black">
                                                {lang === 'el' ? 'Προσαρμοσμένες υπηρεσίες' : 'Personalizing services'}
                                            </h3>
                                            <p className="text-black/70">
                                                {lang === 'el'
                                                    ? 'Η προσέγγισή μας προσαρμόζεται στο στυλ, την ομάδα και τις ανάγκες σας, ακόμη και σε πολλαπλές τοποθεσίες.'
                                                    : 'Our approach adapts to your style, team & needs across multiple locations.'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </article>

                                {/* Using Music's Unique Powers */}
                                <article role="listitem">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-black/10 rounded-full p-3 flex-shrink-0" aria-hidden="true">
                                            <Heart className="w-6 h-6 text-black" />
                                        </div>
                                        <div>
                                            <h3 className="text-2xl font-bold mb-3 text-black">
                                                {lang === 'el' ? 'Η δύναμη της μουσικής' : 'Using music\'s unique powers'}
                                            </h3>
                                            <p className="text-black/70">
                                                {lang === 'el'
                                                    ? 'Κατανοούμε πώς η μουσική αλλάζει τη διάθεση, διαμορφώνει χώρους και συνδέει ανθρώπους.'
                                                    : 'We understand how music shifts moods, shapes spaces and connects people.'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Final CTA Section (Animated Gradient Background Card) */}
            <FinalCTA
                heading={content.final_cta.heading}
                text={content.final_cta.text}
                buttons={content.final_cta.buttons}
                lang={lang}
            />
        </div>
    );
}
