import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategorySection from '../components/CategorySection'
import ExploreProducts from '../components/ExploreProducts'
import FlashSale from '../components/FlashSale'
import BestSelling from '../components/BestSelling'
import BuySellChoice from '../components/BuySellChoice'

const BuySell = () => {
  return (
    <div>
      <Navbar></Navbar>
      <BuySellChoice></BuySellChoice>
      <FlashSale></FlashSale>
      <CategorySection></CategorySection>
      <BestSelling></BestSelling>
      <ExploreProducts></ExploreProducts>
      <Footer></Footer>
    </div>
  )
}

export default BuySell
