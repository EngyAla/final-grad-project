const InfoProgressIndicator = ({
    currentStep,
    completedStep,
    role,
}: {
    currentStep: string;
    completedStep?: string;
    role: "doctor" | "patient";
}) => {
const progressSteps =
        role === "doctor"
            ? [
                { key: "personalInfo", title: "Personal Information" },
                { key: "professionalInfo", title: "Professional Information" },
            ]
            : [
                { key: "personalInfo", title: "Personal Information" },
                { key: "medicalInfo", title: "Medical Information" },
            ];


    return (
        <div className="info-progress w-100">
            {progressSteps.map((step) => (
                <div
                    key={step.key}
                    className={`info-progress-item ${
                        currentStep === step.key ? "active" : ""
                    } ${completedStep === step.key ? "completed" : ""}`}
                >
                    <div className="info-progress-item-icon">
                        <i className="fas fa-check"></i>
                    </div>
                    <h2>{step.title}</h2>
                </div>
            ))}
        </div>
    );
};

export default InfoProgressIndicator;
