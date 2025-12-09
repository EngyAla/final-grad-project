import React, { useContext } from 'react'
import { useParams } from 'react-router'
// import { doctorsData } from "../Doctors_Directory/filterdata";
import { Box, Card, Grid } from '@mui/material';
// @ts-ignore
import styles from '../Doctor_Detailed/doctorDetailes.module.css'
// @ts-ignore
import verifed_img from '../../../assets/Verified.png'
import { FaLocationDot } from 'react-icons/fa6';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { FaUserDoctor } from 'react-icons/fa6';
import ProgressBar from './ProgressBar';
import StarIcon from '@mui/icons-material/Star';
import { DoctorsContext } from '../../../context/Patient_Context/DoctorsCtx';



const DoctorDetailed = () => {
    // @ts-ignore
    const { allDoctors } = useContext(DoctorsContext);
    const { doctorId } = useParams();
    // console.log(doctorId)
    const doctor = allDoctors.find((d) =>{
        return d._id == doctorId;
    });

    // const [value, setValue] = useState(0);
    // useEffect(() =>{
    //     setInterval(() =>{
    //         setValue(prev => prev +1)
    //     }, 50)
    // }, [])

    // function hideName(name){
    //     return name.split(" ").map(word => word[0] + "*".repeat(word.length -1)).join(" ")
    // }


    return (
        <Box className={styles.doctor_detailes}>
            <Box sx={{mt: 2}}>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                    <Card className={styles.personal_info}>
                        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                            <Box>
                                <img src={doctor?.profileImage} alt={doctor?.firstName} width={300}/>
                            </Box>
                            <Grid className={styles.txt_info} rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
                                <Box className={styles.name_info}>
                                    <h4>{doctor?.firstName} {doctor?.lastName} <img src={verifed_img} alt='' width={25}/></h4>
                                    <p>{doctor?.specialization}</p>
                                </Box>
                                <Card className={styles.address_info} >
                                    <h5>Location</h5>
                                    <p><FaLocationDot style={{fontSize: "20px", marginRight: "5px"}} /><span>{doctor?.address}</span></p>
                                </Card>
                            </Grid>
                        </Grid>
                    </Card>
                    <Card className={styles.timing_info}>
                        <h4><EventAvailableIcon style={{fontSize: "28px", marginRight: "5px"}}/><span>Availability</span></h4>
                        <Grid className={styles.timing_info_cards_container} container rowSpacing={1} columnSpacing={{ sm: 12, md: 6 }}>
                            {
                                doctor?.availableTiming.map((t, index) =>{
                                    return(
                                        <Grid key={index} size={{sm: 12, md: 6, lg: 6}} className={styles.timing_info_card}>
                                            <Box>
                                                <h5>{t.day}</h5>
                                                <p><span>{t.start} : {t.end}</span></p>
                                            </Box>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </Card>
                </Grid>
            </Box>

            {/* /////////////////////////////////////// */}

            <Box sx={{mt: 5}} className={styles.doctor_detailes_Contact_location}>
                <h4>Contact and location</h4>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 6 }} sx={{mt: 7}}>
                    <Grid className={styles.doctor_detailes_location_txt} size={{sm: 12, md: 6, lg: 4}}>
                        <Box sx={{display: "flex", gap: 2}}>
                            <FaLocationDot style={{fontSize: "20px"}}/>
                            <Box>
                                <h5>Address</h5>
                                <p>{doctor?.country}</p>
                                <p>{doctor?.address}</p>
                            </Box>
                        </Box>
                        <Box sx={{display: "flex", gap: 2, mt: 5}}>
                            <FaUserDoctor style={{fontSize: "20px"}}/>
                            <Box>
                                <h5>Contact Details</h5>
                                <p>{doctor?.phoneNumber}</p>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid className={styles.doctor_detailes_location_map} size={{sm: 12, md: 6, lg: 8}}>
                        <iframe
                            src={doctor?.addressOnMap}
                            width="100%"
                            height="350"
                            style={{ borderRadius: "5px"}}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </Grid>
                </Grid>
            </Box>

            {/* /////////////////////////////////////// */}

            {/* <Box sx={{mt: 15}}>
                <h4>Patient Reviews</h4>
                <Card className={styles.patient_reviews_card} sx={{mt: 5}}>
                    <Box className={styles.rating}>
                        <h1>{doctor.rating}</h1>
                        <Box>
                            <StarIcon style={{fontSize: "40px", color: "#FCB52F"}}/>
                            <StarIcon style={{fontSize: "40px", color: "#FCB52F"}}/>
                            <StarIcon style={{fontSize: "40px", color: "#FCB52F"}}/>
                            <StarIcon style={{fontSize: "40px", color: "#FCB52F"}}/>
                            <StarIcon style={{fontSize: "40px", color: "#FCB52F"}}/>
                        </Box>
                    </Box>
                    <Grid container rowSpacing={3} columnSpacing={{ sm: 12, md: 4 }} >
                        <Grid size={{sm: 12, md: 4, lg: 4}}>
                            <Box className={styles.rating_presentage}>
                                <h6>Punctuality</h6>
                                <h6>{doctor.punctuality}</h6>
                            </Box>
                            <ProgressBar value={value} endValue={(doctor.punctuality / 5) *100} />    
                        </Grid>
                        <Grid size={{sm: 12, md: 6, lg: 4}}>
                            <Box className={styles.rating_presentage}>
                                <h6>Cleanliness</h6>
                                <h6>{doctor.cleanliness}</h6>
                            </Box>
                            <ProgressBar value={value} endValue={(doctor.cleanliness / 5) *100} />    
                        </Grid>
                        <Grid size={{sm: 12, md: 6, lg: 4}}>
                            <Box className={styles.rating_presentage}>
                                <h6>Cordiality</h6>
                                <h6>{doctor.cordiality}</h6>
                            </Box>
                            <ProgressBar value={value} endValue={(doctor.cordiality / 5) *100} />   
                        </Grid>
                    </Grid>
                </Card>
                <Box className={styles.patient_reviews}>
                    {
                        doctor.reviews.map((r) =>{
                            return(
                                <Box>
                                    <Box sx={{display: "flex", alignItems: "center", mt: 5, mb: 2}}>
                                        <h5>{r.rating}</h5>
                                        <StarIcon style={{fontSize: "28px", color: "#FCB52F"}}/>
                                        <StarIcon style={{fontSize: "28px", color: "#FCB52F"}}/>
                                        <StarIcon style={{fontSize: "28px", color: "#FCB52F"}}/>
                                        <StarIcon style={{fontSize: "28px", color: "#FCB52F"}}/>
                                        <StarIcon style={{fontSize: "28px", color: "#FCB52F"}}/>
                                    </Box>
                                    <h6>{hideName(r.user)}</h6>
                                    <h6>{r.review}</h6>
                                    <p>{r.date}</p>
                                </Box>
                            )
                        })
                    }
                </Box>
            </Box> */}
        </Box>
    )
}

export default DoctorDetailed;