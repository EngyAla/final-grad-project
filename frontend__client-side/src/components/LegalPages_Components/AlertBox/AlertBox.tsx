import type { AlertBoxProps } from "../../../common/Types/Interfaces";

const AlertBox = ({ type, title, message, className = "" }: AlertBoxProps) => {
    return (
        <div className={`alert alert-${type} ${className}`} role="alert">
            {/* =============== Title =============== */}
            <h5 className="alert-heading fw-bold">{title}</h5>

            {/* =============== Message =============== */}
            <p className="mb-0">{message}</p>
        </div>
    );
};

export default AlertBox;
