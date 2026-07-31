import Home, { generateMetadata as generateHomeMetadata } from '@/app/[lang]/page'

// This page sits in the root segment alongside app/layout.tsx, and Next applies
// a layout's title.template only to child segments. /el/ is a child and picks up
// "%s | SensEar"; this one would not, so it appends the suffix itself.
export async function generateMetadata() {
    const meta = await generateHomeMetadata({ params: Promise.resolve({ lang: 'en' }) })
    return { ...meta, title: `${meta.title} | SensEar` }
}

export default function EnglishHomePage() {
    return <Home params={Promise.resolve({ lang: 'en' })} />
}
