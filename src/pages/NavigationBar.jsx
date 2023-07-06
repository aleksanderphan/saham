import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className='fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-gray-700 border-2 border-slate-600'>
      <div className='grid h-full max-w-lg grid-cols-3 mx-auto'>
        <Link
          key='home'
          to='/'
          className='inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-800 group'
        >
          <button
            data-tooltip-target='tooltip-home'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-800 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-400 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z' />
            </svg>
            <span className='sr-only'>Home</span>
          </button>
          <div
            id='tooltip-home'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip bg-gray-700'
          >
            Home
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
        </Link>
        <Link
          key='prediction'
          to='/prediction'
          className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group'
        >
          <button
            data-tooltip-target='tooltip-prediction'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group'
          >
            <svg
              className='w-6 h-6 mb-1 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#9ca3af'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M3 3v18h18' />
              <path d='M18.7 8l-5.1 5.2-2.8-2.7L7 14.3' />
            </svg>
            <span className='sr-only'>Prediction</span>
          </button>
          <div
            id='tooltip-prediction'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip bg-gray-700'
          >
            Prediction
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
        </Link>
        <Link
          key='about'
          to='/about'
          className='inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-800 group'
        >
          <button
            data-tooltip-target='tooltip-profile'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-800 group'
          >
            <svg
              className='w-6 h-6 mb-1 text-gray-400'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='#9ca3af'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <circle cx='12' cy='12' r='10'></circle>
              <line x1='12' y1='16' x2='12' y2='12'></line>
              <line x1='12' y1='8' x2='12.01' y2='8'></line>
            </svg>
            <span className='sr-only'>About</span>
          </button>
          <div
            id='tooltip-profile'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip bg-gray-700'
          >
            About
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
