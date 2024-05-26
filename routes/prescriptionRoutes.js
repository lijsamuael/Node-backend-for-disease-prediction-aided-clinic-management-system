
const {Prescription,sequelize}= require('../models/prescriptionModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const prescriptions = await Prescription.findAll();
    res.json(prescriptions);
    console.log(prescriptions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/', async (req, res) => {
    try {
      const newPrescription = new Prescription(req.body);
      await sequelize.sync();
      const createdPrescription = await Prescription.create({
         id:newPrescription.id,
         patientId:newPrescription.patientId,
         doctorId:newPrescription.doctorId,
         description:newPrescription.description,
         issueDate:newPrescription.issueDate,
         confirmDate:newPrescription.confirmDate,
         status:newPrescription.status,   
      });
      res.json(createdPrescription);
      console.log(createdPrescription);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  router.delete('/:id', async (req, res) => {
    const prescId = req.params.id;
  
    try {
      const deletedPrescription = await Prescription.destroy({ where: { id: prescId} });
      if (deletedPrescription === 0) {
        res.status(404).json({ error: 'prescription not found' });
      } else {
        res.json({ message: 'Prescription deleted successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.put('/:id', async (req, res) => {
    const prescId = req.params.id;
    const updates = req.body;
  
    try {
      const updatedPrescription = await Prescription.update(updates, {
        where: { id: prescId }
      });
  
      if (updatedPrescription[0] === 0) {
        res.status(404).json({ error: 'Prescription not found' });
      } else {
        res.json({ message: 'Prescription updated successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.get('/:id', async (req, res) => {
    const prescId = req.params.id;
    try {
      const prescription = await Prescription.findOne({ where: { id: prescId } });
      if (!prescription) {
        res.status(404).json({ error: 'Prescription not found' });
      } else {
        res.json(prescription);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports = router;
