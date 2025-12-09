import * as React from 'react';
// @ts-ignore
import styles from './navbar.module.css'
import { Button, Layout } from "antd";
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Avatar } from '@mui/material';
import {ProfileCtx} from '../../../context/ProfileCtx'  ////=>
import { useContext } from 'react';
import { Link } from 'react-router';

const { Header} = Layout;


    const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
        width: '20ch',
        },
    },
    }));



const NavBar = ({collapsed, toggleCollapsed}) => {

    // @ts-ignore
    const { userInfo } = useContext(ProfileCtx);

    return (
        <Header
            style={{
                width: "100%",
                padding: "0px",
                background: 'unset',                
            }}
            >
        <Box  sx={{ flexGrow: 1 }} >
            <AppBar position="static" className={styles.navbar}>
                <Toolbar>
                <Button type="text" onClick={toggleCollapsed} className={styles.toggle_btn}>
                    {collapsed ? <MenuOpenIcon className={styles.toggle_icon}/> : <MenuIcon className={styles.toggle_icon}/>}
                </Button>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'none', sm: 'block' }, color: "#404040" }}
                >
                    Welcome Back, <span className={styles.patient_name}>{userInfo.firstName} {userInfo.lastName}</span>
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Search className={styles.search_box} style={{height: "45px", display:"flex", alignItems:"center"}}>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search Doctor…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                    >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon sx={{color: " #2653D0"}}/>
                    </Badge>
                    </IconButton>
                    <Link to={'/patientprofile'}>
                    <IconButton
                    size="large"
                    edge="end"
                    aria-label="account of current user"
                    // aria-controls={menuId}
                    aria-haspopup="true"
                    // onClick={handleProfileMenuOpen}
                    color="inherit"
                    >
                    {/* <AccountCircle /> */}
                    <Avatar alt="Mr. Ali" src={userInfo.profileImage} sx={{ width: 50, height: 50 }}/>
                    </IconButton>
                    </Link>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="show more"
                    // aria-controls={mobileMenuId}
                    aria-haspopup="true"
                    // onClick={handleMobileMenuOpen}
                    color="inherit"
                    >
                    <MoreIcon />
                    </IconButton>
                </Box>
                </Toolbar>
            </AppBar>

        </Box>
    </Header>
    )
}

export default NavBar;