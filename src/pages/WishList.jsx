import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from '../ui/ProductCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { HeartOff } from 'lucide-react';
import HeaderCta from '../components/HeaderCta';

const WishList = () => {
  const wishlist = useSelector((state) => state.wishlist.items);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <HeaderCta></HeaderCta>
      <Navbar />

      <main className="flex-grow w-11/12 max-w-6xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-gray-500">
            <HeartOff className="w-16 h-16 mb-4" />
            <p className="text-lg">Looks like your wishlist is empty.</p>
            <p className="text-sm mt-1">Start adding items you love!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default WishList;
