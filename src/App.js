import React from 'react'
import './App.css'
import Navbar from './Navbar/Navbar'
import Herosection from './HeroImages/Herosection'
import MainSection from './MainSection/MainSection'
import ShopSection from './ShopSection/ShopSection'
import HeroSection2 from './HeroImages/HeroSection2'
import ShopSection2 from './ShopSection/ShopSection2'
import NewInStore from './NewInStore/NewInStore'
import GrocerryAndKitchen from './NewInStore/GrocerryAndKitchen'

function App() {
  return (
    <>
    <Navbar></Navbar>
    <Herosection></Herosection>
    <MainSection></MainSection>
    <ShopSection></ShopSection>
    <HeroSection2></HeroSection2>
    <ShopSection2></ShopSection2>
    <NewInStore></NewInStore>
    <GrocerryAndKitchen></GrocerryAndKitchen>
    </>
  )
}

export default App