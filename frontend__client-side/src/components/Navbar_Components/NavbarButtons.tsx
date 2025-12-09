import { useContext } from "react";
import type { NavbarButtonsProps } from "../../common/Types/Interfaces";
import NavbarDropdown from "./NavbarDropdown";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const NavbarButtons = ({
    isLoggedIn,
    isLoginOpen,
    onLogin,
    onLogout,
    onToggleLogin,
    onCloseOffcanvas,
    loginBtnRef,
    loginMenuRef,
}: NavbarButtonsProps) => {

    const { logout } = useAuth();

    const handleLanguageClick = () => {
        console.log("Language clicked");
    };

    return (
        <div className="d-flex flex-column flex-lg-row align-items-center gap-2">
            {/* Language Button */}
            <button type="button" className="language-btn" onClick={handleLanguageClick}>
                <i className="fa-solid fa-globe"></i>
                Language
            </button>

            {/* Login / Register */}
            {!isLoggedIn ? (
                <NavLink to="/register" className="user-btn" onClick={logout}>
                    Join To Us
                </NavLink>
            ) : (
                <div className="position-relative">
                    <button
                        className="user-btn"
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={isLoginOpen}
                        onClick={onToggleLogin}
                        ref={loginBtnRef}
                    >
                        <i className="fa-solid fa-user"></i>
                        <i
                            className={`fa-solid trans-3 fa-angle-up ${
                                isLoginOpen ? "" : "rotate-180"
                            }`}
                        ></i>
                    </button>

                    <NavbarDropdown
                        isOpen={isLoginOpen}
                        onLogin={onLogin}
                        onLogout={onLogout}
                        onCloseOffcanvas={onCloseOffcanvas}
                        loginMenuRef={loginMenuRef}
                    />
                </div>
            )}
        </div>
    );
};

export default NavbarButtons;
