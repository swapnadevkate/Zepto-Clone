import React, { useState } from "react";

import wedding from "./../Images/3e269f2a-3ca1-46cf-9790-9c0d34cbb0c7.webp";
import txt from "./../Images/cdf23ebc-17c2-4553-b7f3-220d384f8de4.webp";
import buystext from "./../Images/b741f5f6-d36b-4601-bad4-1fa49edb1c9d.jpeg";
import eylash from "./../Images/430ee56e-53b6-4e8f-8c40-83a53c52c4c9.webp";
import lipstik from "./../Images/6d6b870e-9a0a-4863-85a3-6b31cd8f2a7d.webp";
import facemakeup from "./../Images/7ea2c23f-6cdb-485e-9b70-a6f9e7a360c8.webp";
import nailpaint from "./../Images/3aa09ea5-7b25-455d-8a75-0993d9db9ac9.webp";
import lotion from "./../Images/e22e51e9-6044-4df9-a3ff-d2867a9cb388.webp";
import chain from "./../Images/847c4152-85c0-4216-b822-edce30cdd099.webp";
import fragrances from "./../Images/938a5e51-b290-414a-bc7d-35e1fd98b005.webp";
import dress from "./../Images/86187e56-dbae-40a9-b228-b9ed552b4c16.webp";
import cream from "./../Images/b8cf1a54-1a74-406a-81ca-041a5a22fb1e.webp";
import lipbulm from "./../Images/c37e13ce-9bd7-4010-9cff-e65a4c184d3c.webp";
import shadow from "./../Images/24a5549d-143a-4da8-adaa-8d413dc12d15.webp";
import sugar from "./../Images/c1d2f621-151f-4bd9-8aae-f88e9196a9f6.webp";
import venus from "./../Images/b793bd4e-5fa2-44ee-b11d-d513df4e2c81.webp";
import seeall from "./../Images/53dbb4ac-d4ba-4165-aa4d-e917e771c4e9.webp";
import perfum from "./../Images/85694e08-61e4-42b1-a37d-f06dd79f979c.webp";
import gillete from "./../Images/f9fe52f6-a24d-4b2d-a893-cee776a6cbc2.webp";
import oil from "./../Images/1f5e85fc-c353-4ac5-92ef-be3b29c004dc.webp";
import pears from "./../Images/0307c76d-f51c-446b-971b-67fa17dfbc0c.webp";
import deo from "./../Images/5f985218-821d-42b7-abe2-72d7e62eb959.webp";
import lasheild from "./../Images/080efcff-bf1e-471b-921e-9d777ad1489e.webp";
import mweding from "./../Images/fb141278-29df-4dcf-9b4a-f8f4c60015e7.webp";
import giftspecial from "./../Images/fb77320f-917d-403a-b4ae-d1135234e7cb.webp";

import "./WomensCorner.css";
import ProductTab from "../ShoppingStore/ProductTab";
import {
  facemakeupData,
  lipsticksData,
  eyemakeupData,
  nailpaintData,
  skincareData,
} from "../Productdata/ProductData";
import {
  shavingCreamData,
  beardOilData,
  hairGelData,
  deodorantData,
  sunscreenData,
} from "../Productdata/MensProductData";
import {
  giftSpecialsData1,
  giftSpecialsData2,
  giftSpecialsData3,
  giftSpecialsData4,
  giftSpecialsData5,
} from "../Productdata/GiftingSpecials";

import { useParams } from "react-router-dom";

