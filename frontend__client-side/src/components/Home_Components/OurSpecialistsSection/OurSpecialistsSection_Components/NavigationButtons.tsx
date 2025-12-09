import { motion } from "framer-motion";
import type { NavigationButtonsProps } from "../../../../common/Types/Interfaces";
import { buttonVariants } from "../../../../common/Animations";

const NavigationButtons = ({
    canGoLeft,
    canGoRight,
    onPrevious,
    onNext,
}: NavigationButtonsProps) => {
    return (
        <div className="navigation-buttons d-flex gap-3">
            <motion.button
                className={`nav-btn nav-left ${!canGoLeft ? "disabled" : ""}`}
                onClick={onPrevious}
                disabled={!canGoLeft}
                aria-label="Previous page"
                variants={buttonVariants}
                whileHover={canGoLeft ? "hover" : ""}
                whileTap={canGoLeft ? "tap" : ""}
                animate={canGoLeft ? "inactive" : "disabled"}
            >
                <i className="fa-solid fa-arrow-left"></i>
            </motion.button>
            <motion.button
                className={`nav-btn nav-right ${!canGoRight ? "disabled" : ""}`}
                onClick={onNext}
                disabled={!canGoRight}
                aria-label="Next page"
                variants={buttonVariants}
                whileHover={canGoRight ? "hover" : ""}
                whileTap={canGoRight ? "tap" : ""}
                animate={canGoRight ? "inactive" : "disabled"}
            >
                <i className="fa-solid fa-arrow-right"></i>
            </motion.button>
        </div>
    );
};

export default NavigationButtons;
