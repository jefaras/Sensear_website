import Image from "next/image";
import Link from "next/link";

export function AssessmentBrand() {
    return (
        <Link
            href="/el/"
            className="inline-flex items-start gap-3 text-[#faf6f1] no-underline"
            aria-label="SensEar Music, αρχική σελίδα"
        >
            <Image
                src="/images/brand/sensear-logo-white.png"
                alt="SensEar"
                width={44}
                height={44}
                className="h-10 w-10 shrink-0 object-contain sm:h-11 sm:w-11"
                priority
            />
            <span className="flex flex-col pt-0.5">
                <span className="font-syne text-[20px] font-bold leading-none tracking-[0.055em] sm:text-[22px]">
                    SENSEAR
                </span>
                <span className="mt-1.5 text-[10px] italic leading-[1.3] tracking-[0.01em] text-[#faf6f1]/60 sm:text-[11px]">
                    Μουσική επιμέλεια για χώρους, εκδηλώσεις και brands
                </span>
            </span>
        </Link>
    );
}
