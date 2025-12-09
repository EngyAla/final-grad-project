import { NavLink, useNavigate, useLocation } from "react-router-dom";
import type {
    NavbarLinksProps,
    NavbarLink,
} from "../../common/Types/Interfaces";

const NavbarLinks = ({ links, onLinkClick }: NavbarLinksProps) => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent, target: string) => {
        e.preventDefault();

        if (window.location.pathname === "/" && target.includes("section=")) {
            // Force scroll to section even if URL is the same
            const params = new URLSearchParams(target.split("?")[1]);
            const section = params.get("section");

            if (section) {
                const map: Record<string, string> = {
                    stories: "#stories",
                    "how-it-works": "#how-it-works",
                    "do-more": "#do-more",
                    "our-specialists": "#our-specialists",
                    faq: "#faq",
                };
                const selector = map[section];
                if (selector) {
                    const el = document.querySelector(selector);
                    if (el) {
                        el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                        });
                    }
                }
            }
        } else {
            // Normal navigation
            navigate(target);
        }

        if (onLinkClick) {
            onLinkClick();
        }
    };

    return (
        <ul className="navbar-nav gap-2 w-100">
            {links.map((link: NavbarLink) => (
                <li className="nav-item" key={link.target}>
                    <NavLink
                        className={() => {
                            const currentPath = location.pathname + location.search;
                            const isExactMatch = currentPath === link.target;
                            const isHomeExact = link.target === "/" && currentPath === "/";
                            const isActiveLink = isExactMatch || isHomeExact;
                            return `nav-link${isActiveLink ? " active" : ""}`;
                        }}
                        to={link.target}
                        onClick={(e) => handleNavClick(e, link.target)}
                    >
                        {link.link}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default NavbarLinks;
