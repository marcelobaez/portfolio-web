import React, { useState } from "react";

const CategoryMenu = () => {
  const [openDd, setOpenDd] = useState(false);
  return (
    <nav className='bg-white'>
      <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
        <div className='relative flex items-center justify-between h-16'>
          <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
            <div className='relative inline-block text-left'>
              <div>
                <span className='rounded-md shadow-sm'>
                  <button
                    onClick={() => setOpenDd(!openDd)}
                    type='button'
                    className='inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150'
                  >
                    Populares
                    <svg
                      className='-mr-1 ml-2 h-5 w-5'
                      fill='currentColor'
                      viewBox='0 0 20 20'
                    >
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                </span>
              </div>
              {openDd && (
                <div
                  x-show='open'
                  className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg'
                >
                  <div className='rounded-md bg-white shadow-xs'>
                    <div className='py-1'>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                      >
                        Populares
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900'
                      >
                        Agregados recientemente
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className='sm:block sm:ml-6'>
              <div className='flex'>
                <a
                  href='#'
                  className='px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-900 bg-gray-200 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Todo
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Gastronomia
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Educación
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Salud
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Libreria
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Indumentaria
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Ferreteria
                </a>
                <a
                  href='#'
                  className='ml-4 px-3 py-2 rounded-md text-sm font-medium leading-5 text-gray-700 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition duration-150 ease-in-out'
                >
                  Arte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CategoryMenu;
