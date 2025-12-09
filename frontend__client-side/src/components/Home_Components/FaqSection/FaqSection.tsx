import SectionHeading from "../../Headings/SectionHeading";
import Accordion from "../../Accordion/Accordion";

const faqData = [
    {
        title: "How do I book my first appointment?",
        content:
            "Booking is simple. Just search for a doctor by specialty, location, or name, choose your preferred date and time, and confirm your appointment online.",
    },
    {
        title: "Can I choose between an online and on-site consultation?",
        content:
            "Yes, you can choose between an online and on-site consultation. You can choose the consultation type during the booking process.",
    },
    {
        title: "Do I need insurance to use the platform?",
        content:
            "No, you do not need insurance to use the platform. You can use the platform to book appointments with doctors and access healthcare services seamlessly.",
    },
    {
        title: "What should I do if I face issues with booking?",
        content:
            "You can contact our support team, you will find the contact information in the Footer of the website.",
    },
    {
        title: "Are the doctors verified on this platform?",
        content:
            "Yes, the doctors are verified on this platform. You can check the verification status of the doctors by clicking on the doctor's profile.",
    },
];

const FaqSection = () => {
    return (
        <section id="faq" className="faq-section main-section faq-body-bg">
            <div className="container">
                <SectionHeading title="FAQ" />

                <div className="faq-container d-flex flex-column gap-4">
                    {faqData.map((item) => (
                        <Accordion
                            key={item.title}
                            title={item.title}
                            content={item.content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
