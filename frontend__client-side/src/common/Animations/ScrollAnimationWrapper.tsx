import { memo, useMemo } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { ScrollAnimationWrapperProps } from "../Types/Interfaces";
import { useScrollAnimationWithDelay } from "./useScrollAnimationWithDelay";

// Scroll-triggered animation wrapper component
const ScrollAnimationWrapper = memo(
    ({
        children,
        variants,
        className = "",
        threshold = 0.1,
        triggerOnce = true,
    }: ScrollAnimationWrapperProps) => {
        const { ref, isInView } = useScrollAnimationWithDelay(
            threshold,
            triggerOnce,
            100 // 100ms delay to ensure page transition completes
        );

        // Memoized default variants to prevent recreation on every render
        const defaultVariants: Variants = useMemo(
            () => ({
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
            }),
            []
        );

        return (
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={variants || defaultVariants}
                className={className}
            >
                {children}
            </motion.div>
        );
    }
);

export default ScrollAnimationWrapper;
