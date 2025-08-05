import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../redux/slices/orderSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderCta from '../components/HeaderCta';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);

  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const [isEditing, setIsEditing] = useState(true);
  const [paymentMode, setPaymentMode] = useState('');

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!cartItems.length) {
      alert('Your cart is empty.');
      return;
    }

    const requiredFields = ['street', 'city', 'state', 'postalCode', 'country'];
    for (const field of requiredFields) {
      if (!address[field]) {
        alert('Please fill in your full address.');
        return;
      }
    }

    if (!paymentMode) {
      alert('Please select a payment method.');
      return;
    }

    const newOrder = {
      id: Date.now(),
      products: cartItems,
      date: new Date().toLocaleDateString(),
      status: paymentMode === 'cod' ? 'Processing' : 'Pending Payment',
      price: cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0),
      address,
      payment: paymentMode,
    };

    dispatch(placeOrder(newOrder));

    if (paymentMode === 'cod') {
      alert('Order placed successfully with Cash on Delivery!');
      navigate('/orders');
    } else {
      alert('Online payment coming soon.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <HeaderCta />
      <Navbar />

      <main className="flex-1 pt-10 px-4 md:px-0 bg-white">
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

          <div className="bg-white rounded-xl shadow-md border px-6 py-6 relative">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="absolute right-6 top-6 bg-blue-600 text-white text-sm px-4 py-1 rounded-md hover:bg-blue-700"
            >
              {isEditing ? 'Save' : 'Edit'}
            </button>

            <div>
              <h3 className="text-md font-semibold mt-4 mb-2">Delivery Address</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['street', 'city', 'state', 'postalCode', 'country'].map((field) => (
                  <div key={field} className={field === 'country' ? 'md:col-span-2' : ''}>
                    <label className="block text-sm text-gray-700 capitalize">{field}</label>
                    <input
                      type="text"
                      name={field}
                      className="w-full bg-gray-50 border rounded-md px-3 py-2 mt-1 text-sm"
                      value={address[field]}
                      disabled={!isEditing}
                      onChange={handleAddressChange}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold mb-2">Payment Method</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    onChange={() => setPaymentMode('online')}
                    checked={paymentMode === 'online'}
                  />
                  Online Payment
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    onChange={() => setPaymentMode('cod')}
                    checked={paymentMode === 'cod'}
                  />
                  Cash on Delivery (COD)
                </label>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              className="mt-8 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            >
              Place Order
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
