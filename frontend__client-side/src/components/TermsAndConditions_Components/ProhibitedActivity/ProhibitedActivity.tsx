import type { ProhibitedActivityProps } from "../../../common/Types/Interfaces";


const ProhibitedActivity = ({
    activity,
    className = "",
}: ProhibitedActivityProps) => {
    return (
        <div className={`d-flex align-items-start ${className}`}>
            {/* Icon */}
            <i className="fa-solid fa-times text-danger me-3 mt-1"></i>

            {/* Title and Description */}
            <div>
                <h6 className="fw-semibold mb-1">{activity.title}</h6>
                <p className="text-muted mb-0 small">{activity.description}</p>
            </div>
        </div>
    );
};

export default ProhibitedActivity;
