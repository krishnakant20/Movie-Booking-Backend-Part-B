const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    userid:{
        type: Number,
    },    
    email: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
    },
    last_name: {
        type: String,
    },
    username: {
        type: String,
    },
    contact: {
        type: Number,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
    },
    isLoggedIn: {
        type: Boolean,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;