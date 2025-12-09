// const appointments = [
//   { id: '#7529', date: '18 sep, 2025', time: '10:30 - 11:00', patient: 'Ali Omran', type: 'On-site', price: '$100', status: 'Pending' },
//   { id: '#7529', date: '18 sep, 2025', time: '10:30 - 11:00', patient: 'Ali Omran', type: 'On-site', price: '$100', status: 'Approved' },
//   { id: '#7529', date: '18 sep, 2025', time: '10:30 - 11:00', patient: 'Ali Omran', type: 'Online', price: '$100', status: 'Rejected' },
//   { id: '#7529', date: '18 sep, 2025', time: '10:30 - 11:00', patient: 'Ali Omran', type: 'On-site', price: '$100', status: 'Completed' },
//   { id: '#7529', date: '18 sep, 2025', time: '10:30 - 11:00', patient: 'Ali Omran', type: 'Online', price: '$100', status: 'Canceled' },
// ];


// const getStatusBadge = (status) => {
//   let variant = 'light';
//   let textColor = '#000';
//   switch (status) {
//     case 'Pending':
//       variant = 'warning';
//       textColor = '#ffc107';
//       break;
//     case 'Approved':
//       variant = 'primary';
//       textColor = '#0d6efd';
//       break;
//     case 'Rejected':
//       variant = 'danger';
//       textColor = '#dc3545';
//       break;
//     case 'Completed':
//       variant = 'success';
//       textColor = '#198754';
//       break;
//     case 'Canceled':
//       variant = 'secondary';
//       textColor = '#6c757d';
//       break;
//     default:
//       break;
//   }
//   return (
//     <Badge 
//       pill 
//       className="p-2 fw-semibold" 
//       style={{ backgroundColor: `${textColor}1A`, color: textColor }}
//     >
//       {status}
//     </Badge>
//   );
// };



// const AppointmentsTable = () => {
//   return (
//     <Table hover responsive className="mb-0">
//       <thead>
//         <tr className="text-secondary small text-uppercase">
//           <th>ID</th>
//           <th>Date</th>
//           <th>Patient Info</th>
//           <th>Consultation Type</th>
//           <th>Total Price</th>
//           <th>Status</th>
//           <th>Actions</th>
//         </tr>
//       </thead>
//       <tbody>
//         {appointments.map((appointment, index) => (
//           <tr key={index}>
//             {/* ID */}
//             <td><a href="#" className="text-decoration-none text-primary fw-semibold">{appointment.id}</a></td>
            
//             {/* Date */}
//             <td>
//               <div className="fw-semibold">{appointment.date}</div>
//               <div className="text-muted small">{appointment.time}</div>
//             </td>
            
//             {/* Patient Info */}
//             <td><a href="#" className="text-decoration-none text-dark">{appointment.patient}</a></td>
            
//             {/* Consultation Type */}
//             <td>{appointment.type}</td>
            
//             {/* Total Price */}
//             <td>{appointment.price}</td>
            
//             {/* Status */}
//             <td>{getStatusBadge(appointment.status)}</td>
            
//             {/* Actions */}
//             <td>
//               <div style={{ cursor: 'pointer', fontSize: '1.5rem', lineHeight: '10px' }}>
//                 <span className="text-secondary">...</span> 
//               </div>
//             </td>
//           </tr>
//         ))}
//       </tbody>
//     </Table>
//   );
// };

