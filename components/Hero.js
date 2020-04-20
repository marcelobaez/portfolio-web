import React from "react";

const Hero = () => {
  return (
    <div className='mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28'>
      <div className='sm:text-center lg:text-left'>
        <h2 className='text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl'>
          La plataforma para conocer a quienes emprenden
          <br className='xl:hidden' />
          <span className='text-green-600'> en tu ciudad</span>
        </h2>
        <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
          Les damos visibilidad a todos aquellos que necesitan trabajar en esta
          situación tan particular.
        </p>
        <div className='mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start'>
          <div className='rounded-md shadow'>
            <a
              href='#'
              className='w-full flex items-center justify-center px-8 py-3 border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-3 md:text-base md:px-6'
            >
              Quiero registrarme!
            </a>
          </div>
          <div className='mt-3 sm:mt-0 sm:ml-3'>
            <a
              href='#'
              className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-green-700 bg-green-100 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:shadow-outline focus:border-green-300 transition duration-150 ease-in-out md:py-3 md:text-base md:px-6'
            >
              Ver emprendedores
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
