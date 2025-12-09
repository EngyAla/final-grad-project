// Icons replaced with emojis

import { NavLink } from "react-router-dom";
import successAccount from '../../../../public/accountSuccess.svg'

interface SuccessFormProps {
    setCurrentStep: (step: string) => void;
    setFormData: (formData: any) => void;
    setProfileImage: (image: any) => void;
    setProfileImagePreview: (preview: any) => void;
    setErrors: (errors: any) => void;
}

const SuccessForm = ({
    // setFormData,
    // setCurrentStep,
    // setErrors,
    // setProfileImagePreview,
    // setProfileImage,
}: SuccessFormProps) => 
    
    {
    return (
        <div
            className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-3"
            style={{ minHeight: "100vh" }}
        >
            <div
                className="d-flex align-items-center justify-content-center"
                style={{ minHeight: "100vh" }}
            >
                <div className="w-100 justify-content-center">
                    <div className="col-12 col-lg-8 col-xl-6">
                        <div
                            className="card shadow border-0"
                            style={{ width: "550px" }}
                        >
                            <div className="card-body p-4">
                                <div className="mb-4">
                                    <div className=" d-flex align-items-center justify-content-center mx-auto mb-5 mt-5">
                                        <span>
                                            {/* <i className="fas fa-check"></i> */}
                                            <img src={successAccount} alt="" width={300}/>
                                        </span>
                                    </div>
                                    <h2 className="fw-bold text-dark mb-3 text-center">
                                        Account Submitted Successfully
                                    </h2>
                                    <p className="text-muted mb-0 text-center">
                                        Thank you for registering with Clinica. Your account has been submitted and is pending review by our admin team.
                                        You will receive an email once your account is verified.
                                    </p>
                                    <NavLink to={"/login"}>
                                        <p style={{ textDecoration: "none", textAlign: "center", marginTop: "20px"}}>View Your Dashboard!</p>
                                    </NavLink>
                                </div>

                                {/* <div className="text-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary px-5 py-2 fw-semibold mb-4"
                                        onClick={() => {
                                            // setCurrentStep("register");
                                            setFormData({
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
                                                availableDays: {
                                                    sunday: false,
                                                    monday: false,
                                                    tuesday: false,
                                                    wednesday: false,
                                                    thursday: false,
                                                    friday: false,
                                                    saturday: false,
                                                },
                                                availableTiming: "",
                                                personalInfoCompleted: false,
                                                professionalInfoCompleted:
                                                    false,
                                            });
                                            setProfileImage(null);
                                            setProfileImagePreview(null);
                                            setErrors({});
                                        }}
                                    >
                                        <NavLink to={"/login"} style={{color: "#fff", textDecoration: "none"}}>
                                            Login Now!
                                        </NavLink>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessForm;
