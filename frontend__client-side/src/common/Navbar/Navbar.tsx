import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
    NavbarLinks,
    NavbarButtons,
    navbarLinks,
} from "../../components/Navbar_Components";
import { fadeInUp, buttonVariants } from "../Animations";
import "./Navbar.scss";
import logo from "../../assets/images/main-logo.png";

const Navbar = () => {
    const closeBtnRef = useRef<HTMLButtonElement>(null!);
    const loginBtnRef = useRef<HTMLButtonElement>(null!);
    const loginMenuRef = useRef<HTMLDivElement>(null!);
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
        setIsLoginOpen(false);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setIsLoginOpen(false);
    };

    const handleToggleLogin = () => {
        setIsLoginOpen((prev) => !prev);
    };

    const handleCloseOffcanvas = () => {
        closeBtnRef.current?.click();
    };

    const handleLinkClick = () => {
        closeBtnRef.current?.click();
    };

    const handleLanguageClick = () => {
        console.log("Language clicked");
    };

    // Login Menu
    useEffect(() => {
        const onDocumentClick = (e: MouseEvent) => {
            const target = e.target as Node;
            if (
                isLoginOpen &&
                loginMenuRef.current &&
                !loginMenuRef.current.contains(target) &&
                loginBtnRef.current &&
                !loginBtnRef.current.contains(target)
            ) {
                setIsLoginOpen(false);
            }
        };
        document.addEventListener("click", onDocumentClick);
        return () => document.removeEventListener("click", onDocumentClick);
    }, [isLoginOpen]);

    return (
        <motion.nav
            className="navbar navbar-expand-lg"
            id="navbar"
            aria-label="Offcanvas navbar large"
            style={{ height: "75px" }}
            initial="initial"
            animate="in"
            variants={fadeInUp}
        >
            <div className="container-fluid h-100">
                {/* ======================== Logo ======================== */}
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <NavLink className="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt="logo"
                            className="img-fluid logo-img"
                            style={{ height: "190px" }}
                        />
                    </NavLink>
                </motion.div>
                {/* ================ Desktop Navbar - visible on lg and up ================= */}
                <div className="d-none d-lg-flex align-items-center w-100">
                    <div className="d-flex align-items-center justify-content-center flex-grow-1">
                        <NavbarLinks
                            links={navbarLinks}
                            onLinkClick={() => {}} // No need to close on desktop
                        />
                    </div>

                    <div className="d-flex align-items-center">
                        <NavbarButtons
                            isLoggedIn={isLoggedIn}
                            isLoginOpen={isLoginOpen}
                            onLogin={handleLogin}
                            onLogout={handleLogout}
                            onToggleLogin={handleToggleLogin}
                            onCloseOffcanvas={() => {}} // No need to close on desktop
                            loginBtnRef={loginBtnRef}
                            loginMenuRef={loginMenuRef}
                        />
                    </div>
                </div>

                {/* ======================== Mobile Language Button and Toggle ======================== */}
                <div className="d-lg-none d-flex align-items-center gap-4">
                    <motion.button
                        type="button"
                        className="language-btn"
                        onClick={handleLanguageClick}
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <i className="fa-solid fa-globe"></i>
                        <span className="d-none d-sm-block">Language</span>
                    </motion.button>

                    <motion.button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar2"
                        aria-controls="offcanvasNavbar2"
                        aria-label="Toggle navigation"
                        variants={buttonVariants}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </motion.button>
                </div>

                {/* ======================== Mobile Offcanvas ======================== */}
                <div
                    className="offcanvas offcanvas-end d-lg-none"
                    tabIndex={-1}
                    id="offcanvasNavbar2"
                    aria-labelledby="offcanvasNavbar2Label"
                >
                    <div className="offcanvas-header">
                        <h5
                            className="offcanvas-title"
                            id="offcanvasNavbar2Label"
                        >
                            Menu
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            ref={closeBtnRef}
                        >
                            <i className="fa-solid fa-times"></i>
                        </button>
                    </div>

                    {/* ======================== Mobile Navbar Content ======================== */}
                    <div className="offcanvas-body">
                        <div className="d-flex flex-column justify-content-between h-100">
                            <NavbarLinks
                                links={navbarLinks}
                                onLinkClick={handleLinkClick}
                            />

                            <NavbarButtons
                                isLoggedIn={isLoggedIn}
                                isLoginOpen={isLoginOpen}
                                onLogin={handleLogin}
                                onLogout={handleLogout}
                                onToggleLogin={handleToggleLogin}
                                onCloseOffcanvas={handleCloseOffcanvas}
                                loginBtnRef={loginBtnRef}
                                loginMenuRef={loginMenuRef}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
