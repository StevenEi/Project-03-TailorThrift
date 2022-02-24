const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  tops: {
    type: Boolean,
    required: true,
    trim: true
  },
  bottoms: {
    type: Boolean,
    required: true,
    trim: true
  }
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;