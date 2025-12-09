import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SectionHeading from "../../Headings/SectionHeading";
import {
    ChoicesSlider,
    choices,
    ChoiceContentItem,
} from "./DoMoreSection_Components";
import {
    ScrollAnimation,
    scrollStaggerContainer,
    scrollStaggerItem,
} from "../../../common/Animations";
import "./DoMoreSection.scss";

const DoMoreSection = () => {
    const [activeChoice, setActiveChoice] = useState<string>(
        "First reservation for free"
    );
    const location = useLocation();

    const handleChoiceChange = (choice: string) => {
        setActiveChoice(choice);
    };

    // Sync from URL search params: section=do-more&choice=...
    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const section = params.get("section");
        const rawChoice = params.get("choice");
        if (section === "do-more" && rawChoice) {
            const normalized = decodeURIComponent(rawChoice)
                .trim()
                .toLowerCase();

            // Build a case-insensitive map from available choices
            const choiceMap = new Map<string, string>();
            choices.forEach((c) => choiceMap.set(c.toLowerCase(), c));

            // Common aliases
            const aliases: Record<string, string> = {
                "find a specialist": "Find a specialist",
                "find a doctor": "Find a specialist",
                "online consultation": "Online or On-site",
                "online or on-site": "Online or On-site",
                "secure payments": "Secure payments",
                "first reservation for free": "First reservation for free",
            };

            const resolved = choiceMap.get(normalized) || aliases[normalized];
            if (resolved && choiceMap.get(resolved.toLowerCase())) {
                setActiveChoice(
                    choiceMap.get(resolved.toLowerCase()) as string
                );
            }
        }
    }, [location.search]);

    return (
        <section id="do-more" className="DoMore-Section main-section">
            <div className="container">
                <ScrollAnimation variants={scrollStaggerContainer}>
                    {/* =============== Section Heading =============== */}
                    <ScrollAnimation variants={scrollStaggerItem}>
                        <SectionHeading title="DO MORE FOR YOU" />
                    </ScrollAnimation>

                    {/* =============== Choices Slider =============== */}
                    <ScrollAnimation variants={scrollStaggerItem}>
                        <ChoicesSlider
                            choices={choices}
                            activeChoice={activeChoice}
                            onChoiceChange={handleChoiceChange}
                        />
                    </ScrollAnimation>

                    {/* =============== Choice Content =============== */}
                    <ScrollAnimation variants={scrollStaggerItem}>
                        <div className="choice-content">
                            <ChoiceContentItem activeChoice={activeChoice} />
                        </div>
                    </ScrollAnimation>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default DoMoreSection;
