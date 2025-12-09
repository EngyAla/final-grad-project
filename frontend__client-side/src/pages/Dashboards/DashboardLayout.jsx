    import './dashboardLayout.css'
    import '../../styles/variables.css'

    import { Layout } from 'antd';
    import { useState } from 'react';
    import { Navigate, Outlet } from 'react-router-dom';

    import Footer from '../../components/Dashboard_Components/Footer/Footer'; 
    import NavBar from '../../components/Dashboard_Components/NavBar/NavBar'; 
    import SideBar from '../../components/Dashboard_Components/SideBar/SideBar';

    import DocAppointmentsCtxProvider from '../../context/Doctor_Context/DocAppointmentsCtxProvider';
    import ProfileCtxProvider from '../../context/ProfileCtxProvider';
    import FavouriteContextProvider from '../../context/Patient_Context/AddToFavCtxProvider';
    import { DoctorsProvider } from '../../context/Patient_Context/DoctorsCxtProvider';
    import AppointmentsCtxProvider from '../../context/Patient_Context/AppointmentsContextProvider';
    import { useAuth } from '../../context/AuthContext';



    const { Content } = Layout;

    function DashboardLayout() {

    const { isLoggedIn, userType } = useAuth();

    const [collapsed, setCollapsed] = useState(false);
    const toggleCollapsed = () => setCollapsed(!collapsed);

    // ----------------------------------------
    // 1- (Authentication)
    // ----------------------------------------
    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    // ----------------------------------------
    // 2- (Authorization)
    // ----------------------------------------
    const path = window.location.pathname;

    // منع المريض من دخول مسارات الدكتور
    if (userType === 'patient' && path.startsWith('/doctor')) {
        return <Navigate to="/patient/dashboard" replace />;
    }

    // منع الدكتور من دخول مسارات المريض
    if (userType === 'doctor' && path.startsWith('/patient')) {
        return <Navigate to="/doctor/dashboard" replace />;
    }

    return (
        <>
            <Layout style={{ minHeight: '100vh' }}>
            <SideBar collapsed={collapsed} userType={userType}/>
            <Layout className="site-layout">
                <ProfileCtxProvider>
                <NavBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
                <DoctorsProvider>
                    <FavouriteContextProvider>
                    <AppointmentsCtxProvider>
                        <DocAppointmentsCtxProvider>
                        <Content className="app_content">
                            <Outlet />
                        </Content>
                        </DocAppointmentsCtxProvider>
                    </AppointmentsCtxProvider>
                    </FavouriteContextProvider>
                </DoctorsProvider>
                </ProfileCtxProvider>
                <Footer />
            </Layout>
            </Layout>
        </>
    );
    }

    export default DashboardLayout;