import BlogPostV3Page, { BLOG_SLUGS, generateMetadata as generateBlogPostV3Metadata } from '@/app/[lang]/blog-v3/[slug]/page';

export const dynamicParams = false;

export async function generateStaticParams() {
    return BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return generateBlogPostV3Metadata({ params: Promise.resolve({ lang: 'en', slug }) });
}

export default async function EnglishBlogPostV3Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <BlogPostV3Page params={Promise.resolve({ lang: 'en', slug })} />;
}
