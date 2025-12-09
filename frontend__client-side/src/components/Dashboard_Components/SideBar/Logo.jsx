// @ts-ignore
import { NavLink } from 'react-router';
import logo from '../../../assets/Logo.png';
// @ts-ignore
import styles from './sidebar.module.css';



const Logo = () => {
    return (
        <div className={styles.logo}>
            <NavLink to={'/'}>
                <div className="logo-icon">
                    <img src={logo} alt="logo_image" width={"150px"} />
                </div>
            </NavLink>
        </div>
    )
}



export default Logo;