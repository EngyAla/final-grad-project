import type { ContactCardProps } from "../../../common/Types/Interfaces";

const ContactCard = ({ card, className = "" }: ContactCardProps) => {
    return (
        <div className={`col-md-4 mb-4 ${className}`}>
            <div className="card contact-card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                    {/* Contact Icon */}
                    <div className="contact-icon mb-3">
                        <i className={card.icon}></i>
                    </div>

                    {/* Contact Title */}
                    <h5 className="card-title">{card.title}</h5>

                    {/* Contact Description */}
                    <p className="card-text">{card.description}</p>

                    {/* Contact Button */}
                    <button
                        className={`btn ${
                            card.disabled ? "btn-secondary" : "btn-primary"
                        }`}
                        disabled={card.disabled}
                    >
                        {card.action}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;
