const express = require('express');
const mongoose = require('mongoose');
const router = express();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');
const {createUser,getAllUsers,login,logout} = require('../controllers/user.controller');

// Route 1 -- POST signUp create user
router.post('/auth/signup', [
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').isLength({ min: 3 })
], async (req, res, next) => {

    // errror in user creation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }else{
        next();
    }

},createUser)

// Route 2 -- login
router.post('/auth/login', [
    body('email', "enter vaild email address").isEmail(),
    body('password', "password cannot blank").exists()
  ], async (req, res, next) => {
  
    // errror in 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
 
  },login)

// Route 3 -- logout
router.post('/auth/logout', logout)

// Route4-- GET users "/"", login no required
router.get('/users', (req, res, next) => {
    next();
},getAllUsers)

// Route5-- GET getCouponCode
router.get('/users/getCouponCode', (req, res) => {
    return res.send("Your Coupon Code : StarMovie5");
})

// Route6-- GET bookShow
router.get('/users/bookShow', (req, res) => {
    return res.send("This Show is now Booked!!!");
})

module.exports = router;