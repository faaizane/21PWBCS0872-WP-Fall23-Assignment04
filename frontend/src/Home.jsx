import './App.css';
import ProductsHome from './components/Products-Home';
import WhyUS from './components/WhyUs';
import TestimonialSlider from './components/Testimonial';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>
                                    Elevate Your <span className="d-block">Space</span>
                                </h1>
                                <p className="mb-4">
                                    Welcome to Whimsy Wood—where timeless elegance meets modern comfort.
                                    Discover sleek contemporary designs and classic pieces that stand the test of time.
                                </p>
                                <p>
                                    <Link to="/products" className="btn btn-secondary me-2">
                                        Shop Now
                                    </Link>
                                    <Link to="/about" className="btn btn-white-outline">
                                        About US
                                    </Link>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="/images/couch.png" alt="Couch" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ProductsHome />
            <WhyUS />
            <TestimonialSlider />
        </>
    );
};

export default Home;
