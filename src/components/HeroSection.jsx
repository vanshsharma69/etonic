import React from 'react'
import banner from "../assets/images/hero_banner.png";

const HeroSection = () => {
  return (
    <div>
      <div className='flex justify-center items-center w-11/12 mx-auto mt-10 mb-10'>
        <img src={banner} alt='Hero Banner'></img>
      </div>
    </div>
  )
}

export default HeroSection
