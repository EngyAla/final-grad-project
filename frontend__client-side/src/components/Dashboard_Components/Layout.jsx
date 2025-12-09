// import React, { useState, useEffect } from 'react';
// import { Container, Button, Nav, Image } from 'react-bootstrap';
// import { Link, useLocation } from 'react-router-dom'; 
// import { FiGrid, FiUser, FiCalendar, FiBell, FiMessageSquare, FiLogOut, FiMenu, FiX } from 'react-icons/fi';
// import logo from '../assets/logo.png'; 
// import Header from './Header'; 

// const Layout = ({ children }) => {
    
    
//     const MOBILE_BREAKPOINT = 992; 
//     const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= MOBILE_BREAKPOINT);

//     const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_BREAKPOINT);

//     const toggleSidebar = () => {
//         setIsSidebarOpen(!isSidebarOpen);
//     };
    

//     useEffect(() => {
//         const handleResize = () => {
//             const newIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
//             setIsMobile(newIsMobile);
            

//             if (!newIsMobile && !isSidebarOpen) {
           
//                 setIsSidebarOpen(true);
//             }
//             if (newIsMobile && isSidebarOpen) {
//                  setIsSidebarOpen(false);
//             }
//         };

//         window.addEventListener('resize', handleResize);
//         return () => window.removeEventListener('resize', handleResize);
//     }, [isSidebarOpen]); 


//     const sidebarWidth = 280; 
//     const closedWidth = 80;
//     const currentWidth = isSidebarOpen ? sidebarWidth : (isMobile ? 0 : closedWidth);
//     const contentMargin = isMobile ? 0 : currentWidth;
    

//     const location = useLocation(); 
//     const navItems = [
//         { icon: <FiGrid size={20} />, label: 'Dashboard', path: '/' },
//         { icon: <FiUser size={20} />, label: 'Profile', path: '/profile' },
//         { icon: <FiCalendar size={20} />, label: 'Appointments', path: '/appointments' },
//         { icon: <FiBell size={20} />, label: 'Notifications', path: '/notifications' },
//         { icon: <FiMessageSquare size={20} />, label: 'Chat', path: '/chat' },
//     ];


//     return (
//         <div className="d-flex w-100 min-vh-100">
            
            
//             <div 
          
//                 className={`sidebar d-flex flex-column p-3 ${!isSidebarOpen && !isMobile ? 'collapsed' : ''}`}
//                 style={{
//                     width: currentWidth, 
//                     minWidth: currentWidth, 
//                     transition: 'width 0.3s ease-in-out',
//                     overflowX: 'hidden',
//                     position: 'fixed', 
//                     height: '100vh',
//                     zIndex: 1050,
//                 }}
//             >
                
//                 <div 
//                     className="logo d-flex align-items-center mb-4" 
//                     style={{ minHeight: '50px', justifyContent: isSidebarOpen ? 'space-between' : 'center' }}
//                 >
                   
//                     {isSidebarOpen && (
//                         <Image 
//                             src={logo} 
//                             alt="Project Logo" 
//                             style={{ height: '40px', width: 'auto' }} 
//                         />
//                     )}

                  
//                     {(!isMobile || (isMobile && isSidebarOpen)) && (
//     <Button variant="link" onClick={toggleSidebar} className="p-0 text-dark">
//         {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//     </Button>
// )}
//                 </div>

                
//                 <Nav className="flex-column flex-grow-1">
//                     {navItems.map((item, index) => {
//                         const isActive = location.pathname === item.path;
//                         return (
//                             <Nav.Link
//                                 key={index}
//                                 as={Link} 
//                                 to={item.path} 
//                                 className={`d-flex align-items-center mb-2 p-3 rounded-3 ${isActive ? 'active-nav-link' : 'text-secondary'}`}
//                                 onClick={isMobile ? toggleSidebar : undefined} // إغلاق القائمة على الموبايل عند الضغط
//                             >
                                
//                                 <span className={`${isSidebarOpen ? 'me-3' : ''}`}>{item.icon}</span>
                              
//                                 {isSidebarOpen && item.label}
//                             </Nav.Link>
//                         );
//                     })}
//                 </Nav>

        
//                 <Nav.Link as={Link} to="/logout" className="logout-link d-flex align-items-center mt-auto p-3 text-danger">
                  
//                     <span className={`${isSidebarOpen ? 'me-3' : ''}`}><FiLogOut size={20} /></span>
//                     {isSidebarOpen && 'Logout'}
//                 </Nav.Link>
//             </div>
            
            
//             {isMobile && isSidebarOpen && (
//                 <div 
//                     onClick={toggleSidebar}
//                     style={{
//                         position: 'fixed',
//                         top: 0,
//                         left: 0,
//                         right: 0,
//                         bottom: 0,
//                         backgroundColor: 'rgba(0, 0, 0, 0.5)', 
//                         zIndex: 1040, 
//                     }}
//                 />
//             )}


           
//             <div 
//                 className="flex-grow-1 d-flex flex-column" 
//                 style={{ 
                    
//                     marginLeft: contentMargin,
//                     transition: 'margin-left 0.3s ease-in-out',
//                 }}
//             >
               
//                 <Header 
//                     mobileToggle={isMobile ? 
//                         (
//                             <Button variant="link" onClick={toggleSidebar} className="p-0 me-3 text-dark">
//                                 <FiMenu size={24} />
//                             </Button>
//                         ) : null
//                     }
//                 />
            
//                 <main className="p-4 flex-grow-1" style={{ backgroundColor: '#F8F9FA' }}>
//                     {children}
//                 </main>
//             </div>
//         </div>
//     );
// };

// export default Layout;