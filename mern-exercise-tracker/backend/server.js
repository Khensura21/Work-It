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

//Start the server
app.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});

