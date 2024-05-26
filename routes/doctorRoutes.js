// patientRoutes.js
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { Doctor, sequelize } = require("../models/doctorModel");

router.get("/", async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.json(doctors);
    console.log(doctors);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new patient
router.post("/", async (req, res) => {
  try {
    const newDoctor = new Doctor(req.body);

    const createdDoctor = await Doctor.create({
      id: newDoctor.id,
      firstName: newDoctor.firstName,
      lastName: newDoctor.lastName,
      photo: newDoctor.photo,
      specialization: newDoctor.specialization,
      gender: newDoctor.gender,
      email: newDoctor.email,
      username: newDoctor.username,
      password: newDoctor.password,
      contact: newDoctor.contact,
      state: newDoctor.state,
      wereda: newDoctor.wereda,
      kebele: newDoctor.kebele,
    });
    res.json(createdDoctor);
    console.log(createdDoctor);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Update a patient by ID

// Delete a patient by ID
router.delete("/:id", async (req, res) => {
  const doctorId = req.params.id;

  try {
    const deletedDoctor = await Doctor.destroy({ where: { id: doctorId } });
    if (deletedDoctor === 0) {
      res.status(404).json({ error: "doctor not found" });
    } else {
      res.json({ message: "Doctor deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a patient by ID
router.put("/:id", async (req, res) => {
  const doctorId = req.params.id;
  const updates = req.body;

  try {
    const updatedDoctor = await Doctor.update(updates, {
      where: { id: doctorId },
    });

    if (updatedDoctor[0] === 0) {
      res.status(404).json({ error: "Doctor not found" });
    } else {
      res.json({ message: "Doctor updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const doctorId = req.params.id;

  try {
    const doctor = await Doctor.findOne({ where: { id: doctorId } });
    if (!doctor) {
      res.status(404).json({ error: "doctor not found" });
    } else {
      res.json(doctor);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
