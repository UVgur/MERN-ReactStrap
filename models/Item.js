const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    secret: {
        type: String,
        required: false
    }
});

module.exports = Item = mongoose.model('item', ItemSchema );