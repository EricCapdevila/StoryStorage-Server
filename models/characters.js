const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const characterSchema = new Schema({
  project: {type: Schema.Types.ObjectId, ref:'Project'},
  name: String,
  bio: String,
  drives:[String],
  relationships:[{character: String, description: String}],
  timeline:[String],
  misc:[{title: String, description:String}],
});

const Character = mongoose.model('Character', characterSchema);

module.exports = Character;