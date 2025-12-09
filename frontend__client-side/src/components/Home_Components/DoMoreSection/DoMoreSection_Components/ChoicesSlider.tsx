import { useRef, useEffect, useState } from "react";
import ChoiceButton from "./ChoiceButton";
import ScrollButton from "./ScrollButton";
import type { ChoicesSliderProps } from "../../../../common/Types/Interfaces";

const ChoicesSlider = ({
    choices,
    activeChoice,
    onChoiceChange,
}: ChoicesSliderProps) => {
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Check Scroll Buttons
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

    // Scroll Left
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: -200,
                behavior: "smooth",
            });
        }
    };

    // Scroll Right
    const scrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: 200,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="choices-container">
            <div className="choices-slider">
                <ScrollButton
                    direction="left"
                    isDisabled={!canScrollLeft}
                    onClick={scrollLeft}
                    ariaLabel="Scroll left"
                />

                <div ref={scrollContainerRef} className="choices d-flex gap-3">
                    {choices.map((choice, index) => (
                        <ChoiceButton
                            key={index}
                            choice={choice}
                            isActive={activeChoice === choice}
                            onClick={() => onChoiceChange(choice)}
                        />
                    ))}
                </div>

                <ScrollButton
                    direction="right"
                    isDisabled={!canScrollRight}
                    onClick={scrollRight}
                    ariaLabel="Scroll right"
                />
            </div>
        </div>
    );
};

export default ChoicesSlider;
