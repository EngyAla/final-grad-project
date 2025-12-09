    // import { NavLink } from "react-router-dom";
    import { NavLink } from "react-router";
import MainPageHeading from "../Headings/MainPageHeading/MainPageHeading";

    interface RegisterFormProps {
    formData: any;
    errors: any;
    setErrors: (errors: any) => void;
    updateField: (field: string, value: string | boolean) => void;
    validateRegister: () => boolean;
    accountType: string;
    setAccountType: (type: string) => void;
    setShowPassword: (show: boolean) => void;
    showConfirmPassword: boolean;
    showPassword: boolean;
    setShowConfirmPassword: (show: boolean) => void;
    setFormSubmitted: (submitted: boolean) => void;
    }

    const RegisterForm = ({
    formData,
    errors,
    updateField,
    setAccountType,
    setErrors,
    showPassword,
    accountType,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    validateRegister,
    setFormSubmitted,
    }: RegisterFormProps) => {
    const handleAccountTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setAccountType(e.target.value);
        setErrors({ ...errors, accountType: "" });
    };

    // Password validation helper function
    const getPasswordValidationMessage = (password: string) => {
        if (!password) return "";

        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) {
        return `Password must be at least ${minLength} characters long`;
        } else if (!hasUpperCase) {
        return "Password must contain at least one uppercase letter";
        } else if (!hasLowerCase) {
        return "Password must contain at least one lowercase letter";
        } else if (!hasNumbers) {
        return "Password must contain at least one number";
        } else if (!hasSpecialChar) {
        return 'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)';
        }
        return ""; // Password is valid
    };

    return (
        <div
        className="min-vh-100 bg-light d-flex align-items-center justify-content-center w-100"
        style={{ minHeight: "100vh" }}
        >
        <div className="w-100">
            <MainPageHeading title="Start your journey with Clinica!" />
            <div
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
            >
            <div className="w-100 justify-content-center p-3 py-5">
                <div
                className="col-12 mx-auto"
                style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                <div className="card shadow border-0 w-100">
                    <div className="card-body p-4 p-md-5">
                    <form>
                        <div className="mb-4">
                        <label className="fw-semibold form-label">
                            Account type <span style={{ color: "red" }}>*</span>
                        </label>
                        <select
                            value={accountType}
                            onChange={handleAccountTypeChange}
                            className={`form-select py-2 ${
                            errors.accountType ? "is-invalid" : ""
                            }`}
                        >
                            <option value="">Select account type</option>
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                        </select>
                        {errors.accountType && (
                            <div className="invalid-feedback">
                            {errors.accountType}
                            </div>
                        )}
                        </div>

                        <div className="mb-4">
                        <label className="fw-semibold form-label">
                            Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input
                            type="email"
                            className={`form-control py-2 ${
                            errors.email ? "is-invalid" : ""
                            }`}
                            placeholder="example@gmail.com"
                            value={formData.email}
                            onChange={(e) => updateField("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="invalid-feedback">{errors.email}</div>
                        )}
                        </div>

                        <div className="mb-4">
                        <label className="fw-semibold form-label">
                            Password <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="position-relative">
                            <input
                            type={showPassword ? "text" : "password"}
                            className={`form-control py-2 pe-5 ${
                                errors.password ? "is-invalid" : ""
                            }`}
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={(e) =>
                                updateField("password", e.target.value)
                            }
                            />
                            <button
                            type="button"
                            className="btn btn-link position-absolute top-50 end-0 translate-middle-y p-0 me-3 text-muted"
                            onClick={() => setShowPassword(!showPassword)}
                            >
                            <i
                                className={`fas ${
                                showPassword ? "fa-eye-slash" : "fa-eye"
                                }`}
                            ></i>
                            </button>
                        </div>
                        {errors.password && (
                            <div className="invalid-feedback">
                            {errors.password}
                            </div>
                        )}
                        {/* Real-time password validation feedback */}
                        {formData.password &&
                            !errors.password &&
                            getPasswordValidationMessage(formData.password) && (
                            <div className="text-danger small mt-1">
                                <i className="fas fa-exclamation-triangle me-1"></i>
                                {getPasswordValidationMessage(formData.password)}
                            </div>
                            )}
                        {/* Password strength indicator */}
                        {formData.password &&
                            !getPasswordValidationMessage(formData.password) && (
                            <div className="text-success small mt-1">
                                <i className="fas fa-check-circle me-1"></i>
                                Password meets all requirements
                            </div>
                            )}
                        {/* Password requirements hint */}
                        {!formData.password && (
                            <div className="text-muted small mt-1">
                            <i className="fas fa-info-circle me-1"></i>
                            Password must contain: 8+ characters, uppercase,
                            lowercase, number, and special character
                            </div>
                        )}
                        </div>

                        <div className="mb-4">
                        <label className="fw-semibold form-label">
                            Confirm password <span style={{ color: "red" }}>*</span>
                        </label>
                        <div className="position-relative">
                            <input
                            type={showConfirmPassword ? "text" : "password"}
                            className={`form-control py-2 pe-5 ${
                                errors.confirmPassword ? "is-invalid" : ""
                            }`}
                            placeholder="Enter your password"
                            value={formData.confirmPassword}
                            onChange={(e) =>
                                updateField("confirmPassword", e.target.value)
                            }
                            />
                            <button
                            type="button"
                            className="btn btn-link position-absolute top-50 end-0 translate-middle-y p-0 me-3 text-muted"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                            >
                            <i
                                className={`fas ${
                                showConfirmPassword ? "fa-eye-slash" : "fa-eye"
                                }`}
                            ></i>
                            </button>
                        </div>
                        {errors.confirmPassword && (
                            <div className="invalid-feedback">
                            {errors.confirmPassword}
                            </div>
                        )}
                        </div>

                        <div className="mb-4 mt-4">
                        <div className="form-check cursor-pointer">
                            <input
                            className={`form-check-input cursor-pointer ${
                                errors.agreeTerms ? "is-invalid" : ""
                            }`}
                            type="checkbox"
                            checked={formData.agreeTerms}
                            onChange={(e) =>
                                updateField("agreeTerms", e.target.checked)
                            }
                            id="agreeTerms"
                            />
                            <label
                            className="form-check-label text-muted font-small cursor-pointer"
                            htmlFor="agreeTerms"
                            >
                            I agree to the terms, privacy and fee policy, and
                            confirm processing and storage of personal data in
                            Egypt
                            </label>
                        </div>
                        {errors.agreeTerms && (
                            <div className="invalid-feedback">
                            {errors.agreeTerms}
                            </div>
                        )}
                        </div>

                        <button
                        type="button"
                        className="btn btn-primary w-100 py-2 fw-semibold mb-4"
                        onClick={() => {
                            if (validateRegister()) {
                            // Set the account type and mark form as submitted
                            setAccountType(accountType);
                            setFormSubmitted(true);
                            setErrors({});
                            localStorage.clear();
                            }
                        }}
                        >
                        Create account
                        </button>

                        <div className="text-center">
                        <p className="text-muted mb-0 d-flex gap-1 flex-wrap align-items-center justify-content-center">
                            <span>Already have an account?</span>
                            <NavLink
                            to="/login"
                            className="text-primary text-decoration-none fw-semibold"
                            >
                            Login now
                            </NavLink>
                        </p>
                        </div>
                    </form>

                    <div className="text-center text-muted font-extra-small mt-4 pt-3 border-top">
                        By signing in, signing up, or continuing, you agree to terms
                        and Privacy Statement.
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
    };

    export default RegisterForm;
