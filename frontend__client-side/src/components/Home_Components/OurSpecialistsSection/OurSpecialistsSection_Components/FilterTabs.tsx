import { useRef, useEffect, useState } from "react";
import FilterButton from "./FilterButton";
import type { FilterTabsProps } from "../../../../common/Types/Interfaces";

const FilterTabs = ({
    filters,
    activeFilter,
    onFilterChange,
}: FilterTabsProps) => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Check Scroll Buttons (scroll available or not)
    const checkScrollButtons = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } =
                scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    // Check Scroll Buttons on Mount
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
        <div className="filter-tabs-container">
            <div className="filter-tabs-slider">
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
                    className="filter-tabs d-flex gap-2"
                >
                    {filters.map((filter, index) => (
                        <FilterButton
                            key={index}
                            filter={filter}
                            isActive={activeFilter === filter}
                            onClick={() => onFilterChange(filter)}
                        />
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

export default FilterTabs;
