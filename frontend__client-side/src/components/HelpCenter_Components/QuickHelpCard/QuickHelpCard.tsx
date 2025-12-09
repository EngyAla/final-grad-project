import type { QuickHelpCardProps } from "../../../common/Types/Interfaces";


const QuickHelpCard = ({ card, className = "" }: QuickHelpCardProps) => {
    return (
        <div className={`col-md-6 col-xl-3 mb-4 ${className}`}>
            <div className="card quick-help-card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                    {/* Quick Help Icon */}
                    <div className="quick-help-icon mb-3">
                        <i className={card.icon}></i>
                    </div>

                    {/* Quick Help Title */}
                    <h5 className="card-title">{card.title}</h5>

                    {/* Quick Help Description */}
                    <p className="card-text">{card.description}</p>

                    {/* Quick Help Button */}
                    <button className="btn btn-outline-primary">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickHelpCard;
