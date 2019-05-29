const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookStore = new Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('account', bookStore);
