// patientRoutes.js
const express = require("express");
const router = express.Router();

const { Emergency, sequelize } = require("../models/emergencyModel");

router.get("/", async (req, res) => {
  try {
    const emergencies = await Emergency.findAll();
    res.json(emergencies);
    console.log(emergencies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Create a new patient
router.post("/", async (req, res) => {
  try {
    console.log("data to be inserted.............................", req.body);
    const newEmergency = req.body;
    console.log(
      "data to be inserteddddddddd.............................",
      newEmergency
    );

    await sequelize.sync(); // Sync the model definition with the database, creating the table if necessary
    const createdEmergency = await Emergency.create({
      //   id: newEmergency.id,
      patientFirstName: newEmergency.firstName,
      patientLastName: newEmergency.lastName,
      gender: newEmergency.gender,
      age: newEmergency.age,
      phone: newEmergency.phone,
      //   EmergencyFee: newEmergency.EmergencyFee,
      location: newEmergency.location,
      description: newEmergency.description,
    });

    res.json(createdEmergency);
    console.log(createdEmergency);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// Update a patient by ID
// Delete a patient by ID
router.delete("/:id", async (req, res) => {
  const EmergencyId = req.params.id;

  try {
    const deletedEmergency = await Emergency.destroy({
      where: { id: EmergencyId },
    });
    if (deletedEmergency === 0) {
      res.status(404).json({ error: "Emergency not found" });
    } else {
      res.json({ message: "Emergency deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a patient by ID
router.put("/:id", async (req, res) => {
  const EmergencyId = req.params.id;
  const updates = req.body;

  try {
    const updatedEmergency = await Emergency.update(updates, {
      where: { id: EmergencyId },
    });

    if (updatedEmergency[0] === 0) {
      res.status(404).json({ error: "Emergency not found" });
    } else {
      res.json({ message: "Emergency updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/:id", async (req, res) => {
  const EmergencyId = req.params.id;
  try {
    const Emergency = await Emergency.findOne({ where: { id: EmergencyId } });
    if (!Emergency) {
      res.status(404).json({ error: "Emergency not found" });
    } else {
      res.json(Emergency);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
module.exports = router;
