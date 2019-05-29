
const express = require('express');
const router = express.Router()
const mongoose = require('mongoose'); 

const User = require('../models/user')
const Character = require('../models/characters')
const Project = require('../models/projects')

const {
  isLoggedIn,
  isNotLoggedIn,
  validationLoggin,
} = require('../helpers/middlewares');


// POST '/projects/addProject' 

router.post('/', isLoggedIn(), (req,res)=> {
  const{title, genre, summary, isPrivate} = req.body;

  Project.create({title, genre, summary, isPrivate, author:req.session.currentUser._id})
  .then((newProject) => {
    User.findByIdAndUpdate(req.session.currentUser._id, {$push: {stories: newProject._id}},{ new: true})
      .then((project) => {
        res 
          .status(201)
          .json(project)
      })
      .catch((err) => {
        res
          .status(500)
          .json(err)
      })
  })
  .catch((err) => {
    res
      .status(500)
      .json(res)
  })
})


// GET '/projects'

router.get('/', (req,res)=>{
  Project.find().populate('author')
  .then((allProjects) => {
    res.json(allProjects)
  })
  .catch((err) => {
    res
    .status(500)
    .json(err)
  })
})



// GET '/projects/:id'

router.get('/:id', isLoggedIn(), (req,res)=>{
  const {id} = req.params;
  
  if( !mongoose.Types.ObjectId.isValid(id)){
    res
    .status(400)
    .json({message:'Invalid id'})
  }
    
  Project.findById(id)
  //       populate({
  //         path: 'opinions.user',
  //         model:'User'
  // })
  .then((foundProject) => {
    // if(foundProject.author===req.session.currentUser._id){
      res.json(foundProject)
    // }else{
    //   res.json({message:'You do not own this project'})
    // }
  })
  .catch((err) => {
    res
    .status(500)
    .json(err)
  })
})

// DELETE '/projects/:id' => to delete a specific project

router.delete('/:id', isLoggedIn(), (req,res) =>{
  const {id} = req.params;

  if( !mongoose.Types.ObjectId.isValid(id)){
    res
      .status(400)
      .json({message:'Invalid id'})
  }

  Project.findByIdAndRemove(id) 
    .then(() => {
      User.findByIdAndUpdate(req.session.currentUser._id, {$pull : {stories: id}})
      .then((res) => {
        res
          .status(202)
          .json({message: 'Project Deleted'})
      })
      .catch((err) => {
      res
        .status(500)
        .send()    })
    })   
    .catch((err) => {
     res
       .status(500)
       .json(res)
  })
 })


// PUT '/api/projects/:id'

router.put('/:id', (req,res) =>{
  const {id} = req.params;

  if( !mongoose.Types.ObjectId.isValid(id)){
    res
      .status(400)
      .json({message:'Invalid id'})
  }

  Project.findByIdAndUpdate(id, {$set: req.body}, {new:true}) // gets the objects in tasks
    .then((project) => {
      res.json(project)
    })
    .catch((err) => {
      res
        .status(500)
        .json(err)
    })
})



module.exports = router;