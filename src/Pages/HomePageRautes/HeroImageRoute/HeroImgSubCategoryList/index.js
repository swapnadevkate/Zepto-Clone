import React, { useState,useEffect, useContext } from 'react'
import ProductImage from '../../../../components/ProductImage'
import Text from '../../../../components/Text'
import Button from '../../../../components/Button'
import DataContext from '../../../../context/DataContext/DataContext'
import "./style.css"
function HeroImageSubCategoryList() {
  const {state,dispatch} = useContext(DataContext)
  const clickHandler =()=>{
    dispatch({type: 'Increment'})
  }
  const [imgSubdata,setImgSubData]=useState(null)
   useEffect(()=>{
          fetch('/HeroImageRoute.json').then((response)=>response.json())
          .then((data)=>{
            setImgSubData(data)
            
          })
      },[])
      if(imgSubdata==null){
        return null
      }
  return (
    <>
    <div className='heroimgsubcategory'>
    {
      imgSubdata.map((product)=>{
        return (
          product.subCategorylist.map((data)=>{
            return (
              <div className='productData'>
              <ProductImage src={data.image}/>
              <Text text={data.title}/>
              <Text text={data.quantity}/>
              <Text text={data.price}/>
             <Button text={"AddtoCart"} clickHandler={clickHandler}/>
              </div>
            )
          
          })
        )
      })
    }
    </div>
    </>
  )
}

export default HeroImageSubCategoryList