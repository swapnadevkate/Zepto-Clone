import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./Pages/HomePage";
import ShoppingStore from "./Pages/ShoppingStore";
import ShowCartProduct from "./Pages/ShowCartProduct/ShowCartProduct";
import DataContext from "./context//DataContext/DataContext";
import { Route, Routes } from "react-router-dom";
import ShowPathOfExploreProductList from "./ExploreGiftingStore/ShowPathOfExploreProductList";
import SidebarParent from "./GroceryAndKitchen/SidebarParent";
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
          <Route path="/" element={<HomePage />} />
          <Route path="/shopingStore/:id" element={<ShoppingStore />} />
          <Route path="/ShowCartProduct/ShowCartProduct" element={<ShowCartProduct />}/>
          <Route path="/ExploreGiftingStore/:id" element={<ShowPathOfExploreProductList />}/>
          <Route path="/ProductsRoute/:id" element={<SidebarParent />} />
        </Routes>
      </DataContext.Provider>
    </>
  );
}
export default App;
