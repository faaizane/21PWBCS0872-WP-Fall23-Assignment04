import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { CartProvider } from './components/CartContext';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Shop from './Shop';
import Cart from './Cart';
import About from './About';
import Contact from './Contact';

ReactDOM.render(
    <BrowserRouter>
        <CartProvider>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/products" element={<Shop />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            <Footer />
        </CartProvider>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
