import React from 'react';

const CategoryCards = ({ category }) => {
  const Icon = category.icon;

  return (
    <div className="grid place-items-center gap-2 p-4 border rounded-lg shadow-sm hover:shadow-md transition h-36">
      <Icon className="w-10 h-10 text-gray-700" />
      <h3 className="text-lg font-semibold text-gray-800">{category.label}</h3>
    </div>
  );
};

export default CategoryCards;
