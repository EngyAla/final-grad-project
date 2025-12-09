const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Doctor = require("../models/Doctor");
const Patient = require("../models/Patient");

exports.register = async (req, res) => {
    try {
        const { userType, email, password, nationalId  } = req.body;

        const existingUserPatient = await Patient.findOne({ email });
        const existingUserDoctor = await Doctor.findOne({ email });
        const existingNationalId = await Patient.findOne({ nationalId });

        if (existingUserPatient || existingUserDoctor)
            return res.status(400).json({ msg: "Email already exists" });

        if (existingNationalId)
            return res.status(400).json({ msg: "National ID already exists" });

        const hashedPassword = await bcrypt.hash(password, 10);
        let newUser;

        if (userType === "doctor") {
            newUser = new Doctor({ ...req.body, password: hashedPassword });
        } else {
            newUser = new Patient({ ...req.body, password: hashedPassword });
        }

        await newUser.save();
        res.json({ msg: "Registered successfully" });
    } catch (err) {
        res.status(500).json(err);
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ▼ 1) ابحث في الدكاترة
        let user = await Doctor.findOne({ email });
        let userType = "doctor";

        // ▼ 2) لو مش دكتور → ابحث في المرضى
        if (!user) {
            user = await Patient.findOne({ email });
            userType = "patient";
        }

        // ▼ 3) لو مفيش خالص
        if (!user) {
            return res.status(400).json({ msg: "User not found" });
        }

        // ▼ 4) تأكيد الباسورد
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: "Incorrect Password" });
        }

        // ▼ 5) إنشاء التوكن
        const token = jwt.sign(
            { id: user._id, email: user.email, type: userType },
            process.env.JWT_SECRET,
            { expiresIn: "30d" }
        );

        // ▼ 6) نرجّع نوع المستخدم
        res.json({
            token,
            userType,
            user,
        });

    } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Server error", error: err.message });
    }
};

