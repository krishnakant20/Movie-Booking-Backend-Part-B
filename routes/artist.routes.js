const express = require('express');
const mongoose = require('mongoose');

const router = express();

// Route1-- GET artists "/"", login no required
router.get('/', (req, res) => {
     return res.send("All Artists Data in JSON format from Mongo DB");
})

module.exports = router;