"use client";

import dynamic from "next/dynamic";

const ScrollToTop = dynamic(() => import("@/components/ScrollToTop").then((mod) => mod.ScrollToTop), {
    ssr: false,
});

export function ClientEnhancements() {
    return <ScrollToTop />;
}
