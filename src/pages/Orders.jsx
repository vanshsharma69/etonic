import React from 'react';
import { PackageCheck, Clock, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderCta from '../components/HeaderCta';

const orders = [
  {
    id: 1,
    product: 'Wireless Headphones',
    date: 'July 25, 2025',
    status: 'Delivered',
    price: '₹2,999',
    icon: <PackageCheck className="text-green-600 w-6 h-6" />,
  },
  {
    id: 2,
    product: 'Bluetooth Speaker',
    date: 'July 28, 2025',
    status: 'Processing',
    price: '₹1,499',
    icon: <Clock className="text-yellow-500 w-6 h-6" />,
  },
  {
    id: 3,
    product: 'USB-C Cable',
    date: 'July 30, 2025',
    status: 'Cancelled',
    price: '₹299',
    icon: <XCircle className="text-red-600 w-6 h-6" />,
  },
];

const Orders = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <HeaderCta></HeaderCta>
      <Navbar />

      <main className="w-11/12 max-w-4xl mx-auto py-10 flex-grow">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Orders</h2>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">You have no orders yet.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between bg-white shadow p-4 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  {order.icon}
                  <div>
                    <h4 className="text-lg font-semibold">{order.product}</h4>
                    <p className="text-sm text-gray-500">{order.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p
                    className={`font-semibold ${
                      order.status === 'Delivered'
                        ? 'text-green-600'
                        : order.status === 'Processing'
                        ? 'text-yellow-500'
                        : 'text-red-600'
                    }`}
                  >
                    {order.status}
                  </p>
                  <p className="text-gray-700">{order.price}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Orders;
