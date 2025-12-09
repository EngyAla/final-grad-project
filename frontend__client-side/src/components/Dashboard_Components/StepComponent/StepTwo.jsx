// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
// import React from 'react'

// const StepTwo = ({ selectedDoctor, setFormData }) => {
//     return (
//         <FormControl sx={{padding: "30px 0px"}}>
//             <FormLabel id="demo-row-radio-buttons-group-label">Consultation Type</FormLabel>
//             <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//                 onChange={(e) => {
//                     setFormData((prev) =>({
//                     ...prev,
//                     consultationType: e.target.value
//                 }))
//                 // console.log(formData)
//                 }}
//             >
//             {
//                 selectedDoctor?.consultationType === "all" ? (
//                     <>
//                         <FormControlLabel value="Online" control={<Radio />} label="Online" />
//                         <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
//                     </>
//                 ) :
//                 selectedDoctor?.consultationType === "online" ?
//                 <FormControlLabel value="Online" control={<Radio />} label="Online" /> :
//                 <FormControlLabel value="Offline" control={<Radio />} label="Offline" />
//             }
//             </RadioGroup>
//         </FormControl>
//     )
// }

// export default StepTwo