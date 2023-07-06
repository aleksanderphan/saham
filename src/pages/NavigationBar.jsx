import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <div className='fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 rounded-full bottom-4 left-1/2 bg-gray-700 border-gray-600'>
      <div className='grid h-full max-w-lg grid-cols-4 mx-auto'>
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
          key='saham'
          to='/listsaham'
          className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group'
        >
          <button
            data-tooltip-target='tooltip-wallet'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-400 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z' />
              <path d='M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z' />
            </svg>
            <span className='sr-only'>Wallet</span>
          </button>

          <div
            id='tooltip-wallet'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip bg-gray-700'
          >
            Wallet
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
              className='w-6 h-6 mb-1 text-gray-400 '
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
          key='account'
          to='/account'
          className='inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-800 group'
        >
          <button
            data-tooltip-target='tooltip-profile'
            type='button'
            className='inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-800 group'
          >
            <svg
              className='w-5 h-5 mb-1 text-gray-400 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='currentColor'
              viewBox='0 0 20 20'
            >
              <path d='M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z' />
            </svg>
            <span className='sr-only'>Profile</span>
          </button>
          <div
            id='tooltip-profile'
            role='tooltip'
            className='absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 rounded-lg shadow-sm opacity-0 tooltip bg-gray-700'
          >
            Profile
            <div className='tooltip-arrow' data-popper-arrow></div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar;
