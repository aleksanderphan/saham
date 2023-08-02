import React from 'react';

function AboutScreen() {
  return (
    <div className='flex items-center justify-center h-screen'>
      <p className='group relative block w-10/12'>
        <span className='absolute rounded-lg inset-0 border-2 border-dashed border-gray-600'></span>
        <div className='relative rounded-lg flex h-full transform items-end border-2 border-gray-600 bg-gray-700 transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2'>
          <div className='p-2 text-base font-medium sm:text-lg text-center'>
            <h2 className='mb-2'>
              Data yang diprediksi tidak selamanya 100% akurat. Pergerakan saham
              dapat saja berubah ekstrim dikarenakan faktor eksternal,
              perhitungan pada situs ini tidak mencakup faktor - faktor
              eksternal tersebut.
            </h2>
          </div>
        </div>
      </p>
    </div>
  );
}

export default AboutScreen;
