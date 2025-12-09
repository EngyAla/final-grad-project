import { useContext, useEffect, useState } from 'react';
import { AppointmentsContext } from './AppointmentsCtx';
import { ProfileCtx } from '../ProfileCtx';

const AppointmentsCtxProvider = ({children}) =>{
    // @ts-ignore
    const { userInfo } = useContext(ProfileCtx)
    // console.log(userInfo)
    const [appointments, setAppointments] = useState([]);
    const [allDoctors, setAllDoctors] = useState([]);


        useEffect(() =>{
        if (!userInfo?._id) return;
        const fetchAppointment = async () =>{
            try{
                const res = await fetch(`http://localhost:5000/api/appointments/patient/${userInfo._id}`);
                const data = await res.json();
                setAppointments(data.appointments);

                const doctors = data.appointments.map((e) => e.doctor);
                setAllDoctors(doctors);

                // console.log("Reserved Doctors: ",doctors)
                // console.log("My Appointments: ",data.appointments)
            } catch(err){
                console.log(err)
            }
        }
        fetchAppointment()
    }, [userInfo])

    return(
        <AppointmentsContext.Provider value={{ appointments, allDoctors }}>
            {children}
        </AppointmentsContext.Provider>
    )
}


export default AppointmentsCtxProvider;