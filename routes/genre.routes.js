const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const Genre = require("../models/genre.model")
const { Schema } = mongoose;
const router = express();
const {findAllGenres} = require('../controllers/genre.controller');


// Route1-- GET genres "/"", login no required

router.get('/', async (req, res, next) => {
     next();

},findAllGenres)
module.exports = router;