const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "patient" },

    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    address: { type: String, required: true },
    country: { type: String, required: true },
    nationalId: { type: String, required: true, unique: true },
    profileImage: { type: String },  

    hasChronicDisease: { type: Boolean, required: true },
    chronicDisease: { type: String },
    medicalHistory: { type: String },

    emergencyFirstName: { type: String },
    emergencyRelationship: { type: String },
    emergencyPhone: { type: String },

}, { timestamps: true });

module.exports = mongoose.model("Patient", patientSchema);