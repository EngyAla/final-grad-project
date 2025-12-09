import { AnimatePresence, motion } from "framer-motion";
import { memo, useCallback } from "react";
import { fadeInUp } from "../Animations";
import { StatusCard, useConnectivity } from "./InternetChecker_Components";
import type { InternetCheckerProps } from "../Types/Interfaces";
import "./InternetChecker.scss";

// Internet connectivity checker component
const InternetChecker = memo(({ className = "" }: InternetCheckerProps) => {
    const {
        isOnline,
        showNotification,
        setShowNotification,
        getStatusText,
        getStatusColor,
    } = useConnectivity();

    // Memoized close handler to prevent unnecessary re-renders
    const handleClose = useCallback(() => {
        setShowNotification(false);
    }, [setShowNotification]);

    return (
        <AnimatePresence mode="wait">
            {showNotification && (
                <motion.div
                    className={`internet-checker ${className}`}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={fadeInUp}
                    role="complementary"
                    aria-label="Internet connection status"
                >
                    <StatusCard
                        isOnline={isOnline}
                        statusText={getStatusText()}
                        statusColor={getStatusColor()}
                        onClose={handleClose}
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
});

export default InternetChecker;
