import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PredictSaham() {
  const { ticker } = useParams();
  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.goapi.id/v1/stock/idx/${ticker}/historical?&api_key=w7paqZoA95Ef7iSmd9DInHZUDNRUFH`
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setHistoryData(data.data.results);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [ticker]);

  return (
    <div className='flex items-center justify-center mt-4'>
      <div className='flex flex-col items-center'>
        {/* Prediction Result Card */}
        <div className='w-full max-w-md mb-3 p-2 border rounded-lg shadow sm:p-6 bg-gray-800 border-gray-700'>
          <h1>Prediksi Untuk Saham {ticker} Hari Ini</h1>
          <h1>Diprediksikan: </h1>
        </div>

        {/* History Card */}
        <div className='w-full max-w-md mb-28 p-4 border rounded-lg shadow sm:p-6 bg-gray-800 border-gray-700'>
          <div className='flex items-center justify-between'>
            <h5 className='text-lg font-bold leading-none text-white'>
              Histori Saham
            </h5>
          </div>
          {isLoading ? (
            <div className='space-y-4 animate-pulse'>
              {[...Array(4)].map((_, index) => (
                <div key={index} className='py-3 sm:py-4 mr-2'>
                  <div className='flex items-center space-x-4'>
                    <div className='flex-1 min-w-0'>
                      <div className='h-4 w-1/4 bg-gray-600 rounded mb-1'></div>
                      <div className='h-4 w-2/3 bg-gray-600 rounded'></div>
                    </div>
                    <div className='inline-flex items-center text-base font-semibold text-white'>
                      <div className='h-4 bg-gray-600 rounded w-16'></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className='flow-root'>
              <ul role='list' className='divide-y divide-gray-700'>
                {historyData.map((index) => (
                  <li key={index} className='py-3'>
                    <div className='flex items-center space-x-4'>
                      <div className='flex-1 min-w-0'>
                        <p className='text-sm font-medium truncate text-white'>
                          {index.date}
                        </p>
                        <p className='text-sm  truncate text-gray-400'>
                          Open: {Math.floor(index.open)} Close:{' '}
                          {Math.floor(index.close)}
                        </p>
                      </div>
                      <div className='inline-flex items-center text-base font-semiboldtext-white'>
                        {Math.floor(index.close) >= Math.floor(index.open)
                          ? 'Naik'
                          : 'Turun'}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default PredictSaham;
