const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  chest: {
    type: String,
    required: true
  },
  arms: {
    type: String,
    required: true
  },
  waist: {
    type: String,
    required: true
  },
  inseam: {
    type: String,
    required: true
  },
  // orders: [{
  //   type: Schema.Types.ObjectId,
  //   ref: "Order"
  // }],
  orders: [Order.schema],
  carts: [{
    type: Schema.Types.ObjectId,
    ref: "Cart"
  }]
});

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
