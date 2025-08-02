import React from 'react';
import ProductCard from '../ui/ProductCard';
import { flashSaleProducts } from '../data/flashSaleData';

const FlashSale = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto mt-10 sm:mt-20 mb-10">
      
      {/* Heading */}
      <div className="flex flex-row items-center sm:items-start gap-4 mb-8 text-center">
        <div className="bg-red-800 w-4 h-8"></div>
        <h1 className="font-semibold text-3xl leading-tight">Flash Sales</h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
        {flashSaleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="bg-red-600 text-white px-6 py-2 hover:bg-red-700 transition rounded-md">
          View All Products
        </button>
      </div>

      {/* Divider */}
      <div className="bg-gray-300 h-[1px] max-w-6xl w-full mx-auto mt-12"></div>
    </div>
  );
};

export default FlashSale;
