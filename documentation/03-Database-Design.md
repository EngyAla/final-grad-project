# 🗄️ Database Design Documentation

## Clinica - Doctor Appointment Booking App

---

## 1. Database Overview

### 1.1 Database Technology

-   **Database System**: MongoDB (NoSQL Document Database)
-   **ODM (Object Document Mapper)**: Mongoose v8.18.1
-   **Hosting**: MongoDB Atlas (Cloud)
-   **Database Type**: Document-oriented, schema-less (with Mongoose schemas)

### 1.2 Design Principles

-   **Flexibility**: NoSQL structure allows for evolving schemas
-   **Scalability**: Horizontal scaling capabilities
-   **Performance**: Indexed queries for fast retrieval
-   **Data Integrity**: Mongoose validation and constraints
-   **Security**: Encrypted connections, role-based access

---

## 2. Database Schema Design

### 2.1 Collections Overview

The database consists of the following main collections:

1. **Users** - Base user information (authentication)
2. **Patients** - Patient-specific information
3. **Doctors** - Doctor-specific information
4. **Admins** - Administrator information
5. **Appointments** - Appointment records
6. **Notifications** - User notifications
7. **Messages** - Chat messages
8. **Specializations** - Medical specializations (reference data)
9. **Reviews** - Patient reviews and ratings
10. **Complaints** - User complaints

---

## 3. Collection Schemas

### 3.1 Users Collection

**Purpose**: Base authentication and common user information

