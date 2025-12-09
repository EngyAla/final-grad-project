// import React, { useState } from 'react';
// import { Container, Card, Row, Col, Button, Tab, Tabs, ListGroup, Badge } from 'react-bootstrap';

// const IconMail = ({ size = 20, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <rect x="3" y="5" width="18" height="14" rx="2"></rect>
//     <polyline points="22 5 12 13 2 5"></polyline>
//   </svg>
// );
// const IconPhone = ({ size = 20, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M22 16.92v3a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2z"></path>
//     <path d="M14.52 14.52l-2.05 2.05-2.05-2.05"></path>
//     <path d="M12.48 9.48l2.05-2.05 2.05 2.05"></path>
//     <line x1="12" y1="12" x2="12" y2="12"></line>
//   </svg>
// );
// const IconCalendar = ({ size = 22, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
//     <line x1="16" y1="2" x2="16" y2="6"></line>
//     <line x1="8" y1="2" x2="8" y2="6"></line>
//     <line x1="3" y1="10" x2="21" y2="10"></line>
//   </svg>
// );
// const IconUser = ({ size = 22, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
//     <circle cx="12" cy="7" r="4"></circle>
//   </svg>
// );
// const IconFileText = ({ size = 22, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
//     <polyline points="14 2 14 8 20 8"></polyline>
//     <line x1="16" y1="13" x2="8" y2="13"></line>
//     <line x1="16" y1="17" x2="8" y2="17"></line>
//     <line x1="10" y1="9" x2="8" y2="9"></line>
//   </svg>
// );
// const IconHeartPulse = ({ size = 22, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.04 3 5.5l7 7Z"></path>
//     <path d="M3.2 11.5H8l2.74 5.37a1 1 0 0 0 1.76 0l2.74-5.37H20"></path>
//   </svg>
// );
// const IconActivity = ({ size = 22, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
//   </svg>
// );
// const IconClipboard = ({ size = 22, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
//     <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
//   </svg>
// );
// const IconClock = ({ size = 22, color = 'currentColor', className = '' }) => (
//   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
//     <circle cx="12" cy="12" r="10"></circle>
//     <polyline points="12 6 12 12 16 14"></polyline>
//   </svg>
// );

// // ---------- Patient Dummy Data  ----------
// const defaultPatient = {
//     id: 'PAT-001-2023',
//     name: 'Ali Omran',
//     gender: 'Male',
//     age: 35,
//     dob: '1990-05-15',
//     phone: '+966 50 123 4567',
//     email: 'ali.omran@example.com',
//     address: 'Riyadh, Saudi Arabia',
//     lastVisit: '2025-09-19',
//     nextAppointment: '2025-11-25 at 10:00 AM',
//     totalAppointments: 18,

//     imageUrl: 'https://www.eyasportnews.tn/images/img_article/img_p_sport_2931_62.jpg', 
//     medicalRecord: {
//         bloodType: 'O+',
//         allergies: ['Penicillin', 'Dust Mites'],
//         chronicConditions: ['Type 2 Diabetes', 'Hypertension'],
//         currentMedications: [
//             { name: 'Metformin', dose: '500mg daily' },
//             { name: 'Lisinopril', dose: '10mg daily' }
//         ],
//         recentVitals: {
//             heartRate: '72 bpm',
//             bloodPressure: '130/85 mmHg',
//             temperature: '36.8 °C',
//             weight: '85 kg',
//         }
//     },
//     recentAppointments: [
//         { date: '2025-09-19', time: '10:30 AM', reason: 'Routine Checkup', status: 'Completed', notes: 'Stable condition. Adjusted dosage.' },
//         { date: '2025-07-22', time: '09:00 AM', reason: 'Follow-up on blood pressure', status: 'Completed', notes: 'BP is within normal limits.' },
//         { date: '2025-05-15', time: '03:00 PM', reason: 'Initial Consultation', status: 'Completed', notes: 'Diagnosed with Hypertension.' }
//     ]
// };

