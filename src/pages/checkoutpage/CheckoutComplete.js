import React from "react";
import SubHeader from "../../components/sub_header/SubHeader";
import { Link } from "react-router-dom";
const CheckoutComplete = () => {
  return (
    <div class="page-wrapper">
      <div class="page-content">
        <SubHeader name="Checkout Complete" />
        <section class="py-4">
          <div class="container">
            <div class="card py-3 mt-sm-3">
              <div class="card-body text-center">
                <h2 class="h4 pb-3">Thank you for your order!</h2>
                <p class="fs-sm mb-2">
                  Your order has been placed and will be processed as soon as
                  possible.
                </p>
                <p class="fs-sm mb-2">
                  Make sure you make note of your order number, which is{" "}
                  <span class="fw-medium">34VB5540K83.</span>
                </p>
                <p class="fs-sm">
                  You will be receiving an email shortly with confirmation of
                  your order. <u>You can now:</u>
                </p>
                <Link class="btn btn-light rounded-0 mt-3 me-3" to="/products">
                  Go back shopping
                </Link>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CheckoutComplete;
