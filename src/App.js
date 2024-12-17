import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./Navbar/Navbar";

import HomePage from "./HomePage";

import WomensCorner from "./ShopingCorner/WomensCorner";
import ShoppingStore from "./ShoppingStore";
import ShowCartProduct from "./ShowCartProduct/ShowCartProduct";
import DataContext from "./DataContext/DataContext";

import { Route, Routes } from "react-router-dom";
import ExploreProductList from "./ExploreProductList";
import ExploreGiftingStore from "./ExploreGiftingStore";
import ShowPathOfExploreProductList from "./ShowPathOfExploreProductList";
const cartReducer = (state, action) => {
  console.log("Reducer action:", action);
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
            element={<HomePage />}
          />
          <Route path="/shopingStore/:id" element={<ShoppingStore />} />
          <Route
            path="/ShowCartProduct/ShowCartProduct"
            element={<ShowCartProduct />}
          />
          <Route path="/ExploreGiftingStore/:id" element={<ShowPathOfExploreProductList/>} />

        </Routes>
      </DataContext.Provider>
    </>
  );
}
export default App;
