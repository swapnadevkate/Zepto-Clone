import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import Herosection from './HeroImages/Herosection';
import MainSection from './MainSection/MainSection';
import ShopSection from './ShopSection/ShopSection';
import HeroSection2 from './HeroImages/HeroSection2';
import ShopSection2 from './ShopSection/ShopSection2';
import NewInStore from './NewInStore/NewInStore';
import GrocerryAndKitchen from './NewInStore/GrocerryAndKitchen';
import WomensCorner from './ShopingCorner/WomensCorner'; 
import MensCorner from './ShopingCorner/MensCorner'; 
import GiftingSpecials from './ShopingCorner/GiftingSpecials'; 

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Render all components on the home page */}
        <Route
          path="/"
          element={
            <>
              <Herosection />
              <MainSection />
              <ShopSection />
              <HeroSection2 />
              <ShopSection2 />
              <NewInStore />
              <GrocerryAndKitchen />
            </>
          }
        />
        <Route path="/shopingCorner/:id" element={<WomensCorner />} />
        {/* <Route path="/shopingCorner/MensCorner" element={<MensCorner />} />
        <Route path="/shopingCorner/GiftingSpecials" element={<GiftingSpecials/>} /> */}

      </Routes>
    </>
  );
}

export default App;
