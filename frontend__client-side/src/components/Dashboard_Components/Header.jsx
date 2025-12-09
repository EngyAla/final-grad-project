// import React from 'react';
// import { Navbar, Form, InputGroup, Nav, Badge, Image } from 'react-bootstrap';
// import { FiSearch, FiBell } from 'react-icons/fi';
// import profilePic from '../assets/user-avatar.png'; 


// const Header = ({ mobileToggle }) => { 
//     return (
//                <Navbar className="bg-white border-bottom p-3 d-flex flex-grow-1">
            

//             {mobileToggle}
            

//             <Navbar.Brand className="fw-semibold me-auto">
//                 Welcome Back, <span className="text-dark fw-bold">Dr. Mohamed</span>
//             </Navbar.Brand>


//             <InputGroup style={{ width: '250px' }} className="me-3 d-none d-md-flex"> {/* d-none d-md-flex: إخفاء البحث على الموبايل */}
//                 <Form.Control
//                     placeholder="Search Patient..."
//                     aria-label="Search Patient"
//                     className="border-end-0"
//                 />
//                 <InputGroup.Text className="bg-white border-start-0 text-secondary">
//                     <FiSearch />
//                 </InputGroup.Text>
//             </InputGroup>


//             <Nav className="me-3">
//                 <Nav.Link href="#" className="position-relative">
//                     <FiBell size={20} className="text-secondary" />
//                     <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
//                         3
//                     </Badge>
//                 </Nav.Link>
//             </Nav>


//             <Image 
//                 src={profilePic}
//                 roundedCircle
//                 width={40}
//                 height={40}
//              alt="User Profile"
//                 style={{ cursor: 'pointer' }}
//             />
//         </Navbar>
//   );
// };

// export default Header;