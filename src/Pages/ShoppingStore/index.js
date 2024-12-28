import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductImage from "../../components/ProductImage";
import ProductSection from "../../components/ProductSection";
import CategorySection from "../../components/CategorySection";
import ExploreGiftingStore from "../../ExploreGiftingStore";
import  "./shoppingStore.css";


function ShoppingStore() {
  const [items, setItems] = useState(null);
  
  useEffect(() => {
    fetch("/dataStore.json").then((response) => response.json()).then((data) => {
          setItems(data);
         
        })
      
      
  }, []);

  const { id } = useParams();
  console.log("id is",id)
if(items == null){
return null
}
  const store = items[id];

  const recommendedProducts = store.recommendedProducts;

  const productsByCategory = store.productsByCategory;
  const exploreStore = store.exploreStore;

  return (
    <div>
      <section  style={{textAlign:"center",marginTop:"30px"}}>
        <ProductImage
          src={store.hemorImageUrl}
          style={{ height: "600px", width: "900px"}}
        />
      </section>
      <section className="recomendedProduct" >
        {recommendedProducts.map((productData) => {
          return (
            <ProductSection productData={productData} btnText={"Add To Cart"}/>
          );
        })}
      </section>
      <section>
        <ExploreGiftingStore
          explores={exploreStore.explores}
          title={exploreStore.title}
        />
      </section>
      <section>
        <CategorySection categories={productsByCategory} />
      </section>
    </div>
  );
}

export default ShoppingStore;
