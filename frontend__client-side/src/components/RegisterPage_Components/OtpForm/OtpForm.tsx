import React from "react";
import MainPageHeading from "../../Headings/MainPageHeading/MainPageHeading";

interface OtpFormProps {
    formData: any;
    errors: any;
    setErrors: (errors: any) => void;
    showResendMessage: boolean;
    handleOtpChange: (index: number, value: string) => void;
    handleOtpKeyDown: (
        index: number,
        e: React.KeyboardEvent<HTMLInputElement>
    ) => void;
    handleResendOtp: () => void;
    setCurrentStep: (step: string) => void;
    validateOtp: () => boolean;
    formatTime: (time: number) => string;
    otpTime: number;
}

const OtpForm = ({
    formData,
    showResendMessage,
    handleOtpChange,
    handleOtpKeyDown,
    errors,
    handleResendOtp,
    otpTime,
    formatTime,
    validateOtp,
    setCurrentStep,
    setErrors,
}: OtpFormProps) => {
    const handleOTPSubmission = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("otp submission");
        
        if (validateOtp()) {
            // check otp correctness via api => if not correct, set errors and return
            setCurrentStep("personalInfo");
            setErrors({});
        }
    };

    return (
        <div
            className="min-vh-100 bg-light d-flex align-items-center justify-content-center w-100"
            style={{ minHeight: "100vh" }}
        >
            <div className="w-100">
                <MainPageHeading title="OTP Verification" />
                <div
                    className="d-flex align-items-center justify-content-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div className="w-100 justify-content-center">
                        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto">
                            <div
                                className="card shadow border-0 w-100"
                                style={{ maxWidth: "500px", margin: "0 auto" }}
                            >
                                <div className="card-body p-4 p-md-5">
                                    <div className="text-center mb-4">
                                        <p className="text-muted">
                                            Enter the OTP sent to{" "}
                                            <span className="fw-semibold">
                                                {formData.email}
                                            </span>
                                        </p>
                                    </div>

                                    {showResendMessage && (
                                        <div className="alert alert-success text-center">
                                            تم إرسال كود OTP جديد بنجاح
                                        </div>
                                    )}

                                    <div className="d-flex justify-content-center gap-3 mb-4">
                                        {formData.otp.map((digit, index) => (
                                            <input
                                                key={index}
                                                id={`otp-${index}`}
                                                type="text"
                                                maxLength={1}
                                                value={digit}
                                                onChange={(e) =>
                                                    handleOtpChange(
                                                        index,
                                                        e.target.value
                                                    )
                                                }
                                                onKeyDown={(e) =>
                                                    handleOtpKeyDown(index, e)
                                                }
                                                className="form-control text-center fw-bold"
                                                style={{
                                                    width: "60px",
                                                    height: "60px",
                                                    fontSize: "1.5rem",
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {errors.otp && (
                                        <div className="alert alert-danger text-center">
                                            {errors.otp}
                                        </div>
                                    )}

                                    <div className="text-center mb-4">
                                        <p className="text-muted mb-1">
                                            You did not receive a code?{" "}
                                            <button
                                                type="button"
                                                className="btn btn-link p-0 text-primary text-decoration-none"
                                                onClick={handleResendOtp}
                                                disabled={otpTime > 0}
                                            >
                                                Resend
                                            </button>
                                        </p>
                                        <p className="text-muted small">
                                            {otpTime > 0
                                                ? formatTime(otpTime)
                                                : "00:00"}{" "}
                                            Sec
                                        </p>
                                    </div>

                                    <button
                                        type="button"
                                        className="btn btn-primary w-100 py-2 fw-semibold"
                                        onClick={handleOTPSubmission}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OtpForm;
