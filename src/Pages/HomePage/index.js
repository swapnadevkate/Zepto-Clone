import React from "react";
import StoredShopingDataRoute from "../../GroceryAndKitchen/ProductsRoute";
import HomePageCategoryList from "./components/CategoryList/HomePageCategoryList"
import "./style.css";
import MainComponentOfHomePage from "./MainComponentOfHomePage";

function HomePage() {
  return (
    <>
     <MainComponentOfHomePage/>
     <StoredShopingDataRoute /> 
      <HomePageCategoryList/>
   </>
  );
}
export default HomePage;
