import PatientReservations from '../../../pages/Final_Patient_Dashboard/Reservations/PatientReservations';
import AnalaticesCards from '../../../components/Dashboard_Components/AnalaticesCards/AnalaticesCards'
import React from 'react'

const PatientDashboard = () => {
    return (
        <div>
            <AnalaticesCards />
            <PatientReservations />
        </div>
    )
}

export default PatientDashboard;