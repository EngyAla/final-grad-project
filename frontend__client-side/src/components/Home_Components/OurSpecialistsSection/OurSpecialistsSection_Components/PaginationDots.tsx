import { motion } from "framer-motion";
import type { PaginationDotsProps } from "../../../../common/Types/Interfaces";
import { tabSelectionVariants } from "../../../../common/Animations";

const PaginationDots = ({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationDotsProps) => {
    return (
        <div className="pagination-dots d-flex gap-2 justify-content-center align-items-center">
            {Array.from({ length: totalPages }, (_, index) => (
                <motion.button
                    key={index}
                    className={`pagination-dot ${
                        currentPage === index ? "active" : ""
                    }`}
                    onClick={() => onPageChange(index)}
                    aria-label={`Go to page ${index + 1}`}
                    variants={tabSelectionVariants}
                    animate={currentPage === index ? "active" : "inactive"}
                    whileHover="hover"
                    whileTap={{ scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                />
            ))}
        </div>
    );
};

export default PaginationDots;
