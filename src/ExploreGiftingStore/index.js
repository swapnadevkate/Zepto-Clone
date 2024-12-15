import React, { useState } from "react";
import ProductImage from "../components/ProductImage";
import Text from "./../components/Text";
import { Link } from "react-router-dom";
function ExploreGiftingStore({explores,title}) {
  
  const divHandler = (index) => {
  
  };
  return (
    <>
    <div>{title}</div>
     {explores.map((data, index) => {
       return (
          <Link to={`/ExploreProductStore/${data.id}`}>
            <div
            onClick={() => {
              divHandler(index);
            }}
            >
            <ProductImage src={data.giftimage} />
            <Text text={data.giftname} />

          </div>
         </Link> 
        );
      })}
    </>
  );
}

export default ExploreGiftingStore;
