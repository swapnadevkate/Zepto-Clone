import React, { useEffect, useState } from "react";
import ExploreProductList from "../ExploreProductList";
import { useParams } from "react-router-dom";

function ShowPathOfExploreProductList() {
  const [product, setProduct] = useState([]);

  console.log("1 state", product);

  useEffect(() => {
    fetch("/ProductListData.json")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log("2 useeffect", data);
      });
  }, []);

  const { id } = useParams(); //id is boys,gitls,gift
  console.log("id", id);
  const store = product[id] ? product[id] : { data: [] }; //url depend id, product is object data type, we are taking object[data]

  console.log("3...store", store);
  return (
    <>
    
    <ExploreProductList btnText={"AddtoCart"} products={store.data} />
    </>
  );
}
export default ShowPathOfExploreProductList;
