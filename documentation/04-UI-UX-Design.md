# 🎨 UI/UX Design Documentation

## Clinica - Doctor Appointment Booking App

---

## 1. Design Overview

### 1.1 Design Philosophy

Clinica follows a **user-centric design approach** that prioritizes:

-   **Simplicity**: Clean, intuitive interfaces that reduce cognitive load
-   **Accessibility**: WCAG 2.1 AA compliance for inclusive design
-   **Responsiveness**: Seamless experience across all devices
-   **Consistency**: Unified design language throughout the application
-   **Trust**: Professional, medical-grade aesthetic that builds confidence

### 1.2 Design Principles

1. **Clarity First**: Information hierarchy guides user attention
2. **Efficiency**: Minimize steps to complete tasks
3. **Feedback**: Clear system status and user action confirmations
4. **Error Prevention**: Proactive validation and helpful error messages
5. **Aesthetic Integrity**: Professional medical aesthetic

---

## 2. Design System

### 2.1 Color Palette

#### Primary Colors

-   **Primary Blue**: `#0066CC` - Trust, professionalism, healthcare
-   **Primary Dark**: `#004499` - Headers, emphasis
-   **Primary Light**: `#E6F2FF` - Backgrounds, highlights

#### Secondary Colors

-   **Success Green**: `#28A745` - Success states, confirmations
-   **Warning Orange**: `#FFC107` - Warnings, pending states
-   **Error Red**: `#DC3545` - Errors, critical actions
-   **Info Blue**: `#17A2B8` - Information, tips

#### Neutral Colors

-   **Text Primary**: `#212529` - Main text content
-   **Text Secondary**: `#6C757D` - Secondary text, labels
-   **Background White**: `#FFFFFF` - Main background
-   **Background Light**: `#F8F9FA` - Section backgrounds
-   **Border Gray**: `#DEE2E6` - Borders, dividers

#### Medical Theme Colors

-   **Medical Teal**: `#20B2AA` - Medical associations
-   **Health Green**: `#32CD32` - Health, wellness

### 2.2 Typography

#### Font Families

-   **Primary Font**: System fonts stack (San Francisco, Segoe UI, Roboto, sans-serif)
-   **Headings**: Bold, clear hierarchy
-   **Body Text**: Regular weight, optimal readability
-   **Code/Monospace**: For technical information

#### Font Scale

-   **H1 (Page Titles)**: 2.5rem (40px) - Bold
-   **H2 (Section Titles)**: 2rem (32px) - Bold
-   **H3 (Subsection Titles)**: 1.5rem (24px) - Semi-bold
-   **H4 (Card Titles)**: 1.25rem (20px) - Semi-bold
-   **Body Large**: 1.125rem (18px) - Regular
-   **Body**: 1rem (16px) - Regular
-   **Body Small**: 0.875rem (14px) - Regular
-   **Caption**: 0.75rem (12px) - Regular

#### Line Heights

-   Headings: 1.2
-   Body text: 1.6
-   Tight spacing: 1.4

### 2.3 Spacing System

**Base Unit**: 8px

-   **XS**: 4px (0.25rem)
-   **SM**: 8px (0.5rem)
-   **MD**: 16px (1rem)
-   **LG**: 24px (1.5rem)
-   **XL**: 32px (2rem)
-   **XXL**: 48px (3rem)
-   **XXXL**: 64px (4rem)

### 2.4 Border Radius

-   **Small**: 4px - Buttons, small elements
-   **Medium**: 8px - Cards, inputs
-   **Large**: 12px - Modals, large cards
-   **Round**: 50% - Avatars, circular elements

### 2.5 Shadows

-   **Small**: `0 1px 3px rgba(0,0,0,0.1)` - Cards, inputs
-   **Medium**: `0 4px 6px rgba(0,0,0,0.1)` - Elevated cards
-   **Large**: `0 10px 20px rgba(0,0,0,0.15)` - Modals, dropdowns

### 2.6 Icons

-   **Library**: FontAwesome 7.1.0
-   **Size Scale**: 16px, 20px, 24px, 32px, 48px
-   **Style**: Solid, Regular, Brands (as appropriate)

