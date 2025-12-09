import { useState, useEffect, useCallback, useMemo } from "react";

// Custom hook for internet connectivity detection
export const useConnectivity = () => {
    // Initialize with navigator.onLine if available, otherwise assume online
    const [isOnline, setIsOnline] = useState(() => {
        return typeof navigator !== "undefined" ? navigator.onLine : true;
    });
    const [showNotification, setShowNotification] = useState(false);

    // Fallback connectivity check using Google's favicon API
    const checkConnectivity = useCallback(() => {
        const img = new Image();

        img.onload = () => {
            if (!isOnline) {
                setIsOnline(true);
                setShowNotification(true);
                // Auto-hide notification after 3 seconds
                setTimeout(() => setShowNotification(false), 3000);
            }
        };

        img.onerror = () => {
            if (isOnline) {
                setIsOnline(false);
                setShowNotification(true);
            }
        };

        // Use Google's favicon with cache busting to ensure fresh request
        img.src = `https://www.google.com/favicon.ico?t=${Date.now()}`;
    }, [isOnline]);

    // Set up connectivity monitoring
    useEffect(() => {
        const handleOnline = () => {
            setIsOnline(true);
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);
        };

        const handleOffline = () => {
            setIsOnline(false);
            setShowNotification(true);
        };

        // Use modern navigator.onLine API if available
        if (
            typeof navigator !== "undefined" &&
            navigator.onLine !== undefined
        ) {
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);

            return () => {
                window.removeEventListener("online", handleOnline);
                window.removeEventListener("offline", handleOffline);
            };
        } else {
            // Fallback for older browsers: periodic favicon check
            checkConnectivity();
            const checkInterval = setInterval(checkConnectivity, 30000); // Check every 30 seconds

            return () => clearInterval(checkInterval);
        }
    }, [checkConnectivity]);

    // Memoized status text to prevent unnecessary re-renders
    const statusText = useMemo(() => {
        return isOnline ? "Connected" : "No Internet Connection";
    }, [isOnline]);

    // Memoized status color for consistent theming
    const statusColor = useMemo(() => {
        return isOnline ? "#28a745" : "#dc3545";
    }, [isOnline]);

    return {
        isOnline,
        showNotification,
        setShowNotification,
        getStatusText: () => statusText,
        getStatusColor: () => statusColor,
    };
};
