import type { Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

// Scroll-triggered fade in from bottom
export const scrollFadeIn: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Scroll-triggered fade in from left
export const scrollFadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Scroll-triggered fade in from right
export const scrollFadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Scroll-triggered scale in
export const scrollScaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8,
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

// Scroll-triggered stagger container
export const scrollStaggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Scroll-triggered stagger item
export const scrollStaggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

// Hook for scroll animations
export const useScrollAnimation = (
    threshold: number = 0.1,
    triggerOnce: boolean = true
) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: threshold, once: triggerOnce });

    return { ref, isInView };
};
