import Home, { generateMetadata as generateHomeMetadata } from '@/app/[lang]/page'

export async function generateMetadata() {
    return generateHomeMetadata({ params: Promise.resolve({ lang: 'en' }) })
}

export default function EnglishHomePage() {
    return <Home params={Promise.resolve({ lang: 'en' })} />
}
