import React, { useContext, useState } from "react";

import DataContext from "../../DataContext/DataContext";
import ProductSection from "../../components/ProductSection";

import "./productTab.css";

function ProductTab({ products }) {
  const { state, dispatch } = useContext(DataContext);

  const clickHandler = () => {
    dispatch({ type: "Increment" });
  };

  return (
    <div id="facumakeupBox">
      {products.map((productData) => {
        console.log(productData);
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
