import React from "react";

import Herosection from "./../HeroImages/Herosection";
import MainSection from "./../MainSection/MainSection";
import ShopSection from "./../ShopSection/ShopSection";
import HeroSection2 from "./../HeroImages/HeroSection2";
import ShopSection2 from "./../ShopSection/ShopSection2";
import NewInStore from "./../NewInStore/NewInStore";
import GrocerryAndKitchen from "./../NewInStore/GrocerryAndKitchen";

import './style.css'

function HomePage() {
  return (
    <>
      <Herosection />
      <MainSection />
      <ShopSection />
      <HeroSection2 />
      <ShopSection2 />
      <NewInStore />
      <GrocerryAndKitchen />
    </>
  );
}

export default HomePage;
