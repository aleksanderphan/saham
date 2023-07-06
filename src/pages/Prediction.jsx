import React from 'react';
import { useParams } from 'react-router-dom';

function Prediction() {
  const { ticker } = useParams();

  return (
    <div>
      <h1>New Page</h1>
      <p>Ticker: {ticker}</p>
    </div>
  );
}

export default Prediction;
