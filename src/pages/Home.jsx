import React from 'react'
import HeaderCta from '../components/HeaderCta';
import Navbar from '../components/Navbar';
import FlashSale from '../components/FlashSale';
import CategorySection from '../components/CategorySection';
import BestSelling from '../components/BestSelling';
import MegaDeal from '../components/MegaDeal';
import ExploreProducts from '../components/ExploreProducts';
import Support from '../components/Support';
import Footer from '../components/Footer';
import ExploreOptions from '../components/ExploreOptions';
import PGPromoBanner from '../components/PGPromoBanner';


const Home = () => {
  return (
    <div>
        <HeaderCta />
        <Navbar />
        <ExploreOptions></ExploreOptions>
        <FlashSale />
        <CategorySection />
        <PGPromoBanner></PGPromoBanner>
        <BestSelling></BestSelling>
        <MegaDeal></MegaDeal>
        <ExploreProducts></ExploreProducts>
        <Support></Support>
        <Footer></Footer>
    </div>
  )
}

export default Home
