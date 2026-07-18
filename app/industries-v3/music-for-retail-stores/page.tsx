import type { Metadata } from 'next';
import { IndustryDetailPage, buildIndustryMetadata } from '@/components/industry-detail-v3/industry-page';

export async function generateMetadata(): Promise<Metadata> {
    return buildIndustryMetadata('en', 'music-for-retail-stores');
}

export default function Page() {
    return <IndustryDetailPage lang="en" slug="music-for-retail-stores" />;
}
