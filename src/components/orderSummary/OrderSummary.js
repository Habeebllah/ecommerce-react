import React from "react";
function OrderSummary(props) {
  const { cartItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const subprice = (a, b) => {
    const cal = a * b;
    return cal.toFixed(2);
  };

  return (
    <div className="col-12 col-xl-4">
      <div className="order-summary">
        <div className="card rounded-0">
          <div className="card-body">
            <div className="card rounded-0 border bg-transparent shadow-none">
              <div className="card-body">
                <p className="fs-5">Order summary</p>
                {cartItems.map((item) => (
                  <div key={item.id}>
                    <div className="my-3 border-top"></div>
                    <div className="d-flex align-items-center">
                      <span className="d-block flex-shrink-0">
                        <img src={item.image1} width="75" alt="Product" />
                      </span>
                      <div className="ps-2">
                        <h6 className="mb-1">
                          <span className="text-dark">
                            {item.name}
                          </span>
                        </h6>
                        <div className="widget-product-meta">
                          <span className="me-2">₦{item.price}</span>
                          <span className="">x {item.qty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {cartItems.length !== 0 && (
              <>
                <div className="card rounded-0 border bg-transparent mb-0 shadow-none">
                  <div className="card-body">
                    <p className="mb-2">
                      Subtotal: <span className="float-end">₦{itemsPrice.toFixed(2)}</span>
                    </p>
                    <p className="mb-2">
                      Shipping: <span className="float-end">₦{shippingPrice.toFixed(2)}</span>
                    </p>
                    <p className="mb-2">
                      Taxes: <span className="float-end">₦{taxPrice.toFixed(2)}</span>
                    </p>
                    
                    <div className="my-3 border-top"></div>
                    <h5 className="mb-0">
                      Order Total: <span className="float-end">₦{totalPrice.toFixed(2)}</span>
                    </h5>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
