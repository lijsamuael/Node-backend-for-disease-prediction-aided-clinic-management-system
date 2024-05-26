// patientRoutes.js
const express = require('express');
const router = express.Router();
// const bcrypt = require('bcryptjs');
const {Appointment,sequelize}= require('../models/apointmentModel');
router.get('/', async (req, res) => {
    try {
      const appointments= await Appointment.findAll();
      res.json(appointments);
      console.log(appointments);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// Create a new patient
router.post('/', async (req, res) => {
    try {
      const newAppointment = new Appointment(req.body);
      await sequelize.sync(); // Sync the model definition with the database, creating the table if necessary
      const createdAppointment = await Appointment.create({
      id:newAppointment.id,
      doctorId:newAppointment.doctorId,
      patientId:newAppointment.patientId,
      appointmentFee:newAppointment.appointmentFee,
      location:newAppointment.location,
      date:newAppointment.date,
      time:newAppointment.time,
      });
  
      res.json(createdAppointment);
      console.log(createdAppointment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// Update a patient by ID
// Delete a patient by ID
router.delete('/:id', async (req, res) => {
    const appointmentId = req.params.id;
  
    try {
      const deletedAppointment = await Appointment.destroy({ where: { id: appointmentId } });
      if (deletedAppointment === 0) {
        res.status(404).json({ error: 'Appointment not found' });
      } else {
        res.json({ message: 'Appointment deleted successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  // Update a patient by ID
  router.put('/:id', async (req, res) => {
    const appointmentId = req.params.id;
    const updates = req.body;
  
    try {
      const updatedAppointment = await Appointment.update(updates, {
        where: { id: appointmentId }
      });
  
      if (updatedAppointment[0] === 0) {
        res.status(404).json({ error: 'Appointment not found' });
      } else {
        res.json({ message:'Appointment updated successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  router.get('/:id', async (req, res) => {
    const appointmentId = req.params.id;
    try {
      const appointment = await Appointment.findOne({ where: {id: appointmentId } });
      if (!appointment) {
        res.status(404).json({ error: 'Appointment not found' });
      } else {
        res.json(appointment);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
module.exports = router;
