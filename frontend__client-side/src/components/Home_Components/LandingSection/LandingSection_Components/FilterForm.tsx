import CustomSelect from "../../../Form_Components/CustomSelect/CustomSelect";
import MainInput from "../../../Form_Components/MainInput/MainInput";

const locationOptions = [
    { value: "", label: "Location" },
    { value: "cairo", label: "Cairo" },
    { value: "alexandria", label: "Alexandria" },
    { value: "giza", label: "Giza" },
    { value: "shubra", label: "Shubra" },
    { value: "port-said", label: "Port Said" },
    { value: "suez", label: "Suez" },
    { value: "luxor", label: "Luxor" },
    { value: "aswan", label: "Aswan" },
    { value: "mansoura", label: "Mansoura" },
    { value: "tanta", label: "Tanta" },
    { value: "zagazig", label: "Zagazig" },
];

const specialtyOptions = [
    { value: "", label: "Specialty" },
    { value: "cardiology", label: "Cardiology" },
    { value: "dermatology", label: "Dermatology" },
    { value: "neurology", label: "Neurology" },
    { value: "orthopedics", label: "Orthopedics" },
    { value: "pediatrics", label: "Pediatrics" },
    { value: "psychiatry", label: "Psychiatry" },
    { value: "gynecology", label: "Gynecology" },
    { value: "urology", label: "Urology" },
    { value: "ophthalmology", label: "Ophthalmology" },
    { value: "ent", label: "ENT (Ear, Nose, Throat)" },
    { value: "general-surgery", label: "General Surgery" },
    { value: "plastic-surgery", label: "Plastic Surgery" },
    { value: "oncology", label: "Oncology" },
    { value: "endocrinology", label: "Endocrinology" },
];

const FilterForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <form
            className="filters d-flex flex-column flex-lg-row gap-3"
            onSubmit={handleSubmit}
        >
            <div className="row gap-0 row-gap-2 w-100">
                <div className="col-12 col-md-6 col-lg-4 px-0 pe-md-2">
                    <CustomSelect
                        options={locationOptions}
                        placeholder="Location"
                        icon="fa-location-dot"
                        name="location"
                        id="location"
                    />
                </div>

                <div className="col-12 col-md-6 col-lg-4 px-0 ps-md-2 px-lg-2">
                    <CustomSelect
                        options={specialtyOptions}
                        placeholder="Specialty"
                        icon="fa-stethoscope"
                        name="specialty"
                        id="specialty"
                    />
                </div>

                <div className="col-12 col-lg-4 px-0 ps-lg-2">
                    <MainInput
                        icon="fa-user-doctor"
                        placeholder="Doctor Name"
                        name="doctorName"
                        id="doctorName"
                        value=""
                        onChange={() => {}}
                    />
                </div>
            </div>

            <button type="submit">
                <i className="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    );
};

export default FilterForm;
