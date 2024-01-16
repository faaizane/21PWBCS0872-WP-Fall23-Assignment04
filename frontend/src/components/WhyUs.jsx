import truck from '../images/truck.svg'
import bag from '../images/bag.svg'
import support from '../images/support.svg'
import returnn from '../images/return.svg'
import whyus from '../images/why-choose-us-img.jpg'

const WhyChooseUs = () => {
	return (
		<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>We stand out for our commitment to quality, style, and exceptional service. Explore a curated collection of furniture crafted for enduring elegance, experience hassle-free shopping with fast, free shipping, and rely on our 24/7 support. Choose us for a seamless blend of style, comfort, and convenience in every piece, making your home truly exceptional.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={truck} alt="Truck" className="imf-fluid" />
									</div>
									<h3>Fast & Free Shipping</h3>
									<p>Experience the convenience of fast and free shipping when you shop with us</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={bag} alt="Bag" className="imf-fluid" />
									</div>
									<h3>Easy to Shop</h3>
									<p>rowse, choose, and transform your space effortlessly. </p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={support} alt="Support" className="imf-fluid" />
									</div>
									<h3>24/7 Support</h3>
									<p>Shop with confidence knowing our dedicated 24/7 support team is here for you.</p>
								</div>
							</div>

							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={returnn} alt="Return" className="imf-fluid" />
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Your comfort and satisfaction are our top priorities, even when it comes to returns.</p>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-5">
						<div className="img-wrap">
							<img src={whyus} alt="Whyus" className="img-fluid" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
