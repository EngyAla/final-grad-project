import { NavLink } from "react-router-dom";
import { socialLinks } from "../footerData";

const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="row align-items-center gy-3">
                {/* ============= Copyright ============= */}
                <div className="col-12 col-lg-4 order-3 order-lg-1 text-center text-lg-start copyright">
                    <span>© 2025 Clinica. All rights reserved.</span>
                </div>

                {/* ============= Brand ============= */}
                <div className="col-12 col-lg-4 order-1 order-lg-2 d-flex justify-content-center brand">
                    <NavLink to="/" className="logo-text fs-4 fw-medium">
                        <span>CLÍNICA</span>
                        <i className="fa-solid fa-heart"></i>
                    </NavLink>
                </div>

                {/* ============= Social ============= */}
                <div className="col-12 col-lg-4 order-2 order-lg-3 d-flex justify-content-center justify-content-lg-end social">
                    {socialLinks.map((s) => (
                        //* Social Link */
                        <a
                            key={s.aria}
                            aria-label={s.aria}
                            href={s.href}
                            className="animated-hover-link"
                        >
                            <i className={`fa-brands ${s.iconClass}`}></i>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FooterBottom;
