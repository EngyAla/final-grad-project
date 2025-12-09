import AlertBox from "../../../LegalPages_Components/AlertBox/AlertBox";
import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import SharingList from "../../SharingList/SharingList";
import { sharingData } from "../../data/privacyData";

const InformationSharing = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="Information Sharing"
                icon="fa-solid fa-share-nodes"
            />

            {/* =============== Alert Box =============== */}
            <AlertBox
                type="info"
                title="We Do Not Sell Your Data"
                message="We never sell, rent, or trade your personal information to third parties for marketing purposes."
                icon="fa-solid fa-info-circle"
                className="mb-3"
            />

            {/* =============== Sharing List =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <h4 className="h5 fw-semibold mb-3">
                        We may share your information only in these limited
                        circumstances:
                    </h4>
                    <SharingList items={sharingData} />
                </div>
            </div>
        </section>
    );
};

export default InformationSharing;
