const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
    trim: true
  },
  categoryId: {
    type: Number
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;