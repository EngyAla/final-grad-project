import React, { useState } from 'react'
// @ts-ignore
import styles from './patientChat.module.css'
import { Box, Grid } from '@mui/material'
import ChatLeftSideBar from '../../../components/Dashboard_Components/PatientChatLeftSideBar/PatientChatLeftSideBar'
import ChatBox from '../../../components/Dashboard_Components/PatientChatBox/PatientChatBox'


const PatientChat = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    return (
        <Box className={styles.chat_container}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 3}}>
                <Grid size={{sm: 12, md: 6, lg: 3}}>
                    <ChatLeftSideBar setSelectedDoctor={setSelectedDoctor} selectedDoctor={selectedDoctor}/>
                </Grid>
                <Grid size={{sm: 12, md: 6, lg: 9}}>
                    <ChatBox selectedDoctor={selectedDoctor}/>
                </Grid>
            </Grid>
        </Box>
    )
}

export default PatientChat;