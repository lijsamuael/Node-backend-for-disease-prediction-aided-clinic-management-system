const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {Patient}=require('../models/patientModel')
const {Admin}=require('../models/adminModel')
const {Doctor}=require('../models/doctorModel');
const { Labratoriest}=require('../models/labModel');
const { Finance } = require('../models/financeModel');
 router.post('/login', async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  try {  
   let user = await Patient.findOne({ where: { username } });
    if (!user){
      user = await Admin.findOne({ where: { username } });
    }
    if (!user){
      user = await Doctor.findOne({ where: { username } });
    }
    if (!user){
      user = await Labratoriest.findOne({ where: { username } });
    }  
    if (!user) {
      user = await Finance.findOne({ where: { username } });
    } 
    // if (!user){
    //   return res.json({ message: 'User not found' });
    // } 

    const isPasswordMatch = password.trim() === user.password.trim();
    if (isPasswordMatch) {
      const userType = user.constructor.name;
      const token = jwt.sign({ userId: user.id, userType }, 'clinic-management', { expiresIn: '1h' });
      const decodedToken = jwt.decode(token);
      console.log("..............");
      console.log(userType);
      const response = {
        message: 'Authentication successful',
        token: token,
        userType: userType,
        id: user.id,
        user:user,
        isLogIn:true,
      };

    res.json(response);
    } else {
      res.json({ message: 'Incorrect password', userType: user.constructor.name,isLogin:false });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred', errorMessage: 'Invalid username or password' });
  }
});

  router.post('/logout', (req, res) => {
    // Clear the stored JWT token on the client-side (local storage)
    // Here, we assume the JWT token is stored in a 'token' key in local storage
    localStorage.removeItem('token');
  
    // Alternatively, if using cookies, you can delete the cookie containing the JWT token
  
    res.json({ message: 'Logout successful' });
  });
module.exports=router