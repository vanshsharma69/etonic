import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Store, Building2, GraduationCap } from 'lucide-react'; 

const BecomePartner = () => {
  const [selectedOption, setSelectedOption] = useState('shop'); 
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted for', selectedOption, formData);
    alert('Form submitted successfully!');
    setFormData({});
  };

  const commonInput = (name, placeholder, type = 'text') => (
    <input
      type={type}
      name={name}
      value={formData[name] || ''}
      onChange={handleChange}
      placeholder={placeholder}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  );

  const renderForm = () => {
    switch (selectedOption) {
      case 'shop':
        return (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {commonInput('name', 'Full Name')}
            {commonInput('email', 'Email', 'email')}
            {commonInput('phone', 'Phone Number', 'tel')}
            {commonInput('shopName', 'Shop Name')}
            {commonInput('address', 'Address')}
            {commonInput('pincode', 'Pincode')}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        );
      case 'pg':
        return (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {commonInput('name', 'Full Name')}
            {commonInput('phone', 'Phone Number', 'tel')}
            {commonInput('address', 'Address')}
            {commonInput('roomCount', 'No. of Rooms Available')}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        );
      case 'ambassador':
        return (
          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            {commonInput('name', 'Full Name')}
            {commonInput('email', 'Email', 'email')}
            {commonInput('phone', 'Phone Number', 'tel')}
            {commonInput('college', 'College Name')}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4">
            Become Our Partner
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Collaborate with us to sell your products, rent your PGs or rooms, or represent your college as an ambassador.
          </p>

          {/* Option Cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {[
              { id: 'shop', label: 'Sell Products', icon: <Store size={20} /> },
              { id: 'pg', label: 'Rent PG/Rooms', icon: <Building2 size={20} /> },
              { id: 'ambassador', label: 'College Ambassador', icon: <GraduationCap size={20} /> },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => {
                  setSelectedOption(option.id);
                  setFormData({});
                }}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium shadow-md transition-all duration-200 ${
                  selectedOption === option.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-100'
                }`}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border">
            {renderForm()}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default BecomePartner;
