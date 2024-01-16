import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>About Us</h1>
                                <p className="mb-4">
                                    At Whimsy Wood, our foundation is built on unwavering core beliefs that shape every aspect of what we do. 
                                    We believe in elevating everyday experiences, where thoughtful design meets purpose. 
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="/images/couch.png" className="img-fluid" alt="Couch" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="untree_co-section" style={{ marginBottom: '200px' }}>
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-5 mx-auto text-center">
                            <h2 className="section-title">Our Team</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_1.jpg" className="img-fluid mb-5" alt="Lawson Arnold" />
                            <h3>
                                <Link to="#">
                                    <span className="">Lawson</span> Arnold
                                </Link>
                            </h3>
                            <span className="d-block position mb-4">CEO, Founder.</span>
                            <p>
                                As the visionary leader of Whimsy Woods, Lawson Arnold
                                brings a wealth of experience and a forward-thinking approach to the helm.
                            </p>
                            <p className="mb-0">
                                <Link to="#" className="more dark">
                                    Learn More <span className="icon-arrow_forward"></span>
                                </Link>
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_2.jpg" className="img-fluid mb-5" alt="Jeremy Walker" />
                            <h3>
                                <Link to="#">
                                    <span className="">Alex</span> Thompson
                                </Link>
                            </h3>
                            <span className="d-block position mb-4">CEO, Design Head.</span>
                            <p>
                                Meet Alex Thompson, the creative force behind the exceptional designs at Whimsy Wood.
                            </p>
                            <p className="mb-0">
                                <Link to="#" className="more dark">
                                    Learn More <span className="icon-arrow_forward"></span>
                                </Link>
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_3.jpg" className="img-fluid mb-5" alt="Patrik White" />
                            <h3>
                                <Link to="#">
                                    <span className="">Patrik</span> White
                                </Link>
                            </h3>
                            <span className="d-block position mb-4">CEO, Customer Care Head.</span>
                            <p>
                                Patrick White is customer care head, ensuring that every interaction with Whimsy Wood 
                                is a positive and memorable experience. 
                            </p>
                            <p className="mb-0">
                                <Link to="#" className="more dark">
                                    Learn More <span className="icon-arrow_forward"></span>
                                </Link>
                            </p>
                        </div>

                        <div className="col-12 col-md-6 col-lg-3 mb-5 mb-md-0">
                            <img src="images/person_4.jpg" className="img-fluid mb-5" alt="Kathryn Ryan" />
                            <h3>
                                <Link to="#">
                                    <span className="">Kathryn</span> Ryan
                                </Link>
                            </h3>
                            <span className="d-block position mb-4">CEO, Operational Manager.</span>
                            <p>
                                Kathryn Ryan, plays a pivotal role in ensuring the smooth functioning of day-to-day activities at Whimsy Wood.
                            </p>
                            <p className="mb-0">
                                <Link to="#" className="more dark">
                                    Learn More <span className="icon-arrow_forward"></span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
