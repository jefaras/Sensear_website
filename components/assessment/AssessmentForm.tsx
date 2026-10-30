"use client";

import { useCallback, useState } from "react";
import { Check, Send } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { executeRecaptcha } from "@/lib/recaptcha-client";

type FormValues = {
    name: string;
    surname: string;
    business_name: string;
    email: string;
    phone: string;
    venue_type: string;
    message: string;
    privacy: boolean;
};

const initialValues: FormValues = {
    name: "",
    surname: "",
    business_name: "",
    email: "",
    phone: "",
    venue_type: "",
    message: "",
    privacy: false,
};

const angleLabels: Record<string, string> = {
    music: "σωστή μουσική",
    shift: "συνέπεια μεταξύ βαρδιών",
    daypart: "ροή μέσα στην ημέρα",
};

const fieldClass = "w-full rounded-[12px] border border-[#faf6f1]/14 bg-[#faf6f1]/[0.045] px-4 py-3.5 text-[15px] text-[#faf6f1] outline-none transition-colors placeholder:text-[#faf6f1]/28 hover:border-[#faf6f1]/24 focus:border-[#f0bd95]/70 focus:bg-[#f0bd95]/[0.045]";
const labelClass = "mb-2 block text-[13px] font-bold leading-none text-[#faf6f1]/72";

