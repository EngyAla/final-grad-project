import type { Variants } from "framer-motion";
import type { ReactNode } from "react";

// =================== Main Input ===================
export interface MainInputProps {
    icon: string;
    placeholder: string;
    name: string;
    id: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// =================== Custom Select ===================
export interface Option {
    value: string;
    label: string;
}
export interface CustomSelectProps {
    options: Option[];
    placeholder: string;
    icon: string;
    name?: string;
    id?: string;
    value?: string;
    onChange?: (value: string) => void;
    classes?: string;
}

// =================== Navbar Buttons ===================
export interface NavbarButtonsProps {
    isLoggedIn: boolean;
    isLoginOpen: boolean;
    onLogin: () => void;
    onLogout: () => void;
    onToggleLogin: () => void;
    onCloseOffcanvas: () => void;
    loginBtnRef: React.RefObject<HTMLButtonElement>;
    loginMenuRef: React.RefObject<HTMLDivElement>;
}

// =================== Navbar Dropdown ===================
export interface NavbarDropdownProps {
    isOpen: boolean;
    onLogin: () => void;
    onLogout: () => void;
    onCloseOffcanvas: () => void;
    loginMenuRef: React.RefObject<HTMLDivElement>;
}

// =================== Navbar Links ===================
export interface NavbarLink {
    link: string;
    target: string;
}
export interface NavbarLinksProps {
    links: NavbarLink[];
    onLinkClick: () => void;
}

// =================== Logo Item ===================
export interface LogoItemProps {
    icon?: string;
    image?: string;
    alt: string;
    className: string;
}

// =================== Action Button ===================
export interface ActionButtonProps {
    icon: string;
    text: string;
    onClick?: () => void;
}

// =================== Scroll Button ===================
export interface ScrollButtonProps {
    direction: "left" | "right";
    isDisabled: boolean;
    onClick: () => void;
    ariaLabel: string;
}

// =================== Choices Slider ===================
export interface ChoicesSliderProps {
    choices: string[];
    activeChoice: string;
    onChoiceChange: (choice: string) => void;
}

// =================== Choice Button ===================
export interface ChoiceButtonProps {
    choice: string;
    isActive: boolean;
    onClick: () => void;
}

// =================== Choice Content Item ===================
export interface ChoiceContentItemProps {
    activeChoice: string;
}

// =================== Our Specialists Section ===================
export interface Specialist {
    id: number;
    name: string;
    specialization: string;
    rating: number;
    image: string;
    showBookButton?: boolean;
}

export interface SpecialistCardProps {
    specialist: Specialist;
    onBookNow?: (specialist: Specialist) => void;
}

export interface FilterButtonProps {
    filter: string;
    isActive: boolean;
    onClick: () => void;
}

export interface FilterTabsProps {
    filters: string[];
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

export interface SpecialistsGridProps {
    specialists: Specialist[];
    onBookNow?: (specialist: Specialist) => void;
}

export interface PaginationDotsProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export interface NavigationButtonsProps {
    canGoLeft: boolean;
    canGoRight: boolean;
    onPrevious: () => void;
    onNext: () => void;
}

// =================== Stories Slider Item ===================
export interface StoriesSliderItemProps {
    stars: number;
    text: string;
    author: string;
    date: string;
}

// =================== Stories Modal ===================
export interface StoriesModalProps {
    isOpen: boolean;
    onClose: () => void;
    modalData: {
        stars: number;
        text: string;
        author: string;
        date: string;
    } | null;
}

// =================== Stories Slider Item With Modal ===================
export interface StoriesSliderItemPropsWithModal
    extends StoriesSliderItemProps {
    onShowModal?: (modalData: {
        stars: number;
        text: string;
        author: string;
        date: string;
    }) => void;
}

// =================== Timeline ===================
export interface TimelineStep {
    title: string;
    description: string;
}
export interface TimeLineProps {
    steps: TimelineStep[];
    className?: string;
}

// =================== Footer Column ===================
export interface FooterLink {
    label: string;
    href: string;
}
export interface FooterColumnProps {
    title: string;
    links: FooterLink[];
    colClass?: string;
}

// =================== Page Header ===================
export interface PageHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
}

// =================== Tabs Slider ===================
export interface TabItem {
    id: string;
    label: string;
    iconClass?: string; // e.g. "fa-user"
}
export interface TabsSliderProps {
    items: TabItem[];
    activeId: string;
    onChange: (id: string) => void;
    className?: string;
}

// =================== Privacy ===================
export interface PrivacyItem {
    id: string;
    title: string;
    description: string;
    icon: string;
}
export interface PrivacySection {
    id: string;
    title: string;
    icon: string;
    items: PrivacyItem[];
}
export interface ContactInfo {
    type: "email" | "phone" | "address";
    label: string;
    value: string;
    href?: string;
    icon: string;
}
export interface CookieType {
    id: string;
    name: string;
    description: string;
    icon: string;
}
export interface UserRight {
    id: string;
    title: string;
    description: string;
    icon: string;
}
export interface SecurityFeature {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: "primary" | "success" | "warning" | "info" | "danger";
}
export interface InfoListProps {
    items: PrivacyItem[];
    className?: string;
}
export interface AlertBoxProps {
    type: "info" | "warning" | "success" | "danger";
    title: string;
    message: string;
    icon?: string;
    className?: string;
}
export interface UserRightProps {
    right: UserRight;
    className?: string;
}
export interface CookieTypeProps {
    cookie: CookieType;
    className?: string;
}
export interface ContactInfoProps {
    contact?: ContactInfo;
    title?: string;
    email?: string;
    phone?: string;
    address?: string;
    className?: string;
}
export interface SecurityFeatureProps {
    feature: SecurityFeature;
    className?: string;
}
export interface InfoCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
}
export interface SharingListProps {
    items: PrivacyItem[];
    className?: string;
}
export interface SectionHeaderProps {
    title: string;
    icon: string;
    className?: string;
}

