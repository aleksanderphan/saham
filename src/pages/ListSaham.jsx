import React, { useState, useEffect } from 'react';

function ListSaham() {
  const [emiten, setEmiten] = useState([]);
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    fetch(
      'https://api.goapi.id/v1/stock/idx/companies?api_key=w7paqZoA95Ef7iSmd9DInHZUDNRUFH'
    )
      .then((response) => response.json())
      .then((data) => setEmiten(data.data.results.slice(0, 10)))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleLastUpdateClick = () => {
    const currentTime = new Date().toLocaleTimeString();
    setLastUpdate(currentTime);
  };

  return (
    <div className='flex items-center justify-center mt-4'>
      <div className='w-full max-w-md p-4 rounded-lg shadow sm:p-8 bg-gray-700 border-gray-600'>
        <div className='flex items-center justify-between mb-4'>
          <h5 className='text-xl font-bold leading-none text-white'>
            Daftar Saham
          </h5>
          <p
            className='text-xs font-medium hover:underline hover:cursor-pointer select-none text-white'
            onClick={handleLastUpdateClick}
          >
            Last Update: {lastUpdate}
          </p>
        </div>
        <div className='h-96 overflow-auto custom-scrollbar'>
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
                    <p className='text-sm font-medium truncate text-white'>
                      {saham.ticker}
                    </p>
                    <p className='text-sm truncate text-gray-400'>
                      {saham.name}
                    </p>
                  </div>
                  <div
                    className={`inline-flex items-center text-base font-semibold ${
                      saham.status === 'Naik 🡑'
                        ? 'text-green-500'
                        : 'text-red-500'
                    }`}
                  >
                    {saham.status}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ListSaham;
