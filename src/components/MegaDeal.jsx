import React, { useEffect, useState, useRef } from 'react';
import soundbox from "../assets/images/soundbox.png";

const getTimeLeft = (targetDate) => {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' };

  const days = String(Math.floor(diff / (1000 * 60 * 60 * 24))).padStart(2, '0');
  const hours = String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0');
  const minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
  const seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');
  return { days, hours, minutes, seconds };
};

const MegaDeal = () => {
  const dealEndRef = useRef(new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)); // 5 days from now
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(dealEndRef.current));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(dealEndRef.current));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white p-10 flex flex-col lg:flex-row items-center justify-between shadow-xl max-w-6xl mx-auto mt-20 mb-10">
      
      {/* Left Side - Countdown & Text */}
      <div className="space-y-6 max-w-md text-center lg:text-left mb-10 lg:mb-0">
        <p className="text-yellow-500 font-bold text-6xl md:text-7xl">Mega Deal</p>
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-4">
          Enhance Your <br /> Music Experience
        </h1>

        {/* Countdown Timer */}
        <div className="flex justify-center lg:justify-start space-x-4">
          {[
            { time: timeLeft.days, label: 'Days' },
            { time: timeLeft.hours, label: 'Hours' },
            { time: timeLeft.minutes, label: 'Minutes' },
            { time: timeLeft.seconds, label: 'Seconds' },
          ].map((item, i) => (
            <div key={i} className="bg-white text-black rounded-full px-4 py-2 text-center min-w-[60px]">
              <p className="text-xl font-bold">{item.time}</p>
              <p className="text-xs">{item.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-green-500 text-white font-bold px-8 py-3  hover:bg-green-600 transition duration-300">
          Buy Now!
        </button>
      </div>

      {/* Right Side - Product Image */}
      <div className="flex-shrink-0">
        <img src={soundbox} alt="Soundbox" className="w-[300px] md:w-[400px] lg:w-[500px] object-contain" />
      </div>
    </div>
  );
};

export default MegaDeal;
