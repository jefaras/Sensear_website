"use client";

import { useState, useCallback } from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import TransparentSelect from "./TransparentSelect";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { executeRecaptcha } from "@/lib/recaptcha-client";

interface ContactFormLabels {
    name: string;
    surname: string;
    business_name: string;
    email: string;
    phone: string;
    message: string;
    submit: string;
    submitting: string;
    success: string;
    success_message: string;
    send_another: string;
    name_placeholder: string;
    surname_placeholder: string;
    business_name_placeholder: string;
    email_placeholder: string;
    phone_placeholder: string;
    message_placeholder: string;
}

interface ContactFormProps {
    labels: ContactFormLabels;
    variant?: "default" | "vinyl" | "dark";
}

interface FormData {
    name: string;
    surname: string;
    business_name: string;
    email: string;
    phone: string;
    country_code: string;
    message: string;
}

export function ContactForm({ labels, variant = "default" }: ContactFormProps) {
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const pathname = usePathname() || "";
    const [formData, setFormData] = useState<FormData>({
        name: "",
        surname: "",
        business_name: "",
        email: "",
        phone: "",
        country_code: "+30",
        message: "",
    });

    const isVinyl = variant === "vinyl";
    const isDark = variant === "dark";
    const isEagerLogoPage = /^\/(en|el)\/(contact|services|industries)$/.test(pathname);
    const isGreek = pathname.startsWith('/el');

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    }

    const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Capture the form element synchronously: `e.currentTarget` becomes null
        // after the first `await` below, once event dispatch has finished.
        const form = e.currentTarget;

        const nextErrors: Record<string, string[]> = {};
        const phoneDigits = formData.phone.replace(/\D/g, "");

        if (formData.name.trim().length < 2) {
            nextErrors.name = ["Name must be at least 2 characters"];
        }

        if (formData.surname.trim().length < 2) {
            nextErrors.surname = ["Surname must be at least 2 characters"];
        }

        if (phoneDigits.length !== 10) {
            nextErrors.phone = ["Phone number must contain exactly 10 digits"];
        }

        if (formData.message.trim().length < 10) {
            nextErrors.message = ["Message must be at least 10 characters"];
        }

        if (Object.keys(nextErrors).length > 0) {
            setPending(false);
            setErrors(nextErrors);
            return;
        }

        setErrors({});
        setPending(true);

        try {
            const recaptchaToken = await executeRecaptcha("contact");
            const payload = new globalThis.FormData(form);

            payload.set("g-recaptcha-response", recaptchaToken);
            payload.set("country_code", formData.country_code);

            const response = await fetch(form.action, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: payload,
            });

            const result = await response.json().catch(() => null) as null | {
                success?: boolean;
                message?: string;
                errors?: Record<string, string[]>;
            };

            if (!response.ok || !result?.success) {
                setErrors(result?.errors || {
                    _form: [result?.message || "Failed to send your message. Please try again."],
                });
                return;
            }

            setSuccess(true);
            setFormData({
                name: "",
                surname: "",
                business_name: "",
                email: "",
                phone: "",
                country_code: "+30",
                message: "",
            });
        } catch (error) {
            setErrors({
                _form: [error instanceof Error ? error.message : "Failed to send your message. Please try again."],
            });
        } finally {
            setPending(false);
        }
    }, [formData]);

    // Styles based on variant
    const inputClass = isDark
        ? "w-full px-4 py-3.5 rounded-[10px] bg-[rgba(250,246,241,0.05)] border border-[#faf6f1]/16 text-[#faf6f1] text-[15px] placeholder:text-[rgba(250,246,241,0.32)] focus:outline-none focus:border-[rgba(240,189,149,0.6)] focus:bg-[rgba(240,189,149,0.06)] transition-colors"
        : isVinyl
            ? "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
            : "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20";

    const selectClass = isDark
        ? "w-full px-4 py-3.5 rounded-[10px] bg-[rgba(250,246,241,0.05)] border border-[#faf6f1]/16 text-[#faf6f1] text-[15px] focus:outline-none focus:border-[rgba(240,189,149,0.6)] cursor-pointer transition-colors"
        : isVinyl
            ? "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent cursor-pointer"
            : "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20";

    const errorClass = isVinyl || isDark ? "text-red-400 text-sm mt-1" : "text-red-500 text-sm mt-1";
    const labelClass = isDark
        ? "block text-xs font-semibold tracking-[0.06em] mb-2 text-[#faf6f1]/66"
        : isVinyl ? "block text-sm font-medium mb-2 text-white/90" : "block text-sm font-medium mb-2";

    if (success) {
        if (isDark) {
            return (
                <div className="flex flex-col items-center justify-center rounded-[14px] border border-[#faf6f1]/10 bg-[rgba(15,13,12,0.72)] p-10 text-center backdrop-blur-[6px]">
                    <span className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[#f0bd95]/50" aria-hidden="true">
                        <CheckCircle className="h-8 w-8 text-[#f0bd95]" strokeWidth={1.7} />
                    </span>
                    <h3 className="mb-2 text-2xl font-extrabold text-[#faf6f1]">{labels.success}</h3>
                    <p className="max-w-[420px] text-center text-[#faf6f1]/62">{labels.success_message}</p>
                    <button
                        onClick={() => setSuccess(false)}
                        className="se-cta mt-6 inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[15px] font-bold no-underline"
                    >
                        {labels.send_another}
                    </button>
                </div>
            );
        }
        return (
            <div className={`flex flex-col items-center justify-center p-8 rounded-xl ${isVinyl ? 'bg-white/10 backdrop-blur-sm' : 'bg-black/5'}`}>
                <CheckCircle className={`w-16 h-16 mb-4 ${isVinyl ? 'text-green-400' : 'text-green-500'}`} />
                <h3 className={`text-2xl font-bold mb-2 ${isVinyl ? 'text-white' : ''}`}>{labels.success}</h3>
                <p className={`text-center ${isVinyl ? 'text-white/70' : 'text-black/60'}`}>{labels.success_message}</p>
                <button
                    onClick={() => setSuccess(false)}
                    className={`mt-6 px-6 py-2 rounded-full transition-colors ${isVinyl ? 'bg-white text-black hover:bg-white/90' : 'bg-black text-white hover:bg-black/80'}`}
                >
                    {labels.send_another}
                </button>
            </div>
        );
    }

    return (
        <form action="/contact.php" method="POST" encType="application/x-www-form-urlencoded" onSubmit={handleSubmit} className="space-y-5">
            {/* Form-level errors */}
            {errors._form && (
                <div className={`px-4 py-3 rounded-lg ${isVinyl || isDark ? 'bg-red-500/20 border border-red-500/30 text-red-300' : 'bg-red-50 border border-red-200 text-red-700'}`}>
                    {errors._form[0]}
                </div>
            )}

            <input type="hidden" name="g-recaptcha-response" value="" />
            <input type="hidden" name="country_code" value={formData.country_code} />

            <div className="grid md:grid-cols-2 gap-4 relative z-50">
                <div>
                    <label htmlFor="input-name" className={labelClass}>{labels.name}</label>
                    <input
                        id="input-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={labels.name_placeholder}
                        className={`${inputClass} ${errors.name ? '!border-red-500' : ''}`}
                    />
                    {errors.name && <p className={errorClass}>{errors.name[0]}</p>}
                </div>
                <div>
                    <label htmlFor="input-surname" className={labelClass}>{labels.surname}</label>
                    <input
                        id="input-surname"
                        name="surname"
                        type="text"
                        required
                        value={formData.surname}
                        onChange={handleChange}
                        placeholder={labels.surname_placeholder}
                        className={`${inputClass} ${errors.surname ? '!border-red-500' : ''}`}
                    />
                    {errors.surname && <p className={errorClass}>{errors.surname[0]}</p>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 relative z-40">
                <div>
                    <label htmlFor="input-business-name" className={labelClass}>{labels.business_name}</label>
                    <input
                        id="input-business-name"
                        name="business_name"
                        type="text"
                        value={formData.business_name}
                        onChange={handleChange}
                        placeholder={labels.business_name_placeholder}
                        className={`${inputClass} ${errors.business_name ? '!border-red-500' : ''}`}
                    />
                    {errors.business_name && <p className={errorClass}>{errors.business_name[0]}</p>}
                </div>
                <div>
                    <label htmlFor="input-email" className={labelClass}>{labels.email}</label>
                    <input
                        id="input-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={labels.email_placeholder}
                        className={`${inputClass} ${errors.email ? '!border-red-500' : ''}`}
                    />
                    {errors.email && <p className={errorClass}>{errors.email[0]}</p>}
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 relative z-30">
                <div>
                    <label htmlFor="input-phone" className={labelClass}>{labels.phone}</label>
                    <div className={`flex ${isDark ? 'rounded-[10px]' : 'rounded-lg'} ${isDark ? 'bg-[rgba(250,246,241,0.05)] border border-[#faf6f1]/16 focus-within:border-[rgba(240,189,149,0.6)]' : isVinyl ? 'bg-white/10 backdrop-blur-sm border border-white/20 focus-within:ring-2 focus-within:ring-white/30 focus-within:border-transparent' : 'bg-gray-50 border border-gray-200 focus-within:ring-2 focus-within:ring-black/20 focus-within:border-transparent'} ${errors.phone ? '!border-red-500' : ''}`}>
                        <label id="input-country-code-label" htmlFor="input-country-code" className="sr-only">{isGreek ? 'Κωδικός χώρας τηλεφώνου' : 'Phone country code'}</label>
                        <TransparentSelect
                            id="input-country-code"
                            name="country_code"
                            value={formData.country_code}
                            onChange={handleChange}
                            placeholder="Other"
                            hidePlaceholderOption
                            isVinyl={isVinyl}
                            isDark={isDark}
                            ariaLabelledBy="input-country-code-label"
                            triggerClassName={`px-3 py-3 w-[120px] ${isDark ? 'rounded-l-[10px]' : 'rounded-l-lg'} flex items-center justify-between focus:outline-none font-medium cursor-pointer transition-all ${isDark ? 'bg-transparent text-[#faf6f1] border-r border-[#faf6f1]/16 hover:bg-[rgba(250,246,241,0.04)]' : isVinyl ? 'bg-transparent text-white border-r border-white/20 hover:bg-white/5' : 'bg-gray-200/50 text-gray-700 border-r border-gray-200 hover:bg-gray-200'} text-left`}
                            options={[
                                { value: '+30', label: 'GR (+30)' },
                                { value: '+357', label: 'CY (+357)' },
                                { value: '+1', label: 'US/CA (+1)' },
                                { value: '+44', label: 'UK (+44)' },
                                { value: '+49', label: 'DE (+49)' },
                                { value: '+33', label: 'FR (+33)' },
                                { value: '+39', label: 'IT (+39)' },
                                { value: '+34', label: 'ES (+34)' },
                                { value: '', label: 'Other' },
                            ]}
                        />
                        <input
                            id="input-phone"
                            name="phone"
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={labels.phone_placeholder}
                            className={`w-full px-4 py-3 rounded-r-lg bg-transparent focus:outline-none ${isDark ? 'text-[#faf6f1] placeholder:text-[rgba(250,246,241,0.32)]' : isVinyl ? 'text-white placeholder:text-white/50' : ''}`}
                        />
                    </div>
                    {errors.phone && <p className={errorClass}>{errors.phone[0]}</p>}
                </div>
            </div>

            <div className="relative z-10">
                <label htmlFor="input-message" className={labelClass}>{labels.message}</label>
                <textarea
                    id="input-message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={labels.message_placeholder}
                    className={`${inputClass} h-[88px] md:h-auto md:min-h-[120px] ${errors.message ? '!border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className={errorClass}>{errors.message[0]}</p>}
            </div>

            <button
                type="submit"
                disabled={pending}
                className={`group relative w-full overflow-hidden rounded-full text-lg font-bold transition-all disabled:opacity-50 flex items-center justify-center ${isDark
                    ? 'se-cta py-5 no-underline'
                    : `py-7 border-2 ${isVinyl ? 'bg-white text-black hover:bg-white/90 border-transparent' : 'bg-black text-white hover:bg-black/90 border-transparent'}`
                    }`}
            >
                {pending ? (
                    labels.submitting
                ) : (
                    <>
                        <span className="relative inline-flex items-center mr-2 align-middle">
                            <Image
                                src="/images/brand/sensear-logo-color.png"
                                className="w-8 h-8 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300"
                                width={32}
                                height={32}
                                sizes="32px"
                                loading={isEagerLogoPage ? "eager" : "lazy"}
                                alt="SensEar logo"
                            />
                        </span>
                        <span className="transition-transform duration-300 group-hover:-translate-x-10 inline-block">
                            {labels.submit}
                        </span>
                        <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </>
                )}
            </button>

            <p className={`text-xs text-center mt-3 ${isVinyl ? 'text-white/30' : isDark ? 'text-[#faf6f1]/30' : 'text-black/40'}`}>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" aria-label={isGreek ? "Πολιτική Απορρήτου Google" : "Google Privacy Policy"} className={`underline ${isVinyl ? 'hover:text-white/50' : isDark ? 'hover:text-[#faf6f1]/60' : 'hover:text-black/60'}`}>{isGreek ? "Πολιτική Απορρήτου Google" : "Google Privacy Policy"}</a> and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" aria-label={isGreek ? "Όροι Χρήσης Google" : "Google Terms of Service"} className={`underline ${isVinyl ? 'hover:text-white/50' : isDark ? 'hover:text-[#faf6f1]/60' : 'hover:text-black/60'}`}>{isGreek ? "Όροι Χρήσης Google" : "Google Terms of Service"}</a> apply.
            </p>
        </form>
    )
}
