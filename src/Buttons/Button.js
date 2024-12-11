import React, { useState } from "react";
import "./Button.css";
import { CiPlay1 } from "react-icons/ci";

function Button({ products }) {
  return (
    <>
      <div id="facumakeupBox">
        {products.map((e) => {
          return (
            <div key={e.id} class="button1">
              <img src={e.img} id="imgid"></img>
              <p>{`${e.para}`}</p>
              <p>{`${e.quantity}`}</p>
              <p id="pricepara">
                <b>${`${e.Price}`} </b>
                <span id="pricespan">$1000</span>
              </p>
              <button id="buynowbtn">{`${e.button}`}</button>
            </div>
          );
        })}
      </div>

     
    </>
  );
}
export default Button;
//1. arrey of objects to store the data
//2.import data and iterate it using map