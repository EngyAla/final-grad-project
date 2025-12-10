// @ts-ignore
import { NavLink } from 'react-router';
import logo2 from '../../../assets/logo2.png';
// @ts-ignore
import styles from './sidebar.module.css';



const Logo2 = () => {
    return (
        <div className={styles.logo}>
            <NavLink to={'/'}>
                <div className="logo-icon">
                    <img src={logo2} alt="logo_image" width={"60px"} />
                </div>
            </NavLink>
        </div>
    )
}

export default Logo2;