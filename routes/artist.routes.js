const express = require('express');
const mongoose = require('mongoose');
const router = express();
const Artist = require('../models/artist.model');


// Route1-- GET artists "/"", login no required
router.get('/', async (req, res) => {

     const artist = await Artist.find();
     res.status(200).json(artist);
})

module.exports = router;