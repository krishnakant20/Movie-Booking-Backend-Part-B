const express = require('express');
const mongoose = require('mongoose');
const router = express();
const Artist = require('../models/artist.model');
const {findAllArtists} = require('../controllers/artist.controller');


// Route1-- GET artists "/"", login no required
router.get('/', async (req, res,next) => {
     next();
     
},findAllArtists)

module.exports = router;