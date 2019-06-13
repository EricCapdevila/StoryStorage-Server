const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
  title: String,
  genre:{type: String, enum: ['Historical', 'Crime', 'Science Fiction','Fantasy', 'Romance', 'Horror', 'Other']},
  summary: String,
  chapters:[{title:String, plot:String, number:Number}],
  characters:[{type: Schema.Types.ObjectId, ref: 'Character'}],
  locations:[String],
  timeline:[String],
  misc:[{title: String, description:String}],
  author: {type: Schema.Types.ObjectId, ref:'User'},
  opinions:[{user:String, rating: Number, comment: String }],
  file: String,
  isPrivate: {type:Boolean, default:false},
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;