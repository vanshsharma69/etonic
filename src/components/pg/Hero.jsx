import React from 'react';
import { BedDouble } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-cover bg-center bg-no-repeat py-28" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1600&q=80')` }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 text-center text-white">
        <div className="flex flex-col items-center gap-6">
          <BedDouble size={56} className="text-yellow-400 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find Your Perfect <span className="text-yellow-400">PG Stay</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl text-white/90">
            Safe, affordable, and comfortable PGs across India — all in one place. Book now and move in stress-free!
          </p>
          <button className="mt-6 bg-yellow-300 text-black px-6 py-3 rounded-xl text-lg font-semibold hover:bg-yellow-400 transition">
            Explore PGs
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
