import React from 'react'
import ProductImage from '../components/ProductImage'
import Text from '../components/Text'
function ExploreProductList({BoysListProducts}) {
console.log(BoysListProducts)
  return (
    <>
    <div>
    {
       BoysListProducts.map((product)=>{
         return (
            <div>
            <ProductImage src={product.image}/>
            <Text text={product.title}/> 
            </div>   
            )
        })
    }
    </div>
   </>
  )
}
export default ExploreProductList

