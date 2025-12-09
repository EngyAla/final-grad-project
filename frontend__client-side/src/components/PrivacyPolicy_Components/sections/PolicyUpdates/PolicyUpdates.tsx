import AlertBox from "../../../LegalPages_Components/AlertBox/AlertBox";
import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";

const PolicyUpdates = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader title="Policy Updates" icon="fa-solid fa-sync" />

            {/* =============== Alert Box =============== */}
            <AlertBox
                type="warning"
                title="Changes to This Policy"
                message="We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date. We encourage you to review this Privacy Policy periodically for any changes."
                icon="fa-solid fa-exclamation-triangle"
            />
        </section>
    );
};

export default PolicyUpdates;
