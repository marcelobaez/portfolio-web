import React from "react";

const ObliqueImg = () => {
  return (
    <svg
      className='hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-gray-100 transform translate-x-1/2'
      fill='currentColor'
      viewBox='0 0 100 100'
      preserveAspectRatio='none'
    >
      <polygon points='50,0 100,0 50,100 0,100' />
    </svg>
  );
};

export default ObliqueImg;
