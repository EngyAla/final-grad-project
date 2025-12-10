import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StepOne from '../StepComponent/StepOne';
// import StepTwo from '../StepComponent/StepTwo';
import StepThree from '../StepComponent/StepThree';
// import StepFour from '../StepComponent/StepFour';
import StepFive from '../StepComponent/StepFive';
import { ProfileCtx } from '../../../context/ProfileCtx';
import API_URL  from '../../../config/api'


const MultiStepForm = ({ selectedDoctor, formData, setFormData, handleClose}) => {
    // @ts-ignore
    const { userInfo } = React.useContext(ProfileCtx);
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = ['Consultation Details', 'Patient Details', 'Confirmation Summary'];
    const stepComponent = [
        <StepOne selectedDoctor={selectedDoctor} formData={formData} setFormData={setFormData}/>,
        // <StepTwo selectedDoctor={selectedDoctor} setFormData={setFormData} />,
        <StepThree setFormData={setFormData} />,
        // <StepFour selectedDoctor={selectedDoctor} setFormData={setFormData} />,
        <StepFive selectedDoctor={selectedDoctor} formData={formData} />
    ]
        const validateSteps = () =>{
        if(activeStep === 0){
            return formData.selectedDataTime?.day !== "" &&
            formData.selectedDataTime?.start !== "" &&
            formData.selectedDataTime?.end !== "" &&
            formData.paymentMethod !== "" &&
            formData.consultationType !== "";
        }
        if(activeStep === 1){
            return formData.firstName.trim() !== "" &&
            formData.lastName.trim() !== "" &&
            formData.gender !== "" &&
            formData.phone.length === 11 &&
            formData.reasonForVisit !== "";
        } 
        return true;
    }

    const handleNext = () => {
        if(!validateSteps()){
            alert("Please fill all required fields before continuing.")
            return;
        }
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };
    ////////////
    const handelAppointment = async () =>{
        if(!validateSteps()){
            alert("Please fill all required fields before continuing.")
            return;
        }
        try{
            const appointmentData = {
                doctor: selectedDoctor._id,      
                patient: userInfo._id,      
                selectedDateTime: formData.selectedDataTime,
                consultationType: formData.consultationType,
                firstName: formData.firstName,
                lastName: formData.lastName,
                reasonForVisit: formData.reasonForVisit,
                phone: formData.phone,
                paymentMethod: formData.paymentMethod
            }
            console.log(appointmentData)

            const response = await fetch(`${API_URL}/api/appointments/create`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(appointmentData),
            });
            const result = await response.json();
            console.log("Appointement created successfully: ", result )
            alert("Appointement created successfully");

            if (!response.ok){
                const errorData = await response.json();
                console.log("Error submitting appointement: ", errorData)
                alert(`Error: ${errorData.msg || "Server error"}`);
                return;
            }
        } catch (err){
            console.log(err)
            alert("Failed to submit appointement. Check console for details.");
        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label) => {
                const stepProps = {};
                const labelProps = {};
                return (
                    <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps} >{label}</StepLabel>
                    </Step>
                );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                
                <React.Fragment>
                    <Typography sx={{ mt: 2, mb: 1 }}>
                        All steps completed - you&apos;re finished
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button onClick={handleReset}>Reset</Button>
                    </Box>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box sx={{ mt: 2, mb: 1 }}>
                        {stepComponent[activeStep]}
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                        <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                        >
                        Back
                        </Button>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <Button variant="contained" onClick={activeStep === steps.length - 1 ? () =>{
                            handleReset()
                            handleClose()
                            handelAppointment()
                        } : handleNext}>
                            {activeStep === steps.length - 1 ? 'Confirm Booking' : 'Next'}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}

export default MultiStepForm;