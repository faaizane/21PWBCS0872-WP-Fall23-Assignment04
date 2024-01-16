const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes.js');
const adminRoutes = require('./routes/adminRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const cartRoutes = require('./routes/cartRoutes.js');
const orderRoutes = require('./routes/orderRoutes.js');
const cors = require('cors');


const authenticateAdmin = require ('./middleware/adminMiddleware.js');
const Cart = require('./models/cartDB.js');


const app = express();
app.use(express.json());
app.use(cors());

const uri = 'mongodb://127.0.0.1:27017/WhimsyWood'; 

mongoose.connect(uri);

const db = mongoose.connection;

db.on('error', (err) => {
	console.error('Database connection error:', err);
});

db.once('open', () => {
	console.log('Database connected successfully');

	app.use('/', userRoutes); 
	app.use('/admin', adminRoutes); 
	app.use('/products', productRoutes); 
	app.use('/cart', cartRoutes);
	app.use('/', orderRoutes); 


	app.get('/', (req, res) => {
		res.send('Welcome to Whimsy Wood Backend Server! Please use the appropriate routes');
	});
	
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});