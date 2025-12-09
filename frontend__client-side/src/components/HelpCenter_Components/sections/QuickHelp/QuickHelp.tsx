import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import QuickHelpCard from "../../QuickHelpCard/QuickHelpCard";
import { quickHelpCards } from "../../data/helpCenterData";

const QuickHelp = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader title="Quick Help" icon="fa-solid fa-bolt" />

            {/* =============== Quick Help Cards =============== */}
            <div className="row">
                {quickHelpCards.map((card) => (
                    <QuickHelpCard key={card.id} card={card} />
                ))}
            </div>
        </section>
    );
};

export default QuickHelp;
