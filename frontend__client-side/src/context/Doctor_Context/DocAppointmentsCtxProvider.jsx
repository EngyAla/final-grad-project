import { useContext, useEffect, useState } from 'react';
import { DocAppointmentCtx } from './DocAppointmentCtx'
import { ProfileCtx } from '../ProfileCtx';


const DocAppointmentsCtxProvider = (props) =>{
    const { userInfo } = useContext(ProfileCtx) || {};
    // console.log(userInfo)
    const [appointments, setAppointments] = useState([]);
    const [allPatients, setAllPatients] = useState([]);

    useEffect(() =>{
        if (!userInfo?._id) return;
        const fetchAppointment = async () =>{
            try{
                const res = await fetch(`http://localhost:5000/api/appointments/doctor/${userInfo._id}`);
                const data = await res.json();
                setAppointments(data.appointments);

                const patients = data.appointments.map((e) => e.patient);
                setAllPatients(patients);

                // console.log(patients)
                // console.log(data.appointments)
            } catch(err){
                console.log(err)
            }
        }
        fetchAppointment()
    }, [userInfo])


    return(
        <DocAppointmentCtx.Provider value={{ appointments, setAppointments, allPatients }} >
            {props.children}
        </DocAppointmentCtx.Provider>
    )
};

export default DocAppointmentsCtxProvider;