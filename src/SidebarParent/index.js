import React, { useEffect, useState } from 'react'
import StoredShopingDataUi from './../StoredShopingDataUi'

import { useParams } from 'react-router-dom'

function SidebarParent() {
    const {id} = useParams()
  //  const store = SideBarProductData[id]
   const [res,setRes]=useState([])
    useEffect(()=>{
   fetch('/DataOfShopingStored.json').then((response)=>response.json()).then((response)=>{
    console.log(response)
    setRes(response[id])
   })
    },[])
   
  return (
   <>
   <StoredShopingDataUi data={res}/>
   </>
  )
}

export default SidebarParent