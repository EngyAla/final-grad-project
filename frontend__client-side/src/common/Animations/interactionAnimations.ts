import type { Variants } from "framer-motion";

// Choice/Filter change animations
export const choiceChangeVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
        scale: 0.9,
        rotateX: -15,
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            type: "spring",
            stiffness: 100,
            damping: 15,
        },
    },
    exit: {
        opacity: 0,
        y: -30,
        scale: 0.9,
        rotateX: 15,
        transition: {
            duration: 0.4,
            ease: "easeIn",
        },
    },
};

// Slider swipe animations
export const sliderSwipeVariants: Variants = {
    enter: (direction: number) => ({
        x: direction > 0 ? 300 : -300,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction: number) => ({
        x: direction < 0 ? 300 : -300,
        opacity: 0,
    }),
};

// Tab/Button selection animations
export const tabSelectionVariants: Variants = {
    inactive: {
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
        },
    },
    active: {
        scale: 1.05,
        y: -2,
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
    hover: {
        scale: 1.02,
        y: -1,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

// Grid container animations (for staggered children)
export const gridContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

// Grid item animations
export const gridItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
    hover: {
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
        transition: {
            duration: 0.2,
        },
    },
};
