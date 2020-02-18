const mongoose = require('mongoose');
//create new schema
const Schema = mongoose.Schema;

//excercise schema with 4 fields
const exerciseSchema = new Schema({
    username: { type: String, required: true },
    description: {type: String, required: true },
    duration: {type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true, //this means it automatically let you know when it was created and modified
})

//create a model from the excercise schema definition
const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;