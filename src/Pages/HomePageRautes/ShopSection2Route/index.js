import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImage from "../../../components/ProductImage";
import Text from "../../../components/Text";
import Button from "../../../components/Button";
import DataContext from "../../../context/DataContext/DataContext";
import "./style.css"
function ShopSection2Route() {
  const [productData, setProductData] = useState(null);
  const { state, dispatch } = useContext(DataContext);
  const clickHandler=()=>{
    dispatch({ type: "Increment" });
  }
  useEffect(() => {
    fetch("/shopSection2RouteData.json")
      .then((response) => {
       
        return response.json();
      })
      .then((data) => {
        setProductData(data)
      });
  }, []);
  
  const {id}=useParams()
  console.log(id)
  if (productData == null){
    return null
  }
  const store = productData[id]
  
  return <>
  <div className="shopSection2">
  {
    store.map((product)=>{
   return (
    <div className="shopsection2products">
    <ProductImage src={product.image}/>
    <Text text={product.title}/>
    <Text text={product.quantity}/>
    <Text text={product.price}/>
    <Button text={"Add To Cart"}  clickHandler={clickHandler} />
    </div>
   )
    })
  }
  </div>
  </>;
}

export default ShopSection2Route;
