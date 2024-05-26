//sudo service apache2 stop
//sudo /opt/lampp/xampp start
// git pull origin front
//sudo lsof -i :3000
//sudo kill <PID>

const express = require("express");
const app = express();
const cors = require("cors");

const PORT = 5000;
const patientRoutes = require("./routes/patientRoutes");
const adminRoutes = require("./routes/adminRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const loginRoutes = require("./routes/loginRoute");
const testNameRoutes = require("./routes/testNameRoutes");
const prescriptionRoutes = require("./routes/prescriptionRoutes");
const labRoutes = require("./routes/labRoutes");
const imageRoutes = require("./routes/uploadImage");
const financeRoutes = require("./routes/financeRoutes");
const treatmentRoutes = require("./routes/treatmentRoutes");
app.use(express.json());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static("uploads"));
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`);
});

app.use("/patients", patientRoutes);
app.use("/authenticate", loginRoutes);
app.use("/admins", adminRoutes);
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/payments", paymentRoutes);
app.use("/testNames", testNameRoutes);
app.use("/prescriptions", prescriptionRoutes);
app.use("/labratories", labRoutes);
app.use("/upload", imageRoutes);
app.use("/finances", financeRoutes);
app.use("/treatments", treatmentRoutes);
