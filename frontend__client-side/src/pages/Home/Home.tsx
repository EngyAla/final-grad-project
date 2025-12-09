import DoMoreSection from "../../components/Home_Components/DoMoreSection/DoMoreSection";
import FaqSection from "../../components/Home_Components/FaqSection/FaqSection";
import HowItWorksSection from "../../components/Home_Components/HowItWorksSection/HowItWorksSection";
import LandingSection from "../../components/Home_Components/LandingSection/LandingSection";
import OurSpecialistsSection from "../../components/Home_Components/OurSpecialistsSection/OurSpecialistsSection";
import StoriesSection from "../../components/Home_Components/StoriesSection/StoriesSection";
import ScrollAnimation from "../../common/Animations/ScrollAnimationWrapper";
import { scrollFadeIn } from "../../common/Animations";

const Home = () => {
    return (
        <div className="Home-Page">
            {/* Landing Section */}
            <ScrollAnimation variants={scrollFadeIn}>
                <LandingSection />
            </ScrollAnimation>

            {/* Do More Section */}
            <ScrollAnimation variants={scrollFadeIn}>
                <DoMoreSection />
            </ScrollAnimation>

            {/* Our Specialists Section */}
            <ScrollAnimation variants={scrollFadeIn}>
                <OurSpecialistsSection />
            </ScrollAnimation>

            {/* Stories Section */}
            <ScrollAnimation variants={scrollFadeIn}>
                <StoriesSection />
            </ScrollAnimation>

            {/* How It Works Section */}
            <ScrollAnimation variants={scrollFadeIn}>
                <HowItWorksSection />
            </ScrollAnimation>

            {/* FAQ Section */}
            <ScrollAnimation variants={scrollFadeIn}>
                <FaqSection />
            </ScrollAnimation>
        </div>
    );
};

export default Home;
