import React from "react";
import ProductImage from "../../../../components/ProductImage";
import Text from "../../../../components/Text";
import "./style.css";

function HeroImageCategoryList({ clickHandler, arreyitems }) {
  const data =  arreyitems.categorylist
 
  return (
    <div className="heroimgCategory">
     
      {
      data.map((data,categoryIndex)=>{
        return (
          <div
          className="heroimgproduct"
          onClick={() => clickHandler(categoryIndex)}
        >
          <ProductImage
            src={data.image}
            style={{ height: "50px", width: "50px" }}
          />
          <Text text={data.name} />
        </div>
        )
      })
        
      }
    </div>
  );
}

export default HeroImageCategoryList;
