
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

router.post('/addProject', isLoggedIn(), (req,res)=> {
  const{title, genre, summary} = req.body;

  Project.create({title, genre, summary, author:req.session.currentUser._id})
  .then((newProject) => {
    User.findByIdAndUpdate(req.session.currentUser._id, {$push: {stories: newProject._id}})
      .then((res) => {
        res 
          .status(201)
          .json(res)
      })
      .catch((err) => {
        res
          .status(500)
          .json(res)
      })
  })
  .catch((err) => {
    res
      .status(500)
      .json(res)
  })
})


// GET '/projects'=> to get all the projects

router.get('/', (req,res)=>{
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

router.get('/:id', isLoggedIn(), (req,res)=>{
  const {id} = req.params;
  
  if( !mongoose.Types.ObjectId.isValid(id)){
    res
    .status(400)
    .json({message:'Invalid id'})
  }
  
  Project.findById(id) // gets the objects in tasks
  .then((foundProject) => {
    if(foundProject.author===req.session.currentUser._id){
      res.json(foundProject)
    }
  })
  .catch((err) => {
    res
    .status(500)
    .json(err)
  })
})

// DELETE '/api/projects/:id' => to delete a specific project

router.delete('/:id', (req,res) =>{
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

// -----------------------------vvv TO CHANGE vvv-----------------------------------------

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




module.exports = router;