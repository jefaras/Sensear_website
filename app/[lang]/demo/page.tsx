import { getDictionary } from "@/lib/dictionary";
import { Locale } from "@/lib/i18n";
import { DemoHomeClient } from "./DemoHomeClient";

export const revalidate = 3600;

export async function generateMetadata({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    return {
        title: `Demo Home | SensEar`,
        description: "Redesigned home page demo — for review only",
        robots: { index: false, follow: false },
    };
}

export default async function DemoPage({ params }: { params: Promise<{ lang: Locale }> }) {
    const { lang } = await params;
    const dict = await getDictionary(lang);

    return <DemoHomeClient lang={lang} dict={dict} />;
}
