"use client";

declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
    }
}

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

let recaptchaScriptPromise: Promise<void> | null = null;

function loadRecaptchaScript() {
    if (!recaptchaSiteKey) {
        return Promise.reject(new Error("reCAPTCHA site key is not configured."));
    }

    if (typeof window === "undefined") {
        return Promise.reject(new Error("reCAPTCHA can only run in the browser."));
    }

    if (window.grecaptcha?.execute) {
        return Promise.resolve();
    }

    if (recaptchaScriptPromise) {
        return recaptchaScriptPromise;
    }

    recaptchaScriptPromise = new Promise((resolve, reject) => {
        const existingScript = document.getElementById("google-recaptcha-v3") as HTMLScriptElement | null;

        if (existingScript) {
            existingScript.addEventListener("load", () => resolve(), { once: true });
            existingScript.addEventListener("error", () => reject(new Error("Failed to load reCAPTCHA.")), { once: true });
            return;
        }

        const script = document.createElement("script");
        script.id = "google-recaptcha-v3";
        script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(recaptchaSiteKey)}`;
        script.async = true;
        script.defer = true;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error("Failed to load reCAPTCHA."));
        document.head.appendChild(script);
    });

    return recaptchaScriptPromise;
}

export async function executeRecaptcha(action: "contact" | "newsletter") {
    await loadRecaptchaScript();

    return new Promise<string>((resolve, reject) => {
        if (!window.grecaptcha?.execute) {
            reject(new Error("reCAPTCHA is unavailable."));
            return;
        }

        window.grecaptcha.ready(() => {
            window.grecaptcha
                ?.execute(recaptchaSiteKey, { action })
                .then(resolve)
                .catch(() => reject(new Error("reCAPTCHA verification could not start.")));
        });
    });
}
