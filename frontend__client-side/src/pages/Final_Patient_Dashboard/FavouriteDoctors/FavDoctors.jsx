import React, { useContext } from "react";
// @ts-ignore
import styles from "../Doctors_Directory/doctorDirectory.module.css";
import { FavouriteContext } from "../../../context/Patient_Context/AddToFavCtx";
import { Avatar, Box, Button, Grid } from "@mui/material";
import { Link } from "react-router";
import { formatCurrency } from "../../../utilities/formatCurrency";
import { IoLocationOutline } from "react-icons/io5";
import { BiHome } from "react-icons/bi";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineSell } from "react-icons/md";
import { FaRegStar } from "react-icons/fa6";
// import { FaRegHeart } from "react-icons/fa";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
// @ts-ignore
import not_found_img from "../../../assets/notFoundSVG.svg";

const FavDoctors = () => {
  // @ts-ignore
    const { favourites } = useContext(FavouriteContext);
    return (
        <Box className="doctor_card" sx={{margin: "25px"}}>
        {favourites.length == 0 ? (
            <div className={styles.not_found_res}>
            <img src={not_found_img} alt="no result image" width={600} />
            <h1>No Favourites Yet</h1>
            <p>Add doctors to your favourites for quick access.</p>
            </div>
        ) : (
            <>
                <h2 style={{marginBottom: "40px"}}>Saved Specialists</h2>
                <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                {favourites.map((doc) => {
                    return (
                    <Grid
                        key={doc._id}
                        className={styles.doctor_card}
                        size={{ sm: 12, md: 4 }}
                    >
                        <div className="card mb-3">
                        <div className={`card-header ${styles.card_header}`}>
                            <Avatar
                            alt={doc.firstName}
                            src={doc.profileImage}
                            sx={{ width: 54, height: 54 }}
                            />
                            <div className="doc_card_head_name">
                            <h6>{doc.firstName} {doc.lastName}</h6>
                            <p>{doc.specialization}</p>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className={styles.doctor_details}>
                            <div className={styles.detail}>
                                <IoLocationOutline style={{ fontSize: "20px" }} />
                                <p>{doc.country}</p>
                            </div>
                            <div className={styles.detail}>
                                <BiHome style={{ fontSize: "20px" }} />
                                <p>{doc.address}</p>
                            </div>
                            <div className={styles.detail}>
                                <BsTelephone style={{ fontSize: "20px" }} />
                                <p>{doc.phoneNumber}</p>
                            </div>
                            <div className={styles.detail}>
                                <MdOutlineSell style={{ fontSize: "20px" }} />
                                <p>Consultation Type: {doc.consultationType}</p>
                            </div>
                            <div className={styles.detail}>
                                <FaRegStar style={{ fontSize: "20px" }} />
                                <p>4.2</p>
                            </div>
                            <div className={styles.detail}>
                                <RequestQuoteOutlinedIcon
                                style={{ fontSize: "20px" }}
                                />
                                <p>{formatCurrency(doc.feePerConsultation, doc.currency)}</p>
                            </div>
                            </div>
                        </div>
                        <div className={`card-footer ${styles.card_footer}`}>
                            <div>
                            <Link to={`/patient/doctordetailed/${doc._id}`}>
                                <Button variant="contained">View Profile</Button>
                            </Link>
                            </div>
                        </div>
                        </div>
                    </Grid>
                    );
                })}
                </Grid>
            </>
        )}
        </Box>
    );
};

export default FavDoctors;
