import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import InfoCard from "../../InfoCard/InfoCard";
import { usageData } from "../../data/privacyData";

const InformationUsage = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="How We Use Your Information"
                icon="fa-solid fa-cogs"
            />

            {/* =============== Info Cards =============== */}
            <div className="row">
                {usageData.map((item) => (
                    <div key={item.id} className="col-md-6 mb-3">
                        <InfoCard
                            title={item.title}
                            description={item.description}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InformationUsage;
