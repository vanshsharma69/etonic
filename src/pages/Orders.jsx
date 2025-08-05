import React from 'react';
import { useSelector } from 'react-redux';
import { PackageCheck, Clock, XCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeaderCta from '../components/HeaderCta';

const Orders = () => {
  const orders = useSelector((state) => state.orders?.list || []);

  const getIcon = (status) => {
    switch (status) {
      case 'Delivered':
        return <PackageCheck className="text-green-600 w-6 h-6" />;
      case 'Processing':
        return <Clock className="text-yellow-500 w-6 h-6" />;
      case 'Cancelled':
      default:
        return <XCircle className="text-red-600 w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <HeaderCta />
      <Navbar />

      <main className="w-11/12 max-w-6xl mx-auto py-10 flex-grow h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center">Your Orders</h2>

        {orders.length === 0 ? (
          <p className="text-center text-gray-600">You have no orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-5 shadow rounded-xl space-y-4 border"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {getIcon(order.status)}
                    <div>
                      <p className="font-semibold text-gray-800">Order Date: {order.date}</p>
                      <p className="text-sm text-gray-500">Payment: {order.payment}</p>
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
                    <p className="text-gray-800 font-medium">Total: ₹{order.price}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Products:</h4>
                  <ul className="list-disc list-inside text-sm text-gray-600">
                    {order.products.map((item, idx) => (
                      <li key={idx}>
                        {item.name} × {item.quantity}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Shipping Address:</h4>
                  <p className="text-sm text-gray-600">
                    {order.address.street}, {order.address.city}, {order.address.state} -{' '}
                    {order.address.postalCode}, {order.address.country}
                  </p>
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
