import { Link } from 'react-router-dom';

const ProductItem = ({ imageUrl, title, price }) => (
	<div className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
		<div className="product-item">
			<img src={imageUrl} className="img-fluid product-thumbnail" alt={title} />
			<h3 className="product-title">{title}</h3>
			<strong className="product-price">{`$${price}`}</strong>

			<span className="icon-cross">
				<Link to="/products">
					<img src="/images/cross.svg" className="img-fluid" alt="Cross" />
				</Link>
			</span>
		</div>
	</div>
);

const ProductSection = () => (
	<div className="product-section">
		<div className="container">
			<div className="row">
				<div className="col-md-12 col-lg-3 mb-5 mb-lg-0">
					<h2 className="mb-4 section-title">Crafted with excellent material.</h2>
					<p className="mb-4">
						Indulge in luxury with our furniture, meticulously crafted with excellence in mind. Each
						piece boasts superior materials, ensuring enduring quality and style.
					</p>
					<p>
						<Link to="/products" className="btn">
							Explore
						</Link>
					</p>
				</div>

				<ProductItem imageUrl="/images/product-1.png" title="Nordic Chair" price="50.00" />
				<ProductItem imageUrl="/images/product-2.png" title="Kruzo Aero Chair" price="78.00" />
				<ProductItem imageUrl="/images/product-3.png" title="Ergonomic Chair" price="43.00" />
			</div>
		</div>
	</div>
);

export default ProductSection;
