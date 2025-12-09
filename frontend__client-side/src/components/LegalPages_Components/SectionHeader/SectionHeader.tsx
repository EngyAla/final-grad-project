import type { SectionHeaderProps } from "../../../common/Types/Interfaces";

const SectionHeader = ({ title, icon, className = "" }: SectionHeaderProps) => {
    return (
        <h2 className={`h3 fw-bold text-primary mb-3 text-center ${className}`}>
            {/* Icon */}
            <i className={`${icon} me-2`}></i>

            {/* Title */}
            {title}
        </h2>
    );
};

export default SectionHeader;
