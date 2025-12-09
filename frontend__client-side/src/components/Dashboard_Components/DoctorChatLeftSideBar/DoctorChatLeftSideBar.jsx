import { Avatar, Box } from '@mui/material'
import React, { useContext } from 'react'
// @ts-ignore
import styles from './doctorChatLeftSideBar.module.css'
import NotesIcon from '@mui/icons-material/Notes';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router';
// import {doctorsData} from '../../pages/Doctors_Directory/filterdata'
import { DocAppointmentCtx } from '../../../context/Doctor_Context/DocAppointmentCtx';

const ChatLeftSideBar = ({ setSelectedPatient, selectedPatient }) => {
    // @ts-ignore
    const { allPatients } = useContext(DocAppointmentCtx);

    const uniquePatients = Array.from(
        new Map(allPatients.map(p => [p._id, p])).values()
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
                    uniquePatients.map((patient) =>{
                        return(
                        <Box 
                        onClick={() => setSelectedPatient(patient)} 
                        key={patient._id} 
                        className={`${styles.partient_contacts} ${
                        selectedPatient?._id === patient._id ? styles.selected_partient_contacts : ""
                        }`}>
                            <Avatar alt={patient.firstName} src={patient.profileImage} sx={{ width: 55, height: 55 }}/>
                            <Box className={styles.partient_contacts_txt}>
                                <h6>{patient.firstName} {patient.lastName}</h6>
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