// // ---------- Stats Card  ----------
// const StatsCard = ({ title, value, icon: Icon, color }) => (
//     <Card className="shadow-sm border-0 h-100">
//         <Card.Body className="d-flex align-items-center p-4">
//             <div className="rounded-3 p-3 me-3 d-flex align-items-center justify-content-center" 
//                 style={{ backgroundColor: `${color}1A`, color: color, height: '50px', width: '50px' }}>
//                 <Icon size={22} color={color} />
//             </div>
//             <div>
//                 <Card.Text className="text-muted small mb-0">{title}</Card.Text>
//                 <Card.Title className="fw-bold fs-3 mb-0">{value}</Card.Title>
//             </div>
//         </Card.Body>
//     </Card>
// );

// // ---------- PatientDetail Component  ----------
// const PatientDetail = () => {
//     const patientId = 'PAT-001-2023'; // قيمة ثابتة للمحاكاة
//     const [key, setKey] = useState('overview');

//     const patientData = { ...defaultPatient, id: patientId };

//     const stats = [
//         { title: "Total Appointments", value: patientData.totalAppointments, icon: IconCalendar, color: '#007bff' },
//         { title: "Last Visit", value: patientData.lastVisit, icon: IconCalendar, color: '#28a745' },
//         { title: "Next Appointment", value: patientData.nextAppointment, icon: IconClock, color: '#ffc107' },
//         { title: "Chronic Conditions", value: patientData.medicalRecord.chronicConditions.length, icon: IconHeartPulse, color: '#dc3545' },
//     ];

//     const ProfileCard = () => (
//         <Card className="shadow-sm border-0 mb-4 h-100">
//             <Card.Body className="p-4 d-flex flex-column flex-md-row align-items-center">
                
//                 <div className="flex-shrink-0 mb-3 mb-md-0 me-md-4">
//                     <img
//                         src={patientData.imageUrl}
//                         alt={patientData.name}
//                         className="rounded-circle border border-5 border-light shadow-sm"
//                         style={{ width: '100px', height: '100px', objectFit: 'cover' }}
//                         // معالجة الخطأ: العودة إلى العنصر النائب في حال فشل تحميل الصورة
//                         onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/007bff/ffffff?text=Image+Error'; }}
//                     />
//                 </div>
                
//                 <div className="flex-grow-1 text-center text-md-start">
//                     <h3 className="fw-bold mb-1">{patientData.name}</h3>
//                     <p className="text-muted mb-2">Patient ID: <Badge bg="light" className="text-primary fw-bold p-2">{patientData.id}</Badge></p>
//                     <div className="d-flex flex-wrap justify-content-center justify-content-md-start small text-muted">
//                         <span className="me-4"><IconUser size={16} className="me-1" /> {patientData.gender}, {patientData.age} yrs</span>
//                         <span className="me-4"><IconMail size={16} className="me-1" /> {patientData.email}</span>
//                         <span className="me-4"><IconPhone size={16} className="me-1" /> {patientData.phone}</span>
//                     </div>
//                 </div>
//                 <div className="flex-shrink-0 mt-3 mt-md-0 d-flex gap-2">
//                     <Button variant="primary">New Appointment</Button>
//                     <Button variant="outline-secondary">Edit Profile</Button>
//                 </div>
//             </Card.Body>
//         </Card>
//     );

