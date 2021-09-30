import React from "react";
import ProductData from "../data/Data.json";
import { Link } from "react-router-dom";
import ProductCard from "../productCard/ProductCard";
function FeaturedProduct(props) {
  const { onAdd } = props
  return (
    <section className="py-4">
      <div className="container">
        <div className="d-flex align-items-center">
          <h5 className="text-uppercase mb-0">FEATURED PRODUCTS</h5>
          <Link
            to="/products"
            className="btn btn-dark btn-ecomm ms-auto rounded-0"
          >
            More Products<i className="bx bx-chevron-right"></i>
          </Link>
        </div>
        <hr />
        <div className="product-grid">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {props.products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image1={product.image1}
                image2={product.image2}
                image3={product.image3}
                price={product.price}
                old_price={product.old_price}
                description={product.description}
                category={product.category}
                onAdd={onAdd}
                product={product}
              />
              
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedProduct;
