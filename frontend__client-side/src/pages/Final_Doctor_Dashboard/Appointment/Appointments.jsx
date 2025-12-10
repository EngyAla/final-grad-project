import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './appointment.module.css'
import { DocAppointmentCtx } from '../../../context/Doctor_Context/DocAppointmentCtx';
import { Link, useNavigate } from 'react-router';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import not_found_img from "../../../assets/notFoundSVG.svg";
import styles2 from "../../Final_Patient_Dashboard/Doctors_Directory/doctorDirectory.module.css";
import API_URL from '../../../config/api';


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Appointments = () => {
    const { appointments, setAppointments } = React.useContext(DocAppointmentCtx);
    const [value, setValue] = React.useState(0);
    const [valueTxt, setValueTxt] = React.useState("");
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const filteredAppointments = React.useMemo(() => {
        if (value === 0) return appointments; // All
        if (value === 1){
            setValueTxt("Pending")
            return appointments.filter((a) => a.status === "pending")
        } ;
        if (value === 2){
            setValueTxt("Approved")
            return appointments.filter((a) => a.status === "approved")
        } ;
        if (value === 3){
            setValueTxt("Canceled")
            return appointments.filter((a) => a.status === "canceled");
        }
    }, [value, appointments]);


    const handleStatusUpdate = async (appointmentId, newStatus) => {
        try {
            const res = await fetch(`${API_URL}/api/appointments/${appointmentId}/status`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ status: newStatus })
            });

            const data = await res.json();
            if (data.success) {
            alert("Status Updated Successfully");

            setAppointments((prev) =>
                prev.map((a) => (a._id === appointmentId ? data.updated : a))
            );
            }

        } catch (err) {
            console.log(err);
        }
    };

    /////////////////////
    const [open, setOpen] = React.useState(false);
    const [actionType, setActionType] = React.useState("");
    const [selectedAppointmentId, setSelectedAppointmentId] = React.useState(null);
    
    const handleClickOpen = (id, type) => {
        setActionType(type);
        setSelectedAppointmentId(id)
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleConfirm = () => {
        handleStatusUpdate(selectedAppointmentId, actionType);
        setOpen(false);
    };
    ////////////////////

    return (
        <Box sx={{ width: '100%', marginTop: "20px" }}>
            <>
            <Box sx={{ width: '100%', padding: "20px 0px"  }}>
                <Box sx={{ border: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}  variant="fullWidth" aria-label="basic tabs example">
                        <Tab label="All" sx={{borderRight: 1, borderColor: 'divider', fontWeight: "700", fontSize: "16px"}} {...a11yProps(0)} />
                        <Tab label="Pending" sx={{borderRight: 1, borderColor: 'divider',  fontWeight: "700", fontSize: "16px"}} {...a11yProps(1)} />
                        <Tab label="Approved" sx={{borderRight: 1, borderColor: 'divider',  fontWeight: "700", fontSize: "16px"}} {...a11yProps(2)} />
                        <Tab label="Cancled" sx={{ fontWeight: "700", fontSize: "16px"}} {...a11yProps(3)} />
                    </Tabs>
                </Box>
            </Box>
            {filteredAppointments.length == 0 ?  
                (
                    <div className={styles2.not_found_res}>
                    <img src={not_found_img} class="img-fluid mt-5" alt="no result image" width={600} />
                    <h1>No {valueTxt} Appointments Yet</h1>
                    </div>
                ) : 
            <table className="table border table-hover mt-4">
                <thead>
                    <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Patient Info</th>
                    <th scope="col">Consultation Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredAppointments.map((e, index) => (
                            <tr key={index}   style={{textTransform: "capitalize", cursor: "pointer"}}>
                                <th scope="row"># {index +1}</th>
                                <td>{e.selectedDateTime.day}  {e.selectedDateTime.start} - {e.selectedDateTime.end}</td>
                                <td>{e.patient.firstName} {e.patient.lastName}</td>
                                <td>{e.consultationType}</td>
                                <td>
                                    <p className={styles.status_col} 
                                    style={{ backgroundColor: e.status === "pending" ? "#f6bf583f" : e.status === "approved" ? "#587df64b" : "#f6685855",
                                        color: e.status === "pending" ? "#DDA131" : e.status === "approved" ? "#3161DD" : "#dd4231ff"
                                    }}>{e.status}</p>
                                </td>
                                <td>{e.status === "pending" ?
                                    <Box sx={{display: "flex", gap: "10px"}}>
                                        <Button  onClick={() => {
                                            handleClickOpen(e._id, "approved");
                                        }}
                                        variant="contained" color="primary" sx={{fontSize: "14px", textTransform: "capitalize"}}>
                                            Approve
                                        </Button> 
                                        <Button onClick={() => {
                                            handleClickOpen(e._id, "canceled");
                                        }} variant="contained" color="error" sx={{fontSize: "14px", textTransform: "capitalize"}}>
                                            Cancel
                                        </Button>
                                        <Button onClick={() => navigate(`/doctor/patient/${e.patient._id}`)} variant="contained" color="secondary" sx={{fontSize: "14px", textTransform: "capitalize"}}>
                                            View Profile
                                        </Button>
                                    </Box>
                                    : e.status === "approved" || e.status === "canceled" ?
                                        <Button onClick={() => navigate(`/doctor/patient/${e.patient._id}`)} variant="contained" color="secondary" sx={{fontSize: "14px", textTransform: "capitalize"}}>
                                            View Profile
                                        </Button> : ""}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>}
            </>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to continue?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {actionType === "approved" ? "Approve appointment?" : "Cancel appointment?"}
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleConfirm}>Yes</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Appointments;
