import React from 'react';
import { FaShippingFast, FaHeadphonesAlt, FaShieldAlt } from 'react-icons/fa';

const Support = () => {
  const items = [
    {
      icon: <FaShippingFast size={28} className="text-white" />,
      title: "FREE AND FAST DELIVERY",
      subtitle: "Free delivery for all orders over $140",
    },
    {
      icon: <FaHeadphonesAlt size={28} className="text-white" />,
      title: "24/7 CUSTOMER SERVICE",
      subtitle: "Friendly 24/7 customer support",
    },
    {
      icon: <FaShieldAlt size={28} className="text-white" />,
      title: "MONEY BACK GUARANTEE",
      subtitle: "We return money within 30 days",
    },
  ];

  return (
    <div className="flex justify-center gap-20 max-w-6xl mx-auto mt-20 mb-20 ">
      {items.map((item, index) => (
        <div key={index} className="text-center max-w-xs">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-black flex items-center justify-center border-4 border-gray-300">
            {item.icon}
          </div>
          <h3 className="font-bold text-sm sm:text-base">{item.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{item.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Support;
