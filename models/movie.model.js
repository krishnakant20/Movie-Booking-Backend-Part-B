const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'user'
    // },
    movieid: {
        type: Number,
    },
    title: {
        type: String,
        required: true
    },
    poster_url: {
        type: String,

    },
    duration:{
        type:Number,
    },
    critic_rating:{
        type:Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
    published:{
        type:Boolean,
    },
    released:{
        type:Boolean,
    },
    
});

module.exports = mongoose.model("movie", movieSchema);