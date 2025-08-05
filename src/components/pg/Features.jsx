import React from 'react';
import { ShieldCheck, Wifi, Utensils } from 'lucide-react';

const Features = () => {
  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        <div>
          <ShieldCheck className="mx-auto mb-4" size={40} />
          <h4 className="font-semibold text-xl">Verified Listings</h4>
          <p className="text-sm text-gray-500 mt-2">Every PG is verified for safety & authenticity.</p>
        </div>
        <div>
          <Wifi className="mx-auto mb-4" size={40} />
          <h4 className="font-semibold text-xl">Free Wi-Fi</h4>
          <p className="text-sm text-gray-500 mt-2">All PGs provide free high-speed internet.</p>
        </div>
        <div>
          <Utensils className="mx-auto mb-4" size={40} />
          <h4 className="font-semibold text-xl">Delicious Meals</h4>
          <p className="text-sm text-gray-500 mt-2">Enjoy hygienic, home-like food daily.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
