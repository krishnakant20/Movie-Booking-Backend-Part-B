const mongoose = require('mongoose');
const { Schema } = mongoose;

const genreSchema = new Schema({
    // user:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref:'user'
    // },
    genreid: {
        type: Number,
    },
    genre: {
        type: String,
        required: true
    }
    
});

module.exports = mongoose.model("genre", genreSchema);