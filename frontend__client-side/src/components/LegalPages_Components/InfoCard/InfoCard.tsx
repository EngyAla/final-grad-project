import type { InfoCardProps } from "../../../common/Types/Interfaces";


const InfoCard = ({
    title,
    description,
    icon,
    className = "",
}: InfoCardProps) => {
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

export default InfoCard;
