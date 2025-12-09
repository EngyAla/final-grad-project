import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import CookieType from "../../CookieType/CookieType";
import { cookieTypes } from "../../data/privacyData";

const CookiesAndTracking = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="Cookies and Tracking"
                icon="fa-solid fa-cookie-bite"
            />

            {/* =============== Cookies List =============== */}
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    {/* Description */}
                    <p className="mb-3">
                        We use cookies and similar technologies to enhance your
                        experience:
                    </p>
                    {/* Cookies List Items */}
                    <div className="row">
                        {cookieTypes.map((cookie) => (
                            <div key={cookie.id} className="col-md-4 mb-3">
                                <CookieType cookie={cookie} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CookiesAndTracking;
