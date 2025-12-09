import React, { Suspense } from "react";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Import Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home/Home";
import MainLoader from "./common/Loader/MainLoader";
import Doctors from "./pages/Doctors/Doctors";
import ChatWithAdmin from "./pages/ChatWithAdmin/ChatWithAdmin";
import DashboardLayout from "./pages/Dashboards/DashboardLayout.jsx";

import PatientDashboard from './pages/Final_Patient_Dashboard/Patient_Dashboard/PatientDashboard.jsx'
import PatientChat from './pages/Final_Patient_Dashboard/Patient_Chat/PatientChat';
import PatientProfile from './pages/Final_Patient_Dashboard/Patient_Profile/PatientProfile';
import PatientReservations from './pages/Final_Patient_Dashboard/Reservations/PatientReservations';
import DoctorDetailed from './pages/Final_Patient_Dashboard/Doctor_Detailed/DoctorDetailed';
import DoctorDirectory from './pages/Final_Patient_Dashboard/Doctors_Directory/DoctorDirectory';
import FavDoctors from './pages/Final_Patient_Dashboard/FavouriteDoctors/FavDoctors';

import DoctorDashboard from './pages/Final_Doctor_Dashboard/DoctorDashboard';
import Appointments from './pages/Final_Doctor_Dashboard/Appointment/Appointments';
import DoctorProfile from './pages/Final_Doctor_Dashboard/Doctor_Profile/DoctorProfile';
import DoctorChat from './pages/Final_Doctor_Dashboard/Doctor_Chat/DoctorChat';
import PatientDetail from './pages/Final_Doctor_Dashboard/Patient_Detailed/PatientDetail';

import { DoctorsProvider } from './context/Patient_Context/DoctorsCxtProvider.jsx'

const LoginPage = React.lazy(() => import("./pages/Login/LoginPage"));;
const RegisterPage = React.lazy(() => import("./pages/Register/RegisterPage"));
const PrivacyPolicy = React.lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const TermsAndConditions = React.lazy(() => import("./pages/TermsAndConditions/TermsAndConditions"));
const HelpCenter = React.lazy(() => import("./pages/HelpCenter/HelpCenter"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

function App() {
    const router = createBrowserRouter([
        {   
            
            element: (
                <DoctorsProvider>
                    <Layout />
                </DoctorsProvider>
            ),
            children: [
                // Home Page
                { path: "/", element: <Home /> },
                // Login Page
                {
                    path: "/login",
                    element: (
                        <Suspense fallback={<MainLoader />}>
                            <LoginPage /> 
                        </Suspense>
                    ),
                },

                {
                    path: "/register",
                    element: (
                        <Suspense fallback={<MainLoader />}>
                            <RegisterPage />
                        </Suspense>
                    ),
                },

                // Doctors Page
                {
                    path: "/doctors",
                    element: (
                        <Suspense fallback={<MainLoader />}>
                            <Doctors />
                        </Suspense>
                    ),
                },
                // Chat With Admin Page
                {
                    path: "/chat-with-admin",
                    element: (
                        <Suspense fallback={<MainLoader />}>
                            <ChatWithAdmin />
                        </Suspense>
                    ),
                },

                // Privacy Policy Page
                {
                    path: "/privacy",
                    element: (
                        <Suspense fallback={<MainLoader />}>
                            <PrivacyPolicy />
                        </Suspense>
                    ),
                },

                // Terms & Conditions Page
                {
                    path: "/terms",
                    element: (
                        <Suspense fallback={<MainLoader />}>
                            <TermsAndConditions />
                        </Suspense>
                    ),
                },
                // Help Center Page
                {
                    path: "/help",
                    element: (
                        <Suspense fallback={<MainLoader />}>
                            <HelpCenter />
                        </Suspense>
                    ),
                },
                // Patient Dashboard
                {
                    path: "*",
                    element: (
                        <Suspense fallback={<MainLoader />}>
                            <NotFound />
                        </Suspense>
                    ),
                },

                {
                    path: "/patient", 
                    element: <DashboardLayout />, // سيتم تحميل التخطيط الداخلي هنا
                    children: [
                        { path: "dashboard", element: <PatientDashboard /> },
                        { path: "patientprofile", element: <PatientProfile /> },
                        { path: "patientchat", element: <PatientChat /> },
                        { path: "patientreservations", element: <PatientReservations /> },
                        { path: "doctordetailed/:doctorId", element: <DoctorDetailed /> },
                        { path: "doctordirectory", element: <DoctorDirectory /> },
                        { path: "favdoctors", element: <FavDoctors /> }
                    ],
                },

                {
                    path: "/doctor", 
                    element: <DashboardLayout />, // سيتم تحميل التخطيط الداخلي هنا
                    children: [
                        { path: "dashboard", element: <DoctorDashboard /> },
                        { path: "profile", element: <DoctorProfile /> },
                        { path: "chat", element: <DoctorChat /> },
                        { path: "patient/:patientID", element: <PatientDetail /> },
                        { path: "appointments", element: <Appointments /> },
                    ],
                },
            ],
        },
    ]);
    return(
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    );
}

export default App;