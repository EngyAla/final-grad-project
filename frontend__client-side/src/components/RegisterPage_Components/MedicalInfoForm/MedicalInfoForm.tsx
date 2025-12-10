import { useNavigate } from "react-router-dom";
import InfoProgressIndicator from "../PersonalInfoForm/InfoProgressIndicator/InfoProgressIndicator";
import API_URL from '../../../config/api';

interface PatientMedicalInfoProps {
    formData: any;
    errors: any;
    updateField: (field: string, value: string | boolean) => void;
    validateMedicalInfo: () => boolean;
    setErrors: (errors: any) => void;
    setFormData: (formData: any) => void;
    setCurrentStep: (step: string) => void;
}

const PatientMedicalInfoForm = ({
    formData,
    setFormData,
    updateField,
    errors,
    setErrors,
    validateMedicalInfo,
    // setCurrentStep,
}: PatientMedicalInfoProps) => {

    const navigate = useNavigate();
    const handleSubmitFinal = async () => {
    try {
        // تحقق من صحة بيانات المريض قبل الإرسال
        if (!validateMedicalInfo()) {
            console.log("Patient info validation failed");
            return;
        }

        // جهز البيانات للإرسال
        const patientData = {
            userType: "patient",
            email: formData.email,
            password: formData.password,
            firstName: formData.firstName,
            lastName: formData.lastName,
            age: Number(formData.age),
            gender: formData.gender,
            phoneNumber: formData.phoneNumber,
            address: formData.address,
            country: formData.country,
            nationalId: formData.nationalId,
            hasChronicDisease: formData.hasChronicDisease,
            chronicDisease: formData.chronicDisease,
            medicalHistory: formData.medicalHistory,
            emergencyFirstName: formData.emergencyFirstName,
            emergencyRelationship: formData.emergencyRelationship,
            emergencyPhone: formData.emergencyPhone,
            profileImage: formData.profileImage,
        };

        // إرسال البيانات للـ backend
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(patientData),
        });
        console.log("FORM DATA BEFORE SUBMIT:", patientData);


        if (!response.ok) {
            const errorData = await response.json();
            console.error("Error submitting patient info:", errorData);
            alert(`Error: ${errorData.msg || "Server error"}`);
            return;
        }

        const result = await response.json();
        console.log("Patient info submitted successfully:", result);

        setFormData((prev) => ({
            ...prev,
            medicalInfoCompleted: true,
        }));
        setErrors({});
        navigate('/login')
        // setCurrentStep("success");
    } catch (err) {
        console.error("Failed to submit patient info:", err);
        alert("Failed to submit patient info. Check console for details.");
    }
};
    console.log("FORM DATA BEFORE SUBMIT:", formData);



    return (
        <div className="">
            <InfoProgressIndicator
                    role="patient"
                    currentStep="medicalInfo"
                    completedStep="personalInfo"
                />
                <div className="card shadow border-0 w-100 p-5"
                            style={{ maxWidth: "900px", margin: "40px auto" }}>
                    {/* Chronic Disease question */}
                    <div className="mb-4">
                        <label className="fw-semibold mb-2">Do you have chronic diseases? *</label>
                        <select
                            className={`form-select ${errors.hasChronicDisease ? "is-invalid" : ""}`}
                            value={formData.hasChronicDisease === true ? "yes" : formData.hasChronicDisease === false ? "no" : ""}
                            onChange={(e) =>
                                updateField(
                                    "hasChronicDisease",
                                    e.target.value === "yes" ? true : e.target.value === "no" ? false : ""
                                )
                            }
                        >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        {errors.hasChronicDisease && (
                            <div className="invalid-feedback">{errors.hasChronicDisease}</div>
                        )}
                    </div>

                    {/* Show textareas only when "Yes" */}
                    {formData.hasChronicDisease && (
                        <>
                            <div className="mb-4">
                                <label className="fw-semibold mb-2">Please enter your chronic disease *</label>
                                <textarea
                                    className={`form-control ${errors.chronicDisease ? "is-invalid" : ""}`}
                                    rows={3}
                                    value={formData.chronicDisease}
                                    onChange={(e) => updateField("chronicDisease", e.target.value)}
                                ></textarea>
                                {errors.chronicDisease && (
                                    <div className="invalid-feedback">{errors.chronicDisease}</div>
                                )}
                            </div>

                            <div className="mb-4">
                                <label className="fw-semibold mb-2">Medical History (optional)</label>
                                <textarea
                                    className="form-control"
                                    rows={3}
                                    value={formData.medicalHistory}
                                    onChange={(e) => updateField("medicalHistory", e.target.value)}
                                ></textarea>
                            </div>
                        </>
                    )}

                    {/* Emergency Contact */}
                    <h5 className="mt-5 mb-4">Emergency Contact (Optional)</h5>

                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <label className="fw-semibold">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.emergencyFirstName}
                                onChange={(e) => updateField("emergencyFirstName", e.target.value)}
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="fw-semibold">Relationship</label>
                            <input
                                type="text"
                                className="form-control"
                                value={formData.emergencyRelationship}
                                onChange={(e) =>
                                    updateField("emergencyRelationship", e.target.value)
                                }
                            />
                        </div>

                        <div className="col-md-4 mb-3">
                            <label className="fw-semibold">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                value={formData.emergencyPhone}
                                onChange={(e) => updateField("emergencyPhone", e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="text-center mt-4">
                        <button
                            className="btn btn-primary px-5"
                            onClick={handleSubmitFinal}
                        >
                            Submit
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default PatientMedicalInfoForm;
