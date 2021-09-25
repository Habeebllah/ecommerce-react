import React from "react";
import Services from "./Services";
import FeaturedProduct from "./FeaturedProduct";
import NewArrival from "./NewArrival";
function SectionContainer(){
    return (
        <div className="page-wrapper">
        <div className="page-content">
            <Services/>
            <FeaturedProduct/>
            <NewArrival/>
          
        </div>
      </div>
    )
}

export default SectionContainer;