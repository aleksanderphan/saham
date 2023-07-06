import React, { useState, useEffect } from 'react';

function ListSaham() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const response = await fetch('/pages/customers.json'); // Update the path to your JSON file
        const data = await response.json();
        setCustomers(data);
      } catch (error) {
        console.log('Error fetching customers:', error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className='w-full max-w-md p-4 rounded-lg shadow sm:p-8 bg-gray-700 border-gray-600'>
      <div className='flex items-center justify-between mb-4'>
        <h5 className='text-xl font-bold leading-none text-white'>
          Daftar Saham
        </h5>
        <a href='#' className='text-sm font-medium hover:underline text-white'>
          View all
        </a>
      </div>
      <div className='flow-root'>
        <ul role='list' className='divide-y divide-gray-700'>
          {customers.map((customer, index) => (
            <li key={index} className='py-3 sm:py-4'>
              <div className='flex items-center space-x-4'>
                <div className='flex-shrink-0'>
                  <img
                    className='w-8 h-8 rounded-full'
                    src={customer.image}
                    alt={`${customer.name} image`}
                  />
                </div>
                <div className='flex-1 min-w-0'>
                  <p className='text-sm font-medium  truncate text-white'>
                    {customer.name}
                  </p>
                  <p className='text-sm  truncate text-gray-400'>
                    {customer.email}
                  </p>
                </div>
                <div className='inline-flex items-center text-base font-semibold text-white'>
                  {customer.amount}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ListSaham;
