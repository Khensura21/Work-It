//create instances of express and CORS
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//this
require('dotenv').config()

//create server app
const app = express();
//what is this line saying
const port = process.env.PORT || 5000;

//Middleware 
app.use(cors());
app.use(express.json());

//mongoDB database set up
const uri  = process.env.ATLAS_URI;
//look this up?
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true}) 
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB DB est. successfully")
})

//tells the app to use the files in route folder
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);

//Start the server
app.listen(port, () => { 
    console.log(`Server is running on port: ${port}`);
});

