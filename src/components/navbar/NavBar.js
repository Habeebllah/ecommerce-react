import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return(
		<div className="header-wrapper">
      <div className="top-menu border-bottom">
				<div className="container">
					<nav className="navbar navbar-expand">
						<div className="shiping-title text-uppercase font-13 d-none d-sm-flex">Welcome to Rosenics store!</div>
						
					</nav>
				</div>
			</div>
			<div className="header-content pb-3 pb-md-0">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-4 col-md-auto">
							<div className="d-flex align-items-center">
								<div className="mobile-toggle-menu d-lg-none px-lg-2" data-trigger="#navbar_main"><i className='bx bx-menu'></i>
								</div>
								<div className="logo d-none d-lg-flex">
									<a href="index.html">
										<img src="assets/images/logo-icon.png" className="logo-icon" alt="" />
									</a>
								</div>
							</div>
						</div>
						<div className="col col-md order-4 order-md-2">
							<div className="input-group flex-nowrap px-xl-4">
								<input type="text" className="form-control w-100" placeholder="Search for Products"/>
								<select className="form-select flex-shrink-0" aria-label="Default select example" style={{width: '10.5rem'}}>
									<option selected>All Categories</option>
									<option value="1">Fashion</option>
									<option value="2">Electronics</option>
									<option value="3">Accessories</option>
								</select>	<span className="input-group-text cursor-pointer bg-transparent"><i className='bx bx-search'></i></span>
							</div>
						</div>
						<div className="col-4 col-md-auto order-3 d-none d-xl-flex align-items-center">
							<div className="fs-1 text-white"><i className='bx bx-headphone'></i>
							</div>
							<div className="ms-2">
								<p className="mb-0 font-13">CALL US NOW</p>
								<h5 className="mb-0">+234 9126096902</h5>
							</div>
						</div>
						<div className="col-4 col-md-auto order-2 order-md-4">
							<div className="top-cart-icons float-end">
								<nav className="navbar navbar-expand">
									<ul className="navbar-nav ms-auto">
										<li className="nav-item"><a href="account-dashboard.html" className="nav-link cart-link"><i className='bx bx-user'></i></a>
										</li>
										
										<li className="nav-item dropdown dropdown-large">
											<a href="#" className="nav-link  position-relative cart-link" data-bs-toggle="dropdown">	<span className="alert-count">8</span>
												<i className='bx bx-shopping-bag'></i>
											</a>
											<div className="dropdown-menu dropdown-menu-end">
												<a href="javascript:;">
													<div className="cart-header">
														<p className="cart-header-title mb-0">8 ITEMS</p>
														<p className="cart-header-clear ms-auto mb-0">VIEW CART</p>
													</div>
												</a>
												<div className="cart-list">
													<a className="dropdown-item" href="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Men White T-Shirt</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/01.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</a>
													<a className="dropdown-item" href="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Puma Sports Shoes</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/05.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</a>
													<a className="dropdown-item" href="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Women Red Sneakers</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/17.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</a>
													<a className="dropdown-item" href="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Black Headphone</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/10.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</a>
													<a className="dropdown-item" href="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Blue Girl Shoes</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/08.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</a>
													<a className="dropdown-item" href="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Men Leather Belt</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/18.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</a>
													<a className="dropdown-item" href="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Men Yellow T-Shirt</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/04.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</a>
													<a className="dropdown-item" href="javascript:;">
														<div className="d-flex align-items-center">
															<div className="flex-grow-1">
																<h6 className="cart-product-title">Pool Charir</h6>
																<p className="cart-product-price">1 X $29.00</p>
															</div>
															<div className="position-relative">
																<div className="cart-product-cancel position-absolute"><i className='bx bx-x'></i>
																</div>
																<div className="cart-product">
																	<img src="assets/images/products/16.png" className="" alt="product image"/>
																</div>
															</div>
														</div>
													</a>
												</div>
												<a href="javascript:;">
													<div className="text-center cart-footer d-flex align-items-center">
														<h5 className="mb-0">TOTAL</h5>
														<h5 className="mb-0 ms-auto">$189.00</h5>
													</div>
												</a>
												<div className="d-grid p-3 border-top">	<a href="javascript:;" className="btn btn-dark btn-ecomm">CHECKOUT</a>
												</div>
											</div>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="primary-menu border-top">
				<div className="container">
					<nav id="navbar_main" className="mobile-offcanvas navbar navbar-expand-lg">
						<div className="offcanvas-header">
							<button className="btn-close float-end"></button>
							<h5 className="py-2"></h5>
						</div>
						<ul className="navbar-nav">
							<li className="nav-item active"> <Link className="nav-link" to='/'>Home</Link></li>
							<li className="nav-item"><Link className="nav-link " to='/products'>Product </Link></li>
							<li className="nav-item"> <Link className="nav-link" to="/contact">Contact Us </Link></li>
							<li className="nav-item">	<a className="nav-link" href="#">My Account </a></li>
						</ul>
					</nav>
				</div>
			</div>
		
    
    </div>
  
  )
}

export default NavBar;