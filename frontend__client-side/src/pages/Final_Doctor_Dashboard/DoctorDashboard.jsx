import React, { useContext } from 'react';
import { Grid, Container, Box } from '@mui/material';
import { FiCalendar, FiDollarSign, FiXCircle } from 'react-icons/fi';
import { HiOutlineDocumentSearch } from 'react-icons/hi';
import Appointments from './Appointment/Appointments';
import StatCard from '../../components/Dashboard_Components/StatCard';
import { DocAppointmentCtx } from '../../context/Doctor_Context/DocAppointmentCtx';
import { ProfileCtx } from '../../context/ProfileCtx';
import { formatCurrency } from '../../utilities/formatCurrency';

const DoctorDashboard = () => {
  const docCtx = useContext(DocAppointmentCtx);
  const profileCtx = useContext(ProfileCtx);

  // حماية من null
  if (!docCtx || !profileCtx) {
    return <div>Loading...</div>;
  }

  const { appointments = [] } = docCtx;
  const { userInfo = { feePerConsultation: 0, currency: 'USD' } } = profileCtx;

  const statData = [
    {
      title: 'Total Appointments',
      value: appointments.length,
      icon: <FiCalendar size={22} />,
      color: '#007bff',
    },
    {
      title: 'Cancellation Rate',
      value: '5%',
      icon: <FiXCircle size={22} />,
      color: '#dc3545',
    },
    {
      title: 'Patient reviews',
      value: '230',
      icon: <HiOutlineDocumentSearch size={22} />,
      color: '#6f42c1',
    },
    {
      title: 'Total Income',
      value: formatCurrency(
        (userInfo?.feePerConsultation || 0) * (appointments?.length || 0),
        userInfo?.currency || 'USD'
      ),
      icon: <FiDollarSign size={22} />,
      color: '#28a745',
    },
  ];

  return (
    <Box maxWidth="lg" >
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {statData.map((stat, index) => (
          <Grid item size={{ sm: 12, md: 6 }} key={index}>
            <StatCard {...stat} />
          </Grid>
        ))}
      </Grid>

      {/* Appointment Table */}
      <Appointments />
    </Box>
  );
};

export default DoctorDashboard;
