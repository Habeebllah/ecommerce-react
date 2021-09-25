import React from "react";
import SubHeader from "../../components/sub_header/SubHeader";
import OrderSummary from "../../components/orderSummary/OrderSummary";
import { Link } from "react-router-dom";
const CheckoutDetails = () => {
  return (
    <div class="page-wrapper">
      <div class="page-content">
        <SubHeader name="Checkout Details" />
        <section class="py-4">
          <div class="container">
            <div class="shop-cart">
              <div class="row">
                <div class="col-12 col-xl-8">
                  <div class="checkout-details">
                    <div class="card bg-transparent rounded-0 shadow-none">
                      <div class="card-body">
                        <div class="steps steps-light">
                          <Link class="step-item active" to="/cart">
                            <div class="step-progress">
                              <span class="step-count">1</span>
                            </div>
                            <div class="step-label">
                              <i class="bx bx-cart"></i>Cart
                            </div>
                          </Link>
                          <Link class="step-item active current" to="/checkout-details">
                            <div class="step-progress">
                              <span class="step-count">2</span>
                            </div>
                            <div class="step-label">
                              <i class="bx bx-user-circle"></i>Details
                            </div>
                          </Link>

                          <Link
                            class="step-item active"
                            to="/checkout-payment"
                          >
                            <div class="step-progress">
                              <span class="step-count">3</span>
                            </div>
                            <div class="step-label">
                              <i class="bx bx-credit-card"></i>Payment
                            </div>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div class="card rounded-0">
                      <div class="card-body">
                        <div class="d-flex align-items-center mb-3">
                          <div class="">
                            <img
                              src="assets/images/avatars/avatar-1.png"
                              width="90"
                              alt=""
                              class="rounded-circle p-1 border"
                            />
                          </div>
                          <div class="ms-2">
                            <h6 class="mb-0">Jhon Michle</h6>
                            <p class="mb-0">michle@example.com</p>
                          </div>
                          <div class="ms-auto">
                            {" "}
                            <a
                              href="javascript:;"
                              class="btn btn-light btn-ecomm"
                            >
                              <i class="bx bx-edit"></i> Edit Profile
                            </a>
                          </div>
                        </div>
                        <div class="border p-3">
                          <h2 class="h5 mb-0">Shipping Address</h2>
                          <div class="my-3 border-bottom"></div>
                          <div class="form-body">
                            <form class="row g-3">
                              <div class="col-md-6">
                                <label class="form-label">First Name</label>
                                <input
                                  type="text"
                                  class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Last Name</label>
                                <input
                                  type="text"
                                  class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">E-mail id</label>
                                <input
                                  type="text"
                                  class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Phone Number</label>
                                <input
                                  type="text"
                                  class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Company</label>
                                <input
                                  type="text"
                                  class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">State/Province</label>
                                <select class="form-select rounded-0">
                                  <option>United Kingdom</option>
                                  <option>California</option>
                                </select>
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">
                                  Zip/Postal Code
                                </label>
                                <input
                                  type="text"
                                  class="form-control rounded-0"
                                />
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Country</label>
                                <select class="form-select rounded-0">
                                  <option>United States</option>
                                  <option>India</option>
                                  <option>China</option>
                                  <option>Turkey</option>
                                </select>
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Address 1</label>
                                <textarea class="form-control rounded-0"></textarea>
                              </div>
                              <div class="col-md-6">
                                <label class="form-label">Address 2</label>
                                <textarea class="form-control rounded-0"></textarea>
                              </div>
                              <div class="col-md-12">
                                <h6 class="mb-0 h5">Billing Address</h6>
                                <div class="my-3 border-bottom"></div>
                                <div class="form-check">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    id="gridCheck"
                                    checked
                                  />
                                  <label
                                    class="form-check-label"
                                    for="gridCheck"
                                  >
                                    Same as shipping address
                                  </label>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="d-grid">
                                  {" "}
                                  <a
                                    href="javascript:;"
                                    class="btn btn-light btn-ecomm"
                                  >
                                    <i class="bx bx-chevron-left"></i>Back to
                                    Cart
                                  </a>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div class="d-grid">
                                  {" "}
                                  <a
                                    href="javascript:;"
                                    class="btn btn-dark btn-ecomm"
                                  >
                                    Proceed to Checkout
                                    <i class="bx bx-chevron-right"></i>
                                  </a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <OrderSummary />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutDetails;
