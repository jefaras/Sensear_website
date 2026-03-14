export function ScrollMouseIcon() {
    return (
        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
            <div className="w-[24px] h-[40px] border-2 border-black rounded-full flex items-start justify-center p-1.5">
                <div className="w-1 h-2 bg-black rounded-full animate-scroll-bounce"></div>
            </div>
        </div>
    );
}
