"use client";

import { useState } from "react";
import { submitNewsletterForm } from "@/app/actions";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface NewsletterFormProps {
    placeholder: string;
    buttonText: string;
    source?: string;
    variant?: "footer" | "cta";
}

export function NewsletterForm({ 
    placeholder, 
    buttonText, 
    source = "Website",
    variant = "footer"
}: NewsletterFormProps) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData();
        formData.append("email", email);
        formData.append("source", source);

        const result = await submitNewsletterForm(formData);

        if (result.success) {
            setStatus("success");
            setEmail("");
        } else if (result.errors) {
            setStatus("error");
            const errors = result.errors as Record<string, string[]>;
            setErrorMessage(
                errors._form?.[0] || 
                errors.email?.[0] || 
                "Something went wrong. Please try again."
            );
        }
    }

    if (status === "success") {
        return (
            <div className={`text-lg ${variant === "footer" ? "text-white/70" : "text-black/70"}`}>
                ✓ Thank you for subscribing!
            </div>
        );
    }

    if (variant === "cta") {
        return (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-lg mx-auto">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={placeholder}
                    required
                    className="flex-1 px-8 py-5 text-lg rounded-full border-2 border-black/20 bg-white/80 text-black placeholder:text-black/50 focus:outline-none focus:border-black/50"
                />
                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group relative bg-black text-white hover:bg-black/90 px-12 py-5 text-lg font-semibold rounded-full transition-all duration-500 overflow-hidden flex items-center justify-center border-2 border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? (
                        "Subscribing..."
                    ) : (
                        <>
                            <span className="transition-transform duration-300 group-hover:-translate-x-2 inline-block">
                                {buttonText}
                            </span>
                            <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                        </>
                    )}
                </button>
                {status === "error" && (
                    <p className="text-red-500 text-sm w-full text-center">{errorMessage}</p>
                )}
            </form>
        );
    }

    // Footer variant
    return (
        <form onSubmit={handleSubmit} className="flex gap-2">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 flex-1 text-sm h-9 max-w-[180px] rounded-full px-4 focus:outline-none focus:border-white/50"
            />
            <button
                type="submit"
                disabled={status === "loading"}
                className="group relative bg-transparent border-2 border-white text-white hover:bg-white hover:text-black px-8 py-2 text-xs font-semibold rounded-full transition-all duration-300 overflow-hidden h-9 flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
                <span className="relative inline-flex items-center mr-2 align-middle transition-transform duration-300 group-hover:-translate-x-2">
                    <Image src="/images/brand/sensear-logo-white.png" width={20} height={20} className="w-5 h-5 object-contain" alt="" />
                </span>
                <span className="transition-transform duration-300 group-hover:-translate-x-2 inline-block">
                    {status === "loading" ? "..." : buttonText}
                </span>
                <ArrowRight className="absolute right-2 w-3 h-3 opacity-0 translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 top-1/2 -translate-y-1/2" />
            </button>
            {status === "error" && (
                <p className="text-red-400 text-xs w-full">{errorMessage}</p>
            )}
        </form>
    );
}
