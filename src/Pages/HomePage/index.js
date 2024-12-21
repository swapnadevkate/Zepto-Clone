import React from "react";
import Herosection from "./components/HeroImages/Herosection";
import MainSection from "./components/MainSection/MainSection";
import ShopSection from "./components/ShopSection/ShopSection";
import HeroSection2 from "./components/HeroImages/HeroSection2";
import ShopSection2 from "./components/ShopSection/ShopSection2";
import StoredShopingDataRoute from "../../GroceryAndKitchen/ProductsRoute";
import "./style.css";

function HomePage() {
  return (
    <>
      <Herosection />
      <MainSection />
      <ShopSection />
      <HeroSection2 />
      <ShopSection2 />
      <StoredShopingDataRoute />
    </>
  );
}

export default HomePage;
