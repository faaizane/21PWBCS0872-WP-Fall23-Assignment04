import p1 from '../images/person-1.png';

const TestimonialSlider = () => {
	return (
		<div className="testimonial-section">
			<div className="container">
				<div className="row">
					<div className="col-lg-7 mx-auto text-center">
						<h2 className="section-title">Testimonials</h2>
					</div>
				</div>

				<div className="row justify-content-center">
					<div className="col-lg-12">
						<div className="testimonial-slider-wrap text-center">
							<div id="testimonial-nav">
								<span className="prev" data-controls="prev">
									<span className="fa fa-chevron-left"></span>
								</span>
								<span className="next" data-controls="next">
									<span className="fa fa-chevron-right"></span>
								</span>
							</div>

							<div className="testimonial-slider" style={{ marginBottom: '50px' }}>
								<TestimonialItem />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const TestimonialItem = () => {
	return (
		<div className="item">
			<div className="row justify-content-center">
				<div className="col-lg-8 mx-auto">
					<div className="testimonial-block text-center">
						<blockquote className="mb-5">
							<p>&ldquo;I am beyond impressed with the exceptional quality of the furniture I purchased from Whimsy Wood. 
                From the robust materials to the exquisite craftsmanship, every piece reflects a commitment to excellence. 
                My home has been transformed into a haven of style and durability. Thank you for delivering furniture that 
                exceeds expectations!&rdquo;</p>
						</blockquote>

						<div className="author-info">
							<div className="author-pic">
								<img src={p1} alt="Maria Jones" className="img-fluid" />
							</div>
							<h3 className="font-weight-bold">Maria Jones</h3>
							<span className="position d-block mb-3">CEO, Co-Founder, XYZ Inc.</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialSlider;