---

## 3. Component Library

### 3.1 Buttons

#### Primary Button

-   **Background**: Primary Blue
-   **Text**: White
-   **Hover**: Darker shade
-   **Padding**: 12px 24px
-   **Border Radius**: 8px
-   **Use**: Primary actions (Book Appointment, Submit)

#### Secondary Button

-   **Background**: Transparent
-   **Border**: Primary Blue (2px)
-   **Text**: Primary Blue
-   **Hover**: Light blue background
-   **Use**: Secondary actions (Cancel, Back)

#### Danger Button

-   **Background**: Error Red
-   **Text**: White
-   **Use**: Destructive actions (Delete, Cancel Appointment)

#### Ghost Button

-   **Background**: Transparent
-   **Text**: Primary color
-   **Use**: Tertiary actions, links styled as buttons

### 3.2 Form Elements

#### Input Fields

-   **Height**: 48px
-   **Border**: 1px solid Border Gray
-   **Border Radius**: 8px
-   **Padding**: 12px 16px
-   **Focus State**: Blue border, subtle shadow
-   **Error State**: Red border, error message below
-   **Disabled State**: Gray background, reduced opacity

#### Select Dropdowns

-   **Style**: Consistent with input fields
-   **Custom Styling**: Custom select component
-   **Multi-select**: Checkbox-style selection

#### Checkboxes & Radio Buttons

-   **Size**: 20px × 20px
-   **Custom Styling**: Branded checkboxes
-   **Labels**: Left-aligned, clickable

#### Text Areas

-   **Min Height**: 100px
-   **Resizable**: Vertical only
-   **Padding**: 12px 16px

### 3.3 Cards

#### Doctor Card

-   **Layout**: Vertical card with image, info, actions
-   **Image**: 200px × 200px (rounded)
-   **Content**: Name, specialization, rating, location, fee
-   **Actions**: Book, Favorite, View Profile buttons
-   **Hover Effect**: Subtle elevation increase

#### Appointment Card

-   **Layout**: Horizontal or vertical based on context
-   **Status Badge**: Color-coded (Pending, Approved, etc.)
-   **Information**: Date, time, doctor/patient info, price
-   **Actions**: Context-specific (Approve, Cancel, etc.)

#### Notification Card

-   **Layout**: Horizontal with icon, content, timestamp
-   **Unread Indicator**: Blue dot or highlight
-   **Actions**: Mark as read, delete

### 3.4 Modals

#### Booking Modal (Multi-Step)

-   **Width**: 600px (desktop), 100% (mobile)
-   **Steps Indicator**: Progress bar at top
-   **Content Area**: Scrollable
-   **Actions**: Next/Back buttons, Cancel
-   **Close**: X button, click outside, ESC key

#### Confirmation Modal

-   **Width**: 400px
-   **Content**: Icon, message, actions
-   **Actions**: Confirm, Cancel

### 3.5 Navigation

#### Navbar

-   **Height**: 80px (desktop), 60px (mobile)
-   **Background**: White with shadow
-   **Logo**: Left side
-   **Links**: Center (desktop), hamburger menu (mobile)
-   **Actions**: Login/Register buttons (right)

#### Sidebar (Dashboard)

-   **Width**: 260px (desktop), 280px (mobile)
-   **Background**: White
-   **Logo**: Top
-   **Navigation Items**: Icon + text, active state
-   **Collapsible**: On mobile

#### Breadcrumbs

-   **Style**: Text links with separators
-   **Location**: Below page header

### 3.6 Tables

#### Data Tables

-   **Header**: Bold, background color
-   **Rows**: Alternating background (zebra striping)
-   **Hover**: Row highlight
-   **Actions**: Action buttons in last column
-   **Pagination**: Bottom of table

### 3.7 Badges & Tags

#### Status Badges

-   **Pending**: Orange/Warning
-   **Approved**: Green/Success
-   **Rejected**: Red/Error
-   **Ongoing**: Blue/Info
-   **Completed**: Gray
-   **Canceled**: Red

#### Specialization Tags

