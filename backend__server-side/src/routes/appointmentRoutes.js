const express = require("express");
const router = express.Router();
const {
    createAppointment,
    getDoctorAppointments,
    getPatientAppointments,
    updateAppointmentStatus
} = require("../controller/appointmentController");

// create new appointment
router.post("/create", createAppointment);

// doctor dashboard – all appointments
router.get("/doctor/:doctorId", getDoctorAppointments);

// patient dashboard – all appointments
router.get("/patient/:patientId", getPatientAppointments);

// doctor accept/reject appointment
router.put("/:appointmentId/status", updateAppointmentStatus);

module.exports = router;