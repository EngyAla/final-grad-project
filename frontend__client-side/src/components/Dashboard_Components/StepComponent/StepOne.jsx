import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import { useEffect } from 'react';

// import React, { useState } from 'react'

const StepOne = ({ selectedDoctor, setFormData, formData }) => {
    // const [selectedCard, setSelectedCard] = useState(null);
        useEffect(() => {
        if (!selectedDoctor) return;

        if (selectedDoctor.consultationType === "online") {
            setFormData(prev => ({
                ...prev,
                consultationType: "Online"
            }));
        } else if (selectedDoctor.consultationType === "inperson") {
            setFormData(prev => ({
                ...prev,
                consultationType: "inperson"
            }));
        }
    }, [selectedDoctor, setFormData]);

    return (
        <Box sx={{padding: "30px 0px"}}>
            <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Select Date & Time</label>
                <select className="form-select " id="inputGroupSelect01" aria-label="Default select example" onChange={(e) =>{
                        setFormData((prev) =>({
                            ...prev,
                            selectedDataTime: JSON.parse(e.target.value)
                        }))
                        // console.log(formData)
                    }}>
                    <option>Choose...</option>
                    {
                        selectedDoctor?.availableTiming.map((e, index) =>{
                            return(
                                <option value={JSON.stringify(
                                    {
                                        day: e?.day,
                                        start: e?.start,
                                        end: e?.end
                                    }
                                )} key={index}>{e?.day} {e?.start} - {e?.end}</option>
                            )
                        })
                    }
                </select>  
            </div>
            <FormControl sx={{marginTop: "20px"}}>
            {
                selectedDoctor?.consultationType === "all" && (
                    <FormLabel id="demo-row-radio-buttons-group-label">Consultation Type</FormLabel>
                )
            }
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => {
                    setFormData((prev) =>({
                    ...prev,
                    consultationType: e.target.value
                }))
                // console.log(formData)
                }}
            >
            {
                selectedDoctor?.consultationType === "all" && (
                    <>
                        <FormControlLabel value="Online" control={<Radio />} label="Online" />
                        <FormControlLabel value="inperson" control={<Radio />} label="Inperson" />
                    </>
                ) 
            }
            </RadioGroup>
        </FormControl>
        <br />
        <FormControl sx={{marginTop: "20px"}}>
            <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                onChange={(e) => {
                    setFormData((prev) =>({
                    ...prev,
                    paymentMethod: e.target.value
                }))
                // console.log(formData)
                }}
            >
            {
                (selectedDoctor?.consultationType === "all" && formData.consultationType === "") ? 
                (
                        <>
                            <FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="visa" control={<Radio />} label="Visa" />
                            <FormControlLabel value="paymob" control={<Radio />} label="Paymob" />
                            <FormControlLabel value="vodafoneCash" control={<Radio />} label="Vodafone Cash" />
                            <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                            <FormControlLabel value="POSMachine" control={<Radio />} label="POS Machine" />
                        </>
                ) : (selectedDoctor?.consultationType === "all" && formData.consultationType === "Online") ||  (selectedDoctor?.consultationType === "online") 
                ?
                    (
                        <>
                            <FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
                            <FormControlLabel value="visa" control={<Radio />} label="Visa" />
                            <FormControlLabel value="paymob" control={<Radio />} label="Paymob" />
                            <FormControlLabel value="vodafoneCash" control={<Radio />} label="Vodafone Cash" />
                        </>
                    ) 
                :
                    (
                        <>
                            <FormControlLabel value="cash" control={<Radio />} label="Cash" />
                            <FormControlLabel value="POSMachine" control={<Radio />} label="POS Machine" />
                        </>
                    )
            }
            </RadioGroup>
        </FormControl>
        </Box>
    )
}

export default StepOne