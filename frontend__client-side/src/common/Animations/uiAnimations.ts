import type { Variants } from "framer-motion";

// Button interaction animations with spring physics
export const buttonVariants: Variants = {
    hover: {
        scale: 1.05, // Subtle scale increase on hover
        transition: {
            type: "spring",
            stiffness: 300, // Responsive spring
            damping: 20, // Prevents oscillation
        },
    },
    tap: {
        scale: 0.95, // Pressed state feedback
    },
};

// Fade in from bottom animation
export const fadeInUp: Variants = {
    initial: {
        opacity: 0,
        y: 30, // Starts slightly below
    },
    in: {
        opacity: 1,
        y: 0, // Moves to final position
        transition: {
            duration: 0.6,
            ease: "easeOut", // Natural deceleration
        },
    },
};
