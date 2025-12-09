// @ts-ignore
import Logo from '../../../assets/whiteLogo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

// @ts-ignore
import styles from './footer.module.css'

const Footer = () => {
    return (
        <div>
            <footer className={styles.footer}>
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div className="me-5 d-none d-lg-block fw-bold">
                        <h5>Get connected with us</h5>
                    </div>
                    <div>
                        <a href="" className="me-4 text-reset">
                            <PhoneIcon sx={{marginRight: "10px"}}/>
                            <span>(305) 444-1280</span>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <EmailIcon sx={{marginRight: "10px"}} />
                            <span>clinica@gmail.com</span>
                        </a>
                        <a href="" className="me-4 text-reset">
                            <LocationOnIcon sx={{marginRight: "10px"}} />
                            <span>Cairo, Egypt</span>
                        </a>
                    </div>
                </section>

                <div className={styles.bottom_footer}>
                    <span>
                        © 2021 Copyright: <a className="text-reset fw-bold" href="#">clinica.com</a>
                    </span>
                    <img src={Logo} alt="logo_image" width={"170px"} className='me-5 d-none d-lg-block' />
                    <div className={styles.social_icons}>
                        <div className={styles.icon_container}><a href="#"><FacebookOutlinedIcon /></a></div>
                        <div className={styles.icon_container}><a href="#"><InstagramIcon /></a></div>
                        <div className={styles.icon_container}><a href="#"><LinkedInIcon /></a></div>
                        <div className={styles.icon_container}><a href="#"><YouTubeIcon /></a></div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer