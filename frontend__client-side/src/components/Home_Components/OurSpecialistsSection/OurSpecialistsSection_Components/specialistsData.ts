import doctor1 from "../../.././../assets/images/doctor-1.png";
import doctor2 from "../../.././../assets/images/doctor-2.png";
import doctor3 from "../../.././../assets/images/doctor-3.png";
import { specialtyOptions }  from '../../../../pages/Final_Patient_Dashboard/Doctors_Directory/filterdata'

export const specialistFilters = [
    "All",
    ...Array.from(
        new Set(
            specialtyOptions.map(option => String(option.value).toUpperCase())
        )
    )
] as string[];


// It will be fetched from the backend
export const specialistsData = [
    {
        id: 1,
        name: "Dr. Mohamed Ali",
        specialization: "Cardiologist",
        rating: 4.3,
        image: doctor1,
    },
    {
        id: 2,
        name: "Dr. Sarah Ahmed",
        specialization: "General Practitioner",
        rating: 4.7,
        image: doctor2,
        showBookButton: true,
    },
    {
        id: 3,
        name: "Dr. Ahmed Hassan",
        specialization: "Pediatrics",
        rating: 4.5,
        image: doctor3,
        showBookButton: false,
    },
    {
        id: 4,
        name: "Dr. Fatma Mohamed",
        specialization: "Dermatologist",
        rating: 4.8,
        image: doctor1,
        showBookButton: false,
    },
    {
        id: 5,
        name: "Dr. Omar Khalil",
        specialization: "Dentist",
        rating: 4.6,
        image: doctor2,
        showBookButton: true,
    },
    {
        id: 6,
        name: "Dr. Nour Ibrahim",
        specialization: "Neurologist",
        rating: 4.4,
        image: doctor3,
        showBookButton: false,
    },
    {
        id: 7,
        name: "Dr. Mostafa Ahmed",
        specialization: "Orthopedic Surgeon",
        rating: 4.2,
        image: doctor1,
        showBookButton: true,
    },
];
