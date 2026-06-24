"use client";

declare global {
    interface Window {
        grecaptcha?: {
            ready: (callback: () => void) => void;
            execute: (siteKey: string, options: { action: string }) => Promise<string>;
        };
        __SENSEAR_RECAPTCHA_DEBUG__?: {
            siteKeyConfigured: boolean;
            scriptLoaded: boolean;
            grecaptchaAvailable: boolean;
            lastAction?: string;
            lastError?: string;
        };
    }
}

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

let recaptchaScriptPromise: Promise<void> | null = null;

function updateRecaptchaDebug(values: Partial<NonNullable<Window["__SENSEAR_RECAPTCHA_DEBUG__"]>>) {
    if (typeof window === "undefined") {
        return;
    }

    window.__SENSEAR_RECAPTCHA_DEBUG__ = {
        siteKeyConfigured: Boolean(recaptchaSiteKey),
        scriptLoaded: Boolean(document.getElementById("google-recaptcha-v3")),
        grecaptchaAvailable: Boolean(window.grecaptcha?.execute),
        ...window.__SENSEAR_RECAPTCHA_DEBUG__,
        ...values,
    };
}

function waitForGrecaptcha() {
    return new Promise<void>((resolve, reject) => {
        let attempts = 0;
        const maxAttempts = 80;

        const check = () => {
            if (window.grecaptcha?.execute) {
                updateRecaptchaDebug({ grecaptchaAvailable: true });
                resolve();
                return;
            }

            attempts += 1;
            if (attempts >= maxAttempts) {
                reject(new Error("reCAPTCHA script loaded, but grecaptcha did not become available."));
                return;
            }

            window.setTimeout(check, 100);
        };

        check();
    });
}

function loadRecaptchaScript() {
    if (!recaptchaSiteKey) {
        return Promise.reject(new Error("reCAPTCHA site key is not configured."));
    }

    if (typeof window === "undefined") {
        return Promise.reject(new Error("reCAPTCHA can only run in the browser."));
    }

    if (window.grecaptcha?.execute) {
        updateRecaptchaDebug({ scriptLoaded: true, grecaptchaAvailable: true });
        return Promise.resolve();
    }

    if (recaptchaScriptPromise) {
        return recaptchaScriptPromise;
    }

    recaptchaScriptPromise = new Promise((resolve, reject) => {
        const existingScript = document.getElementById("google-recaptcha-v3") as HTMLScriptElement | null;

        const resolveWhenReady = () => {
            updateRecaptchaDebug({ scriptLoaded: true });
            waitForGrecaptcha().then(resolve).catch(reject);
        };

        if (existingScript) {
            if (window.grecaptcha?.execute) {
                resolve();
                return;
            }

            existingScript.addEventListener("load", resolveWhenReady, { once: true });
            existingScript.addEventListener("error", () => reject(new Error("Failed to load reCAPTCHA.")), { once: true });
            window.setTimeout(resolveWhenReady, 0);
            return;
        }

        const script = document.createElement("script");
        script.id = "google-recaptcha-v3";
        script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(recaptchaSiteKey)}`;
        script.async = true;
        script.defer = true;
        script.onload = resolveWhenReady;
        script.onerror = () => reject(new Error("Failed to load reCAPTCHA."));
        document.head.appendChild(script);
        updateRecaptchaDebug({ scriptLoaded: true });
    });

    return recaptchaScriptPromise;
}

export async function executeRecaptcha(action: "contact" | "newsletter") {
    updateRecaptchaDebug({ lastAction: action, lastError: undefined });

    try {
        await loadRecaptchaScript();

        return await new Promise<string>((resolve, reject) => {
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
    } catch (error) {
        const message = error instanceof Error ? error.message : "reCAPTCHA is unavailable.";
        updateRecaptchaDebug({ lastError: message, grecaptchaAvailable: Boolean(window.grecaptcha?.execute) });
        throw new Error(message);
    }
}
