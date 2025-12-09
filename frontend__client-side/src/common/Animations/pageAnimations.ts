import type { Variants } from "framer-motion";

// Simplified page transition variants
export const pageVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    in: {
        opacity: 1,
        y: 0,
    },
    out: {
        opacity: 0,
        y: -20,
    },
};

// Page transition configuration with smooth easing
export const pageTransition = {
    type: "tween" as const,
    ease: "easeInOut" as const, // More stable easing
    duration: 0.3, // Shorter duration for better performance
} as const;
