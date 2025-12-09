import type { SharingListProps } from "../../../common/Types/Interfaces";

const SharingList = ({ items, className = "" }: SharingListProps) => {
    return (
        <ul className={`list-unstyled ${className}`}>
            {items.map((item) => (
                <li key={item.id} className="mb-2">
                    <i className={`${item.icon} text-primary me-2`}></i>
                    <strong>{item.title}:</strong> {item.description}
                </li>
            ))}
        </ul>
    );
};

export default SharingList;
