import { Avatar, Box } from '@mui/material'
import React, { useContext } from 'react'
// @ts-ignore
import styles from './patientChatLeftSide.module.css'
import NotesIcon from '@mui/icons-material/Notes';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router';
// import {doctorsData} from '../../pages/Doctors_Directory/filterdata'
import { AppointmentsContext } from '../../../context/Patient_Context/AppointmentsCtx';

const ChatLeftSideBar = ({ setSelectedDoctor, selectedDoctor }) => {
    // @ts-ignore
    const { allDoctors } = useContext(AppointmentsContext);

    const uniquePatients = Array.from(
        new Map(allDoctors.map(p => [p._id, p])).values()
    );
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <Box className={styles.chatLeftSide}>
            <Box className={styles.leftSide_header}>
                <Box className={styles.leftSide_header_title}>
                    <h3>Chats</h3>
                    <NotesIcon
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    sx={{ color: "#626262a7", cursor: "pointer"}}/>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                        list: {
                            'aria-labelledby': 'basic-button',
                        },
                        }}
                    >
                        <Link to={'/patientprofile'}>
                            <MenuItem onClick={handleClose} sx={{color: "#373737ff"}}>Profile</MenuItem>
                        </Link>
                        <Link to={'/'}>
                            <MenuItem onClick={handleClose} sx={{color: "#373737ff"}}>Logout</MenuItem>
                        </Link>
                    </Menu>
                </Box>
                <Box className={styles.leftSide_header_search}>
                    <SearchIcon sx={{fontSize: "18px", color: "#595959ff", rotate: "90deg"}}/>
                    <input type="text" placeholder='Search or start a new chat' />
                </Box>
            </Box>
            <Box className={styles.contacts_container}>
                {
                    uniquePatients.map((doctor) =>{
                        return(
                        <Box 
                        onClick={() => setSelectedDoctor(doctor)} 
                        key={doctor._id} 
                        className={`${styles.partient_contacts} ${
                        selectedDoctor?._id === doctor._id ? styles.selected_partient_contacts : ""
                        }`}>
                            <Avatar alt={doctor.firstName} src={doctor.profileImage} sx={{ width: 55, height: 55 }}/>
                            <Box className={styles.partient_contacts_txt}>
                                <h6>{doctor?.firstName} {doctor?.lastName}</h6>
                                <p>Good morning! Just confirming the upcoming system maintenance on Friday.</p>
                            </Box>
                        </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default ChatLeftSideBar;