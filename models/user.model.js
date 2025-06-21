const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [2, 'Username must be at least 2 characters long'],
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: [12, 'Email must be at least 12 characters long'],
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: [5, 'Password must be at least 5 characters long'],
    },
})

const User = mongoose.model('Duser', userSchema);
module.exports = User;