import {Button, Layout} from 'antd'
import Logo from './Logo';
import Logo2 from './Logo2';
import MenuList from '../SideBar/MenuList';
// @ts-ignore
import styles from './sidebar.module.css';


const {Sider} = Layout;

const SideBar = ({collapsed, userType}) => {

    return (
        <>
            <Sider collapsed={collapsed} collapsible trigger={null} className={styles.sidebar}>
                {collapsed ? <Logo2 /> : <Logo />}
                <MenuList userType={userType}/>
            </Sider>
        </>
    )
}

export default SideBar;