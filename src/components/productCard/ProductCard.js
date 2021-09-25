import React from "react";
import classes from './ProductCard.module.css';
import { Link } from 'react-router-dom'; 
import ProductDetailsPage from "../../pages/productdetailspage/ProductDetailsPage";

function ProductCard(props){
  let newClassName = 'color_bg ${props.name}'
  let bg_img = 'url(${props.image})'
  let {id, name, image, price, description} = props
  
    return(
      <div className={classes.card}>
        <div className={classes.warpper}>
          <div className={classes.newClassName}></div>
          <img className={classes.card_img} src={image}/>
          <div className={classes.cardInfo}>
            <Link to={{pathname: `/product-details/${id}`, state:{product:props}}} >
            <h1>{name}</h1>
            </Link>
            <div className={classes.action}>
              <div className={classes.priceGroup}>
                <p className={classes.price, classes.old_price}></p>
                <p className={classes.price, classes.newPrice}>N{price}</p>
              </div>
              <div className={classes.cart}>
                
                <svg className={classes.outCart} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path d="M2 6h10110 40h3218-24H16"></path>
                  <circle cx="23" cy="54" r="4"></circle>
                  <circle cx="49" cy="54" r="4"></circle>
                </svg>
                
              </div>
            </div>
          </div>
        </div>
        </div>

    );
}  

export default ProductCard;