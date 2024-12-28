import React, { useReducer } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import DataContext from "./context//DataContext/DataContext";
import HomePageRautes from "./Pages/HomePageRautes";
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
        <HomePageRautes />
      </DataContext.Provider>
    </>
  );
}
export default App;
