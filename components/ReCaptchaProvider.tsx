"use client";

import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        // In development without key, just render children without protection
        return <>{children}</>;
    }

    return (
        <GoogleReCaptchaProvider reCaptchaKey={siteKey}>
            {children}
        </GoogleReCaptchaProvider>
    );
}
