import React from 'react'
import ExploreProductList from '../ExploreProductList'
import { useParams } from 'react-router-dom'
import  {productListData}  from '../ProductListData'
function ShowPathOfExploreProductList() {
    const {id}=useParams()
    const store = productListData[id]
   
    
    
  return (
    
    <>
{/* <ExploreProductList products={productListData.boys} btnText={'AddtoCart'}/> */}
<ExploreProductList products={store} btnText={'AddtoCart'}/>

    </>
  )
}

export default ShowPathOfExploreProductList
