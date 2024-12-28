import React, { useEffect, useState } from 'react'
import ProductImage from '../../../components/ProductImage';
import Text from '../../../components/Text';
import "./style.css"
import { Link } from 'react-router-dom';
function MainComponentOfHomePage() {
    const [firstPageData,setFirstPageData]=useState(null);
    useEffect(()=>{
        fetch("HomePageData1.json").then((response)=>response.json())
        .then((data)=>{
            setFirstPageData(data) 
        })
    },[])

    if(firstPageData == null){
        return null
    }
  return (
    <>
    {
        firstPageData.map((homeData)=>{
            
            return (
                <div>
                <div className='heroimg'>
              <ProductImage src={homeData.heroImg} style={{width:'100%',height:'260px'}}/>
                </div>
                <div className='mainSection'>
            
                <div className='firstsec'>
            <Text text={homeData.mainSection.weddingpara}/>
            </div>
           
            <div className='secondsec'>
          {
            homeData.mainSection.shopingstore.map((shopingproducts)=>{
                 return (
                    <Link to={`/shopingStore/${shopingproducts.id}`}> 
                    <ProductImage src={shopingproducts.img}  style={{width: "350px",height: "350px",marginTop: "10px", marginLeft: "35px" }}/>
                   </Link>
                )
            })
          }
           
            </div>
            <div className='thirdSec'>
            <Text text={homeData.mainSection.timepara.para1}/>
            <b><Text text={homeData.mainSection.timepara.para2}/></b>
            <Text text={homeData.mainSection.timepara.para3}/>
            </div>
            <div className='fourthsec'>
            <ProductImage src={homeData.mainSection.offerImage} style={{width:"100%"}}/>
            </div>
                </div>
                
                <div className='shopsection1'>
             {
                homeData.shopSection.map((shopdata)=>{
                    
                    return (
                        <div>
                        <Link to={`/shopsection1route/${shopdata.id}`}>
                        <ProductImage src={shopdata.img} style={{height:"280px",width:"300px",marginLeft:"8px"}}/>
                        </Link>
                        </div>
                    )
                })
             }   
              
                </div>
                <div>
                <ProductImage src={homeData.heroimage2} style={{height:"300px",width:"100%",marginTop:"40px",marginLeft:"10px"}}/>
             </div > 
             <div className='shopsection2'>
             {
                homeData.shopSection2.map((shopdata)=>{
                    
                    return (
                        <div>
                        <ProductImage src={shopdata.img} style={{height:"200px",width:"170px",marginLeft:"8px"}}/>
                        </div>
                    )
                })
             }
             </div>
                </div>
            )
      
        
        })
    }
  
    </>
  )
}

export default MainComponentOfHomePage