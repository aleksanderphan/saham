import React from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <section className='h-screen'>
      <div className='flex flex-col justify-center items-center h-full py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl text-white'>
          Judul Projek
        </h1>
        <p className='mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48 text-gray-400'>
          Deskripsi Projek
        </p>
        <div className='flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4'>
          <Link key='prediction' to='/prediction'>
            <p className='inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:ring-gray-900'>
              Coba Sekarang
              <svg
                className='w-3.5 h-3.5 ml-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 5h12m0 0L9 1m4 4L9 9'
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeScreen;
