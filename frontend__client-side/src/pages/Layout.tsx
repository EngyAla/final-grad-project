import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import Navbar from "../common/Navbar/Navbar";
import Footer from "../common/Footer/Footer";
import MainLoader from "../common/Loader/MainLoader";
import ScrollToTop from "../common/ScrollToTop/ScrollToTop";
import InternetChecker from "../common/InternetChecker/InternetChecker";

const Layout = () => {
    const location = useLocation();
    const [activeLoader, setActiveLoader] = useState(false);

    // Memoized route configuration for better performance
    const definedRoutes = useMemo(
        () => [
            "/",
            "/about",
            "/doctors",
            "/appointments",
            "/login",
            "/privacy",
            "/terms",
            "/help",
            "/register",
            "/chat-with-admin",
        ],
        []
    );

    // Memoized section mapping for home page navigation
    const sectionMap = useMemo(
        () => ({
            stories: "#stories",
            "how-it-works": "#how-it-works",
            "do-more": "#do-more",
            "our-specialists": "#our-specialists",
            faq: "#faq",
        }),
        []
    );

    // Show initial loader with timeout
    useEffect(() => {
        const timeout = setTimeout(() => {
            setActiveLoader(true);
        }, 1700);
        return () => clearTimeout(timeout);
    }, []);

    // Handle scroll behavior and in-page navigation
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get("section");

        if (location.pathname === "/") {
            // Home page: handle section navigation
            if (!section || section === "top") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }

            const selector = sectionMap[section as keyof typeof sectionMap];  // get the selector for the section
            if (selector) {
                const element = document.querySelector(selector);
                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }
        } else {
            // Non-home pages: reset scroll position
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "instant" as ScrollBehavior,
            });
        }
    }, [location.pathname, location.search, sectionMap]);

    // Memoized navbar visibility check
    const showNavbar = useMemo(
        () => definedRoutes.includes(location.pathname),
        [definedRoutes, location.pathname]
    );

    // Early return for loader state
    if (!activeLoader) {
        return <MainLoader />;
    }

    return (
        <>
            {/* Navigation bar - conditionally rendered */}
            {showNavbar && <Navbar />}

            {/* Main content area with page transitions */}
            <main
                style={{ position: "relative", minHeight: "100vh" }}
                role="main"
                aria-label="Main content"
            >
                <div
                    key={location.pathname}
                    style={{
                        position: "relative",
                        width: "100%",
                    }}
                >
                    <Outlet />
                </div>
            </main>

            {/* Footer and utility components */}
            {showNavbar && (
                <>
                    <Footer />
                    <ScrollToTop />
                </>
            )}

            {/* Global internet connectivity checker */}
            <InternetChecker />
        </>
    );
};

export default Layout;
