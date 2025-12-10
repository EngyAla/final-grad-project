// import OtpForm from "../OtpForm/OtpForm";
import { useCallback } from "react";
import PatientPersonalInfoForm from "../PersonalInfoForm/PatientPersonalInformation ";
import PatientMedicalInfoForm from "../MedicalInfoForm/MedicalInfoForm";
// import SuccessForm from "../SuccessForm/SuccessForm";

interface PatientRegisterProps {
    formData: any;
    setFormData: (formData: any) => void;
    errors: any;
    setErrors: (errors: any) => void;
    updateField: (field: string, value: string | boolean) => void;
    validateRegister: () => boolean;
    validateOtp: () => boolean;
    validatePersonalInfo: () => boolean;
    validateMedicalInfo: () => boolean;
    setCurrentStep: (step: string) => void;
    currentStep: string;
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

const PatientRegister = ({
    formData,
    setFormData,
    errors,
    setErrors,
    updateField,
    // validateOtp,
    validatePersonalInfo,
    validateMedicalInfo,
    currentStep,
    setCurrentStep,
    // otpTime,
    // setOtpTime,
    // showResendMessage,
    // setShowResendMessage,
    // profileImage,
    // setProfileImage,
    profileImagePreview,
    setProfileImagePreview,
    fileInputRef,
}: PatientRegisterProps) => {

    // OTP handlers
    // const handleOtpChange = (index: number, value: string) => {
    //     if (value.length <= 1 && /^\d*$/.test(value)) {
    //         const newOtp = [...formData.otp];
    //         newOtp[index] = value;
    //         setFormData((prev) => ({ ...prev, otp: newOtp }));

    //         if (value && index < 3) {
    //             setTimeout(() => {
    //                 const next = document.getElementById(`otp-${index + 1}`);
    //                 next?.focus();
    //             }, 0);
    //         }
    //     }
    // };

    // const handleOtpKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === "Backspace" && !formData.otp[index] && index > 0) {
    //         const prev = document.getElementById(`otp-${index - 1}`);
    //         prev?.focus();
    //     }
    // };

    // const handleResendOtp = () => {
    //     setOtpTime(120);
    //     setShowResendMessage(true);
    //     setFormData((prev) => ({ ...prev, otp: ["", "", "", ""] }));
    // };

    // const formatTime = (sec: number) => {
    //     const m = Math.floor(sec / 60);
    //     const s = sec % 60;
    //     return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    // };

    // Image upload
    // const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const file = event.target.files?.[0];
    //     if (!file) return;

    //     if (!file.type.match("image.*")) {
    //         alert("Upload a valid image");
    //         return;
    //     }
    //     if (file.size > 2 * 1024 * 1024) {
    //         alert("Image must be less than 2MB");
    //         return;
    //     }

    //     setProfileImage(file);
    //     const reader = new FileReader();
    //     reader.onload = (e) => setProfileImagePreview(e.target?.result as string);
    //     reader.readAsDataURL(file);
    // };

    // const triggerFileInput = () => {
    //     fileInputRef.current?.click();
    // };

    
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
            {/* {currentStep === "otp" && (
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
                    setErrors={setErrors}
                />
            )} */}

            {currentStep === "personalInfo" && (
                <PatientPersonalInfoForm
                    formData={formData}
                    updateField={updateField}
                    errors={errors}
                    setErrors={setErrors}
                    validatePersonalInfo={validatePersonalInfo}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                    triggerFileInput={triggerFileInput}
                    profileImagePreview={profileImagePreview}
                    fileInputRef={fileInputRef}
                    handleImageUpload={handleImageUpload}
                />
            )}

            {currentStep === "medicalInfo" && (
                <PatientMedicalInfoForm
                    formData={formData}
                    updateField={updateField}
                    errors={errors}
                    setErrors={setErrors}
                    validateMedicalInfo={validateMedicalInfo}
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                />
            )}

            {/* {currentStep === "success" && (
                <SuccessForm
                    setFormData={setFormData}
                    setCurrentStep={setCurrentStep}
                    setErrors={setErrors}
                    setProfileImagePreview={setProfileImagePreview}
                    setProfileImage={setProfileImage}
                />
            )} */}
        </>
    );
};

export default PatientRegister;
