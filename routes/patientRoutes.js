// patientRoutes.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const {Patient,sequelize}= require('../models/patientModel');

router.get('/', async (req, res) => {
    try {
      const patients = await Patient.findAll();
      res.json(patients);
      console.log(patients);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// Create a new patient
router.post('/', async (req, res) => {
    try {
      const newPatient = new Patient(req.body);
      await sequelize.sync(); // Sync the model definition with the database, creating the table if necessary
      const createdPatient = await Patient.create({
        id:newPatient.id,
        firstName: newPatient.firstName,
        lastName: newPatient.lastName,
        age: newPatient.age,
        description: newPatient.description,
        photo: newPatient.photo,
        gender: newPatient.gender,
        password: newPatient.password,
        contact: newPatient.contact,
        username: newPatient.username,
        email: newPatient.email,
        date: newPatient.date,
        state: newPatient.state,
        wereda: newPatient.wereda,
        kebele: newPatient.kebele,
        cardNumber: newPatient.cardNumber,
        isNew:newPatient.isNew,
        fee:newPatient.fee
      });
      res.json(createdPatient);
      console.log(createdPatient);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// Update a patient by ID




// Delete a patient by ID
router.delete('/:id', async (req, res) => {
    const patientId = req.params.id;
  
    try {
      const deletedPatient = await Patient.destroy({ where: { id: patientId } });
      if (deletedPatient === 0) {
        res.status(404).json({ error: 'Patient not found' });
      } else {
        res.json({ message: 'Patient deleted successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update a patient by ID
   router.put('/:id', async (req, res) => {
    const patientId = req.params.id;
    const updates = req.body;
  
    try {
      const updatedPatient = await Patient.update(updates, {
        where: { id: patientId }
      });
  
      if (updatedPatient[0] === 0) {
        res.status(404).json({ error: 'Patient not found' });
      } else {
        res.json({ message: 'Patient updated successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.get('/:id', async (req, res) => {
    const patientId = req.params.id;
    try {
      const patient = await Patient.findOne({ where: { id: patientId } });
      if (!patient) {
        res.status(404).json({ error: 'Patient not found' });
      } else {
        res.json(patient);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

module.exports = router;
