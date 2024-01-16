import React from 'react';

const ProductSection = ({ products, addToCart }) => {
	return (
		<div className="untree_co-section product-section before-footer-section">
			<div className="container">
				<div className="row">
					{products.map(product => (
						<div key={product.id} className="col-12 col-md-6 col-lg-3 mb-4">
							<div className="product-item">
								<img
									src={product.imageUrl}
									className="img-fluid product-thumbnail"
									alt={product.name}
								/>
								<h3 className="product-title">{product.name}</h3>
								<strong className="product-price">${product.price.toFixed(2)}</strong>
								<span className="icon-cross">
									<img
										src="/images/cross.svg"
										className="img-fluid"
										alt="Cross"
										onClick={() => addToCart(product)}
									/>
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductSection;
