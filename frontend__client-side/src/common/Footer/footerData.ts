export type FooterLink = { label: string; href: string };
export type FooterColumn = { title: string; links: FooterLink[] };

export const footerColumns: FooterColumn[] = [
    {
        title: "CLINICA",
        links: [
            { label: "Home", href: "/?section=top" },
            { label: "About Us", href: "/?section=stories" },
            { label: "How It Works", href: "/?section=how-it-works" },
            { label: "Our Features", href: "/?section=do-more" },
        ],
    },
    {
        title: "Services",
        links: [
            {
                label: "Find a Specialist",
                href: "/?section=do-more&choice=Find%20a%20Specialist",
            },
            {
                label: "Online or On-site",
                href: "/?section=do-more&choice=Online%20consultation",
            },
            {
                label: "Secure Payments",
                href: "/?section=do-more&choice=Secure%20Payments",
            },
            {
                label: "First Reservation Free",
                href: "/?section=do-more&choice=First%20reservation%20for%20free",
            },
        ],
    },
    {
        title: "Support",
        links: [
            { label: "FAQs", href: "/?section=faq" },
            { label: "Help Center", href: "/help" },
            { label: "Terms & Conditions", href: "/terms" },
            { label: "Privacy Policy", href: "/privacy" },
        ],
    },
];

export type SocialLink = { iconClass: string; aria: string; href: string };

export const socialLinks: SocialLink[] = [
    {
        iconClass: "fa-facebook-f",
        aria: "Facebook",
        href: "https://m.facebook.com/ahmed.maher.algohary",
    },
    {
        iconClass: "fa-instagram",
        aria: "Instagram",
        href: "https://www.instagram.com/mhr2446",
    },
    {
        iconClass: "fa-linkedin-in",
        aria: "LinkedIn",
        href: "https://www.linkedin.com/in/ahmed-maher-algohary",
    },
    {
        iconClass: "fa-youtube",
        aria: "YouTube",
        href: "https://ahmedmaher-portfolio.vercel.app/",
    },
];
