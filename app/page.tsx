import Home from '@/app/[lang]/page'

export default function GreekHomePage() {
    return <Home params={Promise.resolve({ lang: 'el' })} />
}
