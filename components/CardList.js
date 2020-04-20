import React from "react";

const CardList = ({ children }) => {
  return (
    <div className='bg-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 p-12'>
      {children}
    </div>
  );
};

export default CardList;
