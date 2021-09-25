import React from "react";
function OrderSummary() {
  return (
    <div class="col-12 col-xl-4">
      <div class="order-summary">
        <div class="card rounded-0">
          <div class="card-body">
            <div class="card rounded-0 border bg-transparent shadow-none">
              <div class="card-body">
                <p class="fs-5">Order summary</p>
                <div class="my-3 border-top"></div>
                <div class="d-flex align-items-center">
                  <a class="d-block flex-shrink-0" href="javascript:;">
                    <img
                      src="assets/images/products/01.png"
                      width="75"
                      alt="Product"
                    />
                  </a>
                  <div class="ps-2">
                    <h6 class="mb-1">
                      <a href="javascript:;" class="text-dark">
                        White Polo T-Shirt
                      </a>
                    </h6>
                    <div class="widget-product-meta">
                      <span class="me-2">
                        $19.<small>00</small>
                      </span>
                      <span class="">x 1</span>
                    </div>
                  </div>
                </div>
                <div class="my-3 border-top"></div>
                <div class="d-flex align-items-center">
                  <a class="d-block flex-shrink-0" href="javascript:;">
                    <img
                      src="assets/images/products/17.png"
                      width="75"
                      alt="Product"
                    />
                  </a>
                  <div class="ps-2">
                    <h6 class="mb-1">
                      <a href="javascript:;" class="text-dark">
                        Fancy Red Sneakers
                      </a>
                    </h6>
                    <div class="widget-product-meta">
                      <span class="me-2">
                        $16.<small>00</small>
                      </span>
                      <span class="">x 2</span>
                    </div>
                  </div>
                </div>
                <div class="my-3 border-top"></div>
                <div class="d-flex align-items-center">
                  <a class="d-block flex-shrink-0" href="javascript:;">
                    <img
                      src="assets/images/products/04.png"
                      width="75"
                      alt="Product"
                    />
                  </a>
                  <div class="ps-2">
                    <h6 class="mb-1">
                      <a href="javascript:;" class="text-dark">
                        Yellow Shine Blazer
                      </a>
                    </h6>
                    <div class="widget-product-meta">
                      <span class="me-2">
                        $22.<small>00</small>
                      </span>
                      <span class="">x 1</span>
                    </div>
                  </div>
                </div>
                <div class="my-3 border-top"></div>
                <div class="d-flex align-items-center">
                  <a class="d-block flex-shrink-0" href="javascript:;">
                    <img
                      src="assets/images/products/09.png"
                      width="75"
                      alt="Product"
                    />
                  </a>
                  <div class="ps-2">
                    <h6 class="mb-1">
                      <a href="javascript:;" class="text-dark">
                        Men Black Hat Cap
                      </a>
                    </h6>
                    <div class="widget-product-meta">
                      <span class="me-2">
                        $14.<small>00</small>
                      </span>
                      <span class="">x 1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card rounded-0 border bg-transparent mb-0 shadow-none">
              <div class="card-body">
                <p class="mb-2">
                  Subtotal: <span class="float-end">$198.00</span>
                </p>
                <p class="mb-2">
                  Shipping: <span class="float-end">--</span>
                </p>
                <p class="mb-2">
                  Taxes: <span class="float-end">$14.00</span>
                </p>
                <p class="mb-0">
                  Discount: <span class="float-end">--</span>
                </p>
                <div class="my-3 border-top"></div>
                <h5 class="mb-0">
                  Order Total: <span class="float-end">212.00</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
