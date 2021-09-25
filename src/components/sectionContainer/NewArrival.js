import React from "react";
function NewArrival(){
    return (
        <section className="py-4">
            <div className="container">
              <div className="d-flex align-items-center">
                <h5 className="text-uppercase mb-0">New Arrivals</h5>
                <a
                  href="javascript:;"
                  className="btn btn-dark ms-auto rounded-0"
                >
                  View All<i className="bx bx-chevron-right"></i>
                </a>
              </div>
              <hr />
              <div className="product-grid">
                <div className="new-arrivals owl-carousel owl-theme">
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/09.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>5.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/10.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>5.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/11.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>4.9</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/12.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>5.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/13.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>3.9</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/14.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>5.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/15.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>5.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/16.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>5.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/17.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>4.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/18.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>5.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/19.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>4.5</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card rounded-0 product-card">
                      <div className="card-header bg-transparent border-bottom-0">
                        <div className="d-flex align-items-center justify-content-end">
                          <a href="javascript:;">
                            <div className="product-wishlist">
                              {" "}
                              <i className="bx bx-heart"></i>
                            </div>
                          </a>
                        </div>
                      </div>
                      <a href="product-details.html">
                        <img
                          src="assets/images/products/20.png"
                          className="card-img-top"
                          alt="..."
                        />
                      </a>
                      <div className="card-body">
                        <div className="product-info">
                          <a href="javascript:;">
                            <p className="product-catergory font-13 mb-1">
                              Catergory Name
                            </p>
                          </a>
                          <a href="javascript:;">
                            <h6 className="product-name mb-2">
                              Product Short Name
                            </h6>
                          </a>
                          <div className="d-flex align-items-center">
                            <div className="mb-1 product-price">
                              {" "}
                              <span className="me-1 text-decoration-line-through">
                                N99.00
                              </span>
                              <span className="fs-5">N49.00</span>
                            </div>
                            <div className="cursor-pointer ms-auto">
                              {" "}
                              <span>5.0</span>{" "}
                              <i className="bx bxs-star text-white"></i>
                            </div>
                          </div>
                          <div className="product-action mt-2">
                            <div className="d-grid gap-2">
                              <a
                                href="javascript:;"
                                className="btn btn-dark btn-ecomm"
                              >
                                {" "}
                                <i className="bx bxs-cart-add"></i>Add to Cart
                              </a>
                              <a
                                href="javascript:;"
                                className="btn btn-light btn-ecomm"
                                data-bs-toggle="modal"
                                data-bs-target="#QuickViewProduct"
                              >
                                <i className="bx bx-zoom-in"></i>Quick View
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section> 
        
        
    )
}

export default NewArrival;