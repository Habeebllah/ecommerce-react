import React from "react";
import classes from "./ProductCard.module.css";
import { Link } from "react-router-dom";
import ProductDetailsPage from "../../pages/productdetailspage/ProductDetailsPage";
function ProductCard({key, id, name, image1, image2, image3, category, old_price, price, description, onAdd, product}) {
  
 
  return (
    
    <div className="col">
      <div className="card rounded-0 product-card">
        <div className="card-header bg-transparent border-bottom-0">
          <div className="d-flex align-items-center justify-content-end gap-3">
            
          </div>
        </div>
        <span>
          <img
            src={image1}
            className="card-img-top"
            alt="..."
          />
        </span>
        <div className="card-body">
          <div className="product-info">
            <a href="javascript:;">
              <p className="product-catergory font-13 mb-1"><b>{category}</b></p>
            </a>
            <a href="javascript:;">
              <h6 className="product-name mb-2">{name}</h6>
            </a>
            <div className="d-flex align-items-center">
              <div className="mb-1 product-price">
                {" "}
                <span className="me-1 text-decoration-line-through">₦{old_price}</span>
                <span className="fs-5">₦{price}</span>
              </div>
              <div className="cursor-pointer ms-auto">
                {" "}
                <i className="bx bxs-star text-warning"></i>
                <i className="bx bxs-star text-warning"></i>
                <i className="bx bxs-star text-warning"></i>
                <i className="bx bxs-star text-warning"></i>
                <i className="bx bxs-star text-warning"></i>
              </div>
            </div>
            <div className="product-action mt-2">
              <div className="d-grid gap-2">
                <button className="btn btn-dark btn-ecomm" onClick={() => onAdd(product)}>
                  {" "}
                  <i className="bx bxs-cart-add"></i>Add to Cart
                </button>{" "}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      
      

  );
}

export default ProductCard;
