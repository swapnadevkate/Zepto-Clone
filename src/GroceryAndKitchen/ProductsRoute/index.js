import React, { useEffect, useState } from "react";

import ProductImage from "../../components/ProductImage";
import Text from "../../components/Text";
import { Link } from "react-router-dom";
import "./style.css";

function StoredShopingDataRoute() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/StoredShopingData.json")
      .then((response) =>response.json())
      .then((response) => {
        
        setData(response.data);
      });
  }, []);
  return (
    <>
   <h3>Grocery & Kitchen</h3>
      <div className="shopingProducts">
        {data.map((product, index) => {
          return (
            <Link to={`/ProductsRoute/${product.id}`} key={index}>
              <div className="shopingproduct">
              <ProductImage src={product.img} />
              <Text text={product.title} />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default StoredShopingDataRoute;
