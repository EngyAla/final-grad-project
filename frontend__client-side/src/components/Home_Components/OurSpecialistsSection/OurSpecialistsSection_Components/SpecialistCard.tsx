import { useNavigate } from "react-router";
import type { SpecialistCardProps } from "../../../../common/Types/Interfaces";

const SpecialistCard = ({ specialist, onBookNow }: SpecialistCardProps) => {
    const navigate = useNavigate();
    return (
        <div className="specialist-card">
            <div className="specialist-image-container">
                <img
                    src={specialist.image}
                    alt={specialist.name}
                    className="specialist-image"
                />
                <div className="specialist-overlay">
                    <div className="rating">
                        {/* <i className="fa-solid fa-star"></i> */}
                        {/* <span>{specialist.rating} rating</span> */}
                    </div>
                    <h4 className="specialist-name">{specialist.name}</h4>
                    <p className="specialist-specialization">
                        {specialist.specialization}
                    </p>
                </div>
            </div>

            <button
                className="book-now-btn blue-btn position-absolute"
                onClick={() => {
                    onBookNow?.(specialist)
                    navigate('/register')
                }}
            >
                Book Now
            </button>
        </div>
    );
};

export default SpecialistCard;