-   **Style**: Rounded, colored background
-   **Use**: Doctor cards, filters

---

## 4. User Interface Design

### 4.1 Landing Page / Home

#### Hero Section

-   **Layout**: Full-width with background image/gradient
-   **Content**:
    -   Tagline: "Your channel to meet the best doctors worldwide"
    -   CTA: "Make your first reservation for free"
    -   Search bar (optional)
-   **Visual**: Doctor imagery, medical theme

#### Features Section

-   **Layout**: 3-4 column grid (desktop), stacked (mobile)
-   **Features**:
    -   Book Instantly
    -   Trusted Doctors
    -   Online or On-site
    -   Secure Payments
-   **Icons**: Large, colorful icons
-   **Cards**: Feature cards with icons, titles, descriptions

#### How It Works Section

-   **Layout**: Horizontal timeline or vertical steps
-   **Steps**:
    1. Search for Doctor
    2. Book Appointment
    3. Pay Securely
    4. Meet Your Doctor
-   **Visual**: Step numbers, icons, descriptions

#### Specialists Section

-   **Layout**: Grid of doctor cards
-   **Filters**: Specialization, location, availability
-   **Pagination**: Load more or pagination dots
-   **Cards**: Doctor profile cards

#### Testimonials Section

-   **Layout**: Carousel/slider
-   **Content**: Patient reviews with stars, text, author
-   **Visual**: Star ratings, profile images

#### Footer

-   **Layout**: Multi-column with links
-   **Sections**: About, Quick Links, Contact, Legal
-   **Social Media**: Icons
-   **Copyright**: Bottom

### 4.2 Authentication Pages

#### Login Page

-   **Layout**: Centered form card
-   **Elements**:
    -   Role selector (Patient/Doctor/Admin/Owner)
    -   Email input
    -   Password input
    -   Remember me checkbox
    -   Forgot password link
    -   Login button
    -   Register link
-   **Visual**: Clean, minimal, focused

#### Register Page

-   **Layout**: Multi-step form
-   **Steps**:
    1. Choose Role (Patient/Doctor)
    2. Email & Password
    3. Personal Information
    4. Professional Information (Doctors only)
    5. OTP Verification
    6. Success
-   **Progress Indicator**: Step counter/progress bar
-   **Validation**: Real-time validation feedback

### 4.3 Patient Dashboard

#### Layout

-   **Sidebar**: Navigation menu
-   **Main Content**: Dashboard content area
-   **Top Bar**: Notifications, user profile

#### Dashboard Sections

1. **Profile**: Editable patient information
2. **Doctors Directory**: Searchable, filterable doctor list
3. **Appointments**: Tabs (Pending, Ongoing, Completed, Canceled)
4. **Notifications**: Unseen/Seen tabs
5. **Chat**: Chat interface with admin/doctors

### 4.4 Doctor Dashboard

#### Layout

-   **Sidebar**: Navigation menu
-   **Main Content**: Dashboard content area
-   **Top Bar**: Notifications, unread count

#### Dashboard Sections

1. **Profile**: Editable doctor profile
2. **Appointments**: Tabs (Under Review, Ongoing, Completed, Canceled)
3. **Notifications**: Unseen/Seen tabs
4. **Chat**: Chat with admin/patients
5. **Analytics**: Performance metrics

### 4.5 Admin Dashboard

#### Layout

-   **Sidebar**: Navigation menu
-   **Main Content**: Management interfaces
-   **Top Bar**: Notifications, new applications count

#### Dashboard Sections

1. **Analytics**: Charts, statistics, KPIs
2. **Doctors Management**: Tabs (Registered, Under Review)
3. **Patients Management**: Searchable patient list
4. **Appointments Management**: Tabs (Ongoing, Completed, Canceled)
5. **Chat**: Send/Receive messages

### 4.6 Booking Flow

#### Booking Modal (Multi-Step)

1. **Step 1 - Select Date & Time**

    - Calendar view
    - Available time slots
    - Doctor availability

2. **Step 2 - Consultation Type**

    - On-site option
    - Online option (Zoom)
    - Location selection (if on-site)

