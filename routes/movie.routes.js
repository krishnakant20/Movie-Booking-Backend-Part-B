const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const router = express();
const Movie = require("../models/movie.model")
const { Schema } = mongoose;
const {findAllMovies, addMovie,findOneMovies} = require('../controllers/movie.controller');


// Route1-- get movies list GET / , login no required
router.get('/', async (req, res,next) => {
     next();

},findAllMovies)


// Route2-- add new movies Post /addmovie, 
router.post('/addmovie', [
     body('title', 'enter valid title').isLength({ min: 3 }),
], async (req, res,next) => {
     next();
},addMovie)

// Route3-- get movies by id GET /:id , login no required
router.get('/:id', async (req, res,next) => {
     next();

},findOneMovies)

module.exports = router;