// =================== Help Center + Terms and Conditions ===================
export interface FAQItem {
    id: number;
    category: string;
    question: string;
    answer: string;
}
export interface Category {
    id: string;
    name: string;
    icon: string;
}
export interface QuickHelpCard {
    id: string;
    title: string;
    description: string;
    icon: string;
    link: string;
}
export interface ContactCard {
    id: string;
    title: string;
    description: string;
    icon: string;
    action: string;
    disabled?: boolean;
}
export interface SearchResultsProps {
    searchQuery: string;
    resultCount: number;
    suggestions: string[];
    onSuggestionClick: (suggestion: string) => void;
    className?: string;
}
export interface SearchSectionProps {
    searchQuery: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
    resultCount: number;
    suggestions: string[];
    onSuggestionClick: (suggestion: string) => void;
    className?: string;
}
export interface ProhibitedActivityProps {
    activity: PrivacyItem;
    className?: string;
}
export interface SearchBarProps {
    searchQuery: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
    className?: string;
}
export interface FAQSectionProps {
    activeCategory: string;
    onCategoryChange: (category: string) => void;
    expandedFAQ: number | null;
    onFAQToggle: (id: number) => void;
    searchQuery: string;
    className?: string;
}
export interface FAQItemProps {
    faq: FAQItem;
    isExpanded: boolean;
    onToggle: (id: number) => void;
    searchQuery: string;
    className?: string;
}
export interface QuickHelpCardProps {
    card: QuickHelpCard;
    className?: string;
}
export interface ContactCardProps {
    card: ContactCard;
    className?: string;
}
export interface LiabilityItemProps {
    item: PrivacyItem;
    className?: string;
}
export interface PrivacyFeatureProps {
    feature: SecurityFeature;
    className?: string;
}
export interface IntellectualPropertyProps {
    item: PrivacyItem;
    className?: string;
}
export interface ResponsibilityListProps {
    items: PrivacyItem[];
    className?: string;
}
export interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    className?: string;
}
export interface PaymentTermProps {
    term: PrivacyItem;
    className?: string;
}

// =================== Internet Checker ===================
export interface InternetCheckerProps {
    className?: string;
}
export interface InternetStatusProps {
    statusIcon: string;
    statusText: string;
    statusColor: string;
    isOnline: boolean;
    connectionSpeed: "slow" | "fast" | "unknown";
    onClose: () => void;
}
export interface StatusCardProps {
    isOnline: boolean;
    statusText: string;
    statusColor: string;
    onClose: () => void;
}
export interface StatusIconProps {
    isOnline: boolean;
    statusColor: string;
}
export interface CloseButtonProps {
    onClose: () => void;
}
export interface StatusContentProps {
    statusText: string;
    statusColor: string;
}

// =================== Scroll Animation ===================
export interface ScrollAnimationWrapperProps {
    children: ReactNode;
    variants?: Variants;
    className?: string;
    threshold?: number;
    triggerOnce?: boolean;
}
