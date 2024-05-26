const {Admin,sequelize}= require('../models/adminModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
router.post('/',async (req, res) => {
    try {
      const newAdmin = new Admin(req.body);
      await sequelize.sync(); // Sync the model definition with the database, creating the table if necessary
      const createdAdmin = await Admin.create({
         photo:newAdmin.photo,
         username: newAdmin.username,
         password:newAdmin.password
      });
      res.json(createdAdmin);
      console.log(createdAdmin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports = router;
