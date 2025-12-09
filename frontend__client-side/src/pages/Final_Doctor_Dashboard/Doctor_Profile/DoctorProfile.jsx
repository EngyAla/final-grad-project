import { Avatar, Box, Button, Card, Divider, FormControl, FormControlLabel, FormLabel, Grid, InputLabel, MenuItem, Paper, Radio, RadioGroup, Select, TextField } from '@mui/material'
import React, { useContext } from 'react'
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';

// @ts-ignore
import styles from './doctorProfile.module.css'
import { ProfileCtx } from '../../../context/ProfileCtx';
// import { FiDollarSign, FiPhone, FiMail, FiMapPin, FiClock, FiCheckCircle } from 'react-icons/fi';
// import { Container, Row, Col, Form, Image, Badge } from 'react-bootstrap';
import verifed_img from '../../../assets/Verified.png'


const DoctorProfile = () => {
    // @ts-ignore
    const {isEditing, setIsEditing, userInfo, setUserInfo, handleImageChange, handelSave} = useContext(ProfileCtx);
    // console.log(userInfo)

    return (
        <>
        <Card className={styles.profile}>
            <h3>Personal Information</h3>
            <div className={styles.personalInfo_header}>
                <div className={styles.image_name_container}>
                    <Avatar alt={userInfo.firstName} src={userInfo.profileImage}  sx={{ width: 75, height: 75 }}/>
                    <div className={styles.head_name}>
                        <Box className={styles.name_info}>
                            <h4>{userInfo?.firstName} {userInfo?.lastName} <img src={verifed_img} alt='' width={25}/></h4>
                            <p>Doctor ID: {userInfo?._id}</p>
                        </Box>
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
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-required"
                                        label="Website"
                                        defaultValue={userInfo.website}
                                        onChange={(e) => setUserInfo(prev => ({...prev, website: e.target.value}))}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-required"
                                        label="Google Maps Link"
                                        defaultValue={userInfo.addressOnMap}
                                        onChange={(e) => setUserInfo(prev => ({...prev, addressOnMap: e.target.value}))}
                                    />
                                </FormControl>
                            </Grid>
                        </Grid>
                        <hr style={{margin: "30px 0px" }}/>

                        <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className={styles.presonalInfo_data}>
                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                        id="outlined-required"
                                        label="Specialization"
                                        defaultValue={userInfo.specialization}
                                        onChange={(e) => setUserInfo(prev => ({...prev, specialization: e.target.value}))}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                        type="number"
                                        label="Years of Experience"
                                        defaultValue={userInfo.yearsExperience}
                                        onChange={(e) => setUserInfo(prev => ({...prev, yearsExperience: parseInt(e.target.value)}))}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                        type="number"
                                        label="Fee per Consultation"
                                        defaultValue={userInfo.feePerConsultation}
                                        onChange={(e) => setUserInfo(prev => ({...prev, feePerConsultation: parseFloat(e.target.value)}))}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <InputLabel>Consultation Type</InputLabel>
                                    <Select
                                        value={userInfo.consultationType}
                                        label="Consultation Type"
                                        onChange={(e) => setUserInfo(prev => ({...prev, consultationType: e.target.value}))}
                                    >
                                        <MenuItem value="online">Online</MenuItem>
                                        <MenuItem value="offline">Offline</MenuItem>
                                        <MenuItem value="all">Both</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid size={{ sm: 12, md: 6 }}>
                                <FormControl fullWidth>
                                    <TextField
                                        type="number"
                                        label="Visit Duration (Minutes)"
                                        defaultValue={userInfo.visitDuration}
                                        onChange={(e) => setUserInfo(prev => ({...prev, visitDuration: parseInt(e.target.value)}))}
                                    />
                                </FormControl>
                            </Grid>

                            {/* Available Timings Array */}
                            <Grid size={12}>
                                <p className="fw-bold">Available Timings</p>
                                {userInfo.availableTiming?.map((slot, index) => (
                                    <div key={index} style={{ marginBottom: "15px", display: "flex", gap: "15px" }}>
                                        <TextField
                                            label="Day"
                                            defaultValue={slot.day}
                                            onChange={(e) => {
                                                const updated = [...userInfo.availableTiming];
                                                updated[index].day = e.target.value;
                                                setUserInfo(prev => ({...prev, availableTiming: updated}));
                                            }}
                                        />

                                        <TextField
                                            label="Start"
                                            defaultValue={slot.start}
                                            onChange={(e) => {
                                                const updated = [...userInfo.availableTiming];
                                                updated[index].start = e.target.value;
                                                setUserInfo(prev => ({...prev, availableTiming: updated}));
                                            }}
                                        />

                                        <TextField
                                            label="End"
                                            defaultValue={slot.end}
                                            onChange={(e) => {
                                                const updated = [...userInfo.availableTiming];
                                                updated[index].end = e.target.value;
                                                setUserInfo(prev => ({...prev, availableTiming: updated}));
                                            }}
                                        />
                                    </div>
                                ))}
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
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Website</p>
                        <h6>{userInfo.website || "No website added"}</h6>
                    </Grid>

                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Google Maps Link</p>
                        <h6>
                            {userInfo.addressOnMap ? (
                                <a href={userInfo.addressOnMap} target="_blank" rel="noopener noreferrer">
                                    View Address on Google Map
                                </a>
                            ) : (
                                "No location added"
                            )}
                        </h6>
                    </Grid>
                    
                    <Grid size={{ sm: 12 }}>
                        <hr style={{margin: "30px 0px" }}/>
                    </Grid>
                    <Grid size={{ sm: 12 }}>
                        <h3>Professional Information</h3>
                    </Grid>
                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Specialization</p>
                        <h6>{userInfo.specialization}</h6>
                    </Grid>

                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Years of Experience</p>
                        <h6>{userInfo.yearsExperience}</h6>
                    </Grid>

                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Fee per Consultation</p>
                        <h6>{userInfo.fee} EGP</h6>
                    </Grid>

                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Consultation Type</p>
                        <h6>{userInfo.consultationType}</h6>
                    </Grid>

                    <Grid size={{ sm: 12, md: 6 }}>
                        <p>Visit Duration</p>
                        <h6>{userInfo.visitDuration} minutes</h6>
                    </Grid>

                    <Grid size={12}>
                        <p>Available Timings</p>
                        {userInfo.availableTiming?.map((slot, index) => (
                            <h6 key={index}>
                                {slot.day} — {slot.start} to {slot.end}
                            </h6>
                        ))}
                    </Grid>
                </Grid>
            }

            <div className={styles.edit_btn}>
            {
                isEditing ?
                (
                    <Button variant="contained" href='#' onClick={handelSave}>Save Changes</Button>
                ) :
                (
                    <Button variant="contained" href='#' onClick={() => setIsEditing(true)}>Edit</Button>
                )
            }
            </div>
        </Card>
        </>
    )
}

export default DoctorProfile;