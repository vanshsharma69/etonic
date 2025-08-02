// src/pages/Cart.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateQuantity,
  removeFromCart,
  clearCart,
} from '../redux/slices/cartSlice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleQtyChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      <Navbar />

      <div className="p-6 md:p-10 min-h-screen max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-gray-700">Shopping Cart</h2>

        {cartItems.length === 0 ? (
          <div className="text-center text-gray-500 py-20">
            <p className="mb-4 text-lg">Your cart is currently empty.</p>
            <Link
              to="/"
              className="inline-block px-5 py-2 text-white bg-red-500 hover:bg-red-600 rounded"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <>
            {/* Cart Table */}
            <div className="overflow-x-auto shadow rounded-lg bg-white">
              <table className="min-w-full text-sm text-left">
                <thead className="bg-gray-100 border-b">
                  <tr>
                    <th className="px-6 py-3">Product</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Quantity</th>
                    <th className="px-6 py-3">Subtotal</th>
                    <th className="px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 flex items-center gap-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-14 h-14 object-contain rounded border"
                        />
                        <span>{item.title}</span>
                      </td>
                      <td className="px-6 py-4">${item.price.toFixed(2)}</td>
                      <td className="px-6 py-4">
                        <select
                          className="border rounded px-3 py-1"
                          value={item.quantity}
                          onChange={(e) => handleQtyChange(item.id, e.target.value)}
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i} value={i + 1}>
                              {i + 1}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-6 py-4">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleRemove(item.id)}
                          className="text-red-500 hover:text-red-700 text-xs"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Summary Section */}
            <div className="flex flex-col-reverse md:flex-row justify-between mt-10 gap-8">
              {/* Left: Coupon + Back */}
              <div className="md:w-1/2 flex flex-col gap-4">
                <Link
                  to="/"
                  className="inline-block text-sm px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 w-fit"
                >
                  ← Continue Shopping
                </Link>

                <div className="flex gap-2 mt-4">
                  <input
                    type="text"
                    placeholder="Enter coupon"
                    className="border px-4 py-2 rounded w-full"
                  />
                  <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                    Apply
                  </button>
                </div>
              </div>

              {/* Right: Totals */}
              <div className="md:w-1/3 bg-white border p-6 rounded shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
                <div className="flex justify-between py-2 border-b text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 border-b text-sm">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between py-2 font-semibold text-base">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <button className="w-full mt-5 bg-red-500 text-white py-2 rounded hover:bg-red-600">
                  Proceed to Checkout
                </button>
                <button
                  onClick={() => dispatch(clearCart())}
                  className="w-full mt-2 border border-red-500 text-red-500 py-2 rounded hover:bg-red-50"
                >
                  Clear Cart
                </button>
              </div>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default Cart;
