const Appointment = require("../models/appointmentModel");

// -------------------- CREATE APPOINTMENT --------------------
exports.createAppointment = async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body);
        res.status(201).json({ success: true, appointment });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// -------------------- GET DOCTOR APPOINTMENTS --------------------
exports.getDoctorAppointments = async (req, res) => {
    try {
        const { doctorId } = req.params;

        const appointments = await Appointment.find({ doctor: doctorId })
            .populate("patient")
            .sort({ createdAt: -1 });

        res.json({ success: true, appointments });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// -------------------- GET PATIENT APPOINTMENTS --------------------
exports.getPatientAppointments = async (req, res) => {
    try {
        const { patientId } = req.params;

        const appointments = await Appointment.find({ patient: patientId })
            .populate("doctor")
            .sort({ createdAt: -1 });

        res.json({ success: true, appointments });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// -------------------- UPDATE APPOINTMENT STATUS --------------------
exports.updateAppointmentStatus = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        const { status } = req.body;

        const updated = await Appointment.findByIdAndUpdate(
            appointmentId,
            { status },
            { new: true }
        ).populate("patient");

        // إرسال تحديث للمريض
        global.io.to(updated.patient._id.toString()).emit(
            "appointment_status_updated", 
            updated
        );

        res.json({ success: true, updated });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
