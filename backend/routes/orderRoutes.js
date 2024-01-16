const express = require('express');
const Order = require('../models/orderDB');
const Cart = require('../models/cartDB');

const router = express.Router();

router.post('/checkout/:userId', async (req, res) => {
		const { userId } = req.params;
		const { paymentMethod } = req.body;
	
		try {
			const cartItems = await Cart.find({ user: userId }).populate('product');
	
			if (!cartItems || cartItems.length === 0) {
				return res.status(404).json({ error: 'Cart is empty' });
			}
	
			const orderProducts = cartItems.map(item => ({
				product: item.product,
				quantity: item.quantity,
				price: item.product.price,
			}));
	
			const totalPrice = orderProducts.reduce((total, item) => {
				return total + item.price * item.quantity;
			}, 0);
	
			const selectedPaymentMethod = paymentMethod || 'cod';
	
			const order = new Order({
				user: userId,
				products: orderProducts,
				totalPrice,
				paymentMethod: selectedPaymentMethod,
			});
	
			await order.save();
	
			await Cart.updateMany({ user: userId }, { $set: { order: order._id } });
	
			res.json({
				order: { ...order.toObject(), paymentMethod: selectedPaymentMethod },
			});
		} catch (error) {
			console.error('Error during checkout:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	});


router.get('/history/:userId', async (req, res) => {
		const { userId } = req.params;
	
		try {
			const orderHistory = await Order.find({ user: userId });
	
			res.json(orderHistory);
		} catch (error) {
			console.error('Error fetching order history:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	});

module.exports = router;
