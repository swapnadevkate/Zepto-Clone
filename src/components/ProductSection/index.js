import React from "react";

import ProductImage from "../ProductImage";
import Text from "../Text";
import Button from "../Button";
import './style.css'
function ProductSection(props) {
  const productData = props.productData;

  return (
    <>
    <div className="productSection">
      <ProductImage src={productData.imgUrl} />
      <Text text={productData.para} textFont="bold" />
      <Text text={productData.quantity} />

      <p id="pricepara">
        <b>${`${productData.price}`} </b>
        <span id="pricespan">$1000</span>
      </p>

      <Button clickHandler={props.clickHandler} text={props.btnText} />
      </div>
    </>
  );
}

export default ProductSection;
