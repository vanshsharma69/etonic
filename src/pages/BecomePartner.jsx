import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Store, Building2, GraduationCap } from 'lucide-react';
import HeaderCta from '../components/HeaderCta';

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

  const InputField = ({ name, label, placeholder, type = 'text' }) => (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={formData[name] || ''}
        onChange={handleChange}
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        required
      />
    </div>
  );

  const renderForm = () => {
    switch (selectedOption) {
      case 'shop':
        return (
          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <InputField name="name" label="Full Name" placeholder="Enter your full name" />
            <InputField name="email" label="Email" placeholder="example@example.com" type="email" />
            <InputField name="phone" label="Phone Number" placeholder="Enter your phone number" type="tel" />
            <InputField name="shopName" label="Shop Name" placeholder="Enter your shop name" />
            <InputField name="address" label="Shop Address" placeholder="Enter shop address" />
            <InputField name="pincode" label="Pincode" placeholder="Enter area pincode" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
              Submit
            </button>
          </form>
        );
      case 'pg':
        return (
          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <InputField name="name" label="Full Name" placeholder="Enter your full name" />
            <InputField name="phone" label="Phone Number" placeholder="Enter your phone number" type="tel" />
            <InputField name="address" label="PG Address" placeholder="Enter PG address" />
            <InputField name="roomCount" label="Number of Rooms" placeholder="Total rooms available" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
              Submit
            </button>
          </form>
        );
      case 'ambassador':
        return (
          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <InputField name="name" label="Full Name" placeholder="Enter your full name" />
            <InputField name="email" label="Email" placeholder="example@example.com" type="email" />
            <InputField name="phone" label="Phone Number" placeholder="Enter your phone number" type="tel" />
            <InputField name="college" label="College Name" placeholder="Enter your college name" />
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold">
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
      <HeaderCta></HeaderCta>
      <Navbar />

      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-extrabold text-center text-gray-800 mb-4">
            Become Our Partner
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Collaborate with us to sell your products, rent your PGs or rooms, or represent your college as an ambassador.
          </p>

          {/* Option Buttons */}
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

          {/* Form Section */}
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
