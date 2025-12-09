import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import UserRight from "../../UserRight/UserRight";
import { userRights } from "../../data/privacyData";

const UserRights = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader title="Your Rights" icon="fa-solid fa-user-check" />

            {/* =============== User Rights List =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="row">
                        {userRights.map((right) => (
                            <div key={right.id} className="col-md-6 mb-3">
                                <UserRight right={right} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserRights;
