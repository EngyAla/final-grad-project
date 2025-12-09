const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
        required: true
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        required: true
    },

    selectedDateTime: {
        day: { type: String, required: true },
        start: { type: String, required: true },
        end: { type: String, required: true }
    },

    consultationType: { type: String, required: true }, // online / offline
    reasonForVisit: { type: String, required: true },
    phone: { type: String, required: true },
    paymentMethod: { type: String, required: true },

    status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending"
    }

}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
