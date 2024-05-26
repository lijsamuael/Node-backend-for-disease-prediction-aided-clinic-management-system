const {sequelize, Finance}= require('../models/financeModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
router.post('/',async (req, res) =>{
    try {
      const newFinance=new Finance(req.body);
      await sequelize.sync(); // Sync the model definition with the database, creating the table if necessary
      const createdFinance = await Finance.create({
         photo:newFinance.photo,
         username:newFinance.username,
         password:newFinance.password
      });
      res.json(createdFinance);
      console.log(createdLabratoriest);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports = router;
