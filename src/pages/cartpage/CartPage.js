import classes from "./CartPage.module.css";
import React from "react";
import { Link } from "react-router-dom";
import SubHeader from "../../components/sub_header/SubHeader";
const CartPage = (props) => {
  const { cartItems, onAdd, onRemove, removeProduct, clearCart } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const subprice = (a, b) => {
    const cal = a * b;
    return cal.toFixed(2);
  };
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <SubHeader name="Cart" />
        <section className="py-4">
          <div className="container">
            <div className="shop-cart">
              <div className="row">
                <div className="col-12 col-xl-8">
                  <div className="shop-cart-list mb-3 p-3">
                    {cartItems.length === 0 && (
                      <div className="mt-5 mb-5">
                        <h4>Cart is empty</h4>
                      </div>
                    )}
                    {cartItems.map((item) => (
                      <div>
                        <div
                          key={item.id}
                          className="row align-items-center g-3"
                        >
                          <div className="col-12 col-lg-6">
                            <div className="d-lg-flex align-items-center gap-2">
                              <div className="cart-img text-center text-lg-start">
                                <img src={item.image1} width="130" alt="" />
                              </div>
                              <div className="cart-detail text-center text-lg-start">
                                <h6 className="mb-2">{item.name}</h6>

                                <h5 className="mb-0">₦{item.price}</h5>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-2 justify-content-center" style={{display:"flex"}}>
                            <div
                              className="cart-action text-center"
                              style={{ display: "inline-flex" }}
                            >
                              <button
                                onClick={() => onRemove(item)}
                                className="bg-dark text-light"
                              >
                                -
                              </button>
                              <input
                                type="text"
                                className="form-control rounded-0 text-center"
                                style={{ width: "55px" }}
                                value={item.qty}
                                min="1"
                              />
                              <button
                                onClick={() => onAdd(item)}
                                className="bg-dark text-light"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="col-12 col-lg-3">
                            <div className="text-center">
                              <div className="d-flex gap-2 justify-content-center">
                                <h4 className="">
                                  ₦{subprice(item.price, item.qty)}
                                </h4>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-lg-1">
                            <div className="text-center">
                              <div className="d-flex gap-2 justify-content-center" >
                                {" "}
                                <button
                                  onClick={() => removeProduct(item)}
                                  className="btn btn-dark rounded-0 btn-ecomm"
                                >
                                  <i class="bx bx-x-circle"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="my-4 border-top"></div>
                      </div>
                    ))}
                    <div className="d-lg-flex align-items-center gap-2" style={{display:"flex"}}>
                      {" "}
                      <Link to="/products" className="btn btn-dark btn-ecomm">
                        <i class="bx bx-shopping-bag"></i> Continue Shoping
                      </Link>
                      <button
                        onClick={clearCart}
                        class="btn btn-light btn-ecomm ms-auto border-dark"
                      >
                        <i class="bx bx-x-circle"></i> Clear Cart
                      </button>
                    </div>
                  </div>
                </div>

                {cartItems.length !== 0 && (
                  <>
                    <div className="col-12 col-xl-4">
                      <div className="checkout-form p-3 bg-light">
                        <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                          <div className="card-body">
                            <p className="mb-2">
                              Subtotal:{" "}
                              <span className="float-end">
                                ₦{itemsPrice.toFixed(2)}
                              </span>
                            </p>
                            <p className="mb-2">
                              Shipping:{" "}
                              <span className="float-end">
                                ₦{shippingPrice.toFixed(2)}
                              </span>
                            </p>
                            <p className="mb-0">
                              Tax:{" "}
                              <span className="float-end">
                                ₦{taxPrice.toFixed(2)}
                              </span>
                            </p>
                            <div className="my-3 border-top"></div>
                            <h5 className="mb-0">
                              Order Total:{" "}
                              <span className="float-end">
                                ₦{totalPrice.toFixed(2)}
                              </span>
                            </h5>
                            <div className="my-4"></div>
                            <div className="d-grid">
                              {" "}
                              <Link
                                to="/checkout-details"
                                className="btn btn-dark btn-ecomm"
                              >
                                Proceed to Checkout
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CartPage;
