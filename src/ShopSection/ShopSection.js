import React from 'react'
import wintorpic from './../Images/d4d4c07d-b215-434e-ab5a-e5f65fb3c50d.webp'
import pepsi from './../Images/765633ad-5d14-448d-9bef-90171c9c26a6.webp'
import air from './../Images/132754f4-dca3-4c53-b554-335ad1115ca7.webp'
import veg from './../Images/0b900761-7e86-47c1-a016-e259cc10c8a8.webp'
import './ShopSection.css'
function ShopSection() {
  return (
    <>
    <div id='shopSection'>
        <div class='shopbox'>
<img src={wintorpic} style={{width:'300px',height:'200px'}}></img>
        </div>
        <div class='shopbox'>
        <img src={pepsi} style={{width:'300px',height:'200px'}}></img>

        </div>
        <div class='shopbox'>
        <img src={air} style={{width:'300px',height:'200px'}}></img>

        </div>
        <div class='shopbox'>
        <img src={veg} style={{width:'300px',height:'200px'}}></img>

        </div>
 </div>
    </>
  )
}

export default ShopSection