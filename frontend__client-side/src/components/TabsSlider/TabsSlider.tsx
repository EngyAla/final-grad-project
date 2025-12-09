import { useEffect, useRef, useState } from "react";
import type { TabsSliderProps } from "../../common/Types/Interfaces";
import "./TabsSlider.scss";


const TabsSlider = ({
    items,
    activeId,
    onChange,
    className = "",
}: TabsSliderProps) => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Check scroll buttons (scroll available or not)
    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    // Check scroll buttons on mount
    useEffect(() => {
        checkScrollButtons();
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScrollButtons);
            return () =>
                container.removeEventListener("scroll", checkScrollButtons);
        }
    }, []);

    // Handle scroll left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };

    // Handle scroll right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className={`TabsSlider-container ${className}`.trim()}>
            <div className="TabsSlider-slider">
                {/* Previous Button */}
                <button
                    className={`scroll-btn scroll-left ${
                        !canScrollLeft ? "disabled" : ""
                    }`}
                    onClick={scrollLeft}
                    disabled={!canScrollLeft}
                    aria-label="Scroll left"
                >
                    <i className="fa-solid fa-chevron-left"></i>
                </button>

                {/* Tabs Container */}
                <div
                    ref={scrollContainerRef}
                    className="TabsSlider-tabs d-flex gap-2"
                >
                    {items.map((item) => (
                        <button
                            key={item.id}
                            className={`TabsSlider-btn ${
                                activeId === item.id ? "active" : ""
                            }`}
                            onClick={() => onChange(item.id)}
                        >
                            {item.iconClass && (
                                <i
                                    className={`fa-solid ${item.iconClass} me-2`}
                                ></i>
                            )}
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Next Button */}
                <button
                    className={`scroll-btn scroll-right ${
                        !canScrollRight ? "disabled" : ""
                    }`}
                    onClick={scrollRight}
                    disabled={!canScrollRight}
                    aria-label="Scroll right"
                >
                    <i className="fa-solid fa-chevron-right"></i>
                </button>
            </div>
        </div>
    );
};

export default TabsSlider;
