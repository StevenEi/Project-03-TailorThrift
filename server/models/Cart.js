const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
    item: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    quantity: {
        type: Number,
        required: true,
        trim: true
    },
    createdAt: {
        type: Date, 
        default: Date.now,
    },
    size: {
        type: String,
    }

});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;