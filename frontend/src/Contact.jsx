import React from 'react';

const Contact = () => {
    return (
        <>
            <div className="hero">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-5">
                            <div className="intro-excerpt">
                                <h1>Contact</h1>
                                <p className="mb-4">Thank you for reaching out to us. We value your feedback, inquiries, and suggestions. Our dedicated team is here to assist you in any way we can.</p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="hero-img-wrap">
                                <img src="images/couch.png" className="img-fluid" alt="Couch" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="untree_co-section">
                <div className="container">
                    <div className="block">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-8 pb-4">

                                <div className="row mb-5">
                                    <div className="col-lg-4">
                                        <div className="service no-shadow align-items-center link horizontal d-flex active">
                                            <div className="service-icon color-1 mb-4">
                                                <span className="fa-solid fa-location-dot"></span>
                                            </div>
                                            <div className="service-contents">
                                                <p>Uet Peshawar, Peshawar 25000</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="service no-shadow align-items-center link horizontal d-flex active">
                                            <div className="service-icon color-1 mb-4">
                                                <span className="fa-solid fa-location-dot"></span>
                                            </div>
                                            <div className="service-contents">
                                                <p>uetpeshawar@edu.pk</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-4">
                                        <div className="service no-shadow align-items-center link horizontal d-flex active">
                                            <div className="service-icon color-1 mb-4">
                                                <span className="fa-solid fa-phone"></span>
                                            </div>
                                            <div className="service-contents">
                                                <p>+92 300xxxxxx</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <form>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="fname">
                                                    First name
                                                </label>
                                                <input type="text" className="form-control" id="fname" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="form-group">
                                                <label className="text-black" htmlFor="lname">
                                                    Last name
                                                </label>
                                                <input type="text" className="form-control" id="lname" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="text-black" htmlFor="email">
                                            Email address
                                        </label>
                                        <input type="email" className="form-control" id="email" />
                                    </div>
                                    <div className="form-group mb-5">
                                        <label className="text-black" htmlFor="message">
                                            Message
                                        </label>
                                        <textarea
                                            name=""
                                            className="form-control"
                                            id="message"
                                            cols="30"
                                            rows="5"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary-hover-outline">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
