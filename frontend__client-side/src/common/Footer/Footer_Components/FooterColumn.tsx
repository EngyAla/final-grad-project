import { NavLink } from "react-router-dom";
import type { FooterColumnProps } from "../../../common/Types/Interfaces";

const FooterColumn = ({
    title,
    links,
    colClass = "col-12 col-md-6 col-lg-4",
}: FooterColumnProps) => {
    return (
        <div className={colClass}>
            {/* ============= Title ============= */}
            <h5 className="footer-title">{title}</h5>

            {/* ============= Links ============= */}
            <ul className="footer-links">
                {links.map((link) => (
                    <li key={`${title}-${link.label}`}>
                        {/* Link */}
                        <NavLink to={link.href} className="footer-link">
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterColumn;
