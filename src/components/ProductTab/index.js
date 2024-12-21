import React, { useContext, useState } from "react";

import DataContext from "../../context/DataContext/DataContext";
import ProductSection from "../ProductSection";

import "./productTab.css";

function ProductTab({ products }) {
  const { state, dispatch } = useContext(DataContext);

  const clickHandler = () => {
    dispatch({ type: "Increment" });
  };

  return (
    <div className="producttab">
      {products.map((productData) => {
       
        return (
          <div key={productData.id} class="product">
            <ProductSection
              productData={productData}
              clickHandler={clickHandler}
              btnText={"Add To Cart"}
            />
          </div>
        );
      })}
    </div>
  );
}
export default ProductTab;
