import type {
    ContactInfo,
    CookieType,
    PrivacyItem,
    SecurityFeature,
    UserRight,
} from "../../../common/Types/Interfaces";

// Personal Information Data
export const personalInfoData: PrivacyItem[] = [
    {
        id: "contact",
        title: "Contact Information",
        description: "Name, email address, phone number, and mailing address",
        icon: "fa-solid fa-address-book",
    },
    {
        id: "account",
        title: "Account Information",
        description: "Username, password, and profile information",
        icon: "fa-solid fa-user",
    },
    {
        id: "health",
        title: "Health Information",
        description: "Medical history, symptoms, and treatment preferences",
        icon: "fa-solid fa-heart-pulse",
    },
    {
        id: "payment",
        title: "Payment Information",
        description: "Billing address and payment method details",
        icon: "fa-solid fa-credit-card",
    },
];

// How We Use Information Data
export const usageData: PrivacyItem[] = [
    {
        id: "service",
        title: "Service Delivery",
        description:
            "Provide medical consultations, appointment scheduling, and healthcare services.",
        icon: "fa-solid fa-user-md",
    },
    {
        id: "security",
        title: "Security & Safety",
        description:
            "Protect against fraud, ensure platform security, and maintain service quality.",
        icon: "fa-solid fa-shield-halved",
    },
    {
        id: "communication",
        title: "Communication",
        description:
            "Send appointment reminders, health tips, and important service updates.",
        icon: "fa-solid fa-bell",
    },
    {
        id: "improvement",
        title: "Improvement",
        description:
            "Analyze usage patterns to improve our services and develop new features.",
        icon: "fa-solid fa-chart-line",
    },
];

// Information Sharing Data
export const sharingData: PrivacyItem[] = [
    {
        id: "healthcare",
        title: "Healthcare Providers",
        description: "With your consent, to facilitate medical consultations",
        icon: "fa-solid fa-user-doctor",
    },
    {
        id: "legal",
        title: "Legal Requirements",
        description: "When required by law or to protect our rights",
        icon: "fa-solid fa-gavel",
    },
    {
        id: "partners",
        title: "Service Partners",
        description: "With trusted partners who help us operate our platform",
        icon: "fa-solid fa-handshake",
    },
    {
        id: "emergency",
        title: "Emergency Situations",
        description: "To protect your health and safety in emergencies",
        icon: "fa-solid fa-shield",
    },
];

// Security Features Data
export const securityFeatures: SecurityFeature[] = [
    {
        id: "encryption",
        title: "Encryption",
        description: "All data is encrypted using industry-standard protocols",
        icon: "fa-solid fa-key",
        color: "primary",
    },
    {
        id: "access",
        title: "Access Controls",
        description:
            "Strict access controls limit who can view your information",
        icon: "fa-solid fa-shield-halved",
        color: "success",
    },
    {
        id: "monitoring",
        title: "Monitoring",
        description: "Continuous monitoring for security threats and breaches",
        icon: "fa-solid fa-eye",
        color: "warning",
    },
];

// User Rights Data
export const userRights: UserRight[] = [
    {
        id: "access",
        title: "Access Your Data",
        description:
            "Request a copy of all personal information we have about you",
        icon: "fa-solid fa-eye",
    },
    {
        id: "update",
        title: "Update Information",
        description: "Correct or update your personal information at any time",
        icon: "fa-solid fa-edit",
    },
    {
        id: "delete",
        title: "Delete Account",
        description: "Request deletion of your account and associated data",
        icon: "fa-solid fa-trash",
    },
    {
        id: "optout",
        title: "Opt-Out",
        description: "Unsubscribe from marketing communications",
        icon: "fa-solid fa-ban",
    },
];

// Cookie Types Data
export const cookieTypes: CookieType[] = [
    {
        id: "essential",
        name: "Essential Cookies",
        description: "Required for basic website functionality",
        icon: "fa-solid fa-cog",
    },
    {
        id: "analytics",
        name: "Analytics Cookies",
        description: "Help us understand how you use our site",
        icon: "fa-solid fa-chart-bar",
    },
    {
        id: "marketing",
        name: "Marketing Cookies",
        description: "Used to deliver relevant advertisements",
        icon: "fa-solid fa-bullhorn",
    },
];

// Contact Information Data
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
