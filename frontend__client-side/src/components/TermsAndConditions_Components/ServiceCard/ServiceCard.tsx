import type { ServiceCardProps } from "../../../common/Types/Interfaces";

const ServiceCard = ({
    title,
    description,
    icon,
    className = "",
}: ServiceCardProps) => {
    return (
        <div className={`card h-100 border-0 shadow-sm ${className}`}>
            <div className="card-body">
                {/* Icon and Title */}
                <h5 className="card-title text-primary">
                    <i className={`${icon} me-2`}></i>
                    {title}
                </h5>

                {/* Description */}
                <p className="card-text">{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;
