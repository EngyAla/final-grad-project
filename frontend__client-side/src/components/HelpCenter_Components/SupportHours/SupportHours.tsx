const SupportHours = () => {
    return (
        <div className="support-hours-card">
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    {/* =============== Support Hours Title ============= */}
                    <h5 className="card-title">
                        <i className="fa-solid fa-clock me-2"></i>
                        Support Hours
                    </h5>

                    {/* =============== Support Hours Content ============= */}
                    <div className="row">
                        <div className="col-md-6">
                            <p>
                                <strong>Monday - Friday:</strong> 9:00 AM - 6:00
                                PM
                            </p>
                            <p>
                                <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>
                                <strong>Sunday:</strong> Closed
                            </p>
                            <p>
                                <strong>Emergency:</strong> 24/7 via email
                            </p>
                        </div>
                    </div>

                    {/* =============== Support Hours Info ============= */}
                    <small className="text-muted mt-4">
                        <i className="fa-solid fa-info-circle me-1"></i>
                        Response time: Within 24 hours for email, immediate for
                        phone calls
                    </small>
                </div>
            </div>
        </div>
    );
};

export default SupportHours;
