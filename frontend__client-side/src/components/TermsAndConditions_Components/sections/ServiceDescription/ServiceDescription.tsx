import SectionHeader from "../../../LegalPages_Components/SectionHeader/SectionHeader";
import ServiceCard from "../../ServiceCard/ServiceCard";
import { serviceData } from "../../data/termsData";

const ServiceDescription = () => {
    return (
        <section className="mb-5">
            {/* =============== Header =============== */}
            <SectionHeader
                title="Service Description"
                icon="fa-solid fa-stethoscope"
            />

            {/* =============== Service Cards =============== */}
            <div className="row">
                {serviceData.map((service) => (
                    <div key={service.id} className="col-md-6 mb-3">
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceDescription;
