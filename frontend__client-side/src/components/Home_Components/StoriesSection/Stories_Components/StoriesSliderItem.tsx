import { useState, useEffect } from "react";
import type { StoriesSliderItemPropsWithModal } from "../../../../common/Types/Interfaces";
import { truncateText } from "../../../../utils/functions/truncateText";


const StoriesSliderItem = ({
    stars,
    text,
    author,
    date,
    onShowModal,
}: StoriesSliderItemPropsWithModal) => {
    const [maxLength, setMaxLength] = useState(150);

    // update max length based on window width
    useEffect(() => {
        const updateMaxLength = () => {
            const width = window.innerWidth;

            if (width < 576) {
                setMaxLength(70); // small
            } else if (width < 768) {
                setMaxLength(240); // sm
            } else if (width < 992) {
                setMaxLength(120); // md
            } else if (width < 1200) {
                setMaxLength(45); // lg
            } else if (width < 1400) {
                setMaxLength(120); // xl
            } else {
                setMaxLength(165); // xxl
            }
        };

        updateMaxLength();
        window.addEventListener("resize", updateMaxLength);
        return () => window.removeEventListener("resize", updateMaxLength);
    }, []);

    // check if text is truncated
    const isTextTruncated = text.length > maxLength;

    return (
        <div className="stories-slider-item gray-border p-4 rounded-3">
            {/* Stars */}
            <div className="stars">
                {Array.from({ length: stars }).map((_, index) => (
                    <i
                        key={index}
                        className="fa-solid fa-star yellow-color orange-color fs-3"
                    ></i>
                ))}
            </div>

            {/* Text */}
            <div className="my-4 black-color story-text">
                <p className="mb-0">
                    {truncateText(text, maxLength)}
                    {isTextTruncated && (
                        <button
                            className="read-more-btn"
                            onClick={() =>
                                onShowModal?.({
                                    stars,
                                    text,
                                    author,
                                    date,
                                })
                            }
                        >
                            Read More
                        </button>
                    )}
                </p>
            </div>

            {/* Author */}
            <div className="author d-flex justify-content-between align-items-center pt-3 gap-2">
                <h4 className="black-color fw-semibold mb-0 fs-6">{author}</h4>
                <span className="black-light-color fw-semibold">{date}</span>
            </div>
        </div>
    );
};

export default StoriesSliderItem;
