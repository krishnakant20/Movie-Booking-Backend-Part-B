const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const Genre = require("../models/genre.model")
const { Schema } = mongoose;
const router = express();

// get all genres
module.exports.findAllGenres = async (req, res) => {
    try {
        const genre = await Genre.find();
        res.json(genre);

   } catch (error) {
        console.error(error.message);
        res.status(500).send("internal server error occured");
   }
}