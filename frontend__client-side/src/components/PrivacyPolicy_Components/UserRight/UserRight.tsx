import type { UserRightProps } from "../../../common/Types/Interfaces";

const UserRight = ({ right, className = "" }: UserRightProps) => {
    return (
        <div className={`d-flex align-items-start ${className}`}>
            {/* =============== Icon =============== */}
            <i className={`${right.icon} text-primary me-3 mt-1`}></i>

            {/* =============== Title and Description =============== */}
            <div>
                <h6 className="fw-semibold mb-1">{right.title}</h6>
                <p className="text-muted mb-0">{right.description}</p>
            </div>
        </div>
    );
};

export default UserRight;
