const express = require('express');
const mongoose = require('mongoose');
const router = express();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');

// Route1-- GET users "/"", login no required
router.get('/', (req, res) => {
    return res.send("users from Mongo DB");
})

// Route2-- create user using post /createuser , no login required
router.post('/createuser', [
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').isLength({ min: 3 })
], async (req, res) => {

    // errror in user creation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // check weather email exist already
    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "email already exists" });
        }

        // create users in db
        user = await User.create({
            userid: req.body.userid,
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            contact: req.body.contact,
            password: req.body.password,
            role: req.body.role,
            // isLoggedIn: true,
        })

        res.status(200).send({
            message:"user created succesfully",
            user:user
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }

})

module.exports = router;