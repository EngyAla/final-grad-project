import type { CookieTypeProps } from "../../../common/Types/Interfaces";

const CookieType = ({ cookie, className = "" }: CookieTypeProps) => {
    return (
        <div className={`text-center p-3 border rounded ${className}`}>
            {/* Icon */}
            <i className={`${cookie.icon} text-primary fa-2x mb-2`}></i>
            {/* Name */}
            <h6>{cookie.name}</h6>
            {/* Description */}
            <p className="text-muted small">{cookie.description}</p>
        </div>
    );
};

export default CookieType;
