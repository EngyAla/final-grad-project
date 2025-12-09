import React from 'react';
import { Container, Card, Row, Col, Form, Button, Image, Badge } from 'react-bootstrap';
import { FiDollarSign, FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
import userAvatar from '../assets/user-avatar.png'; 

// ----------------------------------------------------

const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #ccc',
    borderRadius: '0',
    paddingLeft: '0', 
    backgroundColor: 'transparent'
};
// ----------------------------------------------------


const maskedInputStyle = {
    ...inputStyle,
    // Note: 'type="password"' handles the masking appearance (dots)
    // We keep the monospace font for potential alignment consistency, 
    // but the dots appearance is primarily controlled by the input type.
    fontFamily: 'monospace', 
    fontSize: '18px' 
};
// ----------------------------------------------------


const doctorData = {
    fullName: "Dr. Mohamed Ahmad",
    specialization: "General Dentist",
    status: "Activated",
    totalIncome: "$4,000",
    visits: 120,
    canceledVisits: 15,
    // بيانات الـ Form
    nationalId: '1091234567', 
    country: 'Saudi Arabia',
    age: 45, gender: 'Male', phone: '+966 50 123 4567', email: 'mohamed@clinica.com',
    clinicAddress: 'Riyadh, Prince Mohamed Bin Abdulaziz Road, 321',
    googleMapsLink: 'https://maps.app.goo.gl/YourClinicLocation', 
    experience: 20, fee: 100, 
    consultationType: 'Online & In-clinic',
    visitDuration: 30
};


const ProfileStatsHeader = () => {
    return (
        <Row className="mb-5 g-4"> 
            <Col md={6} sm={12}>
                <Card className="shadow-sm border-0 h-100 p-3">
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <div>
                            <div className="fw-semibold mb-1 d-flex align-items-center">
                                <FiCheckCircle size={18} className="me-2 text-success" /> Account Status:
                            </div>
                            <small className="text-muted">Your account is fully approved and verified</small>
                        </div>
                        <Badge bg="success" className="fw-semibold p-2">
                            Approved
                        </Badge>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6} sm={12}>
                <Card className="shadow-sm border-0 h-100">
                    <Card.Body className="d-flex align-items-center p-4">
                        <div className="rounded-3 p-3 me-3 d-flex align-items-center justify-content-center" 
                            style={{ backgroundColor: '#28a7451A', color: '#28a745', height: '50px', width: '50px' }}>
                            <FiDollarSign size={20} />
                        </div>
                        <div>
                            <Card.Text className="text-muted small mb-0">Total Income</Card.Text>
                            <Card.Title className="fw-bold fs-3">{doctorData.totalIncome}</Card.Title>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
};