```javascript
{
  _id: ObjectId,
  email: String (required, unique, lowercase, indexed),
  password: String (required, hashed),
  role: String (required, enum: ['patient', 'doctor', 'admin', 'owner']),
  isEmailVerified: Boolean (default: false),
  emailVerificationToken: String,
  emailVerificationExpires: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  twoFactorEnabled: Boolean (default: false),
  twoFactorSecret: String,
  isActive: Boolean (default: true),
  lastLogin: Date,
  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

**Indexes**:

-   `email`: Unique index
-   `role`: Index for role-based queries
-   `isActive`: Index for filtering active users

---

### 3.2 Patients Collection

**Purpose**: Patient-specific profile and medical information

```javascript
{
  _id: ObjectId,
  userId: ObjectId (required, ref: 'User', unique),

  // Personal Information
  profileImage: String (URL),
  firstName: String (required),
  lastName: String (required),
  age: Number (required, min: 18, or guardian required),
  gender: String (required, enum: ['male', 'female', 'other']),
  phone: String (required, unique, indexed),
  phoneVerified: Boolean (default: false),
  phoneOTP: String,
  phoneOTPExpires: Date,
  address: String,
  country: String (required),
  nationalId: String (required, unique, encrypted),

  // Medical Information
  chronicDiseases: [{
    name: String,
    diagnosedDate: Date
  }],
  medicalHistory: String,
  emergencyContact: {
    name: String,
    phone: String,
    relationship: String
  },
  guardianInfo: {
    name: String,
    phone: String,
    relationship: String
  },

  // Account Status
  isFirstAppointmentFree: Boolean (default: true),
  totalAppointments: Number (default: 0),

  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

**Indexes**:

-   `userId`: Unique index
-   `phone`: Unique index
-   `country`: Index for filtering
-   `nationalId`: Unique index (encrypted)

**Relationships**:

-   One-to-One with Users
-   One-to-Many with Appointments
-   One-to-Many with Reviews

---

### 3.3 Doctors Collection

**Purpose**: Doctor-specific profile and professional information

```javascript
{
  _id: ObjectId,
  userId: ObjectId (required, ref: 'User', unique),

  // Personal Information
  profileImage: String (required, URL),
  firstName: String (required),
  lastName: String (required),
  age: Number (required, min: 22),
  gender: String (required, enum: ['male', 'female', 'other']),
  phone: String (required, unique, indexed),
  phoneVerified: Boolean (default: false),
  phoneOTP: String,
  phoneOTPExpires: Date,
  website: String (URL),
  address: String (required),
  googleMapsLink: String (URL),
  country: String (required, indexed),
  nationalId: String (required, unique, encrypted),

  // Professional Information
  specialization: String (required, ref: 'Specialization', indexed),
  yearsOfExperience: Number (required, min: 0),
  feePerConsultation: Number (required, min: 0),
  currency: String (required, enum: ['USD', 'EUR', 'EGP'], default: 'USD'),
  consultationType: [String] (required, enum: ['onsite', 'online']),
  visitDuration: Number (required, min: 15), // in minutes

  // Availability
  availableDays: [String] (required, enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']),
  availableTimings: [{
    day: String,
    startTime: String, // HH:mm format
    endTime: String   // HH:mm format
  }],

  // Status & Verification
  status: String (required, enum: ['pending', 'approved', 'rejected'], default: 'pending', indexed),
  rejectionReason: String,
  verifiedBadge: Boolean (default: false),
  approvedAt: Date,
  approvedBy: ObjectId (ref: 'Admin'),

  // Performance Metrics
  totalAppointments: Number (default: 0),
  completedAppointments: Number (default: 0),
  canceledAppointments: Number (default: 0),
  averageRating: Number (default: 0, min: 0, max: 5),
  totalRatings: Number (default: 0),
  responseTime: Number, // in minutes

  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

**Indexes**:

-   `userId`: Unique index
-   `phone`: Unique index
-   `specialization`: Index for filtering
-   `country`: Index for filtering
-   `status`: Index for filtering pending/approved doctors
-   `verifiedBadge`: Index for verified doctors
-   `nationalId`: Unique index (encrypted)

**Relationships**:

-   One-to-One with Users
-   One-to-Many with Appointments
-   One-to-Many with Reviews
-   Many-to-One with Specializations

---

### 3.4 Admins Collection

**Purpose**: Administrator and owner account information

```javascript
{
  _id: ObjectId,
  userId: ObjectId (required, ref: 'User', unique),

  // Personal Information
  firstName: String (required),
  lastName: String (required),
  phone: String (required),
  role: String (required, enum: ['admin', 'owner']),

  // Permissions
  permissions: [String], // e.g., ['manage_doctors', 'manage_patients', 'view_analytics']

  // Activity
  lastActivity: Date,
  totalActions: Number (default: 0),

  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now),
  createdBy: ObjectId (ref: 'Admin') // Only for non-owner admins
}
```

**Indexes**:

-   `userId`: Unique index
-   `role`: Index for filtering

**Relationships**:

-   One-to-One with Users
-   One-to-Many with Appointments (approved/rejected)

---

### 3.5 Appointments Collection

**Purpose**: Appointment booking and management records

```javascript
{
  _id: ObjectId,
  appointmentId: String (required, unique, indexed), // Custom ID format: APT-YYYYMMDD-XXXX

  // Participants
  patientId: ObjectId (required, ref: 'Patient', indexed),
  doctorId: ObjectId (required, ref: 'Doctor', indexed),

  // Appointment Details
  date: Date (required, indexed),
  startTime: String (required), // HH:mm format
  endTime: String (required), // Calculated: startTime + visitDuration
  consultationType: String (required, enum: ['onsite', 'online']),

  // Location (for onsite)
  location: {
    address: String,
    googleMapsLink: String
  },

  // Online Consultation (for online)
  onlineDetails: {
    platform: String, // 'zoom', 'google-meet', etc.
    meetingLink: String,
    meetingId: String,
    password: String,
    generatedBy: ObjectId (ref: 'Doctor'),
    generatedAt: Date
  },

  // Payment Information
  payment: {
    amount: Number (required),
    currency: String (required),
    originalAmount: Number,
    tax: Number,
    finalAmount: Number,
    isFirstAppointment: Boolean (default: false),
    isFree: Boolean (default: false),
    paymentMethod: String (enum: ['cash', 'card', 'stripe', 'paypal']),
    paymentStatus: String (enum: ['pending', 'completed', 'refunded'], default: 'pending'),
    paymentDate: Date,
    transactionId: String
  },

  // Status & Workflow
  status: String (required, enum: ['pending', 'approved', 'rejected', 'ongoing', 'completed', 'canceled'], default: 'pending', indexed),
  approvedAt: Date,
  rejectedAt: Date,
  rejectionReason: String,
  startedAt: Date,
  completedAt: Date,
  canceledAt: Date,
  cancellationReason: String,
  canceledBy: String (enum: ['patient', 'doctor', 'admin']),

  // Notes & Complaints
  doctorNotes: String, // Private notes visible only to doctor
  patientNotes: String,
  complaintId: ObjectId (ref: 'Complaint'),

  // Feedback
  feedback: {
    rating: Number (min: 1, max: 5),
    comment: String,
    submittedAt: Date
  },

  createdAt: Date (default: Date.now, indexed),
  updatedAt: Date (default: Date.now)
}
```

**Indexes**:

-   `appointmentId`: Unique index
-   `patientId`: Index for patient queries
-   `doctorId`: Index for doctor queries
-   `date`: Index for date-based queries
-   `status`: Index for filtering by status
-   `createdAt`: Index for chronological queries
-   Compound index: `{doctorId: 1, date: 1, status: 1}` for doctor schedule queries
-   Compound index: `{patientId: 1, status: 1}` for patient appointment queries

**Relationships**:

-   Many-to-One with Patients
-   Many-to-One with Doctors
-   One-to-One with Complaints (optional)

**Business Rules**:

-   Cannot cancel within 24 hours of appointment
-   First appointment is free for patients
-   Online appointments require meeting link generation after approval
-   Status transitions: pending → approved/rejected → ongoing → completed/canceled

---

### 3.6 Notifications Collection

**Purpose**: System notifications for all users

```javascript
{
  _id: ObjectId,
  userId: ObjectId (required, ref: 'User', indexed),
  userRole: String (required, enum: ['patient', 'doctor', 'admin', 'owner']),

  // Notification Content
  type: String (required, enum: [
    'appointment_requested',
    'appointment_approved',
    'appointment_rejected',
    'appointment_canceled',
    'appointment_reminder',
    'doctor_approved',
    'doctor_rejected',
    'new_message',
    'payment_received',
    'system_announcement'
  ], indexed),
  title: String (required),
  message: String (required),
  data: Object, // Additional data (appointmentId, etc.)

  // Status
  isSeen: Boolean (default: false, indexed),
  seenAt: Date,

  // Priority
  priority: String (enum: ['low', 'medium', 'high', 'urgent'], default: 'medium'),

  // Action
  actionUrl: String, // Link to relevant page
  actionLabel: String,

  createdAt: Date (default: Date.now, indexed)
}
```

**Indexes**:

-   `userId`: Index for user notifications
-   `isSeen`: Index for filtering unseen notifications
-   `type`: Index for filtering by type
-   `createdAt`: Index for chronological sorting
-   Compound index: `{userId: 1, isSeen: 1}` for unseen notifications count

**Relationships**:

-   Many-to-One with Users

---

### 3.7 Messages Collection

**Purpose**: Chat messages between users

```javascript
{
  _id: ObjectId,
  conversationId: String (required, indexed), // Format: 'user1Id_user2Id' (sorted)

  // Participants
  senderId: ObjectId (required, ref: 'User', indexed),
  receiverId: ObjectId (required, ref: 'User', indexed),
  senderRole: String (required),
  receiverRole: String (required),

  // Message Content
  message: String (required),
  messageType: String (enum: ['text', 'image', 'file', 'system'], default: 'text'),
  attachments: [{
    url: String,
    type: String,
    name: String,
    size: Number
  }],

  // Status
  isRead: Boolean (default: false, indexed),
  readAt: Date,

  // System Messages
  isSystemMessage: Boolean (default: false),
  systemMessageType: String, // 'complaint', 'appointment_update', etc.

  createdAt: Date (default: Date.now, indexed),
  updatedAt: Date (default: Date.now)
}
```

**Indexes**:

-   `conversationId`: Index for conversation queries
-   `senderId`: Index for sent messages
-   `receiverId`: Index for received messages
-   `isRead`: Index for unread messages
-   `createdAt`: Index for chronological sorting
-   Compound index: `{conversationId: 1, createdAt: -1}` for conversation history

**Relationships**:

-   Many-to-One with Users (sender)
-   Many-to-One with Users (receiver)

**Business Rules**:

-   Patients can chat with doctors only after appointment approval
-   All users can chat with admins
-   System messages are auto-generated for certain events

---

### 3.8 Specializations Collection

**Purpose**: Reference data for medical specializations

```javascript
{
  _id: ObjectId,
  specializationId: Number (required, unique, indexed),
  name: String (required, unique, indexed),
  category: String, // e.g., 'Primary Care', 'Cardiology', etc.
  description: String,
  icon: String, // Icon identifier
  isActive: Boolean (default: true),

  createdAt: Date (default: Date.now),
  updatedAt: Date (default: Date.now)
}
```

**Indexes**:

-   `specializationId`: Unique index
-   `name`: Unique index
-   `category`: Index for filtering

**Note**: This is primarily reference data, can be seeded from `specializationData.ts`

---

### 3.9 Reviews Collection

**Purpose**: Patient reviews and ratings for doctors

```javascript
{
  _id: ObjectId,
  appointmentId: ObjectId (required, ref: 'Appointment', unique),
  doctorId: ObjectId (required, ref: 'Doctor', indexed),
  patientId: ObjectId (required, ref: 'Patient', indexed),

  // Review Content
  rating: Number (required, min: 1, max: 5, indexed),
  comment: String,

  // Status
  isVisible: Boolean (default: true),
  isVerified: Boolean (default: false), // Verified purchase

  // Moderation
  isModerated: Boolean (default: false),
  moderatedBy: ObjectId (ref: 'Admin'),
  moderatedAt: Date,

  createdAt: Date (default: Date.now, indexed),
  updatedAt: Date (default: Date.now)
}
```

**Indexes**:

-   `appointmentId`: Unique index
-   `doctorId`: Index for doctor reviews
-   `patientId`: Index for patient reviews
-   `rating`: Index for rating-based queries
-   `createdAt`: Index for chronological sorting

**Relationships**:

-   One-to-One with Appointments
-   Many-to-One with Doctors
-   Many-to-One with Patients

---

### 3.10 Complaints Collection

**Purpose**: User complaints and dispute management

```javascript
{
  _id: ObjectId,
  complaintId: String (required, unique, indexed), // Format: 'COMP-YYYYMMDD-XXXX

  // Participants
  complainantId: ObjectId (required, ref: 'User', indexed),
  complainantRole: String (required, enum: ['patient', 'doctor']),
  respondentId: ObjectId (ref: 'User'), // The other party
  appointmentId: ObjectId (ref: 'Appointment', indexed),

  // Complaint Details
  type: String (required, enum: [
    'appointment_issue',
    'payment_issue',
    'professional_conduct',
    'system_issue',
    'other'
  ]),
  subject: String (required),
  description: String (required),
  priority: String (enum: ['low', 'medium', 'high', 'urgent'], default: 'medium'),

  // Status & Resolution
  status: String (required, enum: ['open', 'in_progress', 'resolved', 'closed'], default: 'open', indexed),
  assignedTo: ObjectId (ref: 'Admin'),
  resolution: String,
  resolvedAt: Date,
  resolvedBy: ObjectId (ref: 'Admin'),

  // Attachments
  attachments: [{
    url: String,
    type: String,
    name: String
  }],

  createdAt: Date (default: Date.now, indexed),
  updatedAt: Date (default: Date.now)
}
```

**Indexes**:

-   `complaintId`: Unique index
-   `complainantId`: Index for user complaints
-   `appointmentId`: Index for appointment-related complaints
-   `status`: Index for filtering by status
-   `createdAt`: Index for chronological sorting

**Relationships**:

-   Many-to-One with Users (complainant)
-   Many-to-One with Appointments (optional)
-   Many-to-One with Admins (assigned/resolved)

---

## 4. Database Relationships Diagram

```
Users (1) ────< (1) Patients
Users (1) ────< (1) Doctors
Users (1) ────< (1) Admins

