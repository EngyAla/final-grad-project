// import { Container, Card, Row, Col, Form, Button, Table, Badge, Nav, InputGroup } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { FiCalendar, FiUsers, FiClock, FiXCircle, FiSearch, FiCheckCircle } from 'react-icons/fi';

// const appointments = [
//     { id: '#7529', patientId: 'PAT-001', date: '18 sep, 2025', time: '10:30 - 11:00', patient: 'Ali Omran', type: 'On-site', price: '$100', status: 'Approved' },
//     { id: '#7530', patientId: 'PAT-002', date: '19 sep, 2025', time: '11:00 - 11:30', patient: 'Lina Kamal', type: 'Online', price: '$80', status: 'Pending' },
//     { id: '#7531', patientId: 'PAT-003', date: '19 sep, 2025', time: '11:30 - 12:00', patient: 'Omar Fares', type: 'On-site', price: '$100', status: 'Completed' },
//     { id: '#7532', patientId: 'PAT-004', date: '20 sep, 2025', time: '09:00 - 09:30', patient: 'Nora Said', type: 'Online', price: '$80', status: 'Canceled' },
//     { id: '#7533', patientId: 'PAT-005', date: '20 sep, 2025', time: '09:30 - 10:00', patient: 'Hassan Emad', type: 'On-site', price: '$100', status: 'Rejected' },
// ];

// const getStatusBadge = (status) => {
//     let textColor = '#000';
//     let icon = null;

//     switch (status) {
//         case 'Pending':
//             textColor = '#FFC107';
//             icon = <FiClock size={12} className="me-1" />;
//             break;
//         case 'Approved':
//             textColor = '#eaeceeff'; 
//             icon = <FiCheckCircle size={12} className="me-1" />;
//             break;
//         case 'Rejected':
//             textColor = '#fc0019ff'; 
//             icon = <FiXCircle size={12} className="me-1" />;
//             break;
//         case 'Completed':
//             textColor = '#05eaffff';
//             icon = <FiCheckCircle size={12} className="me-1" />;
//             break;
//         case 'Canceled':
//             textColor = '#000000ff'; 
//             icon = <FiXCircle size={12} className="me-1" />;
//             break;
//         default:
//             break;
//         }

//     return (
//         <Badge 
//         pill 
//         className="p-2 fw-bold d-flex align-items-center justify-content-center" 
//         style={{backgroundColor: '#FFFFFF', color: textColor}}
//         >
//         {icon}
//         {status}
//         </Badge>
//     );
// };

// const AppointmentsTable = () => {
//     return (
//         <Table hover responsive className="mb-0 align-middle">
//             <thead>
//                 <tr className="text-secondary small text-uppercase" style={{backgroundColor: '#F8F9FA'}}>
//                     <th>Patient Info</th>
//                     <th>Date</th>
//                     <th>ID</th>
//                     <th>Consultation Type</th>
//                     <th>Total Price</th>
//                     <th>Status</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {appointments.map((appointment, index) => (
//                     <tr key={index}>
//                         <td><a href="#" className="text-decoration-none text-primary fw-semibold">{appointment.id}</a></td>
//                         <td>
//                             <div className="fw-semibold">{appointment.date}</div>
//                             <div className="text-muted small">{appointment.time}</div>
//                         </td>
//                         <td>
//                             <Link to={`/patient/${appointment.patientId}`} className="text-decoration-none text-dark fw-semibold">
//                                 {appointment.patientId}
//                             </Link>
//                         </td>
//                         <td><Badge bg={appointment.type === 'Online' ? 'info' : 'secondary'} className="fw-normal">{appointment.type}</Badge></td>
//                         <td className="fw-bold">{appointment.price}</td>
//                         <td>{getStatusBadge(appointment.status)}</td>
//                         <td>
//                             <Button variant="light" className="p-1 border-0" size="sm">
//                                 <span style={{ fontSize: '1.5rem', lineHeight: '10px' }}>...</span>
//                             </Button>
//                         </td>
//                     </tr>
//                 ))}
//             </tbody>
//         </Table>
//     );
// };

// const appointmentStats = [
//     { title: "Total Appointments", value: 240, icon: FiUsers, color: '#007bff' },
//     { title: "Today's Appointments", value: 32, icon: FiClock, color: '#28a745' },
//     { title: "Upcoming Appointments", value: 108, icon: FiCalendar, color: '#ffc107' },
//     { title: "Canceled Appointments", value: 15, icon: FiXCircle, color: '#dc3545' },
// ];

