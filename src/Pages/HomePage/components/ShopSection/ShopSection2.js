import React from 'react'
import fruits from '../../../../Images/4d5def35-0b1d-40ac-a5ed-0f1d1c27b9aa.webp'
import graphs from '../../../../Images/8bcd0dea-f1d9-4a3a-9678-0e7d3823e578.png'
import cali from '../../../../Images/e6f4bf74-cb7d-430f-a546-f3ad7b818a92.webp'
import papai from '../../../../Images/682e7730-d5ca-4c80-9920-4bbc41d4d26e.png'
import avacado from '../../../../Images/da12777a-3838-4ea2-95ac-3b2b2a0e1bbe.webp'
import sambar from '../../../../Images/b831f429-7738-434b-98c1-53d5be45474d.png'
import pomo from '../../../../Images/973b0d4f-4774-4692-ace1-fe47d79d7e4b.png'
import './ShopSection2.css'
function ShopSection2() {
  return (
   <>
   <div id='ssec2'>
   <div class='shopbox1'>
<img src={fruits} style={{width:"150px",height:'200px'}}></img>
   </div>
   <div class='shopbox1'>
   <img src={graphs} style={{width:"150px",height:'200px'}}></img>

   </div>
   <div class='shopbox1'>
   <img src={cali} style={{width:"150px",height:'200px'}}></img>

   </div>
   <div class='shopbox1'>
   <img src={papai} style={{width:"150px",height:'200px'}}></img>

   </div>
   <div class='shopbox1'>
   <img src={avacado} style={{width:"150px",height:'200px'}}></img>

   </div>
   <div class='shopbox1'>
   <img src={sambar} style={{width:"150px",height:'200px'}}></img>

   </div>
   <div class='shopbox1'>
   <img src={pomo} style={{width:"150px",height:'200px'}}></img>

   </div>
   </div>
   </>
  )
}

export default ShopSection2