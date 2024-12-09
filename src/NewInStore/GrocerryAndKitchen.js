import React from 'react'
import './GroceryAndKitchen.css'
import vegies from './../Images/2b5f2be5-cada-4cd7-b0af-e46c0c065f71.webp'
import bread from './../Images/4b28a9a2-8714-455c-ad17-fa765bbc3576.webp'
import fortune from './../Images/54dd01e1-2781-4a45-bc3a-ed53ebab9bd9.webp'
import meant from './../Images/9eda9af5-735b-4772-8e48-57f74e9d5547.webp'
import cornflakes from './../Images/ab241d87-da5b-4830-b38f-1a6cd30d0d41.webp'
function GrocerryAndKitchen() {
  return (
    <>
    <div id='grocery'>
  <div id='groceryPara'>
    <p><b>Grocery & Kitchen</b></p>
  </div>
  <div id='groceryBoxes'>
   <div class='groceryBox1'>
    <img src={vegies} style={{width:"300px",height:"200px"}}></img>
   </div>
   <div class='groceryBox'>
   <img src={bread} style={{width:"200px",height:"200px"}}></img>
   </div>
   <div class='groceryBox'>
   <img src={fortune} style={{width:"200px",height:"200px"}}></img>
   </div>
   <div class='groceryBox'>
   <img src={meant} style={{width:"200px",height:"200px"}}></img>
   </div>
   <div class='groceryBox'>
   <img src={cornflakes} style={{width:"200px",height:"200px"}}></img>
   </div>
  </div>
    </div>
    </>
  )
}

export default GrocerryAndKitchen