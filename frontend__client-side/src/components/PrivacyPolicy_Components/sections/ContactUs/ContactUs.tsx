import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import ContactInfo from "../../../LegalPages_Components/ContactInfo/ContactInfo";
import { contactInfo } from "../../data/privacyData";

const ContactUs = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader title="Contact Us" icon="fa-solid fa-envelope" />

            {/* =============== Contact Info =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    {/* Description */}
                    <p className="mb-3">
                        If you have any questions about this Privacy Policy or
                        our data practices, please contact us:
                    </p>
                    {/* Contact Info (Email and Phone) */}
                    <div className="row">
                        {contactInfo.slice(0, 2).map((contact) => (
                            <div key={contact.type} className="col-md-6 mb-3">
                                <ContactInfo contact={contact} />
                            </div>
                        ))}
                    </div>
                    {/* Address */}
                    <div className="mt-3">
                        <ContactInfo contact={contactInfo[2]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
