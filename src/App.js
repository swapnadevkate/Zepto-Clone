import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import Herosection from "./HeroImages/Herosection";
import MainSection from "./MainSection/MainSection";
import ShopSection from "./ShopSection/ShopSection";
import HeroSection2 from "./HeroImages/HeroSection2";
import ShopSection2 from "./ShopSection/ShopSection2";
import NewInStore from "./NewInStore/NewInStore";
import GrocerryAndKitchen from "./NewInStore/GrocerryAndKitchen";
import WomensCorner from "./ShopingCorner/WomensCorner";
import MensCorner from "./ShopingCorner/MensCorner";
import GiftingSpecials from "./ShopingCorner/GiftingSpecials";
import ShowCartProduct from "./ShowCartProduct/ShowCartProduct";

import { Route, Routes } from "react-router-dom";
import DataContext from "./DataContext/DataContext";
const cartReducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};
function App() {
  const InitialState = { count: 0 };
  const [state, dispatch] = useReducer(cartReducer, InitialState);
  return (
    <>
      <DataContext.Provider value={{ state, dispatch }}>
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

          <Route
            path="/ShowCartProduct/ShowCartProduct"
            element={<ShowCartProduct />}
          />

          {/* <Route path="/shopingCorner/MensCorner" element={<MensCorner />} />
        <Route path="/shopingCorner/GiftingSpecials" element={<GiftingSpecials/>} /> */}
        </Routes>
      </DataContext.Provider>
    </>
  );
}

export default App;
