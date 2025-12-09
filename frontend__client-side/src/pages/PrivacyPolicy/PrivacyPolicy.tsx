import PageHeader from "../../components/Headings/PageHeader/PageHeader";
import InformationCollection from "../../components/PrivacyPolicy_Components/sections/InformationCollection/InformationCollection";
import InformationUsage from "../../components/PrivacyPolicy_Components/sections/InformationUsage/InformationUsage";
import InformationSharing from "../../components/PrivacyPolicy_Components/sections/InformationSharing/InformationSharing";
import DataSecurity from "../../components/PrivacyPolicy_Components/sections/DataSecurity/DataSecurity";
import UserRights from "../../components/PrivacyPolicy_Components/sections/UserRights/UserRights";
import CookiesAndTracking from "../../components/PrivacyPolicy_Components/sections/CookiesAndTracking/CookiesAndTracking";
import ContactUs from "../../components/PrivacyPolicy_Components/sections/ContactUs/ContactUs";
import PolicyUpdates from "../../components/PrivacyPolicy_Components/sections/PolicyUpdates/PolicyUpdates";
import "./PrivacyPolicy.scss";

const PrivacyPolicy = () => {
    return (
        <section className="Privacy-Policy-Page main-section">
            <div className="container">
                {/* =============== Header =============== */}
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <PageHeader
                            title="Privacy Policy"
                            subtitle="Last updated: January 2025"
                            description="We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Clinica platform."
                        />
                    </div>
                </div>

                {/* =============== Content =============== */}
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="privacy-content">
                            <InformationCollection />
                            <InformationUsage />
                            <InformationSharing />
                            <DataSecurity />
                            <UserRights />
                            <CookiesAndTracking />
                            <ContactUs />
                            <PolicyUpdates />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrivacyPolicy;
