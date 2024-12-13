import React, { useContext, useState } from "react";
import "./Button.css";
import DataContext from '../DataContext/DataContext'
function Button({ products }) {
  const {state,dispatch}=useContext(DataContext)
 
  return (
    <>
      <div id="facumakeupBox">
        {products.map((e) => {
          console.log(e);
          return (
            <div key={e.id} class="button1">
              <img src={e.img} id="imgid"></img>
              <p>{`${e.para}`}</p>
              <p>{`${e.quantity}`}</p>
              <p id="pricepara">
                <b>${`${e.price}`} </b>
                <span id="pricespan">$1000</span>
              </p>
              <button id="buynowbtn" onClick={() => dispatch({ type: "Increment" })}>{`${e.button}`}</button>  
                       
</div>
          );
        })}
      </div>

     
    </>
  );
}
export default Button;
