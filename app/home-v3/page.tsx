import HomeV3 from '@/app/[lang]/home-v3/page';

export default function GreekHomeV3Page() {
    return <HomeV3 params={Promise.resolve({ lang: 'el' })} />;
}
