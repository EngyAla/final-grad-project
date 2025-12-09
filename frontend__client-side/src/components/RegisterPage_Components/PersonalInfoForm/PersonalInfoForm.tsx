// import MainPageHeading from "../../Headings/MainPageHeading/MainPageHeading";
import InfoProgressIndicator from "./InfoProgressIndicator/InfoProgressIndicator";

interface PersonalInfoFormProps {
    formData: any;
    errors: any;
    updateField: (field: string, value: string) => void;
    setErrors: (errors: any) => void;
    validatePersonalInfo: () => boolean;
    setFormData: (formData: any) => void;
    setCurrentStep: (step: string) => void;
    triggerFileInput: () => void;
    profileImagePreview: any;
    fileInputRef: any;
    handleImageUpload: (event: any) => void;
}

const PersonalInfoForm = ({
    formData,
    updateField,
    errors,
    setErrors,
    validatePersonalInfo,
    setFormData,
    setCurrentStep,
    triggerFileInput,
    profileImagePreview,
    fileInputRef,
    handleImageUpload,
    // profileImage,
}: PersonalInfoFormProps) => {
    return (
        <div
            className="min-vh-100 bg-light d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100">
                <InfoProgressIndicator
                role="doctor"
                currentStep="personalInfo" />
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
                                <div className="text-center mb-4">
                                    <div className="position-relative d-inline-block">
                                        <div
                                            className="rounded-circle bg-secondary d-flex align-items-center justify-content-center mx-auto overflow-hidden"
                                            style={{
                                                width: "120px",
                                                height: "120px",
                                            }}
                                        >
                                            {profileImagePreview ? (
                                                <img
                                                    src={profileImagePreview}
                                                    alt="Profile"
                                                    className="w-100 h-100 object-fit-cover"
                                                />
                                            ) : (
                                                <div className="text-white fs-1">
                                                    <i className="fas fa-user"></i>
                                                </div>
                                            )}
                                        </div>
                                        <button
                                            type="button"
                                            className="btn btn-primary rounded-circle position-absolute bottom-0 end-0 d-flex align-items-center justify-content-center"
                                            style={{
                                                width: "40px",
                                                height: "40px",
                                            }}
                                            onClick={triggerFileInput}
                                        >
                                            <i className="fas fa-camera"></i>
                                        </button>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            style={{ display: "none" }}
                                        />
                                    </div>
                                    <p className="text-muted mt-2">
                                        Upload Your Photo
                                    </p>
                                </div>

                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    First Name{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control py-2 ${
                                                        errors.firstName
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    placeholder="First Name"
                                                    value={formData.firstName}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "firstName",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.firstName && (
                                                    <div className="invalid-feedback">
                                                        {errors.firstName}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    Last Name{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control py-2 ${
                                                        errors.lastName
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    placeholder="Last Name"
                                                    value={formData.lastName}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "lastName",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.lastName && (
                                                    <div className="invalid-feedback">
                                                        {errors.lastName}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    Age{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="number"
                                                    className={`form-control py-2 ${
                                                        errors.age
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    placeholder="Age"
                                                    value={formData.age}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "age",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.age && (
                                                    <div className="invalid-feedback">
                                                        {errors.age}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    Gender{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>
                                                </label>
                                                <select
                                                    className={`form-select py-2 ${
                                                        errors.gender
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    value={formData.gender}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "gender",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Gender
                                                    </option>
                                                    <option value="male">
                                                        Male
                                                    </option>
                                                    <option value="female">
                                                        Female
                                                    </option>
                                                </select>
                                                {errors.gender && (
                                                    <div className="invalid-feedback">
                                                        {errors.gender}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    Phone Number{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="tel"
                                                    className={`form-control py-2 ${
                                                        errors.phoneNumber
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    placeholder="Phone Number"
                                                    value={formData.phoneNumber}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "phoneNumber",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.phoneNumber && (
                                                    <div className="invalid-feedback">
                                                        {errors.phoneNumber}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    Website
                                                </label>
                                                <input
                                                    type="url"
                                                    className="form-control py-2"
                                                    placeholder="Website"
                                                    value={formData.website}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "website",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    Address{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>
                                                </label>
                                                <textarea
                                                    className={`form-control py-2 ${
                                                        errors.address
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    placeholder="Address"
                                                    rows={3}
                                                    value={formData.address}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "address",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.address && (
                                                    <div className="invalid-feedback">
                                                        {errors.address}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    Country{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>
                                                </label>
                                                <select
                                                    className={`form-select py-2 ${
                                                        errors.country
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    value={formData.country}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "country",
                                                            e.target.value
                                                        )
                                                    }
                                                >
                                                    <option value="">
                                                        Select Country
                                                    </option>
                                                    <option value="egypt">
                                                        Egypt
                                                    </option>
                                                    <option value="usa">
                                                        USA
                                                    </option>
                                                    <option value="uk">
                                                        UK
                                                    </option>
                                                    <option value="canada">
                                                        Canada
                                                    </option>
                                                </select>
                                                {errors.country && (
                                                    <div className="invalid-feedback">
                                                        {errors.country}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <div className="mb-3">
                                                <label className="fw-semibold form-label">
                                                    National ID{" "}
                                                    <span
                                                        style={{ color: "red" }}
                                                    >
                                                        *
                                                    </span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control py-2 ${
                                                        errors.nationalId
                                                            ? "is-invalid"
                                                            : ""
                                                    }`}
                                                    placeholder="National ID"
                                                    value={formData.nationalId}
                                                    onChange={(e) =>
                                                        updateField(
                                                            "nationalId",
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                                {errors.nationalId && (
                                                    <div className="invalid-feedback">
                                                        {errors.nationalId}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                    <div className="text-center mt-4">
                                        <button
                                            type="button"
                                            className="btn btn-primary px-5 py-2 fw-semibold"
                                            onClick={() => {
                                                if (validatePersonalInfo()) {
                                                    setFormData((prev) => ({
                                                        ...prev,
                                                        personalInfoCompleted:
                                                            true,
                                                    }));
                                                    setCurrentStep(
                                                        "professionalInfo"
                                                    );
                                                setErrors({});
                                                }
                                                }}
                                            >
                                            Continue to Professional Information
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

export default PersonalInfoForm;
