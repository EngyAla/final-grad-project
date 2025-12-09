import { useState } from "react";
import PageHeader from "../../components/Headings/PageHeader/PageHeader";
import SearchSection from "../../components/HelpCenter_Components/sections/SearchSection/SearchSection";
import QuickHelp from "../../components/HelpCenter_Components/sections/QuickHelp/QuickHelp";
import FAQSection from "../../components/HelpCenter_Components/sections/FAQSection/FAQSection";
import ContactSupport from "../../components/HelpCenter_Components/sections/ContactSupport/ContactSupport";
import { useFilteredFAQs } from "../../components/HelpCenter_Components/sections/FAQSection/useFilteredFAQs";
import "./HelpCenter.scss";

const HelpCenter = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("all");
    const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

    // Filtered FAQs
    const filteredFAQs = useFilteredFAQs(activeCategory, searchQuery);

    // Handle Search Input Change
    const handleSearchInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = e.target.value.toLowerCase().trim();
        setSearchQuery(value);
    };

    // Clear Search Input
    const clearSearch = () => {
        setSearchQuery("");
    };

    // Toggle FAQ
    const toggleFAQ = (id: number) => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };

    // Get Search Suggestions
    const getSearchSuggestions = () => {
        const suggestions = [
            "appointment booking",
            "account settings",
            "payment methods",
            "video calls",
            "medical records",
            "refund policy",
        ];
        return suggestions
            .filter((suggestion) =>
                suggestion.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .slice(0, 3);
    };

    return (
        <section className="Help-Center-Page main-section">
            <div className="container">
                {/* ================== Header ================== */}
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <PageHeader
                            title="Help Center"
                            subtitle="We're here to help you"
                            description="Find quick answers to common questions, learn how to use Clinica effectively, and get in touch with our support team if you need additional assistance."
                        />
                    </div>
                </div>

                {/* ================== Content ================== */}
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10">
                        <div className="help-content">
                            <SearchSection
                                searchQuery={searchQuery}
                                onSearchChange={handleSearchInputChange}
                                onClear={clearSearch}
                                resultCount={filteredFAQs.length}
                                suggestions={getSearchSuggestions()}
                                onSuggestionClick={(suggestion) =>
                                    setSearchQuery(suggestion)
                                }
                            />
                            <QuickHelp />
                            <FAQSection
                                activeCategory={activeCategory}
                                onCategoryChange={setActiveCategory}
                                expandedFAQ={expandedFAQ}
                                onFAQToggle={toggleFAQ}
                                searchQuery={searchQuery}
                            />
                            <ContactSupport />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HelpCenter;
