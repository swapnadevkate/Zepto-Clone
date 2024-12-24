import React, { useEffect, useState } from 'react'
import ProductImage from '../../../../../components/ProductImage'
import Text from '../../../../../components/Text'
import { Link } from 'react-router-dom'
import "./style.css"
function HomePageCategoryList() {
    const [groceryImg,setGroceryImg]=useState([])
    useEffect(()=>{
        fetch('/CategoryList.json').then((response)=>response.json())
        .then((data)=>{
          setGroceryImg(data)
          
        })
    },[])
  return (
    <>
    <div className='GroceryAndKitchenProducts'>
    {
      groceryImg.map((product)=>{
        

      return (
        <div className='GroceryAndKitchen'>
     <h3>{product.categoryName}</h3> 
      
      <div className='productsDiv'>
      {
        
        product.subbCategories.map((subProduct)=>{
          console.log("json data is ",subProduct)
          return(
            
           
              <div className='imgProduct'>
              <Link to={`/HomePageCategoryList/${subProduct.id}`}>
              <ProductImage src={subProduct.image}/>
              <Text text={subProduct.title}/>
              </Link>
              </div>
              

          )
        })
       
      }
      </div>
      </div>
      )
      })
    }
   </div>
    </>
  )
}

export default  HomePageCategoryList