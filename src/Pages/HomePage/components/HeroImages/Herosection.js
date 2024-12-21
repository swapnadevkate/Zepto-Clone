import React from 'react'
import paan from '../../../../Images/paan-corner-desktop.webp'
import './Heroimg.css'
function Herosection() {
  return (
    <>
    <div id='heroimg'>
        <img src={paan} style={{width:'100%',height:'250px'}}></img>
    </div>
    </>
  )
}

export default Herosection