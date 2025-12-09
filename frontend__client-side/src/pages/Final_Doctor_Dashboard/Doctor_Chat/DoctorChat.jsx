// @ts-ignore
import styles from './doctorChat.module.css'
import { Box, Grid } from '@mui/material'
import DoctorChatLeftSideBar from '../../../components/Dashboard_Components/DoctorChatLeftSideBar/DoctorChatLeftSideBar'
import DoctorChatBox from '../../../components/Dashboard_Components/DoctorChatBox/DoctorChatBox'
import { useState } from 'react'


const DoctorChat = () => {
    const [selectedPatient, setSelectedPatient] = useState(null);
    return (
        <Box className={styles.chat_container}>
            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{mt: 3}}>
                <Grid size={{sm: 12, md: 6, lg: 3}}>
                    <DoctorChatLeftSideBar setSelectedPatient={setSelectedPatient} selectedPatient={selectedPatient}/>
                </Grid>
                <Grid size={{sm: 12, md: 6, lg: 9}}>
                    <DoctorChatBox selectedPatient={selectedPatient} />
                </Grid>
            </Grid>
        </Box>
    )
}

export default DoctorChat;