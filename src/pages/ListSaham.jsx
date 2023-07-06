import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function ListSaham() {
  const [emiten, setEmiten] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      'https://api.goapi.id/v1/stock/idx/companies?api_key=w7paqZoA95Ef7iSmd9DInHZUDNRUFH'
    )
      .then((response) => response.json())
      .then((data) => {
        setEmiten(data.data.results.slice(0, 10));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(true);
      });
  }, []);

  return (
    <div className='flex items-center justify-center mt-4'>
      <div className='w-full max-w-md p-4 rounded-lg shadow sm:p-8 bg-gray-700 border-gray-600'>
        <div className='flex items-center justify-between mb-4'>
          <h5 className='text-xl font-bold leading-none text-white'>
            Daftar Saham
          </h5>
          <p className='text-xs font-medium select-none text-white'>
            Last Updated: {lastUpdate}
          </p>
        </div>
        <div className='h-96 overflow-auto custom-scrollbar'>
          {isLoading ? (
            <div className='space-y-4 animate-pulse'>
              {[...Array(4)].map((_, index) => (
                <div key={index} className='py-3 sm:py-4 mr-2'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <div className='w-12 h-12 bg-gray-600 rounded-md'></div>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <div className='h-4 w-1/4 bg-gray-600 rounded mb-1'></div>
                      <div className='h-4 w-2/3 bg-gray-600 rounded'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <ul role='list' className='divide-y divide-gray-700'>
              {emiten.map((saham, index) => (
                <li key={index} className='py-3 sm:py-4 mr-2'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-shrink-0'>
                      <img
                        className='w-12 h-12 rounded-md'
                        src={saham.logo}
                        alt={`${saham.name} image`}
                      />
                    </div>
                    <div className='flex-1 min-w-0'>
                      <Link
                        to={`/predict/${saham.ticker}`}
                        className='text-sm font-medium truncate text-white hover:underline'
                      >
                        {saham.ticker}
                      </Link>
                      <p className='text-sm truncate text-gray-400'>
                        {saham.name}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListSaham;
