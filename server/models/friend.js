const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

const Friend = mongoose.model('Friend', friendSchema, "friends");
module.exports = Friend;

