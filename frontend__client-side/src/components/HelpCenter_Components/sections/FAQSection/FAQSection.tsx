import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import TabsSlider from "../../../TabsSlider/TabsSlider";
import FAQItem from "../../FAQItem/FAQItem";
import { useFilteredFAQs } from "./useFilteredFAQs";
import { categories } from "../../data/helpCenterData";
import type { FAQSectionProps } from "../../../../common/Types/Interfaces";

const FAQSection = ({
    activeCategory,
    onCategoryChange,
    expandedFAQ,
    onFAQToggle,
    searchQuery,
    className = "",
}: FAQSectionProps) => {
    const filteredFAQs = useFilteredFAQs(activeCategory, searchQuery);

    return (
        <section className={`faq-section mb-5 ${className}`}>
            {/* =============== Header =============== */}
            <SectionHeader
                title="Frequently Asked Questions"
                icon="fa-solid fa-question-circle"
            />

            {/* =============== Category Filter =============== */}
            <div className="category-filter mb-4">
                <TabsSlider
                    items={categories.map((c) => ({
                        id: c.id,
                        label: c.name,
                        iconClass: c.icon,
                    }))}
                    activeId={activeCategory}
                    onChange={onCategoryChange}
                    className="helpcenter-tabs"
                />
            </div>

            {/* =============== FAQ Items =============== */}
            <div className="accordion">
                {filteredFAQs.length > 0 ? (
                    filteredFAQs.map((faq) => (
                        <FAQItem
                            key={faq.id}
                            faq={faq}
                            isExpanded={expandedFAQ === faq.id}
                            onToggle={onFAQToggle}
                            searchQuery={searchQuery}
                        />
                    ))
                ) : (
                    <div className="text-center py-5">
                        <i className="fa-solid fa-search fa-3x text-muted mb-3"></i>
                        <h5>No FAQs found</h5>
                        <p className="text-muted">
                            Try adjusting your search terms or browse different
                            categories.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FAQSection;
