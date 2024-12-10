import React, { useState } from "react";
import wedding from "./../Images/3e269f2a-3ca1-46cf-9790-9c0d34cbb0c7.webp";
import txt from "./../Images/cdf23ebc-17c2-4553-b7f3-220d384f8de4.webp";
import buystext from "./../Images/b741f5f6-d36b-4601-bad4-1fa49edb1c9d.jpeg";
import eylash from './../Images/430ee56e-53b6-4e8f-8c40-83a53c52c4c9.webp';
import lipstik from './../Images/6d6b870e-9a0a-4863-85a3-6b31cd8f2a7d.webp';
import facemakeup from './../Images/7ea2c23f-6cdb-485e-9b70-a6f9e7a360c8.webp'
import nailpaint from './../Images/3aa09ea5-7b25-455d-8a75-0993d9db9ac9.webp'
import lotion from './../Images/e22e51e9-6044-4df9-a3ff-d2867a9cb388.webp'
import chain from './../Images/847c4152-85c0-4216-b822-edce30cdd099.webp'
import fragrances from './../Images/938a5e51-b290-414a-bc7d-35e1fd98b005.webp'
import dress from './../Images/86187e56-dbae-40a9-b228-b9ed552b4c16.webp'
import cream from './../Images/b8cf1a54-1a74-406a-81ca-041a5a22fb1e.webp'
import lipbulm from './../Images/c37e13ce-9bd7-4010-9cff-e65a4c184d3c.webp'
import shadow from './../Images/24a5549d-143a-4da8-adaa-8d413dc12d15.webp'
import sugar from './../Images/c1d2f621-151f-4bd9-8aae-f88e9196a9f6.webp'
import venus from './../Images/b793bd4e-5fa2-44ee-b11d-d513df4e2c81.webp'
import "./WomensCorner.css";
import Button from "../Buttons/Button";

function WomensCorner() {
  const [showbtn, setShowbtn] = useState(false);
const arr = [
  {
    id : 1,
    name:"Facemakeup",
    img:cream
  },
  {
    id : 2,
    name:"Lipsticks",
    img :lipbulm
  },
  {
    id:3,
    name:"Eyemakeup",
    img :shadow
  },
  {
    id : 4,
    name:"NailPaint &more",
    img:sugar
  },
  {
    id : 5,
    name:"skincare",
    img:venus
  }
]
  const btnHandler = () => {
    setShowbtn(!showbtn);
  };
  return (
    <>
      <div>
        <img src={wedding} style={{ height: "900px", width: "100%" }}></img>
      </div>
      <div>
        <img src={txt} style={{ height: "130px" }}></img>
      </div>
      <div id="shopByCategories">
        <div class="shopByCategory">
          <img src={eylash } style={{height:"200px",width:"140px"}}></img>
        </div>
        <div class="shopByCategory">
        <img src={lipstik} style={{height:"200px",width:"140px"}}></img>

        </div>
        <div class="shopByCategory">
        <img src={facemakeup} style={{height:"200px",width:"140px"}}></img>

        </div>
        <div class="shopByCategory">
        <img src={nailpaint} style={{height:"200px",width:"140px"}}></img>

        </div>
        <div class="shopByCategory">
        <img src={lotion} style={{height:"200px",width:"140px"}}></img>

        </div>
        <div class="shopByCategory">
        <img src={chain} style={{height:"200px",width:"140px"}}></img>

        </div>
        <div class="shopByCategory">
        <img src={fragrances} style={{height:"200px",width:"140px"}}></img>

        </div>
        <div class="shopByCategory">
        <img src={dress} style={{height:"200px",width:"140px"}}></img>

        </div>
      </div>
      <div>
        <img
          src={buystext}
          style={{ height: "150px", marginLeft: "250px" }}
        ></img>
      </div>

      <div id="makeupCategories">

      
        {
            arr.map((value)=>{
             
              return (
                <button class="makeupCategory" onClick={btnHandler} >
                <img src={`${value.img}`}
                  style={{ height: "50px", width: "45px"}}
                ></img>
                 <div class="span">
                      <span>{`${value.name}`}</span>
                    </div>
                
              </button>
              )
            })
          }
        {showbtn && (
        <div class='faceMakeup'>
            <Button></Button>
          </div>
        )}

        
      </div>
    </>
  );
}

export default WomensCorner;
