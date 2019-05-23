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



router.post('/add', isLoggedIn(), (req,res)=> {
  // const {project} = req.params;
  const{name, bio, project} = req.body;

   if( !mongoose.Types.ObjectId.isValid(project)){
     res
     .status(400)
     .json({message:'Invalid id'})
   }

  Character.create({project, name, bio})
  .then((newChar) => {
    Project.findByIdAndUpdate(project, {$push: {characters: newChar._id}}, { new: true})
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
      .json(err)
  })
})


router.get('/', isLoggedIn(), (req,res)=>{
  const {project} = req.body;
  Character.find({project: project})//
  .then((allCharacters) => {
    res.json(allCharacters)
  })
  .catch((err) => {
    res
    .status(500)
    .json(err)
  })
})


router.delete('/:id', isLoggedIn(), (req,res) =>{
  const {id} = req.params;
  const {project} = req.body;
  
  if( !mongoose.Types.ObjectId.isValid(id)){
    res
    .status(400)
    .json({message:'Invalid id'})
  }
  
  Character.findByIdAndRemove(id) 
  .then(() => {
    Project.findByIdAndUpdate(project, {$pull : {characters: id}})
    .then((res) => {
      res
      .status(202)
      .json({message: 'Character Deleted'})
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
  

router.put('/:id', isLoggedIn(), (req,res) =>{
  const {id} = req.params;

  if( !mongoose.Types.ObjectId.isValid(id)){
    res
      .status(400)
      .json({message:'Invalid id'})
  }

  Character.findByIdAndUpdate(id, req.body) 
    .then(() => {
      res.json({message: 'Character Updated'})
    })
    .catch((err) => {
      res
        .status(500)
        .json(err)
    })
})




module.exports = router;