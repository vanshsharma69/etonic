import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderCta from '../components/HeaderCta';

const Profile = () => {
  const [user, setUser] = useState({
    name: 'Vansh Sharma',
    email: 'vansh@gmail.com',
    phone: '08954299517',
    countryCode: '+91',
    gender: 'Male',
    createdAt: 'Sun 3 August, 2025',
    avatar: '',
    address: {
      street: '123 Main St',
      city: 'New Delhi',
      state: 'Delhi',
      postalCode: '110001',
      country: 'India',
    },
  });

  const [isEditing, setIsEditing] = useState(false);
  const [emails, setEmails] = useState([{ email: user.email, addedAt: user.createdAt }]);
  const [newEmail, setNewEmail] = useState('');
  const [showEmailInput, setShowEmailInput] = useState(false);

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleAddressChange = (e) => {
    setUser({
      ...user,
      address: { ...user.address, [e.target.name]: e.target.value },
    });
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleAddEmail = () => {
    if (!newEmail.trim()) return;
    setEmails([...emails, { email: newEmail.trim(), addedAt: new Date().toDateString() }]);
    setNewEmail('');
    setShowEmailInput(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderCta />
      <Navbar />

      <main className="flex-1 pt-16 px-4 md:px-0 bg-white">
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Welcome, {user.name.split(' ')[0]}
          </h1>
          <p className="text-sm text-gray-500 mb-6">{user.createdAt}</p>
          <div className="bg-white rounded-xl shadow-md border px-6 py-6 relative">
            <button
              onClick={toggleEdit}
              className="absolute right-6 top-6 bg-blue-600 text-white text-sm px-4 py-1 rounded-md hover:bg-blue-700"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>

            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-xl font-semibold text-black">
                {user.name[0]}
              </div>
              <div>
                <h2 className="text-lg font-semibold">{user.name}</h2>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-gray-50 border rounded-md px-3 py-2 mt-1 text-sm"
                  value={user.name}
                  disabled={!isEditing}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Gender</label>
                <select
                  name="gender"
                  className="w-full bg-gray-50 border rounded-md px-3 py-2 mt-1 text-sm"
                  disabled={!isEditing}
                  value={user.gender}
                  onChange={handleInputChange}
                >
                  <option>Not specified</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700">Phone</label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    disabled={!isEditing}
                    className="bg-gray-50 border rounded-md px-3 py-2 text-sm text-gray-600 w-1/3"
                    value={user.countryCode}
                    onChange={handleInputChange}
                  >
                    <option value="+91">IN +91 (India)</option>
                    <option value="+1">US +1</option>
                  </select>
                  <input
                    type="text"
                    name="phone"
                    className="flex-1 bg-gray-50 border rounded-md px-3 py-2 text-sm"
                    value={user.phone}
                    disabled={!isEditing}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* Address Fields */}
              <div>
                <h3 className="text-sm font-semibold mt-6 mb-2">Address</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-700">Street</label>
                    <input
                      type="text"
                      name="street"
                      className="w-full bg-gray-50 border rounded-md px-3 py-2 mt-1 text-sm"
                      value={user.address.street}
                      disabled={!isEditing}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">City</label>
                    <input
                      type="text"
                      name="city"
                      className="w-full bg-gray-50 border rounded-md px-3 py-2 mt-1 text-sm"
                      value={user.address.city}
                      disabled={!isEditing}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">State</label>
                    <input
                      type="text"
                      name="state"
                      className="w-full bg-gray-50 border rounded-md px-3 py-2 mt-1 text-sm"
                      value={user.address.state}
                      disabled={!isEditing}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-700">Postal Code</label>
                    <input
                      type="text"
                      name="postalCode"
                      className="w-full bg-gray-50 border rounded-md px-3 py-2 mt-1 text-sm"
                      value={user.address.postalCode}
                      disabled={!isEditing}
                      onChange={handleAddressChange}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm text-gray-700">Country</label>
                    <input
                      type="text"
                      name="country"
                      className="w-full bg-gray-50 border rounded-md px-3 py-2 mt-1 text-sm"
                      value={user.address.country}
                      disabled={!isEditing}
                      onChange={handleAddressChange}
                    />
                  </div>
                </div>
              </div>

              {/* Emails */}
             
              <div>
                <h3 className="text-sm font-semibold mt-6 mb-2">My email Address</h3>
                {emails.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-100 flex items-center p-4 rounded-md justify-between mb-2"
                  >
                    <div>
                      <p className="text-sm font-medium">{item.email}</p>
                      <p className="text-xs text-gray-500">{item.addedAt}</p>
                    </div>
                  </div>
                ))}

                {showEmailInput ? (
                  <div className="flex items-center mt-2 gap-2">
                    <input
                      type="email"
                      placeholder="Enter new email"
                      className="flex-1 px-3 py-2 border rounded-md text-sm"
                      value={newEmail}
                      onChange={(e) => setNewEmail(e.target.value)}
                    />
                    <button
                      onClick={handleAddEmail}
                      className="bg-blue-600 text-white px-3 py-2 rounded-md text-sm"
                    >
                      Add
                    </button>
                    <button
                      onClick={() => setShowEmailInput(false)}
                      className="text-sm text-gray-500 hover:underline"
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    className="mt-4 w-full bg-blue-100 text-blue-600 py-2 rounded-md text-sm hover:bg-blue-200"
                    onClick={() => setShowEmailInput(true)}
                  >
                    + Add Email Address
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main> 

      <Footer />
    </div>
  );
};

export default Profile;
