const mongoose = require("mongoose");
const Product = require("./productDB");
const Order = require("./orderDB");

const cartSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
	quantity: { type: Number, default: 1 },
	order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
