import React from 'react';

const PGPromoBanner = () => {
  return (
    <div className="relative max-w-6xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-xl my-10">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80)' }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">
          Best PG for College Students
        </h2>
        <p className="text-white text-lg sm:text-xl mb-6">
          Affordable rooms, delicious meals, high-speed WiFi & 24/7 security.
        </p>
        <button className="bg-white text-black font-medium px-6 py-3 rounded-xl hover:bg-gray-200 transition">
          Explore Now
        </button>
      </div>
    </div>
  );
};

export default PGPromoBanner;
