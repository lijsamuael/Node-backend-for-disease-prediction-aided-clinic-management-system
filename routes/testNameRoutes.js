const {TestName,sequelize}= require('../models/testNameModel');
const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
router.post('/', async (req, res) => {
    try {
      const newTestName = new TestName(req.body);
      await sequelize.sync(); // Sync the model definition with the database, creating the table if necessary
      const createdTestName = await TestName.create({
         id:newTestName.id,
         prescId:newTestName.prescId,
         testName: newTestName.testName,
         value:newTestName.value
      });
      res.json(createdTestName);
      console.log(createdTestName);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.get('/', async (req, res) => {
    try {
      const testNames = await TestName.findAll();
      res.json(testNames);
      console.log(testNames);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  router.put('/:id', async (req, res) => {
    const testNameId = req.params.id;
    const updates = req.body
    try {
      const updatedTestName = await TestName.update(updates, {
        where: { id: testNameId}
      });
  
      if (updatedTestName[0] === 0) {
        res.status(404).json({ error: 'testName not found' });
      } else {
        res.json({ message: 'TestName updated successfully' });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  module.exports = router;
