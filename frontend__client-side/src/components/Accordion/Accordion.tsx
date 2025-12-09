import "./Accordion.scss";

const Accordion = ({ title, content }: { title: string; content: string }) => {
    // Create a unique ID for this accordion item
    const accordionId = `accordion-${title.replace(/\s+/g, "-").toLowerCase()}`;

    return (
        <div className="accordion w-100">
            <div className="accordion-item">
                {/* Accordion Header */}
                <h2 className="accordion-header">
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#${accordionId}`}
                        aria-expanded="false"
                        aria-controls={accordionId}
                    >
                        {title}
                    </button>
                </h2>
                
                {/* Accordion Body */}
                <div
                    id={accordionId}
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqAccordion"
                >
                    <div className="accordion-body">{content}</div>
                </div>
            </div>
        </div>
    );
};
export default Accordion;
