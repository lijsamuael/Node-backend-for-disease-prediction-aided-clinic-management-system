const {sequelize, Labratoriest}= require('../models/labModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
router.post('/',async (req, res) =>{
    try {
      const newLab=new Labratoriest(req.body);
      await sequelize.sync(); // Sync the model definition with the database, creating the table if necessary
      const createdLabratoriest = await Labratoriest.create({
         photo:newLab.photo,
         username: newLab.username,
         password:newLab.password
      });
      res.json(createdLabratoriest);
      console.log(createdLabratoriest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports = router;
