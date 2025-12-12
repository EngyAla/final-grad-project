const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "doctor" },

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    addressOnMap: { type: String },
    website: { type: String },
    country: { type: String, required: true },
    nationalId: { type: String, required: true, unique: true },
    profileImage: { type: String, required: true },  

    specialization: { type: String, required: true },
    yearsExperience: { type: Number, required: true },
    consultationType: { type: String, required: true },
    feePerConsultation: { type: Number, required: true },
    currency: { type: String, required: true },
    visitDuration: { type: String, required: true },
    availableTiming: [
    {
        day: { type: String, required: true },
        start: { type: String, required: true },
        end: { type: String, required: true },
    }
]

}, { timestamps: true });

module.exports = mongoose.model("Doctor", doctorSchema);