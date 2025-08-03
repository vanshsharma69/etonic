import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CategorySection from '../components/CategorySection'
import ExploreProducts from '../components/ExploreProducts'
import FlashSale from '../components/FlashSale'
import BestSelling from '../components/BestSelling'
import BuySellChoice from '../components/BuySellChoice'
import HeaderCta from '../components/HeaderCta'

const BuySell = () => {
  return (
    <div>
      <HeaderCta></HeaderCta>
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
