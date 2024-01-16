const express = require('express');
const Product = require('../models/productDB');
const authenticateAdmin = require ('../middleware/adminMiddleware');

const router = express.Router();

router.get('/', async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.get('/:id', async (req, res) => {
	try {
		const productId = req.params.id;

		const product = await Product.findById(productId);

		if (!product) {
			return res.status(404).json({ error: 'Product not found' });
		}

		res.json(product);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.post('/', async (req, res) => {
	const { pid, name, description, price, imageUrl } = req.body;
	try {
		const newProduct = new Product({ pid, name, description, price, imageUrl});
		await newProduct.save();
		res.status(201).json(newProduct);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.put('/:id', async (req, res) => {
	const { id } = req.params;
	const { pid, name, description, price, imageUrl } = req.body;
	try {
		const updatedProduct = await Product.findByIdAndUpdate(
			id,
			{ pid, name, description, price, imageUrl },
			{ new: true }
		);
		res.json(updatedProduct);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

router.delete('/:id', async (req, res) => {
	const { id } = req.params;
	try {
		const deletedProduct = await Product.findByIdAndDelete(id);
		res.json({ message: 'Product deleted', deletedProduct });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
});

module.exports = router;

