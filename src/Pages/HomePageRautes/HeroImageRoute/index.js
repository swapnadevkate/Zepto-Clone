import React, { useState,useEffect } from 'react'
import HeroImageCategoryList from './HeroImgCategoryList'
import HeroImageSubCategoryList from './HeroImgSubCategoryList'
import "./style.css"
function HeroImageRoute() {
  const [arreyitems,setArreyItems]=useState(null)

 const [imgdata,setImgData]=useState(0)
 const clickHandler =(categoryIndex)=>{
  setImgData(categoryIndex)
  
 }
    useEffect(()=>{
           fetch('/HeroImageRoute.json').then((response)=>response.json())
           .then((data)=>{
            setArreyItems(data)
             
           })
       },[])

  if(arreyitems == null){
    return null
  }
 
  return (
    <>
    <div className='overallData'>
    <HeroImageCategoryList clickHandler={clickHandler} arreyitems={arreyitems} imgdata={imgdata}/>
    <HeroImageSubCategoryList arreyitems={arreyitems} imgdata={imgdata}/>
    </div>
    </>
  )
}

export default HeroImageRoute