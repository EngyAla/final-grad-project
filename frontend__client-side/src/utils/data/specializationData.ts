
const specializationData = [
    // Primary Care & General Medicine
    {
        id: 1,
        name: "General Practice",
    },
    {
        id: 2,
        name: "Family Medicine",
    },
    {
        id: 3,
        name: "Internal Medicine",
    },
    {
        id: 4,
        name: "Emergency Medicine",
    },
    {
        id: 5,
        name: "Preventive Medicine",
    },

    // Cardiology & Cardiovascular
    {
        id: 6,
        name: "Cardiology",
    },
    {
        id: 7,
        name: "Cardiothoracic Surgery",
    },
    {
        id: 8,
        name: "Interventional Cardiology",
    },
    {
        id: 9,
        name: "Electrophysiology",
    },

    // Neurology & Neurosurgery
    {
        id: 10,
        name: "Neurology",
    },
    {
        id: 11,
        name: "Neurosurgery",
    },
    {
        id: 12,
        name: "Child Neurology",
    },
    {
        id: 13,
        name: "Neuropathology",
    },

    // Orthopedics & Musculoskeletal
    {
        id: 14,
        name: "Orthopedics",
    },
    {
        id: 15,
        name: "Sports Medicine",
    },
    {
        id: 16,
        name: "Physical Medicine & Rehabilitation",
    },
    {
        id: 17,
        name: "Rheumatology",
    },

    // Pediatrics & Child Health
    {
        id: 18,
        name: "Pediatrics",
    },
    {
        id: 19,
        name: "Neonatology",
    },
    {
        id: 20,
        name: "Pediatric Surgery",
    },
    {
        id: 21,
        name: "Pediatric Cardiology",
    },
    {
        id: 22,
        name: "Pediatric Oncology",
    },

    // Mental Health & Psychiatry
    {
        id: 23,
        name: "Psychiatry",
    },
    {
        id: 24,
        name: "Child & Adolescent Psychiatry",
    },
    {
        id: 25,
        name: "Geriatric Psychiatry",
    },
    {
        id: 26,
        name: "Addiction Psychiatry",
    },

    // Women's Health
    {
        id: 27,
        name: "Gynecology",
    },
    {
        id: 28,
        name: "Obstetrics",
    },
    {
        id: 29,
        name: "Obstetrics & Gynecology",
    },
    {
        id: 30,
        name: "Reproductive Endocrinology",
    },
    {
        id: 31,
        name: "Gynecologic Oncology",
    },

    // Urology & Men's Health
    {
        id: 32,
        name: "Urology",
    },
    {
        id: 33,
        name: "Pediatric Urology",
    },
    {
        id: 34,
        name: "Urologic Oncology",
    },

    // Eye Care
    {
        id: 35,
        name: "Ophthalmology",
    },
    {
        id: 36,
        name: "Pediatric Ophthalmology",
    },
    {
        id: 37,
        name: "Ophthalmic Plastic Surgery",
    },

    // Ear, Nose & Throat
    {
        id: 38,
        name: "Otolaryngology (ENT)",
    },
    {
        id: 39,
        name: "Head & Neck Surgery",
    },
    {
        id: 40,
        name: "Pediatric Otolaryngology",
    },

    // Dermatology & Skin Care
    {
        id: 41,
        name: "Dermatology",
    },
    {
        id: 42,
        name: "Dermatopathology",
    },
    {
        id: 43,
        name: "Pediatric Dermatology",
    },

    // Oncology & Cancer Care
    {
        id: 44,
        name: "Medical Oncology",
    },
    {
        id: 45,
        name: "Radiation Oncology",
    },
    {
        id: 46,
        name: "Surgical Oncology",
    },
    {
        id: 47,
        name: "Hematology",
    },
    {
        id: 48,
        name: "Hematology-Oncology",
    },

    // Gastroenterology & Digestive Health
    {
        id: 49,
        name: "Gastroenterology",
    },
    {
        id: 50,
        name: "Hepatology",
    },
    {
        id: 51,
        name: "Pediatric Gastroenterology",
    },

    // Endocrinology & Diabetes
    {
        id: 52,
        name: "Endocrinology",
    },
    {
        id: 53,
        name: "Diabetes & Metabolism",
    },
    {
        id: 54,
        name: "Pediatric Endocrinology",
    },

    // Pulmonology & Respiratory
    {
        id: 55,
        name: "Pulmonology",
    },
    {
        id: 56,
        name: "Critical Care Medicine",
    },
    {
        id: 57,
        name: "Sleep Medicine",
    },
    {
        id: 58,
        name: "Pediatric Pulmonology",
    },

    // Nephrology & Kidney Care
    {
        id: 59,
        name: "Nephrology",
    },
    {
        id: 60,
        name: "Pediatric Nephrology",
    },

    // Infectious Diseases
    {
        id: 61,
        name: "Infectious Diseases",
    },
    {
        id: 62,
        name: "Pediatric Infectious Diseases",
    },

    // Allergy & Immunology
    {
        id: 63,
        name: "Allergy & Immunology",
    },
    {
        id: 64,
        name: "Pediatric Allergy & Immunology",
    },

    // Radiology & Imaging
    {
        id: 65,
        name: "Radiology",
    },
    {
        id: 66,
        name: "Interventional Radiology",
    },
    {
        id: 67,
        name: "Nuclear Medicine",
    },
    {
        id: 68,
        name: "Pediatric Radiology",
    },

    // Anesthesiology & Pain Management
    {
        id: 69,
        name: "Anesthesiology",
    },
    {
        id: 70,
        name: "Pain Medicine",
    },
    {
        id: 71,
        name: "Pediatric Anesthesiology",
    },

    // Pathology & Laboratory Medicine
    {
        id: 72,
        name: "Pathology",
    },
    {
        id: 73,
        name: "Clinical Pathology",
    },
    {
        id: 74,
        name: "Anatomic Pathology",
    },
    {
        id: 75,
        name: "Forensic Pathology",
    },

    // Geriatrics & Aging
    {
        id: 76,
        name: "Geriatrics",
    },
    {
        id: 77,
        name: "Geriatric Medicine",
    },

    // Other Specializations
    {
        id: 78,
        name: "Occupational Medicine",
    },
    {
        id: 79,
        name: "Aerospace Medicine",
    },
    {
        id: 80,
        name: "Public Health",
    },
    {
        id: 81,
        name: "Clinical Genetics",
    },
    {
        id: 82,
        name: "Medical Genetics",
    },
    {
        id: 83,
        name: "Nuclear Medicine",
    },
    {
        id: 84,
        name: "Palliative Care",
    },
    {
        id: 85,
        name: "Hospice Medicine",
    },
    {
        id: 86,
        name: "Travel Medicine",
    },
    {
        id: 87,
        name: "Tropical Medicine",
    },
    {
        id: 88,
        name: "Wilderness Medicine",
    },
    {
        id: 89,
        name: "Undersea Medicine",
    },
    {
        id: 90,
        name: "Hyperbaric Medicine",
    },
];

export default specializationData;