//     const MedicalRecordTab = () => (
//         <Row className="g-4 mt-1">
//             <Col lg={6}>
//                 <Card className="shadow-sm h-100">
//                     <Card.Header className="fw-bold bg-light"><IconHeartPulse size={18} className="me-2 text-danger" /> Chronic Conditions & Allergies</Card.Header>
//                     <ListGroup variant="flush">
//                         <ListGroup.Item>
//                             <span className="fw-semibold">Conditions:</span> 
//                             <div className="mt-1">
//                                 {patientData.medicalRecord.chronicConditions.map((cond, i) => (
//                                     <Badge key={i} bg="danger" className="me-2">{cond}</Badge>
//                                 ))}
//                             </div>
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <span className="fw-semibold">Allergies:</span>
//                             <div className="mt-1">
//                                 {patientData.medicalRecord.allergies.map((allergy, i) => (
//                                     <Badge key={i} bg="warning" text="dark" className="me-2">{allergy}</Badge>
//                                 ))}
//                             </div>
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <span className="fw-semibold">Blood Type:</span> <Badge bg="info">{patientData.medicalRecord.bloodType}</Badge>
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </Card>
//             </Col>
//             <Col lg={6}>
//                 <Card className="shadow-sm h-100">
//                     <Card.Header className="fw-bold bg-light"><IconActivity size={18} className="me-2 text-success" /> Vitals & Medications</Card.Header>
//                     <ListGroup variant="flush">
//                         <ListGroup.Item>
//                             <span className="fw-semibold">Recent Vitals:</span>
//                             <div className="small text-muted mt-1">
//                                 <p className="mb-0">Heart Rate: {patientData.medicalRecord.recentVitals.heartRate}</p>
//                                 <p className="mb-0">Blood Pressure: {patientData.medicalRecord.recentVitals.bloodPressure}</p>
//                                 <p className="mb-0">Weight: {patientData.medicalRecord.recentVitals.weight}</p>
//                             </div>
//                         </ListGroup.Item>
//                         <ListGroup.Item>
//                             <span className="fw-semibold">Current Medications:</span>
//                             <ul className="list-unstyled mt-1 small">
//                                 {patientData.medicalRecord.currentMedications.map((med, i) => (
//                                     <li key={i}>- {med.name} (<span className="text-primary">{med.dose}</span>)</li>
//                                 ))}
//                             </ul>
//                         </ListGroup.Item>
//                     </ListGroup>
//                 </Card>
//             </Col>
//         </Row>
//     );

//     const RecentAppointmentsTab = () => (
//         <Row className="g-4 mt-1">
//             <Col lg={12}>
//                 <Card className="shadow-sm">
//                     <Card.Header className="fw-bold bg-light"><IconClipboard size={18} className="me-2 text-secondary" /> Latest Consultation Records</Card.Header>
//                     <ListGroup variant="flush">
//                         {patientData.recentAppointments.map((appt, i) => (
//                             <ListGroup.Item key={i} className="d-flex justify-content-between align-items-start">
//                                 <div>
//                                     <div className="fw-bold text-primary mb-1">{appt.date} ({appt.time})</div>
//                                     <div className="small text-dark">{appt.reason}</div>
//                                     <p className="small text-muted mb-0 mt-1">* Notes: {appt.notes}</p>
//                                 </div>
//                                 <Badge bg={appt.status === 'Completed' ? 'success' : 'info'} className="mt-1">{appt.status}</Badge>
//                             </ListGroup.Item>
//                         ))}
//                     </ListGroup>
//                 </Card>
//             </Col>
//         </Row>
//     );

//     return (
//         <Container fluid>
//             <ProfileCard />
//             <Row className="mb-5 g-4">
//                 {stats.map((stat, index) => (
//                     <Col lg={6} sm={6} key={index}> 
//                         <StatsCard title={stat.title} value={stat.value} icon={stat.icon} color={stat.color} />
//                     </Col>
//                 ))}
//             </Row>
//             <Card className="shadow-sm border-0 my-5">
//                 <Card.Body>
//                     <Tabs id="patient-profile-tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
//                         <Tab eventKey="overview" title={<><IconFileText className="me-2" />Medical Overview</>}>
//                             <MedicalRecordTab />
//                         </Tab>
//                         <Tab eventKey="appointments" title={<><IconClipboard className="me-2" />Appointments History</>}>
//                             <RecentAppointmentsTab />
//                         </Tab>
//                     </Tabs>
//                 </Card.Body>
//             </Card>
//         </Container>
//     );
// };

// export default PatientDetail;



import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { DocAppointmentCtx } from '../../../context/Doctor_Context/DocAppointmentCtx';
import { Alert, Box, Card, Divider, Grid } from '@mui/material';
import styles from './patentDetailes.module.css';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';

