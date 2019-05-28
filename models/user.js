const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  stories: [{type: Schema.Types.ObjectId, ref:'Project'}],
  // ideas:[{title: String, description:String}],
  friends: [{type: Schema.Types.ObjectId, ref:'User'}],
  // color: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;