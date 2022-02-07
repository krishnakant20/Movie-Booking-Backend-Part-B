const express = require('express');
const mongoose = require('mongoose');
const router = express();
const Artist = require('../models/artist.model');

module.exports.findAllArtists = async (req,res)=>{
    const artist = await Artist.find();
     res.json(artist);
}