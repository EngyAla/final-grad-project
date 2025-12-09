const express = require("express");
const dotenv = require("dotenv").config();
const dbConnect = require("./config/dbConnection")
const authRoutes = require("./routes/authRoutes")
const doctorRoutes = require("./routes/doctorRoutes");
const patientRoute = require("./routes/patientRoutes");
const doctorProfileRoutes = require("./routes/doctorProfileRoutes")
const appointmentRoutes = require("./routes/appointmentRoutes");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();

dbConnect();


app.use(cors());


// Middleware
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes)
app.use("/api/doctors", doctorRoutes); // get all doctors
app.use("/api/patient", patientRoute); // patient profile
app.use("/api/doctor", doctorProfileRoutes); // doctor profile
app.use("/api/appointments", appointmentRoutes);


const server = http.createServer(app);
const io = new Server(server, {
    cors: { origin: "*" }
});
global.io = io;
io.on("connection", (socket) => {
    console.log("User connected:", socket.id);

    // المريض ينضم لغرفة برقم ال ID بتاعه
    socket.on("join_room", (userId) => {
        socket.join(userId);
    });
});

// Start the server
const PORT = process.env.PORT || 5001;
server.listen(PORT, ()=>{
    console.log(`Srever is running at port ${PORT}`)
});

// engy55428_db_user
// h1KEu716Fx2cA8JR
// clinicAppCluster
// mongodb+srv://engy55428_db_user:<db_password>@clinicappcluster.zl7pk4l.mongodb.net/
// mongodb+srv://engy55428_db_user:h1KEu716Fx2cA8JR@clinicappcluster.zl7pk4l.mongodb.net/clinicDB

// http://localhost:5000/api/doctors/all
// http://localhost:5000/api/auth/register
// http://localhost:5000/api/auth/login