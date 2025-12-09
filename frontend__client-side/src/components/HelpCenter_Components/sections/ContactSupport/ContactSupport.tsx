import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import ContactCard from "../../ContactCard/ContactCard";
import SupportHours from "../../SupportHours/SupportHours";
import { contactCards } from "../../data/helpCenterData";

const ContactSupport = () => {
    return (
        <section className="contact-support-section mb-5">
            {/* =============== Header =============== */}
            <SectionHeader title="Contact Support" icon="fa-solid fa-headset" />

            {/* =============== Contact Cards =============== */}
            <div className="row mb-4">
                {contactCards.map((card) => (
                    <ContactCard key={card.id} card={card} />
                ))}
            </div>

            {/* =============== Support Hours =============== */}
            <SupportHours />
        </section>
    );
};

export default ContactSupport;
