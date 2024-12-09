import React from 'react'
import doll from './../Images/31edb271-b2f6-4b12-8ba6-4a7843a95540.webp'
import speds from './../Images/9c15fd2c-b353-4188-8b58-89edeae30c25.webp'
import hedphone from './../Images/2ee60851-c4ba-464e-a965-f82fb607a940.webp'
import vessils from './../Images/0908a28b-713b-4d13-824b-0bbc5b2ebd1a.webp'
import makeup from './../Images/aa3ed677-6164-4c53-b660-f12bc13032eb.webp'
import './NewunStore.css'
function NewInStore() {
  return (
    <>
    <div id='newinstore'>
        <div id='storepara'>
            <p><b>New In Store</b></p>
        </div>
        <div id='storeboxes'>
            <div class='storebox1'>
                <img src={doll} style={{height:'200px',width:"300px"}}></img>
            </div>
            <div class='storebox1'>
            <img src={speds} style={{height:'200px',width:"300px"}}></img>

            </div>
            <div class='storebox'>
            <img src={hedphone} style={{height:'200px',width:"200px"}}></img>

            </div>
            <div class='storebox'>
            <img src={vessils} style={{height:'200px',width:"200px"}}></img>

            </div>
            <div class='storebox'>
            <img src={makeup} style={{height:'200px',width:"200px"}}></img>

            </div>
        </div>
    </div>
    
    </>
  )
}

export default NewInStore