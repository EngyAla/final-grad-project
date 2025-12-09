import { Box } from '@mui/material'
import React from 'react'

const StepFive = ({ selectedDoctor, formData }) => {
    // console.log(formData)
    return (
        <Box sx={{padding: "30px 0px"}}>
            <div className="container">
                <h4 style={{marginBottom:"15px"}}>Doctor Information</h4>
                <div className="row">
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Name: </span>{selectedDoctor?.firstName} {selectedDoctor?.lastName}</p>
                    </div>
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Specialization: </span>{selectedDoctor?.specialization}</p>
                    </div>
                    <div className="col">
                        <p>Consultation Fee: <span>{selectedDoctor?.feePerConsultation}</span></p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h4 style={{marginBottom:"15px"}}>Patient Information</h4>
                <div className="row">
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Name: </span>{formData?.firstName} {formData?.lastName}</p>
                    </div>
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Phone: </span>{formData?.phone}</p>
                    </div>
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Gender: </span>{formData?.gender}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h4 style={{marginBottom:"15px"}}>Appointment Information</h4>
                <div className="row">
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Time: </span>{formData?.selectedDataTime.day} {formData?.selectedDataTime.start}-{formData?.selectedDataTime.end}</p>
                    </div>
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Duration: </span>{selectedDoctor?.visitDuration}</p>
                    </div>
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Session Type: </span>{selectedDoctor?.consultationType}</p>
                    </div>
                    <div className="col">
                        <p><span style={{fontWeight: "600"}}>Payment Method: </span>{formData?.paymentMethod}</p>
                    </div>
                </div>
            </div>
        </Box>
    )
}

export default StepFive;