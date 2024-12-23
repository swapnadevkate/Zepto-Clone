import React, { useEffect, useState } from 'react'
import ProductImage from '../../../../../components/ProductImage'
import Text from '../../../../../components/Text'
import Button from '../../../../../components/Button'
import "./style.css"
function HomePageRouteCategoryList() {
    const [productList,setProductList]=useState([])
    useEffect(()=>{
    fetch("/CategoryRouteList.json").then((response)=>response.json())
    .then((data)=>{
        setProductList(data)
    
    })
    },[])
  return (
    <>
    <div className="overallData">
  {productList.map((productsData) => {
    return (
      <div className='datalist'>
        <div className='categoryDataDiv'>
        <div key={productsData.categoryname} className="categoryData">
        <ProductImage src={productsData.CategoryImage} style={{height:"50px",width:"50px"}} />
        <Text text={productsData.categoryname} />
        </div>
    </div>
        <div className='subCategoryData'>
        {productsData.subCategories.map((data, index) => {
          console.log(data);
          return (
            <div key={index} className='actualproducts'>
              <ProductImage src={data.image} />
              <Text text={data.para} />
              <Text text={data.quantity} />
              <Text text={data.price} />
              <Button />
            </div>
          );
        })}
        </div>
      </div>
    );
  })}
</div>


    </>
  )
}

export default HomePageRouteCategoryList