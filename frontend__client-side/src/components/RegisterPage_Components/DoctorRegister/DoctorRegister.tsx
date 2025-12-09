import { useCallback } from "react";
import OtpForm from "../OtpForm/OtpForm";
import PersonalInfoForm from "../PersonalInfoForm/PersonalInfoForm";
import SuccessForm from "../SuccessForm/SuccessForm";
import ProfessionalInfoForm from "../ProfessionalInfoForm/ProfessionalInfoForm";

interface DoctorRegisterProps {
    formData: any;
    setFormData: (formData: any) => void;
    errors: any;
    setErrors: (errors: any) => void;
    updateField: (field: string, value: string | boolean) => void;
    validateRegister: () => boolean;
    validateOtp: () => boolean;
    validatePersonalInfo: () => boolean;
    validateProfessionalInfo: () => boolean;
    setCurrentStep: (step: string) => void;
    currentStep: string;
    accountType: string;
    setAccountType: (type: string) => void;
    setShowPassword: (show: boolean) => void;
    showConfirmPassword: boolean;
    showPassword: boolean;
    setShowConfirmPassword: (show: boolean) => void;
    otpTime: number;
    setOtpTime: (time: number) => void;
    showResendMessage: boolean;
    setShowResendMessage: (show: boolean) => void;
    profileImage: File | null;
    setProfileImage: (image: File | null) => void;
    profileImagePreview: string | null;
    setProfileImagePreview: (preview: string | null) => void;
    fileInputRef: React.RefObject<HTMLInputElement>;
    handleSubmitFinal: () => Promise<void>;
}

const DoctorRegister = ({
    formData,
    setFormData,
    errors,
    setErrors,
    updateField,
    // validateRegister,
    validateOtp,
    validatePersonalInfo,
    validateProfessionalInfo,
    setCurrentStep,
    currentStep,
    // accountType,
    // setAccountType,
    // setShowPassword,
    // showConfirmPassword,
    // showPassword,
    // setShowConfirmPassword,
    otpTime,
    setOtpTime,
    showResendMessage,
    setShowResendMessage,
    // profileImage,
    setProfileImage,
    profileImagePreview,
    setProfileImagePreview,
    fileInputRef,
}: DoctorRegisterProps) => {
    // OTP handling functions
    const handleOtpChange = useCallback(
        (index: number, value: string) => {
            if (value.length <= 1 && /^\d*$/.test(value)) {
                const newOtp = [...formData.otp];
                newOtp[index] = value;
                setFormData((prev) => ({ ...prev, otp: newOtp }));

                if (value && index < 3) {
                    setTimeout(() => {
                        const nextInput = document.getElementById(
                            `otp-${index + 1}`
                        );
                        if (nextInput) nextInput.focus();
                    }, 0);
                }
            }
        },
        [formData.otp, setFormData]
    );

    const handleOtpKeyDown = useCallback(
        (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
                const prevInput = document.getElementById(`otp-${index - 1}`);
                if (prevInput) prevInput.focus();
            }
        },
        [formData.otp]
    );

    const handleResendOtp = useCallback(() => {
        setOtpTime(120);
        setShowResendMessage(true);

        setFormData((prev) => ({ ...prev, otp: ["", "", "", ""] }));

        // Apply the sendOTP() [you find it in RegisterPage]

        setTimeout(() => {
            const firstInput = document.getElementById("otp-0");
            if (firstInput) firstInput.focus();
        }, 0);
    }, [setFormData, setOtpTime, setShowResendMessage]);

    const formatTime = useCallback((seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins.toString().padStart(2, "0")}:${secs
            .toString()
            .padStart(2, "0")}`;
    }, []);

    // Image upload handling
    // const handleImageUpload = useCallback(
    //     (event: React.ChangeEvent<HTMLInputElement>) => {
    //         const file = event.target.files?.[0];
    //         if (file) {
    //             if (!file.type.match("image.*")) {
    //                 alert("الرجاء اختيار ملف صورة فقط");
    //                 return;
    //             }

    //             if (file.size > 2 * 1024 * 1024) {
    //                 alert("حجم الصورة يجب أن يكون أقل من 2MB");
    //                 return;
    //             }

    //             setProfileImage(file);
    //             setFormData((prev) => ({
    //                 ...prev,
    //                 profileImage: file,   
    //             }));

    //             const reader = new FileReader();
    //             reader.onload = (e) => {
    //                 setProfileImagePreview(e.target?.result as string);
    //             };
    //             reader.readAsDataURL(file);
    //         }
    //     },
    //     [setProfileImage, setProfileImagePreview, setFormData]
    // );

    const handleImageUpload = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

        // تحقق من نوع الملف
        if (!file.type.startsWith("image/")) {
            alert("الرجاء اختيار ملف صورة فقط");
            return;
        }

        // تحقق من الحجم
        if (file.size > 2 * 1024 * 1024) {
            alert("حجم الصورة يجب أن يكون أقل من 2MB");
            return;
        }

        // تحويل الصورة إلى Base64
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result as string;

            // تخزين Base64 في formData
            setFormData((prev) => ({
                ...prev,
                profileImage: base64String,
            }));

            // عرض المعاينة في UI
            setProfileImagePreview(base64String);
        };
        reader.readAsDataURL(file);
    },
    [setFormData, setProfileImagePreview]
    );

    const triggerFileInput = useCallback(() => {
        fileInputRef.current?.click();
    }, [fileInputRef]);

    return (
        <>
            {/* ========= OTP Step ========= */}
            {currentStep === "otp" && (
                <OtpForm
                    formData={formData}
                    showResendMessage={showResendMessage}
                    handleOtpChange={handleOtpChange}
                    handleOtpKeyDown={handleOtpKeyDown}
                    errors={errors}
                    handleResendOtp={handleResendOtp}
                    otpTime={otpTime}
                    formatTime={formatTime}
                    validateOtp={validateOtp}
                    setCurrentStep={setCurrentStep}
                    setErrors={(errors: any) => setErrors(errors)}
                />
            )}

            {/* ========= Personal Info Step ========= */}
            {currentStep === "personalInfo" && (
                <PersonalInfoForm
                    formData={formData}
                    updateField={updateField}
                    errors={errors}
                    setErrors={(errors: any) => setErrors(errors)}
                    validatePersonalInfo={validatePersonalInfo}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                    triggerFileInput={triggerFileInput}
                    profileImagePreview={profileImagePreview}
                    fileInputRef={fileInputRef}
                    // profileImage={profileImage}
                    handleImageUpload={handleImageUpload}
                />
            )}

            {/* ========= Professional Info Step ========= */}
            {currentStep === "professionalInfo" && (
                <ProfessionalInfoForm
                    formData={formData}
                    updateField={updateField}
                    errors={errors}
                    setFormData={setFormData}
                    setErrors={setErrors}
                    validateProfessionalInfo={validateProfessionalInfo}
                    setCurrentStep={setCurrentStep}
                />
            )}

            {/* ========= Success Step ========= */}
            {currentStep === "success" && (
                <SuccessForm
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                    setErrors={setErrors}
                    setProfileImagePreview={setProfileImagePreview}
                    setProfileImage={setProfileImage}
                />
            )}
        </>
    );
};

export default DoctorRegister;