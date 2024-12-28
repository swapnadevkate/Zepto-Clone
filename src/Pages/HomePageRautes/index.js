import React from "react";
import HomePage from "../HomePage";
import ShoppingStore from "../ShoppingStore";
import ShowCartProduct from "../ShowCartProduct/ShowCartProduct";

import { Route, Routes } from "react-router-dom";
import ShowPathOfExploreProductList from "../../ExploreGiftingStore/ShowPathOfExploreProductList";
import SidebarParent from "../../GroceryAndKitchen/SidebarParent";
import HomePageRouteCategoryList from "../HomePage/components/CategoryList/HomePageRouteCategoryList";
import ShopSection1Route from "./ShopSection1Route";
function HomePageRautes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shopingStore/:id" element={<ShoppingStore />} />
        <Route
          path="/ShowCartProduct/ShowCartProduct"
          element={<ShowCartProduct />}
        />
        <Route
          path="/ExploreGiftingStore/:id"
          element={<ShowPathOfExploreProductList />}
        />
        <Route path="/ProductsRoute/:id" element={<SidebarParent />} />
        <Route
          path="/HomePageCategoryList/:id"
          element={<HomePageRouteCategoryList />}
        />
        <Route path="/shopsection1route/:id" element={<ShopSection1Route/>}/>
      </Routes>
    </>
  );
}

export default HomePageRautes;
