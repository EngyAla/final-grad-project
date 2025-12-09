import { useMemo } from "react";
import { faqData } from "../../data/helpCenterData";

export const useFilteredFAQs = (
    activeCategory: string,
    searchQuery: string
) => {
    return useMemo(() => {
        return faqData.filter((faq) => {
            const matchesCategory =
                activeCategory === "all" || faq.category === activeCategory;
            const matchesSearch =
                searchQuery === "" ||
                faq.question
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);
};
