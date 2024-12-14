import React, { useContext, useState } from "react";

import ProductImage from "../components/ProductImage";
import DataContext from "../DataContext/DataContext";
import Button from "../components/Button";
import Text from "../components/Text";

import "./productTab.css";

function ProductTab({ products }) {
  const { state, dispatch } = useContext(DataContext);

  const clickHandler = () => {
    dispatch({ type: "Increment" });
  };

  return (
    <div id="facumakeupBox">
      {products.map((e) => {
        console.log(e);
        return (
          <div key={e.id} class="product">
            <ProductImage src={e.img} />
            <Text text={e.para} textFont="bold" />
            <Text text={e.quantity} />

            <p id="pricepara">
              <b>${`${e.price}`} </b>
              <span id="pricespan">$1000</span>
            </p>

            <Button clickHandler={clickHandler} text={e.button} />
          </div>
        );
      })}
    </div>
  );
}
export default ProductTab;
