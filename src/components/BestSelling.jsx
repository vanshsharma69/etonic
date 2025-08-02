import React from 'react';
import ProductCard from '../ui/ProductCard';
import { flashSaleProducts } from '../data/flashSaleData';

const BestSelling = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto mt-20 mb-10">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-green-600 w-4 h-8"></div>
            <h1 className="font-semibold text-3xl leading-tight">Best Selling Products</h1>
          </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 place-items-center">
            {flashSaleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-10">
            <button className="bg-green-600 text-white px-6 py-2 hover:bg-green-700 transition">
              View All Products
            </button>
          </div>
          <div className='bg-gray-300 h-[1px] max-w-6xl w-11/12 mx-auto mt-12'></div>
        </div>
  )
}

export default BestSelling
