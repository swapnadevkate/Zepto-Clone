import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "../../../../components/ProductImage";
import Text from "../../../../components/Text";
import "./style.css"
function HeroImageCategoryList() {
  const [imgData, setImgData] = useState(null);
  useEffect(() => {
    fetch("/HeroImageRoute.json")
      .then((response) => response.json())
      .then((data) => {
        setImgData(data);
      });
  }, []);

  if (imgData == null) {
    return null;
  }
  return (
    <>
   <div className="heroimgCategory">
      {
      
      imgData.map((product) => {
      
        return (
          
            product.categorylist.map((data)=>{
                return (
                  <div className="heroimgproduct">
                    <ProductImage src={data.image} style={{height:"50px",width:"50px"}}/>
                    <Text text={data.name} />
                 </div>
                )
            })
          
        );
      })}
      </div>
    </>
  );
}

export default HeroImageCategoryList;
