import AlertBox from "../../../LegalPages_Components/AlertBox/AlertBox";
import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";

const AcceptanceOfTerms = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="Acceptance of Terms"
                icon="fa-solid fa-handshake"
            />

            {/* =============== Terms Content =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <p className="mb-3">
                        By accessing and using the Clinica platform, you accept
                        and agree to be bound by the terms and provision of this
                        agreement. If you do not agree to abide by the above,
                        please do not use this service.
                    </p>
                    <AlertBox
                        type="info"
                        title="Important Notice"
                        message="These terms constitute a legally binding agreement between you and Clinica. Your continued use of our services indicates your acceptance of any modifications to these terms."
                        icon="fa-solid fa-info-circle"
                    />
                </div>
            </div>
        </section>
    );
};

export default AcceptanceOfTerms;
