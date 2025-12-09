import React, { useContext, useState } from 'react'
// @ts-ignore
import styles from '../Doctors_Directory/doctorDirectory.module.css'
import { locationOptions, specialtyOptions, doctorOptions, sessionTypeOptions } from "./filterdata";
import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, IconButton, Slide, Toolbar, Typography } from '@mui/material'
import { FaUserDoctor } from 'react-icons/fa6';
import { FaLocationDot } from 'react-icons/fa6';
import { FaStethoscope } from 'react-icons/fa6';
import SearchIcon from '@mui/icons-material/Search';
import { MdSell } from 'react-icons/md';
import FilterCard from './FilterCard';
import { FaRegHeart } from 'react-icons/fa';
import FavoriteIcon from '@mui/icons-material/Favorite';
////
import { IoLocationOutline } from 'react-icons/io5';
import { BiHome } from 'react-icons/bi';
import { BsTelephone } from 'react-icons/bs';
import { MdOutlineSell } from 'react-icons/md';
import { FaRegStar } from 'react-icons/fa6';
// import { BiDollar } from 'react-icons/bi';
import RequestQuoteOutlinedIcon from '@mui/icons-material/RequestQuoteOutlined';
import { Link } from 'react-router';
import { formatCurrency } from '../../../utilities/formatCurrency';
import { FavouriteContext } from '../../../context/Patient_Context/AddToFavCtx';
// @ts-ignore
import not_found_img from '../../../assets/notFoundSVG.svg'
import CircularProgress from '@mui/material/CircularProgress';
import { DoctorsContext } from '../../../context/Patient_Context/DoctorsCtx';
import MultiStepForm from '../../../components/Dashboard_Components/MultiStepForm/MultiStepForm';
import Backdrop from "@mui/material/Backdrop";
import CloseIcon from '@mui/icons-material/Close';


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide children={undefined} direction="down" ref={ref} {...props} />;
});
const DoctorDirectory = () => {
    const [formData, setFormData] = useState({
        selectedDataTime: {day: "", start: "", end: ""},
        consultationType: "",
        firstName: "",
        lastName: "",
        gender: "",
        phone: "",
        reasonForVisit: "",
        paymentMethod: ""
    }) 

    // @ts-ignore
    const { allDoctors, filteredDoctors, setFilteredDoctors, loading} = useContext(DoctorsContext)
    // @ts-ignore
    const { addToFav, removeFromFav, isFav } = useContext(FavouriteContext);
    const [location, setLocation] = useState('');
    const [doctorName, setDoctorName] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [sessionType, setSessionType] = useState('');
    // To pass specific doctor data to each step
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [open, setOpen] = useState(false);
    const fullWidth = true;
    const maxWidth = 'md';
    const handleClickOpen = (doctor) => {
        setOpen(true);
        setSelectedDoctor(doctor)
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleFilter  = () =>{
        const result = allDoctors.filter((doc) => {
            const matchesLocation = !location || doc.address.toLowerCase() === location.toLowerCase();
            const matchesName = !doctorName || doc.firstName.toLowerCase().includes(doctorName.toLowerCase());
            const matchesSpecialty = !specialty || doc.specialization.toLowerCase() === specialty.toLowerCase();
            const matchesSession = !sessionType || doc.consultationType.toLowerCase() === sessionType.toLowerCase();
            return matchesLocation && matchesName && matchesSpecialty && matchesSession;
        });
        setFilteredDoctors(result)
    } 

    return (
        <Box className={styles.doctor_directory}>
            {
                loading ?
                (<p style={{display: "flex", alignItems: "center", justifyContent: "center"}}><CircularProgress /></p>) 
                :
                (
                <>
                    <Box className={styles.filter_doctor}>
                        <h4>Filter Doctors</h4>
                        <Box>
                            <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                                <FilterCard type="select" title={"Location"} icon={<FaLocationDot style={{ marginRight: 8 }} />} option={locationOptions} size={2.5} setValue={setLocation}/>
                                <FilterCard type="text" title={"Doctor Name"} icon={<FaUserDoctor style={{ marginRight: 8 }} />} option={doctorOptions} size={2.5} setValue={setDoctorName}/>
                                <FilterCard type="select" title={"Specialty"} icon={<FaStethoscope style={{ marginRight: 8 }} />} option={specialtyOptions} size={2.5} setValue={setSpecialty}/>
                                <FilterCard type="select" title={"Consultation Type"} icon={<MdSell style={{ marginRight: 8 }} />} option={sessionTypeOptions} size={3} setValue={setSessionType}/>
                                <Grid className={styles.filter_card} size={{ sm: 12, md: 1 }}>
                                    <Button variant="contained" onClick={handleFilter}><SearchIcon /></Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                    <Box className="doctor_card">
                            {
                                filteredDoctors.length == 0 ? 
                                <div className={styles.not_found_res}>
                                    <img src={not_found_img}  alt="no result image" width={600}/>
                                    <h1>There is no results!</h1>
                                </div> 
                                : (
                                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                                        {
                                        filteredDoctors.map((doc) =>{
                                            const fav = isFav(doc._id)
                                            const handelFav = () =>{
                                                if(fav){
                                                    removeFromFav(doc._id)
                                                } else{
                                                    addToFav(doc)
                                                }
                                            }
                                            return(
                                                <Grid key={doc._id} className={styles.doctor_card} size={{ sm: 12, md: 4 }}>
                                                    <div className="card mb-3" >
                                                        <div className={`card-header ${styles.card_header}`}>
                                                            <Avatar alt={doc.firstName} src={doc.profileImage} sx={{ width: 54, height: 54 }} />
                                                            <div className="doc_card_head_name">
                                                                <h6>{doc.firstName} {doc.lastName}</h6>
                                                                <p>{doc.specialization}</p>
                                                            </div>
                                                        </div>
                                                        <div className="card-body">
                                                            <div className={styles.doctor_details}>
                                                                <div className={styles.detail}>
                                                                    <IoLocationOutline style={{fontSize: "20px"}}/>
                                                                    <p>{doc.country}</p>
                                                                </div>
                                                                <div className={styles.detail}>
                                                                    <BiHome style={{fontSize: "20px"}}/>
                                                                    <p>{doc.address}</p>
                                                                </div>
                                                                <div className={styles.detail}>
                                                                    <BsTelephone style={{fontSize: "20px"}}/>
                                                                    <p>{doc.phoneNumber}</p>
                                                                </div>
                                                                <div className={styles.detail}>
                                                                    <MdOutlineSell style={{fontSize: "20px"}}/>
                                                                    <p>Consultation Type: {doc.consultationType}</p>
                                                                </div>
                                                                <div className={styles.detail}>
                                                                    <FaRegStar style={{fontSize: "20px"}}/>
                                                                    <p>4.2</p>
                                                                </div>
                                                                <div className={styles.detail}>
                                                                    <RequestQuoteOutlinedIcon style={{fontSize: "20px"}}/>
                                                                    <p>{formatCurrency(doc.feePerConsultation, doc.currency)}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className={`card-footer ${styles.card_footer}`}>
                                                            <div>
                                                                <Button variant="outlined" onClick={()=> handelFav()}>
                                                                    {
                                                                        fav ? <FavoriteIcon style={{fontSize: "25px"}}/> : <FaRegHeart style={{fontSize: "24px"}}/> 
                                                                    }
                                                                </Button>
                                                                <Link to={`/patient/doctordetailed/${doc._id}`}>
                                                                    <Button variant="outlined">View Profile</Button>
                                                                </Link>
                                                                <Button variant="contained" onClick={() => handleClickOpen(doc)}>
                                                                    Book
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Grid>
                                            )
                                        })
                                    }
                                    <Box>
                                        <Dialog
                                            fullWidth={fullWidth}
                                            maxWidth={maxWidth}
                                            // sx={{height: "70vh"}}
                                            open={open}
                                            slots={{
                                                transition: Transition,
                                                backdrop: Backdrop
                                            }}
                                            slotProps={{
                                                backdrop: {
                                                    sx: {
                                                        backgroundColor: "rgba(20, 20, 20, 0.21)"
                                                    },
                                                },
                                            }}
                                            keepMounted
                                            onClose={handleClose}
                                            aria-describedby="alert-dialog-slide-description"
                                        >
                                            <Toolbar sx={{backgroundColor: "#9a9a9a2b", marginBottom: "20px"}}>
                                                <Typography variant='h5' sx={{ flex: 1, mt: 2, fontWeight: "500" }}>Book Appointment 
                                                    <p style={{fontSize: "14px", color: "#6d6d6dff", marginTop: "5px"}}>Follow the steps below to book your consultation with Dr. {selectedDoctor?.firstName} {selectedDoctor?.lastName}.</p>
                                                </Typography>
                                                <IconButton
                                                edge="start"
                                                color="inherit"
                                                onClick={handleClose}
                                                aria-label="close"
                                                >
                                                <CloseIcon />
                                                </IconButton>
                                            </Toolbar>
                                            <DialogContent sx={{minHeight: "40vh"}}>
                                                <MultiStepForm selectedDoctor={selectedDoctor} formData={formData} setFormData={setFormData} handleClose={handleClose}/>
                                            </DialogContent>
                                        </Dialog>
                                    </Box>
                                    </Grid>
                                )
                            }
                    </Box>
                </>
                )
            }
        </Box>
    )
}

export default DoctorDirectory;