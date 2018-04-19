const bcrypt = require('bcryptjs');
const mongoose = require('../connector');

const userSchema = new mongoose.Schema({
  nickname: String,
  account: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  deleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now,
    index: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    index: true
  }
});

userSchema.path('password').set(v => bcrypt.hashSync(v, 10));

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
