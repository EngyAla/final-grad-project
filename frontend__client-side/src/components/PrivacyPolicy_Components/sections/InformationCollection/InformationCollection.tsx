import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import InfoList from "../../InfoList/InfoList";
import { personalInfoData } from "../../data/privacyData";

const InformationCollection = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="Information We Collect"
                icon="fa-solid fa-database"
            />

            {/* =============== Personal Information =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <h4 className="h5 fw-semibold mb-3">
                        Personal Information
                    </h4>
                    <InfoList items={personalInfoData} />
                </div>
            </div>
        </section>
    );
};

export default InformationCollection;
