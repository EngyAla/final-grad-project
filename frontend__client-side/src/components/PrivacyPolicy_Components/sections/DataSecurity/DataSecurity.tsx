import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import SecurityFeature from "../../SecurityFeature/SecurityFeature";
import { securityFeatures } from "../../data/privacyData";

const DataSecurity = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader title="Data Security" icon="fa-solid fa-lock" />

            {/* =============== Security Features =============== */}
            <div className="row">
                {securityFeatures.map((feature) => (
                    <div key={feature.id} className="col-md-4 mb-3">
                        <SecurityFeature feature={feature} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DataSecurity;