Patients (1) ────< (*) Appointments
Doctors (1) ────< (*) Appointments
Appointments (1) ────< (1) Reviews
Appointments (1) ────< (0..1) Complaints

Doctors (*) ────< (1) Specializations

Users (1) ────< (*) Notifications
Users (1) ────< (*) Messages (as sender)
Users (1) ────< (*) Messages (as receiver)
```

---

## 5. Indexing Strategy

### 5.1 Primary Indexes

-   All `_id` fields (automatic in MongoDB)
-   All foreign key references (`userId`, `patientId`, `doctorId`, etc.)
-   Unique fields (`email`, `phone`, `nationalId`, etc.)

### 5.2 Query Optimization Indexes

-   Status fields for filtering (`status`, `isSeen`, `isActive`)
-   Date fields for sorting (`createdAt`, `date`)
-   Search fields (`name`, `specialization`, `country`)
-   Compound indexes for common query patterns

### 5.3 Index Maintenance

-   Regular index analysis and optimization
-   Monitor query performance
-   Remove unused indexes
-   Update indexes based on query patterns

---

## 6. Data Security & Privacy

### 6.1 Encryption

-   **At Rest**: MongoDB Atlas encryption
-   **In Transit**: TLS/SSL connections
-   **Sensitive Fields**: National ID, payment information encrypted
-   **Passwords**: Hashed using bcrypt or similar

### 6.2 Access Control

-   **Database Level**: Role-based access control (RBAC)
-   **Application Level**: JWT authentication
-   **Field Level**: Sensitive data access restricted by role

### 6.3 Compliance

-   **GDPR**: Right to access, delete, portability
-   **HIPAA**: Healthcare data protection standards
-   **Data Retention**: Configurable retention policies
-   **Audit Logs**: Track data access and modifications

---

## 7. Data Validation Rules

### 7.1 Mongoose Validation

-   Required fields validation
-   Type validation (String, Number, Date, etc.)
-   Enum validation for restricted values
-   Custom validation functions
-   Unique constraints

### 7.2 Business Logic Validation

-   Age restrictions (patients ≥18, doctors >22)
-   Appointment time conflicts
-   Payment amount calculations
-   Status transition rules

---

## 8. Backup & Recovery Strategy

### 8.1 Backup Strategy

-   **Automated Backups**: Daily automated backups
-   **Backup Retention**: 30 days rolling retention
-   **Backup Location**: Multiple geographic regions
-   **Point-in-Time Recovery**: Available through MongoDB Atlas

### 8.2 Recovery Procedures

-   Documented recovery procedures
-   Regular recovery testing
-   Disaster recovery plan
-   Data replication for high availability

---

## 9. Performance Optimization

### 9.1 Query Optimization

-   Use indexes effectively
-   Limit query results with pagination
-   Use projection to limit returned fields
-   Aggregate queries for analytics

### 9.2 Caching Strategy

-   Cache frequently accessed data (specializations, doctor profiles)
-   Redis for session management
-   CDN for static assets

### 9.3 Scalability

-   Horizontal scaling with MongoDB sharding
-   Read replicas for read-heavy operations
-   Connection pooling
-   Database monitoring and alerting

---

## 10. Migration & Seeding

### 10.1 Initial Data Seeding

-   Specializations data (90+ specializations)
-   Default admin account
-   System configuration data

### 10.2 Migration Scripts

-   Database schema migrations
-   Data migration scripts
-   Index creation scripts
-   Validation scripts

---

## 11. Database Monitoring

### 11.1 Key Metrics

-   Query performance
-   Index usage
-   Connection pool usage
-   Storage usage
-   Replication lag

### 11.2 Alerts

-   High query latency
-   Low available storage
-   Connection pool exhaustion
-   Replication issues
-   Security events

---

**Document Version**: 1.0  
**Last Updated**: November 2025  
**Project**: Clinica - DEPI Graduation Project
