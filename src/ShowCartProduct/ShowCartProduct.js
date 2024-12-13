import React,{useContext} from 'react'
import DataContext from '../DataContext/DataContext'
import './ShowCartProduct.css'
function ShowCartProduct() {
  const {state,dispatch}=useContext(DataContext)

  return (
    <>
    <div id='cartDatadiv'>
      <h3>Items in Cart: {state.count}</h3>
     </div>
    </>
  )
}

export default ShowCartProduct