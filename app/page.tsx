import Home from '@/app/[lang]/page'

export default function EnglishHomePage() {
    return <Home params={Promise.resolve({ lang: 'en' })} />
}
