const mongoose = require('mongoose');

const orderDB = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	products: [
		{
			product: {
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Product',
				required: true,
			},
			quantity: {
				type: Number,
				required: true,
			},
			price: {
				type: Number,
				required: true,
			},
		},
	],
	totalPrice: {
		type: Number,
		required: true,
	},
	status: {
		type: String,
		enum: ['pending', 'processing', 'shipped', 'delivered'],
		default: 'pending',
	},
	paymentMethod: { 
		type: String,
		enum: ['cod', 'card'], 
		default: 'cod',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Order = mongoose.model('Order', orderDB);

module.exports = Order;
