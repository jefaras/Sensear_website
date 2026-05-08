import BlogPostPage, { BLOG_SLUGS, generateMetadata as generateBlogPostMetadata } from '@/app/[lang]/blog/[slug]/page'

export const dynamicParams = false

export async function generateStaticParams() {
    return BLOG_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    return generateBlogPostMetadata({ params: Promise.resolve({ lang: 'el', slug }) })
}

export default async function GreekBlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    return <BlogPostPage params={Promise.resolve({ lang: 'el', slug })} />
}
