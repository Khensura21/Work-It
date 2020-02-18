
const mongoose = require('mongoose');
//create new schema
const Schema = mongoose.Schema;
//user schema with one field
const userSchema = new Schema({
    username: { 
        type: String,
        required: true,
        unique: true,
        trim: true, //this means if someone types in some white spaces, it'll be trimmed off
        minlength: 3 // this means has to be at three characters long
    },
}, {
    timestamps: true, //this means it automatically let you know when it was created and modified
})

//create a model from the user schema def to use it
const User = mongoose.model('User', userSchema);

module.exports = User;