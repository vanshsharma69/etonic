import React from 'react';
import { MapPin } from 'lucide-react';

const PgCard = ({ title, location, price, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-100">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute bottom-3 left-3 bg-white/80 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
          Featured
        </div>
      </div>

      <div className="p-5">
        <h3 className="font-semibold text-xl text-gray-800 truncate">{title}</h3>

        <div className="flex items-center text-gray-500 text-sm mt-2">
          <MapPin className="w-4 h-4 mr-1 text-indigo-500" />
          <span>{location}</span>
        </div>

        <p className="text-indigo-600 text-lg font-bold mt-3">₹{price} / month</p>

        <button
          className="mt-5 w-full bg-indigo-600 text-white py-2 rounded-xl text-sm font-medium hover:bg-indigo-700 transition"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default PgCard;
