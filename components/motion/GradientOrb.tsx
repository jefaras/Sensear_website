/**
 * GradientOrb — Pure CSS ambient blur orb for atmospheric depth.
 * No JavaScript animation needed; uses CSS @keyframes for gentle float.
 * Positioned absolute — parent must have `position: relative; overflow: hidden;`
 */

type OrbColor = "bronze" | "silver" | "warm";

type OrbPosition = "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";

interface GradientOrbProps {
    /** Color preset */
    color?: OrbColor;
    /** Position within parent */
    position?: OrbPosition;
    /** Size in pixels (default: 500) */
    size?: number;
    /** Opacity 0-1 (default: 0.35) */
    opacity?: number;
    /** Additional className */
    className?: string;
}

const colorMap: Record<OrbColor, string> = {
    bronze: "radial-gradient(circle, rgba(245, 212, 193, 0.6) 0%, rgba(232, 195, 176, 0.3) 40%, transparent 70%)",
    silver: "radial-gradient(circle, rgba(211, 211, 211, 0.5) 0%, rgba(192, 192, 192, 0.25) 40%, transparent 70%)",
    warm: "radial-gradient(circle, rgba(240, 213, 208, 0.5) 0%, rgba(212, 196, 176, 0.25) 40%, transparent 70%)",
};

const positionMap: Record<OrbPosition, string> = {
    "top-left": "-top-1/4 -left-1/4",
    "top-right": "-top-1/4 -right-1/4",
    "bottom-left": "-bottom-1/4 -left-1/4",
    "bottom-right": "-bottom-1/4 -right-1/4",
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

export function GradientOrb({
    color = "bronze",
    position = "top-right",
    size = 500,
    opacity = 0.35,
    className = "",
}: GradientOrbProps) {
    return (
        <div
            aria-hidden="true"
            className={`absolute rounded-full pointer-events-none ${positionMap[position]} ${className}`}
            style={{
                width: `${size}px`,
                height: `${size}px`,
                background: colorMap[color],
                filter: "blur(80px)",
                opacity,
                animation: "orb-float 20s ease-in-out infinite",
            }}
        />
    );
}

/**
 * Include this CSS in the page or globals for the float animation:
 *
 * @keyframes orb-float {
 *   0%, 100% { transform: translate(0, 0); }
 *   33% { transform: translate(15px, -20px); }
 *   66% { transform: translate(-10px, 15px); }
 * }
 */
