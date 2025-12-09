import React from "react";
import "./TimeLine.scss";
import type { TimeLineProps } from "../../common/Types/Interfaces";

const TimeLine: React.FC<TimeLineProps> = ({ steps, className }) => {
    return (
        <div className={`timeline ${className ?? ""}`.trim()}>
            <div className="timeline-container">
                {/* Timeline Line */}
                <div className="timeline-line"></div>

                {/* Guidance Steps */}
                <div className="guidance-steps">
                    {steps.map((step, index) => (
                        <div key={index} className="step-item">
                            {/* Step Number */}
                            <div className="step-number flex-shrink-0">
                                <span>{index + 1}</span>
                            </div>
                            {/* Step Content */}
                            <div className="step-content">
                                <h3 className="step-title mb-3">{step.title}</h3>
                                <p className="step-description mb-0">
                                    {step.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TimeLine;
