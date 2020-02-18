
const router = require('express').Router();
let Exercise = require('../models/exercise.model');

// C(R)UD -- get route/endpoint  
router.route('/').get((req, res)=> {
    Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});


// (C)RUD -- post route/endpoint  
router.route('/add').post((req, res) => {
    //get excercise info from 
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);


    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });


    //save new exercise to MongoDB database
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err))
});

//return information for specific user/id
router.route('/:id').get((req,res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

// CRU(D) -- delete route/endpoint  
router.route('/:id').delete((req,res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err))
})

// CR(U)D -- update route/endpoint 
router.route('/update/:id').post((req,res) => {
    Exercise.findById(req.params.id)
        .then(exercise => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated!'))
                .catch(err => res.status(400).json('Error: ' + err))
            
        })
        .catch(err => res.status(400).json('Error: ' + err))
})
module.exports = router;


