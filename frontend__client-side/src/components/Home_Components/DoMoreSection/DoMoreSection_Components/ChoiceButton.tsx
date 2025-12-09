import { motion } from "framer-motion";
import type { ChoiceButtonProps } from "../../../../common/Types/Interfaces";
import { tabSelectionVariants } from "../../../../common/Animations";

const ChoiceButton = ({ choice, isActive, onClick }: ChoiceButtonProps) => {
    return (
        <motion.button
            className={`choice-btn ${
                isActive ? "blue-btn" : "blue-btn-outline"
            }`}
            onClick={onClick}
            variants={tabSelectionVariants}
            animate={isActive ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            {choice}
        </motion.button>
    );
};

export default ChoiceButton;
