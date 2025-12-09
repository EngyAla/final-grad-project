import type {
    ContactInfo,
    PrivacyItem,
    SecurityFeature,
} from "../../../common/Types/Interfaces";

// Service Description Data
export const serviceData: PrivacyItem[] = [
    {
        id: "appointment",
        title: "Appointment Booking",
        description:
            "Schedule medical appointments with qualified healthcare providers through our secure platform.",
        icon: "fa-solid fa-calendar-check",
    },
    {
        id: "telemedicine",
        title: "Telemedicine",
        description:
            "Access virtual consultations and remote healthcare services from the comfort of your home.",
        icon: "fa-solid fa-video",
    },
    {
        id: "records",
        title: "Medical Records",
        description:
            "Securely store and manage your medical history, prescriptions, and health information.",
        icon: "fa-solid fa-file-medical",
    },
    {
        id: "reminders",
        title: "Health Reminders",
        description:
            "Receive personalized health reminders, medication alerts, and appointment notifications.",
        icon: "fa-solid fa-bell",
    },
];

// User Responsibilities Data
export const responsibilitiesData: PrivacyItem[] = [
    {
        id: "accurate-info",
        title: "Provide Accurate Information",
        description:
            "Supply truthful, accurate, and complete information when creating your account and booking appointments",
        icon: "fa-solid fa-check",
    },
    {
        id: "account-security",
        title: "Maintain Account Security",
        description:
            "Keep your login credentials secure and notify us immediately of any unauthorized access",
        icon: "fa-solid fa-check",
    },
    {
        id: "respect-providers",
        title: "Respect Healthcare Providers",
        description:
            "Treat all medical professionals with respect and follow their medical advice",
        icon: "fa-solid fa-check",
    },
    {
        id: "appropriate-use",
        title: "Use Services Appropriately",
        description:
            "Use our platform only for legitimate healthcare purposes and in accordance with applicable laws",
        icon: "fa-solid fa-check",
    },
    {
        id: "report-issues",
        title: "Report Issues",
        description:
            "Promptly report any technical issues, security concerns, or inappropriate behavior",
        icon: "fa-solid fa-check",
    },
];

// Prohibited Activities Data
export const prohibitedActivitiesData: PrivacyItem[] = [
    {
        id: "fraud",
        title: "Fraudulent Activities",
        description:
            "Creating fake accounts, providing false information, or attempting to defraud the platform",
        icon: "fa-solid fa-times",
    },
    {
        id: "abuse",
        title: "Abuse of Services",
        description:
            "Misusing the platform for non-medical purposes or attempting to circumvent security measures",
        icon: "fa-solid fa-times",
    },
    {
        id: "harassment",
        title: "Harassment",
        description:
            "Harassing, threatening, or intimidating healthcare providers or other users",
        icon: "fa-solid fa-times",
    },
    {
        id: "illegal",
        title: "Illegal Activities",
        description:
            "Using the platform for any illegal activities or violating applicable laws",
        icon: "fa-solid fa-times",
    },
];

// Payment Terms Data
export const paymentTermsData: PrivacyItem[] = [
    {
        id: "service-fees",
        title: "Service Fees",
        description:
            "You agree to pay all applicable fees for services rendered through our platform",
        icon: "fa-solid fa-dollar-sign",
    },
    {
        id: "payment-schedule",
        title: "Payment Schedule",
        description:
            "Payment is due at the time of service unless otherwise arranged",
        icon: "fa-solid fa-calendar-alt",
    },
    {
        id: "refunds",
        title: "Refunds",
        description:
            "Refund policies vary by service provider and are subject to their individual terms",
        icon: "fa-solid fa-undo",
    },
    {
        id: "late-payments",
        title: "Late Payments",
        description: "Late payment fees may apply for overdue accounts",
        icon: "fa-solid fa-exclamation-triangle",
    },
];

