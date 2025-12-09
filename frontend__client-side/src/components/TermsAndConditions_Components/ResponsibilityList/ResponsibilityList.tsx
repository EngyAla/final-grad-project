import type { ResponsibilityListProps } from "../../../common/Types/Interfaces";

const ResponsibilityList = ({
    items,
    className = "",
}: ResponsibilityListProps) => {
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

export default ResponsibilityList;
