import React, { useEffect, useState } from "react";
import ProductImage from "../../../components/ProductImage";
import { useParams } from "react-router-dom";
import "./style.css"
function ShopSection1Route() {
  const [routeData, setRouteData] = useState(null);
  useEffect(() => {
    fetch("/shopSection1RouteData.json")
      .then((response) => response.json())
      .then((data) => {
        setRouteData(data);
      });
  }, []);
  const { id } = useParams();
  if (routeData === null) {
    return null;
  }

  const store = routeData[id];

  return (
    <>
      <div>
        <section className="heroimg1">
        <ProductImage src={store.heroImg} style={{height:"500px",width:"900px"}}/>
        </section>
        <section className="products">
        {
           store.productsCategory.map((products)=>{
           
                return (

                   <ProductImage src={products.img} style={{width:'230px'}}/>
                )
            })
        }
        </section>
        <section className="subheroimg">
            <ProductImage src={store.subheroimg} style={{width:"900px"}}/>
        </section>
      </div>
    </>
  );
}

export default ShopSection1Route;
