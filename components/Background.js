import React from "react";

const Background = () => {
  return (
    <div className='lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2'>
      <img
        className='h-56 w-full object-cover sm:h-72 md:h-108 lg:w-full lg:h-full'
        src='https://source.unsplash.com/q5fqbrQVHLY/?w=800'
        alt=''
      />
    </div>
  );
};

export default Background;
