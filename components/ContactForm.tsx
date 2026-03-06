"use client";

import { useState, useCallback } from "react";
import { submitContactForm } from "@/app/actions";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import TransparentSelect from "./TransparentSelect";

interface ContactFormLabels {
    name: string;
    surname: string;
    business_name: string;
    email: string;
    phone: string;
    venue: string;
    interest: string;
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
    venue_options: {
        placeholder: string;
        hotel: string;
        restaurant: string;
        bar: string;
        other: string;
    };
    interest_options: {
        placeholder: string;
        playlists: string;
        events: string;
        strategy: string;
        audio_upgrades: string;
    };
}

interface ContactFormProps {
    labels: ContactFormLabels;
    variant?: "default" | "vinyl";
}

interface FormData {
    name: string;
    surname: string;
    business_name: string;
    email: string;
    phone: string;
    country_code: string;
    venue_type: string;
    service_interest: string;
    message: string;
}

export function ContactForm({ labels, variant = "default" }: ContactFormProps) {
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [formData, setFormData] = useState<FormData>({
        name: "",
        surname: "",
        business_name: "",
        email: "",
        phone: "",
        country_code: "+30",
        venue_type: "",
        service_interest: "",
        message: "",
    });

    const isVinyl = variant === "vinyl";

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

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setPending(true);
        setErrors({});

        let recaptchaToken = "";
        if (executeRecaptcha) {
            try {
                recaptchaToken = await executeRecaptcha("contact_form");
            } catch {
                setErrors({ _form: ["Security verification failed. Please refresh the page."] });
                setPending(false);
                return;
            }
        }

        const submitData = new FormData();
        submitData.append("g-recaptcha-response", recaptchaToken);
        submitData.append("name", formData.name);
        submitData.append("surname", formData.surname);
        submitData.append("business_name", formData.business_name);
        submitData.append("email", formData.email);
        submitData.append("phone", formData.phone);
        submitData.append("country_code", formData.country_code);
        submitData.append("venue_type", formData.venue_type);
        submitData.append("service_interest", formData.service_interest);
        submitData.append("message", formData.message);

        const res = await submitContactForm(submitData);

        setPending(false);

        if (res?.errors) {
            setErrors(res.errors as Record<string, string[]>);
        } else if (res?.success) {
            setSuccess(true);
            setFormData({
                name: "",
                surname: "",
                business_name: "",
                email: "",
                phone: "",
                country_code: "+30",
                venue_type: "",
                service_interest: "",
                message: "",
            });
        }
    }, [executeRecaptcha, formData, labels]);

    // Styles based on variant
    const inputClass = isVinyl
        ? "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
        : "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20";

    const selectClass = isVinyl
        ? "w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent cursor-pointer"
        : "w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20";

    const errorClass = isVinyl ? "text-red-400 text-sm mt-1" : "text-red-500 text-sm mt-1";

    if (success) {
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
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Form-level errors */}
            {errors._form && (
                <div className={`px-4 py-3 rounded-lg ${isVinyl ? 'bg-red-500/20 border border-red-500/30 text-red-300' : 'bg-red-50 border border-red-200 text-red-700'}`}>
                    {errors._form[0]}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    {!isVinyl && <label className="block text-sm font-medium mb-2">{labels.name}</label>}
                    <input
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
                    {!isVinyl && <label className="block text-sm font-medium mb-2">{labels.surname}</label>}
                    <input
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

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    {!isVinyl && <label className="block text-sm font-medium mb-2">{labels.business_name}</label>}
                    <input
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
                    {!isVinyl && <label className="block text-sm font-medium mb-2">{labels.email}</label>}
                    <input
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

            <div>
                {!isVinyl && <label className="block text-sm font-medium mb-2">{labels.phone}</label>}
                <div className={`flex rounded-lg ${isVinyl ? 'border border-white/20' : 'border border-gray-200'} ${errors.phone ? '!border-red-500' : ''} focus-within:ring-2 ${isVinyl ? 'focus-within:ring-white/30' : 'focus-within:ring-black/20'} focus-within:border-transparent`}>
                    <TransparentSelect
                        name="country_code"
                        value={formData.country_code}
                        onChange={handleChange}
                        placeholder="Other"
                        hidePlaceholderOption
                        isVinyl={isVinyl}
                        triggerClassName={`px-3 py-3 w-[120px] rounded-l-lg flex items-center justify-between focus:outline-none font-medium cursor-pointer transition-all ${isVinyl ? 'bg-transparent text-white border-r border-white/20 hover:bg-white/5' : 'bg-gray-200/50 text-gray-700 border-r border-gray-200 hover:bg-gray-200'} text-left`}
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
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={labels.phone_placeholder}
                        className={`w-full px-4 py-3 rounded-r-lg bg-transparent focus:outline-none ${isVinyl ? 'text-white placeholder:text-white/50' : ''}`}
                    />
                </div>
                {errors.phone && <p className={errorClass}>{errors.phone[0]}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    {!isVinyl && <label className="block text-sm font-medium mb-2">{labels.venue}</label>}
                    <TransparentSelect
                        name="venue_type"
                        value={formData.venue_type}
                        onChange={handleChange}
                        placeholder={labels.venue_options.placeholder}
                        isVinyl={isVinyl}
                        error={!!errors.venue_type}
                        className="w-full"
                        options={[
                            { value: 'hotel', label: labels.venue_options.hotel },
                            { value: 'restaurant', label: labels.venue_options.restaurant },
                            { value: 'bar', label: labels.venue_options.bar },
                            { value: 'other', label: labels.venue_options.other },
                        ]}
                    />
                    {errors.venue_type && <p className={errorClass}>{errors.venue_type[0]}</p>}
                </div>
                <div>
                    {!isVinyl && <label className="block text-sm font-medium mb-2">{labels.interest}</label>}
                    <TransparentSelect
                        name="service_interest"
                        value={formData.service_interest}
                        onChange={handleChange}
                        placeholder={labels.interest_options.placeholder}
                        isVinyl={isVinyl}
                        error={!!errors.service_interest}
                        className="w-full"
                        options={[
                            { value: 'playlists', label: labels.interest_options.playlists },
                            { value: 'events', label: labels.interest_options.events },
                            { value: 'strategy', label: labels.interest_options.strategy },
                            { value: 'audio_upgrades', label: labels.interest_options.audio_upgrades },
                        ]}
                    />
                    {errors.service_interest && <p className={errorClass}>{errors.service_interest[0]}</p>}
                </div>
            </div>

            <div>
                {!isVinyl && <label className="block text-sm font-medium mb-2">{labels.message}</label>}
                <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={labels.message_placeholder}
                    className={`${inputClass} ${errors.message ? '!border-red-500' : ''}`}
                ></textarea>
                {errors.message && <p className={errorClass}>{errors.message[0]}</p>}
            </div>

            <button
                type="submit"
                disabled={pending}
                className={`group relative w-full font-bold text-lg py-7 rounded-full transition-all disabled:opacity-50 border-2 overflow-hidden flex items-center justify-center ${isVinyl
                    ? 'bg-white text-black hover:bg-white/90 border-transparent'
                    : 'bg-black text-white hover:bg-black/90 border-transparent'
                    }`}
            >
                {pending ? (
                    labels.submitting
                ) : (
                    <>
                        <span className="relative inline-flex items-center mr-2 align-middle">
                            <img
                                src={isVinyl ? "/images/brand/sensear-logo-color.png" : "/images/brand/sensear-logo-color.png"}
                                className="w-8 h-8 object-contain opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-0 transition-all duration-300"
                                alt=""
                            />
                        </span>
                        <span className="transition-transform duration-300 group-hover:-translate-x-10 inline-block">
                            {labels.submit}
                        </span>
                        <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </>
                )}
            </button>

            <p className={`text-xs text-center mt-3 ${isVinyl ? 'text-white/30' : 'text-black/40'}`}>
                This site is protected by reCAPTCHA and the Google{" "}
                <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className={`underline ${isVinyl ? 'hover:text-white/50' : 'hover:text-black/60'}`}>Privacy Policy</a> and{" "}
                <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className={`underline ${isVinyl ? 'hover:text-white/50' : 'hover:text-black/60'}`}>Terms of Service</a> apply.
            </p>
        </form>
    )
}