const PatientDetail = () => {
    const { allPatients, appointments } = useContext(DocAppointmentCtx);
    const { patientID } = useParams();
    const [patientVisits, setPatientVisits] = useState([]);

    const patient = allPatients.find((p) =>{
        return p._id == patientID
    })
    // console.log(patient)

    useEffect(() => {
        if (!patientID || allPatients.length === 0) return;
        const visits = allPatients.filter((e) => e._id === patientID);

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setPatientVisits(visits);
        console.log("Patient Visits: ", visits);
    }, [allPatients, patientID]);

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
        <Box className={styles.patient_detailes}>
            <Box sx={{mt: 2}}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={12}>
                        <Card>
                            <Box className={styles.personal_info}>
                                <Box>
                                    <img src={patient?.profileImage} alt={patient?.firstName} width={200}/>
                                </Box>
                                <Box >
                                    <Box className={styles.name_info}>
                                        <h4>{patient?.firstName} {patient?.lastName}</h4>
                                        <p>Patient ID: {patient?._id}</p>
                                    </Box>
                                    <Grid mt={8} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                        <Grid size={4} sx={{display: "flex", gap: "8px"}}>
                                            <MailOutlineIcon sx={{color: "#2653D0"}}/>
                                            <p>Email: {patient?.email}</p>
                                        </Grid>
                                        <Grid size={4} sx={{display: "flex", gap: "8px"}}>
                                            <LocalPhoneOutlinedIcon sx={{color: "#2653D0"}}/>
                                            <p>Contact: {patient?.phoneNumber}</p>
                                        </Grid>
                                        <Grid size={4} sx={{display: "flex", gap: "8px"}}>
                                            <InsertInvitationIcon sx={{color: "#2653D0"}}/>
                                            <p>Age: {patient?.age}</p>
                                        </Grid>
                                        <Grid size={4} sx={{display: "flex", gap: "8px"}}>
                                            <PersonOutlineIcon sx={{color: "#2653D0"}}/>
                                            <p>Gender: {patient?.gender}</p>
                                        </Grid>
                                        <Grid size={4}>
                                            <Box sx={{display: "flex", gap: "8px"}}>
                                                <ContentPasteIcon sx={{color: "#2653D0"}}/>
                                                <p>Total number of visits: <span>{patientVisits?.length}</span> </p>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Card>
                    </Grid>
                </Grid>
                <Card sx={{mt: 3, p: 2}}>
                    <h4 style={{marginBottom: "40px"}}>Medical Overview</h4>
                    <h6>Chronic Diseases:</h6>
                    <Alert severity="" sx={{mb:5, backgroundColor: "#ffb6b681", borderLeft: "3px solid #ed1e1eff"}}>{patient?.chronicDisease}</Alert>
                    <h6>Medical History Summary:</h6>
                    <Alert severity="" sx={{mb:5, backgroundColor: "#ffb6b681", borderLeft: "3px solid #ed1e1eff"}}>{patient?.medicalHistory}</Alert>
                    <hr />
                    <h6>Emergency Contact Details</h6>
                    <Grid container rowSpacing={1} mt={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid size={4}>
                            <p><span style={{fontSize: "16px", fontWeight: "600"}}>Name:</span> {patient?.emergencyFirstName}</p>
                        </Grid>
                        <Grid size={4}>
                            <p><span style={{fontSize: "16px", fontWeight: "600"}}>Relationship: </span>{patient?.emergencyRelationship}</p>
                        </Grid>
                        <Grid size={4}>
                            <p><span style={{fontSize: "16px", fontWeight: "600"}}>Contact:</span> {patient?.emergencyPhone}</p>
                        </Grid>
                    </Grid>
                    <hr />
                    <h6>Appointment History</h6>
                    <table className="table border table-striped table-hover mt-3">
                        <thead>
                            <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Reason For Visits</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointments.map((e) =>{
                                    return(
                                    <tr key={e._id}>
                                        <th scope="row">{formatted(e.createdAt)}</th>
                                        <td>{e.reasonForVisit}</td>
                                    </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </Card>
            </Box>
            </Box>
    )
}

export default PatientDetail