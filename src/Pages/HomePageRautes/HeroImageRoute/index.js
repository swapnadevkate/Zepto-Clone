import React from 'react'
import HeroImageCategoryList from './HeroImgCategoryList'
import HeroImageSubCategoryList from './HeroImgSubCategoryList'
import "./style.css"
function HeroImageRoute() {
  return (
    <>
    <div className='overallData'>
    <HeroImageCategoryList/>
    <HeroImageSubCategoryList/>
    </div>
    </>
  )
}

export default HeroImageRoute