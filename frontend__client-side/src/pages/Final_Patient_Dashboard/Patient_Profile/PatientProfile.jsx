import { Avatar, Box, Button, Card, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useContext } from 'react'
// @ts-ignore
import styles from './PatientProfile.module.css'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import {ProfileCtx} from '../../../context/ProfileCtx'


const PatientProfile = () => {
    // @ts-ignore
    const {isEditing, setIsEditing, userInfo, setUserInfo, handleImageChange, handelSave} = useContext(ProfileCtx);


    return (
        <Card className={styles.profile}>
            <h3>Personal Information</h3>
            <div className={styles.personalInfo_header}>
                <div className={styles.image_name_container}>
                    <Avatar alt={userInfo.firstName} src={userInfo.profileImage}  sx={{ width: 75, height: 75 }}/>
                    <div className={styles.head_name}>
                        <h5>{userInfo.firstName} {userInfo.lastName}</h5>
                        <p>Patient ID: {userInfo._id}</p>
                    </div>
                </div>
                {isEditing && (
                    <Button component="label" variant="outlined"><CloudUploadOutlinedIcon />
                    <input 
                    type='file'
                    accept="image/*"
                    hidden
                    onChange={handleImageChange} />
                    &nbsp;
                    Edit Profile Picture</Button>
                )}
            </div>
            <hr style={{margin: "30px 0px" }}/>
            {
                isEditing ? (
                    <div>
                        <Grid className={styles.presonalInfo_data} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                    id="outlined-required"
                                    label="First Name"
                                    defaultValue={userInfo.firstName}
                                    onChange={(e) => setUserInfo(prev => ({...prev, firstName: e.target.value}))}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                    id="outlined-required"
                                    label="Last Name"
                                    defaultValue={userInfo.lastName}
                                    onChange={(e) => setUserInfo(prev => ({...prev, lastName: e.target.value}))}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                    type='number'
                                    id="outlined-required"
                                    label="Age"
                                    defaultValue={userInfo.age}
                                    onChange={(e) => setUserInfo(prev => ({...prev, age: parseInt(e.target.value)}))}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={userInfo.gender}
                                        label="Gender"
                                        onChange={(e) => setUserInfo(prev => ({...prev, gender: e.target.value}))}
                                    >
                                        <MenuItem value={"Male"}>Male</MenuItem>
                                        <MenuItem value={"Female"}>Female</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                    id="outlined-required"
                                    label="Phone Number"
                                    defaultValue={userInfo.phoneNumber}
                                    onChange={(e) => setUserInfo(prev => ({...prev, phoneNumber: e.target.value}))}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                    disabled
                                    id="outlined-disabled"
                                    label="Email"
                                    defaultValue={userInfo.email}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                    disabled
                                    id="outlined-disabled"
                                    label="National Id"
                                    defaultValue={userInfo.nationalId}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={userInfo.country}
                                        label="Country"
                                        onChange={(e) => setUserInfo(prev => ({...prev, country: e.target.value}))}
                                    >
                                        <MenuItem value={"Egypt"}>Egypt</MenuItem>
                                        <MenuItem value={"USA"}>USA</MenuItem>
                                        <MenuItem value={"UK"}>UK</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <hr style={{margin: "30px 0px" }}/>

                        <h3>Medical Information</h3>
                            <Grid className={styles.medicalInfo_data} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid size={{ sm: 12, md: 6 }}>
                                    <FormControl>
                                        <FormLabel id="demo-row-radio-buttons-group-label">Chronic Diseases?</FormLabel>
                                        <RadioGroup
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            onChange={(e) => setUserInfo(prev => ({...prev,hasChronicDisease: e.target.value === "true"}))}
                                            value={userInfo.hasChronicDisease}
                                        >
                                            <FormControlLabel value={true} control={<Radio />} label="Yes" />
                                            <FormControlLabel value={false} control={<Radio />} label="No" />
                                        </RadioGroup>
                                    </FormControl>
                                </Grid>
                                {
                                    userInfo.chronicDiseases === true &&
                                    (
                                        <>
                                        <Grid size={12}>
                                            <TextField fullWidth
                                            id="outlined-multiline-static"
                                            label="Please enter your chronic disease."
                                            multiline
                                            rows={4}
                                            placeholder="e.g., Diabetes, Hypertension, Asthma"
                                            value={userInfo.chronicDisease}
                                            onChange={(e) => setUserInfo((prev) => ({...prev, chronicDisease: e.target.value}))}
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField fullWidth
                                            id="outlined-multiline-static"
                                            label="Medical History (optional)"
                                            multiline
                                            rows={4}
                                            placeholder="e.g., past surgeries, allergies, medications"
                                            value={userInfo.medicalHistory}
                                            onChange={(e) => setUserInfo((prev) => ({...prev, medicalHistory: e.target.value}))}
                                            />
                                        </Grid>
                                        </>
                                    )
                                }
                                
                            </Grid>

                        <hr style={{margin: "30px 0px" }}/>

                        <h3>Emergency Contact</h3>
                            <Grid className={styles.presonalInfo_data} container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <Grid size={{ sm: 12, md: 6 }}>
                                    <FormControl fullWidth>
                                        <TextField
                                        id="outlined-required"
                                        label="Full Name"
                                        defaultValue={userInfo.emergencyFirstName}
                                        onChange={(e) => setUserInfo(prev => ({...prev, emergencyFirstName: e.target.value}))}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6 }}>
                                    <FormControl fullWidth>
                                        <TextField
                                        id="outlined-required"
                                        label="Relationship"
                                        defaultValue={userInfo.emergencyRelationship}
                                        onChange={(e) => setUserInfo(prev => ({...prev, emergencyRelationship: e.target.value}))}
                                        />
                                    </FormControl>
                                </Grid>
                                <Grid size={{ sm: 12, md: 6 }}>
                                    <FormControl fullWidth>
                                        <TextField
                                        id="outlined-required"
                                        label="Phone Number"
                                        defaultValue={userInfo.emergencyPhone}
                                        onChange={(e) => setUserInfo(prev => ({...prev, emergencyPhone: e.target.value}))}
                                        />
                                    </FormControl>
                                </Grid>
                            </Grid>
                    </div>
                ) : 
                <Grid className={styles.presonalInfo_data} container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>First Name</p>
                        <h6>{userInfo.firstName}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Last Name</p>
                        <h6>{userInfo.lastName}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Age</p>
                        <h6>{userInfo.age}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Gender</p>
                        <h6>{userInfo.gender}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Phone Number</p>
                        <h6>{userInfo.phoneNumber}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Country</p>
                        <h6>{userInfo.country}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Email</p>
                        <h6>{userInfo.email}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>National Id</p>
                        <h6>{userInfo.nationalId}</h6>
                    </Grid>
                    {
                        userInfo.hasChronicDisease === true &&(
                    <>
                        <Grid  size={{ sm: 12 }}>
                            <hr style={{margin: "30px 0px" }}/>
                            <h3>Medical Information</h3>
                        </Grid>
                        <Grid size={{ sm: 12, md: 12 }}>
                            <p>Chronic Diseases</p>
                            <h6>{userInfo.chronicDisease}</h6>
                        </Grid>
                        <Grid size={{ sm: 12, md: 12 }}>
                            <p>Medical Hostory</p>
                            <h6>{userInfo.medicalHistory}</h6>
                        </Grid>
                    </>
                        )
                    }
                    <Grid  size={{ sm: 12 }}>
                        <hr style={{margin: "30px 0px" }}/>
                        <h3>Emergency Contact</h3>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Full Name</p>
                        <h6>{userInfo.emergencyFirstName}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Relationship</p>
                        <h6>{userInfo.emergencyRelationship}</h6>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Phone Number</p>
                        <h6>{userInfo.emergencyPhone}</h6>
                    </Grid>
                </Grid>
            }


            <div className={styles.edit_btn}>
            {
                isEditing ?
                (
                    <Button variant="contained" onClick={handelSave}>Save Changes</Button>
                ) :
                (
                    <Button variant="contained" onClick={() => setIsEditing(true)}>Edit</Button>
                )
            }
            </div>
        </Card>
    )
}

export default PatientProfile;