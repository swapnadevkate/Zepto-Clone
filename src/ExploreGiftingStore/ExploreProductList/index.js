import React from "react";
import ProductImage from "../../components/ProductImage";
import Text from "../../components/Text";
import Button from "../../components/Button";
import DataContext from "../../context/DataContext/DataContext";
import { useContext } from "react";
import "./style.css";
function ExploreProductList({ products, btnText }) {
  console.log("products",products)
  const { state, dispatch } = useContext(DataContext);
 return (
    <>
      
      <div>count:{state.count}</div>
      <div className="ExploreProductList">
        {products.map((product) => {
          return (
            <div className="productList">
              <ProductImage src={product.image} style={{ width: "100px" }} />
              <Text text={product.title} />
              <Text text={product.quantity} />
              <Text text={product.price} />
              <Button
                text={btnText}
                className="customBtn"
                clickHandler={() => {
                  dispatch({ type: "Increment" });
                }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ExploreProductList;
