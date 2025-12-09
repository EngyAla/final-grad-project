import { motion, AnimatePresence } from "framer-motion";
import "./ChoiceContentItem.scss";
import firstReservationImage from "../../../../../assets/images/first-reservation-for-free.png";
import findSpecialistImage from "../../../../../assets/images/find-specialist.png";
import onlineOnsiteImage from "../../../../../assets/images/online-onsite.png";
import securePaymentsImage from "../../../../../assets/images/secure-payments.png";
import { choiceChangeVariants } from "../../../../../common/Animations";
import { NavLink } from "react-router-dom";

interface ChoiceContentItemProps {
    activeChoice: string;
}

const choiceData = {
    "First reservation for free": {
        title: "Make your first reservation for free",
        description:
            "Experience the convenience, explore our services, and book with confidence, all without paying a penny.",
        buttonText: "Book Appointment Now",
        backgroundImage: firstReservationImage,
        targetLink: "/appointments",
    },
    "Find a specialist": {
        title: "Find a specialist",
        description:
            "Quickly connect with the right medical expert for your needs. Browse by specialty, compare doctors, and book the perfect match to ensure you get the care you deserve.",
        buttonText: "Find a Specialist Now",
        backgroundImage: findSpecialistImage,
        targetLink: "/doctors",
    },
    "Online or On-site": {
        title: "Online or On-site",
        description:
            "Choose the care that suits you best — consult your doctor virtually from the comfort of home or schedule an in-person visit at the clinic. Flexibility designed around your lifestyle.",
        buttonText: "Choose Your Visit",
        backgroundImage: onlineOnsiteImage,
        targetLink: "/doctors",
    },
    "Secure payments": {
        title: "Safe and secure payment processing",
        description:
            "Pay with confidence using our fully encrypted and trusted payment system. Your personal and financial information is always protected, ensuring a smooth and worry-free checkout.",
        buttonText: "Secure Checkout",
        backgroundImage: securePaymentsImage,
        targetLink: "/appointments",
    },
};

const ChoiceContentItem = ({ activeChoice }: ChoiceContentItemProps) => {
    const currentData =
        choiceData[activeChoice as keyof typeof choiceData] ||
        choiceData["First reservation for free"];

    return (
        <div className="choice-content-wrapper w-100">
            <AnimatePresence mode="wait">
                <motion.div
                    className="choice-content-item w-100"
                    style={{
                        backgroundImage: `url("${currentData.backgroundImage}")`,
                    }}
                    key={activeChoice}
                    variants={choiceChangeVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                >
                    <motion.div
                        className="description d-flex flex-column gap-4"
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: {
                                delay: 0.3,
                                duration: 0.5,
                                ease: "easeOut",
                            },
                        }}
                        exit={{
                            opacity: 0,
                            y: -20,
                            scale: 0.95,
                            transition: {
                                duration: 0.2,
                            },
                        }}
                    >
                        {/* Title and Description */}
                        <motion.div
                            className="gap-4 d-flex flex-column"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: 0.5,
                                    duration: 0.4,
                                },
                            }}
                        >
                            <motion.h3
                                className="white-color"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.6,
                                        duration: 0.4,
                                    },
                                }}
                            >
                                {currentData.title}
                            </motion.h3>
                            <motion.p
                                className="white-color fw-medium mt-1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.7,
                                        duration: 0.4,
                                    },
                                }}
                            >
                                {currentData.description}
                            </motion.p>
                        </motion.div>

                        {/* Button */}
                        <motion.button
                            className="white-blue-btn fw-bold"
                            initial={{ opacity: 0, y: 20, scale: 0.8 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    delay: 0.8,
                                    duration: 0.4,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 20,
                                },
                            }}
                            whileHover={{
                                scale: 1.05,
                                transition: { duration: 0.2 },
                            }}
                            whileTap={{
                                scale: 0.95,
                                transition: { duration: 0.1 },
                            }}
                        >
                            <NavLink to={currentData.targetLink}>
                                {currentData.buttonText}
                            </NavLink>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ChoiceContentItem;
