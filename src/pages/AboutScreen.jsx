import React from 'react';

function AboutScreen() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <p className='group relative block w-40 sm:w-52 lg:w-64'>
        <span className='absolute rounded-lg inset-0 border-2 border-dashed border-gray-600'></span>
        <div className='relative rounded-lg flex h-full transform items-end border-2 border-gray-600 bg-gray-700 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
          <div className='p-2 sm:p-4 lg:p-6'>
            <h2 className='text-base font-medium sm:text-lg text-center'>
              John Doe ✨
            </h2>
          </div>
        </div>
      </p>
    </div>
  );
}

export default AboutScreen;
