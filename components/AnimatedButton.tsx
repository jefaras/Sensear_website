import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface AnimatedButtonProps {
    children: React.ReactNode;
    href: string;
    lang: string;
    variant?: "outline" | "default" | "dark";
    className?: string;
}

export const AnimatedButton = ({ children, href, lang, variant = "outline", className }: AnimatedButtonProps) => (
    <Link href={`/${lang}/${href}`}>
        <Button
            variant={variant === "dark" ? "outline" : variant}
            className={`group/btn relative px-10 py-7 text-lg font-semibold rounded-full transition-all duration-500 overflow-hidden flex items-center ${variant === "outline"
                ? "bg-transparent border-2 border-black text-black hover:bg-black hover:text-white"
                : variant === "dark"
                    ? "bg-transparent border-2 border-white text-white hover:bg-white hover:text-black"
                    : "bg-black text-white hover:bg-black/90"
                } ${className || ""}`}
        >
            <span className="transition-transform duration-300 group-hover/btn:-translate-x-2 inline-block">
                {children}
            </span>
            <ArrowRight className="absolute right-6 w-5 h-5 opacity-0 translate-x-4 transition-all duration-300 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
        </Button>
    </Link>
);
