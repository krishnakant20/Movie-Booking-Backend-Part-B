const express = require('express');
const mongoose = require('mongoose');

const router = express();

// Route1-- GET genres "/"", login no required
router.get('/', (req, res) => {
     return res.send("All Genres Data in JSON format from Mongo DB");
})

module.exports = router;