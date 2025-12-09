import "./Footer.scss";
import { footerColumns } from "./footerData";
import FooterColumn from "./Footer_Components/FooterColumn";
import FooterContact from "./Footer_Components/FooterContact";
import FooterBottom from "./Footer_Components/FooterBottom";

const Footer = () => {
    return (
        <footer className="Main-Footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row g-4">
                        {footerColumns.map((col) => (
                            <FooterColumn
                                key={col.title}
                                title={col.title}
                                links={col.links}
                                colClass="col-12 col-md-6 col-lg-4"
                            />
                        ))}
                        <FooterContact />
                    </div>
                </div>
                <FooterBottom />
            </div>
        </footer>
    );
};

export default Footer;
