const express = require('express');
const mongoose = require('mongoose');
const { body, validationResult } = require('express-validator');
const router = express();
const Movie = require("../models/movie.model")
const { Schema } = mongoose;

// Route1-- get movies list GET / , login no required
router.get('/', async (req, res) => {
     try {
          const movie = await Movie.find();
          res.json(movie);

     } catch (error) {
          console.error(error.message);
          res.status(500).send("internal server error occured");
     }

})

// Route2-- add new movies Post /addmovie, 
router.post('/addmovie', [
     body('title', 'enter valid title').isLength({ min: 3 }),
], async (req, res) => {
     try {
          const { movieid, title, poster_url, duration, critic_rating } = req.body;
          // errror in movie creation
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
               return res.status(400).json({ errors: errors.array() });
          }
          // creating new movie
          const movie = new Movie({
               movieid, title, poster_url, duration, critic_rating
          })

          const createdMovie = await movie.save();
          // res.json(createdMovie);
          res.status(200).send({
               message: "movie created succesfully",
               createdMovie: createdMovie
          });

     } catch (error) {
          console.error(error.message);
          res.status(500).send("internal server error occured");
     }
})

module.exports = router;