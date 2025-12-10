    import InfoProgressIndicator from "../PersonalInfoForm/InfoProgressIndicator/InfoProgressIndicator";
    import specializationData from "../../../utils/data/specializationData";
import { useState } from "react";
import API_URL from '../../../config/api';


    interface ProfessionalInfoFormProps {
    formData: any;
    updateField: (field: string, value: string) => void;
    errors: any;
    setFormData: (formData: any) => void;
    setErrors: (errors: any) => void;
    validateProfessionalInfo: () => boolean;
    setCurrentStep: (step: string) => void;
    }

    const ProfessionalInfoForm = ({
    formData,
    updateField,
    errors,
    setFormData,
    setErrors,
    validateProfessionalInfo,
    setCurrentStep,
    }: ProfessionalInfoFormProps) => {
        // console.log(formData)

    const [timings, setTimings] = useState([
        { day: "", start: "", end: "" }
    ]);

    const addTiming = (e) => {
        e.preventDefault();
        setTimings([...timings, { day: "", start: "", end: "" }]);
    };

    const updateTiming = (index, field, value) => {
    const newTimings = [...timings];
    newTimings[index][field] = value;
    setTimings(newTimings);
    };
    // console.log(timings)

////////
const handleSubmitFinal = async () => {
    try {
    if (!validateProfessionalInfo()) {
        console.log("Professional info validation failed");
        return;
    }
    if (timings.length === 0) {
        alert("Please add at least one available time");
        return;
    }
    const doctorData = {
        userType: "doctor",
        email: formData.email,
        password: formData.password,
        firstName: formData.firstName,
        lastName: formData.lastName,
        age: formData.age,
        gender: formData.gender,
        phoneNumber: formData.phoneNumber,
        address: formData.address,
        country: formData.country,
        nationalId: formData.nationalId,
        specialization: formData.specialization,
        yearsExperience: formData.yearsExperience,
        consultationType: formData.consultationType,
        feePerConsultation: formData.feePerConsultation,
        currency: formData.currency,
        visitDuration: formData.visitDuration,
        website: formData.website,
        // availableDays: formData.availableDays,
        availableTiming: timings,
        profileImage: formData.profileImage,
    };
    // console.log(doctorData)

    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(doctorData),
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error submitting doctor info:", errorData);
        alert(`Error: ${errorData.msg || "Server error"}`);
        return;
    }

    const result = await response.json();
    console.log("Doctor professional info submitted successfully:", result);
    setFormData((prev) => ({
        ...prev,
        professionalInfoCompleted: true,
    }));
    setErrors({});
    setCurrentStep("success");
    } catch (err) {
        console.error("Failed to submit doctor info:", err);
        alert("Failed to submit doctor info. Check console for details.");
    }
};

    return (
        <div
        className="min-vh-100 bg-light d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100">
            <InfoProgressIndicator
            role="doctor"
            currentStep="professionalInfo"
            completedStep="personalInfo"
            />
            <div
            className="d-flex align-items-center justify-content-center p-3"
            style={{ minHeight: "100vh" }}
            >
            <div className="w-100 justify-content-center">
                <div className="col-12 col-lg-10 col-xl-8 mx-auto">
                <div
                    className="card shadow border-0 w-100"
                    style={{ maxWidth: "900px", margin: "0 auto" }}
                >
                    <div className="card-body p-4">
                    <form>
                        <div className="row">
                        <div className="col-md-6 mb-3">
                            <div className="mb-3">
                            <label className="fw-semibold form-label">
                                Specialization{" "}
                                <span
                                style={{
                                    color: "red",
                                }}
                                >
                                *
                                </span>
                            </label>
                            <select
                                value={formData.specialization}
                                onChange={(e) =>
                                updateField("specialization", e.target.value)
                                }
                                className={`form-select py-2 ${
                                errors.specialization ? "is-invalid" : ""
                                }`}
                            >
                                <option value="">Select specialization</option>
                                {specializationData.map((specialization) => (
                                <option
                                    key={specialization.id}
                                    value={specialization.name
                                    .toLowerCase()
                                    .replace(/\s+/g, "_")}
                                >
                                    {specialization.name}
                                </option>
                                ))}
                            </select>
                            {errors.specialization && (
                                <div className="invalid-feedback">
                                {errors.specialization}
                                </div>
                            )}
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="mb-3">
                            <label className="fw-semibold form-label">
                                Years of Experience{" "}
                                <span
                                style={{
                                    color: "red",
                                }}
                                >
                                *
                                </span>
                            </label>
                            <select
                                value={formData.yearsExperience}
                                onChange={(e) =>
                                updateField("yearsExperience", e.target.value)
                                }
                                className={`form-select py-2 ${
                                errors.yearsExperience ? "is-invalid" : ""
                                }`}
                            >
                                <option value="">Select years</option>
                                {[...Array(50)].map((_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1} years
                                </option>
                                ))}
                            </select>
                            {errors.yearsExperience && (
                                <div className="invalid-feedback">
                                {errors.yearsExperience}
                                </div>
                            )}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <div className="mb-3">
                            <label className="fw-semibold form-label">
                                Fee per Consultation{" "}
                                <span
                                style={{
                                    color: "red",
                                }}
                                >
                                *
                                </span>
                            </label>
                            <input
                                type="number"
                                min="0"
                                step="1"
                                placeholder="Enter consultation fee"
                                value={formData.feePerConsultation}
                                onChange={(e) =>
                                updateField("feePerConsultation", e.target.value)
                                }
                                className={`form-control py-2 ${
                                errors.feePerConsultation ? "is-invalid" : ""
                                }`}
                            />
                            {errors.feePerConsultation && (
                                <div className="invalid-feedback">
                                {errors.feePerConsultation}
                                </div>
                            )}
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="mb-3">
                            <label className="fw-semibold form-label">
                                Currency{" "}
                                <span
                                style={{
                                    color: "red",
                                }}
                                >
                                *
                                </span>
                            </label>
                            <select
                                value={formData.currency}
                                onChange={(e) =>
                                updateField("currency", e.target.value)
                                }
                                className={`form-select py-2 ${
                                errors.currency ? "is-invalid" : ""
                                }`}
                            >
                                <option value="">Select Currency</option>
                                <option value="EGP">EGP</option>
                                <option value="USD">USD</option>
                                <option value="EUR">EUR</option>
                                <option value="SAR">SAR</option>
                            </select>
                            {errors.currency && (
                                <div className="invalid-feedback">
                                {errors.currency}
                                </div>
                            )}
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <div className="mb-3">
                            <label className="fw-semibold form-label">
                                Visit Duration{" "}
                                <span
                                style={{
                                    color: "red",
                                }}
                                >
                                *
                                </span>
                            </label>
                            <select
                                value={formData.visitDuration}
                                onChange={(e) =>
                                updateField("visitDuration", e.target.value)
                                }
                                className={`form-select py-2 ${
                                errors.visitDuration ? "is-invalid" : ""
                                }`}
                            >
                                <option value="">Select duration</option>
                                <option value="15">15 Minutes (1 Visitor)</option>
                                <option value="30">30 Minutes (1 Visitor)</option>
                                <option value="45">45 Minutes (1 Visitor)</option>
                                <option value="60">60 Minutes (1 Visitor)</option>
                            </select>
                            {errors.visitDuration && (
                                <div className="invalid-feedback">
                                {errors.visitDuration}
                                </div>
                            )}
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="mb-3">
                            <label className="fw-semibold form-label">
                                Consultation Type{" "}
                                <span
                                style={{
                                    color: "red",
                                }}
                                >
                                *
                                </span>
                            </label>
                            <select
                                value={formData.consultationType}
                                onChange={(e) =>
                                updateField("consultationType", e.target.value)
                                }
                                className={`form-select py-2 ${
                                errors.consultationType ? "is-invalid" : ""
                                }`}
                            >
                                <option value="">Select type</option>
                                <option value="all">
                                    Cur / Dig / Online / Visit
                                </option>
                                <option value="online">Online Only</option>
                                <option value="inperson">In-Person Only</option>
                            </select>
                            {errors.consultationType && (
                                <div className="invalid-feedback">
                                {errors.consultationType}
                                </div>
                            )}
                            </div>
                        </div>

                        {/* <div className="col-12 mb-3">
                            <div className="mb-3">
                            <label className="fw-semibold form-label">
                                Available Days{" "}
                                <span
                                style={{
                                    color: "red",
                                }}
                                >
                                *
                                </span>
                            </label>
                            <div className="row mt-2">
                                {Object.entries(formData.availableDays).map(
                                ([day, checked]) => (
                                    <div
                                    className="col-6 col-sm-4 col-md-3 mb-2"
                                    key={day}
                                    >
                                    <div className="form-check">
                                        <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id={`day-${day}`}
                                        checked={checked as boolean}
                                        onChange={(e) => {
                                            setFormData((prev) => ({
                                            ...prev,
                                            availableDays: {
                                                ...prev.availableDays,
                                                [day]: e.target.checked,
                                            },
                                            }));
                                            if (errors.availableDays) {
                                            setErrors((prev) => {
                                                const newErrors = {
                                                ...prev,
                                                };
                                                delete newErrors.availableDays;
                                                return newErrors;
                                            });
                                            }
                                        }}
                                        />
                                        <label
                                        className="form-check-label"
                                        htmlFor={`day-${day}`}
                                        >
                                        {day.charAt(0).toUpperCase() +
                                            day.slice(1)}
                                        </label>
                                    </div>
                                    </div>
                                )
                                )}
                            </div>
                            {errors.availableDays && (
                                <div className="alert alert-danger mt-2">
                                {errors.availableDays}
                                </div>
                            )}
                            </div>
                        </div> */}

                        <div className="col-12 mb-3">
                            <div className="mb-3">
                            <label className="fw-semibold form-label">
                                Available Timing{" "}
                                <span
                                style={{
                                    color: "red",
                                }}
                                >
                                *
                                </span>
                            </label>
                            {/* <input
                                type="text"
                                className={`form-control py-2 ${
                                errors.availableTiming ? "is-invalid" : ""
                                }`}
                                placeholder="Mon,Tue 9:00-4:00, Wed,Sat: 10:00-3:00"
                                value={formData.availableTiming}
                                onFocus={(e) => (e.target.type = "time")}
                                onChange={(e) =>
                                updateField("availableTiming", e.target.value)
                                }
                            /> */}
                            {timings.map((t, index) => (
                            <div key={index} className="d-flex gap-2 mb-2">
                                <select
                                className="form-control"
                                value={t.day}
                                onChange={(e) => updateTiming(index, "day", e.target.value)}
                                >
                                <option value="">Choose day</option>
                                <option value="Sunday">Sunday</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                </select>
                                <input
                                type="time"
                                className="form-control"
                                value={t.start}
                                onChange={(e) => {
                                    updateTiming(index, "start", e.target.value)}}
                                />
                                <input
                                type="time"
                                className="form-control"
                                value={t.end}
                                onChange={(e) => updateTiming(index, "end", e.target.value)}
                                />
                            </div>
                            ))}
                            <button className="btn btn-primary" onClick={addTiming}>Add another time</button>
                            {errors.availableTiming && (
                                <div className="invalid-feedback">
                                {errors.availableTiming}
                                </div>
                            )}
                            </div>
                        </div>
                        </div>

                        <div className="text-center mt-4">
                        <button
                            type="button"
                            className="btn btn-primary px-5 py-2 fw-semibold"
                            onClick={handleSubmitFinal}
                        >
                            Submit
                        </button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default ProfessionalInfoForm;
