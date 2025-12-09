const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");

// middleware للتحقق من الـ token
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1]; // Bearer token
    if (!token) return res.status(401).json({ msg: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ msg: "Invalid token" });
    }
};

// GET doctor profile
router.get("/profile", authMiddleware, async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.user.id).select("-password");
        if (!doctor) return res.status(404).json({ msg: "Doctor not found" });
        res.json(doctor);
    } catch (err) {
        res.status(500).json({ msg: "Server error", error: err.message });
    }
});

module.exports = router;