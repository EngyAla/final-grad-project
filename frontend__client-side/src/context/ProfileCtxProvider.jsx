    import { useState, useEffect } from "react";
    import { ProfileCtx } from "./ProfileCtx";

    const ProfileCtxProvider = ({ children }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const userType = localStorage.getItem("userType");

    useEffect(() => {
        const fetchProfile = async () => {
        try {
            const token = localStorage.getItem("token");
            const endpoint =
            userType === "doctor"
                ? "http://localhost:5000/api/doctor/profile"
                : "http://localhost:5000/api/patient/profile";

            const res = await fetch(endpoint, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            });

            if (!res.ok) throw new Error("Failed to fetch profile");
            const data = await res.json();

            const saved = JSON.parse(localStorage.getItem("userStoredData")) || {};
            setUserInfo({ ...data, ...saved });
        } catch (err) {
            console.error(err);
        }
        };

        fetchProfile();
    }, [userType]);

    const handelSave = () => {
        localStorage.setItem("userStoredData", JSON.stringify(userInfo));
        setIsEditing(false);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
        setUserInfo((prev) => ({ ...prev, userImage: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <ProfileCtx.Provider
        value={{
            isEditing,
            setIsEditing,
            userInfo,
            setUserInfo,
            handelSave,
            handleImageChange,
        }}
        >
        {children}
        </ProfileCtx.Provider>
    );
    };

    export default ProfileCtxProvider;