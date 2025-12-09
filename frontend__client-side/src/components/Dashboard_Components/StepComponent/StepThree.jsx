import { Box, TextField } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TransgenderIcon from '@mui/icons-material/Transgender';

const StepThree = ({ setFormData }) => {

    return (
        <>
            <Box sx={{display: "flex", gap: "20px", padding: "30px 0px"}}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="First Name" aria-label="Username" aria-describedby="basic-addon1" 
                    onChange={(e) => setFormData((prev) =>({
                            ...prev,
                            firstName: e.target.value
                        }))}
                    />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">@</span>
                    <input type="text" className="form-control" placeholder="Last Name" aria-label="Username" aria-describedby="basic-addon1" 
                    onChange={(e) => setFormData((prev) =>({
                            ...prev,
                            lastName: e.target.value
                        }))}
                    />
                </div>
            </Box>
            <Box sx={{display: "flex", gap: "20px"}}>
                <div className="input-group mb-3">
                    <label className="input-group-text" htmlFor="inputGroupSelect02"><TransgenderIcon sx={{fontSize: "18px"}}/></label>
                    <select className="form-select" id='inputGroupSelect02' aria-label="Default select example" 
                        onChange={(e) => setFormData((prev) =>({
                            ...prev,
                            gender: e.target.value
                        }))}>
                        <option>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1"><LocalPhoneIcon sx={{fontSize: "18px"}}/></span>
                    <input type="text" className="form-control" placeholder="Phone Number" aria-label="Username" aria-describedby="basic-addon1" 
                    onChange={(e) => setFormData((prev) =>({
                        ...prev,
                        phone: e.target.value
                    }))}
                    />
                </div>
            </Box>
            <Box sx={{padding: "30px 0px"}}>
                <div className="input-group">
                    <span className="input-group-text">Reason for Visit (Optional)</span>
                    <textarea className="form-control" aria-label="With textarea" 
                    onChange={(e) => setFormData((prev) =>({
                    ...prev,
                    reasonForVisit: e.target.value
                }))}>
                </textarea>
                </div>
            </Box>
        </>
    )
}

export default StepThree;