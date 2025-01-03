import React, { useContext } from "react";

import { AiOutlineMonitor } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import DataContext from "../../context/DataContext/DataContext";

import { Link, useNavigate } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  const { state, dispatch } = useContext(DataContext);
  const navigate = useNavigate();
  
  const cartHandler = () => {
    navigate("/Pages/ShowCartProduct/ShowCartProduct");
  };
  return (
    <>
      <div id="navbar">
        <div id="nav-logo">
          <img src={'/Images/1_pLWzkNcNhYhL-QvpjOwvAg.jpg'} style={{ height: "60px", width: "140px" }}></img>
        </div>
        <div id="localtion">
          <div id="dtime">
            <p>Delivery in 8 Mins</p>
          </div>
          <div id="current-location">
            <p>Chandra lsayout, bcc layout mico..</p>
            <select style={{ height: "20px" }}>
              <option></option>
            </select>
          </div>
        </div>
        <div id="search">
          <div id="search-icon">
            <AiOutlineMonitor />
          </div>
          <div id="search-input">
            <input
              type="search"
              placeholder="search for..."
              style={{ width: "470px", height: "40px", border: "none" }}
            />
          </div>
        </div>
        <div id="login">
          <BiUserCircle />
        </div>
        <div
          id="cart"
          onClick={cartHandler}>
          <AiOutlineShoppingCart />
          <span id="cartspan">{state.count}</span>
         
        </div>
        
      </div>
    </>
    
  );
 
}

export default Navbar;