3. **Step 3 - Patient Details**

    - Auto-filled from profile
    - Editable if needed

4. **Step 4 - Payment Method**

    - On-site: Cash/Card
    - Online: Card only (Stripe/PayPal)
    - First appointment free indicator

5. **Step 5 - Confirmation**
    - Summary of booking
    - Review all details
    - Confirm button

---

## 5. User Experience (UX) Design

### 5.1 User Flows

#### Patient Booking Flow

```
Landing Page → Search Doctors → View Doctor Profile →
Book Appointment → Select Date/Time → Choose Type →
Payment → Confirmation → Appointment Dashboard
```

#### Doctor Registration Flow

```
Register → Choose Doctor Role → Email/Password →
Personal Info → Professional Info → OTP Verification →
Pending Approval → Admin Approval → Active Account
```

#### Appointment Approval Flow

```
Patient Books → Doctor Receives Notification →
Doctor Reviews → Approve/Reject → Patient Notified →
If Approved: Generate Meeting Link (if online) →
Appointment Scheduled
```

### 5.2 Interaction Patterns

#### Feedback Mechanisms

-   **Success**: Green toast notification, checkmark icon
-   **Error**: Red alert, error icon, helpful message
-   **Loading**: Spinner, skeleton screens, progress indicators
-   **Confirmation**: Modal dialogs for critical actions

#### Micro-interactions

-   **Button Hover**: Color change, slight elevation
-   **Card Hover**: Shadow increase, slight scale
-   **Input Focus**: Border color change, shadow
-   **Page Transitions**: Smooth fade/slide animations
-   **Scroll Animations**: Fade-in on scroll (Framer Motion)

### 5.3 Error Handling

#### Error States

-   **Form Validation**: Inline error messages
-   **Network Errors**: Retry button, helpful message
-   **404 Pages**: Custom not found page with navigation
-   **Empty States**: Helpful messages, call-to-action

#### Error Messages

-   **Clear Language**: User-friendly, non-technical
-   **Actionable**: Suggest solutions
-   **Visual**: Icons, color coding
-   **Accessible**: Screen reader friendly

### 5.4 Accessibility (A11y)

#### WCAG 2.1 AA Compliance

-   **Color Contrast**: Minimum 4.5:1 for text
-   **Keyboard Navigation**: Full keyboard accessibility
-   **Screen Readers**: ARIA labels, semantic HTML
-   **Focus Indicators**: Visible focus states
-   **Alt Text**: All images have descriptive alt text
-   **Form Labels**: All inputs have associated labels

#### Accessibility Features

-   **Skip Links**: Skip to main content
-   **Focus Management**: Logical tab order
-   **Error Announcements**: Screen reader announcements
-   **Responsive Text**: Scalable text (up to 200%)

---

## 6. Responsive Design

### 6.1 Breakpoints

-   **Mobile**: < 576px
-   **Tablet**: 576px - 768px
-   **Desktop**: 768px - 992px
-   **Large Desktop**: 992px - 1200px
-   **Extra Large**: > 1200px

### 6.2 Mobile-First Approach

-   **Design**: Start with mobile, enhance for larger screens
-   **Navigation**: Hamburger menu on mobile
-   **Forms**: Full-width inputs on mobile
-   **Cards**: Stack vertically on mobile
-   **Tables**: Scrollable or card view on mobile

### 6.3 Responsive Patterns

-   **Grid Systems**: Bootstrap grid (12 columns)
-   **Flexible Images**: Responsive images with srcset
-   **Touch Targets**: Minimum 44px × 44px
-   **Spacing**: Reduced padding/margins on mobile

---

## 7. Animation & Motion

### 7.1 Animation Principles

-   **Purpose**: Enhance usability, not distract
-   **Performance**: 60fps, GPU-accelerated
-   **Duration**: 200-300ms for micro-interactions
-   **Easing**: Natural easing curves

### 7.2 Animation Library

-   **Framer Motion**: Primary animation library
-   **Scroll Animations**: Fade-in on scroll
-   **Page Transitions**: Smooth page changes
-   **Loading States**: Skeleton screens, spinners

