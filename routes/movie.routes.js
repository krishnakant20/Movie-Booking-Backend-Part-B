const express = require('express');
const mongoose = require('mongoose');
// const { body, validationResult } = require('express-validator');

const router = express();
// const fetchuser = require('../middleware/fetchuser');
// const Note = require("../models/Note")
// const { Schema } = mongoose;


// Route1-- GET movies "/"", login no required
router.get('/', (req, res) => {
     return res.send("All Movies Data in JSON format from Mongo DB");
})

module.exports = router;