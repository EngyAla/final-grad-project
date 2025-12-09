import type { SecurityFeatureProps } from "../../../common/Types/Interfaces";

const SecurityFeature = ({ feature, className = "" }: SecurityFeatureProps) => {
    return (
        <div className={`text-center ${className}`}>
            {/* Icon */}
            <div
                className={`bg-${feature.color} text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                style={{
                    width: "60px",
                    height: "60px",
                }}
            >
                <i className={`${feature.icon} fa-lg`}></i>
            </div>

            {/* Title */}
            <h5>{feature.title}</h5>

            {/* Description */}
            <p className="text-muted">{feature.description}</p>
        </div>
    );
};

export default SecurityFeature;
