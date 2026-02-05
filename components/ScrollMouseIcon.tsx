"use client";

export function ScrollMouseIcon() {
    return (
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
            <style>{`
                @keyframes scroll-bounce {
                    0%, 100% {
                        transform: translateY(0);
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(8px);
                        opacity: 0.5;
                    }
                }
                .scroll-wheel {
                    animation: scroll-bounce 2s ease-in-out infinite;
                }
            `}</style>
            <div className="w-[24px] h-[40px] border-2 border-black rounded-full flex items-start justify-center p-1.5">
                <div className="w-1 h-2 bg-black rounded-full scroll-wheel"></div>
            </div>
        </div>
    );
}
