import type { NavbarDropdownProps } from "../../common/Types/Interfaces";

const NavbarDropdown = ({
    isOpen,
    onLogin,
    onLogout,
    onCloseOffcanvas,
    loginMenuRef,
}: NavbarDropdownProps) => {
    const dropdownItems = [
        {
            label: "Patient",
            onClick: () => {
                onLogin();
                onCloseOffcanvas();
            },
        },
        {
            label: "Doctor",
            onClick: () => {
                onLogin();
                onCloseOffcanvas();
            },
        },
        {
            label: "Logout",
            onClick: () => {
                onLogout();
                onCloseOffcanvas();
            },
        },
    ];

    return (
        <div
            ref={loginMenuRef}
            className={`dropdown-menu${isOpen ? " show" : ""}`}
            role="menu"
        >
            {dropdownItems.map((item, index) => (
                <button
                    key={index}
                    className="dropdown-item"
                    onClick={item.onClick}
                >
                    {item.label}
                </button>
            ))}
        </div>
    );
};

export default NavbarDropdown;
