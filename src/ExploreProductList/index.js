import React, { useState } from 'react'
import ProductImage from '../components/ProductImage'
import Text from '../components/Text'
import Button from '../components/Button'
import DataContext from "../DataContext/DataContext";
import { useContext } from 'react';


import './style.css'

function ExploreProductList({products,btnText}){
  const {state,dispatch} = useContext(DataContext)
const clickHandler = (product)=>{
  dispatch({ type: "Increment" })
}
  return (
    <>
  <div>{products.boys.title}</div>
    <div className='ExploreProductList'>
    {
      products.boys.boysData.map((product)=>{
           return (
        <div className='productList' >
        
        
         <ProductImage src={product.image} style={{width:"100px"}}/>
            <Text text={product.title}/> 
            <Text text={product.quantity}/> 
            <Text text={product.price}/> 
            <Button text={btnText} className="customBtn" onclick={()=>{clickHandler(product)}}/>
            </div>  
         
            )
        })
       
    }
    </div>
    <div>{state.count}</div>
   </>
  )
}
export default ExploreProductList