// const AppointmentStatsHeader = () => (
//     <Row className="mb-5 g-4">
//         {appointmentStats.map((stat, index) => {
//             const Icon = stat.icon;
//             return (
//                 <Col lg={3} sm={6} key={index}>
//                     <Card className="shadow-sm border-0 h-100">
//                         <Card.Body className="d-flex align-items-center p-4">
//                             <div className="rounded-3 p-3 me-3 d-flex align-items-center justify-content-center" 
//                                 style={{ backgroundColor: `${stat.color}1A`, color: stat.color, height: '50px', width: '50px' }}>
//                                 <Icon size={22} />
//                             </div>
//                             <div>
//                                 <Card.Text className="text-muted small mb-0">{stat.title}</Card.Text>
//                                 <Card.Title className="fw-bold fs-3 mb-0">{stat.value}</Card.Title>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             );
//         })}
//     </Row>
// );

// const Appointments = () => {
//     return (
//         <Container fluid>
//             <h2 className="mb-4 fw-bold">Appointment Management</h2>
//             <AppointmentStatsHeader />

//             <Row className="my-5">
//                 <Col lg={12}>
//                     <Card className="shadow-sm border-0">
//                         <Card.Body className="p-0">
//                             <div className="d-flex justify-content-between align-items-center border-bottom p-3 flex-wrap">
//                                 <Nav variant="pills" defaultActiveKey="All" className="mb-2 mb-md-0">
//                                     {['All', 'Approved', 'Pending', 'Completed', 'Canceled'].map((status) => (
//                                         <Nav.Item key={status}>
//                                             <Nav.Link 
//                                                 eventKey={status} 
//                                                 className={`fw-semibold mx-1 ${status === 'All' ? 'bg-primary text-white' : 'text-dark'}`}
//                                                 style={status !== 'All' ? {backgroundColor: '#f8f9fa'} : {}}
//                                             >
//                                                 {status}
//                                             </Nav.Link>
//                                         </Nav.Item>
//                                     ))}
//                                 </Nav>
//                                 <InputGroup style={{ width: '250px' }}>
//                                     <Form.Control placeholder="Search Patient..." className="border"/>
//                                     <InputGroup.Text className="bg-white border-start-0 text-secondary">
//                                         <FiSearch />
//                                     </InputGroup.Text>
//                                 </InputGroup>
//                             </div>
//                             <AppointmentsTable />
//                             <div className="d-flex justify-content-center mt-4 pb-3">
//                                 <Button variant="light" disabled>Previous</Button>
//                                 <Button variant="light" className="mx-2">1</Button>
//                                 <Button variant="primary">2</Button>
//                                 <Button variant="light" className="mx-2">3</Button>
//                                 <Button variant="primary">Next</Button>
//                             </div>
//                         </Card.Body>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Appointments;



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


// function CustomTabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//         role="tabpanel"
//         hidden={value !== index}
//         id={`simple-tabpanel-${index}`}
//         aria-labelledby={`simple-tab-${index}`}
//         {...other}
//         >
//         {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
//         </div>
//     );
//     }

//     CustomTabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
//     };

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Appointments = () => {
    const { appointments, setAppointments } = React.useContext(DocAppointmentCtx);
    const [value, setValue] = React.useState(0);
    const navigate = useNavigate();
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const filteredAppointments = React.useMemo(() => {
        if (value === 0) return appointments; // All
        if (value === 1) return appointments.filter((a) => a.status === "pending");
        if (value === 2) return appointments.filter((a) => a.status === "approved");
        if (value === 3) return appointments.filter((a) => a.status === "canceled");
    }, [value, appointments]);


    const handleStatusUpdate = async (appointmentId, newStatus) => {
        try {
            const res = await fetch(`http://localhost:5000/api/appointments/${appointmentId}/status`, {
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

            {filteredAppointments.length == 0 ?  
                    (
                        <div className={styles2.not_found_res}>
                        <img src={not_found_img} alt="no result image" width={600} />
                        <h1>No Appointments Yet</h1>
                        {/* <p>Add doctors to your favourites for quick access.</p> */}
                        </div>
                    ) : 
            
            <>
            <Box sx={{ width: '100%' }}>
                <Box sx={{ border: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange}  variant="fullWidth" aria-label="basic tabs example">
                        <Tab label="All" sx={{borderRight: 1, borderColor: 'divider', fontWeight: "700", fontSize: "16px"}} {...a11yProps(0)} />
                        <Tab label="Pending" sx={{borderRight: 1, borderColor: 'divider',  fontWeight: "700", fontSize: "16px"}} {...a11yProps(1)} />
                        <Tab label="Approaved" sx={{borderRight: 1, borderColor: 'divider',  fontWeight: "700", fontSize: "16px"}} {...a11yProps(2)} />
                        <Tab label="Cancled" sx={{ fontWeight: "700", fontSize: "16px"}} {...a11yProps(3)} />
                    </Tabs>
                </Box>
            </Box>
            <table className="table border table-hover mt-4" >
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
                                        <Button onClick={() => navigate(`/patient/${e.patient._id}`)} variant="contained" color="secondary" sx={{fontSize: "14px", textTransform: "capitalize"}}>
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
            </table>
            </>
            }


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
