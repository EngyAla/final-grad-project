import type { IntellectualPropertyProps } from "../../../common/Types/Interfaces";

const IntellectualProperty = ({
    item,
    className = "",
}: IntellectualPropertyProps) => {
    return (
        <div className={`d-flex align-items-start ${className}`}>
            {/* =============== Icon =============== */}
            <i className={`${item.icon} text-primary me-3 mt-1`}></i>

            {/* =============== Title and Description =============== */}
            <div>
                <h6 className="fw-semibold mb-1">{item.title}</h6>
                <p className="text-muted mb-0">{item.description}</p>
            </div>
        </div>
    );
};

export default IntellectualProperty;
