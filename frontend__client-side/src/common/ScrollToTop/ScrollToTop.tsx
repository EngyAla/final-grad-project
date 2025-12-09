import { useState, useEffect } from "react";
import "./ScrollToTop.scss";

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Toggle Visibility
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to Top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            className={`scroll-to-top-btn ${isVisible ? "visible" : ""}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Scroll to top"
        >
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
};

export default ScrollToTop;