### 7.3 Animation Types

-   **Fade**: Opacity transitions
-   **Slide**: Position transitions
-   **Scale**: Size transitions
-   **Rotate**: Rotation animations (loading spinners)

---

## 8. Design Assets

### 8.1 Design Tools

-   **Figma**: Primary design tool
-   **Canva**: Additional graphics
-   **Figma Link**: [Design File](https://www.figma.com/design/S5ad7gwQqkaLJCVM8yanFn/DEPI_Grad.Proj)

### 8.2 Design Deliverables

-   **Wireframes**: Low-fidelity layouts
-   **Mockups**: High-fidelity designs
-   **Prototypes**: Interactive prototypes
-   **Style Guide**: Component library documentation
-   **UX Analysis**: [Google Drive Document](https://drive.google.com/file/d/1vJ646NwjJB5-Fwq6U6SVeLvEtETKlKyf/view?usp=sharing)

### 8.3 Asset Management

-   **Images**: Optimized, WebP format when possible
-   **Icons**: FontAwesome icon library
-   **Logos**: SVG format for scalability
-   **Illustrations**: Custom or stock medical illustrations

---

## 9. Design Implementation

### 9.1 Frontend Framework

-   **React.js**: Component-based UI
-   **TypeScript**: Type-safe development
-   **SCSS**: Styling with variables and mixins
-   **Bootstrap**: Responsive grid and utilities

### 9.2 Component Structure

```
src/
  components/
    - Reusable UI components
  pages/
    - Page-level components
  common/
    - Shared components (Navbar, Footer)
```

### 9.3 Styling Approach

-   **SCSS Modules**: Component-scoped styles
-   **BEM Methodology**: Block-Element-Modifier naming
-   **CSS Variables**: Theme colors, spacing
-   **Responsive Mixins**: Media query helpers

---

## 10. Design Testing & Validation

### 10.1 Usability Testing

-   **User Testing**: Real user feedback sessions
-   **A/B Testing**: Test different design variations
-   **Heatmaps**: Track user interaction patterns
-   **Analytics**: Monitor user behavior

### 10.2 Design Reviews

-   **Internal Reviews**: Team design critiques
-   **Stakeholder Reviews**: Client/owner feedback
-   **Accessibility Audits**: A11y compliance checks
-   **Performance Testing**: Load time, animation performance

### 10.3 Iteration Process

-   **Feedback Collection**: Gather user feedback
-   **Design Updates**: Iterate based on feedback
-   **Version Control**: Track design changes
-   **Documentation**: Update design system

---

## 11. Design Resources

### 11.1 Design Links

-   **Figma Design**: [https://www.figma.com/design/S5ad7gwQqkaLJCVM8yanFn/DEPI_Grad.Proj](https://www.figma.com/design/S5ad7gwQqkaLJCVM8yanFn/DEPI_Grad.Proj)
-   **UX Analysis**: [Google Drive](https://drive.google.com/file/d/1vJ646NwjJB5-Fwq6U6SVeLvEtETKlKyf/view?usp=sharing)
-   **Live Preview**: [https://clinica-doctor-appointment-booking.vercel.app/](https://clinica-doctor-appointment-booking.vercel.app/)

### 11.2 Design Inspiration

-   **Medical Apps**: Modern healthcare app designs
-   **Booking Platforms**: Appointment booking UX patterns
-   **Design Systems**: Material Design, Ant Design
-   **Accessibility Guidelines**: WCAG 2.1, A11y Project

---

## 12. Design Maintenance

### 12.1 Design System Updates

-   **Version Control**: Track design system versions
-   **Component Updates**: Maintain component library
-   **Documentation**: Keep design docs updated
-   **Team Communication**: Share design updates

### 12.2 Design Consistency

-   **Style Guide**: Reference for developers
-   **Component Library**: Reusable components
-   **Design Reviews**: Regular consistency checks
-   **Design Tokens**: Centralized design values

---

**Document Version**: 1.0  
**Last Updated**: November 2025  
**Project**: Clinica - DEPI Graduation Project  
**Design Tool**: Figma  
**Design Status**: In Progress
