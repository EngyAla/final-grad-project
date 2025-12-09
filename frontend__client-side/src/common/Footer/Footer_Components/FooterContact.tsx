const FooterContact = () => {
    return (
        <div className="col-12 col-md-4 col-lg-12">
            <div className="footer-contact d-flex flex-column flex-lg-row justify-content-lg-between gap-3 align-items-start align-items-lg-center  mt-lg-5 w-100">
                {/* ============= Contact Title ============= */}
                <h5 className="footer-title mb-0 contact-title flex-shrink-0">
                    Get In Touch
                </h5>

                {/* ============= Contact Items ============= */}
                <div className="contact-items d-flex flex-column flex-lg-row gap-2 gap-lg-5 w-100 justify-content-end">
                    {/* Phone */}
                    <div className="contact-item phone">
                        <i className="fa-solid fa-phone"></i>
                        <a href="tel:+201096528514" title="Call Us">
                            +201096528514
                        </a>
                    </div>
                    {/* Email */}
                    <div className="contact-item email">
                        <i className="fa-solid fa-envelope"></i>
                        <a
                            href="mailto:ahmedmaher.dev1@gmail.com?subject=Clinica&body=I have a question about the services"
                            title="Email Us"
                        >
                            ahmedmaher.dev1@gmail.com
                        </a>
                    </div>
                    {/* Location */}
                    <div className="contact-item location">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>Cairo, Egypt</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterContact;
