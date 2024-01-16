const express = require('express');
const Cart = require('../models/cartDB');

const router = express.Router();

router.get('/:userId', async (req, res) => {
		const { userId } = req.params;
	
		try {
			const cartItems = await Cart.find({ user: userId }).populate('product');
	
			if (!cartItems) {
				return res.status(404).json({ error: 'Cart not found for the user' });
			}
	
			res.json(cartItems);
		} catch (error) {
			console.error('Error fetching cart items:', error);
			res.status(500).json({ error: 'Internal Server Error' });
		}
	});


router.put('/:userId/:productId', async (req, res) => {
	const { userId, productId } = req.params;
	const { quantity } = req.body;

	try {
		const cartItem = await Cart.findOne({ user: userId, product: productId });

		if (!cartItem) {
			return res.status(404).json({ error: 'Product not found in the user\'s cart' });
		}

		if (quantity !== undefined) {
			cartItem.quantity += quantity; 
			cartItem.quantity -= quantity;
			if (cartItem.quantity < 0) {
				cartItem.quantity = 0;
			}
		}

		await cartItem.save();
		res.json(cartItem);
	} catch (error) {
		console.error('Error updating cart item:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});


router.delete('/:userId/:productId', async (req, res) => {
	const { userId, productId } = req.params;

	try {
		const result = await Cart.deleteOne({ user: userId, product: productId });

		if (result.deletedCount === 0) {
			return res.status(404).json({ error: 'Product not found in the user\'s cart' });
		}

		res.json({ message: 'Product deleted from the cart successfully' });
	} catch (error) {
		console.error('Error deleting product from cart:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});


router.post('/:userId/:productId', async (req, res) => {
	const { userId, productId } = req.params;

	try {
		const existingCartItem = await Cart.findOne({ user: userId, product: productId });

		if (existingCartItem) {
			existingCartItem.quantity += 1;
			await existingCartItem.save();
			res.json(existingCartItem);
		} else {
			const cartItem = new Cart({
				user: userId,
				product: productId,
				quantity: 1,
			});

			await cartItem.save();
			res.json(cartItem);
		}
	} catch (error) {
		console.error('Error adding product to cart:', error);
		res.status(500).json({ error: 'Internal Server Error' });
	}
});

module.exports = router;
