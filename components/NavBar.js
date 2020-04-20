import React from "react";

const NavBar = ({ setOpen }) => {
  return (
    <div className='pt-6 px-4 sm:px-6 lg:px-8'>
      <nav className='relative flex items-center justify-between sm:h-10 lg:justify-start'>
        <div className='flex items-center flex-grow flex-shrink-0 lg:flex-grow-0'>
          <div className='flex items-center justify-between w-full md:w-auto'>
            <a href='#'>
              <img className='h-8 w-auto sm:h-10' src='/img/logo2.svg' alt='' />
            </a>
            <div className='-mr-2 flex items-center md:hidden'>
              <button
                onClick={() => setOpen(true)}
                type='button'
                className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out'
              >
                <svg
                  className='h-6 w-6'
                  stroke='currentColor'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='hidden md:block md:ml-10 md:pr-4'>
          <a
            href='#'
            className='font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
          >
            Emprendedores
          </a>
          <a
            href='#'
            className='ml-8 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out'
          >
            ¿Quienes somos?
          </a>
          <a
            href='#'
            className='ml-8 font-medium text-green-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700 transition duration-150 ease-in-out'
          >
            Registrarme
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
