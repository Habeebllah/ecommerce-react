import React, {useRef} from "react";
import ProductData from "../../components/data/Data.json";
import { Link } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard";
import SubHeader from "../../components/sub_header/SubHeader";
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
function Product(props) {
  const [data, setData] = useState(ProductData);

  const searchData = (pattern) => {
    if (!pattern) {
      setData(ProductData);
      return;
    }

    const fuse = new Fuse(data, {
      keys: ["name", "category"],
    });

    const result = fuse.search(pattern);
    const matches = [];
    if (!result.length) {
      setData([]);
    } else {
      result.forEach(({product}) => {
        matches.push(product);
      });
      setData(matches);
    }
  };

  const inputEl = useRef("");

  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value)

  }
  return (
    <div className="page-wrapper">
      <div className="page-content">
        
        <SubHeader name="Product"/>
        <section className="py-4">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-12">
                <div className="product-wrapper">
                  <div className="toolbox d-lg-flex align-items-center mb-3 gap-2 p-3 bg-white border">
                    <div className="d-flex flex-wrap flex-grow-1 gap-1">
                      
                      <div className="d-flex align-items-center flex-nowrap">
                      <input
                        className="SearchInput"
                        type="text"
                        ref={inputEl}
                        value={props.term}
                        onChange={getSearchTerm}
                        placeholder="Search for product"
                        style={{border: "1px solid #dee2e6",
                          padding: ".375rem .75rem",
                          fontSize: "1rem" }}
                      />
                      </div>
                      <div className="">
                        <button
                          type="button"
                          className="btn btn-dark rounded-0 text-uppercase"
                        >
                          Search
                        </button>
                      </div>
                    </div>
                  
                  </div>
                  
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
                onAdd={props.onAdd}
                product={product}

              />
            ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Product;
