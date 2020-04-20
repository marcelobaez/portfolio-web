import React from "react";

const Card = ({ category, owner, name, images, avatar }) => {
  return (
    <div>
      <div className='relative'>
        <img
          className='h-56 w-full object-cover rounded-lg'
          src={images[0]}
          alt='Sunset in the mountains'
        />
        <div className='absolute text-white inset-x-0 top-0 p-2'>
          <p className='text-xs font-bold'>{category}</p>
          <p className='font-extrabold text-xl'>{name}</p>
        </div>
      </div>
      <div className='py-4'>
        <div className='flex items-center'>
          <img
            className='w-6 h-6 rounded-full mr-4'
            src={avatar}
            alt='Avatar'
          />
          <div className='text-sm font-bold'>
            <p className='text-gray-900 leading-none'>{owner}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
