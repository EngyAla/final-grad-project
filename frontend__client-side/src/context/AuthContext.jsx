import React, { createContext, useState, useEffect, useContext, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userType, setUserType] = useState(localStorage.getItem('userType'));
    // const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            localStorage.setItem('token', token);
            localStorage.setItem('userType', userType);
        } else {
            localStorage.removeItem('token');
            localStorage.removeItem('userType');
        }
    }, [token, userType]);


    const login = useCallback((newToken, type) => {
        setToken(newToken);
        setUserType(type);
        // navigate(`/${type}/dashboard`, { replace: true }); 
    }, []);


    const logout = useCallback(() => {
        setToken(null);
        setUserType(null);
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        localStorage.removeItem("userId");
        localStorage.removeItem("userStoredData");

        // navigate('/', { replace: true }); 
    }, []);

    const contextValue = {
        token,
        userType,
        isLoggedIn: !!token,
        login, 
        logout,
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    );
};