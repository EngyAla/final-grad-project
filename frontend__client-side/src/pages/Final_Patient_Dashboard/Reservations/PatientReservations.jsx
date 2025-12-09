import { Box, Grid, Tab, Tabs } from "@mui/material";
import React, { useContext } from "react";
// @ts-ignore
import styles from "../Reservations/patientReservation.module.css";
import {
    Avatar,
    Button,
} from "@mui/material";
////
import { IoLocationOutline } from "react-icons/io5";
// import { BiHome } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
// import { BiDollar } from 'react-icons/bi';
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { AppointmentsContext } from "../../../context/Patient_Context/AppointmentsCtx";
import not_found_img from "../../../assets/notFoundSVG.svg";
import styles2 from "../../Final_Patient_Dashboard/Doctors_Directory/doctorDirectory.module.css";

    function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
    }

    const PatientReservations = () => {
    // @ts-ignore
    const { appointments } = useContext(AppointmentsContext);
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const filteredAppointments = React.useMemo(() => {
        if (value === 0) return appointments; // All
        if (value === 1) return appointments.filter((a) => a.status === "pending");
        if (value === 2) return appointments.filter((a) => a.status === "approved");
        if (value === 3) return appointments.filter((a) => a.status === "canceled");
    }, [value, appointments]);

        const formatted = (e) =>{
        return(
            new Date(e).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit"
            })
        )
    }

    return (
        <Box sx={{ width: "100%" }}>
            {filteredAppointments.length == 0 ?  
                    (
                    <div className={styles2.not_found_res}>
                        <img src={not_found_img} alt="no result image" width={600} />
                        <h1>No Appointments Yet</h1>
                    </div>
                    ) : 

            <>
            <Box sx={{ width: "100%" }}>
                <Box sx={{ border: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    aria-label="basic tabs example"
                >
                    <Tab
                    label="All"
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        fontWeight: "700",
                        fontSize: "16px",
                    }}
                    {...a11yProps(0)}
                    />
                    <Tab
                    label="Pending"
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        fontWeight: "700",
                        fontSize: "16px",
                    }}
                    {...a11yProps(1)}
                    />
                    <Tab
                    label="Approaved"
                    sx={{
                        borderRight: 1,
                        borderColor: "divider",
                        fontWeight: "700",
                        fontSize: "16px",
                    }}
                    {...a11yProps(2)}
                    />
                    <Tab
                    label="Cancled"
                    sx={{ fontWeight: "700", fontSize: "16px" }}
                    {...a11yProps(3)}
                    />
                </Tabs>
                </Box>
            </Box>
            <Box className="doctor_card">
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }} mt={3}>
                {filteredAppointments.map((app) => {
                    return (
                    <Grid
                        key={app._id}
                        className={styles.doctor_card}
                        size={{ sm: 12, md: 4 }}
                    >
                        <div className="card mb-3">
                        <div className={`card-header ${styles.card_header}`}>
                            <Avatar
                            alt={app.doctor.firstName}
                            src={app.doctor.profileImage}
                            sx={{ width: 54, height: 54 }}
                            />
                            <div className="doc_card_head_name">
                                <h6>
                                    {app.doctor.firstName} {app.doctor.lastName}
                                </h6>
                                <p>{app.doctor.specialization}</p>
                            </div>
                            <div style={{marginLeft: "auto"}}>
                                <p className={styles.status_col} 
                                    style={{ backgroundColor: app.status === "pending" ? "#f6bf583f" : app.status === "approved" ? "#6a8bf64b" : "#f9796b55",
                                    color: app.status === "pending" ? "#DDA131" : app.status === "approved" ? "#4170e6ff" : "#e84c3bff"
                                    }}>
                                    {app.status}
                                </p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className={styles.doctor_details}>
                            <div className={styles.detail}>
                                <IoLocationOutline style={{ fontSize: "20px" }} />
                                <p>Appointment ID: #{app._id.slice(0,7)}</p>
                            </div>
                            <div className={styles.detail}>
                                <BsTelephone style={{ fontSize: "20px" }} />
                                <p>{app.doctor.phoneNumber}</p>
                            </div>
                            <div className={styles.detail}>
                                <MdOutlineSell style={{ fontSize: "20px" }} />
                                <p>Consultation Type: {app.doctor.consultationType}</p>
                            </div>
                            <div className={styles.detail}>
                                <FaRegStar style={{ fontSize: "20px" }} />
                                <p>Time: {app.selectedDateTime.day} {app.selectedDateTime.start}-{app.selectedDateTime.end}</p>
                            </div>
                            <div className={styles.detail}>
                                <FaRegStar style={{ fontSize: "20px" }} />
                                <p>Created At: {formatted(app.createdAt)}</p>
                            </div>
                            <div className={styles.detail}>
                                <RequestQuoteOutlinedIcon
                                style={{ fontSize: "20px" }}
                                />
                                <p>
                                Final Price: {formatCurrency(app.doctor.feePerConsultation, app.doctor.currency)}
                                </p>
                            </div>
                            </div>
                        </div>
                        <div className={`card-footer ${styles.card_footer}`}>
                            <div>
                            <Button variant="outlined">leave Feedback</Button>
                            </div>
                        </div>
                        </div>
                    </Grid>
                    );
                })}
                </Grid>
            </Box>
            </>}
        </Box>
    );
    };

    export default PatientReservations;