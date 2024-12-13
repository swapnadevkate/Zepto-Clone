import React, { useState } from 'react'
import Button from "../Buttons/Button";
import menweding from "./../Images//fb141278-29df-4dcf-9b4a-f8f4c60015e7.webp";

import {shavingCreamData,beardOilData,hairGelData ,deodorantData,sunscreenData} from '../Productdata/MensProductData'
function MensCorner() {
  const [productdata,setProductData]=useState(null)
  const activeProducts1 = []
  if(productdata == 1) activeProducts1=shavingCreamData
  if(productdata == 2) activeProducts1=beardOilData
  if(productdata == 3) activeProducts1=hairGelData
  if(productdata == 4) activeProducts1=deodorantData
  if(productdata == 5) activeProducts1=sunscreenData

  const arr = [
    { id: 1, name: "shavingCream" },
    { id: 2, name: "beardOil" },
    { id: 3, name: "hairGel" },
    { id: 4, name: "deodorant"  },
    { id: 5, name: "sunscreen" }
  ];
  const clickHandler=(id)=>{
    setProductData(id)
  }
  return (
    <>
    <div>
        <img src={menweding} style={{ height: "900px", width: "100%" }}></img>
      </div>
    <div id='menscategories'>

    
    {
      arr.map((e)=>{
        return (
          <button onClick={()=>clickHandler(e.id)}>
            <span>{e.name}</span>
          </button>
        )
      })
    }
    {productdata &&  (
        <div class='mensMakeup'>
            <Button products={activeProducts1}></Button>
          </div>
        )}
    </div>
    </>
  )
}

export default MensCorner