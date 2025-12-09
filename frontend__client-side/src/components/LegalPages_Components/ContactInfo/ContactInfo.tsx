import type { ContactInfoProps } from "../../../common/Types/Interfaces";

const ContactInfo = ({
    title,
    email,
    phone,
    address,
    className = "",
}: ContactInfoProps) => {
    return (
        <div className={`contact-info ${className}`}>
            <h5 className="fw-bold text-primary mb-3">{title}</h5>
            <div className="row g-3">
                {/* =============== Email =============== */}
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-envelope text-primary me-2"></i>
                        <a
                            href={`mailto:${email}`}
                            className="text-decoration-none"
                        >
                            {email}
                        </a>
                    </div>
                </div>

                {/* =============== Phone =============== */}
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-phone text-primary me-2"></i>
                        <a
                            href={`tel:${phone}`}
                            className="text-decoration-none"
                        >
                            {phone}
                        </a>
                    </div>
                </div>

                {/* =============== Address =============== */}
                <div className="col-md-4">
                    <div className="d-flex align-items-center">
                        <i className="fa-solid fa-map-marker-alt text-primary me-2"></i>
                        <span>{address}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
