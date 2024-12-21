import React from "react";
import ProductImage from "../../components/ProductImage";
import Text from "../../components/Text";

function StoredShopingDataUi({ data }) {
    
  return (
    <>
      <div>
        {data.map((product) => {
          return (
            <div>
              <ProductImage src={product.img} />
              <Text text={product.title} />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default StoredShopingDataUi;
