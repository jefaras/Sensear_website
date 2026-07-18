import type { Metadata } from 'next';
import { type Locale } from '@/lib/i18n';
import { ServiceDetailPage, buildServiceMetadata } from '@/components/service-detail-v3/service-page';

const SLUG = 'sonic-identity';

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const { lang } = await params;
    return buildServiceMetadata(lang, SLUG);
}

export default async function Page({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return <ServiceDetailPage lang={lang} slug={SLUG} />;
}
