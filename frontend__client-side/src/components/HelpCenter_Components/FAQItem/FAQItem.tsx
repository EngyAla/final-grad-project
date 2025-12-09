import type { FAQItemProps } from "../../../common/Types/Interfaces";

const FAQItem = ({
    faq,
    isExpanded,
    onToggle,
    searchQuery,
    className = "",
}: FAQItemProps) => {
    // Highlight Search Term
    const highlightSearchTerm = (text: string, query: string) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, "gi"); // gi = global and case insensitive
        return text.split(regex).map((part, index) =>
            regex.test(part) ? (
                <span key={index} className="search-highlight">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    return (
        <div className={`accordion-item border-0 shadow-sm mb-3 ${className}`}>
            {/* =============== Header =============== */}
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${
                        isExpanded ? "" : "collapsed"
                    }`}
                    type="button"
                    onClick={() => onToggle(faq.id)}
                    aria-expanded={isExpanded}
                >
                    <i className="fa-solid fa-question-circle text-primary me-3"></i>
                    {searchQuery
                        ? highlightSearchTerm(faq.question, searchQuery)
                        : faq.question}
                </button>
            </h2>

            {/* =============== Body =============== */}
            <div className={`faq-collapse ${isExpanded ? "open" : ""}`}>
                <div className="accordion-body">
                    <div className="faq-answer">
                        {faq.answer.split("\n").map((line, lineIndex) => (
                            <p key={lineIndex} className="mb-2">
                                {searchQuery
                                    ? highlightSearchTerm(line, searchQuery)
                                    : line}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
