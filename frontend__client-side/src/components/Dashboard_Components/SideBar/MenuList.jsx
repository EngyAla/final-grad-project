import { Menu } from 'antd';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
// import ChatIcon from '@mui/icons-material/Chat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from '../../../context/AuthContext'
// @ts-ignore
import styles from './sidebar.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';



const MenuList = ({ userType }) => {
    // console.log(userType)
    const [selected, setSelected] = useState('home');
    const { logout } = useAuth();

    const saveSelectedState = (state) => {
        localStorage.setItem('selectState', state);
    };

    useEffect(() => {
        const saved = localStorage.getItem('selectState');
        if (saved) setSelected(saved);
    }, []);

    const items = [
        {
        key: 'home',
        icon: <DashboardOutlinedIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/patient/dashboard">Dashboard</Link>,
        className: selected === 'home' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'profile',
        icon: <PermIdentityIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/patient/patientprofile">Profile</Link>,
        className: selected === 'profile' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'doctorDirectory',
        icon: <SavedSearchIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/patient/doctordirectory">Doctor Directory</Link>,
        className: selected === 'doctorDirectory' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'reservations',
        icon: <EventAvailableIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/patient/patientreservations">Reservations</Link>,
        className: selected === 'reservations' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'chat',
        icon: <ChatBubbleOutlineIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/patient/patientchat">Patient Chat</Link>,
        className: selected === 'chat' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'logout',
        icon: <LogoutIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/" onClick={logout}>Logout</Link>,
        className: selected === 'logout' ? styles.menu_bar_item : styles.menu_bar_item2_logout,
        },
    ];
        const docItems = [
        {
        key: 'home',
        icon: <DashboardOutlinedIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/doctor/dashboard">Dashboard</Link>,
        className: selected === 'home' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'profile',
        icon: <PermIdentityIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/doctor/profile">Profile</Link>,
        className: selected === 'profile' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'reservations',
        icon: <EventAvailableIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/doctor/appointments">Appointments</Link>,
        className: selected === 'reservations' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'chat',
        icon: <ChatBubbleOutlineIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/doctor/chat">Doctor Chat</Link>,
        className: selected === 'chat' ? styles.menu_bar_item : styles.menu_bar_item2,
        },
        {
        key: 'logout',
        icon: <LogoutIcon style={{ fontSize: '22px' }} />,
        label: <Link to="/login" onClick={logout}>Logout</Link>,
        className: selected === 'logout' ? styles.menu_bar_item : styles.menu_bar_item2_logout,
        },
    ];

    return (
        <Menu
        theme="dark"
        className={styles.menu_bar}
        selectedKeys={[selected]}
        onClick={(e) => {
            saveSelectedState(e.key);
            setSelected(e.key);
        }}
        items={ userType === "patient" ? items : docItems}
        />
    );
};

export default MenuList;