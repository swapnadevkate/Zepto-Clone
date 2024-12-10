import React from 'react'
import logo from './../Images/1_pLWzkNcNhYhL-QvpjOwvAg.jpg'
import { AiOutlineMonitor } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <>
     {/* <nav>
      <ul>
        <li><Link to="/">HeroSection</Link></li>
        <li><Link to="/main">Main</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/hero2">Hero Section 2</Link></li>
        <li><Link to="/shop2">Shop Section 2</Link></li>
        <li><Link to="/newStore">New In Store</Link></li>
        <li><Link to="/grocery">Grocery and Kitchen</Link></li>
      </ul>
    </nav> */}
    <div id='navbar'>
        <div id='nav-logo'>
            <img src={logo} style={{height:'60px', width:"140px"}}></img>
        </div>
    <div id='localtion'>
      <div id='dtime'>
        <p>Delivery in 8 Mins</p>
      </div>
      <div id='current-location'>
        <p>Chandra lsayout, bcc layout mico..</p>
        <select style={{height:"20px"}}>
            <option></option>
        </select>
      </div>
    </div>
    <div id='search'>
    <div id='search-icon'>
    <AiOutlineMonitor/>
    </div>
    <div id='search-input'>
    <input type='search' placeholder='search for...' style={{width:'470px', height:'40px',border: 'none'}}/>
    </div>
      </div>
      <div id='login'>
     <BiUserCircle />
       </div>
       <div id='cart'>
       <AiOutlineShoppingCart />
       </div>
    </div>
    </>
  )
}

export default Navbar