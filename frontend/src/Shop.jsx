import React, { useState, useEffect } from 'react';
import ProductSection from './components/Products.jsx';
import { useCart } from './components/CartContext.js'; 

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();  

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://assignment-3-wp-coral.vercel.app/products'); // Update the URL accordingly
                const data = await response.json();

                console.log('Fetched products successfully:', data);
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error fetching products. Please try again later.</div>;
    }

    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Shop</h1>
                            </div>
                        </div>
                        <div className="col-lg-7">
                        </div>
                    </div>
                </div>
            </div>

            <ProductSection products={products} addToCart={addToCart} />
        </>
    );
};

export default Shop;
