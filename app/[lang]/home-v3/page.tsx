import { getDictionary } from '@/lib/dictionary';
import { type Locale } from '@/lib/i18n';
import { FooterV3, V3Root } from '@/components/v3';
import {
    About,
    Approach,
    ContactCTA,
    Hero,
    IndustriesGrid,
    Journal,
    Marquee,
    Services,
    Venues,
} from '@/components/home-v3';

export default async function HomeV3({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);
    const home = dict.home;

    return (
        <V3Root>
            <Hero lang={lang} hero={home.hero} />
            <Marquee items={home.marquee} />
            <About kicker={home.about.kicker} p1={home.intro.p1} p2={home.intro.p2} />
            <Services
                lang={lang}
                kicker={home.services.kicker}
                title={home.services.title}
                subtitle={home.services.subtitle}
                items={home.services.items}
                previewPlaceholder={home.services.preview_placeholder}
                previews={home.services.previews}
            />
            <IndustriesGrid
                lang={lang}
                kicker={home.expertise.kicker}
                title={home.expertise.title}
                subtitle={home.expertise.subtitle}
                items={home.expertise.items}
            />
            <Approach
                lang={lang}
                kicker={home.enhance.kicker}
                title={home.enhance.title}
                subtitle={home.enhance.subtitle}
                items={home.enhance.items}
                cta={home.enhance.cta}
            />
            <Venues lang={lang} kicker={home.clients.kicker} title={home.clients.title} />
            <Journal
                lang={lang}
                kicker={home.blog.kicker}
                headline={home.blog.headline}
                allArticles={home.blog.all_articles}
                articles={home.blog.articles}
            />
            <ContactCTA lang={lang} cta={home.contact_cta} />
            <FooterV3
                lang={lang}
                footer={home.footer}
                navigation={dict.navigation}
                services={home.services.items}
                industries={home.expertise.items}
                email={home.contact_cta.secondary_email_label}
                phoneLine={home.contact_cta.phone_line}
            />
        </V3Root>
    );
}
