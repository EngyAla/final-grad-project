import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion";

// Custom hook for scroll animations with page transition delay
export const useScrollAnimationWithDelay = (
    threshold: number = 0.1,
    triggerOnce: boolean = true,
    delay: number = 100
) => {
    const ref = useRef(null);
    const [isReady, setIsReady] = useState(false);
    const isInView = useInView(ref, {
        amount: threshold,
        once: triggerOnce,
    });

    // Add delay to ensure page transition completes
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return {
        ref,
        isInView: isInView && isReady,
    };
};
