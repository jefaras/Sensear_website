import type { Metadata } from 'next';
import { type Locale } from '@/lib/i18n';
import { IndustryDetailPage, buildIndustryMetadata } from '@/components/industry-detail-v3/industry-page';

const SLUG = 'music-for-retail-stores';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    return buildIndustryMetadata(lang, SLUG);
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return <IndustryDetailPage lang={lang} slug={SLUG} />;
}
