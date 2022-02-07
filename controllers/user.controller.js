const express = require('express');
const mongoose = require('mongoose');
const router = express();
const User = require('../models/user.model');
const { body, validationResult } = require('express-validator');
const { model } = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// jwt token secret passed as argument in auth token
const JWT_SECRET = 'pawar$5';

// create users signUp
module.exports.createUser = async (req, res) => {
    // check weather email exist already
    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).json({ error: "email already exists" });
        }

        // generate hash of password and store it in user db
        var salt = await bcrypt.genSaltSync(10);
        secPass = await bcrypt.hash(req.body.password, salt);

        // create users in db
        user = await User.create({
            userid: req.body.userid,
            email: req.body.email,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            username: req.body.username,
            contact: req.body.contact,
            password: secPass,
            role: req.body.role,
            // isLoggedIn: true,
        })

        // creating jwt token; payload
        const dataToken = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(dataToken, JWT_SECRET);

        res.status(200).send({
            message: "user created successfully",
            user: user,
            authToken: authToken
        });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}

// login user
module.exports.login = async (req, res) => {

    // destructuring req.body
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "please enter correct credentials" });
        }

        // comparing frontend entered passward with db stored hash password
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: "please enter correct credentials" });

        }
        // creating jwt token; payload
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken);
        res.status(200).send({
            message: "LoggedIn successfully",
            user: user,
            authToken: authToken
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}

// get all users
module.exports.getAllUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
    }
}