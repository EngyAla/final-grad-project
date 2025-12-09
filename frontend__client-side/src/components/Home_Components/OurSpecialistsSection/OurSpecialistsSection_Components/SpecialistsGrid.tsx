import { motion } from "framer-motion";
import SpecialistCard from "./SpecialistCard";
import type { SpecialistsGridProps } from "../../../../common/Types/Interfaces";
import {
    gridContainerVariants,
    gridItemVariants,
} from "../../../../common/Animations";

const SpecialistsGrid = ({ specialists, onBookNow }: SpecialistsGridProps) => {
    return (
        <motion.div
            className="specialists-grid"
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
        >
            {specialists.map((specialist, index) => (
                <motion.div
                    key={`${specialist.id || index}-${specialist.name}`}
                    variants={gridItemVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    layout
                >
                    <SpecialistCard
                        specialist={specialist}
                        onBookNow={onBookNow}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default SpecialistsGrid;
