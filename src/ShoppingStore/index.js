import React from "react";
import { useParams } from "react-router-dom";

import ProductImage from "../components/ProductImage";
import ProductSection from "../components/ProductSection";
import CategorySection from "../components/CategorySection";
import shopppingStore from "./dataStore";   //imporeted shoping store data from datastore
import ExploreGiftingStore from "../ExploreGiftingStore";
import "./shoppingStore.css";

/*
 *
 * based on the params id get the data of the page
 *
 * For Example pageId is womensCorner
 *
 *  shopppingStore = {
 *      womensStore = {},
 *      mensStore = {},
 *      gifitingSpecialStore = {}
 *  }
 *
 */

//  *********************************************************

// To Do Tommorrows
//  Re-usable Component from url : https://www.zeptonow.com/pip/Toy/14772
//  Fix CSS for this image using classes instead of using from JS
// 3 re-usable components

function ShoppingStore() {
  const { id } = useParams();
  const store = shopppingStore[id];

  const recommendedProducts = store.recommendedProducts;
  const productsByCategory = store.productsByCategory;
  const exploreStore = store.exploreStore

  return (
    <div>
      <section style={{ textAlign: "center", marginTop: "100px" }}>
        <ProductImage
          src={store.hemorImageUrl}
          style={{ height: "600px", width: "600px" }}
        />
      </section>
      <section style={{ marginTop: "100px", marginBottom: "200px" }}>
        {recommendedProducts.map((productData) => {
          return (
            <ProductSection productData={productData} btnText={"Add To Cart"} />
          );
        })}
      </section>
      <section>
      <ExploreGiftingStore explores={exploreStore.explores} title={exploreStore.title}/>
      </section>
      <section>
        <CategorySection categories={productsByCategory} />
      </section>
    </div>
  );
}

export default ShoppingStore;