function WomensCorner() {
  const [showbtn, setShowbtn] = useState(null);
  const { id } = useParams();
  console.log(id);
  let arrImg = [];
  if (id === "WomensCorner") {
    arrImg = [{ id: 1, img: wedding }];
  } else if (id == "MensCorner") {
    arrImg = [{ id: 2, img: mweding }];
  } else if (id == "GiftingSpecials") {
    arrImg = [{ id: 2, img: giftspecial }];
  }

  let arr = [];
  let arr1 = [];
  let arr2 = [];

  if (id === "WomensCorner") {
    arr = [
      { id: 1, name: "Facemakeup", img: cream },
      { id: 2, name: "Lipsticks", img: lipbulm },
      { id: 3, name: "Eyemakeup", img: shadow },
      { id: 4, name: "NailPaint & more", img: sugar },
      { id: 5, name: "Skincare", img: venus },
    ];
  } else if (id === "MensCorner") {
    arr1 = [
      { id: 1, name: "shavingCream", img: gillete },
      { id: 2, name: "beardOil", img: oil },
      { id: 3, name: "hairGel", img: pears },
      { id: 4, name: "deodorant", img: deo },
      { id: 5, name: "sunscreen", img: lasheild },
    ];
  } else if (id === "GiftingSpecials") {
    arr2 = [
      { id: 1, name: "celebration", img: perfum },
      { id: 2, name: "toys", img: perfum },
      { id: 3, name: "flowers", img: perfum },
      { id: 4, name: "books", img: perfum },
      { id: 5, name: "mobiles", img: perfum },
    ];
  }

  const btnHandler = (id) => {
    setShowbtn(id);
  };
  let activeProducts = [];

  // Set active product data based on the selected category
  if (showbtn === 1 && id === "WomensCorner") activeProducts = facemakeupData;
  if (showbtn === 2 && id === "WomensCorner") activeProducts = lipsticksData;
  if (showbtn === 3 && id === "WomensCorner") activeProducts = eyemakeupData;
  if (showbtn === 4 && id === "WomensCorner") activeProducts = nailpaintData;
  if (showbtn === 5 && id === "WomensCorner") activeProducts = skincareData;
  if (showbtn === 1 && id === "MensCorner") activeProducts = shavingCreamData;
  if (showbtn === 2 && id === "MensCorner") activeProducts = beardOilData;
  if (showbtn === 3 && id === "MensCorner") activeProducts = hairGelData;
  if (showbtn === 4 && id === "MensCorner") activeProducts = deodorantData;
  if (showbtn === 5 && id === "MensCorner") activeProducts = sunscreenData;
  if (showbtn === 1 && id === "GiftingSpecials")
    activeProducts = giftSpecialsData1;
  if (showbtn === 2 && id === "GiftingSpecials")
    activeProducts = giftSpecialsData2;
  if (showbtn === 3 && id === "GiftingSpecials")
    activeProducts = giftSpecialsData3;
  if (showbtn === 4 && id === "GiftingSpecials")
    activeProducts = giftSpecialsData4;
  if (showbtn === 5 && id === "GiftingSpecials")
    activeProducts = giftSpecialsData5;
  let shortImges = [];
  if (id === "WomensCorner") {
    shortImges = [{ img: eylash }];
  }
  return (
    <>
      <div>
        {id &&
          arrImg.map((e) => {
            return (
              <img src={e.img} style={{ height: "900px", width: "100%" }}></img>
            );
          })}
      </div>

      <div>
        <img src={txt} style={{ height: "130px" }}></img>
      </div>
      <div id="shopByCategories">
        <div class="shopByCategory">
          <img src={eylash} style={{ height: "200px", width: "140px" }}></img>
        </div>
        <div class="shopByCategory">
          <img src={lipstik} style={{ height: "200px", width: "140px" }}></img>
        </div>
        <div class="shopByCategory">
          <img
            src={facemakeup}
            style={{ height: "200px", width: "140px" }}
          ></img>
        </div>
        <div class="shopByCategory">
          <img
            src={nailpaint}
            style={{ height: "200px", width: "140px" }}
          ></img>
        </div>
        <div class="shopByCategory">
          <img src={lotion} style={{ height: "200px", width: "140px" }}></img>
        </div>
        <div class="shopByCategory">
          <img src={chain} style={{ height: "200px", width: "140px" }}></img>
        </div>
        <div class="shopByCategory">
          <img
            src={fragrances}
            style={{ height: "200px", width: "140px" }}
          ></img>
        </div>
        <div class="shopByCategory">
          <img src={dress} style={{ height: "200px", width: "140px" }}></img>
        </div>
      </div>

      <div id="makeupCategories">
        {id === "WomensCorner" &&
          arr.map((value) => {
            return (
              <button
                class="makeupCategory"
                onClick={() => btnHandler(value.id)}
              >
                <img
                  src={`${value.img}`}
                  style={{ height: "50px", width: "45px" }}
                ></img>
                <div class="span">
                  <span>{`${value.name}`}</span>
                </div>
              </button>
            );
          })}
        {id === "MensCorner" &&
          arr1.map((value) => {
            return (
              <button
                class="makeupCategory"
                onClick={() => btnHandler(value.id)}
              >
                <img
                  src={`${value.img}`}
                  style={{ height: "50px", width: "45px" }}
                ></img>
                <div class="span">
                  <span>{`${value.name}`}</span>
                </div>
              </button>
            );
          })}
        {id === "GiftingSpecials" &&
          arr2.map((value) => {
            return (
              <button
                class="makeupCategory"
                onClick={() => btnHandler(value.id)}
              >
                <img
                  src={`${value.img}`}
                  style={{ height: "50px", width: "45px" }}
                ></img>
                <div class="span">
                  <span>{`${value.name}`}</span>
                </div>
              </button>
            );
          })}
        {showbtn && (
          <div class="faceMakeup">
            <ProductTab products={activeProducts}></ProductTab>
          </div>
        )}
      </div>
      <div id="seeall">
        <img src={seeall} style={{ width: "100%", height: "200px" }}></img>
      </div>
    </>
  );
}

export default WomensCorner;
