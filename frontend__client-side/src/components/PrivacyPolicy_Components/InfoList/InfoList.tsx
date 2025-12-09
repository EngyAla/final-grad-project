import type { InfoListProps } from "../../../common/Types/Interfaces";

const InfoList = ({ items, className = "" }: InfoListProps) => {
    return (
        <ul className={`list-unstyled ${className}`}>
            {items.map((item) => (
                <li key={item.id} className="mb-2">
                    <i className="fa-solid fa-check text-success me-2"></i>
                    <strong>{item.title}:</strong> {item.description}
                </li>
            ))}
        </ul>
    );
};

export default InfoList;
