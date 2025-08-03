import React from 'react';
import { Truck, Clock3, ShieldCheck, ShoppingCart, Users, Star } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderCta from '../components/HeaderCta';

const About = () => {
  return (
    <div>
      <HeaderCta></HeaderCta>
      <Navbar />

      {/* Our Story Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <button className=" text-black text-5xl font-bold px-4 py-1">Founders</button>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-600">
              Launched in 2025, Exclusive is South Asia's premier online shopping marketplace with an active presence in India. Supported by a wide range of tailored marketing, data, and service solutions, Exclusive has 10,500 sellers and 300 brands and serves 3 million customers across the region.
            </p>
            <p className="text-gray-600">
              Exclusive has more than 1 Million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in categories ranging from consumer.
            </p>
          </div>
          <img
            src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Story"
            className="w-full md:w-1/2 rounded-lg"
          />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
          <div className="bg-gray-100 p-6 text-center rounded">
            <ShoppingCart className="mx-auto mb-2 text-purple-600" />
            <h3 className="font-bold text-xl">10.5k</h3>
            <p>Sellers active on our site</p>
          </div>
          <div className="bg-red-500 text-white p-6 text-center rounded">
            <Star className="mx-auto mb-2" />
            <h3 className="font-bold text-xl">33k</h3>
            <p>Monthly Product Sale</p>
          </div>
          <div className="bg-gray-100 p-6 text-center rounded">
            <Users className="mx-auto mb-2 text-purple-600" />
            <h3 className="font-bold text-xl">45.5k</h3>
            <p>Customers active on our site</p>
          </div>
          <div className="bg-gray-100 p-6 text-center rounded">
            <ShoppingCart className="mx-auto mb-2 text-purple-600" />
            <h3 className="font-bold text-xl">25k</h3>
            <p>Annual gross sale on our site</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: 'Vansh Sharma',
              position: 'Founder & Chairman',
              img: 'https://randomuser.me/api/portraits/men/1.jpg',
            },
            {
              name: 'Emma Watson',
              position: 'Managing Director',
              img: 'https://randomuser.me/api/portraits/women/2.jpg',
            },
            {
              name: 'Will Smith',
              position: 'Product Designer',
              img: 'https://randomuser.me/api/portraits/men/3.jpg',
            },
          ].map((member, idx) => (
            <div key={idx} className="text-center space-y-4">
              <img src={member.img} alt={member.name} className="w-40 h-40 rounded-full mx-auto object-cover" />
              <h4 className="text-xl font-semibold">{member.name}</h4>
              <p className="text-gray-600">{member.position}</p>
              <div className="flex justify-center gap-4 text-purple-600">
                <i className="lab la-facebook-f"></i>
                <i className="lab la-twitter"></i>
                <i className="lab la-linkedin-in"></i>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="flex items-center gap-4">
            <Truck className="text-purple-600" />
            <div>
              <h4 className="font-bold">FREE AND FAST DELIVERY</h4>
              <p>Free delivery for all orders over $140</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Clock3 className="text-purple-600" />
            <div>
              <h4 className="font-bold">24/7 CUSTOMER SERVICE</h4>
              <p>Friendly 24/7 customer support</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <ShieldCheck className="text-purple-600" />
            <div>
              <h4 className="font-bold">MONEY BACK GUARANTEE</h4>
              <p>We return money within 30 days</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;