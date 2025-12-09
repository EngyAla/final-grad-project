import { memo, useCallback } from "react";
import type { CloseButtonProps } from "../../../Types/Interfaces";
import "./CloseButton.scss";

// Close button component for dismissing notifications
const CloseButton = memo(({ onClose }: CloseButtonProps) => {
    const handleClick = useCallback(() => {
        onClose();
    }, [onClose]);

    // Handle keyboard events for accessibility
    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                onClose();
            }
        },
        [onClose]
    );

    return (
        <button
            className="close-btn"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            type="button"
            aria-label="Close notification"
            title="Close notification"
        >
            <i className="fa-solid fa-times" aria-hidden="true"></i>
        </button>
    );
});

export default CloseButton;
