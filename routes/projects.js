
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose'); // we sue require in the backend, import in the front

const User = require('../models/user')
const Characters = require('../models/characters')
const Project = require('../models/projects')

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');


// POST '/projects' => to post a new projects

router.post('/', isLoggedIn(), (req,res)=> {
  const{title, genre, summary} = req.body;
  Project.create({title, genre, summary, author:req.session.currentUser})
    .then((res)=>{
      res
        .status(201) 
        .json(res) //same as res.send(JSON.stringify(res)), because send is all in 1s and 0s.
    })
    .catch((err)=> {
      res
        .status(500)//internal server error
        .json(err)// this should just be send(), if not we are giving too much info, but for us to see now its ok
    })
})

// -----------------------------vvv TO CHANGE vvv-----------------------------------------

// GET '/projects'=> to get all the projects

router.get('/projects', (req,res)=>{
  Project.find()//.populate('characters') // gets the objects in tasks
    .then((allProjects) => {
      res.json(allProjects)
    })
    .catch((err) => {
      res
        .status(500)
        .json(err)
    })
})



// GET '/api/projects/:id'=> to get a specific projects

router.get('/projects/:id', (req,res)=>{
  const {id} = req.params;

  if( !mongoose.Types.ObjectId.isValid(id)){
    res
      .status(400)
      .json({message:'Invalid id'})
  }

  Project.findById(id).populate('tasks') // gets the objects in tasks
    .then((foundProject) => {
      res.json(foundProject)
    })
    .catch((err) => {
      res
        .status(500)
        .json(err)
    })
})

// PUT '/api/projects/:id'=> to update a specific project

router.put('/projects/:id', (req,res) =>{
  const {id} = req.params;

  if( !mongoose.Types.ObjectId.isValid(id)){
    res
      .status(400)
      .json({message:'Invalid id'})
  }

  Project.findByIdAndUpdate(id, req.body) // gets the objects in tasks
    .then(() => {
      res.json({message: 'Project Updated'})
    })
    .catch((err) => {
      res
        .status(500)
        .json(err)
    })
})


// DELETE '/api/projects/:id' => to delete a specific project

router.delete('/projects/:id', (req,res) =>{
  const {id} = req.params;

  if( !mongoose.Types.ObjectId.isValid(id)){
    res
      .status(400)
      .json({message:'Invalid id'})
  }

  Project.findByIdAndRemove(id) // gets the objects in tasks
    .then(() => {
      res
        .status(202)
        .json({message: 'Project Deleted'})
    })
    .catch((err) => {
      res
        .status(500)
        .send()    })
})

module.exports = router;