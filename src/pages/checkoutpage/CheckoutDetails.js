import React from "react";
import SubHeader from "../../components/sub_header/SubHeader";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import { Link } from "react-router-dom";
const CheckoutDetails = (props) => {
  const {cartItems} = props
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <SubHeader name="Checkout Details" />
        <section className="py-4">
          <div className="container">
            <div className="shop-cart">
              <div className="row">
                <div className="col-12 col-xl-8">
                  <div className="checkout-details">
                    <div className="card bg-transparent rounded-0 shadow-none">
                      <div className="card-body">
                        <div className="steps steps-light">
                          <Link className="step-item active" to="/cart">
                            <div className="step-progress">
                              <span className="step-count">1</span>
                            </div>
                            <div className="step-label">
                              <i className="bx bx-cart"></i>Cart
                            </div>
                          </Link>
                          <Link className="step-item active current" to="/checkout-details">
                            <div className="step-progress">
                              <span className="step-count">2</span>
                            </div>
                            <div className="step-label">
                              <i className="bx bx-user-circle"></i>Details
                            </div>
                          </Link>

                          <Link
                            className="step-item"
                            to="/checkout-payment"
                          >
                            <div className="step-progress">
                              <span className="step-count">3</span>
                            </div>
                            <div className="step-label">
                              <i className="bx bx-credit-card"></i>Payment
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card rounded-0">
                      <div className="card-body">
                        
                        <div className="border p-3">
                          <h2 className="h5 mb-0">Shipping Address</h2>
                          <div className="my-3 border-bottom"></div>
                          <div className="form-body">
                            <form method="post" className="row g-3">
                              <div className="col-md-6">
                                <label className="form-label">First Name</label>
                                <input
                                  type="text"
                                  required className="form-control required validate rounded-0"
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">Last Name</label>
                                <input
                                  type="text"
                                  required className="form-control rounded-0"
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">E-mail id</label>
                                <input
                                  type="text"
                                  required className="form-control rounded-0"
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">Phone Number</label>
                                <input
                                  type="text"
                                  required className="form-control rounded-0"
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">Company</label>
                                <input
                                  type="text"
                                  required className="form-control rounded-0"
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">State/Province</label>
                                <select className="form-select rounded-0">
                                  <option>United Kingdom</option>
                                  <option>California</option>
                                </select>
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">
                                  Zip/Postal Code
                                </label>
                                <input
                                  type="text"
                                  required="true" className="form-control rounded-0"
                                />
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">Country</label>
                                <select className="form-select rounded-0">
                                  <option>United States</option>
                                  <option>India</option>
                                  <option>China</option>
                                  <option>Turkey</option>
                                </select>
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">Address 1</label>
                                <textarea required className="form-control rounded-0"></textarea>
                              </div>
                              <div className="col-md-6">
                                <label className="form-label">Address 2</label>
                                <textarea required className="form-control rounded-0"></textarea>
                              </div>
                              <div className="col-md-12">
                                <h6 className="mb-0 h5">Billing Address</h6>
                                <div className="my-3 border-bottom"></div>
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    checked
                                  />
                                  <label
                                    className="form-check-label"
                                    for="gridCheck"
                                  >
                                    Same as shipping address
                                  </label>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-grid">
                                  {" "}
                                  <Link
                                    to="/cart"
                                    className="btn btn-light btn-ecomm border-dark"
                                  >
                                    <i className="bx bx-chevron-left"></i>Back to
                                    Cart
                                  </Link>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-grid">
                                  {" "}
                                  <Link
                                    to="/checkout-payment"
                                    className="btn btn-dark btn-ecomm"
                                  >
                                    Proceed to Payment
                                    <i className="bx bx-chevron-right"></i>
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <OrderSummary cartItems={cartItems}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutDetails;
