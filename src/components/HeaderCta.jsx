import React from 'react';

const HeaderCta = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white flex justify-center items-center h-12 text-[10px] sm:text-sm z-50">
      <h1 className="text-center">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! 
        <a href='/buysell'>
          <span className="font-bold text-yellow-300 ml-2 cursor-pointer">Shop Now</span>
        </a>
      </h1>
    </div>
  );
};

export default HeaderCta;
