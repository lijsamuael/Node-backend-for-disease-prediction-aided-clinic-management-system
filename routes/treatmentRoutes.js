
const {Treatment,sequelize}= require('../models/treatmentModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
router.post('/', async (req, res) => {
    try {
      const newTreatment = new Treatment(req.body);
      await sequelize.sync();
      const createdTreatment = await Treatment.create({
         id:newTreatment.id,
         patientId:newTreatment.patientId,
         doctorId:newTreatment.doctorId,
         disease:newTreatment.disease,
         dosage:newTreatment.dosage,
         date:newTreatment.date,
         status:newTreatment.status, 
         price:newTreatment.price  
      });
      res.json(createdTreatment);
      console.log(createdTreatment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.get('/', async (req, res) => {
    try {
      const treatments = await Treatment.findAll();
      res.json(treatments);
      console.log(treatments);
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
    const treatmentId = req.params.id;
    const updates = req.body;
  
    try {
      const updatedTreatment= await Treatment.update(updates, {
        where: { id: treatmentId }
      });
  
      if (updatedTreatment[0] === 0) {
        res.status(404).json({ error: 'Treatment not found' });
      } else {
        res.json({ message: 'Treatment updated successfully' });
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
