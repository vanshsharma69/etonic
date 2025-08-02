import React from 'react';
import { CategoryData } from '../data/CategoryData';
import CategoryCards from '../ui/CategoryCards';

const CategorySection = () => {
  return (
    <div className="w-11/12 max-w-6xl mx-auto mt-20 mb-10">
      {/* Heading */}
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-blue-800 w-4 h-8"></div>
        <h1 className="font-semibold text-3xl leading-tight">Browse By Category</h1>
      </div>

      {/* Category Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {CategoryData.map((category) => (
          <CategoryCards key={category.id} category={category} />
        ))}
      </div>

      {/* button */}
      <div className='flex justify-center items-center mt-12 '>
        <button className='bg-blue-600 px-6 py-2 text-white'>
            All Category
        </button>
      </div>
      <div className='bg-gray-300 h-[1px] max-w-6xl w-11/12 mx-auto mt-12'></div>
    </div>
  );
};

export default CategorySection;
