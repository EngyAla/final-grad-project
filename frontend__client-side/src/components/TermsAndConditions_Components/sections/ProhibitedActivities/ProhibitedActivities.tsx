import AlertBox from "../../../LegalPages_Components/AlertBox/AlertBox";
import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import ProhibitedActivity from "../../ProhibitedActivity/ProhibitedActivity";
import { prohibitedActivitiesData } from "../../data/termsData";

const ProhibitedActivities = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="Prohibited Activities"
                icon="fa-solid fa-ban"
            />

            {/* =============== Alert Box =============== */}
            <AlertBox
                type="danger"
                title="Strictly Prohibited"
                message="The following activities are strictly prohibited and may result in immediate account termination:"
                icon="fa-solid fa-exclamation-triangle"
                className="mb-3"
            />

            {/* =============== Prohibited Activities List =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        {prohibitedActivitiesData.map((activity) => (
                            <div key={activity.id} className="col-md-6 mb-3">
                                <ProhibitedActivity activity={activity} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProhibitedActivities;
