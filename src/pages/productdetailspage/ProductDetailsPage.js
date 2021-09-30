import React from 'react';
import SubHeader from '../../components/sub_header/SubHeader';
const ProductDetailsPage = (props) => {
	console.log(props)
    return(
        <div className="page-wrapper">
			<div className="page-content">

                <SubHeader name="Product Details"/>
                <section className="py-4">
					<div className="container">
						<div className="product-detail-card">
							<div className="product-detail-body">
								<div className="row g-0">
									<div className="col-12 col-lg-5">
										<div className="image-zoom-section">
											<div className="product-gallery owl-carousel owl-theme border mb-3 p-3" data-slider-id="1">
												<div className="item">
													<img src="" className="img-fluid" alt=""/>
												</div>
												<div className="item">
													<img src="assets/images/product-gallery/02.png" className="img-fluid" alt=""/>
												</div>
												<div className="item">
													<img src="assets/images/product-gallery/03.png" className="img-fluid" alt=""/>
												</div>
												<div className="item">
													<img src="assets/images/product-gallery/04.png" className="img-fluid" alt=""/>
												</div>
											</div>
											<div className="owl-thumbs d-flex justify-content-center" data-slider-id="1">
												<button className="owl-thumb-item">
													<img src="assets/images/product-gallery/01.png" className="" alt=""/>
												</button>
												<button className="owl-thumb-item">
													<img src="assets/images/product-gallery/02.png" className="" alt=""/>
												</button>
												<button className="owl-thumb-item">
													<img src="assets/images/product-gallery/03.png" className="" alt=""/>
												</button>
												<button className="owl-thumb-item">
													<img src="assets/images/product-gallery/04.png" className="" alt=""/>
												</button>
											</div>
										</div>
									</div>
									<div className="col-12 col-lg-7">
										<div className="product-info-section p-3">
											<h3 className="mt-3 mt-lg-0 mb-0"></h3>
											<div className="product-rating d-flex align-items-center mt-2">
												<div className="rates cursor-pointer font-13">	<i className="bx bxs-star text-warning"></i>
													<i className="bx bxs-star text-warning"></i>
													<i className="bx bxs-star text-warning"></i>
													<i className="bx bxs-star text-warning"></i>
													<i className="bx bxs-star text-light-4"></i>
												</div>
												<div>
												</div>
												
											</div>
											<div className="d-flex align-items-center mt-3 gap-2">
												<h5 className="mb-0 text-decoration-line-through text-light-3">₦</h5>
												<h4 className="mb-0">₦</h4>
											</div>
											<div className="mt-3">
												<h6>Description :</h6>
												<p className="mb-0"></p>
											</div>
											
											<div className="row row-cols-auto align-items-center mt-3">
												<div className="col">
													<label className="form-label">Quantity</label>
													<select className="form-select form-select-sm">
														<option>1</option>
														<option>2</option>
														<option>3</option>
														<option>4</option>
														<option>5</option>
													</select>
												</div>
												
											</div>
											<div className="d-flex gap-2 mt-3">
												<a href="javascript:;" className="btn btn-white btn-ecomm bg-dark text-light">	<i className="bx bxs-cart-add"></i>Add to Cart</a> 
											</div>
											<hr/>
											<div className="product-sharing">
												<ul className="list-inline">
													<li className="list-inline-item"> <a href="javascript:;"><i class='bx bxl-facebook'></i></a>
													</li>
													<li className="list-inline-item">	<a href="javascript:;"><i class='bx bxl-linkedin'></i></a>
													</li>
													<li className="list-inline-item">	<a href="javascript:;"><i class='bx bxl-twitter'></i></a>
													</li>
													<li className="list-inline-item">	<a href="javascript:;"><i class='bx bxl-instagram'></i></a>
													</li>
													<li className="list-inline-item">	<a href="javascript:;"><i class='bx bxl-google'></i></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
            </div>
        </div>
    )
}

export default ProductDetailsPage;