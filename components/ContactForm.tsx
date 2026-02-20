"use client";

import { useState } from "react";
import { submitContactForm } from "@/app/actions";
import { CheckCircle, ArrowRight } from "lucide-react";

interface ContactFormLabels {
    title: string;
    subtitle: string;
    name: string;
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
    };
}

interface ContactFormProps {
    labels: ContactFormLabels;
}

interface FormData {
    name: string;
    email: string;
    phone: string;
    venue_type: string;
    service_interest: string;
    message: string;
}

export function ContactForm({ labels }: ContactFormProps) {
    const [pending, setPending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [errors, setErrors] = useState<Record<string, string[]>>({});
    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        phone: "",
        venue_type: "",
        service_interest: "",
        message: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setPending(true);
        setErrors({});

        const submitData = new FormData();
        submitData.append("name", formData.name);
        submitData.append("email", formData.email);
        submitData.append("phone", formData.phone);
        submitData.append("venue_type", formData.venue_type);
        submitData.append("service_interest", formData.service_interest);
        submitData.append("message", formData.message);

        const res = await submitContactForm(submitData);

        setPending(false);

        if (res?.errors) {
            setErrors(res.errors as Record<string, string[]>);
        } else if (res?.success) {
            setSuccess(true);
            // Reset form on success
            setFormData({
                name: "",
                email: "",
                phone: "",
                venue_type: "",
                service_interest: "",
                message: "",
            });
        }
    }

    if (success) {
        return (
            <div className="flex flex-col items-center justify-center p-8 bg-black/5 rounded-xl">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2">{labels.success}</h3>
                <p className="text-center text-black/60">{labels.success_message}</p>
                <button
                    onClick={() => setSuccess(false)}
                    className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-black/80 transition-colors"
                >
                    {labels.send_another}
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Display form-level errors (e.g., SMTP failure) */}
            {errors._form && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    {errors._form[0]}
                </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2">{labels.name}</label>
                    <input 
                        name="name" 
                        type="text" 
                        required 
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={labels.name_placeholder} 
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 ${errors.name ? 'border-red-500' : 'border-gray-200'}`} 
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name[0]}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">{labels.email}</label>
                    <input 
                        name="email" 
                        type="email" 
                        required 
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={labels.email_placeholder} 
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 ${errors.email ? 'border-red-500' : 'border-gray-200'}`} 
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email[0]}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">{labels.phone}</label>
                <input 
                    name="phone" 
                    type="tel" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={labels.phone_placeholder} 
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20" 
                />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium mb-2">{labels.venue}</label>
                    <select 
                        name="venue_type" 
                        value={formData.venue_type}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 ${errors.venue_type ? 'border-red-500' : 'border-gray-200'}`}
                    >
                        <option value="">{labels.venue_options.placeholder}</option>
                        <option value="hotel">{labels.venue_options.hotel}</option>
                        <option value="restaurant">{labels.venue_options.restaurant}</option>
                        <option value="bar">{labels.venue_options.bar}</option>
                        <option value="other">{labels.venue_options.other}</option>
                    </select>
                    {errors.venue_type && <p className="text-red-500 text-sm mt-1">{errors.venue_type[0]}</p>}
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2">{labels.interest}</label>
                    <select 
                        name="service_interest" 
                        value={formData.service_interest}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 ${errors.service_interest ? 'border-red-500' : 'border-gray-200'}`}
                    >
                        <option value="">{labels.interest_options.placeholder}</option>
                        <option value="playlists">{labels.interest_options.playlists}</option>
                        <option value="events">{labels.interest_options.events}</option>
                        <option value="strategy">{labels.interest_options.strategy}</option>
                    </select>
                    {errors.service_interest && <p className="text-red-500 text-sm mt-1">{errors.service_interest[0]}</p>}
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium mb-2">{labels.message}</label>
                <textarea 
                    name="message" 
                    rows={5} 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={labels.message_placeholder} 
                    className={`w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 ${errors.message ? 'border-red-500' : 'border-gray-200'}`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message[0]}</p>}
            </div>

            <button
                type="submit"
                disabled={pending}
                className="group relative w-full bg-black text-white font-bold text-lg py-7 rounded-full hover:bg-black/90 transition-all disabled:opacity-50 border-2 border-transparent overflow-hidden flex items-center justify-center"
            >
                {pending ? (
                    labels.submitting
                ) : (
                    <>
                        <span className="relative inline-flex items-center mr-2 align-middle">
                            <img
                                src="/images/brand/sensear-logo-color.png"
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
        </form>
    )
}
