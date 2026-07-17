import type { Metadata } from 'next';

import BlogV3, { generateMetadata as generateBlogV3Metadata } from '@/app/[lang]/blog-v3/page';

export async function generateMetadata(): Promise<Metadata> {
    return generateBlogV3Metadata({ params: Promise.resolve({ lang: 'en' }) });
}

export default function EnglishBlogV3Page() {
    return <BlogV3 params={Promise.resolve({ lang: 'en' })} />;
}
