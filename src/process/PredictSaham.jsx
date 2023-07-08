import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PredictSaham() {
  const { ticker } = useParams();
  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [prediction, setPrediction] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const historyResponse = await fetch(
          `https://api.goapi.id/v1/stock/idx/${ticker}/historical?&api_key=w7paqZoA95Ef7iSmd9DInHZUDNRUFH`
        );
        if (!historyResponse.ok) {
          throw new Error('Failed to fetch historical data');
        }
        const historyData = await historyResponse.json();
        setHistoryData(historyData.data.results);

        const predictionResponse = await fetch(
          `https://naivebayessaham.aleksanderphan.repl.co/predict/${ticker}`
        );
        if (!predictionResponse.ok) {
          throw new Error('Failed to fetch prediction data');
        }
        const predictionData = await predictionResponse.json();
        setPrediction(predictionData);

        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [ticker]);

  return (
    <div className='w-full flex items-center justify-center mt-4'>
      <div className='w-full max-w-md flex flex-col items-center'>
        {/* Prediction Result Card */}
        <div className='w-full max-w-md mb-3 p-2 border rounded-lg shadow sm:p-6 bg-gray-700 border-gray-600'>
          <h1>Prediksi Untuk Saham {ticker}</h1>
          {isLoading ? (
            <div>
              <div className='h-3 w-1/2 bg-gray-600 rounded mt-1 animate-pulse'></div>
              <div className='h-3 w-1/2 bg-gray-600 rounded mt-1 animate-pulse'></div>
            </div>
          ) : (
            <div>
              <h1 className='font-bold'>
                Diprediksikan {prediction.prediction}
              </h1>
              <h1 className='font-thin'>
                Dengan Risiko Turun Sebesar {prediction.probability.Turun}
              </h1>
            </div>
          )}
        </div>

        {/* History Card */}
        <div className='w-full max-w-md mb-28 p-4 border rounded-lg shadow sm:p-6 bg-gray-700 border-gray-600'>
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
