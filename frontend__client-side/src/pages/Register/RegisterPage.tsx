import { useCallback, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import RegisterForm from "../../components/RegisterPage_Components/RegisterForm";
import DoctorRegister from "../../components/RegisterPage_Components/DoctorRegister/DoctorRegister";
import PatientRegister from "../../components/RegisterPage_Components/PatientRegister/PatientRegister";
import "./RegisterPage.scss";
import { ToastContainer, toast } from 'react-toastify';
import API_URL from '../../config/api';

const RegisterPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Get step from URL or default to "register"
    const stepFromUrl = searchParams.get("step") || "register";
    const [currentStep, setCurrentStep] = useState<string>(stepFromUrl);

    // Reset flow initialization when going back to register step
    useEffect(() => {
        if (currentStep === "register") {
            setFlowInitialized(false);
        }
    }, [currentStep]);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [errors, setErrors] = useState<any>({
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: "",
        accountType: "",
        otp: "",
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        phoneNumber: "",
        address: "",
        country: "",
        nationalId: "",
        specialization: "",
        yearsExperience: "",
        feePerConsultation: "",
        currency: "",
        visitDuration: "",
        consultationType: "",
        availableDays: "",
        availableTiming: "",
    });
    const [otpTime, setOtpTime] = useState(120); // 2 minutes in seconds
    const [showResendMessage, setShowResendMessage] = useState(false);
    const [profileImage, setProfileImage] = useState<File | null>(null);
    const [profileImagePreview, setProfileImagePreview] = useState<
        string | null
    >(null);
    const fileInputRef = useRef<HTMLInputElement>(
        null
    ) as React.RefObject<HTMLInputElement>;
    const [accountType, setAccountType] = useState<string>("");
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [isUpdatingStep, setIsUpdatingStep] = useState<boolean>(false);
    const [flowInitialized, setFlowInitialized] = useState<boolean>(false);
    const lastProgrammaticStep = useRef<string>("");

    // Function to update URL with current step
    const updateUrlStep = useCallback(
        (step: string) => {
            setSearchParams({ step });
        },
        [setSearchParams]
    );

    // Function to update both state and URL
    const setCurrentStepWithUrl = useCallback(
        (step: string) => {
            console.log("setCurrentStepWithUrl called with step:", step);
            console.log("Current step before change:", currentStep);
            lastProgrammaticStep.current = step;
            setIsUpdatingStep(true);
            setCurrentStep(step);
            updateUrlStep(step);
            // Reset the flag after a longer delay to ensure URL sync doesn't interfere
            setTimeout(() => {
                setIsUpdatingStep(false);
            }, 200);
            console.log("setCurrentStepWithUrl completed");
        },
        [updateUrlStep, currentStep]
    );
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
        otp: ["", "", "", ""],
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        phoneNumber: "",
        website: "",
        address: "",
        addressOnMap: "",
        country: "",
        nationalId: "",
        specialization: "",
        yearsExperience: "",
        feePerConsultation: "",
        currency: "",
        visitDuration: "",
        consultationType: "",
        // availableDays: {
        //     sunday: false,
        //     monday: false,
        //     tuesday: false,
        //     wednesday: false,
        //     thursday: false,
        //     friday: false,
        //     saturday: false,
        // },
        availableTiming: [],
        // Medical Info (for patient)
        hasChronicDisease: null, // "" | true | false
        chronicDisease: "",
        medicalHistory: "",
        emergencyFirstName: "",
        emergencyRelationship: "",
        emergencyPhone: "",

        personalInfoCompleted: false,
        professionalInfoCompleted: false,
        medicalInfoCompleted: false
    });

    useEffect(() => {
        let timer;
        if (currentStep === "otp" && otpTime > 0) {
            timer = setInterval(() => {
                setOtpTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [currentStep, otpTime]);

    useEffect(() => {
        if (currentStep === "otp") {
            setOtpTime(120);
            setShowResendMessage(false);
        }
    }, [currentStep]);

    const sendOTP = useCallback(
        (email: string) => {
            console.log("OTP Form reached! Sending OTP to:", email);
            try {
                // Example: Send OTP to email via API
                // const response = await fetch('/api/send-otp', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json',
                //     },
                //     body: JSON.stringify({
                //         email: email,
                //         accountType: accountType
                //     })
                // });

                // if (response.ok) {
                //     console.log('OTP sent successfully');
                // } else {
                //     console.error('Failed to send OTP');
                // }

                // For now, just log the action
                console.log(
                    `OTP would be sent to ${formData.email} for ${accountType} account`
                );

                // You can add other logic here:
                // - Analytics tracking
                // - Loading states
                // - Error handling
                // - User notifications
            } catch (error) {
                console.error("Error sending OTP:", error);
            }
        },
        [formData.email, accountType]
    );

    // Handle account type selection and start appropriate flow only after form submission
    useEffect(() => {
        if (formSubmitted && accountType && !flowInitialized) {
            if (accountType === "doctor") {
                setCurrentStepWithUrl("otp"); // Start with OTP for doctors
            } else if (accountType === "patient") {
                // For patients, you might want to go directly to a different step
                // or show a different flow. For now, let's keep it simple
                setCurrentStepWithUrl("personalInfo");
            }
            setFlowInitialized(true);
        }
    }, [accountType, formSubmitted, flowInitialized, setCurrentStepWithUrl]);

    // Function to call when OTP form is reached
    const onOtpFormReached = useCallback(async () => {
        sendOTP(formData.email);
    }, [formData.email, sendOTP]);

    // Call the function when currentStep becomes "otp"
    useEffect(() => {
        if (currentStep === "otp") {
            onOtpFormReached();
        }
    }, [currentStep, onOtpFormReached]);

    // Sync URL changes with state (for browser back/forward navigation)
    useEffect(() => {
        const stepFromUrl = searchParams.get("step") || "register";
        console.log(
            "URL sync useEffect - stepFromUrl:",
            stepFromUrl,
            "currentStep:",
            currentStep,
            "isUpdatingStep:",
            isUpdatingStep,
            "lastProgrammaticStep:",
            lastProgrammaticStep.current
        );

        // Don't sync if we're currently updating the step programmatically
        // Also don't sync if the URL step matches our last programmatic step
        if (
            !isUpdatingStep &&
            stepFromUrl !== currentStep &&
            stepFromUrl !== lastProgrammaticStep.current
        ) {
            console.log("URL step different from currentStep, updating...");
            setCurrentStep(stepFromUrl);
        }
    }, [searchParams, isUpdatingStep, currentStep]); // Include currentStep but prevent loops with isUpdatingStep flag

    const updateField = useCallback(
        (field: string, value: string | boolean) => {
            setFormData((prev) => {
                const newData = { ...prev };
                newData[field] = value;
                return newData;
            });
            setErrors((prev) => {
                if (prev[field]) {
                    const newErrors = { ...prev };
                    delete newErrors[field];
                    return newErrors;
                }
                return prev;
            });
        },
        []
    );

    const validateRegister = () => {
        const newErrors: any = {};
        if (!formData.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else {
            // Enhanced password validation with specific messages
            const password = formData.password;
            const minLength = 8;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumbers = /\d/.test(password);
            const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

            if (password.length < minLength) {
                newErrors.password = `Password must be at least ${minLength} characters long`;
            } else if (!hasUpperCase) {
                newErrors.password =
                    "Password must contain at least one uppercase letter";
            } else if (!hasLowerCase) {
                newErrors.password =
                    "Password must contain at least one lowercase letter";
            } else if (!hasNumbers) {
                newErrors.password =
                    "Password must contain at least one number";
            } else if (!hasSpecialChar) {
                newErrors.password =
                    'Password must contain at least one special character (!@#$%^&*(),.?":{}|<>)';
            }
        }
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password";
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.agreeTerms) {
            newErrors.agreeTerms = "You must agree to the terms";
        }
        if (!accountType) {
            newErrors.accountType = "Account type is required";
        }

        setErrors((prev: any) => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    const validateOtp = () => {
        const newErrors: any = {};
        const otpComplete = formData.otp.every((digit) => digit !== "");

        if (!otpComplete) {
            newErrors.otp = "Please enter complete OTP code";
        }
        setErrors((prev: any) => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    const validatePersonalInfo = () => {
        const newErrors: any = {};

        if (!formData.firstName) {
            newErrors.firstName = "First Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(formData.firstName)) {
            newErrors.firstName = "First Name must contain only letters";
        }
        if (!formData.lastName) {
            newErrors.lastName = "Last Name is required";
        } else if (!/^[a-zA-Z\s]+$/.test(formData.lastName)) {
            newErrors.lastName = "Each character must be an alphabet";
        }
        if (!formData.age) {
            newErrors.age = "Age is required";
        } else if (parseInt(formData.age) < 18) {
            newErrors.age = "Age should not be less than 18";
        }
        if (!formData.gender) newErrors.gender = "Please select your gender";
        if (!formData.phoneNumber) {
            newErrors.phoneNumber = "Phone number is required";
        } else if (formData.phoneNumber.length < 10) {
            newErrors.phoneNumber = "The number must be at least 10 digits";
        }
        if (!formData.address) newErrors.address = "Address is required";
        if (!formData.country) newErrors.country = "Please select your country";
        if (!formData.nationalId) {
            newErrors.nationalId = "National ID is required";
        } else if (formData.nationalId.length < 10) {
            newErrors.nationalId = "Invalid National ID format";
        }

        setErrors((prev: any) => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    const validateProfessionalInfo = () => {
        const newErrors: any = {};

        if (!formData.specialization)
            newErrors.specialization = "Specialization is required";
        if (!formData.yearsExperience)
            newErrors.yearsExperience = "Years of experience is required";
        if (!formData.feePerConsultation) {
            newErrors.feePerConsultation = "Fee per consultation is required";
        } else if (
            isNaN(Number(formData.feePerConsultation)) ||
            Number(formData.feePerConsultation) <= 0
        ) {
            newErrors.feePerConsultation =
                "Please enter a valid positive number";
        }
        if (!formData.currency) newErrors.currency = "Currency is required";
        if (!formData.visitDuration)
            newErrors.visitDuration = "Visit duration is required";
        if (!formData.consultationType)
            newErrors.consultationType = "Consultation type is required";

        // const hasSelectedDay = Object.values(formData.availableDays).some(
        //     (day) => day
        // );
        // if (!hasSelectedDay)
        //     newErrors.availableDays =
        //         "Please select at least one available day";
        // if (!formData.availableTiming)
        //     newErrors.availableTiming = "Available timing is required";

        setErrors((prev: any) => ({ ...prev, ...newErrors }));
        return Object.keys(newErrors).length === 0;
    };

    ///////////
    const validateMedicalInfo = () => {
    const newErrors: any = {};

    if (formData.hasChronicDisease === null) {
        newErrors.hasChronicDisease = "Please select an option";
    }

    if (formData.hasChronicDisease === true) {
        if (!formData.chronicDisease || formData.chronicDisease.trim().length === 0) {
            newErrors.chronicDisease = "Chronic disease description is required";
        } else if (formData.chronicDisease.trim().length < 3) {
            newErrors.chronicDisease = "Description must be at least 3 characters";
        }
    }

    if (formData.emergencyFirstName && !/^[a-zA-Z\s]+$/.test(formData.emergencyFirstName)) {
        newErrors.emergencyFirstName = "Only letters are allowed";
    }

    if (formData.emergencyRelationship && !/^[a-zA-Z\s]+$/.test(formData.emergencyRelationship)) {
        newErrors.emergencyRelationship = "Only letters are allowed";
    }

    if (formData.emergencyPhone && formData.emergencyPhone.length < 10) {
        newErrors.emergencyPhone = "Phone number must be at least 10 digits";
    }

    // Apply errors to UI
    setErrors((prev: any) => ({ ...prev, ...newErrors }));

    // Return boolean for form submission
    return Object.keys(newErrors).length === 0;
};


    ///////////
    const handleSubmitFinal = async () => {
        try {
            const response = await fetch(`${API_URL}/api/auth/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            console.log("REGISTER RESPONSE:", data);

            if (response.ok) {
                toast.success("Account created successfully!", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                // alert("Account created successfully!");
            } else {
                toast.error(data.message || "Registration failed.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
                // alert(data.message || "Registration failed.");
            }
        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    };

    return (
        <div className="Register-Page">
            <ToastContainer />
            {/* Show RegisterForm when no accountType is selected or form not submitted */}
            {(!accountType || accountType === "" || !formSubmitted) &&
                currentStep === "register" && (
                    <RegisterForm
                        formData={formData}
                        errors={errors}
                        updateField={updateField}
                        setAccountType={setAccountType}
                        setErrors={setErrors}
                        showPassword={showPassword}
                        accountType={accountType}
                        setShowPassword={setShowPassword}
                        showConfirmPassword={showConfirmPassword}
                        setShowConfirmPassword={setShowConfirmPassword}
                        validateRegister={validateRegister}
                        setFormSubmitted={setFormSubmitted}
                    />
                )}

            {/* Show DoctorRegister when accountType is "doctor" and form submitted */}
            {accountType === "doctor" &&
                formSubmitted &&
                currentStep !== "register" && (
                    <DoctorRegister
                        formData={formData}
                        setFormData={setFormData}
                        errors={errors}
                        setErrors={setErrors}
                        updateField={updateField}
                        validateRegister={validateRegister}
                        validateOtp={validateOtp}
                        validatePersonalInfo={validatePersonalInfo}
                        validateProfessionalInfo={validateProfessionalInfo}
                        setCurrentStep={setCurrentStepWithUrl}
                        currentStep={currentStep}
                        accountType={accountType}
                        setAccountType={setAccountType}
                        setShowPassword={setShowPassword}
                        showConfirmPassword={showConfirmPassword}
                        showPassword={showPassword}
                        setShowConfirmPassword={setShowConfirmPassword}
                        otpTime={otpTime}
                        setOtpTime={setOtpTime}
                        showResendMessage={showResendMessage}
                        setShowResendMessage={setShowResendMessage}
                        profileImage={profileImage}
                        setProfileImage={setProfileImage}
                        profileImagePreview={profileImagePreview}
                        setProfileImagePreview={setProfileImagePreview}
                        fileInputRef={fileInputRef}
                        ///////
                        handleSubmitFinal={handleSubmitFinal}
                    />
                )}

            {/* Show PatientRegister when accountType is "patient" and form submitted */}
            {accountType === "patient" &&
                formSubmitted &&
                currentStep !== "register" && <PatientRegister 
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
                updateField={updateField}
                validateRegister={validateRegister}
                validateOtp={validateOtp}
                validatePersonalInfo={validatePersonalInfo}
                validateMedicalInfo={validateMedicalInfo} // Placeholder until you add medical info
                currentStep={currentStep}
                setCurrentStep={setCurrentStepWithUrl}
                otpTime={otpTime}
                setOtpTime={setOtpTime}
                showResendMessage={showResendMessage}
                setShowResendMessage={setShowResendMessage}
                profileImage={profileImage}
                setProfileImage={setProfileImage}
                profileImagePreview={profileImagePreview}
                setProfileImagePreview={setProfileImagePreview}
                fileInputRef={fileInputRef} 
                ////
                handleSubmitFinal={handleSubmitFinal}
            />}
        </div>
    );
};

export default RegisterPage;