//create a route via express
const router = require('express').Router();
//mongoose model created from user schema
let User = require('../models/user.model');

// C(R)UD -- get route/endpoint  
router.route('/').get((req, res)=> {
    User.find() //mongoose method that interacts w/ MongoDB, it returns a promise
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});


// (C)RUD -- post route/endpoint  
router.route('/add').post((req, res)=> {
    const username = req.body.username;

    const newUser = new User({username});


    //save new user to MongoDB database
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

module.exports = router;



