import type { Metadata } from 'next'

import BlogPage, { generateMetadata as generateBlogMetadata } from '@/app/[lang]/blog/page'

export async function generateMetadata(): Promise<Metadata> {
    return generateBlogMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function GreekBlogPage() {
    return <BlogPage params={Promise.resolve({ lang: 'en' })} />
}
