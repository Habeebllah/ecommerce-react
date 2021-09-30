import React from "react";
import Services from "./Services";
import FeaturedProduct from "./FeaturedProduct";
function SectionContainer(props){
    return (
        <div className="page-wrapper">
        <div className="page-content">
            <Services/>
            <FeaturedProduct onAdd={props.onAdd} products={props.products}/>
          
        </div>
      </div>
    )
}

export default SectionContainer;