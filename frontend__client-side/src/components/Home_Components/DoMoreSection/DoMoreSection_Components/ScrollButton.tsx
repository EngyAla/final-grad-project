import type { ScrollButtonProps } from "../../../../common/Types/Interfaces";


const ScrollButton = ({
    direction,
    isDisabled,
    onClick,
    ariaLabel,
}: ScrollButtonProps) => {
    return (
        <button
            className={`scroll-btn scroll-${direction} ${
                isDisabled ? "disabled" : ""
            }`}
            onClick={onClick}
            disabled={isDisabled}
            aria-label={ariaLabel}
        >
            <i className={`fa-solid fa-chevron-${direction}`}></i>
        </button>
    );
};

export default ScrollButton;