export function AssessmentForm() {
    const searchParams = useSearchParams();
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);

    const campaignAngle = angleLabels[searchParams.get("angle") || "music"] ? searchParams.get("angle") || "music" : "music";

    function updateValue(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const target = event.target;
        const value = target instanceof HTMLInputElement && target.type === "checkbox" ? target.checked : target.value;
        setValues((current) => ({ ...current, [target.name]: value }));
        setErrors((current) => {
            if (!current[target.name]) return current;
            const next = { ...current };
            delete next[target.name];
            return next;
        });
    }

    const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const nextErrors: Record<string, string> = {};
        const phoneDigits = values.phone.replace(/\D/g, "");

        if (values.name.trim().length < 2) nextErrors.name = "Συμπληρώστε τουλάχιστον 2 χαρακτήρες.";
        if (values.surname.trim().length < 2) nextErrors.surname = "Συμπληρώστε τουλάχιστον 2 χαρακτήρες.";
        if (!values.business_name.trim()) nextErrors.business_name = "Συμπληρώστε την επιχείρηση ή τον χώρο σας.";
        if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Συμπληρώστε ένα έγκυρο email.";
        if (phoneDigits.length !== 10) nextErrors.phone = "Συμπληρώστε 10 ψηφία μετά το +30.";
        if (!values.venue_type) nextErrors.venue_type = "Επιλέξτε τον τύπο του χώρου.";
        if (values.message.trim().length < 10) nextErrors.message = "Πείτε μας λίγα ακόμη, με τουλάχιστον 10 χαρακτήρες.";
        if (!values.privacy) nextErrors.privacy = "Χρειάζεται να αποδεχθείτε την πολιτική απορρήτου.";

        if (Object.keys(nextErrors).length) {
            setErrors(nextErrors);
            return;
        }

        setPending(true);
        setErrors({});

        try {
            const token = await executeRecaptcha("contact");
            const payload = new globalThis.FormData(form);
            const attribution = ["utm_source", "utm_medium", "utm_campaign", "utm_content"]
                .map((key) => [key, searchParams.get(key)] as const)
                .filter(([, value]) => Boolean(value))
                .map(([key, value]) => `${key}: ${value}`)
                .join(" | ");

            payload.set("g-recaptcha-response", token);
            payload.set("country_code", "+30");
            payload.set("service_interest", `Δωρεάν αξιολόγηση: ${angleLabels[campaignAngle]}`);
            payload.set(
                "message",
                `${values.message.trim()}\n\nΠηγή καμπάνιας: ${angleLabels[campaignAngle]}${attribution ? ` | ${attribution}` : ""}`,
            );

            const response = await fetch(form.action, {
                method: "POST",
                headers: { Accept: "application/json" },
                body: payload,
            });
            const result = await response.json().catch(() => null) as null | {
                success?: boolean;
                message?: string;
                errors?: Record<string, string[]>;
            };

            if (!response.ok || !result?.success) {
                setErrors({
                    _form: result?.errors?._form?.[0] || result?.message || "Δεν μπορέσαμε να στείλουμε το αίτημα. Δοκιμάστε ξανά.",
                });
                return;
            }

            const dataLayerWindow = window as Window & { dataLayer?: Array<Record<string, unknown>> };
            dataLayerWindow.dataLayer = dataLayerWindow.dataLayer || [];
            dataLayerWindow.dataLayer.push({
                event: "sensear_free_assessment_submit",
                campaign_angle: campaignAngle,
            });
            setValues(initialValues);
            setSuccess(true);
        } catch (error) {
            setErrors({
                _form: error instanceof Error ? error.message : "Δεν μπορέσαμε να στείλουμε το αίτημα. Δοκιμάστε ξανά.",
            });
        } finally {
            setPending(false);
        }
    }, [campaignAngle, searchParams, values]);

    if (success) {
        return (
            <div className="flex min-h-[460px] flex-col items-start justify-center rounded-[14px] border border-[#f0bd95]/30 bg-[#f0bd95]/[0.055] p-7 sm:p-10" role="status">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#f0bd95]/50 text-[#f0bd95]">
                    <Check className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-7 font-didot text-4xl leading-tight text-[#faf6f1]">Λάβαμε το αίτημά σας.</h3>
                <p className="mt-4 max-w-md text-[16px] leading-[1.7] text-[#faf6f1]/64">
                    Θα επικοινωνήσουμε μαζί σας εντός 24 ωρών για να καταλάβουμε τον χώρο, το κοινό και τον στόχο σας.
                </p>
                <button
                    type="button"
                    onClick={() => setSuccess(false)}
                    className="mt-7 text-[13px] font-bold text-[#f0bd95] underline decoration-[#f0bd95]/35 underline-offset-4 hover:decoration-[#f0bd95]"
                >
                    Νέο αίτημα
                </button>
            </div>
        );
    }

    return (
        <form action="/contact.php" method="POST" onSubmit={handleSubmit} className="space-y-5" noValidate>
            {errors._form && (
                <div className="rounded-[12px] border border-red-300/30 bg-red-400/10 px-4 py-3 text-sm leading-relaxed text-red-200" role="alert">
                    {errors._form}
                </div>
            )}

            <input type="hidden" name="g-recaptcha-response" value="" />
            <input type="hidden" name="country_code" value="+30" />
            <input type="hidden" name="service_interest" value={`Δωρεάν αξιολόγηση: ${angleLabels[campaignAngle]}`} />

            <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Όνομα" error={errors.name} id="assessment-name">
                    <input id="assessment-name" name="name" autoComplete="given-name" value={values.name} onChange={updateValue} className={fieldClass} aria-invalid={Boolean(errors.name)} />
                </Field>
                <Field label="Επώνυμο" error={errors.surname} id="assessment-surname">
                    <input id="assessment-surname" name="surname" autoComplete="family-name" value={values.surname} onChange={updateValue} className={fieldClass} aria-invalid={Boolean(errors.surname)} />
                </Field>
            </div>

            <Field label="Επιχείρηση ή χώρος" error={errors.business_name} id="assessment-business">
                <input id="assessment-business" name="business_name" autoComplete="organization" value={values.business_name} onChange={updateValue} className={fieldClass} aria-invalid={Boolean(errors.business_name)} />
            </Field>

            <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Email" error={errors.email} id="assessment-email">
                    <input id="assessment-email" name="email" type="email" autoComplete="email" value={values.email} onChange={updateValue} className={fieldClass} aria-invalid={Boolean(errors.email)} />
                </Field>
                <Field label="Τηλέφωνο" error={errors.phone} id="assessment-phone">
                    <div className="flex rounded-[12px] border border-[#faf6f1]/14 bg-[#faf6f1]/[0.045] focus-within:border-[#f0bd95]/70">
                        <span className="flex items-center border-r border-[#faf6f1]/14 px-3 text-[14px] font-bold text-[#faf6f1]/54">+30</span>
                        <input id="assessment-phone" name="phone" type="tel" inputMode="numeric" autoComplete="tel-national" value={values.phone} onChange={updateValue} className="w-full bg-transparent px-4 py-3.5 text-[15px] text-[#faf6f1] outline-none" aria-invalid={Boolean(errors.phone)} />
                    </div>
                </Field>
            </div>

            <Field label="Τύπος χώρου" error={errors.venue_type} id="assessment-venue-type">
                <select id="assessment-venue-type" name="venue_type" value={values.venue_type} onChange={updateValue} className={`${fieldClass} cursor-pointer`} aria-invalid={Boolean(errors.venue_type)}>
                    <option value="" className="bg-[#0b0a0a]">Επιλέξτε</option>
                    <option value="Εστιατόριο ή bar" className="bg-[#0b0a0a]">Εστιατόριο ή bar</option>
                    <option value="Ξενοδοχείο ή resort" className="bg-[#0b0a0a]">Ξενοδοχείο ή resort</option>
                    <option value="Κατάστημα λιανικής" className="bg-[#0b0a0a]">Κατάστημα λιανικής</option>
                    <option value="Χώρος ευεξίας ή γυμναστήριο" className="bg-[#0b0a0a]">Χώρος ευεξίας ή γυμναστήριο</option>
                    <option value="Event ή brand" className="bg-[#0b0a0a]">Event ή brand</option>
                    <option value="Άλλο" className="bg-[#0b0a0a]">Άλλο</option>
                </select>
            </Field>

            <Field label="Τι θα θέλατε να βελτιώσει η μουσική στον χώρο σας;" error={errors.message} id="assessment-message">
                <textarea id="assessment-message" name="message" rows={4} value={values.message} onChange={updateValue} className={`${fieldClass} min-h-[120px] resize-y`} aria-invalid={Boolean(errors.message)} />
            </Field>

            <div>
                <label className="flex cursor-pointer items-start gap-3 text-[13px] leading-[1.55] text-[#faf6f1]/58">
                    <input name="privacy" type="checkbox" checked={values.privacy} onChange={updateValue} className="mt-1 h-4 w-4 shrink-0 accent-[#f0bd95]" />
                    <span>
                        Συμφωνώ να χρησιμοποιηθούν τα στοιχεία μου για την απάντηση στο αίτημά μου, σύμφωνα με την{" "}
                        <Link href="/el/privacy/" className="text-[#faf6f1]/78 underline decoration-[#faf6f1]/25 underline-offset-2 hover:decoration-[#faf6f1]/70">
                            Πολιτική Απορρήτου
                        </Link>.
                    </span>
                </label>
                {errors.privacy && <p className="mt-2 text-[12px] leading-relaxed text-red-300">{errors.privacy}</p>}
            </div>

            <button
                type="submit"
                disabled={pending}
                className="flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-[#f0bd95] px-6 py-4 text-[15px] font-extrabold tracking-[0.02em] text-[#0b0a0a] transition-colors hover:bg-[#faf6f1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0bd95] disabled:cursor-wait disabled:opacity-55"
            >
                {pending ? "ΑΠΟΣΤΟΛΗ..." : "ΖΗΤΗΣΤΕ ΔΩΡΕΑΝ ΑΞΙΟΛΟΓΗΣΗ"}
                {!pending && <Send className="h-4 w-4" aria-hidden="true" />}
            </button>

            <p className="text-center text-[11px] leading-relaxed text-[#faf6f1]/32">
                Προστατεύεται από reCAPTCHA. Ισχύουν η{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline decoration-[#faf6f1]/20 underline-offset-2 hover:text-[#faf6f1]/60">
                    Πολιτική Απορρήτου
                </a>{" "}
                και οι{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline decoration-[#faf6f1]/20 underline-offset-2 hover:text-[#faf6f1]/60">
                    Όροι
                </a>{" "}
                της Google.
            </p>
        </form>
    );
}

function Field({ label, error, id, children }: { label: string; error?: string; id: string; children: React.ReactNode }) {
    return (
        <div>
            <label htmlFor={id} className={labelClass}>{label}</label>
            {children}
            {error && <p className="mt-2 text-[12px] leading-relaxed text-red-300">{error}</p>}
        </div>
    );
}
