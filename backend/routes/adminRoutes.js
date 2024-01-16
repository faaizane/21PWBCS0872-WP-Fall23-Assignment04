const express = require('express');
const bcrypt = require('bcrypt');
const { body, validationResult } = require('express-validator');
const Admin = require('../models/adminDB.js');
const jwt = require('jsonwebtoken');
const adminAuthMiddleware = require('../middleware/adminMiddleware.js');
const router = express.Router();

router.post('/signup', [
	body('email').isLength({ min: 5 }).withMessage('email should be at least 5 characters long'),
	body('password').isLength({ min: 5 }).withMessage('Password should be at least 5 characters long')
], async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	const { email, password } = req.body;

	try {
		const existingAdmin = await Admin.findOne({ email });
		if (existingAdmin) {
			return res.status(400).json({ message: 'Admin already exists' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const newAdmin = new Admin({ email, password: hashedPassword });
		await newAdmin.save();
		res.status(201).json({ message: 'Admin registered successfully' });
	} catch (error) {
		res.status(500).json({ message: 'Error registering admin' });
	}
});

router.post('/signin', async (req, res) => {
	const { email, password } = req.body;

	try {
		const admin = await Admin.findOne({ email });
		if (!admin) {
			return res.status(404).json({ message: 'Admin not found' });
		}

		const validPassword = await bcrypt.compare(password, admin.password);
		if (!validPassword) {
			return res.status(401).json({ message: 'Invalid password' });
		}

		const token = jwt.sign({ admin }, 'your_secret_key'); 

				res.status(200).json({ message: 'Admin Sign-in successful', token }); 
		
	} catch (error) {
		res.status(500).json({ message: 'Error signing in' });
	}
});
router.get('/dashboard', adminAuthMiddleware.authenticateAdmin, async (req, res) => {
	res.send('Admin dashboard');
});

module.exports = router;