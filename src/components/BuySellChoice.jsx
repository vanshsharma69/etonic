import React from 'react';
import { UploadCloud } from 'lucide-react';

const BuySellChoice = ({ onSelect }) => {
  return (
    <div className="w-11/12 max-w-3xl mx-auto my-20 px-4 text-center">
      
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
        Looking to Sell Something?
      </h2>
      <p className="text-lg sm:text-xl text-gray-600 mb-12">
        Quickly list your products and connect with buyers in your community.
      </p>

      {/* Sell Card (no image) */}
      <div
        onClick={() => onSelect('sell')}
        className="border border-gray-300 rounded-2xl p-8 group cursor-pointer shadow-md hover:shadow-lg transition bg-white"
      >
        <div className="flex flex-col items-center text-center">
          <UploadCloud className="w-10 h-10 text-red-600 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Want to Sell?</h3>
          <p className="text-sm text-gray-600 mb-4">
            List your items effortlessly and reach interested buyers nearby.
          </p>
          <button className="text-sm bg-red-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-red-700 transition">
            Post Now
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default BuySellChoice;
