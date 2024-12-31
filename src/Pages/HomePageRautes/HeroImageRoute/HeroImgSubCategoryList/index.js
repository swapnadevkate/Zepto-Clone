import React, { useState, useEffect, useContext } from "react";
import ProductImage from "../../../../components/ProductImage";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";
import DataContext from "../../../../context/DataContext/DataContext";
import "./style.css";
function HeroImageSubCategoryList({ arreyitems, imgdata }) {
  const { state, dispatch } = useContext(DataContext);
  const clickHandler = () => {
    dispatch({ type: "Increment" });
  };
  

  // aarray Item Object 
  // display subCategrory (array) list from arrayObject
  // get index of category
  // 
  //
  // 
const items = arreyitems.subCategorylist.filter((item)=>{
  return item.index == imgdata
  
})// array of index = product

   return (
    <>
    <div className="heroimgsubcategory">
    {
      items.map((product)=>{
        return (
          <div className="productData">
          <ProductImage src={product.image} />
          <Text text={product.title} />
          <Text text={product.quantity} />
          <Text text={product.price} />
          <Button text={"AddtoCart"} clickHandler={clickHandler} />
        </div>
        )
      })
    }
      </div>
    </>
  );
}

export default HeroImageSubCategoryList;
// index is not updating reson,
