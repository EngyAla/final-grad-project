import type {
    Category,
    ContactCard,
    FAQItem,
    QuickHelpCard,
} from "../../../common/Types/Interfaces";

// Categories Data
export const categories: Category[] = [
    { id: "all", name: "All Topics", icon: "fa-list" },
    { id: "account", name: "Account & Profile", icon: "fa-user" },
    { id: "appointments", name: "Appointments", icon: "fa-calendar-check" },
    { id: "billing", name: "Billing & Payments", icon: "fa-credit-card" },
    { id: "technical", name: "Technical Support", icon: "fa-cog" },
    { id: "privacy", name: "Privacy & Security", icon: "fa-shield-halved" },
];

// FAQ Data
export const faqData: FAQItem[] = [
    {
        id: 1,
        category: "account",
        question: "How do I create an account?",
        answer: "Creating an account is easy! Click the 'Sign Up' button on our homepage, fill in your personal information, verify your email address, and you're ready to start booking appointments with our healthcare providers.",
    },
    {
        id: 2,
        category: "account",
        question: "How do I update my profile information?",
        answer: "To update your profile, log into your account, go to 'My Profile' in the dashboard, click 'Edit Profile', make your changes, and save. Remember to keep your contact information current for appointment notifications.",
    },
    {
        id: 3,
        category: "appointments",
        question: "How do I book an appointment?",
        answer: "1. Search for a doctor by specialty or name\n2. Select your preferred date and time\n3. Choose between in-person or virtual consultation\n4. Provide your symptoms and medical history\n5. Confirm your appointment and payment\n6. You'll receive confirmation via email and SMS",
    },
    {
        id: 4,
        category: "appointments",
        question: "Can I reschedule or cancel my appointment?",
        answer: "Yes! You can reschedule or cancel appointments up to 24 hours before your scheduled time. Go to 'My Appointments' in your dashboard, select the appointment, and choose 'Reschedule' or 'Cancel'. Cancellations within 24 hours may be subject to fees.",
    },
    {
        id: 5,
        category: "appointments",
        question: "What types of consultations are available?",
        answer: "We offer both in-person and virtual consultations. In-person visits take place at the doctor's clinic, while virtual consultations allow you to meet with your doctor via video call from the comfort of your home. Both options provide the same quality of care.",
    },
    {
        id: 6,
        category: "billing",
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, bank transfers, and digital wallets like PayPal. All payments are processed securely through our encrypted payment system.",
    },
    {
        id: 7,
        category: "billing",
        question: "How do I get a refund?",
        answer: "Refund policies vary by healthcare provider. Generally, refunds are available for cancelled appointments (with 24+ hours notice) or if the service wasn't provided as described. Contact our support team with your booking reference number to process a refund request.",
    },
    {
        id: 8,
        category: "technical",
        question: "I'm having trouble with video calls. What should I do?",
        answer: "For video call issues: 1) Check your internet connection (minimum 1 Mbps recommended) 2) Ensure your camera and microphone are enabled 3) Try refreshing your browser 4) Use Chrome or Firefox for best compatibility 5) Contact support if problems persist.",
    },
    {
        id: 9,
        category: "technical",
        question: "The app is running slowly. How can I fix this?",
        answer: "Try these solutions: 1) Clear your browser cache and cookies 2) Close unnecessary browser tabs 3) Restart your device 4) Check your internet connection 5) Update your browser to the latest version. If issues continue, contact our technical support team.",
    },
    {
        id: 10,
        category: "privacy",
        question: "Is my medical information secure?",
        answer: "Absolutely! We use bank-level encryption (256-bit SSL) to protect all your data. We're HIPAA compliant and follow strict privacy protocols. Your medical information is only accessible to you and your healthcare providers, never shared with third parties without your consent.",
    },
    {
        id: 11,
        category: "privacy",
        question: "Can I download my medical records?",
        answer: "Yes, you can download your medical records anytime from your dashboard. Go to 'Medical Records', select the documents you want, and click 'Download'. All records are provided in PDF format for easy storage and sharing with other healthcare providers.",
    },
    {
        id: 12,
        category: "appointments",
        question: "What if I miss my appointment?",
        answer: "If you miss an appointment, contact the healthcare provider or our support team as soon as possible. Depending on the provider's policy, you may be able to reschedule without additional fees, or you may need to pay a missed appointment fee. Virtual appointments can often be rescheduled more easily.",
    },
];

// Quick Help Cards Data
export const quickHelpCards: QuickHelpCard[] = [
    {
        id: "book-appointment",
        title: "Book an Appointment",
        description:
            "Learn how to schedule your next medical consultation with our step-by-step guide.",
        icon: "fa-solid fa-calendar-plus",
        link: "#appointments",
    },
    {
        id: "manage-profile",
        title: "Manage Your Profile",
        description:
            "Update your personal information, medical history, and notification preferences.",
        icon: "fa-solid fa-user-edit",
        link: "#profile",
    },
    {
        id: "billing-help",
        title: "Billing & Payments",
        description:
            "Get help with payment methods, invoices, refunds, and billing questions.",
        icon: "fa-solid fa-credit-card",
        link: "#billing",
    },
    {
        id: "technical-support",
        title: "Technical Support",
        description:
            "Troubleshoot technical issues, video call problems, and app performance.",
        icon: "fa-solid fa-tools",
        link: "#technical",
    },
];

// Contact Cards Data
export const contactCards: ContactCard[] = [
    {
        id: "email-support",
        title: "Email Support",
        description:
            "Send us an email and we'll get back to you within 24 hours.",
        icon: "fa-solid fa-envelope",
        action: "Send Email",
    },
    {
        id: "live-chat",
        title: "Live Chat",
        description:
            "Chat with our support team in real-time for immediate assistance.",
        icon: "fa-solid fa-comments",
        action: "Start Chat",
        disabled: true,
    },
    {
        id: "phone-support",
        title: "Phone Support",
        description: "Call us directly for urgent matters and complex issues.",
        icon: "fa-solid fa-phone",
        action: "Call Now",
    },
];
