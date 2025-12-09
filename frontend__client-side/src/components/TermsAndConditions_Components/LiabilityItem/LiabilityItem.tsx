import type { LiabilityItemProps } from "../../../common/Types/Interfaces";

const LiabilityItem = ({ item, className = "" }: LiabilityItemProps) => {
    return (
        <li className={`mb-2 ${className}`}>
            <i className={`${item.icon} text-primary me-2`}></i>
            <strong>{item.title}:</strong> {item.description}
        </li>
    );
};

export default LiabilityItem;