const CompleteProfileForm = () => {
    return (
        <Form>
            <div className="d-flex align-items-center mb-5"> 
                <Image 
                    src={userAvatar}
                    roundedCircle
                    width={100} 
                    height={100}
                    className="me-4 border p-1"
                    alt="Doctor Avatar"
                />
                <div>
                    <h4 className="mb-1 fw-bold">{doctorData.fullName}</h4>
                    <p className="text-muted mb-2">{doctorData.specialization}</p>
                    <Badge bg="success" className="fw-semibold p-2">
                        <FiCheckCircle size={14} className="me-1" />
                        Account {doctorData.status}
                    </Badge>
                </div>
            </div>
            
            <h5 className="fw-bold mb-4">Personal Details</h5>
            <hr className="mt-0 mb-5" />
            
            <Row className="g-5 mb-5">
                
                {/* العمود الأيسر (50%) */}
                <Col md={6}>
                    {/* Full Name */}
                    <Form.Group className="mb-5" controlId="formFullName"> 
                        <Form.Label className="fw-semibold">Full Name</Form.Label>
                        <Form.Control type="text" defaultValue={doctorData.fullName} style={inputStyle} />
                    </Form.Group>
                    
                    {/* Age */}
                    <Form.Group className="mb-5" controlId="formAge">
                        <Form.Label className="fw-semibold">Age</Form.Label>
                        <Form.Control type="number" defaultValue={doctorData.age} style={inputStyle} />
                    </Form.Group>

                   
                    <Form.Group className="mb-5" controlId="formNationalId">
                        <Form.Label className="fw-semibold">National ID</Form.Label> 
                        <Form.Control 
                            type="password" 
                            defaultValue={doctorData.nationalId} 
                            style={maskedInputStyle} 
                            readOnly 
                        />
                    </Form.Group>
                    
                    {/* Gender */}
                    <Form.Group className="mb-5" controlId="formGender">
                        <Form.Label className="fw-semibold">Gender</Form.Label>
                        <Form.Select defaultValue={doctorData.gender} style={inputStyle}> 
                            <option>Male</option>
                            <option>Female</option>
                        </Form.Select>
                    </Form.Group>
                </Col> 
                
                
                <Col md={6}>
                    {/* Phone Number */}
                    <Form.Group className="mb-5" controlId="formPhone">
                        <Form.Label className="fw-semibold"><FiPhone size={14} className="me-1 text-muted" /> Phone Number</Form.Label>
                        <Form.Control type="tel" defaultValue={doctorData.phone} style={inputStyle} />
                    </Form.Group>
                    
                    {/* Email */}
                    <Form.Group className="mb-5" controlId="formEmail">
                        <Form.Label className="fw-semibold"><FiMail size={14} className="me-1 text-muted" /> Email</Form.Label>
                        <Form.Control type="email" defaultValue={doctorData.email} style={inputStyle} />
                    </Form.Group>

                    {/* Country */}
                    <Form.Group className="mb-5" controlId="formCountry">
                        <Form.Label className="fw-semibold">Country</Form.Label>
                        <Form.Control type="text" defaultValue={doctorData.country} style={inputStyle} />
                    </Form.Group>
                    
                    {/*  Clinic Address + Link  */}
                    <Form.Group className="mb-5" controlId="formAddress">
                        <Form.Label className="fw-semibold d-flex justify-content-between align-items-center">
                            <span><FiMapPin size={14} className="me-1 text-muted" /> Clinic Address</span>
                        </Form.Label>
                        <Form.Control type="text" defaultValue={doctorData.clinicAddress} style={inputStyle} />
                        <div className="mt-2 text-end"> 
                            <a href={doctorData.googleMapsLink} target="_blank" rel="noopener noreferrer" className="small text-primary fw-normal">
                                View On Google Maps
                            </a>
                        </div>
                    </Form.Group>
                </Col>
            </Row>

           
            <div className="my-5"> 
                <h5 className="fw-bold mb-4">Professional Information</h5>
                <hr className="mt-0 mb-5" />

                <Row className="g-5 mb-5">
                    <Col md={6}>
                        {/* Specialization */}
                        <Form.Group className="mb-5" controlId="formSpecialty">
                            <Form.Label className="fw-semibold">Specialty</Form.Label>
                            <Form.Select defaultValue={doctorData.specialization} style={inputStyle}>
                                <option>General Dentist</option>
                                <option>Cardiologist</option>
                                <option>Dermatologist</option>
                            </Form.Select>
                        </Form.Group>
                        
                        {/* Years of Experience */}
                        <Form.Group className="mb-5" controlId="formExperience">
                            <Form.Label className="fw-semibold">Years of Experience</Form.Label>
                            <Form.Control type="number" defaultValue={doctorData.experience} style={inputStyle} />
                        </Form.Group>

                        {/* Visit Duration */}
                         <Form.Group className="mb-5" controlId="formVisitDuration">
                            <Form.Label className="fw-semibold">Visit Duration (Minutes)</Form.Label>
                            <Form.Control type="number" defaultValue={doctorData.visitDuration} style={inputStyle} />
                        </Form.Group>
                    </Col>
                    

                    <Col md={6}>
                        {/* Fee per Consultation */}
                        <Form.Group className="mb-5" controlId="formFee">
                            <Form.Label className="fw-semibold">Fee per Consultation ($)</Form.Label>
                            <Form.Control type="number" defaultValue={doctorData.fee} style={inputStyle} />
                        </Form.Group>
                        
                        {/* Consultation Type */}
                        <Form.Group className="mb-5" controlId="formConsultationType">
                            <Form.Label className="fw-semibold">Consultation Type</Form.Label>
                            <Form.Select defaultValue={doctorData.consultationType} style={inputStyle}>
                                <option>In-clinic Only</option>
                                <option>Online Only</option>
                                <option>Online & In-clinic</option>
                            </Form.Select>
                        </Form.Group>
                        
                    </Col>
                </Row>
            </div>
            

            
            <div className="my-5">
                <h5 className="fw-bold mb-4 d-flex align-items-center"><FiClock size={16} className="me-2 text-muted" /> Available Timing</h5>
                <hr className="mt-0 mb-5" />
                
                <Row>
                    <Col md={4} className="mb-5">
                        <Card className="p-3 border-secondary border-opacity-25 shadow-sm">
                            <Form.Check type="switch" id="day-Sunday" label={<span className="fw-bold">Sunday</span>} defaultChecked className="mb-2" />
                            <Form.Control type="text" placeholder="e.g. 09:00 AM - 05:00 PM" defaultValue="09:00 AM - 05:00 PM" style={inputStyle} />
                        </Card>
                    </Col>
                    
                    <Col md={4} className="mb-5">
                        <Card className="p-3 border-secondary border-opacity-25 shadow-sm">
                            <Form.Check type="switch" id="day-Monday" label={<span className="fw-bold">Monday</span>} defaultChecked className="mb-2" />
                            <Form.Control type="text" placeholder="e.g. 09:00 AM - 05:00 PM" defaultValue="09:00 AM - 05:00 PM" style={inputStyle} />
                        </Card>
                    </Col>
                    
                    <Col md={4} className="mb-5">
                        <Card className="p-3 border-secondary border-opacity-25 shadow-sm">
                            <Form.Check type="switch" id="day-Friday" label={<span className="fw-bold">Friday</span>} className="mb-2" />
                            <Form.Control type="text" placeholder="e.g. 09:00 AM - 05:00 PM" disabled style={inputStyle} />
                        </Card>
                    </Col>
                </Row>
            </div>
            

            <div className="my-5">
                <h5 className="fw-bold mb-4">Visit Statistics (Read-Only)</h5>
                <hr className="mt-0 mb-5" />
                <Row className="g-4">
    
                    <Form.Group as={Col} md="6" controlId="formVisits">
                        <Form.Label className="fw-semibold">Total Visits</Form.Label>
                        <Form.Control 
                            type="text" 
                            defaultValue={doctorData.visits} 
                            readOnly 
                            style={{ ...inputStyle, borderBottom: '1px solid #000' }}
                        />
                    </Form.Group>
                    

                    <Form.Group as={Col} md="6" controlId="formCanceled">
                        <Form.Label className="fw-semibold">Canceled Visits</Form.Label>
                        <Form.Control 
                            type="text" 
                            defaultValue={doctorData.canceledVisits} 
                            readOnly 
                            style={{ ...inputStyle, borderBottom: '1px solid #000' }}
                        />
                    </Form.Group>
                </Row>
            </div>
            
        </Form>
    );
};


// ----------------------------------------------------
// 3. المكون الرئيسي للصفحة (Profile)
// ----------------------------------------------------
const Profile = () => {
    const handleSave = (e) => {
        e.preventDefault();
        alert("Saved (demo). Connect to API to persist changes.");
    };

    return (
        <Container fluid>
            
            <ProfileStatsHeader /> 

            <Row className="my-5"> 
                <Col lg={12}>
                    <Card className="shadow-sm border-0">
                        <Card.Body className="p-5">
                            
                            <CompleteProfileForm />
                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            
            {/* زر الحفظ */}
            <div className="d-flex justify-content-end mb-5">
                <Button onClick={handleSave} variant="primary" size="lg" className="px-5">
                    Save Changes
                </Button>
            </div>
            
        </Container>
    );
};

export default Profile;