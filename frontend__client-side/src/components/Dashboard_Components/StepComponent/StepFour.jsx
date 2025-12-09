// import React from 'react'
// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'


// const StepFour = ({ selectedDoctor, setFormData }) => {
//     return (
//         <FormControl sx={{padding: "30px 0px"}}>
//             <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
//             <RadioGroup
//                 row
//                 aria-labelledby="demo-row-radio-buttons-group-label"
//                 name="row-radio-buttons-group"
//                 onChange={(e) => {
//                     setFormData((prev) =>({
//                     ...prev,
//                     paymentMethod: e.target.value
//                 }))
//                 // console.log(formData)
//                 }}
//             >
//             {
//                 selectedDoctor?.consultationType === "all" ? (
//                     <>
//                         <FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
//                         <FormControlLabel value="cash" control={<Radio />} label="Cash" />
//                     </>
//                 ) :
//                 selectedDoctor?.consultationType === "online" ?
//                 (
//                     <>
//                         <FormControlLabel value="creditCard" control={<Radio />} label="Credit Card" />
//                         <FormControlLabel value="visa" control={<Radio />} label="Visa" />
//                         <FormControlLabel value="paymob" control={<Radio />} label="Paymob" />
//                         <FormControlLabel value="vodafoneCash" control={<Radio />} label="Vodafone Cash" />
//                     </>
//                 ) :
//                 (
//                     <>
//                         <FormControlLabel value="cash" control={<Radio />} label="Cash" />
//                         <FormControlLabel value="POSMachine" control={<Radio />} label="POS Machine" />
//                     </>
//                 )
//             }
//             </RadioGroup>
//         </FormControl>
//     )
// }

// export default StepFour