// Privacy Features Data
export const privacyFeaturesData: SecurityFeature[] = [
    {
        id: "encryption",
        title: "Data Encryption",
        description:
            "All personal and medical data is encrypted using industry-standard protocols",
        icon: "fa-solid fa-lock",
        color: "primary",
    },
    {
        id: "hipaa",
        title: "HIPAA Compliance",
        description:
            "We maintain strict compliance with healthcare privacy regulations",
        icon: "fa-solid fa-user-secret",
        color: "success",
    },
    {
        id: "access-control",
        title: "Access Control",
        description:
            "Strict access controls ensure only authorized personnel can view your data",
        icon: "fa-solid fa-eye-slash",
        color: "warning",
    },
];

// Liability Items Data
export const liabilityItemsData: PrivacyItem[] = [
    {
        id: "medical-advice",
        title: "Medical Advice",
        description:
            "We do not provide medical advice, diagnosis, or treatment",
        icon: "fa-solid fa-user-md",
    },
    {
        id: "healthcare-quality",
        title: "Healthcare Quality",
        description:
            "The quality of medical services provided by healthcare providers",
        icon: "fa-solid fa-stethoscope",
    },
    {
        id: "service-availability",
        title: "Service Availability",
        description:
            "Uninterrupted access to our platform or third-party services",
        icon: "fa-solid fa-clock",
    },
    {
        id: "technical-issues",
        title: "Technical Issues",
        description:
            "Loss of data or service interruptions due to technical problems",
        icon: "fa-solid fa-exclamation-circle",
    },
];

// Intellectual Property Data
export const intellectualPropertyData: PrivacyItem[] = [
    {
        id: "platform-content",
        title: "Platform Content",
        description:
            "All content, features, and functionality of our platform are owned by Clinica and protected by copyright laws",
        icon: "fa-solid fa-copyright",
    },
    {
        id: "user-content",
        title: "User Content",
        description:
            "You retain ownership of content you submit, but grant us license to use it for platform operations",
        icon: "fa-solid fa-user",
    },
    {
        id: "trademarks",
        title: "Trademarks",
        description:
            "The Clinica name and logo are trademarks and may not be used without permission",
        icon: "fa-solid fa-trademark",
    },
    {
        id: "software",
        title: "Software",
        description: "Our software is proprietary and subject to license terms",
        icon: "fa-solid fa-code",
    },
];

// Termination Effects Data
export const terminationEffectsData: PrivacyItem[] = [
    {
        id: "data-deletion",
        title: "Data Deletion",
        description:
            "Your account data will be deleted according to our data retention policy",
        icon: "fa-solid fa-trash",
    },
    {
        id: "service-access",
        title: "Service Access",
        description:
            "You will lose access to all platform services and features",
        icon: "fa-solid fa-calendar-times",
    },
    {
        id: "medical-records",
        title: "Medical Records",
        description:
            "You may request copies of your medical records before account deletion",
        icon: "fa-solid fa-file-medical",
    },
];

// Governing Law Data
export const governingLawData: PrivacyItem[] = [
    {
        id: "governing-law",
        title: "Governing Law",
        description: "These terms are governed by the laws of Egypt",
        icon: "fa-solid fa-flag",
    },
    {
        id: "jurisdiction",
        title: "Jurisdiction",
        description:
            "Any disputes will be resolved in the courts of Cairo, Egypt",
        icon: "fa-solid fa-balance-scale",
    },
    {
        id: "dispute-resolution",
        title: "Dispute Resolution",
        description:
            "We encourage resolving disputes through mediation before legal action",
        icon: "fa-solid fa-handshake",
    },
    {
        id: "severability",
        title: "Severability",
        description:
            "If any provision is found invalid, the remaining terms remain in effect",
        icon: "fa-solid fa-exclamation-triangle",
    },
];

// Contact Information Data (reuse from PrivacyPolicy)
export const contactInfo: ContactInfo[] = [
    {
        type: "email",
        label: "Email",
        value: "ahmedmaher.dev1@gmail.com",
        href: "mailto:ahmedmaher.dev1@gmail.com",
        icon: "fa-solid fa-envelope",
    },
    {
        type: "phone",
        label: "Phone",
        value: "+201096528514",
        href: "tel:+201096528514",
        icon: "fa-solid fa-phone",
    },
    {
        type: "address",
        label: "Address",
        value: "Cairo, Egypt",
        icon: "fa-solid fa-map-marker-alt",
    },
];
