import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import ResponsibilityList from "../../ResponsibilityList/ResponsibilityList";
import { responsibilitiesData } from "../../data/termsData";

const UserResponsibilities = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="User Responsibilities"
                icon="fa-solid fa-user-shield"
            />

            {/* =============== Responsibilities List =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <h4 className="h5 fw-semibold mb-3">
                        As a user of our platform, you agree to:
                    </h4>
                    <ResponsibilityList items={responsibilitiesData} />
                </div>
            </div>
        </section>
    );
};

export default UserResponsibilities;
