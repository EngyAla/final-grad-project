import "./LandingSection.scss";
import {
    LogosSection,
    ActionButtons,
    FilterForm,
    LandingImage,
} from "./LandingSection_Components";

const LandingSection = () => {
    return (
        <section className="Landing-Section">
            <div className="container">
                {/* =============== Landing Section Main Content =============== */}
                <main className="d-flex flex-column flex-lg-row pt-5">
                    <div className="right text-center text-lg-start">
                        <h1 className="blue-color">
                            Health made easy. Safe. Trusted.
                        </h1>

                        <LogosSection />
                        <ActionButtons />
                    </div>

                    <LandingImage />
                </main>

                {/* =============== Filter Form =============== */}
                <FilterForm />
            </div>
        </section>
    );
};

export default LandingSection;
