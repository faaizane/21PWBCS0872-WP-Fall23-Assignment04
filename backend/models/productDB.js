const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    pid: {
        type: Number
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        maxlength: 255,
    },
    price: {
        type: Number,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
