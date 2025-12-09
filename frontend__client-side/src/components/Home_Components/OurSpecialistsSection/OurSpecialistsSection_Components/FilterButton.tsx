import { motion } from "framer-motion";
import type { FilterButtonProps } from "../../../../common/Types/Interfaces";
import { tabSelectionVariants } from "../../../../common/Animations";

const FilterButton = ({ filter, isActive, onClick }: FilterButtonProps) => {
    return (
        <motion.button
            className={`filter-btn ${isActive ? "active" : ""}`}
            onClick={onClick}
            variants={tabSelectionVariants}
            animate={isActive ? "active" : "inactive"}
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
        >
            {filter}
        </motion.button>
    );
};

export default FilterButton;
