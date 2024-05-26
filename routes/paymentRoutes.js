const express = require('express');
const router = express.Router();
const  {Chapa} =require('chapa-nodejs');

const chapa = new Chapa({
  secretKey: 'CHASECK_TEST-MMCKF7Qh7mWuwXOmROthbC7Kko2bVIvz',
});

const tx_ref = chapa.generateTransactionReference({
  prefix: 'TX', // defaults to `TX`
  size: 20, // defaults to `15`
});
const SplitType = {
    PERCENTAGE: 'percentage',
    FLAT: 'flat'
  };
  
  const subaccount = {
    id: 'some-id',
    split_type: SplitType.PERCENTAGE,
    transaction_charge: 10
  };
  
router.get('/', async (req, res) => {
    try {
        const response = await chapa.getBanks();
         
        console.log(response)
        res.json(response)  
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
// Create a new patient
router.post('/', async (req, res) => {
    try {
     
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports=router