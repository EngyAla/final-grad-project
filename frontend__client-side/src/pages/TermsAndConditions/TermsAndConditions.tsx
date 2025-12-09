import PageHeader from "../../components/Headings/PageHeader/PageHeader";
import AcceptanceOfTerms from "../../components/TermsAndConditions_Components/sections/AcceptanceOfTerms/AcceptanceOfTerms";
import ServiceDescription from "../../components/TermsAndConditions_Components/sections/ServiceDescription/ServiceDescription";
import UserResponsibilities from "../../components/TermsAndConditions_Components/sections/UserResponsibilities/UserResponsibilities";
import ProhibitedActivities from "../../components/TermsAndConditions_Components/sections/ProhibitedActivities/ProhibitedActivities";
import PaymentTerms from "../../components/TermsAndConditions_Components/sections/PaymentTerms/PaymentTerms";
import "./TermsAndConditions.scss";

const TermsAndConditions = () => {
    return (
        <section className="Terms-And-Conditions-Page main-section">
            <div className="container">
                {/* ================== Header ================== */}
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <PageHeader
                            title="Terms and Conditions"
                            subtitle="Last updated: January 2025"
                            description="These Terms and Conditions govern your use of the Clinica platform. By using our services, you agree to be bound by these terms. Please read them carefully."
                        />
                    </div>
                </div>

                {/* ================== Content ================== */}
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="terms-content">
                            <AcceptanceOfTerms />
                            <ServiceDescription />
                            <UserResponsibilities />
                            <ProhibitedActivities />
                            <PaymentTerms />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermsAndConditions;
