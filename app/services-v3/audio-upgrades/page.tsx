import type { Metadata } from 'next';
import { ServiceDetailPage, buildServiceMetadata } from '@/components/service-detail-v3/service-page';

export async function generateMetadata(): Promise<Metadata> {
    return buildServiceMetadata('en', 'audio-upgrades');
}

export default function Page() {
    return <ServiceDetailPage lang="en" slug="audio-upgrades" />;
}
