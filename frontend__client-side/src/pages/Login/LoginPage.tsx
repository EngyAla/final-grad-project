import { useState } from "react";
import MainPageHeading from "../../components/Headings/MainPageHeading/MainPageHeading";
import { ToastContainer, toast } from 'react-toastify';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import API_URL from '../../config/api';

interface LoginFormData {
    email: string;
    password: string;
}

const LoginPage = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState<any>({});

    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleLogin = async () => {
        if (!validateForm()) {
            toast.error("Please fill all required fields");
            return;
        }

        try {
            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });

            const data = await response.json();
            console.log(data)

            if (!response.ok) {
                toast.error(data.msg || "Login failed");
                return;
            }

            // -----------------------------
            // ✔ الباك إند بيرجع:
            // token + user (جواه userType)
            // -----------------------------
            const token = data.token;
            const userType = data.userType;   // أهم سطر
            const userId = data.user._id;

            // -----------------------------
            // ✔ خزّن البيانات
            // -----------------------------
            localStorage.setItem("token", token);
            localStorage.setItem("userType", userType);
            localStorage.setItem("userId", userId);

            toast.success("Login successful!");

            // -----------------------------
            // ✔ رجّع البيانات لـ App.js
            // -----------------------------
            login(token, userType);
            navigate(`/${userType}/dashboard`, { replace: true });

        } catch (error) {
            toast.error("Something went wrong");
            console.error(error);
        }
    };


    return (
        <div className=" d-flex  align-items-center min-vh-100" style={{flexDirection: "column"}}>
            <ToastContainer />
            <MainPageHeading title="Welcome Back!" />
            <div className="card shadow p-5 mt-5" style={{ maxWidth: "450px", width: "100%" }}>

                {/* Email */}
                <div className="mb-4">
                    <label className="form-label fw-semibold">
                        Email{" "}
                        <span style={{ color: "red" }}>
                            *
                        </span>
                    </label>
                    <input
                        type="email"
                        placeholder="example@domain.com "
                        className={`form-control ${errors.email ? "is-invalid" : ""}`}
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                    )}
                </div>

                {/* Password */}
                <div className="mb-3">
                    <label className="form-label fw-semibold">
                        Password{" "}
                        <span style={{ color: "red" }}>
                            *
                        </span>
                    </label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className={`form-control ${errors.password ? "is-invalid" : ""}`}
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                    />
                    {errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                    )}
                </div>

                {/* Submit */}
                <div className="text-center mt-4">
                    <button className="btn btn-primary px-5 py-2 fw-semibold w-100" onClick={handleLogin}>
                        Login
                    </button>
                </div>

                {/* Register Link */}
                {/* <p className="text-center mt-3">
                    Don’t have an account?{" "}
                    <a href="/register" className="fw-semibold">
                        Create Account
                    </a>
                </p> */}
            </div>
        </div>
    );
};

export default LoginPage;