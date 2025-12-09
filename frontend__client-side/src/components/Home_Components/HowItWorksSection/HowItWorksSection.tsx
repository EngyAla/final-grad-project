import SectionHeading from "../../Headings/SectionHeading";
import TimeLine from "../../TimeLine/TimeLine";
import {
    ScrollAnimation,
    scrollStaggerContainer,
    scrollStaggerItem,
} from "../../../common/Animations";
import "./HowItWorksSection.scss";

const guidanceSteps = [
    {
        title: "Search for a Doctor",
        description:
            "Browse by specialty, location, or doctor’s name to find the right healthcare professional for you.",
    },
    {
        title: "Choose Online or On-site",
        description:
            "Decide whether you want to book an in-person appointment or a convenient online consultation.",
    },
    {
        title: "Book Your Appointment",
        description:
            "Select a suitable date and time, then confirm your reservation instantly.",
    },
    {
        title: "Get Quality Care",
        description:
            "Attend your appointment and receive trusted, professional medical care.",
    },
];

const HowItWorksSection = () => {
    return (
        <section
            id="how-it-works"
            className="how-it-works-section main-section"
        >
            <div className="container">
                <ScrollAnimation variants={scrollStaggerContainer}>
                    <ScrollAnimation variants={scrollStaggerItem}>
                        <SectionHeading title="How It Works" />
                    </ScrollAnimation>

                    <ScrollAnimation variants={scrollStaggerItem}>
                        <TimeLine steps={guidanceSteps} />
                    </ScrollAnimation>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default HowItWorksSection;
