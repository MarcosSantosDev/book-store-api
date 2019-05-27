const mongoose = require('mongoose');

const { Schema } = mongoose;

const bookStore = new Schema({
  name: String,
  author: String,
  publishing_company: String,
  tags: [],
  price: Number,
});

module.exports = mongoose.model('books', bookStore);
