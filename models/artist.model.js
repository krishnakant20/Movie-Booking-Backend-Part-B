const mongoose = require('mongoose');
const { Schema } = mongoose;

const artistSchema = new Schema({
    artistid:{
        type: Number,
    },    
    // email: {
    //     type: String,
    //     required: true,
    //     unique: true
    // },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
    },
    
    wiki_url: {
        type: String,
    },
    
    profile_url: {
        type: String,
    },
   
    
});

const Artist = mongoose.model("artist", artistSchema);
module.exports = Artist;