import React from 'react';
import Hero from '../components/pg/Hero';
import PgList from '../components/pg/PgList';
import Features from '../components/pg/Features';
import Footer from '../components/Footer';
import HeaderCta from '../components/HeaderCta';
import Navbar from '../components/Navbar';

const Pg = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
    <HeaderCta></HeaderCta>
    <Navbar></Navbar>
      <Hero />
      <Features />
      <PgList />
      <Footer />
    </div>
  );
};

export default Pg;
