import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react'
// @ts-ignore
import styles from '../Doctor_Detailed/doctorDetailes.module.css'


const ProgressBar = ({value, endValue}) => {
    const [presentage, setPresentage] = useState(value);
    useEffect(() =>{
        setPresentage(Math.min(endValue, Math.max(value, 0)))
    }, [value])


    return (
        <Box className={styles.progress}>
            {/* <span>{presentage.toFixed()}%</span> */}
            <div className={styles.sub_progress} style={{width: `${presentage}%`}}/>
        </Box>
    )
}

export default ProgressBar;